from django.contrib.auth.models import Group, User
from rest_framework import serializers
from .models import Customers
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username', 'email']

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user

class CustomerRegisterSerializer(serializers.ModelSerializer):
    
    phone = serializers.CharField()
    place = serializers.CharField()
    district = serializers.CharField()
    
    class Meta:
        model = User
        
        fields = [
            'username',
            'email',
            'password',
            'phone',
            'place',
            'district'
        ]

        extra_kwargs ={
            'password':{'write_only':True}
        } 
    def create(self, validated_data):
        print('running')
        phone = validated_data.pop('phone')
        place = validated_data.pop('place')
        district = validated_data.pop('district')

        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
        )
        print('user created')
        user_group = Group.objects.get(name='Customer')
        user.groups.add(user_group)
        print(user_group)
        Customers.objects.create(
            user=user,
            phone=phone,
            place=place,
            district=district,
        )

        return user