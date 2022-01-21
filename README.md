![CI logo](/Media/weatherlogo.png)
# WeatherNow
### Deployed Site : https://tnolan01.github.io/weather/

### Introduction:
*WeatherNow is a website designed using HTML, CSS and Javascript. The primary function of which is to extract real-time and historical weather data from a particular private weather station. The private weather station, PWS, uploads data to a website called Weather Underground, https://www.wunderground.com/.  WeatherNow extracts that data from wunderground.com via an API and displays the information in a more user friendly and exact format.*

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

<p>Farmer Browne has just purchased a new farm, a 250-hectare block of land in the 'Sunny' Southeast corner of Ireland, Co. Wexford. This parcel of ground is approximatley 40 kilometres from Farmer Brownes main center of operations but the quality of the land makes it excellent for food production.
Farmer Brownes is a tillage farmer and his main crops are Potatoes and Cabbage in rotation with Barley. Important factors for Farmer Browne to consider from the sowing to harvesting cycles of these crops would be as follows:</p>
<ul>
<li> Recent precipation totals.</li>
<li> Recent temperature range. </li>
<li> Humidity levels.</li>
<li> Wind strength and direction. </li>
</ul>

<br>

*Examples:*
<ul>
<li> Deciding where and when to send his employees to harvest vegetables, many of which are still hand cut and very labour intensive.</li>
<li> Deciding on when and if he can spray crops.</li>
<li> Deciding on most suitable harvesting times.</li>
<li> Deciding if recent levels of precipitation have left the ground to soft to travel on or are insufficent for crop growth. </li>
</ul>

<p> The website will also be accessible to anyone in the area, other farmers, local residents etc. 

<br>
<p> Luckily for Farmer Browne a property adjoining his new land has a PWS which is active and uploading weather data to the Weather Underground website.</p>

### Scope:
*Design a website to allow Farmer Browne simple and up to date access to weather conditions on this new remote site without the need to drive the 80 kilometer round trip from his yard. Provide Farmer Browne with the information to make better decisions about how he deploys has staff and where and when he sends his machinery, equipment which is slow and expensive and would consume a lot of diesel on the 80 kilometre trip.*

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
<li> The site has simple weather-related logo in the top left-hand corner of the screen.</li>
</ul> 

<p>Styling of the html structure is handled by the file located in the css folder. </p>

<img title="header" alt="image of web page header" src="readme/color_scheme.png">
<br>
<br>

## Structure:
### Site Structure:
<p> The site is built with a HTML structure, with styling through CSS and with functionality coded with JavaScript. <p>
<p> I am using Application Programming Interface, API, to communicate with <wunderground.com> and retrieve JSON data relating to a particular weather station. </p>
<p> Data displayed on the site is retrieved by JavaScript fetch request 

<h4 id="headerRef" style="color: orange; font-weight: bold">Header</h4>
<p>The header is common across all html pages. The hmtl structure is a div which contains 4no. anchor elements containing links to the relevant html pages.</p>
<p>The div has a class of <span style="color: orange;">'navbar'</span> and this class identifies the div for the appropriate stylings in style.css file. </p>

<img title="header" alt="image of web page header" src="readme/header.png">
<br>

<h4 id="footerRef" style="color: orange; font-weight: bold">Footer</h4>
<p>The header is also common across all html pages. The hmtl structure of the footer is a div. This div contains 1no. anchor element which has a link to the relevant 'pws_map.html' page. There is also a H5 heading which contains the following the text 'Copyright Tim Nolan Jan2022. This site was designed for educational purposes.'</p>
<p>This div has a class of <span style="color: orange;">' footer'</span> and this class identifies the div for the appropriate stylings in style.css file. </p>

<img title="header" alt="image of web page header" src="readme/footer.png">
<br>

<h4 style="color: orange; font-weight: bold">index.html</h4>

