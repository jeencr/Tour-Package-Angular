

from django.urls import path
from packages import views

urlpatterns =[
    path('create_package/',views.create_package)
]