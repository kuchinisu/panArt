# Generated by Django 5.0.4 on 2024-04-13 21:34

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0006_alter_useraccount_banner_alter_useraccount_foto'),
    ]

    operations = [
        migrations.AlterField(
            model_name='useraccount',
            name='fecha_de_entrada',
            field=models.DateField(default=datetime.date(2024, 4, 13)),
        ),
    ]
