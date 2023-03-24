# Date Calculator
Date Calculator is a Google Chrome Extension that allows users to quickly calculate the number of days between dates, or the resulting date after a number of days. 

# Version Update (v0.4.2)
 * Implement light mode and dark mode based on browser preference
 * Improve date picker display
 * Format results
 * Temporarily remove 'Settings' option

## Table of Contents
* [Screenshots](#screenshots)
* [Project Overview](#project-overview) 
* [Technologies](#technologies)
* [Methodology](#Methodology)
* [Advanced Features](#advanced-features)
* [Links](#links)

## Screenshots
![First view of app](https://lh3.googleusercontent.com/fk0iknxsCnF0nQg1mt54ZWOqNjuGaftpBnCIjc3Lau0Ny3d-vLaZI2vLMwVCYm5Jc0aQ1pXXoxkedRWkGHSELEaWZ58=w640-h400-e365-rj-sc0x00ffffff)
![Second view of app](https://lh3.googleusercontent.com/E5kw5--B1pM1OPWwlNgh5Q35xA2SJQvAwMmOpD7LTLc2pqhzoCgRTCemA1me5pezmpr5zHJ1nN8E5O6E1gA8fegp0gs=w640-h400-e365-rj-sc0x00ffffff)

## Project Overview
Date Calculator was created to make calculating deadlines for transactions easier. Date calculation was a repetive and time-consuming task in my real estate transactions, so I built this app to speed up the process. While this app is a useful time-saver for real estate agents, it can be useful for anyone that needs to quickly calculate dates. 

Date Calculator includes the following options:
* Skip weekends. When calculating a date, Date Calculator will skip weekends. For example, if the starting date is a Thursday and (2) days are added, the result will be the following Monday. 
* Skip holidays. When calculating a date, Date Calculator will skip holidays. For example, if the starting date is a Saturday, (2) days are added, and the following Monday is a holiday, the result will be the following Tuesday. 
* Next business day. When calculating a date, if the resulting date is a weekend or holiday, the result will move to the following business day. 

## Technologies
Project is created with:
* React version: 18.2.0
* MUI version: 5.11.3
* Moment version: 2.29.4
* Jest library version: 5.16.5

## Methodology
This project is a rebuild of a previous Date Calculator app that I built. The original was created with HTML, CSS, and JavaScript, using Moment.js for date calculation. 

For the rebuild, I began by redesigning the app using Figma. You can view the original Figma design [here](https://www.figma.com/file/7JVP6SvODmpBp05oA8d4P8/Date-Calculator?node-id=0%3A1&t=8A5p9pSIQi0Bs6yS-1). The design was created using Material Design v3 with components available from Google's Material UI. 

After completing the design, I created my React project folder and started building out my components. 

To get the app pixel-perfect, I took a 360x640 screenshot of my Figma design and used PerfectPixel Chrome Extension to overlay it on my locally hosted app. I then finetuned the stylesheets until I was satisfied with the results. 

After I was satisfied with appearance and functionality, I tested the business logic of the app using Jest. 

Once the app was ready to publish, I realized I wanted a third option for date calculation. I added this on the fly and made some tweaks to the CSS to keep the appearance consistent with the original design. When testing the app as a Chrome Extension, I also realized the maximum height allowed by Google is 600px, which resulted in unwanted scrolling, so I decreased the top margins for the input elements in order to give the result div enough space. 

Packaging the Chrome Extension was fairly easy, and required use of a v3 manifest.json file in my build folder. A security quirk about Chrome Extensions is that they don't allow inline JavaScript. The react-scripts build creates an inline script in the index.html that appears to be used for creating an SHA hash. Google's docs are unclear about how to overcome this with their v3 manifest protocol, so I simply moved the script into its own file and referenced it in the document header. 

Finally, the app was ready to publish! I created a couple of promotional images and screenshots in Photoshop, created an icon, and sent the app for publication on the Chrome Web Store. 🎉

## Advanced Features
I intend to introduce a 'Pro' version that will include many advanced features, such as custom holidays/skip dates, varying locales, date sharing, and calendar integration. 

## Links
Date Calculator can be downloaded and added to Google Chrome [here](https://chrome.google.com/webstore/detail/date-calculator/iblpkfneemfheailondhclobmhbfopgk).