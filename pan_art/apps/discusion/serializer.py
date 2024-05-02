from rest_framework import serializers
from .models import Opinion, RespuestasAOpinion

class OpinionSerialzier(serializers.ModelSerializer):
    opinion_sobre = serializers.CharField(source="get_opinion_sobre")
    autor = serializers.CharField(source='get_autor')
    respuestas = serializers.ListField(child=serializers.DictField(), source="get_respuestas")  # Usamos ListField y DictField para serializar las respuestas
    foto_de_autor = serializers.CharField(source='get_foto_de_autor')
    likes = serializers.CharField(source='get_likes')
    dislikes = serializers.CharField(source='get_dislikes')
    class Meta:
        model = Opinion
        fields = [
            'autor',
            'opinion_sobre',
            'fecha',
            'texto',
            'foto_de_autor',
            'slug',
            'likes',
            'dislikes',
            'respuestas',
        ]
class RespuestasAOpinionSerializer(serializers.ModelSerializer):
    autor = serializers.CharField(source='get_autor')
    foto_de_autor = serializers.CharField(source='get_foto_de_autor')

    class Meta:
        model = RespuestasAOpinion
        fields = [
            'autor',
            'respuesta_a',
            'fecha',
            'texto',
            'foto_de_autor',
        ]

