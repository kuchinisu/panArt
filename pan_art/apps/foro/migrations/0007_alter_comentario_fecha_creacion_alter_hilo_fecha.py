# Generated by Django 5.0.4 on 2024-04-08 05:13

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('foro', '0006_remove_hilo_comentarios_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comentario',
            name='fecha_creacion',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 7, 23, 13, 22, 926731)),
        ),
        migrations.AlterField(
            model_name='hilo',
            name='fecha',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 7, 23, 13, 22, 925733)),
        ),
    ]
