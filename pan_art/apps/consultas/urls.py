from django.urls import path
from .views import TablaDeUsuarios
urlpatterns = [
    path("usuarios/", TablaDeUsuarios.as_view())
]
