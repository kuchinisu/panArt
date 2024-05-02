from django.shortcuts import render, get_object_or_404

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from apps.user.models import UserAccount
from apps.utils.paginator import LargeSetPagination, SmallSetPagination, MiniSetPAgination

from .serializer import PostSerializer, ComentarioSerializer
from .models import Post, Comentarios, Vistas, Like, Dislike

from django.contrib.auth import get_user_model
import datetime

User = get_user_model()



class Posts(APIView):
    def get(self, request, format=None):
        if not Post.objects.all().exists():
            return Response({"error": "No se encontraron posts para mostrar"}, status=status.HTTP_404_NOT_FOUND)
        else:
            posts = Post.objects.all().order_by("-subido")

            paginator = LargeSetPagination()
            results = paginator.paginate_queryset(posts, request)
            serializer = PostSerializer(results, many=True)

            return paginator.get_paginated_response({"posts": serializer.data})
        
class PostsTags(APIView):
    def get(self, request, tag, format=None):
        if not Post.objects.all().exists():
            return Response({"error": "No se encontraron posts para mostrar"}, status=status.HTTP_404_NOT_FOUND)
        else:
            if Post.objects.filter(tags__contains=[tag]).exists():
                print(tag)
                posts = Post.objects.filter(tags__contains=[tag]).order_by("-subido")

                paginator = LargeSetPagination()
                results = paginator.paginate_queryset(posts, request)
                serializer = PostSerializer(results, many=True)

                return paginator.get_paginated_response({"posts_t": serializer.data})
            else:
                return Response({"error":"no hay trabajos relacionados con el tag"}, status=status.HTTP_404_NOT_FOUND)
         


class PostSlug(APIView):
    permission_classes = [IsAuthenticated] 
    def get(self, request, slug, format=None):
        usuario = request.user
        if not Post.objects.all().exists():
            return Response({"error":"no se encontraron posts para mostrar"},status=status.HTTP_404_NOT_FOUND)
        elif not Post.objects.filter(slug=slug).exists():
            return Response({"error":"el post no existe o fue eliminado"},status=status.HTTP_404_NOT_FOUND)
        
        else:
            posts = Post.objects.filter(slug=slug)
            paginator = LargeSetPagination()
            results = paginator.paginate_queryset(posts,request)
            serializer = PostSerializer(results, many=True)
            del_usuario = get_object_or_404(UserAccount, matricula=posts.first().usuario.matricula)
            print(usuario)
            if not Vistas.objects.filter(usuario=usuario, al_post=posts.first()):
                nueva_vista = Vistas(usuario=usuario, al_post=posts.first(), del_usuario=del_usuario)
                nueva_vista.save()
                    
           
            return paginator.get_paginated_response({"post":serializer.data})
        
class ComentariosDePost(APIView):
    def get(self, request, slug, format=None):
        post = get_object_or_404(Post, slug=str(slug))

        if Comentarios.objects.filter(al_post=post).exists():
            comentarios = Comentarios.objects.filter(al_post=post)
            paginator = LargeSetPagination()
            results = paginator.paginate_queryset(comentarios,request)
            serializer = ComentarioSerializer(results, many=True)

            return paginator.get_paginated_response({"comentarios":serializer.data})
        else:
            return Response({"error":"no hay comentarios aún"}, status=status.HTTP_404_NOT_FOUND)

class Comentar(APIView):
    permission_classes = [IsAuthenticated] 
    
    def get(self, request, format=None):
        pass
    
    def post(self, request, slug, format=None):
        user = request.user
        data = request.data

        contenido = data.get("contenido")
        print(contenido)
        print("ese fue el contendio")

        if not Post.objects.filter(slug=slug).exists():
            return Response({"error":"el post no está disponible o fue eliminado"}, status=status.HTTP_404_NOT_FOUND)
        else:
            post = get_object_or_404(Post, slug=slug)
            nuevo_comentario = Comentarios(al_post=post, autor=user, contenido=contenido, del_usuario=post.usuario)
            nuevo_comentario.save()

            return Response({"mensaje":"se a añadido el comentario de forma correcta"}, status=status.HTTP_201_CREATED)

