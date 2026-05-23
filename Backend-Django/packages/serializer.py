from  rest_framework import serializers
from .models import Booking, Favorites, Package, PackageImage, PackageReview

from users.serializer import UserSerializer
from django.db.models import Avg


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



    avg_rating = serializers.SerializerMethodField()

    
    def get_avg_rating(self, obj):

        average = obj.packagereview_set.aggregate(Avg('rating'))['rating__avg']

        if average:

            return round(average,1)

        return 0
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




class PackageReviewSerializer(serializers.ModelSerializer):

    customer_name = serializers.CharField(
        source='customer.user.username',
        read_only=True
    )

    class Meta:
        model = PackageReview
        fields = '__all__'