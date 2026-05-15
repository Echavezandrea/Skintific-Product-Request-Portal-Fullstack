from django.urls import path
from .views import create_request

urlpatterns = [
    path('submit/', create_request),
]