# Generated by Django 5.0.4 on 2024-04-19 06:32

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('discusion', '0007_alter_dislikeaopinion_fecha_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dislikeaopinion',
            name='fecha',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 19, 0, 32, 44, 330352)),
        ),
        migrations.AlterField(
            model_name='dislikearespuestaaopinion',
            name='fecha',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 19, 0, 32, 44, 331351)),
        ),
        migrations.AlterField(
            model_name='likeaopinion',
            name='fecha',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 19, 0, 32, 44, 329352)),
        ),
        migrations.AlterField(
            model_name='likearespuestaaopinion',
            name='fecha',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 19, 0, 32, 44, 331351)),
        ),
        migrations.AlterField(
            model_name='opinion',
            name='fecha',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 19, 0, 32, 44, 328352)),
        ),
        migrations.AlterField(
            model_name='respuestasaopinion',
            name='fecha',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 19, 0, 32, 44, 330352)),
        ),
    ]
