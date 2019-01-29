# CV Creator

This is my first creation with React, specifically the create-react-app. My intention is to showcase some of the skills and tools I have picked up from tutorials. Also it is a shameless way to present a short CV of mine.

## USER: How to Guide

This CV Creator sets out to make it easy to produce a very quick CV with the major headaches of styling, layout and content already figured out for the user. As you scroll down the page, you will be presented with an example with my content already displayed to give a sense of what you need to enter in terms of content and what you will get at the end. 

#### Inputting Data
After this you will reach the input section. In this area, you will need to update the content with your information. If you wish, you can scroll back up to the example at any time to see how this will look in your final output.

#### Colour Options
Further options have been included so that you can change the colours of the dividing borders and the headings. Simply click on the relevant colour selector and scroll back up to see the results.

#### Saving your CV
Once you are satisfied with the layout of your CV, press your short-cut keys to print. The document has been styled to remove all other elements with the exception of your CV. At this stage when you see the print preview you may wish to return to tweak some details but note that it may be necessary to scale to fit the document and/or remove any added headers or footers. Finally print or save to pdf.


---

## Developer: Use of React

In this work I created the folder structure and components to break the site down into the App, Landing Page, Preview and Input sections of the single page app. After building the basic structure and styling, I researched the best methods for setting print styling. Seeing that further options with "@pages" are not precise on any browser, I chose to design the page to fit the screen for medium to large monitors (excluding mobile). 

Once this was complete, I wanted to implement the tools of React. I set out to try and add the following features:

* Input fields linked to state to automatically update in the preview section.
* Addition of a character count for the larger text input areas.
* Options to add extra skills.
* Use of API to include profile ID from the users LinkedIn account.
* Options to allow some changes in the styling of the page.

#### Reflection

Overall I met these goals. Input fields do update using state and use of assignment destructuring gave it a neat handleChange method. The character count also managed to fit easily with the use of state. I initially played with creating buttons, then checkboxes to add extra skills, however, it seemed superfluous as I was easily able to add two more empty input fields that don't rended anything to the page. The API integration was a major area of disappointment. I thought to include this feature as it is possible to use the github API without any authorisation tokens for basic public information. Unfortunately I found that this is not the case with LinkedIn. Also other popular social media accounts can do this but only with the users specific id number, not just their username. The page styling worked but I would have wished for a function to find the elements to be styled instead of the use of inline, dynamic styling. My attempt at this changed the styles but only at the previous state, meaning the colours change was always one step behind. For this reason I chose inline styles in the neatest way I could write.
