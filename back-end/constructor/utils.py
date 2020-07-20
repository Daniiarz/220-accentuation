import digitalocean
from decouple import config
from django.contrib.auth import get_user_model

TRANSFER_PROTOCOL = "http://"

from constructor.models import Site

TOKEN = config("DO_TOKEN")
NAME = config("DO_NAME")
DATA = config("DO_DATA")


def create_domain_record(title, user_id):
    domain = digitalocean.Domain(token=TOKEN, name=NAME)
    new_record = domain.create_new_domain_record(
        type='A',
        name=title,
        data=DATA
    )

    with open(f"/usr/src/conf/sites.nginx", "a") as sites_conf:
        configuration = \
            f"""

server {{
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


def grayscale_img_routine(validated_data, file_system):
    img_dict = {"aboutImg1": validated_data["aboutImg1"], "aboutImg2": validated_data["aboutImg2"],
                "aboutImg3": validated_data["aboutImg3"]}

    altered_img_dict = {}
    specific_data = {}

    masthead_bg = validated_data["mastheadImg"]
    if masthead_bg:
        file_system.save(name=masthead_bg.name, content=masthead_bg)
        validated_data["mastheadImg"] = None

    specific_data["mastheadImg"] = file_system.url(masthead_bg.name)

    specific_data["mastheadColor"] = validated_data["mastheadColor"]
    validated_data["mastheadColor"] = None

    for key, img in img_dict.items():
        img_url = None
        if img:
            file_system.save(name=img.name, content=img)
            img_url = file_system.url(img.name)

        altered_img_dict[key] = img_url

    validated_data["aboutImg1"] = None
    validated_data["aboutImg2"] = None
    validated_data["aboutImg3"] = None

    specific_data["img_dict"] = altered_img_dict

    return validated_data, specific_data


def grayscale_soup_routine(soup, specific_data):
    for key, img_url in specific_data["img_dict"].items():
        if img_url:
            soup.find(id=key)["src"] = f"{TRANSFER_PROTOCOL}www.220-accentuation.co{img_url}"

    soup.find(id="masthead")["style"] = \
        f"background-image: url({TRANSFER_PROTOCOL}www.220-accentuation.co{specific_data['mastheadImg']});" \
        f" color: '{specific_data['mastheadColor']}'"
    soup.find(id="mainNav")["style"] = f"color: {specific_data['mastheadColor']}"

    return soup
