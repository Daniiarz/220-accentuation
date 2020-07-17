from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, \
    PermissionsMixin
from django.db import models


class UserManager(BaseUserManager):

    def create_user(self, first_name, last_name, email, password, **extra_fields):
        """
        Creates and saves a new User
        """

        if not email:
            raise ValueError("Email address is required!")

        if not first_name or not last_name:
            raise ValueError("First and Last name are required!")

        if not password:
            raise ValueError("Password is required!")

        user = self.model(
            email=self.normalize_email(email),
            first_name=first_name,
            last_name=last_name,
            **extra_fields
        )
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, first_name, last_name, password, **extra_fields):
        """
        Creates and saves new superuser
        """

        user = self.create_user(first_name, last_name, email, password, **extra_fields)
        user.is_staff = True
        user.is_superuser = True

        user.save(using=self._db)

        return user


class User(AbstractBaseUser, PermissionsMixin):
    """
    Custom user model supporting usage of email instead of username
    """
    email = models.EmailField(max_length=255, unique=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    max_amount = models.IntegerField(default=1)
    sites_created = models.IntegerField(default=0)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_premium = models.BooleanField(default=False)

    objects = UserManager()

    REQUIRED_FIELDS = ["first_name", "last_name"]
    USERNAME_FIELD = 'email'

    def __str__(self):
        return f"{self.get_full_name()}"

    def get_full_name(self):
        return f"{self.first_name} {self.last_name}"
