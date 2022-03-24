from rest_framework import serializers
from .models import Employee

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        read_only_fields=(
            'created_by',
            'created_at',
            'modified_at',
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
            'get_image',
            'get_thumbnail',
        )