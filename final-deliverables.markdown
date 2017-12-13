---
title: Final Deliverables
date: 2017-12-13 13:20:00 -05:00
position: 8
---

## Functional Spec

### User Types

* Visiting users

* Users

* Charity users

### Requirements

* Visitors can view charities, campaigns, and updates, as well as the posts and profiles of other users.

* Users can create account, edit their profile, make posts, make donations, add funds to their account, and view their donation history.

* Charity users can create an account with secure approval, manage their charity, create and edit campaigns, create and edit updates, and view their donation history.

### Administrative Interface

**Dashboard** - Administrators can invite charities to join cChange with an email address and their admin credentials - an email with a link contained a charity token will be sent to this email address.\
API Calls: /charityToken.create

### Common Visitor, User & Charity User interfaces

These interfaces will be displayed this same to visiting users and authenticated users (with the exception of the display of the user's name and a user maintenance menu if the session is authenticated, and relevant buttons for editing and deleting content where applicable based on the authentication of the user).

**Log In** - Form to accept email and password, allows users and charity users to start an authenticated session.  
API Calls: /user.login

**Search & Browse** - This view will contain a search box and a menu with keyword and category input. It will offer users to browse campaigns, charities, updates, users, post and donations. By default, these objects will be listed by descending creation date.
API Calls: /list.type

**Charity Profile** - The charity profile displays a logo, name, description for a charity, as well as lists of their campaigns, updates, posts and donations.  
API Calls: /list.single, /list.type

**Campaign** - The campaign page displays the title, description and pictures associated with a campaign, as well as posts and donations made towards a campaign. This page will have buttons to donate or create a post in support of the campaign.
API Calls: /list.single, /list.type

**Update** - The update page displays the date of the update, the title of the update, and the body or description of the update.  
API Calls: /list.single

**Post** - The post page displays the posted image together with a banner and the charity's logo. It will link to the campaign, the charity, and the user profile. It will display a caption and an indication of the donations made through the post. It will have a prominent donate button.
API Calls: /list.single

**User Profile** - The user profile display's a users profile picture, name and bio. The user's profile will list the users donation activity,  posts, and following/followers information.  
API Calls: /list.single, /list.type

### Charity interfaces

**Charity Signup** - Form to accept a user's name, email and password, as well as the name of their charity. This page will only function correctly if it is accessed with a link containing a non-expired, unused charity token.  
API Calls: /user.create.charity

**Edit Charity Profile** - This edit view allows charity users to update their charity's logo, name and description. The charity logo must be able to be cropped to a square.  
API Calls: /list.single, /charity.edit

**Create / Edit Campaign** - This view allows a charity to create a new campaign or update an existing one. This view has a form with a name field, description field, and photo-management section. Photos uploaded to this page cannot be cropped.  
API Calls: /list.single, /campaign.create, /campaign.edit

**Create / Edit Update** - This view allows a charity to create a new update or update an existing one. This view has a form with a name field and a description field (dates are automatically generated upon creation).  
API Calls: /list.single, /update.create, /update.edit

### User Interfaces

**User Signup** - This view will allow regular cChange users to create an account. Fields include name, email, password and confirm password.  
API Calls: /user.create

**Profile Edit** - This view will allow a user to edit their name, bio or profile picture.  
API Calls: /user.edit

**Create Post (for campaign)** - This view will allow a user to create a new post. This view accept a campaign ID if the view is accessed by a user who clicks a button on a campaign page specifically to support that campaign. This view will accept a photo upload (which must be cropped to a square), a caption, a way to navigate through possible campaigns (if one is not provided), and will also accept a donation amount if the users wants to donate while creating the post.  
API Calls: /post.create

**Edit Post** - This view will allow a user to edit the caption of their post.  
API Calls: /list.single, /post.edit

## Design Docs  

Front-end Code: [http://appdocs.cchange.ga](http://appdocs.cchange.ga)  

Back-end Code: [apidocs.cchange.ga](http://apidocs.cchange.ga)

Back-end Routing: [api.cchange.ga](http://api.cchange.ga)

Architecture: [https://comp523-602.github.io/project/architecture.html](https://comp523-602.github.io/project/architecture.html)  

## User Manuals

cChange is a consumer-facing social network, and usage is designed to be intuitive (users that feel they need to access a manual will likely not use the site). For this reason, instructions will appear where they are needed throughout the site. Instructions will be provided whenever fields only accept content of a certain kind (password limits, image limits, description limits). Instructions will also be provided when users are sharing content to social networks.

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


## Repositories

[Front End (cchange-app-v2)](https://github.com/comp523-602/cchange-app-v2) 

[Back End (cchange-api)](https://github.com/comp523-602/cchange-api)   

[Administration Panel (cchange-admin)](https://github.com/comp523-602/cchange-admin) 

## Deployed Application

[cchange.ga](http://www.cchange.ga)  

## Video Demo

[cChange.mp4](/uploads/cChange.mp4)

## Client Instruction

### Full deployment process for a new Linux machine 

1. Setup a Linux environment
2. Purchase a domain name (later referred to as your-domain.com) and point your default A record to your Linux environment's IP address
3. Setup a database at mLab.com
4. Setup an email account at SendGrid.com
5. Access your machine using SSH - from a Unix terminal, type ssh username@IPAddress
6. Install, configure, and start API
7. Install and build application
8. Install administation in a web accessable directory
9. Setup Apache proxy

### API Installation

Clone the repository
`git clone https://github.com/comp523-602/cchange-api.git`

Enter the directory
`cd cchange-api`

Install system imaging library
`sudo apt-get install libcairo2-dev libjpeg8-dev libpango1.0-dev libgif-dev build-essential g++`

Create a config.js file for your environment (replace everything inside the brackets, including the brackets, with the correct information. The client can use the information we provided privately in our handoff, or they can create their own accounts (the latter is recommended).

    modules.exports = {
      'ip': "<Static IP address (from DigitalOcean) or localhost (127.0.0.1)>",
      'port': "<Any unused port - 4000 suggested>",
      'database': "mongodb://<dbuser>:<password>@<hostname>:<port>/<dbname (see mlab.com)>",
      'secret': "<any string of numbers/letters>",
      'adminPassword': "<any string of numbers/letters>",
      'sendGrid': "<SendGrid API key> (see sendgrid.com)",
      'fromEmail': "<email to send mail as>",
      'cloudinary': {
          'cloud': "<name of cloud>",
          'api': "<Cloudinary API key>",
          'secret': "<Cloudinary SECRET key>",
      }
    }

Install required packages
`npm install`

Install gulp globablly
`sudo npm install -g gulp`

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

Ensure API address is correct  
Open cchange-app-v2/src/modules/Requests.js and update API constant variable. This should be changed to http://api.your-domain.com.

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

Ensure API address is correct  
Open cchange-admin/main.js, update API constant variable

### Setting up Apache proxy

Open Apache configuration directory
`cd /etc/apache2/sites-available/`

Create a new configuration file (change your-domain.com)
`vim your-domain.com.conf`

Setup the following configuration (change your-domain.com and path-to-admin-installation)
```
<VirtualHost *:80>
    ServerName api.your-domain.com
    ServerAlias www.api.your-domain.com
    ProxyPreserveHost On
    ProxyPass / http://your-domain.com:4000/
    ProxyPassReverse / http://your-domain.com:4000/
</VirtualHost>

<VirtualHost *:80>
    ServerName admin.your-domain.com
    ServerAlias www.admin.your-domain.com
    DocumentRoot /path-to-admin-installation
</VirtualHost>

<VirtualHost *:80>
    ServerName your-domain.com
    ServerAlias www.your-domain.com
    ProxyPreserveHost On
    ProxyPass / http://your-domain.com:3000/
    ProxyPassReverse / http://your-domain.com:3000/
</VirtualHost>
```

Enable site (replace your-domain.com)
`a2ensite your-domain.com.conf`

Restart apache
`sudo service apache2 restart`

### Inviting charity users

1. Visit (admin.cchange.ga)[http://admin.cchange.ga/]

2. Enter the email address of a contact from the charity you are trying to invite

3. Enter the admin credentials you set up when creating the API config

4. Press send

[Handoff Document](https://docs.google.com/document/d/1T4zfx_R-XPf9oOyxbaoZcW-XGOvHmEvjwbENbpFmn5Y/edit)