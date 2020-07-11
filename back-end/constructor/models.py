from django.db import models
from django.utils import timezone


class Site(models.Model):
    """
    Class for storing data about user created sites
    """
    name = models.CharField(max_length=150)

    created = models.DateTimeField(default=timezone.now())

    def __str__(self):
        return self.name
