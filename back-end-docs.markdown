---
title: Back-end Docs
date: 2017-09-13 20:50:00 -04:00
position: 4
layout: basic
---

## Access
http://api.cchange.ga

## Formatting
All routes listen to POST requests
All parameters are sent in the POST body as JSON
Headers should include 'content-type': 'application/json'

## Routes

### /user.create
Creates a new user, authorizes session
Request: name: "", email: "", password: "" (letters, numbers, minlength 8)
Response: user: {}, token: ""

### /user.login
Authorizes user
Request: email: "", password: ""
Response: user: {}, token: ""

### /charityToken.create
Creates a charity token for an email, sends email
Request: email: "", adminPassword: ""
Response: charityToken: {}

### /charity.create
Creates a create for a charityUser
Headers: Authorization
Request: name: "", description: ""
Response: charity: {}

## Installation

Clone the repository
`git clone https://github.com/comp523-602/cchange-api.git`

Set up the repository
`npm install` - installs required packages

Create a config.js file for your environment
```
modules.exports = {
  'ip': "127.0.0.1",
  'port': "3000",
  'database': "mongodb://<dbuser>:<password>@<hostname>:<port>/<dbname>",
  'secret': "<auth secret key>",
  'adminPassword': "<password for admin panel",
  'sendGrid': "<SendGrid API key>",
  'fromEmail': "<email to send mail as>"
}'
```

Run the server
`node server.js`

## Libraries used

Express: listens to port, handles server routes ([https://expressjs.com/en/guide/routing.html](https://expressjs.com/en/guide/routing.html))
Mongoose: MongoDB database tool, used for database connection, schemas, queries, and updates
\([http://mongoosejs.com/docs/guide.html](http://mongoosejs.com/docs/guide.html))
Async: utilities for synchronous/asynchronous functions, used especially for waterfall\[\] callback chaining ([https://caolan.github.io/async/docs.html](https://caolan.github.io/async/docs.html))
BodyParser: parses JSON body on POST requests
JSON Web Token: used to generate tokens for authorization ([https://github.com/auth0/node-jsonwebtoken](https://github.com/auth0/node-jsonwebtoken))
Password Hash: used to hash and verify passwords ([https://github.com/davidwood/node-password-hash](https://github.com/davidwood/node-password-hash))
Moment.js: used to handle dates
UUID: used to generate unique IDs
Morgan: color-coded request logging for Express
SendGrid: used to send token emails to charity users

## Style guidelines

Dependencies (libraries, in-app tools, other includes, etc) appear at top of files, variable names are capitalized
Callback functions - the first argument is always an err (to stay consistent with the Async library), passed variables come next
Arguments - if a function has more than one non-callback argument, it should be initialized as
`functionName ({arg1, arg2}, callback)`
and called as:

    functionName({
      arg1: "value1",
      arg2: "value2"
    }, function () {
      // callback functionality here`
    });

Object notation: single quotes for keys, double quotes for string values

## File Structure

server.js - primary file, opens connection to database, runs server with routes from api/Routes.js
**api/model** - files for each model object and Object.js (which all objects extend)
**api/routes** - files for each group of routes for auth and interactions with each model object
**api/tools** - database tools, timestamp tools, more