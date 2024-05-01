# YourPlaces

[Frontend Repository:](https://github.com/BulletToothTony/Places-App-Frontend)

Developed by **Henry Westhoff-Lewis**

## Table of Contents

- [About The Project](#about-the-project)
- [Key Features](#key-features)
- [Built With](#built-with)
- [Authentication](#authentication)
- [API Routes](#api-routes)

## About The Project

This is a messaging application which allows users to send messages to one another either in group chats or privately.

This is a full stack MERN app allowing users to submit places they've visited allowing users to comment on these. The application allows users to CREATE, READ, UPDATE and DELETE with various features such as authentication and viewing the location on a live map. 

### Key Features

#### JWT-based Authentication and Authorization
The messenger app implements JWT-based authentication and authorisation. This approach allows users to securely authenticate and access protected resources. When a user logs in, the server issues a JSON Web Token (JWT) that is then stored in the frontend. This token is used to authenticate subsequent requests to protected routes. The token is signed with a passcode on creation and is sent from the front end with the headers.

#### User creation
The users are created based on a model on the backend which is connected to mongoDB using mongoose. Users passwords are encrypted and hashed using bcrypt before being stored on the server. No one with access to the DB can view the passwords in plaintext as they are encrypted before being stored.

#### Place Management
The API allows users to create places, read, update and delete them. They can also comment on other user places, user can delete their own comments.

#### Integration with Frontend Client
The backend API integrates seamlessly with the frontend client, allowing requests to easily be made to the different routes allowing a fast and interactive experience for the user. The DB used is MongoDB allowing for real time updates whenever a request is made.


## Built With

##### - MongoDB
##### - Express.js
##### - Node.js

## Authentication

Add routes here
