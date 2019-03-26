---
title: DLM
date: '2019-03-19 02:24pm'
order: -1
icon: /uploads/nuxtlogo.svg
image: /uploads/dlmlogo.png
---
The Distribution List Manager is a web based application that integrates with Fraser Health's current SharePoint and Active Directory environment to display a list of distribution lists that an employee is subscribed to. It also provides a one click solution to request removal from any distribution list listed.

## Justification
Fraser Health has a problem with the amount of email distribution lists that exist in the company. At the moment there is no easy way for employees to see which distribution lists they are a part of. Some of these distribution lists become irrelevant to employees as they change jobs or locations. This means that some get a substantial amount of unnecessary email.

## Tooling
Because the Fraser Health organization was already utilizing Microsoft server technology, I intergrated my solution with Sharepoint.  I developed a custom SharePoint application that would hook into active directory and display the information to the user.

## Challenges
The biggest challenge was getting the project approved.  In such a large corperation, creating a tool like this meant interfacing with multiple teams in an attempt to get approval.  I reached out to the Server Team, the Exchange Team and the security team in order to get all the information neccesary to make this a functional utility.
