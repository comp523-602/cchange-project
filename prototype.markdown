---
title: Prototype
date: 2017-09-10 17:42:00 -04:00
layout: basic
---

# App Pages

* Feed
* Charity
* Donor Profile
* Personal payment history
* Login
* Signup -> Payment method
* Donation/Posting
* Post
* Campaign

# Page Descriptions

**Feed**
Scrollable list of recent posts ordered based on social/proximity/interests
Components: post, campaign

**Charity**
Each charity has its own profile page detailing its cause, and listing posts and campaigns
Components: post, about, campaign, donate

**Donor profile**
Donor’s recent posts, brief description
Components: post, about

**Personal Payment History**
View showing venmo-like donation history
Components: payment

**Login**
Login page providing ability to connect account to external social media (?) or ability to sign up
Components: Login textbox, signup link

**Signup**
Fill in user information
Components: Textboxes

**Payment Method**
Select from PayPal, venmo, squarecash (?) or fill out bank info
Components: Payment API Integrations

**Donation**
Takes donor through process of making post with donation
Components: Picture and filter uploading, donation field

**Post**
Single post display. Other users can donate to the same cause from here
Components: post, donate

**Campaign**
Page detailing charity campaign. Users who have donated to this campaign appear on the page
Components: post, about, donate