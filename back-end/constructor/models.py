from django.contrib.auth import get_user_model
from django.db import models


class Site(models.Model):
    """
    Storing data about user created sites_conf
    """
    name = models.CharField(max_length=150, unique=True)
    subdomain_id = models.IntegerField()
    creator = models.ForeignKey(get_user_model(),
                                on_delete=models.CASCADE, related_name="sites", null=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Template(models.Model):
    """
    Storing information about templates
    """

    name = models.CharField(max_length=25)
    img = models.ImageField(upload_to="template_imgs/")
    link = models.CharField(max_length=225)

    def __str__(self):
        return self.name
