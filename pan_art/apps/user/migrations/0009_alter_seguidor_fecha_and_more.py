# Generated by Django 5.0.4 on 2024-04-17 23:57

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0008_useraccount_fecha_de_nacimiento_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='seguidor',
            name='fecha',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 17, 17, 56, 59, 83893)),
        ),
        migrations.AlterField(
            model_name='useraccount',
            name='fecha_de_entrada',
            field=models.DateField(default=datetime.date(2024, 4, 17)),
        ),
        migrations.AlterField(
            model_name='useraccount',
            name='fecha_de_nacimiento',
            field=models.DateField(default=datetime.date(2024, 4, 17)),
        ),
    ]