<p> The index.html shows the current weather. The page is identified on the [Header](#headerRef) as <span style="font-weight: bolder;">'Current'</span>. The page is constructed of box div's located inside a container, with a class of <span style="color: orange;">'container'</span>. Each box has a class of <span style="color: orange;">'box'</span> and contains a single weather-related value based on most current data. I am using a grid structure to make these div's responsive. The box div's present as seperate tiles. </p>

The data displayed on tiles is retrieved via the [getWeather.js](#getWeather) JavaScript which is called when the pages loads. 
<p>On load this page displays a pop up box to give identify the position of the weather station and geographic area for which the data has relevance.</p>

<img title="header" alt="image of web page header" src="readme/current.png">
<br>
<br>
<p>Image of the pop up box.</p>
<img title="header" alt="image of web page header" src="readme/intro_box.png">
<br>
The index.html pages also contains a span element below the page logo, this displays the date and time for which the data displayed was last updated. This date and time is retrieved along with the weather data via the [getWeather.js](#getWeather) JavaScript.

<img title="header" alt="image of web page header" src="readme/time_date.png">
<br>


<h4 style="color: orange; font-weight: bold">pws_map.html</h4>

<p> The pws_map.html page contains the common header and footer elements along with a div with the id of <span style="color: orange;">'map'</span>. This id links to a Google Map's API function which renders a Google Map showing the position of weather station. The longitude and latitude used were retrieved from JSON data. </p>
<p>The script for the mapping is located in the head of the page. </p>
<p> There is also a span containing the longitude and latitude information. I have a text marker on the Google Map showing the words <span style="color: lightblue;">'Weather Station'</span>.

<img title="header" alt="image of web page header" src="readme/map.png">
<br>

<h4 style="color: orange; font-weight: bold">forecast.html</h4>

<p> The forecast.html shows a projected 48hour forecast. The page is identified on the header. as <span style="font-weight: bolder;">'Outlook'</span>. The page is constructed of box div's located inside a container. The container has a class of <span style="color: orange;">'container'</span>. Each box has a class of <span style="color: orange;">'fcbox'</span>. Each box again represents as a tile and contains a projected forecast for the local area. There are 4no. tiles each with the forecast of 12 hours.</p>

<img title="header" alt="image of web page header" src="readme/outlook.png">
<br>

<ol>
<li>Tonight - projected forecast for the next 12 hours +.</li>
<li>Tomorrow - projected forecast for the period 13 to 24hours +.</li>
<li>Tomorrow Night - projected forecast for the period 25 to 36hours +.</li>
<li>Next Day - projected forecast for the period 37 to 48 hours +.</li>
</ol>

The forecast is generated from a fetch request to the relevant JSON data using the [forecast.js](#getForecast) script.
The values are based on most current data.

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

<p> The tiles are arranged from most recent day, yesterday, backwards a 6 further days. The page also contains a 'tile' which shows three calculations made from data retrieved.</p>
<ol>
<li> Rain fall total over the past 7days.</li>
<li> Average temperature over the past 7days.</li>
<li> Average humidity over the past 7days.</li>
</ol>

The data is generated from a fetch request to the relevant JSON data using the [getHistory.js](#getHistory) script. Using some of the values received some simple calculations are made to return values for the 7 day averages listed above.

<img title="header" alt="image of web page header" src="readme/review.png">
<br>

<h4 style="color: orange; font-weight: bold">rain_chart.html</h4>

<p>This page contains 5no. buttons. The page is referenced on the header. as <span style="font-weight: bolder;">'Charts'</span>. The page contains a div with the class of <span style="color: orange;">'button_container'</span>. The five buttons are located inside this div, the buttons have a class named <span style="color: orange;">'button'</span>. </p>
<p>The page has a div which holds a canvas element where the selected chart is created. The canvas had an id of <span style="color: orange;">'myChart'</span>.

<p>The buttons listed on this page are as follows.</p>
<ol>
<li>Precipitation Total, total precipitation for each of the previous 7 days displayed as a line chart.</li>
<li>Temperature Averages, the average temperature for each of the previous 7 days displayed as a line chart.</li>
<li>Sunshine Averages, the average levels of sunshine on each day over the previous 7 days.</li>
<li>Wind Data Chart, this chart displays the highest gust, lowest gust and average wind speed recorded on the particular day.</li>
<li>Download Chart, this button allows the user download the currently displayed chart as a png file.</li>
</ol>

I have written a separate JavaScript for the first four buttons as follows;
[rainChart.js](#rainChart)
[tempChart.js](#tempChart)
[solarChart.js](#solarChart)
[windChart.js](#windChart)

Each script fetch's the relevant JSON data and using Chart.js creates a line chart to display the data. The code for the download button is located in each of these JavaScripts.

<img title="header" alt="image of web page header" src="readme/charts.png">
<br>
<img title="header" alt="image of web page header" src="readme/windchart.png">
<br>
<p>Download prompt box.</p>
<img title="header" alt="image of web page header" src="readme/dload_box.png">
<br>
<p>Example of downloaded chart.</p>
<img title="header" alt="image of web page header" src="readme/weather_chart_example.png">
<br>
<br>

#### **JavaScript**

<h4 id="getWeather" style="color: orange; font-weight: bold">getWeather.js</h4>
With this script I am fetching JSON data relating to current weather conditions. I am creating variables for the particular data I require and returning these elements to the html with **document.getElementById**.
<p>I also convert the degree value of the wind direction into a cardinal position, primarily as the cardinal position will have more relevance to most people. Cardinal positions also read more clearly. This is a simple code which I got from Stack Overflow.</p>
<p>There is a line of code here for the pop up/alert box to tell the user where the geographic location of the weather station and so the area for which the data is most relevant.</p>

<h4 id="getHistory" style="color: orange; font-weight: bold">getHistory.js</h4>
<p>This script fetchs the JSON data arrays for each of the proceeding 7 days. I am picking certain data points and passing them in the html. I have three varibles created for some simple calculations to display 7 days averages for humidity, temperature and precipitation.</p>
<p>I have added a Split and Trim alteration to time part of the data as supplied from the JSON array and just show the date only, this displays is far clearer and cleaner.</p>

<h4 id="getForecast" style="color: orange; font-weight: bold">forecast.js</h4>
<p>The forecasting script simply fetchs JSON data via an API which accesses JSON data from the wunderground.com forecasting model. The data is broken into array items marked as *daypart*. I am using four of these to give a 48 hour projected forecast.</p> 

<h4 id="rainChart" style="color: orange; font-weight: bold">rainChart.js</h4>
<h4 id="tempChart" style="color: orange; font-weight: bold">tempChart.js</h4>
<h4 id="solarChart" style="color: orange; font-weight: bold">solarChart.js</h4>
<h4 id="windChart" style="color: orange; font-weight: bold">windChart.js</h4>
<p> These four scripts for the basis of rain_chart.html. All are similar in stucture. Fetching the required data and then rendering into a line graph with Chart.js.</p>
<p> Other elements which form part of the functions that make up these scripts are as follows.</p>
<ul>
<li>Code to convert the date from the JSON format YYYY-MM-DD 00:00:00 to the relvant day name, ie. Monday, Tuesday etc. This is for the reason of clarity as the JSON date format would be to cluttered and unclear when shown on the graph.</li>
<li>I have also included code to destory the 'canvas' prior to creating the new graph. With this the you could not use the same canvas repeatedly to create the different graphs relating to the option selected. </li>
<li>I have created the variable to convert the newly create chart to a PNG image, the user has the option to download the currently displayed chart. A pop up prompts asks the user to confirm or cancel the download, if they have clicked the download button.</li> 
</ul>
<br>

## Testing: <div id="testing"></div> 

### Validation Testing:
<p> I have sucessfully passed the code through the following validators. </p>
<ul>
<li>W3 HTHL Validator : https://validator.w3.org/nu/?doc=https%3A%2F%2Ftnolan01.github.io%2Fweather%2F</li>
<li>W3 CSS Validator : https://jigsaw.w3.org/css-validator/validator?uri=+https%3A%2F%2Ftnolan01.github.io%2Fweather%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en</li>
<li>JS Hint Validator : Individual JavaScripts were passed through JsHint.</li>
</ul>

### Function Testing:
<p> The site has been tested through the following browsers. </p>
<ul>
<li> Google Chrome </li>
<li> Fire Fox </li>
<li> Microsoft Edge </li>
</ul>
<br>
<p> Function of the site was tested on the following devices and screens during the development</p>
<ul>
<li> Windows 10 Desktop PC with 24" LCD </li>
<li> Windows 10 Laptop with 14" LCD </li>
<li> Motorola G8 Android Phone </li>
<li> Motorola G10 Android Phone </li>

</ul>
### Identified Issues:
I now list some of the bugs and issues I have encounter and there current status.
<ol>
<li> The charts did not display on an Apple IPhone 5s. The rest of the site and related JSON data worked and displayed but the charts are not rendered regardless of the chart option selected. The Apple IOS on this phone is version 12.4 which was released in July 2019. There have been 15 updates to the OS since Version 12.4 was released. This is an old phone and very out of date, the associated Apple Account is no longer valid and the phone has not been updated for 24 months. </li>
<li> There is short 10(+/-) minute period at approximatley 00:00 while the JSON data on the Weather Underground website changes over from one day into the next. This </li> 
</ol>







