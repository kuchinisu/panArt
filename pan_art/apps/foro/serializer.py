from rest_framework import serializers
from .models import Hilo, Comentario

class HiloSerializer(serializers.ModelSerializer):
    tema = serializers.CharField(source='get_tema')
    foto_de_usuario = serializers.CharField(source='get_foto_de_usuario')
    class Meta:
        model = Hilo
        fields = [
            'titulo',
            'contenido',
            'usuario',
            'slug',
            'fecha',
            'tema',
            'foto_de_usuario'
        ]

class ComentarioSerializer( serializers.ModelSerializer):
    class Meta:
        model = Comentario
        fields=[
            'texto'
        ]