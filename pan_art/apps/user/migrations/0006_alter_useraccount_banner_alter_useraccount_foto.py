# Generated by Django 5.0.4 on 2024-04-08 23:23

import apps.user.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0005_alter_useraccount_fecha_de_entrada_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='useraccount',
            name='banner',
            field=models.ImageField(default='/media/default/banner_default.jpg', upload_to=apps.user.models.path_dir_banner),
        ),
        migrations.AlterField(
            model_name='useraccount',
            name='foto',
            field=models.ImageField(default='/media/default/foto_default.jpg', upload_to=apps.user.models.path_dir_perfil),
        ),
    ]
