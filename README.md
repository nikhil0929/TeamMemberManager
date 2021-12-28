
# Team Member Manager

The Team Member Management application allows users to view, edit, add, and delete team members.

![alt text](https://github.com/nikhil0929/TeamMemberManager/blob/09d892f289ccfc0a29e124c36890db9d26625b33/pictures/ListMember.png?raw=true)
![alt text](https://github.com/nikhil0929/TeamMemberManager/blob/346442fe343291c7f8201d350681ed401c7bd239/pictures/AddMember.png?raw=true)
![alt text](https://github.com/nikhil0929/TeamMemberManager/blob/346442fe343291c7f8201d350681ed401c7bd239/pictures/EditMember.png?raw=true)


This is a full-stack application built using Django and Postgres, along with React for the frontend.

## Backend

This backend server is built using django along with postres database for data storage. Make sure you have django and postgres installed on your machine. 
You must also configure django with the postgres db in the settings.py file.

Currently, I have downloaded the postgres database to run on port 9876. To configure the postgres db settings for your own postgres installation, modify the ```settings.py``` file in the ```TeamMemberManagement``` subdirectory

```
...
# Using the Postgres database engine for this project
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': <database_name> ,
        'USER': <username>,
        'PASSWORD': <password>,
        'HOST': 'localhost',
        'PORT': '9876',
    }
}
...
```
Once that is configured, you can continue with starting the application.

To start the django server:

First, download the zip file and move into the project root directory
```
cd ~/TeamMemberManager-main
```

Then, create your virtual enviornment:
```
python3 -m venv venv
```

Activate virtual enviornment:
```
source venv/bin/activate
```

Run the django backend server:
```
python3 manage.py runserver
```

Now your server should be running on port 8000 at address: http://127.0.0.1:8000/

## Frontend client
Built using ReactJS and Material UI. Make sure you have the latest version of node and npm installed on your machine


Once you have npm installed, change directory to where the client application is stored

```
cd ./TeamMemberManager-main/instawork_team-member-manager-client
```

Install npm:
```
npm install
```

start the front-end server: 
```
npm start
```

If you are getting errors relating to missing Material UI components, you can install them using the command:
```
npm install @mui/material @emotion/react @emotion/styled
```

The front-end server now should be running on port 3000 at address: http://localhost:3000/


## How to use application:
The instructions on how to use the application are shown on the application itself, but to reiterate:
  1. The member list is shown automatically on the home page
  2. To add members, click on the '+' button at the top right corner of the application. Fill in the details and click 'submit'
  3. To edit/delete members, click on any team member in the list provided, and edit the details. Click 'save' or 'delete' once done. 

