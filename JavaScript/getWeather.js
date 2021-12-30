async function getWeather() {
    const response = await fetch('https://api.weather.com/v2/pws/observations/current?stationId=IENNIS18&format=json&units=m&apiKey=d26d907038e74f7fad907038e7ef7f0e');
    const data = await response.json();
    console.log(data.observations[0].metric.pressure);      /* current pressure */
    console.log(data.observations[0].metric.windSpeed);     /* current wind speed */
    console.log(data.observations[0].metric.windGust);      /* current highest wind gust */
    console.log(data.observations[0].metric.temp);          /* current temperature */
    console.log(data.observations[0].metric.precipRate);    /* current rate of precipation */
    console.log(data.observations[0].metric.precipTotal);   /* rate of precipation since 00:01 of current day */
    console.log(data.observations[0].uv);                    /* current UV index */
    console.log(data.observations[0].humidity);              /* current humdidty */
    console.log(data.observations[0].winddir);                /* wind direction */
    console.log(data.observations[0].solarRadiation);           /* solar radiation */

    console.log(data.observations[0].lat);                  /* latitude for location of weather station */
    console.log(data.observations[0].lon);                  /* longitude for location of weather station */

    console.log(data); 

  
    var pressure = data.observations[0].metric.pressure;
    var windSpeed = data.observations[0].metric.windSpeed;
    var windGust = data.observations[0].metric.windGust;
    var temp = data.observations[0].metric.temp;
    var precip_rate = data.observations[0].metric.precipRate;
    var precip_total = data.observations[0].metric.precipTotal;
    var uv_index = data.observations[0].uv;
    var humidity = data.observations[0].humidity;
    var windDir = data.observations[0].winddir;
    var deg = data.observations[0].winddir;
    var solar = data.observations[0].solarRadiation;

    directions = ['north', 'northeast', 'east', 'southeast', 'south', 'southwest', 'west', 'northwest'];
    // Split into the 8 directions
    deg = deg * 8 / 360;
    // round to nearest integer.
    deg = Math.round(deg, 0);
    // Ensure it's within 0-7
    deg = (deg + 8) % 8;
    console.log(directions[deg])

    document.getElementById('press').textContent = pressure;
    document.getElementById('windspeed').textContent = windSpeed; 
    document.getElementById('windgust').textContent = windGust;
    document.getElementById('temp').textContent = temp; 
    document.getElementById('precip_rate').textContent = precip_rate; 
    document.getElementById('precip_total').textContent = precip_total;
    document.getElementById('uv').textContent = uv_index;
    document.getElementById('humidity').textContent = humidity;
    document.getElementById('winddir').textContent = windDir;
    document.getElementById('deg').textContent = directions[deg];
    document.getElementById('solar').textContent = solar;

}
