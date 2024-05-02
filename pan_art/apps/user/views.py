from django.shortcuts import render, get_list_or_404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import UserAccount

class ActualizarFotoDePerfil(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request, format=None):
        pass
    def post(self, request, format=None):
        usuario = request.user
        imagen = request.FILES.get("foto")
        if imagen is not None:
            usuario.foto = imagen
            usuario.save()
            return Response({"mensaje": "La foto de perfil se ha actualizado exitosamente"}, status=status.HTTP_200_OK)
        else:
            return Response({"mensaje": "No se proporcionó ninguna imagen para actualizar la foto de perfil"}, status=status.HTTP_400_BAD_REQUEST)

class MiCuenta(APIView):
    permission_classes = [IsAuthenticated] 
    def get(self, request, format=None):
        print("usuario entrando a su cuenta")
        usuario = request.user
        print("usuario")
        
        datos_usuario = {
            "foto": usuario.foto.url,
            "banner":  usuario.banner.url,
            "nombre": str(usuario.nombre),
        }
        print("json")

        return Response({"mi_pagina":datos_usuario}, status=status.HTTP_200_OK)