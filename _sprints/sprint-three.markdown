---
title: Sprint Three
layout: default
---

## Functional Spec

### User Types

* Visiting users
* Users
* Charity users

### Requirements

* Visitors can view charities, campaigns, and updates, as well as the posts and profiles of other users.
* Users can create account, edit their profile, make posts, make donations, manage their bank settings, and view their donation history.
* Charity users can create an account with secure approval, manage their charity, create and edit campaigns, create and edit updates, approve and flag posts, manage their bank settings, and view their donation history.

### Interfaces

**Admin Dashboard** - Administrators can invite charities to join cChange with an email address and their admin credentials - an email with a link contained a charity token will be sent to this email address.  
Route: http://admin.cchanga.ga/  
API Calls: /charityToken.create

**Log In** - Form to accept email and password, allows users and charity users to start an authenticated session.  
Route: /login  
API Calls: /user.login

**Sign Up** - Form to accept name, email and password. Creates a new user account starts an authenticated session.  
Route: /signup  
API Calls: /user.create

**Charity Signup** - Form to accept a user's name, email and password, as well as the name of their charity. This page will only function correctly if it is accessed with a link containing a non-expired, unused charity token.  
Route: /charitySignup/:charityToken  
API Calls: /user.create.charity

**Charity** - Page displaying charity's name, description and logo.  
Route: /charity/:guid  
API Calls: /charity

**Edit Charity** - This edit view allows charity users to update their charity's logo, name and description. The charity logo must be able to be cropped to a square.  
Route: /charityEdit/:guid  
API Calls: /charity, /charity.edit

**Campaign** - Page displaying campaign's name and description.
Route: /campaign/:guid  
API Calls: /campaign

**Create Campaign** - This view allows a charity to create a new campaign. This view has a form with a name field, description field, and photo-management section. Photos uploaded to this page cannot be cropped.  
Route: /campaignCreate
API Calls: /campaign, /campaign.create

**Edit Campaign** - This view allows a charity to update an existing campaign. This view has a form with a name field, description field, and photo-management section. Photos uploaded to this page cannot be cropped.  
Route: /campaignEdit/:guid  
API Calls: /campaign, /campaign.edit

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
[appdocs.cchange.ga](http://appdocs.cchange.ga)

## Back-end Design Docs
[apidocs.cchange.ga](http://apidocs.cchange.ga)

## User Manual

### Front-end Manual
cChange is a consumer-facing social network, and usage is designed to be intuitive (users that feel they need to access a manual will likely not use the site).

### API Manual
[api.cchange.ga](http://api.cchange.ga)

## Administrator Manual

### API Installation
Clone the repository
`git clone https://github.com/comp523-602/cchange-api.git`

Install required packages
`npm install`

Create a config.js file for your environment
```
modules.exports = {
  'ip': "<Static IP or localhost (127.0.0.1)>",
  'port': "<any unused port>",
  'database': "mongodb://<dbuser>:<password>@<hostname>:<port>/<dbname>",
  'secret': "<auth secret key>",
  'adminPassword': "<password for admin panel>",
  'sendGrid': "<SendGrid API key>",
  'fromEmail': "<email to send mail as>"
}'
```

Run the server
`node server.js`

### React Installation
Clone the repository
`git clone https://github.com/comp523-602/cchange-app-v2.git`

Install required packages
`npm install`

Create a production build
`npm run build`

Start static production server
`node appServer.js`

### Admin Installation
Clone the repository
`git clone https://github.com/comp523-602/cchange-admin.git`

### Inviting charity users
1. Visit (admin.cchange.ga)\[http://admin.cchange.ga/\]
2. Enter the email address of a contact from the charity you are trying to invite
3. Enter the admin credentials you set up when creating the API config
4. Press send