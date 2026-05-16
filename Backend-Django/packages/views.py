from django.shortcuts import render
from users.models import Providers
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .serializer import PackageSerializer

# Create your views here.

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_package(request):
    provider = Providers.objects.get(user = request.user)

    if provider.is_approved ==False:
        return Response({'message':'Provider not approved'})
    
    data = request.data.copy()
    data['provider'] = provider.id

    serializers = PackageSerializer(data=data)
    if serializers.is_valid():
        serializers.save()

        return Response({'message':'Package added'})
    return Response(serializers.errors)

