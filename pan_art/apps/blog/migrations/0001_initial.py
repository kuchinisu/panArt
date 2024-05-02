# Generated by Django 5.0.4 on 2024-04-05 08:30

import apps.blog.models
import datetime
import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(default='', max_length=100)),
                ('descripcion', models.CharField(default='', max_length=255)),
                ('imagen', models.ImageField(upload_to=apps.blog.models.path_dir)),
                ('tags', django.contrib.postgres.fields.ArrayField(base_field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=25), size=8), size=8)),
                ('slug', models.SlugField(default='', unique=True)),
                ('subido', models.DateTimeField(default=datetime.datetime(2024, 4, 5, 2, 30, 11, 27271))),
            ],
        ),
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(default='', max_length=25)),
            ],
        ),
    ]