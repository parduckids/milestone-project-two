# Word Wide 
  * [Live link](https://parduckids.github.io/milestone-project-two)
  * [Wireframes](https://share.balsamiq.com/c/8obJqRrkHdLQWv489UPKAP.png)
  * [GitHub Repository](https://github.com/parduckids/milestone-project-two)
  * [Testing docs](TESTING.md)

![image](rm-images/screens.gif)


## The idea: 

* 'Word Wide' is a functional and minimalist synonym website. It stands out with a unique, quirky style, featuring animated background. Breaking away from the standard format of synonym sites; it provides word definitions, example words, synonyms based on user input, and even included a fun random word generator. I've used WordsAPI and Random Words API for synonyms and random words to make it interactive and engaging.

* This website has been created as my **Milestone Project 2** submission for the Code Institute's Diploma in Web Application Development course using HTML CSS and Javascript(jQuery). 


---

## Contents
- [User experience](#user-experience)
  * [User Stories](#user-stories)
    + [Regular User](#regular-user)
    + [Language Enthusiast](#language-enthusiast)
    + [Educator](#educator)
    + [Mobile User](#mobile-user)
- [Design](#design)
  * [Typography](#typography)
  * [Imagery](#imagery)
  * [Animations And Preloaders](#animations-and-preloaders)
- [Features](#features)
  * [Word Input](#word-input)
  * [Random Word Generation](#random-word-generation)
  * [Fetching Word Information](#fetching-word-information)
  * [Synonyms](#synonyms)
  * [Definitions](#definitions)
  * [Examples](#example-usage)
  * [User friendly Interface](#user-friendly-interface)
- [Extra features for the future](#extra-features-for-the-future)
- [Tools & Documentations](#tools--documentations)
  * [Version Control & Hosting](#version-control--hosting)
  * [Design & Image editing](#design--image-editing)
  * [Search Engine Optimisation 'SEO'](#seo)
  * [Documentations](#documentations)
  * [Application Programming Interfaces 'API's'](#apis-application-programming-interface)
- [Deployment](#deployment)  
- [Testing](#testing)
  * [Manual Testing]()
  * [Testing tools]()
- [Credits & Acknowledgements](#credits--acknowledgements)
---

# User Experience:
## User Stories:

### Regular User
* As a regular user, I want to be able to search for synonyms quickly, so I can find the right word efficiently while enjoying the quirky design.
* As a regular user, I want to see word definitions alongside synonyms so I can understand the word's context better.
* As a regular user, I want the option to explore similar words, helping me find alternatives that suit my writing style.

### Language Enthusiast
* As a language enthusiast, I'd like the website to provide me with detailed word information, including etymology and usage examples, in a format that enhances my vocabulary exploration.
* As a language enthusiast, I want a "Random Word" feature to expand my word knowledge and challenge my language skills.

### Educator
* As an educator, I need the website to be ad-free and straightforward to navigate, ensuring that students aren't distracted during their synonym searches while enjoying the website's engaging design.
* As an educator, I'd appreciate the ability to create lists of words and their synonyms for use in my teaching materials.

### Mobile User
* As a mobile user, I want the website to maintain its design while ensuring smooth and responsive navigation on my smartphone, so I can access synonyms on the go and enjoy the unique experience.

---

# Design:

## Typography
* I use '[Roboto Mono]' throughout the website , which carries the same contemporary and unassuming design as the rest of the "Roboto" family. Its clean lines and minimalistic letterforms create a modern and professional appearance.
* The font is importad from [Google Fonts](https://fonts.google.com/)

## Imagery
**Typing Monster Gif:**

* Source: [Gifer](https://gifer.com)
* I used an animated gif of a playful and unique typing monster hand to encourage users to engage with the quirky design of the project.

**Background with Abstract Shapes:**

* I created the background image on [Canva](https://canva.com), a graphic design platform.
* The background features a dynamic composition of abstract shapes, providing a visually stimulating backdrop that complements the engaging design of the project with added css scrolling animation.

* CSS scrolling effect idea came from [this blogpost](https://nikitahl.com/infinite-background-image-scroll)

**Word Wide Logo:**

* Created with [Canva](https://canva.com)
* The logo features a globe, a star, and the text "Word Wide." This design plays on the word "worldwide," emphasizing the global reach of the synonym web application and adding a unique visual element to the project's branding.

**Favicon**
* ![image](rm-images/typography.png)


## Color scheme
![image](rm-images/color-scheme.png)
<!-- write about these colors and the choice  -->

## Animations and preloaders:

**Preloader with animated star gif:**

* To ensure that the loading time is less noticable and maintain the project's cohesive visual theme.

<br>

<img src="https://i.gifer.com/XZ5V.gif" alt="Preloader gif used in the project"  width="200">

**Background animation:**
*  This animation uses keyframes to create the illusion of the background image moving down the page. By smoothly transitioning the background position, it adds a dynamic and visually appealing element to the design.

![image](rm-images/background-anim.gif)

---

# Features

### Word Input:
* Users can input a word of their choice into the application, making it easy to search for specific terms or explore new vocabulary.

* First load:
<br>
<img src="rm-images/input-start.png"  width="400"/>

* From second load:
<br>
<img src="rm-images/input-later.png"  width="400"/>

### Random Word Generation:
* Upon loading the application, a selection of intriguing and random words is presented. Users can click on these words to explore their meanings and usage.
<br>

<img src="rm-images/random-words.png"  width="400"/>

### Fetching Word Information: 
<img src="rm-images/word.png"  width="400"/>
<br>
* After a user submits a word, the application fetches comprehensive information about the term, including:

  ### Synonyms:
  * The application provides a list of synonyms, helping users discover alternative words with similar meanings.
  <br>
    <img src="rm-images/similar.png"  width="400"/>

  ### Definitions:
  * Clear and concise definitions are offered, allowing users to gain a better understanding of the word's precise meaning and usage.
  <br>
  <img src="rm-images/definitions.png"  width="400"/>

  ### Example usage:
  * The application supplies usage examples, providing real-world context for the word's application in sentences.
  <br>
  <img src="rm-images/examples.png"  width="400"/>

### User-Friendly Interface: 
* The user interface is designed for simplicity and ease of use. After the word is submitted, the interface dynamically updates to display the entered word, its synonyms, definitions, and examples. This seamless transition enriches the user experience, making it easy for users to explore and understand the world of words.
<br>

![image](rm-images/background-anim.gif)


# Extra features for the future:

* Now the Random word API limited to 4 result, I would like to add a 'more...' button that shows an extra for every time it's been clicked, as well as refreshing the results when too many is present. 
* The WordAPI has many other types of data connected to words, I would like to extend the functionality of the website to show more
* WordAPI is currently restricted for 3/4/5 results, I would like to add a 'read more..' button to show more definition, synonym and example for the user.
* Implementing mini games with words for younger generation, or anyone who likes to play word games !

# Tools & Documentations :

### Version control & hosting:

**[Github](https://github.com)**
* Used for version control throughout the whole project

**[GitPod](https://github.com)**
* Used as an online editor to code the project

**[Github Pages](https://github.com)**
* Used for hosting everything for the project, creating a live link for the users

### Design & image editing

**[Adobe Photoshop](https://www.adobe.com/)**

* Compressing and risizing images.

**[EzGif](https://ezgif.com/video-to-gif)**

* Video to gif conversion.

**[Techsini Mockup](https://techsini.com/multi-mockup/)**

* Create a multi screen size screenshot.

**[Real Favicon Generator](https://realfavicongenerator.net/)**

* Creating favicon from an image.

**[MacOS Screenshot & Screen recording](https://support.apple.com/en-gb/guide/mac-help/mh26782/mac)**

* Used for screen recording and screenshots.

### SEO:

**[Meta tag & Opengraph tool](https://metatags.io/)**

* Generating meta tags and Opengraph protocol for the project



### Documentations:

* **[Bootstrap docs](https://getbootstrap.com/docs/5.3/getting-started/introduction/)**

* **[WordsAPI docs](https://rapidapi.com/dpventures/api/wordsapi)**

* **[Random Words API docs](https://rapidapi.com/sheharyar566/api/random-words5/)**

* **[jQuery docs](https://api.jquery.com/)**

* **[Markdown docs](https://www.markdownguide.org/cheat-sheet/)**

# API's (Application Programming Interface): 

**[Random Word](https://rapidapi.com/sheharyar566/api/random-words5)**
* Used to generate random word for "Today's word selection"

**[WordsAPI](https://rapidapi.com/dpventures/api/wordsapi)**
* Used as the brain of the project for the main functionality
* Calling this api with the value of the user input, presenting synonyms, definitions and examples to the user


# Deployment:

- The website built with the help of [gitpod template](https://github.com/Code-Institute-Org/gitpod-full-template)  that Code Institute provided for this project and [Gitpod](https://www.gitpod.io/) that is an online code editor provided by [Github](https://github.com/). 
- Using Github and Github Pages to create a live link for the website.


- Guide for running the code on [Gitpod](https://www.gitpod.io/)
![Gitpod tutorial gif](rm-images/gitpod2.gif)

  - **Navigate to Your GitHub Project:** Go to the GitHub page of the project you want to work on.
  -  **Click the Gitpod Button:** Find and click the Gitpod button. This button is usually located near the top of your GitHub project page, often close to the "Code" button.
  -  **Log Into Gitpod if Necessary:** If you're not already logged in, Gitpod will ask you to log in with your account.
  -  **Wait for the Environment to Load:** Gitpod will create a new workspace and load the project. This process might take a minute or two.
  -  **Start Working:** Once the workspace is ready, you can begin coding, committing, and pushing changes directly from Gitpod.

- Step by step guide for creating a live link with the help of [Github Pages](https://pages.github.com/)
![Github pages tutorial gif](rm-images/pages2.gif)
  - **Choose Your Project:** Navigate to the GitHub repository of the project you want to publish.
  - **Open Repository Settings:** Click on the "Settings" tab near the top of the repository page.
  - **Locate GitHub Pages Section:** Scroll down to the "Pages" section in the settings menu.
  - **Select Source Branch:** Choose the branch you want to publish from the "Source" dropdown menu. Typically, this is the main branch or a gh-pages branch if you have one.
  - **Choose Folder:** Select the folder that contains your website files (like / (root) or /docs if your files are in the docs folder).
  - **Save:** Click "Save”.
  - **Wait for Deployment:** After saving, GitHub will begin deploying your site. It may take a few minutes.
  - **Access Your Live Site:** Once deployed, GitHub will display a link to your live site, which will look something like https://username.github.io/repository.


# Credits & Acknowledgements


