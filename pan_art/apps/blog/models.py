from django.db import models
from django.shortcuts import get_object_or_404
from django.contrib.postgres.fields import ArrayField
import datetime
import uuid
from apps.user.models import UserAccount

def path_dir(instance, filename):
    ext = filename.split('.')[-1]
    nombre_archivo = f"{uuid.uuid4()}.{ext}"
    ruta_completa = f"{instance.usuario.nombre}/posts/{instance.titulo}/{nombre_archivo}"
    print(ruta_completa)  
    return ruta_completa


class Post(models.Model):
    titulo = models.CharField(default='', max_length=100)
    descripcion = models.CharField(default='', max_length=255)
    imagen = models.ImageField(upload_to=path_dir)
    tags = ArrayField(
        ArrayField(
            models.CharField(max_length=25, blank=True),
            size=8,
            ),
            size=8,
    )
    slug = models.SlugField(default='', unique=True)

    subido = models.DateTimeField(default=datetime.datetime.today())
    usuario = models.ForeignKey(UserAccount, on_delete=models.CASCADE)

    def get_matricula_usuario(self):
        if self.usuario:
            return str(self.usuario.matricula)
        return ''
    def get_imagen(self):
        if self.imagen:
            return str(self.imagen.url)
        return ''
    def get_nombre_usuario(self):
        if self.usuario:
            return str(self.usuario.nombre)
    def get_foto_uduario(self):
        if self.usuario.foto:
            return str(self.usuario.foto.url)
        return ''
    def get_vistas(self):
        post = get_object_or_404(Post, slug=self.slug)
        if Vistas.objects.filter(al_post=post).exists():
            vistas = len(Vistas.objects.filter(al_post=post))
            return vistas
        else:
            return 0
    
    def __str__(self):
        return str(f"usuario: {self.usuario} - titulo: {self.titulo}")
    
class Like(models.Model):
    usuario = models.ForeignKey(UserAccount, related_name="usuario_like", on_delete=models.CASCADE)
    al_post = models.ForeignKey(Post, on_delete=models.CASCADE)
    del_usuario = models.ForeignKey(UserAccount, related_name="del_usuario_likeado", on_delete=models.CASCADE)
    fecha = models.DateTimeField(default=datetime.datetime.today())
    def __str__(self):
        return str(f"like de {self.usuario.nombre} al post {self.al_post.slug}")
    
class Dislike(models.Model):
    usuario = models.ForeignKey(UserAccount, related_name="usuario_dislike", on_delete=models.CASCADE)
    al_post = models.ForeignKey(Post, on_delete=models.CASCADE)
    del_usuario = models.ForeignKey(UserAccount, related_name="del_usuario_dislikeado", on_delete=models.CASCADE)
    fecha = models.DateTimeField(default=datetime.datetime.today())
    def __str__(self):
        return str(f"dislike de {self.usuario.nombre} al post {self.al_post.slug}")
    

class Tag(models.Model):
    titulo = models.CharField(default='', max_length=25)

    def __str__(self):
        return str(self.titulo)

class Comentarios(models.Model):
    autor = models.ForeignKey(UserAccount, related_name="usuario_comentando", on_delete=models.CASCADE)
    contenido = models.TextField()
    fecha = models.DateTimeField(default=datetime.datetime.today())
    al_post = models.ForeignKey(Post, on_delete=models.CASCADE)
    del_usuario = models.ForeignKey(UserAccount, related_name="del_usuario_comentado", on_delete=models.CASCADE)
    def get_usuario(self): 
        if self.autor:
            return str(self.autor.nombre)
        return ''
    def get_foto_de_usuario(self):
        if self.autor:
            return str(self.autor.get_foto())
        return ''
    def get_matricula(self):
        if self.autor:
            return str(self.autor.matricula)
        return ''
    def get_imagen(self):
        if self.autor:
            return str(self.autor.foto.url)
    def __str__(self):
        return str(f'{self.autor.nombre}-{self.autor.email}: {self.al_post.titulo} de {self.al_post.usuario.nombre}-{self.al_post.usuario.email}')
    

class LikeAComentario(models.Model):
    usuario = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    al_comentario = models.ForeignKey(Comentarios, on_delete=models.CASCADE)
    fecha = models.DateTimeField(default=datetime.datetime.today())

    def __str__(self):
        return str(f"like de {self.usuario.nombre} al comentario de {self.al_comentario.autor.nombre} al post {self.al_comentario.al_post.slug}")
    
class DislikeAComentario(models.Model):
    usuario = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    al_comentario = models.ForeignKey(Comentarios, on_delete=models.CASCADE)
    fecha = models.DateTimeField(default=datetime.datetime.today())
    def __str__(self):
        return str(f"dislike de {self.usuario.nombre} al comentario de {self.al_comentario.autor.nombre} al post {self.al_comentario.al_post.slug}")
    
class RespuestaAComentario(models.Model):
    autor = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    al_comentario = models.ForeignKey(Comentarios, on_delete=models.CASCADE)
    fecha = models.DateTimeField(default=datetime.datetime.today())

class LikeARespuestaAlComentario(models.Model):
    usuario = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    al_comentario = models.ForeignKey(RespuestaAComentario, on_delete=models.CASCADE)
    fecha = models.DateTimeField(default=datetime.datetime.today())
    def __str__(self):
        return str(f"like de {self.usuario.nombre} al comentario de {self.al_comentario.autor.nombre}  al post {self.al_comentario.al_post.slug}")
    
class DislikeARespuestaAlComentario(models.Model):
    usuario = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    al_comentario = models.ForeignKey(RespuestaAComentario, on_delete=models.CASCADE)
    fecha = models.DateTimeField(default=datetime.datetime.today())

    def __str__(self):
        return str(f"dislike de {self.usuario.nombre} al comentario de {self.al_comentario.autor.nombre} al post {self.al_comentario.al_post.slug}")
   

class Vistas(models.Model):
    usuario = models.ForeignKey(UserAccount, related_name='usuario_ve', on_delete=models.CASCADE)
    al_post = models.ForeignKey(Post, on_delete=models.CASCADE)
    del_usuario = models.ForeignKey(UserAccount, related_name='del_usuario_pos', on_delete=models.CASCADE)
    fecha = models.DateTimeField(default=datetime.datetime.today())

    
    def __str__(self):
        return str(f"vista dle usuario {self.usuario.nombre} als post {self.al_post.slug}")
