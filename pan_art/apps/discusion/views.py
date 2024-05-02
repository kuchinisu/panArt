from django.shortcuts import render, get_object_or_404
from .models import Opinion, RespuestasAOpinion
from .serializer import OpinionSerialzier, RespuestasAOpinionSerializer
from apps.utils.paginator import LargeSetPagination
from apps.user.models import UserAccount

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response



class Opiniones(APIView):
    def get(self, request, matricula, format=None):
        
        usuario = get_object_or_404(UserAccount, matricula=matricula)

        if not Opinion.objects.all().exists():
            return Response({'error':'no existe ninguna opinion a ningun usuario'},status=status.HTTP_404_NOT_FOUND)
        elif not Opinion.objects.filter(opinion_sobre=usuario).exists():
            return Response({'error':'no hay ninguna opinion sobre el usuario'}, status=status.HTTP_404_NOT_FOUND)
        else:
            opiniones = Opinion.objects.filter(opinion_sobre=usuario)
            paginator = LargeSetPagination()
            results = paginator.paginate_queryset(opiniones,request)
            serializer = OpinionSerialzier(results, many=True)

            return paginator.get_paginated_response({"opiniones":serializer.data})
        
class RespustasAOpiniones(APIView):
    def get(self, request, slug, format=None):
        
        opinion=get_object_or_404(Opinion, slug=slug)

        if not RespuestasAOpinion.objects.all().exists():
            return RespuestasAOpinion({'error':'no existe ninguna respuesta ninguna opinion a ningun usuario'},status=status.HTTP_404_NOT_FOUND)
        elif not RespuestasAOpinion.objects.filter(respuesta_a=opinion).exists():
            return RespuestasAOpinion({'error':'la opinion al usuario {} no tiene ninguna respuesta'}, status=status.HTTP_404_NOT_FOUND)
        else:
            opiniones = RespuestasAOpinion.objects.filter(respuesta_a=opinion)
            paginator = LargeSetPagination()
            results = paginator.paginate_queryset(opiniones, request)
            serializer = RespuestasAOpinionSerializer(results, many=True)

            return paginator.get_paginated_response({"respuestas_a_opinion":serializer.data})

class CrearOpinion(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request, format=None):
        pass

    def post(self, request, format=None):
        autor = request.user
        data = request.data
        texto = data.get("texto")
        matricula = data.get("matricula")
        al_usuario = get_object_or_404(UserAccount, matricula=matricula)

        if texto:
 
            if Opinion.objects.all().exists():
                slug = str(int(Opinion.objects.all().last().slug) + 1 )
            else:
                slug = '1'

            nueva_opinion = Opinion(autor=autor, texto=texto, opinion_sobre=al_usuario, slug=slug)
            nueva_opinion.save()

            return Response({"mensaje":f"opinion sobre {al_usuario.nombre} añadida exitosa correctamente"}, status=status.HTTP_201_CREATED)
        else:
            return Response({"error":"se debe añadir un texto"}, status=status.HTTP_204_NO_CONTENT)    

class ResponderAOpinion(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request,  format=None):
        pass
    def post(self, request, slug, format=None):
        autor = request.user
        opinion = get_object_or_404(Opinion, slug=slug)
        data  = request.data

        texto = data.get("texto")

        if RespuestasAOpinion.objects.all().exists():
            slug_respuesta = str(int(RespuestasAOpinion.objects.all().last().slug) + 1)

        else:
            slug_respuesta = '1'
        
        nueva_respuesta = RespuestasAOpinion(
                                            autor=autor, 
                                             respuesta_a=opinion, 
                                             texto=texto,
                                             slug=slug_respuesta,

                                             )
        nueva_respuesta.save()
        return Response({"mensaje":"respuesta añadida de forma exitosa"}, status=status.HTTP_201_CREATED)
    

class Likear(APIView):
    permission_classes=[IsAuthenticated]
    def get(self, request, format=None):
        pass
    def post(self, request, slug, format=None):
        usuario = request.user
        opinion = get_object_or_404(Opinion, slug = slug)
        opinion.likes+=1
        opinion.save()
        print(f"el usuario {usuario.nombre} le a dado like a la opinion de {opinion.autor.nombre} sobre el perfil de {opinion.opinion_sobre.nombre}")

        return Response({"mensaje":"opinion likeada con exito"}, status=status.HTTP_200_OK)
    
class DisLikear(APIView):
    permission_classes=[IsAuthenticated]
    def get(self, request, format=None):
        pass
    def post(self, request, slug, format=None):
        usuario = request.user
        opinion = get_object_or_404(Opinion, slug = slug)
        opinion.dislikes+=1
        opinion.save()
        print(f"el usuario {usuario.nombre} le a dado like a la opinion de {opinion.autor.nombre} sobre el perfil de {opinion.opinion_sobre.nombre}")

        return Response({"mensaje":"opinion likeada con exito"}, status=status.HTTP_200_OK)
    
