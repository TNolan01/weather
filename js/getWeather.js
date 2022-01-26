
/*jshint esversion: 9 */ 
async function getWeather() {
    
    const response = await fetch('https://api.weather.com/v2/pws/observations/current?stationId=IENNIS18&format=json&units=m&apiKey=d26d907038e74f7fad907038e7ef7f0e');
    const data = await response.json();
        
    let pressure = data.observations[0].metric.pressure;
    let windSpeed = data.observations[0].metric.windSpeed;
    let windGust = data.observations[0].metric.windGust;
    let temp = data.observations[0].metric.temp;
    let precipRate = data.observations[0].metric.precipRate;
    let precipTotal = data.observations[0].metric.precipTotal;
    let uv_index = data.observations[0].uv;
    let humidity = data.observations[0].humidity;
    let windDir = data.observations[0].winddir;
    let deg = data.observations[0].winddir;
    let solar = data.observations[0].solarRadiation;

    /* Maths to convert degree's to cardinal direction*/
    directions = ['North', 'NorthEast', 'East', 'SouthEast', 'South', 'SouthWest', 'West', 'NorthWest'];
    // Split into the 8 directions
    deg = deg * 8 / 360;
    // round to nearest integer.
    deg = Math.round(deg, 0);
    // Ensure it's within 0-7
    deg = (deg + 8) % 8;
    

    document.getElementById('press').textContent = pressure;
    document.getElementById('windspeed').textContent = windSpeed; 
    document.getElementById('windgust').textContent = windGust;
    document.getElementById('temp').textContent = temp; 
    document.getElementById('precip_rate').textContent = precipRate; 
    document.getElementById('precip_total').textContent = precipTotal;
    document.getElementById('uv').textContent = uv_index;
    document.getElementById('humidity').textContent = humidity;
    document.getElementById('winddir').textContent = windDir;
    document.getElementById('deg').textContent = directions[deg];
    document.getElementById('solar').textContent = solar;


    /* Get current time */

    let dt = data.observations[0].obsTimeLocal;
    document.getElementById('date-time').textContent = dt; 
    console.log(dt);

    /* pop up introduction message */
    /* localstorage used to stop message reappearing everytime the user opens in index.html */    
    if(localStorage.getItem("firstTime")==null){
        alert("Welcome to WeatherNow, live weather data from a weather station in Wexford Ireland. See location map located in footer.");
        localStorage.setItem("firstTime","done");
     }
     
  
}
 
   
