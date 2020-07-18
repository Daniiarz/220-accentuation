import os
import shutil

import digitalocean
import docker
from bs4 import BeautifulSoup
from celery import shared_task
from decouple import config
from django.contrib.auth import get_user_model
from django.db.models import signals
from django.dispatch import receiver
from django.utils.text import slugify

from constructor.models import Site

TOKEN = config("DO_TOKEN")
DATA = config("DO_DATA")
NAME = config("DO_NAME")


def create_domain_record(title, user_id):
    domain = digitalocean.Domain(token=TOKEN, name=NAME)
    new_record = domain.create_new_domain_record(
        type='A',
        name=title,
        data=DATA
    )

    with open(f"/usr/src/conf/sites.nginx", "a") as sites_conf:
        configuration = \
f"""server {{
    listen 80;
    server_name {title}.220-accentuation.co;
    server_tokens on;
    location / {{
        root   /usr/src/sites/{title};
        index  index.html index.htm;
        try_files $uri /index.html;
    }}
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {{
        root   /usr/share/nginx/html;
    }}
}}"""
        sites_conf.write(configuration)

    user = get_user_model().objects.get(id=user_id)
    user.sites_created += 1

    site = Site.objects.create(name=title, subdomain_id=new_record["domain_record"]["id"], creator=user)
    site.save()
    user.save()


@shared_task
def create_static_site(validated_data, title, template_name, user_id):
    # Stack overflow code
    slug_title = slugify(title.lower())

    root_src_dir = rf'/usr/src/backend/templates/{template_name}'  # Path/Location of the source directory
    root_dst_dir = fr'/usr/src/sites/{slug_title}'  # Path to the destination folder

    for src_dir, dirs, files in os.walk(root_src_dir):
        dst_dir = src_dir.replace(root_src_dir, root_dst_dir, 1)
        if not os.path.exists(dst_dir):
            os.makedirs(dst_dir)
        for file_ in files:
            src_file = os.path.join(src_dir, file_)
            dst_file = os.path.join(dst_dir, file_)
            if os.path.exists(dst_file):
                os.remove(dst_file)
            shutil.copy(src_file, dst_dir)

    with open(f'{root_dst_dir}/index.html') as inf:
        txt = inf.read()
        soup = BeautifulSoup(txt, features="html.parser")

    for key, value in validated_data.items():
        soup.find(id=key).string = value

    html_title = soup.find("title")
    html_title.string = validated_data["brandText"]

    # save the file again
    with open(f'{root_dst_dir}/index.html', "w") as outf:
        outf.write(str(soup))

    create_domain_record(slug_title, user_id)

    client = docker.DockerClient(base_url='unix://usr/src/run/docker.sock')

    container = client.containers.get("220-accentuation_sites-nginx_1")

    container.restart(timeout=0)


@shared_task
def delete_user_created_site(site_name, domain_id):
    slug_title = slugify(site_name.lower())
    site_dir = fr'/usr/src/sites/{slug_title}'
    shutil.rmtree(site_dir)

    with open("/usr/src/conf/sites.nginx", "r") as inf:
        sites_config = list(inf.readlines())
        pointer = 0
        for i, line in enumerate(sites_config):
            if slug_title in line:
                pointer = i
                break

    with open("/usr/src/conf/sites.nginx", "w") as out:
        for i in sites_config[:pointer - 2] + sites_config[pointer + 12:]:
            out.write(i)

    domain = digitalocean.Domain(token=TOKEN, name=NAME)
    records = domain.get_records()

    for record in records:
        if record.id == domain_id:
            record.destroy()


@receiver(signals.pre_delete, sender=Site)
def delete_static_site(sender, **kwargs):
    site = kwargs["instance"]
    delete_user_created_site.delay(site.name, site.subdomain_id)
