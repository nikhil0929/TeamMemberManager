import json

from django.shortcuts import render
from Manager.models import Member
from django.core import serializers
from django.http import JsonResponse


# Create your views here.
# request -> response
# views.py is a request handler

# to run server: python manage.py runserver

# API endpoint: send list of members to client
def list_members(request):
    db_manager = Member.objects

    num_members = db_manager.count()
    member_query_set = db_manager.all().values()

    data = {'num_members': num_members, 'member_list': list(member_query_set)}

    return JsonResponse(data)

# API endpoint: retrieve new member information from request and input into database
def add_member(request):
    return

# API endpoint: retrieve member information (specified in request) and send to client.
# Then, change member information in database from client response.
def edit_member(request):
    return
