---
title: Sprint 2
date: 2017-10-01 12:36:00 -04:00
layout: default
---

## Functional Specs

See Specs page for this sprint.

## Test Plan

### Platforms

* Edge

* Chrome

* Firefox

### Test Cases

**Create user account**

Prodecure:

1. Navigate to cChange website

2. Click on Create Account

3. Fill out fields with email: , password: , name:

4. Navigate to login

5. Login using predefined email and password

Expected Result:

1. Site redirects to profile page displaying correct account name

**Create charity account**

Procedure:

1. Generate new token from admin.cchange.ga using password: password1 and email:

2. Navigate to cchange website

3. Click on Create Account

4. Fill out fields with email:, password:, name:, and predefined token

5. Navigate to login

6. Login using predefined email password

7. Use charity name: when prompted

Expected Result:

1. Site redirects to profile page displaying correct account name, charity name, and charity editing widget

**Edit charity**

Procedure:

1. Navigate to cchange website

2. login with Charity account email: and password:

3. Click on edit charity

4. Replace description with ""

Expected Result:

1. Component are populated with correct information as AJAX call returns

## Front-end Design Docs

[appdocs.cchange.ga](http://appdocs.cchange.ga/)

## Back-end Design Docs

### Routing Documentation

[api.cchange.ga](http://api.cchange.ga)

### Request Guidelines

All routes listen to POST requests\
All parameters are sent in the POST body as JSON\
Headers should include 'content-type': 'application/json'

### File Structure

server.js - primary file, opens connection to database, runs server with routes from api/Routes.js\
**api/model** - files for each model object and Object.js (which all objects extend)\
**api/routes** - files for each group of routes for auth and interactions with each model object\
**api/tools** - database tools, timestamp tools, more

### Architecture

This backend uses **routes** to manipulate functionally encapsulated **model objects** using a set of abstract **tools** and returns formatted objects or one of a set of predefined errors.

### Modules

**Authentication.js**\
Authentication provides functionality to make and parse user authentication tokens and accept or reject calls based on their authentication parameters.

**Database.js**\
Database provides abstracted tools to find or updates objects within a certain model (type of object).

**Dates.js**\
Dates provides date parsing and formatting functionality

**Email.js**\
Email provides templates for emails sent using the SendGrid API.

**Messages.js**\
Messages collects all messages used by the server in one place.

**Paging.js**\
Paging provides a reusable function to validate and process various multi-object paging calls.

**Secretary.js**\
Secretary handles error messages and successful requests.

**Types.js**\
Types organizes enumerations for all other modules.

**Validation.js**\
Validation handles parameter validation for all API requests.

### Style guidelines

Dependencies (libraries, in-app tools, other includes, etc) appear at top of files, variable names are capitalized\
Callback functions - the first argument is always an err (to stay consistent with the Async library), passed variables come next\
Arguments - if a function has more than one non-callback argument, it should be initialized as\
`functionName ({arg1, arg2}, callback)`
and called as:

        functionName({
            arg1: "value1",
            arg2: "value2"
        }, function () {
            // callback functionality here`
        });

Object notation: single quotes for keys, double quotes for string values

### Libraries used

[Express](https://expressjs.com/en/guide/routing.html): listens to port, handles server routes\
[Mongoose](http://mongoosejs.com/docs/guide.html): MongoDB database tool, used for database connection, schemas, queries, and updates\
[Async](https://caolan.github.io/async/docs.html): utilities for synchronous/asynchronous functions, used especially for waterfall\[\] callback chaining\
BodyParser: parses JSON body on POST requests\
[JSON Web Token](https://github.com/auth0/node-jsonwebtoken): used to generate tokens for authorization\
[Password Hash](https://github.com/davidwood/node-password-hash): used to hash and verify passwords\
Moment.js: used to handle dates\
UUID: used to generate unique IDs\
Morgan: color-coded request logging for Express\
SendGrid: used to send token emails to charity users

## User Manual

## Administrator Manual

### API Installation

Clone the repository
`git clone https://github.com/comp523-602/cchange-api.git`

Set up the repository
`npm install` - installs required packages

Create a config.js file for your environment

    modules.exports = {
      'ip': "<Static IP or localhost (127.0.0.1)>",
      'port': "<any unused port>",
      'database': "mongodb://<dbuser>:<password>@<hostname>:<port>/<dbname>",
      'secret': "<auth secret key>",
      'adminPassword': "<password for admin panel>",
      'sendGrid': "<SendGrid API key>",
      'fromEmail': "<email to send mail as>"
    }'

Run the server
`node server.js`

### React Installation

Clone the repository
`git clone https://github.com/comp523-602/cchange-App.git`

Setup the repository
`npm install` - installs required packages

Create a production build
`npm run build`

### Admin Installation

Clone the repository
`git clone https://github.com/comp523-602/cchange-admin.git`

### Inviting charity users

1. Visit (admin.cchange.ga)\[http://admin.cchange.ga/\]

2. Enter the email address of a contact from the charity you are trying to invite

3. Enter the admin credentials you set up when creating the API config

4. Press send