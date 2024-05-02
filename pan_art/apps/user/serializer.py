from rest_framework import serializers
from djoser.serializers import UserCreateSerializer
from .models import UserAccount
from django.contrib.auth import get_user_model

User = get_user_model()


class UserSerializer(UserCreateSerializer):
    foto = serializers.CharField(source='get_foto')
    banner = serializers.CharField(source='get_banner')
    seguidores = serializers.CharField(source='get_seguidores')
    seguidos = serializers.CharField(source='get_seguidos')

    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = [
            'email',
            'nombre',
            'matricula',
            'is_active',
            'is_staff',
            'get_name',
            'foto',
            'banner',
            'seguidores',
            'seguidos',
        ]

        