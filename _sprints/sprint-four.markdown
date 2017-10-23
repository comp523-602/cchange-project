---
title: Sprint Four
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

**Admin Dashboard** - Administrators can invite charities to join cChange with an email address and their admin credentials - an email with a link contained a charity token will be sent to this email address.\
Route: http://admin.cchanga.ga/\
API Calls: /charityToken.create

**Log In** - Form to accept email and password, allows users and charity users to start an authenticated session.\
Route: /login\
API Calls: /user.login

**Sign Up** - Form to accept name, email and password. Creates a new user account starts an authenticated session.\
Route: /signup\
API Calls: /user.create

**Charity Signup** - Form to accept a user's name, email and password, as well as the name of their charity. This page will only function correctly if it is accessed with a link containing a non-expired, unused charity token.\
Route: /charitySignup/:charityToken\
API Calls: /user.create.charity

**Charity** - Page displaying charity's name, description and logo.\
Route: /charity/:guid\
API Calls: /charity, /campaigns

**Edit Charity** - This edit view allows charity users to update their charity's logo, name and description. The charity logo must be able to be cropped to a square.\
Route: /charityEdit/:guid\
API Calls: /charity, /charity.edit

**Campaign** - Page displaying campaign's name and description. If signed in as a donor, one can create a post dedicated to the campaign.
Route: /campaign/:guid\
API Calls: /campaign, /posts, /post.create

**Create Campaign** - This view allows a charity to create a new campaign. This view has a form with a name field, description field, and photo-management section. Photos uploaded to this page cannot be cropped.\
Route: /campaignCreate
API Calls: /campaign, /campaign.create

**Edit Campaign** - This view allows a charity to update an existing campaign. This view has a form with a name field, description field, and photo-management section. Photos uploaded to this page cannot be cropped.\
Route: /campaignEdit/:guid\
API Calls: /campaign, /campaign.edit

**Browse Charities** - This view will contain a search box and a menu with charity taxonomy and will display a list of charities. By default, it will show the most recently added charities.
API Calls: /charities

**Browse Campaigns** - This view will contain a search box and a menu with charity taxonomy and will display a list of campaigns. By default, it will show the most recently added campaigns.
API Calls: /campaigns

**Browse Posts** - Page displaying Posts with name, image, and description.
Route: /posts
API Calls: /posts


## Test Plan

### Platforms

* Windows

* Mac OS X

* iOS

* Android

### Browsers

* Firefox (Windows)

* Chrome (Windows, Android)

* Edge (Windows)

* Safari (Mac OS X, iOS)

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

**Create campaign**

Procedure:

1. Navigate to cchange website

2. login with Charity account email: and password:

3. Click on charity profile

4. Click on create campaign

5. Fill out form

Expected Result:

1. Components are populated with correct information as AJAX call returns

**Create Post**

1. Navigate to cchange website

2. login with Donor account email: and password:

3. Navigate to campaign view page

4. Create new post with image: and caption:

Expected Result:

1. Campaign and Posts pages now display post which was just created

## Front-end Design Docs

[appdocs.cchange.ga](http://appdocs.cchange.ga)

Architecture: [https://comp523-602.github.io/project/architecture.html](https://comp523-602.github.io/project/architecture.html)

## Back-end Design Docs

Code: [apidocs.cchange.ga](http://apidocs.cchange.ga)

Routing: [api.cchange.ga](http://api.cchange.ga)

Architecture: [https://comp523-602.github.io/project/architecture.html](https://comp523-602.github.io/project/architecture.html)

## User Manual

### Front-end Manual

cChange is a consumer-facing social network, and usage is designed to be intuitive (users that feel they need to access a manual will likely not use the site). For this reason, instructions will appear where they are needed throughout the site. Instructions will be provided whenever fields only accept content of a certain kind (password limits, image limits, description limits). Instructions will also be provided when users are sharing content to social networks.

## Administrator Manual

### API Installation

Clone the repository
`git clone https://github.com/comp523-602/cchange-api.git`

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

### API Production Build

**Location:** /home/repos/cchange-app-v2

Pull latest changes
`git pull origin master`

Install required packages
`npm install`

Build routing documentation
`gulp`

Build code documentation
`documentation build api/** -f html -o designdocs/`

Restart documentation server
`pm2 restart apidocsServer.js`

Restart API server
`pm2 restart server.js`

### Front-end Installation

Clone the repository
`git clone https://github.com/comp523-602/cchange-app-v2.git`

### Front-end Production Build

**Location:** /home/repos/cchange-api

Pull latest changes
`git pull origin master`

Install required packages
`npm install`

Publish documentation
`documentation build src/** -f html -o docs`

Restart documentation server
`pm2 restart appdocsServer.js`

Create a production build
`npm run build`

Restart application server
`pm2 restart appServer.js`

### Admin Installation

Clone the repository
`git clone https://github.com/comp523-602/cchange-admin.git`

### Inviting charity users

1. Visit (admin.cchange.ga)\[http://admin.cchange.ga/\]

2. Enter the email address of a contact from the charity you are trying to invite

3. Enter the admin credentials you set up when creating the API config

4. Press send