from django.contrib.auth.models import User
from django.db import models

# Create your models here.

class Customers(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    phone = models.CharField(max_length=20)
    place = models.CharField(max_length=100)
    district = models.CharField(max_length=100)

    def __str__(self):
        return self.user.username

class Providers(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    phone = models.CharField(max_length=20)
    company_name = models.CharField(max_length=100)
    place = models.CharField(max_length=100)
    district = models.CharField(max_length=100)
    is_approved = models.BooleanField(default=False)

    def __str__(self):
        return self.user.username