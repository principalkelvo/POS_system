from django.shortcuts import render

from rest_framework import viewsets, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import FormParser,MultiPartParser
from .models import Employee
from .serializers import EmployeeSerializer

class EmployeeViewSet(viewsets.ModelViewSet):
    serializer_class= EmployeeSerializer
    queryset= Employee.objects.all() #shows all info
    parser_classes = [MultiPartParser, FormParser]
    
    def create(self, request, format=None):
        print(request.data)
        serializer = EmployeeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(created_by=self.request.user)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    #overide the all query and filters the one we created
    def get_queryset(self):
        return self.queryset.filter(created_by=self.request.user)
    

# Create your views here.
