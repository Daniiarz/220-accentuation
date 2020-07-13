import os
import shutil

import digitalocean
import docker
from bs4 import BeautifulSoup
from decouple import config
from django.utils.text import slugify

from .models import Site

TOKEN = config("DO_TOKEN")
DATA = config("DO_DATA")
NAME = config("DO_NAME")


def create_domain_record(title: str):
    domain = digitalocean.Domain(token=TOKEN, name=NAME)
    slug_title = slugify(title.lower())
    new_record = domain.create_new_domain_record(
        type='A',
        name=slug_title,
        data=DATA
    )

    with open(f"usr/scr/sites/{title}/sites.nginx", "a") as sites_conf:
        configuration = \
            f"""
server {{
    listen 80;
    server_name {slug_title}.220-accentuation.co;
    server_tokens on;
    
    location / {{
        root   /usr/scr/sites/freelancer;
        index  index.html index.htm;
        try_files $uri /index.html;
    }}
    
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {{
        root   /usr/share/nginx/html;
    }}
}}
"""
        sites_conf.write(configuration)

    site = Site.objects.create(name=title, subdomain_id=new_record["domain_record"]["id"])
    site.save()


def create_static_site(validated_data, title):
    # Stack overflow code
    root_src_dir = r'usr/src/backend/templates/grayscale'  # Path/Location of the source directory
    root_dst_dir = fr'usr/scr/sites/{title}'  # Path to the destination folder

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

    with open(fr'usr\scr\sites\{title}\index.html') as inf:
        txt = inf.read()
        soup = BeautifulSoup(txt)

    for key, value in validated_data.items():
        soup.find(id=key).string = value

    # save the file again
    with open("existing_file.html", "w") as outf:
        outf.write(str(soup))

    client = docker.from_env()
    container = client.containers.get("accentuation_220_sites-nginx_1")

    container.restart(timeout=0)
