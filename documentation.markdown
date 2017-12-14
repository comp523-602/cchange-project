---
title: Documentation
date: 2017-12-11 10:21:00 -05:00
position: 8
---

## Front-end Manual

cChange is a consumer-facing social network, and usage is designed to be intuitive (users that feel they need to access a manual will likely not use the site). For this reason, instructions will appear where they are needed throughout the site. Instructions will be provided whenever fields only accept content of a certain kind (password limits, image limits, description limits). Instructions will also be provided when users are sharing content to social networks.

## Full deployment process for a new Linux machine 

1. Setup a Linux environment
2. Purchase a domain name (later referred to as your-domain.com) and point your default A record to your Linux environment's IP address
3. Setup a database at mLab.com
4. Setup an email account at SendGrid.com
5. Access your machine using SSH - from a Unix terminal, type ssh username@IPAddress
6. Install, configure, and start API
7. Install and build application
8. Install administation in a web accessable directory
9. Setup Apache proxy

## API Installation

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

## API Production Build

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

## Front-end Installation

Clone the repository
`git clone https://github.com/comp523-602/cchange-app-v2.git`

## Front-end Production Build

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

## Admin Installation

Clone the repository
`git clone https://github.com/comp523-602/cchange-admin.git`

Ensure API address is correct  
Open cchange-admin/main.js, update API constant variable

## Setting up Apache proxy

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

## Inviting charity users

1. Visit (admin.cchange.ga)[http://admin.cchange.ga/]

2. Enter the email address of a contact from the charity you are trying to invite

3. Enter the admin credentials you set up when creating the API config

4. Press send