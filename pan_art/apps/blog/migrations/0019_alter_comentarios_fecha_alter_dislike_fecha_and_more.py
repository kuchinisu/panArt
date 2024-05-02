# Generated by Django 5.0.4 on 2024-04-19 06:31

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0018_alter_comentarios_fecha_alter_dislike_fecha_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comentarios',
            name='fecha',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 19, 0, 31, 56, 198813)),
        ),
        migrations.AlterField(
            model_name='dislike',
            name='fecha',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 19, 0, 31, 56, 197813)),
        ),
        migrations.AlterField(
            model_name='dislikeacomentario',
            name='fecha',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 19, 0, 31, 56, 198813)),
        ),
        migrations.AlterField(
            model_name='dislikearespuestaalcomentario',
            name='fecha',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 19, 0, 31, 56, 200813)),
        ),
        migrations.AlterField(
            model_name='like',
            name='fecha',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 19, 0, 31, 56, 196813)),
        ),
        migrations.AlterField(
            model_name='likeacomentario',
            name='fecha',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 19, 0, 31, 56, 198813)),
        ),
        migrations.AlterField(
            model_name='likearespuestaalcomentario',
            name='fecha',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 19, 0, 31, 56, 199813)),
        ),
        migrations.AlterField(
            model_name='post',
            name='subido',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 19, 0, 31, 56, 196813)),
        ),
        migrations.AlterField(
            model_name='respuestaacomentario',
            name='fecha',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 19, 0, 31, 56, 199813)),
        ),
        migrations.AlterField(
            model_name='vistas',
            name='fecha',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 19, 0, 31, 56, 200813)),
        ),
    ]
