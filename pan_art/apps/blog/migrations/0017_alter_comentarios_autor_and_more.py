# Generated by Django 5.0.4 on 2024-04-18 22:37

import datetime
import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0016_alter_comentarios_fecha_alter_dislike_fecha_and_more'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AlterField(
            model_name='comentarios',
            name='autor',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='usuario_comentando', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='comentarios',
            name='del_usuario',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='del_usuario_comentado', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='comentarios',
            name='fecha',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 18, 16, 37, 6, 852511)),
        ),
        migrations.AlterField(
            model_name='dislike',
            name='del_usuario',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='del_usuario_dislikeado', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='dislike',
            name='fecha',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 18, 16, 37, 6, 852511)),
        ),
        migrations.AlterField(
            model_name='dislike',
            name='usuario',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='usuario_dislike', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='dislikeacomentario',
            name='fecha',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 18, 16, 37, 6, 853511)),
        ),
        migrations.AlterField(
            model_name='dislikearespuestaalcomentario',
            name='fecha',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 18, 16, 37, 6, 854511)),
        ),
        migrations.AlterField(
            model_name='like',
            name='del_usuario',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='del_usuario_likeado', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='like',
            name='fecha',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 18, 16, 37, 6, 851511)),
        ),
        migrations.AlterField(
            model_name='like',
            name='usuario',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='usuario_like', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='likeacomentario',
            name='fecha',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 18, 16, 37, 6, 853511)),
        ),
        migrations.AlterField(
            model_name='likearespuestaalcomentario',
            name='fecha',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 18, 16, 37, 6, 854511)),
        ),
        migrations.AlterField(
            model_name='post',
            name='subido',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 18, 16, 37, 6, 851511)),
        ),
        migrations.AlterField(
            model_name='respuestaacomentario',
            name='fecha',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 18, 16, 37, 6, 853511)),
        ),
        migrations.AlterField(
            model_name='vistas',
            name='del_usuario',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='del_usuario_pos', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='vistas',
            name='fecha',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 18, 16, 37, 6, 854511)),
        ),
        migrations.AlterField(
            model_name='vistas',
            name='usuario',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='usuario_ve', to=settings.AUTH_USER_MODEL),
        ),
    ]