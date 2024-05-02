# Generated by Django 5.0.4 on 2024-04-08 00:32

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('foro', '0002_hilo_contenido_alter_hilo_fecha'),
    ]

    operations = [
        migrations.RenameField(
            model_name='hilo',
            old_name='tags',
            new_name='comentarios',
        ),
        migrations.AlterField(
            model_name='hilo',
            name='fecha',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 7, 18, 32, 25, 167895)),
        ),
    ]
