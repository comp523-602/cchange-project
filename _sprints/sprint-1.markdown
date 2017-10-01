---
title: Sprint 1
date: 2017-10-01 12:36:00 -04:00
layout: default
---

## Functional Specification

### Project Concept
Refer to project requirements

### User Types
* Visiting users
* Users
* Charity users

### Requirements
* Visitors can view charities, campaigns, and updates, as well as the posts and profiles of other users.
* Users can create account, edit their profile, make posts, make donations, manage their bank settings, and view their donation history.
* Charity users can create an account with secure approval, manage their charity, create and edit campaigns, create and edit updates, approve and flag posts, manage their bank settings, and view their donation history.

### Interfaces

## Test Plan

### Platforms
* Edge
* Chrome
* Firefox

### Test Cases (All Manual for now)

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

## Edit Charity
Procedure:
1. Navigate to cchange website
2. login with Charity account email: and password:
3. Click on edit charity
4. Replace description with ""

Expected Result:

1.