# Generated by Django 4.0.3 on 2022-03-29 20:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('employee', '0005_alter_employee_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employee',
            name='total_sales',
            field=models.CharField(default=0, max_length=255),
        ),
    ]
