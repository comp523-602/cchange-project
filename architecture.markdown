---
title: Architecture
date: 2017-10-02 13:42:00 -04:00
position: 5
---

## Overview

The ¢Change application runs on the following unique components:

* Website (Single-page React application)

* Admin panel (one-page website)

* Server (NodeJS application built on Express)

* Database (MongoDB instance)

These components interface with one another using different subdomains of domain, cchange.ga. The subdomains are routed to the directories or ports which serve the relevant software using an Apache HTTP server.

![Screen Shot 2017-10-02 at 1.59.31 PM.png](/project/uploads/Screen%20Shot%202017-10-02%20at%201.59.31%20PM.png)

## Back-end Architecture

The ¢Change server uses \*\*routes \*\*to manipulate functionally encapsulated \*\*model objects \*\*using a set of abstract \*\*tools \*\*and returns formatted objects or one of a set of predefined errors.

## Front-end Architecture

The ¢Change website uses **routes** to display **views** which consists of a variety of \*\*components, **each of which have their own controller** functionality. Views \*\*and components leverage abstract **tools** to perform common tasks like validation and HTTP requests to the ¢Change server.