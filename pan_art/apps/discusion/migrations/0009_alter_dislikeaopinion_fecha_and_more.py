# Generated by Django 5.0.4 on 2024-04-19 06:33

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('discusion', '0008_alter_dislikeaopinion_fecha_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dislikeaopinion',
            name='fecha',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 19, 0, 33, 53, 643824)),
        ),
        migrations.AlterField(
            model_name='dislikearespuestaaopinion',
            name='fecha',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 19, 0, 33, 53, 644826)),
        ),
        migrations.AlterField(
            model_name='likeaopinion',
            name='fecha',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 19, 0, 33, 53, 642823)),
        ),
        migrations.AlterField(
            model_name='likearespuestaaopinion',
            name='fecha',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 19, 0, 33, 53, 644826)),
        ),
        migrations.AlterField(
            model_name='opinion',
            name='fecha',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 19, 0, 33, 53, 642823)),
        ),
        migrations.AlterField(
            model_name='respuestasaopinion',
            name='fecha',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 19, 0, 33, 53, 643824)),
        ),
    ]
