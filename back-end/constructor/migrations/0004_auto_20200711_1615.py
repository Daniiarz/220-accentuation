# Generated by Django 3.0.8 on 2020-07-11 16:15

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('constructor', '0003_auto_20200711_1614'),
    ]

    operations = [
        migrations.AlterField(
            model_name='site',
            name='created',
            field=models.DateTimeField(default=datetime.datetime(2020, 7, 11, 16, 15, 56, 401663, tzinfo=utc)),
        ),
    ]
