from django.urls import path
from . import views

'''
Notes:
- Each path specified in 'urlpatterns' represents endpoints mapped to view function calls
- Each path is accessible by the client through HTTP requests
'''

# URL configuration
urlpatterns = [
    path('getMemberList/', views.list_members),
    path('addMember/', views.add_member),
    path('editMember/', views.edit_member),
    path('deleteMember/', views.delete_member)
]