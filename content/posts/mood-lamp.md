---
title: Mood Lamp
date: '2019-03-19 02:27pm'
order: 4
icon: /uploads/mood-lamp.svg
description: >-
  Mood Lamp is an interactive ambient lantern. By gathering data from its
  surroundings, the lantern adjusts its colours and brightness to fit the mood
  of the environment.
technologies:
  - Java
content:
  - text: >-
      As a final project of an interaction design course I took at Simon Fraser
      University, we were required to use Arduino and Processing to create a
      smart device. In a team of four, we decided to create a device that could
      be used to improve the home experience.
    title: Justification
  - text: >-
      Our project uses three main sensors to map out the colour changes. Sound
      and motion sensors provide automatic changes in the mood lighting
      depending on the volume and motion levels in the room. Finally,
      customizable personal preferences can also be set through an NFC sensor
      and the user’s phone.
    title: Interaction
    image: /uploads/interactiondiagrammoodlamp.png
  - text: >-
      The light is constructed within the metal frame of a Japanese pagoda. With
      translucent paper cladding that emulated a Shoji screen, light from LED
      matrix is dispersed. We felt the simplicity of Japanese design would work
      well within the context of this project while giving it a recognizable
      look.
    title: Design
    image: /uploads/moodlampinlight.jpg
  - text: >-
      The light is controlled by an Arduino attached to multiple sensors. Our
      Arduino code keeps track of a motion level, determined by how often the
      motion sensor is triggered and volume level, determined by the amplitude
      reading from the microphone. The amalgamation of these two values is what
      creates am atmosphere index, which results in the different colours,
      pulses, and brightness in the LED ring.
    title: Schematics
    image: /uploads/moodlampdiagram.jpg
  - text: >-
      The biggest challenge was calibrating the values from the motion sensor
      and microphone to get useful data about the room. In future iterations, we
      would include a light sensor to make our light activate automatically as
      well as implement beat detection so then when music was played, the lamp
      would pulse on beat.
    title: Challenges
---

