from django.db import models
import datetime
from django.contrib.postgres.fields import ArrayField, JSONField

import json

from apps.user.models import UserAccount


class Tema(models.Model):
    nombre = models.CharField(default='', max_length=50)

    def __str__(self):
        return str(self.nombre)

class Hilo(models.Model):
    titulo = models.CharField(default='', max_length=100)
    contenido = models.TextField()
    usuario = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    slug = models.SlugField(default=1, unique=True)
    fecha = models.DateTimeField(default=datetime.datetime.today())

    tema = models.ForeignKey(Tema, on_delete=models.CASCADE)

    def get_tema(self):
        if self.tema:
            return str(self.tema.nombre)
        return ''
    
    def get_comentarios(self):
        if self.comentarios:
            return self.comentarios
        return ''
    def get_foto_de_usuario(self):
        if self.usuario.foto:
            return self.usuario.foto.url
        return ''


    def __str__(self):
        return str(f'titulo: {self.titulo} - usuario: {self.usuario.nombre} - {self.fecha}')
    
class Comentario(models.Model):
    autor = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    texto = models.TextField()
    fecha_creacion = models.DateTimeField(default=datetime.datetime.today())

    hilo = models.ForeignKey(Hilo, on_delete=models.CASCADE)

class LikesAHilo(models.Model):
    usuario = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    al_hilo = models.ForeignKey(Hilo, on_delete=models.CASCADE)

class DislikesAHilo(models.Model):
    usuario = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    al_hilo = models.ForeignKey(Hilo, on_delete=models.CASCADE)

