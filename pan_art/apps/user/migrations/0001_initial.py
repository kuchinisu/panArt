# Generated by Django 5.0.4 on 2024-04-05 08:30

import datetime
from django.db import migrations, models
import apps.user.models
import apps


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]
#groups
    operations = [
        migrations.CreateModel(
            name='UserAccount',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('email', models.EmailField(default=None, max_length=255, unique=True)),
                ('nombre', models.CharField(default='', max_length=50)),
                ('is_active', models.BooleanField(default=True)),
                ('is_staff', models.BooleanField(default=False)),
                ('is_superuser', models.BooleanField(default=False)),
                ('matricula', models.IntegerField(default=0, unique=True)),
                ('fecha_de_entrada', models.DateField(default=datetime.date(2024, 4, 5))),
                ('foto', models.ImageField(upload_to=apps.user.models.path_dir_perfil, default='default/foto_default.jpg')),
                ('banner', models.ImageField(upload_to=apps.user.models.path_dir_banner, default='default/banner_default.jpg')),
                #('groups', models.ManyToManyField(related_name='user_accounts_custom', to='auth.group')),
                #('user_permissions', models.ManyToManyField(related_name='user_accounts_custom', to='auth.permission')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
