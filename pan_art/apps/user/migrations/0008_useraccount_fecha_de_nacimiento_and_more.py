# Generated by Django 5.0.4 on 2024-04-17 01:26

import datetime
import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0007_alter_useraccount_fecha_de_entrada'),
    ]

    operations = [
        migrations.AddField(
            model_name='useraccount',
            name='fecha_de_nacimiento',
            field=models.DateField(default=datetime.date(2024, 4, 16)),
        ),
        migrations.AlterField(
            model_name='useraccount',
            name='fecha_de_entrada',
            field=models.DateField(default=datetime.date(2024, 4, 16)),
        ),
        migrations.CreateModel(
            name='Seguidor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha', models.DateTimeField(default=datetime.datetime(2024, 4, 16, 19, 26, 49, 833285))),
                ('seguido', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='seguido', to=settings.AUTH_USER_MODEL)),
                ('seguidor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='seguidor', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
