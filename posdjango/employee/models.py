from django.db import models
from django.contrib.auth.models import User


from io import BytesIO
from PIL import Image
from django.core.files import File



# Create your models here.

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

class Employee(models.Model):
    name= models.CharField(max_length=255)
    id_card= models.CharField(max_length=9)
    reg_no= models.CharField(max_length=255)
    phone= models.CharField(max_length=255)
    email= models.EmailField()
    location= models.CharField(max_length=255)
    marital_status= models.CharField(max_length=255, choices=MARITAL_CHOICES, default=SINGLE)
    position= models.CharField(max_length=255)
    status= models.CharField(max_length=25, choices=STATUS_CHOICES,default=ACTIVE)
    total_sales= models.CharField(max_length=255,default=0,blank=True,null=True)
    image= models.ImageField(upload_to='uploads/',blank=True,null=True)
    thumbnail= models.ImageField(upload_to='uploads/',blank=True,null=True)
    created_by= models.ForeignKey(User, related_name="employees", on_delete= models.CASCADE)
    created_at= models.DateTimeField(auto_now_add=True)
    modified_at= models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering =('-created_at',) #sort by date #added negative to descending order

    def __str__(self): #change to string
            return self.name
        
    def get_absolute_url(self):
            return f'/{self.id}/'
        
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