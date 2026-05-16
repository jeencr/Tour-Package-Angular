from django.contrib import admin
from .models import Customers,Providers

# Register your models here.
admin.site.register(Customers)
admin.site.register(Providers)