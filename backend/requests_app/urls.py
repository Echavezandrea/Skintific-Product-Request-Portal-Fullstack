from django.contrib import admin
from django.urls import path
from django.http import JsonResponse

def home(request):
    return JsonResponse({
        "message": "Frontend and Backend Connected!"
    })

urlpatterns = [
    path('', home),   # this makes "/" work
    path('admin/', admin.site.urls),
    path('api/', home),
]