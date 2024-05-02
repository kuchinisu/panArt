# Generated by Django 5.0.4 on 2024-04-13 21:34

import datetime
import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Opinion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha', models.DateTimeField(default=datetime.datetime(2024, 4, 13, 15, 34, 4, 211204))),
                ('likes', models.IntegerField(default=0)),
                ('dislikes', models.IntegerField(default=0)),
                ('texto', models.TextField()),
                ('slug', models.SlugField(default='1', unique=True)),
                ('autor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='autor_de_la_opinion', to=settings.AUTH_USER_MODEL)),
                ('opinion_sobre', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='opinion_sobre_el_usuario', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='RespuestasAOpinion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha', models.DateTimeField(default=datetime.datetime(2024, 4, 13, 15, 34, 4, 212205))),
                ('slug', models.SlugField(default='1', unique=True)),
                ('likes', models.IntegerField(default=0)),
                ('dislikes', models.IntegerField(default=0)),
                ('texto', models.TextField()),
                ('autor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('respuesta_a', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='discusion.opinion')),
            ],
        ),
    ]
