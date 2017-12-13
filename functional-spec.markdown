---
title: Master Functional Spec
date: 2017-10-02 13:41:00 -04:00
position: 6
layout: default
---

## User Types

* Visiting users

* Users

* Charity users

## Requirements

* Visitors can view charities, campaigns, and updates, as well as the posts and profiles of other users.

* Users can create account, edit their profile, make posts, make donations, add funds to their account, and view their donation history.

* Charity users can create an account with secure approval, manage their charity, create and edit campaigns, create and edit updates, and view their donation history.

## Interfaces

### Administrative Interface

**Dashboard** - Administrators can invite charities to join cChange with an email address and their admin credentials - an email with a link contained a charity token will be sent to this email address.\
API Calls: /charityToken.create

### Common Visitor, User & Charity User interfaces

These interfaces will be displayed this same to visiting users and authenticated users (with the exception of the display of the user's name and a user maintenance menu if the session is authenticated, and relevant buttons for editing and deleting content where applicable based on the authentication of the user).

**Log In** - Form to accept email and password, allows users and charity users to start an authenticated session.  
API Calls: /user.login

**Search & Browse** - This view will contain a search box and a menu with keyword and category input. It will offer users to browse campaigns, charities, updates, users, post and donations. By default, these objects will be listed by descending creation date.
API Calls: /list.type

**Charity Profile** - The charity profile displays a logo, name, description for a charity, as well as lists of their campaigns, updates, posts and donations.  
API Calls: /list.single, /list.type

**Campaign** - The campaign page displays the title, description and pictures associated with a campaign, as well as posts and donations made towards a campaign. This page will have buttons to donate or create a post in support of the campaign.
API Calls: /list.single, /list.type

**Update** - The update page displays the date of the update, the title of the update, and the body or description of the update.  
API Calls: /list.single

**Post** - The post page displays the posted image together with a banner and the charity's logo. It will link to the campaign, the charity, and the user profile. It will display a caption and an indication of the donations made through the post. It will have a prominent donate button.
API Calls: /list.single

**User Profile** - The user profile display's a users profile picture, name and bio. The user's profile will list the users donation activity,  posts, and following/followers information.  
API Calls: /list.single, /list.type

### Charity interfaces

**Charity Signup** - Form to accept a user's name, email and password, as well as the name of their charity. This page will only function correctly if it is accessed with a link containing a non-expired, unused charity token.  
API Calls: /user.create.charity

**Edit Charity Profile** - This edit view allows charity users to update their charity's logo, name and description. The charity logo must be able to be cropped to a square.  
API Calls: /list.single, /charity.edit

**Create / Edit Campaign** - This view allows a charity to create a new campaign or update an existing one. This view has a form with a name field, description field, and photo-management section. Photos uploaded to this page cannot be cropped.  
API Calls: /list.single, /campaign.create, /campaign.edit

**Create / Edit Update** - This view allows a charity to create a new update or update an existing one. This view has a form with a name field and a description field (dates are automatically generated upon creation).  
API Calls: /list.single, /update.create, /update.edit

### User Interfaces

**User Signup** - This view will allow regular cChange users to create an account. Fields include name, email, password and confirm password.  
API Calls: /user.create

**Profile Edit** - This view will allow a user to edit their name, bio or profile picture.  
API Calls: /user.edit

**Create Post (for campaign)** - This view will allow a user to create a new post. This view accept a campaign ID if the view is accessed by a user who clicks a button on a campaign page specifically to support that campaign. This view will accept a photo upload (which must be cropped to a square), a caption, a way to navigate through possible campaigns (if one is not provided), and will also accept a donation amount if the users wants to donate while creating the post.  
API Calls: /post.create

**Edit Post** - This view will allow a user to edit the caption of their post.  
API Calls: /list.single, /post.edit