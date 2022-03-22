from django.shortcuts import render

from rest_framework import viewsets
from .models import Employee
from .serializers import EmployeeSerializer

class EmployeeViewSet(viewsets.ModelViewSet):
    serializer_class= EmployeeSerializer
    queryset= Employee.objects.all() #shows all info
    
    #overide the all query and filters the one we created
    def get_queryset(self):
        return self.queryset.filter(created_by=self.request.User)

# Create your views here.
