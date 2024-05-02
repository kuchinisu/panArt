from django.urls import path
from .views import *

urlpatterns = [
    path('posts/', Posts.as_view()),
    path('posts/<tag>/', PostsTags.as_view()),
    path('post/<slug>/', PostSlug.as_view()),
    path('comentarios/<slug>/', ComentariosDePost.as_view()),
    path('add_comentario/<slug>/', Comentar.as_view()), 
    path('subir/', SubirPost.as_view()),
    path('usuario/<matricula>/', PaginaUsuario.as_view()),
    path('usuario/<matricula>/galeria/', GaleriaUsuario.as_view()),
    path('likear_post/<slug>/', LikearPost.as_view()),
    path('dislikear_post/<slug>/', DislikearPost.as_view()),
    path('likes_y_dislikes_de_post/<slug>/', LikesYDislikesDePost.as_view()),
    path('usuario/preview/<slug>/', VistaPreviaPosts.as_view()),
]
