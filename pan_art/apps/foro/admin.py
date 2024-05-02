from django.contrib import admin
from .models import Tema, Hilo, Comentario

admin.site.register(Tema)
admin.site.register(Comentario)
admin.site.register(Hilo)