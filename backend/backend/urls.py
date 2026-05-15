from django.contrib import admin
from django.urls import path
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

def home(request):
    return JsonResponse({
        "message": "Frontend and Backend Connected!"
    })

@csrf_exempt
def submit_request(request):
    if request.method == "POST":
        data = json.loads(request.body)

        return JsonResponse({
            "status": "success",
            "received": data
        })

    return JsonResponse({
        "error": "Only POST allowed"
    })

urlpatterns = [
    path('', home),
    path('api/', home),
    path('api/submit/', submit_request),
    path('admin/', admin.site.urls),
]