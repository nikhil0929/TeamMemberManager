from django.db import models

# Create your models here.

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