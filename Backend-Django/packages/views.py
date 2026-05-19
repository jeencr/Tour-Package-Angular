from django.shortcuts import render
from users.models import Providers
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .serializer import PackageImageSerializer, PackageSerializer

from .models import *

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


@api_view(['GET'])
def categories_list(request):
    categories = Category.objects.all()
    data =[]
    for i in categories:
        data.append({
            'id':i.id,
            'name':i.name,
        })
    
    return Response(data)


@api_view(['GET'])
def destinations_lists(request):
    destinations= Destination.objects.all()
    data = []
    for i in destinations:
        data.append({
            'id':i.id,
            'name':i.name,
        })
    return Response(data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def provider_packages(request):
    provider = Providers.objects.get(user = request.user)

    packages = Package.objects.filter(provider = provider)

    serializer = PackageSerializer(packages,many=True)
    print(serializer.data)
    return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_package(request,pk):
    provider = Providers.objects.get(user = request.user)

    try:
        package = Package.objects.get(id = pk,provider = provider)
    except Package.DoesNotExist:
        return Response({'message':'Package not Found'})
    
    package.delete()

    return Response({'message':'success'})


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def single_package(request,pk):
    provider  = Providers.objects.get(user = request.user)

    try:
        package = Package.objects.get(id=pk,provider=provider)
    except Package.DoesNotExist:
        return Response({'Package does not exist'})

    serializer = PackageSerializer(package)
    return Response(serializer.data)



@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_package(request,pk):
    provider  = Providers.objects.get(user = request.user)

    try:
        package = Package.objects.get(id=pk,provider=provider)
    except Package.DoesNotExist:
        return Response({'Package does not exist'})

    serializer = PackageSerializer(package,data=request.data,partial = True)

    if serializer.is_valid():
        serializer.save()

    
        return Response({"message":"success"})
    
    return Response(serializer.errors)



@api_view(['POST'])
@permission_classes([IsAuthenticated])
def upload_images_packages(request):
    provider = Providers.objects.get(user = request.user)
    package_id = request.data.get('package')

    try:
        package = Package.objects.get(provider=provider,id = package_id)
    
    except Package.DoesNotExist:
        return Response({'message':'Package Not Found'})
    
    serializer = PackageImageSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response({'message':'IMage added successfully'})
    
    return Response(serializer.errors)
 
@api_view(['GET'])
def public_packages(request):
    packages = Package.objects.filter(is_public='true')

    serializer = PackageSerializer(packages,many= True)
    return Response(serializer.data)