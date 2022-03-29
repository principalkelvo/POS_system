# Generated by Django 4.0.3 on 2022-03-29 20:41

from django.db import migrations, models
import employee.models


class Migration(migrations.Migration):

    dependencies = [
        ('employee', '0004_employee_image_data'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employee',
            name='image',
            field=models.ImageField(default='uploads/default.jpg', upload_to=employee.models.upload_to, verbose_name='Image'),
        ),
    ]
