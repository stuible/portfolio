---
title: Langley Taxi
subtitle: Design + Dev
link: 
  title: View Site
  url: https://langley-taxi.netlify.com/
date: '2019-03-19 02:28pm'
image: /uploads/langleyTaxiHero.png
order: 1
icon: /uploads/LangleyTaxi.svg
description: >-
  Aldergrove Langley Taxi is taxi company located in the  Langley and Aldergrove area.  With over 25 cars and expanding, langleytaxi.ca is a modern and fast way to book a cab online.
technologies:
  - Sketch
  - Nuxt.js
  - Sass
content:
  - text: >-
      Langely Taxi's site was not responsive or mobile friendly when I was first approached.  The priorities were a modern looking site with good SEO and an emphasis on their new mobile app.  Additionally, they had created an external web form that would allow customers to order taxies online.
    title: Background
  - text: >-
      I began by looking at the current state of taxi websites across Vancouver.  Because people that need taxis are often on the go, I really wanted to focus on the mobile layout of this site, making it truly "mobile first".   After comparing what worked and what I didn't provided the client with both desktop and mobile mockups.
    title: Process
    image: /uploads/LangleyTaxiMockup.jpg
  - text: >-
      Because the site was not expected to change after launch but I still wanted to be able to provide some complex interactivity, I opted to use Nuxt, an SEO friendly static site generator that allowed me to break everything up into Vue components for quick development and a maintainable code base. 
    title: Implementation
    # image: /uploads/moodlampinlight.jpg
  - text: >-
      "The mobile experience was very important to me and I wanted to refine the most important interaction: getting the phone number.  Because Langley Taxi has 3 separate number for the different areas they serve, I needed a way to provide access to all 3 easily.  On both desktop and mobile I display the primary, catch all, number in the top right corner.  When you tap the number on mobile, it displays all three numbers with an option to either call or copy each number.  On desktop, I simply show a dropdown containing the area specific numbers."
    title: UX
    # image: /uploads/moodlampdiagram.jpg
  - text: >-
      Originally I had envisioned an embedded order form for customers to order cabs directly from the new website.  However, the dispatch system being used did not offer an API that would allow for this.  Once this was clear, we decided an external link would be created to the online form.
    title: Challenges
---

