# Generated by Django 3.0.8 on 2020-07-20 06:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('constructor', '0004_auto_20200718_1832'),
    ]

    operations = [
        migrations.RenameField(
            model_name='template',
            old_name='link',
            new_name='constructor_link',
        ),
    ]