async function getWeather() {
    const response = await fetch('https://api.weather.com/v2/pws/observations/current?stationId=IENNIS18&format=json&units=m&apiKey=d26d907038e74f7fad907038e7ef7f0e');
    const data = await response.json();
    console.log(data.observations[0].metric.pressure);      /*current pressure*/
    console.log(data.observations[0].metric.windSpeed);     /*current wind speed*/
    console.log(data.observations[0].metric.windGust);      /*current highest wind gust*/
    console.log(data.observations[0].metric.temp);          /*current temperature*/
    console.log(data.observations[0].metric.precipRate);    /*current rate of precipation*/
    console.log(data.observations[0].metric.precipTotal);   /*rate of precipation since 00:01 of current day*/
    console.log(data.observations[0].uv)                    /*current UV index*/
    

    console.log(data.observations[0].lat);                  /*latitude for location of weather station*/
    console.log(data.observations[0].lon);                  /*longitude for location of weather station*/

    console.log(data); 

    var pressure = data.observations[0].metric.pressure;
    var windSpeed = data.observations[0].metric.windSpeed;
    var temp = data.observations[0].metric.temp;
    var precip_rate = data.observations[0].metric.precipRate;
    var precip_total = data.observations[0].metric.precipTotal;
    var uv_index = data.observations[0].uv;


    document.getElementById('press').textContent = pressure;
    /* document.getElementById('windspeed').textContent = windSpeed; */
    /* document.getElementById('temp').textContent = temp; */
    /* document.getElementById('precip_rate').textContent = precip_rate; */
   /*  document.getElementById('precip_total').textContent = precip_total; */
    
    if (windSpeed === 0){
        windSpeed = "0";
        }
        else {
            document.getElementById('windspeed').textContent = windSpeed;
        }
    
    if (temp === '0'){
        temp = "0";
        }
        else {
            document.getElementById('temp').textContent = temp;
        }
    


    if (precip_rate === '0'){
        precip_rate = "0";
        }
        else {
            document.getElementById('precip_rate').textContent = precip_rate;
        }
    
        
    if (precip_total === '0'){
        precip_total = "0";
        }
        else {
            document.getElementById('precip_total').textContent = precip_total;
        }

    if (uv_index === '0'){
        uv_index = "0";
        }
        else {
            document.getElementById('uv_index').textContent = uv_index;
        }
}
