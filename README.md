
# Team Member Manager

The Team Member Management application allows users to view, edit, add, and delete team members.

![alt text](https://github.com/nikhil0929/TeamMemberManager/blob/09d892f289ccfc0a29e124c36890db9d26625b33/pictures/ListMember.png?raw=true)
![alt text](https://github.com/nikhil0929/TeamMemberManager/blob/346442fe343291c7f8201d350681ed401c7bd239/pictures/AddMember.png?raw=true)
![alt text](https://github.com/nikhil0929/TeamMemberManager/blob/346442fe343291c7f8201d350681ed401c7bd239/pictures/EditMember.png?raw=true)


This is a full-stack application built using Django and Postgres, along with React for the frontend.

## Backend

This backend server is built using django along with postres database for data storage. To run the backend service, you must first install PostgresDB using either the installation wizard or using Homebrew.

#### Install and Configure Postgres Database with Django

To download Postgres, you can use the installation wizard located at https://www.postgresql.org/download/. Choose your operating system and then follow the installation instructions. **Please take note of the database name, username, password, and port you inputted when starting postgres**

Currently, I have downloaded the postgres database to run on port 9876. To configure the postgres db settings for your own postgres installation, modify the ```settings.py``` file in the ```ServerApp/TeamMemberManagement``` subdirectory. Replace all the values in '<xxx>' with the values you inputted when creating your postgres instance.  

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

#### To start the django server:
If you haven't already, make sure you are in the ```ServerApp/``` directory:
```
cd ServerApp/
```
    
 Then, create your virtual enviornment:
 ```
 python3 -m venv venv
 ```

Activate virtual enviornment:
```
source venv/bin/activate
```
    
This project uses ```Django```, ```Django-cors```, and ```psycopg2``` dependencies.
To install them, use:
```
pip install Django==4.0.1 django-cors-headers psycopg2-Binary
```
    
Once those have finished installing, you can run the django backend server using:
```
python3 manage.py runserver
```
    
Now your server should be running on port 8000 at address: http://127.0.0.1:8000/

## Frontend client
Built using ReactJS and Material UI. You must install ```npm``` which you can do by going to the npm website. 

First, open a new terminal window. Now, make sure you are in the ```ClientApp/``` directory:
```
cd ClientApp/
```
    
Install the latest version of npm:
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
    
Now you should be able to interact with the application. 


## How to use application:
The instructions on how to use the application are shown on the application itself, but to reiterate:
  1. The member list is shown automatically on the home page
  2. To add members, click on the '+' button at the top right corner of the application. Fill in the details and click 'submit'
  3. To edit/delete members, click on any team member in the list provided, and edit the details. Click 'save' or 'delete' once done. 

