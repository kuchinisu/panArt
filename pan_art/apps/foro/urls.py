from django.urls import path

from .views import *

urlpatterns = [
    path('hilos/', HilosView.as_view()),
    path('crear_hilo/', SubirHilo.as_view()),
    path('respuestas/<slug>/', Respuestas.as_view()),
]
