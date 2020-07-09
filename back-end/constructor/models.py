from django.db import models

# Create your models here.
from django.utils import timezone


class Header(models.Model):
    """
    Storing data about a header of the site
    """
    logo = models.ImageField(upload_to="logo-images/")
    brand_title = models.CharField(max_length=100)
    menu_option1 = models.CharField(max_length=100)
    menu_option2 = models.CharField(max_length=100)
    menu_option3 = models.CharField(max_length=100)

    class Meta:
        abstract = True


class Body(models.Model):
    """
    Storing data about body of the site
    """
    data = models.CharField(max_length=100)

    class Meta:
        abstract = True


class Site(Header, Body):
    """
    Class for storing data about user created sites
    """
    name = models.CharField(max_length=150)

    created = models.DateTimeField(default=timezone.now())

    def __str__(self):
        return self.name
