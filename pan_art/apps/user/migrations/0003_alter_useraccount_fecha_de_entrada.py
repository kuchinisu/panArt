# Generated by Django 5.0.4 on 2024-04-08 00:29

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0002_alter_useraccount_matricula'),
    ]

    operations = [
        migrations.AlterField(
            model_name='useraccount',
            name='fecha_de_entrada',
            field=models.DateField(default=datetime.date(2024, 4, 7)),
        ),
    ]
