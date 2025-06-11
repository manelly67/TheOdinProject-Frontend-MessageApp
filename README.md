# TheOdinProject-Frontend-MessageApp

This project follows the specifications within the curriculum of The Odin Project 
https://www.theodinproject.com/lessons/nodejs-messaging-app

React App
---------

This React App uses the Fetch API method to make requests to the Nodejs server.<br>
The url of the frontend is https://whitedove.netlify.app <br>
The url of the backend is https://top-backend-messagesapp.onrender.com <br>

Functionality
-------------
The app includes the following core functionality:

### Authorization ###

- A sign up component for create users
- A login component handled with Passport.js that grants a jwt token for 1 day
- A login as guest component that creates a guest user to view limited content

### Sending messages to another user ###

- Each user can create chats to write message with another user. 
- Only members of each chat can write and view messages within the chat.
- Users can see the profiles of the other chat members.
- Because the REST API backend cannot handle real time updates, a button was created inside the chat component to refresh the data.

### Customizing a user profile ###

- Users will be able to customize their profiles.
- The available avatars and colors are limited to a few options stored in the database.

### Guest mode access ###

The app can be accessed in guest mode and in this way it will be possible:
- have a token for one day.
- be able to see the chat model.
- be able to see the profiles of the users of the chat model.
- guest can customize their profiles.

- guests will not be able to start a new chat or write messages.

### Repositories ###
Backend: https://github.com/manelly67/TheOdinProject-Backend-MessagesApp <br>
Frontend: https://github.com/manelly67/TheOdinProject-Frontend-MessageApp

