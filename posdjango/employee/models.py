from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinLengthValidator, RegexValidator
from django.utils.translation import gettext_lazy as _

from io import BytesIO
from PIL import Image
from django.core.files import File


def upload_to(instance, filename):
    return 'uploads/{filename}'.format(filename=filename)



class Employee(models.Model):
    #status
    ACTIVE='active'
    INACTIVE='inactive'

    STATUS_CHOICES = (
        (ACTIVE,'active'),
        (INACTIVE,'inactive')
    )

    #marital_status
    SINGLE='single'
    MARRIED='married'

    MARITAL_CHOICES=(
        (SINGLE,'single'),
        (MARRIED,'married')
    )
    
    user= models.OneToOneField(User,related_name='userprofile', on_delete=models.CASCADE)
    is_employee= models.BooleanField(default=True)
    fname= models.CharField(max_length=255)
    lname= models.CharField(max_length=255)
    username= models.CharField(max_length=255, unique=True,blank=True, null=True, editable=False)
    id_card= models.CharField(max_length=9,validators=[MinLengthValidator(9)], unique=True)
    reg_no= models.AutoField(unique='True',primary_key=True)
    phoneNumberRegex =RegexValidator(regex= r"^\+?1?\d{8,15}$")
    phone= models.CharField(max_length=16, validators=[phoneNumberRegex], unique=True)
    email= models.EmailField(blank=True, max_length=255)
    location= models.CharField(max_length=255)
    marital_status= models.CharField(max_length=255, choices=MARITAL_CHOICES, default=SINGLE)
    position= models.CharField(max_length=255)
    status= models.CharField(max_length=25, choices=STATUS_CHOICES,default=ACTIVE)
    total_sales= models.CharField(max_length=255,default=0)
    image= models.ImageField(_("Image"), upload_to=upload_to,default='uploads/default.jpg')
    thumbnail= models.ImageField(upload_to=upload_to,blank=True,null=True)
    created_by = models.ForeignKey(User, related_name="employees", on_delete=models.CASCADE)
    created_at= models.DateTimeField(auto_now_add=True)
    modified_at= models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering =('-created_at',) #sort by date #added negative to descending order
        

    def __str__(self): #change to string
            return self.fname
        
    def get_absolute_url(self):
        return f'/{self.reg_no}/'
        
        
    def get_image(self):                
        if self.image:
            return 'http://127.0.0.1:8000'+self.image.url
        return ''
        
            
        
    def get_thumbnail(self):
        if self.thumbnail:
            return 'http://127.0.0.1:8000'+self.thumbnail.url
        else:
            if self.image:
                self.thumbnail = self.make_thumbnail(self.image)
                self.save
                return 'http://127.0.0.1:8000'+self.thumbnail.url
            else:
                return ''
        
    def make_thumbnail(self,image,size= (300,300)):
        img = Image.open(image)
        img.convert('RGB')
        img.thumbnail(size)

        thumb_io = BytesIO()
        img.save(thumb_io,'JPEG', quality=85)
        thumbnail = File(thumb_io, name=image.name)

        return thumbnail
    
    def get_username(self):
        first_letter= self.fname
        return first_letter[0].upper() + self.lname.upper()
        

User.userprofile = property(lambda u:Employee.objects.get_or_create(user=u)[0])
