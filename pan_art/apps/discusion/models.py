from django.db import models
from django.shortcuts import get_object_or_404
from apps.user.models import UserAccount
import datetime

class Opinion(models.Model):
    autor = models.ForeignKey(UserAccount, related_name='autor_de_la_opinion', on_delete=models.CASCADE)
    opinion_sobre = models.ForeignKey(UserAccount, related_name='opinion_sobre_el_usuario', on_delete=models.CASCADE)
    fecha = models.DateTimeField(default=datetime.datetime.today())
    
    texto = models.TextField()
    slug = models.SlugField(default='1', unique=True)

    def get_autor(self):
        if self.autor:
            return self.autor.nombre
        return ''
    def get_foto_de_autor(self):
        if self.autor:
            return str(self.autor.foto.url)
        return ''
    def get_opinion_sobre(self):
        if self.opinion_sobre:
            return str(self.opinion_sobre.nombre)
        return ''
    def get_likes(self):
        opinion = get_object_or_404(Opinion,slug=self.slug )
        if LikeAOpinion.objects.filter(a_la_opinion=opinion).exists():
            likes = len(LikeAOpinion.objects.filter(a_la_opinion=opinion))
            return likes
        else:
            return 0
    def get_dislikes(self):
        opinion = get_object_or_404(Opinion,slug=self.slug )
        if DislikeAOpinion.objects.filter(a_la_opinion=opinion).exists():
            dislikes = len(DislikeAOpinion.objects.filter(a_la_opinion=opinion))
            return dislikes
        else:
            return 0

    def get_respuestas(self):
        if self.slug:
            opinion = get_object_or_404(Opinion, slug=self.slug)
            if RespuestasAOpinion.objects.filter(respuesta_a=opinion).exists():
                respuestas = RespuestasAOpinion.objects.filter(respuesta_a=opinion)

                dicts_respuestas = []
                for respuesta in respuestas:
                    resp = {
                        "autor": respuesta.autor.nombre,
                        "texto": respuesta.texto,
                        "slug": respuesta.slug,
                        "foto_autor": respuesta.get_foto_de_autor(),
                    }
                    dicts_respuestas.append(resp)
                return dicts_respuestas
        return []  

    def __str__(self):
        return str(f"opinion de {self.autor.nombre} sobre el usuario {self.opinion_sobre.nombre}")
    
class LikeAOpinion(models.Model):
    usuario = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    a_la_opinion = models.ForeignKey(Opinion, on_delete=models.CASCADE)
    fecha = models.DateTimeField(default=datetime.datetime.today())
class DislikeAOpinion(models.Model):
    usuario = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    a_la_opinion = models.ForeignKey(Opinion, on_delete=models.CASCADE)
    fecha = models.DateTimeField(default=datetime.datetime.today())

class RespuestasAOpinion(models.Model):
    autor = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    respuesta_a = models.ForeignKey(Opinion, on_delete=models.CASCADE)
    fecha = models.DateTimeField(default=datetime.datetime.today())
    slug = models.SlugField(default='1', unique=True)
    likes= models.IntegerField(default=0)
    dislikes= models.IntegerField(default=0)
    texto = models.TextField()

    def get_autor(self):
        if self.autor:
            return self.autor.nombre
        return ''

    def get_foto_de_autor(self):
        if self.autor:
            return str(self.autor.foto.url)
        return ''
    def __str__(self):
        return str(f"respuesta de {self.autor.nombre} a la opinion de {self.respuesta_a.autor.nombre} sobre el usuario {self.respuesta_a.opinion_sobre.nombre}")
    
class LikeARespuestaAOpinion(models.Model):
    usuario = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    a_la_respuesta = models.ForeignKey(RespuestasAOpinion, on_delete=models.CASCADE)
    fecha = models.DateTimeField(default=datetime.datetime.today())
class DislikeARespuestaAOpinion(models.Model):
    usuario = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    a_la_respuesta = models.ForeignKey(RespuestasAOpinion, on_delete=models.CASCADE)
    fecha = models.DateTimeField(default=datetime.datetime.today())

