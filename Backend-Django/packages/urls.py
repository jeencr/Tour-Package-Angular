

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
]
