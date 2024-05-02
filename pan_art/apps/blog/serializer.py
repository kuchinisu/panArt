from rest_framework import serializers

from .models import Post, Comentarios

class PostSerializer(serializers.ModelSerializer):
    imagen = serializers.CharField(source='get_imagen')
    usuario = serializers.CharField(source='get_nombre_usuario')
    matricula_usuario = serializers.CharField(source="get_matricula_usuario")
    foto_de_usuario = serializers.CharField(source="get_foto_uduario")
    vistas = serializers.CharField(source='get_vistas')
    class Meta:
        model = Post
        fields = [
            'titulo',
            'descripcion',
            'imagen',
            'tags',
            'slug',
            'subido',
            'usuario',
            'matricula_usuario',
            'foto_de_usuario',
            'vistas',
        ]
        
class ComentarioSerializer(serializers.ModelSerializer):
    autor = serializers.CharField(source="get_usuario")
    foto_de_autor = serializers.CharField(source="get_foto_de_usuario")
    matricula = serializers.CharField(source="get_matricula")
    
    class Meta:
        model=Comentarios
        fields = [
            'autor',
            'foto_de_autor',
            'contenido',
            'matricula',
        ]