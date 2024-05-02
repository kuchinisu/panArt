from django.urls import path
from .views import *

urlpatterns = [
    path('usuario/<matricula>/', Opiniones.as_view()),
    path('respuestas/<slug>', RespustasAOpiniones.as_view()),
    path('mandar_opinion/', CrearOpinion.as_view()),
    path('responder_opinion/<slug>/', ResponderAOpinion.as_view()),
    path('likear_opinion/<slug>/', Likear.as_view()),
    path('dislikear_opinion/<slug>/', DisLikear.as_view()),
]
