# Generated by Django 3.0.8 on 2020-07-16 16:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_user_is_staff'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='sites_created',
            field=models.IntegerField(default=0),
        ),
    ]
