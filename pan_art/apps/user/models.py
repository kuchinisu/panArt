from django.db import models
from django.shortcuts import get_object_or_404
from django.apps import AppConfig
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager, Group, Permission
import os
import uuid
import datetime
from django.utils import timezone

class UserAccountManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('Users must have an email address')
        
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)

        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password, **extra_fields):
        user = self.create_user(email, password, **extra_fields)
        user.is_superuser = True
        user.is_staff = True
        user.save()

        return user


def path_dir_perfil(instance, filename):
    ext = filename.split('.')[-1]
    nombre_archivo = f"{uuid.uuid4()}.{ext}"
    ruta_completa = f"{instance.nombre}/foto_de_perfil/{nombre_archivo}"
    print(ruta_completa)  
    return ruta_completa
def path_dir_banner(instance, filename):

    ext = filename.split('.')[-1]
    nombre_archivo = f"{uuid.uuid4()}.{ext}"
    ruta_completa = f"{instance.nombre}/foto_de_banner/{nombre_archivo}"
    print(ruta_completa)  
    return ruta_completa

class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True, default=None)

    nombre = models.CharField(default="", max_length=50)
    is_active = models.BooleanField(default=True)
    is_staff=models.BooleanField(default=False)
    is_superuser=models.BooleanField(default=False)
    
    fecha_de_entrada = models.DateField(default=datetime.date.today())
    fecha_de_nacimiento = models.DateField(default=datetime.date.today())
    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['nombre']

    matricula = models.IntegerField(default=0)
    foto = models.ImageField(upload_to=path_dir_perfil, default="/media/default/foto_default.jpg")
    banner = models.ImageField(upload_to=path_dir_banner, default="/media/default/banner_default.jpg")

    def save(self, *args, **kwargs):
            if not self.matricula:
                ultima_m = UserAccount.objects.all().order_by('matricula').last()
                if ultima_m:
                    self.matricula = ultima_m.matricula + 1
            super().save(*args, **kwargs)

    def get_name(self):
        return self.nombre
    def get_foto(self):
        if self.foto:
            return str(self.foto.url)
        return ''
    def get_banner(self):
        if self.banner:
            return str(self.banner.url) 
        return ''
    
    def get_seguidores(self):
        seguido = get_object_or_404(UserAccount, matricula = self.matricula)
        if Seguidor.objects.filter(seguido = seguido).exists():
            seguidores = len(Seguidor.objects.filter(seguido = seguido))
        else:
            return 0
    def get_seguidos(self):
        seguidor = get_object_or_404(UserAccount, matricula = self.matricula)
        
        if Seguidor.objects.filter(seguidor = seguidor).exists():
            seguidos = len(Seguidor.objects.filter(seguidor = seguidor))

            return seguidos
        else:
            return 0

    def __str__(self):
        return self.email

class Seguidor(models.Model):
    seguidor = models.ForeignKey(UserAccount, related_name="seguidor", on_delete=models.CASCADE)
    seguido = models.ForeignKey(UserAccount, related_name="seguido", on_delete=models.CASCADE)
    fecha = models.DateTimeField(default=datetime.datetime.today())

    def __str__(self):
        return str(f"usuario {self.seguidor.nombre} siguiendo a {self.seguido} desde {self.fecha}")
    
