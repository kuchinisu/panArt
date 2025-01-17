# Generated by Django 5.0.4 on 2024-04-18 23:22

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0017_alter_comentarios_autor_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comentarios',
            name='fecha',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 18, 17, 22, 37, 891438)),
        ),
        migrations.AlterField(
            model_name='dislike',
            name='fecha',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 18, 17, 22, 37, 890438)),
        ),
        migrations.AlterField(
            model_name='dislikeacomentario',
            name='fecha',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 18, 17, 22, 37, 892437)),
        ),
        migrations.AlterField(
            model_name='dislikearespuestaalcomentario',
            name='fecha',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 18, 17, 22, 37, 893437)),
        ),
        migrations.AlterField(
            model_name='like',
            name='fecha',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 18, 17, 22, 37, 890438)),
        ),
        migrations.AlterField(
            model_name='likeacomentario',
            name='fecha',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 18, 17, 22, 37, 891438)),
        ),
        migrations.AlterField(
            model_name='likearespuestaalcomentario',
            name='fecha',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 18, 17, 22, 37, 893437)),
        ),
        migrations.AlterField(
            model_name='post',
            name='subido',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 18, 17, 22, 37, 889439)),
        ),
        migrations.AlterField(
            model_name='respuestaacomentario',
            name='fecha',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 18, 17, 22, 37, 892437)),
        ),
        migrations.AlterField(
            model_name='vistas',
            name='fecha',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 18, 17, 22, 37, 893437)),
        ),
    ]
