# Generated by Django 5.0.4 on 2024-04-19 06:33

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0011_alter_seguidor_fecha_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='seguidor',
            name='fecha',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 19, 0, 33, 53, 633822)),
        ),
        migrations.AlterField(
            model_name='useraccount',
            name='fecha_de_entrada',
            field=models.DateField(default=datetime.date(2024, 4, 19)),
        ),
        migrations.AlterField(
            model_name='useraccount',
            name='fecha_de_nacimiento',
            field=models.DateField(default=datetime.date(2024, 4, 19)),
        ),
    ]
