from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import ProductRequest
from .serializer import ProductRequestSerializer

@api_view(['POST'])
def create_request(request):
    serializer = ProductRequestSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Request saved successfully"})
    return Response(serializer.errors)