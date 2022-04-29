from django.contrib.auth.models import User

from rest_framework import serializers
from .models import Employee


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model= User
        fields= '__all__'
        
class EmployeeSerializer(serializers.ModelSerializer):
    
    user=UserSerializer(many=False)
    class Meta:
        model = Employee
        read_only_fields=(
            'created_at',
            'modified_at',
            'created_by',
            
        ),
        fields=(
            'user',
            'fname',
            'lname',
            'get_username',
            'id_card',
            'reg_no',
            'email',
            'phone',
            'location',
            'marital_status',
            'position',
            'status',
            'total_sales',
            'get_absolute_url',
            'image',
            'get_image',
            'get_thumbnail',
        )
    def create(self,validated_data):
        user_data= validated_data.pop('user')
        user_instance = User.objects.create(user=user_data['get_username'],email=user_data['email'],password=user_data['password'])
        user_instance.save()

        employee_instance = Employee.objects.create(**validated_data, user=user_instance)
        employee_instance.save()
        print (user_data)
        return employee_instance


