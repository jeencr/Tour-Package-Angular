from  rest_framework import serializers
from .models import Booking, Favorites, Package, PackageImage

from users.serializer import UserSerializer


class PackageImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PackageImage
        fields = '__all__'
class PackageSerializer(serializers.ModelSerializer):
    destination_name = serializers.CharField(
        source = 'destination.name',
        read_only =True
    )

    category_name = serializers.CharField(
        source = 'category.name',
        read_only =True
    )

    images = PackageImageSerializer(many=True,read_only=True)
    class Meta:
        model = Package
        fields = '__all__'


class FavoriteSerializer(serializers.ModelSerializer):

    package_details = PackageSerializer(
        source = 'package',
        read_only =True
    )
    class Meta:
        model = Favorites
        fields = '__all__'

class BookingSerializer(serializers.ModelSerializer):

    customer_name = serializers.CharField(
        source='customer.user.username',
        read_only=True
    )

    customer_email = serializers.CharField(
    source='customer.user.email',
    read_only=True
    )
    customer_phone = serializers.CharField(
    source='customer.phone',
    read_only=True
    )


    package_details = PackageSerializer(
    source = 'package',
    read_only =True
)
    class Meta:
        model = Booking
        fields = '__all__'