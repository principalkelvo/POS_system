from rest_framework import serializers
from .models import Employee

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        read_only_fields=(
            'created_at',
            'modified_at',
            'created_by',
            
        ),
        fields=(
            'id',
            'name',
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