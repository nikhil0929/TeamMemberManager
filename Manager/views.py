import json

from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

from Manager.models import Member, MemberForm
from django.http import JsonResponse, HttpResponse


'''
Notes:
- Views.py is the request handler (request -> response)
- Each function defined here takes in a request parameter sent from the client

run:
- <Model>.objects.all() - Returns the query set of all items in the database for that model
    - .save() - saves changes made to model instance in database
    - .create() - creates new instance of model in database
    - .delete() - deletes instance of member in database
    
'''

# Create your views here.
# to run server: python manage.py runserver

# API endpoint: send list of members to client
def list_members(request):
    db_manager = Member.objects
    num_members = db_manager.count()
    member_query_set = db_manager.all().values()

    data = {'num_members': num_members, 'member_list': list(member_query_set)}

    return JsonResponse(data)

# API endpoint: retrieve new member information from request and input into database
@csrf_exempt
def add_member(request):
    if request.method == 'POST':
        form = MemberForm(request.POST)
        if form.is_valid():
            newMember = form.data.dict()
            Member.objects.create(
                first_name=newMember['first_name'],
                last_name=newMember['last_name'],
                email=newMember['email'],
                phone_number=newMember['phone_number'],
                role=newMember['role']
            )
            return HttpResponse('SUCCESS')
        else:
            return HttpResponse('FAILURE')

# API endpoint: retrieve existing member with modified fields in request form, apply changes to database
@csrf_exempt
def edit_member(request):

    if request.method == 'POST':
        form = MemberForm(request.POST)
        if form.is_valid():
            reqMember = form.data.dict()
            curr_member = Member.objects.get(id=reqMember['id'])
            for key, val in reqMember.items():
                curr_member_field = getattr(curr_member, key)
                if not curr_member_field == val:
                    setattr(curr_member, key, val)
            curr_member.save()
            return HttpResponse('SUCCESS')
        else:
            return HttpResponse('FAILURE')
    return


# API endpoint: retrieve member from request, delete that member from database
@csrf_exempt
def delete_member(request):

    if request.method == 'POST':
        form = MemberForm(request.POST)
        if form.is_valid():
            reqMember = form.data.dict()
            curr_member = Member.objects.get(id=reqMember['id'])
            curr_member.delete()
            return HttpResponse('SUCCESS')
        else:
            return HttpResponse('FAILURE')
    return
