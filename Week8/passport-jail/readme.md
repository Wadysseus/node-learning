Passport Jail
============

Objective
---------
Build an app that uses PassportJS to log users in and control what routes they can access.

Resources
---------
- <a href="http://passportjs.org/">PassportJS</a>
- <a href="https://github.com/RefactorU/exercise-starters/tree/master/week8/passport-jail/starter-code">Starter Code</a>

Requirements
---------

Part I - Setup
-----------
- Copy the jail starter code into your own project folder and install dependencies
- Run a <code>mongorestore</code> command on the dump folder. This will seed your database with the appropriate users. Make sure you check the database name in `app.js'!

Part II - Local Strategy
---------------------
- PassportJS uses "Strategies" to determine if a user should be authenticated. In app.js write a <code>LocalStrategy</code>.
- At the <code>/login</code> route, use the <code>LocalStrategy</code> you defined.

Part III - Lockdown
----------------
- Not everyone in the jail can go everywhere. To limit access, fill in the app.isAuthenticated middleware and apply it to the appropriate routes to make sure only logged in users can access the jail.
- Let's take it a little further. Certain users should only be able to access specific rooms in the jail. Write some more middleware that obeys the following rules :
    - Alice (warden) can go anywhere
    - Bob (guard) can go anywhere, except the warden's office
    - Carlos (visitor) can go to the lobby and the visitor's lounge
    - Eve (prisoner) can go to the cafeteria or Eve's jail cell
    - Mallory (prisoner) can go to the cafeteria or Mallory's cell