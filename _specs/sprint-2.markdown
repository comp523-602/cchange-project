---
title: Sprint 2
date: 2017-10-01 12:36:00 -04:00
layout: default
---

## Project Concept
¢Change hopes to create a social sharing experience that makes it easy for people to publicly support the causes they care about and encourage their friends to do the same. The user experiences begins with posting a photo. With each photo post, users select a ongoing campaign sponsored by a ¢Change-approved charity, and are prompted to share this photo post on existing social networking profiles like Facebook and Twitter. The user's friends will see the user's photo attached to a small banner with the selected charity's logo and the name of the selected campaign.

Interested friends can following the accompanying link into ¢Change's mobile-friendly platform, where they are given options to make a micro-donation to the campaign their friend supports, learn more about the cause their friend is passionate about, and view the other causes their friend supports. If they are moved to donate, they'll need to set up an account, and will hopefully consider supporting other campaigns by creating their own post.

¢Change will invite a list of approved charities to create and maintain their own presence on the ¢Change application. Approved charities will be asked to post an update about how they're using the funds they receive on an ongoing basis. Each charity will have an interface they can use to setup and manage their profile, create and manage campaigns, and post updates. Charities will also have passive and active control measures over the content that is publicly associated with their brand.

**Tweet**  
¢Change is a photo filter app that uses micro-donations to share awareness, support non-profit organizations and effortlessly make an impact.

## User Types
* Visiting users
* Users
* Charity users

## Requirements
* Visitors can view charities, campaigns, and updates, as well as the posts and profiles of other users.
* Users can create account, edit their profile, make posts, make donations, manage their bank settings, and view their donation history.
* Charity users can create an account with secure approval, manage their charity, create and edit campaigns, create and edit updates, approve and flag posts, manage their bank settings, and view their donation history.

## Interfaces

### Administrative Interface

**Dashboard** - Administrators can invite charities to join cChange with an email address and their admin credentials - an email with a link contained a charity token will be sent to this email address.  
API Calls: /charityToken.create

### Common Visitor, User & Charity User interfaces

These interfaces will be displayed this same to visiting users and authenticated users (with the exception of the display of the user's name and a user maintenance menu if the session is authenticated, and relevant buttons for editing and deleting content where applicable based on the authentication of the user).

**Log In** - Form to accept email and password, allows users and charity users to start an authenticated session.  
API Calls: /user.login

**Browse Charities** - This view will contain a search box and a menu with charity taxonomy and will display a list of charities. By default, it will show the most recently added charities.
API Calls: /charities

**Browse Campaigns** - This view will contain a search box and a menu with charity taxonomy and will display a list of campaigns. By default, it will show the most recently added campaigns.  
API Calls: /campaigns

**Charity Profile** - The charity profile displays a logo, name, description for a charity, as well as lists of their campaigns, updates and approved posts.  
API Calls: /charity, /campaigns, /updates, /posts

**Campaign** - The campaign page displays the title, description and pictures associated with a campaign. This page lists updates added to the campaign, and any approved posts that have been made in support of the campaign. This page will have buttons to donate or create a post in support of the campaign. This page will list information about how many donations have been made in support of a campaign.  
API Calls: /campaign, /updates, /donations, /posts

**Update** - The update page displays the date of the update, the title of the update, and the body or description of the update.  
API Calls: /update

**Post** - The post page displays the posted image together with a banner and the charity's logo. It will link to the campaign, the charity, and the user profile. It will display a caption and an indication of the donations made through the post. It will have a prominent donate button.
API Calls: /post

**User Profile** - The user profile display's a users profile picture, name and bio. The user's profile will list the users donation activity (if applicable), and all or some of the users' recent posts (if applicable).  
API Calls: /user, /posts, /donations

### Common User and Charity User interfaces

**User Settings** - This view allows a user to update their name, email address and password.  
API Calls: /user.email, /user.password

### Charity interfaces

**Charity Signup** - Form to accept a user's name, email and password, as well as the name of their charity. This page will only function correctly if it is accessed with a link containing a non-expired, unused charity token.  
API Calls: /user.create.charity

**Edit Charity Profile** - This edit view allows charity users to update their charity's logo, name and description. The charity logo must be able to be cropped to a square.
API Calls: /charity, /charity.edit, /charity.logo

**Manage Posts** - This view lists posts associated with a charity's campaigns and allows a charity to flag inappropriate or feature posts on their profile.  
API Calls: /post.approve, /post.flag

**Create / Edit Campaign** - This view allows a charity to create a new campaign or update an existing one. This view has a form with a name field, description field, and photo-management section. Photos uploaded to this page cannot be cropped.  
API Calls: /campaign, /campaign.edit

**Create / Edit Update** - This view allows a charity to create a new update or update an existing one. This view has a form with a name field and a description field (dates are automatically generated upon creation).  
API Calls: /update, /update.edit

**Donation settings** - This view will allow a charity to manage the bank their donations will be deposited to, and will also formally list incoming deposits.
API Calls: /charity, /donations, /charity.bank

### User Interfaces

**User Signup** - This view will allow regular cChange users to create an account. Fields include name, email, password and confirm password.  
API Calls: /user.create

**Profile Edit** - This view will allow a user to edit their name, bio or profile picture.  
API Calls: /user.edit

**Create Post** - This view will allow a user to create a new post. This view will optionally accept a campaign ID if the view is accessed by a user who clicks a button on a campaign page specifically to support that campaign. This view will accept a photo upload (which must be cropped to a square), a caption, a way to navigate through possible campaigns (if one is not provided), and will also accept a donation amount if the users wants to donate while creating the post.  
API Calls: /post.create

**Edit Post** - This view will allow a user to edit the caption of their post.  
API Calls: /post, /post.edit

**Donation settings** - This view will allow a user to add or update a bank account, add to and view their cChange balance, as well as see a details list of donations and transfers.  
API Calls: /user.bank, /transfer.create, /transfers, /donations