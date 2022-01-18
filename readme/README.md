![CI logo](/Media/weatherlogo.png)
# WeatherNow
### Deployed Site : https://tnolan01.github.io/weather/

### Introduction:
*WeatherNow is a website designed using HTML, CSS and Javascript. The primary function of which is to extract real-time and histroical weather data from a particular private weather station. The private weather station, PWS, uploads data to a website called Weather Underground, https://www.wunderground.com/.  WeatherNow extracts that data from wunderground.com via API's and displays the information in a more user friendly and exact format.*

<br>

# Project Outline

1. [Project Scope](#project_scope)

2. [Design & Stylings](#design)

3. [Structure](#structure)

4. [Testing](#testing)

5. [Deployment](#deployment)

6. [Project Credits](#project-credits)

<br>

## Project Scope: <div id="project_scope"><div> 

### User Stories:

<p>This website was designed primarily for use by a farmer local to the area. Farmer Browne has just purchased a new farm, a 250 hectare block of land in the 'Sunny' South East corner of Ireland, Co. Wexford. This parcel of ground is approximatley 40 kilometres from Farmer Brownes main centre of operations but the quality of the land makes it excellent for food production.
Farmer Brownes is a tillage farmer and his main crops are Potatoes and Cabbage in rotation with Barley. Important factors for Farmer Browne to consider from the sowing to harvesting cycles of these crops would be as follows:</p>
<ul>
<li> Recent precipation totals.</li>
<li> Recent temperature range. </li>
<li> Humidity levels.</li>
<li> Wind strength and direction. </li>
</ul>
<p> Temperature and precipation are both important elements in the growth cycle of crops. If precipation levels are low during the summer months then Farmer Browne will have to water his potato crop to maintain growth or risk lossing his crop. </p>
<p> High levels of humidity and a consistent temperature of +10°C puts his potato crop at risk of Blight which can also wipe out Farmer Brownes potato crop. </p>
<p> And what if Farmer Browne needs to spray his crop to protect from Blight?, then he will need to know the current strength of the wind at his new land holding. </p>
<p> Weather information will also help Farmer Browne choose the best time for sowing and harvesting depending how much precipation is in the ground and what the short term weather outlook is.</p>
<br>
<p> Knowledge of recent and current weather, with a short term 60 to 72 hour forecast will allow Farmer Browne make better business decisions and save him time and money.

*Examples:*
<ul>
<li> Deciding where to send his employee's to cut cabbage, which is still hand cut and very labour intensive.</li>
<li> Deciding on when and if he can spray crops.</li>
<li> Deciding on most suitable harvesting times.</li>
<li> Deciding if recent levels of precipation have left the ground to soft to travel on or are insufficent for crop growth. </li>
</ul>

<p> The website will also be accessible to anyone in the area, other farmers or local residents etc. 

<br>
<p> Luckily for Farmer Browne a property adjoining his new land has a PWS which is active and uploading weather data to the Weather Underground website.</p>

### Scope:
*Design a website to allow Farmer Browne simple and up to date access to weather conditions on this new remote site without the need to drive the 80 kilometre round trip from his yard. Provide Farmer Browne with the information to make better decisions about how he deploys has staff and where and when he sends his machinary, equipment which is slow and expensive and would comsume alot of diesel on the 80 kilometre trip.*

<ol>
<li> Ascertain the information the end user, Farmer Browne, requires. </li>
<li> Using the API key provided by the owner of the local PWS, retrieve the required data from wunderground.com </li>
<li> Design and deploy a site to show the data in a simple accessible manner. </li>
</ol>

The site must be...
<ol>
<li> Simply to use with a clear uncluttered display which is easy to read. </li>
<li> Responsive to use on smaller screens. </li>
<li> Have a forecast / weather projection function. </li>
</ol>

## Design: <div id="design"><div> 

#### Primary Coloring:
<br>
<ul>
<li> Primary back-ground color is white to enhance brightest when used on small screen and/or outdoors and in dark conditions.</li>
<li> Grey header and footer white text in white for clarity and contrast. </li>
<li> Use of orange as high-light color. Orange is used to distinguish sections and values. I also used the orange color with the 'hover' property to show when the user is over a selectable option on the header and footer sections.
<li> I used blue with the 'hover' property on the buttons on the Charts page to help distinguish which button the user is hovering over. </li>
<li> The site has simple weather related logo in the top left hand corner of the screen.</li>
</ul> 
 
pic of colors here xxxxxxxxxxxxxx

#### Structure:
#### Site Structure:
<p> The site is built with a HTML structure, with styling through CSS and with functionality coded with JavaScript. <p>
<p> I am using Application Programming Interface, API, to coommunicate with <wunderground.com> and retrieve JSON data relating to a particular weather station. </p>
<p> Data displayed on the site is retrieved by JavaScript fetch request 

<h4 id="header" style="color: orange; font-weight: bold">Header</h4>
<p>The header is common across all html pages. The hmtl sturcture is a div which contains 4no. anchor elements containing links to the relevant html pages.</p>
<p>The div has a class of <span style="color: orange;">'navbar'</span> and this class identifies the div for the appropriate stylings in style.css file. </p>

image of header here xxxxxxxxxx

<h4 style="color: orange; font-weight: bold">Footer</h4>
<p>The header is also common across all html pages. The hmtl sturcture of the footer is a div. This div contains 1no. anchor element which has a link to the relevant 'pws_map.html' page. There is also a H5 heading which contains the following text * 'Copyright Tim Nolan Jan2022. This site was designed for educational purposes.' *</p>
<p>This div has a class of <span style="color: orange;">' footer'</span> and this class identifies the div for the appropriate stylings in style.css file. </p>

image of footer here xxxxxxx

<h4 style="color: orange; font-weight: bold">Index.html</h4>

<p> The index.html shows the current weather. The page is identified on the [Header](#header) as <span style="font-weight: bolder;">'Current'</span>. The page is constructed of box div's located inside a container, with a class of <span style="color: orange;">'container'</span>. Each box has a class of <span style="color: orange;">'box'</span> and contains a single weather related value based on most current data. I am using a grid structure to make these div's responsive. The box div's present as seperate tiles. </p>

<p>The data displayed on tiles is retrived via the [getWeather.js](#getWeather) JavaScript which is called when the pages loads. <p>

image of index.html xxxxxx

The index.html pages also contains a span element below the page logo, this displays the date and time for which the data displayed was last updated. This date and time is retrieved along with the weather data via the [getWeather.js](#getWeather) JavaScript.

image of date and time xxxxxxxxxxxxxx








