# Generated by Django 5.0.4 on 2024-04-08 23:19

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0011_alter_post_subido'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='subido',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 8, 17, 19, 26, 874983)),
        ),
    ]