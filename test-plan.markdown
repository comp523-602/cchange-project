---
title: Test Plan
date: 2017-09-27 16:01:00 -04:00
position: 6
layout: default
---

## Platforms:

* Edge

* Chrome

* Firefox

# Test Cases (All Manual for now):

## Account creation and Login

### Create donor account

Procedure:

1. Navigate to cchange website

2. Click on Create Account

3. Fill out fields with email: , password: , name:

4. Navigate to login

5. Login using predefined email and password

Expected Result:

1. Site redirects to profile page displaying correct account name

###

### Create charity account

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

## Charity Editing

## Edit Charity

Procedure:

1. Navigate to cchange website

2. login with Charity account email: and password:

3. Click on edit charity

4. Replace description with ""

Expected Result:

1.