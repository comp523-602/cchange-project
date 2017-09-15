---
title: Back-end Docs
date: 2017-09-13 20:50:00 -04:00
position: 4
layout: basic
---

## Routes

### /auth.create
Request: name: "", email: "", password: ""
Response: user: "", token: ""

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
}'
```

Run the server
`node server.js`

## Libraries used

Express: listens to port, handles server routes ([https://expressjs.com/en/guide/routing.html](https://expressjs.com/en/guide/routing.html))
Mongoose: MongoDB database tool, used for database connection, schemas, queries, and updates
\([http://mongoosejs.com/docs/guide.html](http://mongoosejs.com/docs/guide.html))
Async: utilities for synchronous/asynchronous functions, used especially for waterfall\[\] callback chaining ([https://caolan.github.io/async/docs.html](https://caolan.github.io/async/docs.html))

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

### API

Routes.js - combines all routing files from api/routes/
Static.js - combines all enumerations
**model** - files for each model object and Object.js (which all objects extend)
**routes** - routes for auth and interactions with each model object
**tools** - database tools, timestamp tools, more