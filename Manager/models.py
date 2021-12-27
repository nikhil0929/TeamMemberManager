
from django.db import models
from django.forms import ModelForm

# Create your models here.
'''
Notes:
In django, a model is a source of information about the data that we are storing.
Each model maps to its own table in the database

To convert models to database schema, run:
    1. python manage.py makemigrations 
    2. python manage.py migrate
'''

# Creates a member model using specified fields
class Member(models.Model):
    ROLE_CHOCIES = [
        ('R', 'Regular'),
        ('A', 'Admin'),
    ]
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=15)
    role = models.CharField(max_length=1, choices=ROLE_CHOCIES, default='R')

class MemberForm(ModelForm):
    class Meta:
        model = Member
        fields = ['first_name', 'last_name', 'email', 'phone_number', 'role']


# Register models for use in admin site
