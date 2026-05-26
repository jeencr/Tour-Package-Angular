from django.shortcuts import render
from users.models import Providers
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .serializer import BookingSerializer, FavoriteSerializer, PackageImageSerializer, PackageReviewSerializer, PackageSerializer
from django.db.models import Avg

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


@api_view(['GET'])
def public_single_package(request,pk):

    try:
        package = Package.objects.get(id=pk)
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
    packages = Package.objects.filter(is_public='True')

    serializer = PackageSerializer(packages,many= True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_favorite(request):
    customer = Customers.objects.get(user = request.user)
    package_id = request.data.get('package')
    try:
        package = Package.objects.get(id = package_id)
    except Package.DoesNotExist:
        return Response({'message':'package Does not exist'})
    
    favorite,created = Favorites.objects.get_or_create(customer=customer,package=package)

    if created:
        return Response({'message':'Added to the favorite'})
    
    return Response({'message':'already in favorite'})


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def view_favorites(request):
    customer = Customers.objects.get(user=request.user)


    favorites = Favorites.objects.filter(customer=customer)

    serializer = FavoriteSerializer(favorites,many=True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_booking(request):
    customer = Customers.objects.get(user=request.user)
    data = request.data.copy()
    data['customer'] = customer.id
    serializer = BookingSerializer(data = data)
    if serializer.is_valid():
        serializer.save()

        return Response({'message': 'Package booked succefully'})

    return Response(serializer.errors)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def view_booking_customer(request):
    customer = Customers.objects.get(user = request.user)
    bookings = Booking.objects.filter(customer = customer)
    serializer  =BookingSerializer(bookings,many=True)
    return Response(serializer.data)



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def view_booking_provider(request):
    provider = Providers.objects.get(user = request.user)
    bookings = Booking.objects.filter(package__provider = provider)
    serializer  =BookingSerializer(bookings,many=True)
    return Response(serializer.data)



@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_status_booking(request,pk):
    provider = Providers.objects.get(user=request.user)

    try:
        booking = Booking.objects.get(package__provider=provider,id=pk)
    except Booking.DoesNotExist:
        return Response({'message':'Booking Does Not Exist'})
    
    serializer = BookingSerializer(booking,data=request.data,partial=True)

    if serializer.is_valid():
        serializer.save()
        return Response({'message':'status updated successfully'})
    
    return Response (serializer.errors)



@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_package_review(request):
    customer = Customers.objects.get(user=request.user)

    data = request.data.copy()

    data['customer'] = customer.id

    serializer = PackageReviewSerializer(data=data)

    if serializer.is_valid():
        serializer.save()
        return Response({'message':'Review added'})

    return Response(serializer.errors)


@api_view(['GET'])
def package_reviews(request, pk):
    reviews = PackageReview.objects.filter(package=pk)
    serializer = PackageReviewSerializer(reviews,many=True)
    average_rating = reviews.aggregate(Avg('rating'))['rating__avg']
    return Response({'reviews': serializer.data,'average_rating': average_rating})


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_destinations_provider(request):
    provider = Providers.objects.get(user = request.user)
    print(request.data)
    destination_name = request.data.get('destination')
    base_amount = request.data.get('amount')
    destination,created  = Destination.objects.get_or_create(name = destination_name)

    ProviderDestinations.objects.create(provider=provider,destination=destination,base_amount=base_amount)

    return Response({'message':'added the destination successfully '})

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def view_provider_destinations(request):
    provider = Providers.objects.get(user = request.user)
    d = ProviderDestinations.objects.filter(provider=provider)
    destinations=[]
    for i in d:
        destinations.append({
            'id':i.id,
            'destination_name':i.destination.name,
            'destination_id':i.destination.id,
            'base_amount':i.base_amount,
        })    

    return Response(destinations)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_destination_image(request):
    destination_id = request.data.get('id')
    print(destination_id,'sdondeuvjn')
    image = request.data.get('image')
    try:
        destination = Destination.objects.get(id = destination_id)
    except Destination.DoesNotExist:
        Response({'message':'destination does mot exist'})
    
    DestinationImage.objects.create(destination=destination,image=image)
    return Response({'message':'added image succefully'})


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_stay(request):
    destination_id = request.data.get('destination')
    print(destination_id,'sdondeuvjn')
    
    provider = Providers.objects.get(user = request.user )
    try:
        destination = ProviderDestinations.objects.get(id=destination_id,provider = provider)
    except ProviderDestinations.DoesNotExist:
        return Response({'message':'destination not found'})
    stay_name = request.data.get('stay_name')
    amount_per_night = request.data.get('amount_per_night')
    stay_name = request.data.get('stay_name')
    max_people = request.data.get('max_people')
    Stays.objects.create(destination=destination,provider=provider,stay_name=stay_name,amount_per_night=amount_per_night,max_people=max_people)
    return Response({'message':'success'})


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def view_stays_provider(request):
    provider = Providers.objects.get(user = request.user)
    data = Stays.objects.filter(provider=provider)
    stays = []
    for i in data:
        stays.append({
            'stay_id':i.id,
            'amount_per_night':i.amount_per_night,
            'max_people':i.max_people,
            'stay_name':i.stay_name,
            'destination':i.destination.destination.name,
            'provider':i.provider.user.username
        })
    return Response(stays)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_stays(request,pk):
    provider = Providers.objects.get(user = request.user)
    try:
        stay = Stays.objects.get(id=pk,provider=provider)
    except Stays.DoesNotExist:
        return Response({'message':'stay not found'})
    
    stay.delete()
    return Response({'message':'stay deleted successfully'})



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_single_stay(request,pk):
    provider = Providers.objects.get(user = request.user)
    try:
        stay = Stays.objects.get(id=pk,provider=provider)
    except Stays.DoesNotExist:
        return Response({'message':'stay not found'})
    
    data = {
        'stay_id':stay.id,
        'amount_per_night':stay.amount_per_night,
        'max_people':stay.max_people,
        'stay_name':stay.stay_name,
        'destination':stay.destination.destination.name,
        'destination_id':stay.destination.id,
        'provider':stay.provider.user.username
    }
    
    
    return Response(data)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_stay(request,pk):
    provider = Providers.objects.get(user = request.user)
    try:
        stay = Stays.objects.get(id=pk,provider=provider)
    except Stays.DoesNotExist:
        return Response({'message':'stay not found'})
    
    stay.stay_name = request.data.get('stay_name',stay.stay_name)
    stay.amount_per_night = request.data.get('amount_per_night',stay.amount_per_night)
    stay.max_people = request.data.get('max_people',stay.max_people)
    stay.destination_id = request.data.get('destination',stay.destination)
    stay.save()
    
    
    return Response({'message':'success'})

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_stay_images(request):
    stay_id = request.data.get('stay')
    image = request.data.get('image')

    try:
        stay = Stays.objects.get(id=stay_id)
    except Stays.DoesNotExist:
        return Response({'message':'stay not found'})
    
    StayImages.objects.create(stay=stay,image=image)
    return Response({'message':'Image added successfully'})

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def view_stay_images(request,stay_id):
    images = StayImages.objects.filter(stay_id=stay_id)
    data = []
    for i in images:
        data.append({
            'image':i.image.url,
            'id':i.id
        })
    
    return Response(data)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_stay_image(request,image_id):
    try:
        image = StayImages.objects.get(id=image_id)
    except StayImages.DoesNotExist:
        return Response({'message':'Image not found'})
    
    image.delete()
    return Response({'message':'Image deleted successfully'})





