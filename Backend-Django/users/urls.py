from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from users import views

urlpatterns=[
    path('', views.get_users,),
    path('login/',TokenObtainPairView.as_view()),
    path('refresh/',TokenRefreshView.as_view()),
    path('user_profile/', views.user_profile,),
    path('customer_register/', views.customer_register,),
    path('provider_register/', views.provider_register,),

]