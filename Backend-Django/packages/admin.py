from django.contrib import admin
from .models import *
# Register your models here.
admin.site.register(Category)
admin.site.register(Destination)
admin.site.register(DestinationImage)
admin.site.register(Package)
admin.site.register(PackageImage)