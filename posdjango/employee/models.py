from django.contrib.auth.models import User
from django.db import models



# Create your models here.
class Employee(models.Model):
    phone= models.CharField(max_length=255)
    email= models.EmailField()
    created_by= models.ForeignKey(User, related_name='employees', on_delete=models.CASCADE)
    created_at= models.DateTimeField(auto_now_add=True)
    modified_at= models.DateTimeField(auto_now=True)
