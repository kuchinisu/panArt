from django.urls import path
from .views import *

urlpatterns = [
    path('actualizar_foto/', ActualizarFotoDePerfil.as_view()),
    path('mi_cuenta/', MiCuenta.as_view()),
]
 