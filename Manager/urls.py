from django.urls import path
from . import views

# URL configuration
urlpatterns = [
    path('getMemberList/', views.list_members)
]