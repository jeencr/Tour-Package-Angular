from django.db import models
from users.models import Providers

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=100)
    def __str__(self):
        return self.name
    
class Destination(models.Model):

    name = models.CharField(max_length=100)
    description = models.TextField()
    latitude = models.CharField(max_length=100)
    longitude = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    
class DestinationImage(models.Model):

    destination = models.ForeignKey(Destination,on_delete=models.CASCADE,related_name='images')
    image = models.ImageField(upload_to='destinations/')

    def __str__(self):
        return self.destination.name
    

class Package(models.Model):
    destination = models.ForeignKey(Destination,on_delete=models.CASCADE)
    provider = models.ForeignKey(Providers,on_delete=models.CASCADE)
    category = models.ForeignKey(Category,on_delete=models.CASCADE)
    package_name = models.CharField(max_length=100)
    description = models.TextField()
    amount = models.DecimalField(max_digits=10,decimal_places=2)
    no_of_days = models.IntegerField()
    no_of_nights = models.IntegerField()
    no_of_adults = models.IntegerField()
    no_of_children = models.IntegerField()
    is_public = models.BooleanField(default=False)
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.package_name
    

class PackageImage(models.Model):
    package = models.ForeignKey(Package,on_delete=models.CASCADE)
    image = models.ImageField(upload_to='package_image/')

    def __str__(self):
        return self.package.package_name