

from django.urls import path
from packages import views

urlpatterns =[

    path('create_package/',views.create_package),
    path('categories_list/',views.categories_list),
    path('destinations_lists/',views.destinations_lists),
    path('provider_packages/',views.provider_packages),
    path('delete_package/<pk>/',views.delete_package),
    path('single_package/<pk>/',views.single_package),
    path('update_package/<pk>/',views.update_package),
    path('upload_images_packages/',views.upload_images_packages),
    path('public_packages/',views.public_packages),
    path('public_single_package/<pk>/',views.public_single_package),
    path('add_favorite/',views.add_favorite),
    path('view_favorites/',views.view_favorites),
    path('create_booking/',views.create_booking),
    path('view_booking_customer/',views.view_booking_customer),
    path('view_booking_provider/',views.view_booking_provider),
    path('update_status_booking/<pk>/',views.update_status_booking),
    path('package_reviews/<pk>/',views.package_reviews),
    path('add_package_review/',views.add_package_review),
    path('add_destinations_provider/',views.add_destinations_provider),
    path('view_provider_destinations/',views.view_provider_destinations),
    path('add_destination_image/',views.add_destination_image),
    path('add_stay/',views.add_stay),
    path('view_stays_provider/',views.view_stays_provider),
    path('delete_stay/<pk>/',views.delete_stays),
    path('update_stay/<pk>/',views.update_stay),
    path('get_single_stay/<pk>/',views.get_single_stay),
    path('add_stay_images/',views.add_stay_images),
    path('view_stay_images/<stay_id>/',views.view_stay_images),
    path('delete_stay_image/<image_id>/',views.delete_stay_image),
]
