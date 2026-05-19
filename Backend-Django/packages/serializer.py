from  rest_framework import serializers
from .models import Package, PackageImage


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

