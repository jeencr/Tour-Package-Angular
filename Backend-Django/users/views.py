from django.contrib.auth.models import User
from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from users.serializer import *


# Create your views here.


@api_view(['Get'])
def get_users(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

# @api_view(['POST'])
# def user_register(request):
#     serializer = RegisterSerializer(data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#         return Response({'message': 'User registered successfully'})
#     return Response(serializer.errors,)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_profile(request):
    serializer = UserSerializer(request.user)
    print(serializer.data)
    return Response({
         'id':request.user.id,
         'username':request.user.username,
         'email':request.user.email,
         'group':request.user.groups.first().name,
         })


@api_view(['POST'])
def customer_register(request):
        serializer = CustomerRegisterSerializer(data=request.data)

        if serializer.is_valid():
             serializer.save()
             return Response({'user registered Successfully'})
        
        return Response(serializer.errors)


@api_view(['POST'])
def provider_register(request):
     serializer = ProviderRegisterSerializer(data=request.data)

     if serializer.is_valid():
          serializer.save()
          return Response({'Provider Registered Successfully'})
     return Response(serializer.errors)

