---
title: Back-end Docs
date: 2017-09-13 20:50:00 -04:00
position: 4
layout: basic
---

## Installation

Clone the repository
`git clone https://github.com/comp523-602/cchange-api.git`

Set up the repository
`npm install` - installs required packages

Create a config.js file for your environment

        modules.exports = {
        'ip': "127.0.0.1",
        'port': "3000",
        'database': "mongodb://<dbuser>:<password>@<hostname>:<port>/<dbname>"
        }'

Run the server
`node server.js`

## Libraries used

Express: listens to port, handles server routes ([https://expressjs.com/en/guide/routing.html](https://expressjs.com/en/guide/routing.html))
Mongoose: MongoDB database tool, used for database connection, schemas, queries, and updates
([http://mongoosejs.com/docs/guide.html](http://mongoosejs.com/docs/guide.html))
Async: utilities for synchronous/asynchronous functions, used especially for waterfall[] callback chaining ([https://caolan.github.io/async/docs.html](https://caolan.github.io/async/docs.html))

## Style guidelines

Dependencies (libraries, in-app tools, other includes, etc) appear first, variable names are capitalized
Callback functions - the first argument is always an err (to stay consistent with the Async library), passed variables come next