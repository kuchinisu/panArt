# Generated by Django 5.0.4 on 2024-04-13 21:34

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0013_alter_post_subido'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='subido',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 13, 15, 34, 4, 195203)),
        ),
    ]
