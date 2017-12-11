---
title: Documentation
date: 2017-12-11 10:21:00 -05:00
position: 7
---

## Front-end Manual

cChange is a consumer-facing social network, and usage is designed to be intuitive (users that feel they need to access a manual will likely not use the site). For this reason, instructions will appear where they are needed throughout the site. Instructions will be provided whenever fields only accept content of a certain kind (password limits, image limits, description limits). Instructions will also be provided when users are sharing content to social networks.

## API Installation

Clone the repository
`git clone https://github.com/comp523-602/cchange-api.git`

Install system imaging library
`sudo apt-get install libcairo2-dev libjpeg8-dev libpango1.0-dev libgif-dev build-essential g++`

Create a config.js file for your environment

    modules.exports = {
      'ip': "<Static IP or localhost (127.0.0.1)>",
      'port': "<any unused port>",
      'database': "mongodb://<dbuser>:<password>@<hostname>:<port>/<dbname>",
      'secret': "<auth secret key>",
      'adminPassword': "<password for admin panel>",
      'sendGrid': "<SendGrid API key>",
      'fromEmail': "<email to send mail as>",
      'cloudinary': {
          'cloud': "<name of cloud>",
          'api": "<Cloudinary API key>",
          'secret': "<Cloudinary SECRET key>",
      }
    }'

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

## Inviting charity users

1. Visit (admin.cchange.ga)[http://admin.cchange.ga/]

2. Enter the email address of a contact from the charity you are trying to invite

3. Enter the admin credentials you set up when creating the API config

4. Press send