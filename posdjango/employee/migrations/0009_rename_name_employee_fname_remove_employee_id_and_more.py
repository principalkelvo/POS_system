# Generated by Django 4.0.3 on 2022-04-22 22:08

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('employee', '0008_alter_employee_created_by'),
    ]

    operations = [
        migrations.RenameField(
            model_name='employee',
            old_name='name',
            new_name='fname',
        ),
        migrations.RemoveField(
            model_name='employee',
            name='id',
        ),
        migrations.AddField(
            model_name='employee',
            name='lname',
            field=models.CharField(default=3213, max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='employee',
            name='username',
            field=models.CharField(blank=True, max_length=255, null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='employee',
            name='email',
            field=models.EmailField(blank=True, max_length=255),
        ),
        migrations.AlterField(
            model_name='employee',
            name='id_card',
            field=models.CharField(max_length=9, unique=True),
        ),
        migrations.AlterField(
            model_name='employee',
            name='phone',
            field=models.CharField(max_length=12, validators=[django.core.validators.MinLengthValidator(12, message='Add country code eg.254712345678')]),
        ),
        migrations.AlterField(
            model_name='employee',
            name='reg_no',
            field=models.AutoField(primary_key=True, serialize=False, unique='True', validators=[django.core.validators.MinLengthValidator(9)]),
        ),
    ]
