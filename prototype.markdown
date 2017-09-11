---
title: Prototype
date: 2017-09-10 17:42:00 -04:00
position: 3
layout: basic
---

# Front-end outline

## App Views
* Login / Signup
* Feed / Search
* Charity profile
* Donor profile
* Donor payment history
* Payment settings
* Post create
* Post view
* Campaign view

## View Descriptions

**Login / signup**
Login page providing ability to connect account to external social media (?) or ability to sign up
Components: Login textbox, signup link

**Feed / search**
Scrollable list of recent posts ordered based on social/proximity/interests or query
Components: post, campaign

**Charity profile ( \+ edit view)**
Each charity has its own profile page detailing its cause, and listing posts and campaigns
Components: post, about, campaign, donate

**Donor profile ( \+ edit view)**
Donor’s recent posts, brief description
Components: post, about

**Donor payment history**
View showing venmo-like donation history
Components: payment

**Payment settings**
Charities add a bank account; donors can select from credit card, ACH (bank info), PayPal, Apple Pay
Components: Payment API Integrations

**Post create**
Takes donor through process of making post with donation
Components: Picture and filter uploading, donation field

**Post view (\+ edit view)**
Single post display. Other users can donate to the same cause from here
Components: post, donate

**Campaign view (\+ edit view)**
Page detailing charity campaign. Users who have donated to this campaign appear on the page
Components: post, about, donate

# Back-end outline

## Model Objects

**User**
A user can create posts and donations and create/join charities
Properties: name, email, password, charities[GUID], posts[GUID], donations[GUID]

**Charity**
A charity has a profile, can be edited/accessed by certain users, and lists related campaigns, donations, updates and posts
Properties: name, logo, description, users[GUID], campaigns[GUID], updates[GUID], donations[GUID], posts[GUID]

**Campaign**
A campaign is added by a charity to be attached to posts.
Properties: charityGUID, name, description, banner, donations[GUID], posts[GUID], updates[GUID]

**Update**
An update is posted to a campaign to update users on what funds are used for.
Properties: date, title, description, image, campaignGUID, charityGUID

**Post**
A post is an image posted by a user to collect donations for a campaign. If a user creates a donation along with a post, that donation is referenced with firstDonationGUID
Properties: userGUID, caption, image, campaignGUID, charityGUID, donations[GUID], firstDonationGUID(null)

**Donation**
A donation is the representation of a transaction made between a user and a charity (where a user has a payment method and a charity has a deposit method). Donations are made to posts (which are attached to campaigns), to campaigns, or to charities. 
Properties: userGUID, charityGUID, campaignGUID(null), postGUID(null), date, amount, transactionID