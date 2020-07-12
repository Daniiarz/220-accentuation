from django.db import models


class Site(models.Model):
    """
    Class for storing data about user created sites
    """
    name = models.CharField(max_length=150)

    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
