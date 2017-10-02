---
title: Enviornment
date: 2017-10-02 13:38:00 -04:00
---

## Platform Selection

**Front-end: [React](https://reactjs.org/)**\
React is a JavaScript library maintained by Facebook that handles the binding model data to HTML components. This platform was chosen because it runs in the browser but can also be compiled into native mobile applications - this functionality is important to allow users to view posts on the web without needing to download an application. Because of time constraints, native applications will not be compiled this semester, but the client can choose to compile these later.

**Image hosting: [Cloudinary](https://cloudinary.com/) CDN**\
Cloudinary is a free Content Distribution Network which provides pre-build tools for image uploads, storage and management. Cloudinary accepts images from our client application and returns a URL which is sent to our API upon receipt.

**Back-end: [NodeJS](https://nodejs.org/en/) and [Express](https://expressjs.com/)**\
NodeJS is a JavaScript runtime engine that runs on UNIX systems. Express is a library which listens to a IP/port combination and accepts and responds to HTTP requests. This platform was chosen because of the broad availability of well-documented plugins which can expedite development and because it shortens the learning curve between front-end and back-end codebases.

**State Maintenance: [MongoDB](https://www.mongodb.com/) and [Mongoose](http://mongoosejs.com/docs/guide.html)**\
MongoDB is a NoSQL relational database that can be hosted on UNIX systems. Mongoose is a JavaScript library that provides interfaces between NodeJS programs and a MongoDB instance. This platform was chosen because its object storage mirrors the same format of JSON, which is the object-notation our server application uses.

## Server Selection

Our project website is hosted with Github Pages.

Our API, administration panel, application, documentation and database are all served from a virtual Ubuntu machine which our client rents from a service called [Digital Ocean](https://www.digitalocean.com/). This server has a dedicated IP address. HTTP Requests made to this server are handled using [Apache's HTTP Server](https://httpd.apache.org/). Apache routes individual subdomains to individual ports or static directories for each of our deployed tools.

## Development Environment

Our team is using GitHub's IDE tools (Github desktop and/or Atom). These tools have consistent syntax highlighting and visually represent the version-control status of our projects.