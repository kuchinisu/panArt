from django.shortcuts import render, get_object_or_404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from .models import Hilo, Comentario, Tema
from .serializer import HiloSerializer, ComentarioSerializer

from apps.utils.paginator import LargeSetPagination

class HilosView(APIView):
    def get(self, request, format=None):
        
        if not Hilo.objects.all().exists():
            return Response({"error":"no hay hilos para mostrar"}, status=status.HTTP_404_NOT_FOUND)
        else:
            hilos = Hilo.objects.all()
            paginator = LargeSetPagination()
            results = paginator.paginate_queryset(hilos,request)
            serializer = HiloSerializer(results, many=True)

            return paginator.get_paginated_response({"hilos": serializer.data})
        
class SubirHilo(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, requesst, format=None):
        pass

    def post(self, request, format=None):
        autor = request.user
        data = request.data
        print("---------------------------\n")
        print("subir hilo \n")
        print(f"autor: {autor.nombre}-{autor.email} \n")

        texto = data.get("texto")
        titulo = data.get("titulo")
        tema_n = data.get("tema")

        print(f"|tema: {tema_n}|\n")

        if Tema.objects.filter(nombre=tema_n).exists():
            tema = Tema.objects.filter(nombre=tema_n).first()
            print("usando tema ya existente\n")
        else:
            tema_nuevo = Tema(nombre=tema_n)
            print("creando nuevo tema.....\n")
            tema = tema_nuevo
            tema.save()
            print("nuevo tema creado \n")

        if Hilo.objects.all().exists():
            slug = str(int(Hilo.objects.all().last().slug) + 1)
            
        else:
            slug = str(1)
        print(f"hilo numero {slug}\n titulo:{titulo}\n contenido: {texto}\n creando nuevo hilo...")

        nuevo_hilo = Hilo(
                        titulo=titulo, 
                        contenido=texto,
                        usuario=autor,
                        tema=tema,
                        slug=slug,
                        )
        print("guardando... ")
        nuevo_hilo.save()
        print("nuevo hilo guardado")


        return Response({"mensaje":"hilo creado con exito"},status=status.HTTP_201_CREATED)

class ComentarHilo(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request, format=None):
        pass

    def post(self, request, format=None):
        autor = request.user
        data = request.data
        texto = data.get("texto")
        hilo_s = data.get("slug")
        
        hilo = get_object_or_404(Hilo, slug=hilo_s)

        nueva_respuesta = Comentario(
            usuario = autor,
            texto = texto,
            hilo = hilo
        )

        nueva_respuesta.save()

        return Response({"mensaje":"respuesta añadida con exito"}, status=status.HTTP_201_CREATED)
    
class Respuestas(APIView):
    def get(self, request, slug, format=None):

        hilo = get_object_or_404(Hilo, slug=slug)
        if Comentario.objects.filter(hilo=hilo).exists():
            hilos = Comentario.objects.filter(hilo=hilo)
            paginator = LargeSetPagination()
            results = paginator.paginate_queryset(hilos, request)
            serializer = ComentarioSerializer(results, many=True)

            return paginator.get_paginated_response({"respuestas": serializer.data})


        else:
            return Response({"error":"aún nadie a comentado"}, status=status.HTTP_404_NOT_FOUND)