class SubirPost(APIView):
    permission_classes = [IsAuthenticated] 

    def post(self, request, format=None):
        user = request.user
        data = request.data

        titulo = data.get("titulo")
        descripcion = data.get("descripcion")
        imagen = request.FILES.get("imagen") 

        tags_str = data.get("tags") 
        tags = [tag.strip() for tag in tags_str.split(",")]  

        print(tags)

        if Post.objects.all().exists():
            slug = int(Post.objects.all().last().slug) + 1
        else:
            slug = 1

        nuevo_post = Post(
            titulo=titulo, 
            descripcion=descripcion, 
            tags=tags, 
            usuario=user,
            slug=slug,
        )
        nuevo_post.imagen = imagen

        nuevo_post.save()

        return Response({"mensaje":"post subido correctamente"}, status=status.HTTP_201_CREATED)

class LikearPost(APIView):
    permission_classes=[IsAuthenticated]
    def get(self, request, format=None):
        pass

    def post(self, request, slug, format=None):
        usuario = request.user

        post = get_object_or_404(Post, slug=slug)
        if not Like.objects.filter(usuario=usuario, al_post=post).exists():
            nuevo_like = Like(usuario = usuario, al_post = post, del_usuario = post.usuario, fecha = datetime.datetime.today())
            nuevo_like.save()

            if Dislike.objects.filter(usuario=usuario, al_post=post).exists():
                dislike = Dislike.objects.filter(usuario=usuario, al_post=post).first()
                dislike.delete()

            return Response({'mensaje':'like'}, status=status.HTTP_200_OK)
        else:
            return Response({'no autorizo':f'el post ya tiene un like del usuario {usuario.matricula}'})

class DislikearPost(APIView):
    permission_classes=[IsAuthenticated]
    def get(self, request,  format=None):
        pass
    def post(self, request, slug, format=None):
        usuario = request.user

        post = get_object_or_404(Post, slug=slug)
        if not Dislike.objects.filter(usuario=usuario, al_post=post).exists():
            nuevo_dislike = Dislike(usuario = usuario, al_post = post, del_usuario = post.usuario, fecha = datetime.datetime.today())
            nuevo_dislike.save()

            if Like.objects.filter(usuario=usuario, al_post=post).exists():
                like = Like.objects.filter(usuario=usuario, al_post=post).first()
                like.delete()

            return Response({'mensaje':'dislike'}, status=status.HTTP_200_OK)
        else:
            return Response({'no autorizo':f'el post ya tiene un dislike del usuario {usuario.matricula}'})

class LikesYDislikesDePost(APIView):
    def get(self, request, slug, format=None):
        post = get_object_or_404(Post, slug=slug)

        likes = len(Like.objects.filter(al_post=post))
        dislikes = len(Dislike.objects.filter(al_post=post))

        dat = {
            'likes':likes,
            'dislikes':dislikes,
        }

        return Response({'likes_y_dislikes':dat}, status=status.HTTP_200_OK)

class PaginaUsuario(APIView):
    def get(self, request, matricula, format=None):
        print("se usa la funcion")
        usuario = get_object_or_404(UserAccount, matricula=matricula)

        posts = Post.objects.filter(usuario=usuario)
        paginator = SmallSetPagination()
        results = paginator.paginate_queryset(posts,request)
        serializer = PostSerializer(results, many=True)

        datos_usuario = {
            "nombre":usuario.nombre,
            "foto": usuario.get_foto(),
            "banner":usuario.get_banner()
        }

        return paginator.get_paginated_response({"posts":serializer.data, "usuario":datos_usuario})
    
class GaleriaUsuario(APIView):
    def get(self, request, matricula, format=None):
        print("se usa la funcion")
        usuario = get_object_or_404(UserAccount, matricula=matricula)

        posts = Post.objects.filter(usuario=usuario).order_by("subido")
        paginator = LargeSetPagination()
        results = paginator.paginate_queryset(posts,request)
        serializer = PostSerializer(results, many=True)

        datos_usuario = {
            "nombre":usuario.nombre,
            "foto": usuario.get_foto(),
            "banner":usuario.get_banner()
        }

        return paginator.get_paginated_response({"galeria":serializer.data, "usuario":datos_usuario})

class VistaPreviaPosts(APIView):
    def get(self, request, slug, format=None):
        print('usar vista de galería previa')
        post = get_object_or_404(Post, slug = slug)
        usuario = post.usuario

        posts = Post.objects.filter(usuario=usuario)
        
        if not posts.exists():
            return Response({'error':'el usuario no tiene posts'}, status=status.HTTP_404_NOT_FOUND)
        
        paginator = SmallSetPagination()
        results = paginator.paginate_queryset(posts, request)
        serializer = PostSerializer(results, many=True)
        
        return paginator.get_paginated_response({'posts_preview': serializer.data})