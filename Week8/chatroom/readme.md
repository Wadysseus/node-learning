Chatroom
========

Objective
-------
Build a real-time chat application using Socket.io

Skills
-------
- Socket.io
- Express
- Node.js
- Angular

Resources
---------
- <a href="http://socket.io/">socket.io</a>
- <a href="http://nodejs.org/">nodejs.org<a/>
- <a href="https://github.com/RefactorU/exercise-starters/tree/master/week8/chatroom/starter-code">Starter Code</a>

Requirements
--------------

Part I (Get Socket.io running)
-------------------
Download the starter code <a href="https://github.com/RefactorU/exercise-starters/tree/master/week8/chatroom/starter-code">here</a>.
- Run <code>npm install</code> inside of that directory.
- Once you get your server running you should see something like: <code>bash info - socket.io started</code>.  You now have socket.io running!

Part II (Setup socket events on the server)
--------------
- Now let's create an event to let the server know when a connection has been made by the client. Add a "connection" event to your app.js <code>io.sockets.on('connection',function(){...});</code>
- Create an empty object outside of your connection event to hold our users.
- Create an event inside of the connection event to receive a message

<strong>Note:</strong> All of our socket events on the server will go inside of the connection event.

Part III (Setup socket events on the client)
---------------------
- Now let's setup our client side events. The HTML has been provided for you. Create a connect statement to connect to your server <code>var socket = io.connect('http://localhost')</code>
- Now lets create a "connect" event <code>socket.on('connect', function(){})</code>
- Create a "message" event inside of the "connect" event's callback

Part IV (Send messages)
-----------------
- Use Angular to capture a keyup event. When enter is pressed use <code>socket.emit('message', 'SOME MESSAGE');</code> to send a message to your server
- On the server, <code>console.log()</code> the message to ensure that the message has made it to the server.
- On the server in your "message" event, send the message to the entire chatroom by doing <code>io.sockets.emit('message', 'my message');</code>
- On the client when the "message" event is fired, append the message to the div with the id "room".
- You should be able to open two tabs in Chrome with <code>http://localhost:3000</code> and chat back and forth.

Bonus I
-----------
- Whenever someone connects to the chat room, display a message to the room that shows that someone has connected.
- Whenever someone disconnects, announce to the room that someone has left.


Bonus II
-----------
- When a user connects to the server, emit an event that shows their socket ID in the right column of that chat UI.
- Create a feature that allows the user to change their user name.
- Everytime someone connects or disconnects you should be updating the "users" object that we created in Part II.

<strong>Success!</strong> Now you know how to create a real-time web app using websockets!