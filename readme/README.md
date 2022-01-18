![CI logo](/Media/weatherlogo.png)
# WeatherNow
### Deployed Site : https://tnolan01.github.io/weather/

### Introduction:
*WeatherNow is a website designed using HTML, CSS and Javascript. The primary function of which is to extract real-time and historical weather data from a particular private weather station. The private weather station, PWS, uploads data to a website called Weather Underground, https://www.wunderground.com/.  WeatherNow extracts that data from wunderground.com via API's and displays the information in a more user friendly and exact format.*

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

<p>Styling of the html structure is handled by the file located in the css folder. </p>

pic of colors here xxxxxxxxxxxxxx



## Structure:
#### Site Structure:
<p> The site is built with a HTML structure, with styling through CSS and with functionality coded with JavaScript. <p>
<p> I am using Application Programming Interface, API, to coommunicate with <wunderground.com> and retrieve JSON data relating to a particular weather station. </p>
<p> Data displayed on the site is retrieved by JavaScript fetch request 

<h4 id="headerRef" style="color: orange; font-weight: bold">Header</h4>
<p>The header is common across all html pages. The hmtl sturcture is a div which contains 4no. anchor elements containing links to the relevant html pages.</p>
<p>The div has a class of <span style="color: orange;">'navbar'</span> and this class identifies the div for the appropriate stylings in style.css file. </p>

image of header here xxxxxxxxxx

<h4 id="footerRef" style="color: orange; font-weight: bold">Footer</h4>
<p>The header is also common across all html pages. The hmtl sturcture of the footer is a div. This div contains 1no. anchor element which has a link to the relevant 'pws_map.html' page. There is also a H5 heading which contains the following text *Copyright Tim Nolan Jan2022. This site was designed for educational purposes.*</p>
<p>This div has a class of <span style="color: orange;">' footer'</span> and this class identifies the div for the appropriate stylings in style.css file. </p>

image of footer here xxxxxxx

<h4 style="color: orange; font-weight: bold">index.html</h4>

<p> The index.html shows the current weather. The page is identified on the [Header](#headerRef) as <span style="font-weight: bolder;">'Current'</span>. The page is constructed of box div's located inside a container, with a class of <span style="color: orange;">'container'</span>. Each box has a class of <span style="color: orange;">'box'</span> and contains a single weather related value based on most current data. I am using a grid structure to make these div's responsive. The box div's present as seperate tiles. </p>

<p>The data displayed on tiles is retrived via the [getWeather.js](#getWeather) JavaScript which is called when the pages loads. <p>

image of index.html xxxxxx

The index.html pages also contains a span element below the page logo, this displays the date and time for which the data displayed was last updated. This date and time is retrieved along with the weather data via the [getWeather.js](#getWeather) JavaScript.

image of date and time xxxxxxxxxxxxxx

<h4 style="color: orange; font-weight: bold">pws_map.html</h4>

<p> The pws_map.html page contains the common header and footer elements along with a div with the id of <span style="color: orange;">'map'</span>. This id links to a Google Map's API function which renders a Google Map showing the position of weather station. The longitude and latitude used were retrieved from JSON data. </p>
<p> There is also a span containing the longitude and latitude information. I have a text marker on the Google Map showing the words <span style="color: blue;">'Weather Station'</span>.

image here xxxxxxxxxxxxxxxxxxxxxx

<h4 style="color: orange; font-weight: bold">forecast.html</h4>

<p> The forecast.html shows a projected 48hour forecast. The page is identified on the header. as <span style="font-weight: bolder;">'Outlook'</span>. The page is constructed of box div's located inside a container. The container has a class of <span style="color: orange;">'container'</span>. Each box has a class of <span style="color: orange;">'fcbox'</span>. Each box again represents as a tile and contains a projected forecast for the local area. There are 4no. tiles each with the forecast of 12 hours.</p>
<br>
<ol>
<li>Tonight - projected forecast for the next 12 hours +.</li>
<li>Tomorrow - projected forecast for the period 13 to 24hours +.</li>
<li>Tomorrow Night - projected forecast for the period 25 to 36hours +.</li>
<li>Next Day - projected forecast for the perios 37 to 48 hours +.</li>
</ol>

The forecast is generated from a fetch request to the relevant JSON data using the [forecast.js](#getForecast) script.
The values are based on most current data.

image here xxxxxxxxxxxxxxxxxxxxxxx


<h4 style="color: orange; font-weight: bold">history.html</h4>

<p> The history.html shows a summary of weather data for the previous 7 days. The page is identified on the header. as <span style="font-weight: bolder;">'7 Day Review'</span>. The page is constructed of box div's located inside a container. The container has a class of <span style="color: orange;">'container'</span>. Each box has a class of <span style="color: orange;">'hisbox'</span>. </p>

<p>**Information displayed on each tile:**</p>
<ol>
<li>Date:</li>
<li>Average Temperature:</li>
<li>Rain Fall Total:</li>
<li>Average Wind Speed:</li>
<li>Average Humidity:</li> 
</ol>

<p> The tiles are arranged from most recent day, yesterday, backwards a 6 further days. The page also contains a 'tile' which shows three calculations made from data retrived.</p>
<ol>
<li> Rain fall total over the past 7days.</li>
<li> Average temperature over the past 7days.</li>
<li> Average humidity over the past 7days.</li>
</ol>

The data is generated from a fetch request to the relevant JSON data using the [getHistory.js](#getHistory) script. Using some of the values recieved some simple calculations are made to return values for the 7 day averages listed above.

image here  xxxxxxxxxxxx

<h4 style="color: orange; font-weight: bold">rain_chart.html</h4>

<p>This page contains 5no. buttons. The page is referenced on the header. as <span style="font-weight: bolder;">'Charts'</span>. The page contains a div with the class of <span style="color: orange;">'button_container'</span>. The five buttons are located inside this div, the buttons have a class named <span style="color: orange;">'button'</span>. </p>
<p>The page has a div which holds a canvas element where the selected chart is created. The canvas had an id of <span style="color: orange;">'myChart'</span>.

<p>The buttons listed on this page are as follows.</p>
<ol>
<li>Precipation Total, total precipation for each of the previous 7 days displayed as a line chart.</li>
<li>Temperature Averages, the average temperature for each of the previous 7 days displayed as a line chart.</li>
<li>Sunshine Averages, the average levels of sunshine on each day over the previous 7 days.</li>
<li>Wind Data Chart, this chart displays the highest gust, lowest gust and average wind speed recorded on the particular day.</li>
<li>Download Chart, this button allows the user download the currently displayed chart as a png file.</li>
</ol>

I have written a seperate JavaScript for the first four buttons as follows;
[rainChart.js](#rainChart)
[tempChart.js](#tempChart)
[solarChart.js](#solarChart)
[windChart.js](#windChart)

Each script fetchs the relevant JSON data and using Chart.js creates a line chart to display the data.

image here xxxxxxxxxx


<h4 id="rainChart" style="color: orange; font-weight: bold">rainChart.js</h4>
<h4 id="tempChart" style="color: orange; font-weight: bold">tempChart.js</h4>
<h4 id="solarChart" style="color: orange; font-weight: bold">solarChart.js</h4>
<h4 id="windChart" style="color: orange; font-weight: bold">windChart.js</h4>







<h4 id="getWeather" style="color: orange; font-weight: bold">getWeather.js</h4>

<h4 id="getForecast" style="color: orange; font-weight: bold">forecast.js</h4>

<h4 id="getHistory" style="color: orange; font-weight: bold">getHistory.js</h4>




