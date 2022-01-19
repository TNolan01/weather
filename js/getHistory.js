async function getHistory() {
    const response = await fetch('https://api.weather.com/v2/pws/dailysummary/7day?stationId=IENNIS18&format=json&units=m&apiKey=d26d907038e74f7fad907038e7ef7f0e');
    const data = await response.json();
    console.log(data);
    

    /* Day 6 variables */
    let day6_date = data.summaries[6].obsTimeLocal.split(' ')[0].trim();
    let day6_tempavg = data.summaries[6].metric.tempAvg;
    let day6_preciptotal = data.summaries[6].metric.precipTotal;
    let day6_windavg = data.summaries[6].metric.windspeedAvg;
    let day6_humavg = data.summaries[6].humidityAvg;

    document.getElementById('day6_date').textContent = day6_date;
    document.getElementById('day6_tempavg').textContent = day6_tempavg; 
    document.getElementById('day6_preciptotal').textContent = day6_preciptotal;
    document.getElementById('day6_windavg').textContent = day6_windavg; 
    document.getElementById('day6_humavg').textContent = day6_humavg; 

    /* Day 5 variables */
    let day5_date = data.summaries[5].obsTimeLocal.split(' ')[0].trim();
    let day5_tempavg = data.summaries[5].metric.tempAvg;
    let day5_preciptotal = data.summaries[5].metric.precipTotal;
    let day5_windavg = data.summaries[5].metric.windspeedAvg;
    let day5_humavg = data.summaries[5].humidityAvg;

    document.getElementById('day5_date').textContent = day5_date;
    document.getElementById('day5_tempavg').textContent = day5_tempavg; 
    document.getElementById('day5_preciptotal').textContent = day5_preciptotal;
    document.getElementById('day5_windavg').textContent = day5_windavg; 
    document.getElementById('day5_humavg').textContent = day5_humavg; 
    
    /* Day 4 variables */
    let day4_date = data.summaries[4].obsTimeLocal.split(' ')[0].trim();
    let day4_tempavg = data.summaries[4].metric.tempAvg;
    let day4_preciptotal = data.summaries[4].metric.precipTotal;
    let day4_windavg = data.summaries[4].metric.windspeedAvg;
    let day4_humavg = data.summaries[4].humidityAvg;

    document.getElementById('day4_date').textContent = day4_date;
    document.getElementById('day4_tempavg').textContent = day4_tempavg; 
    document.getElementById('day4_preciptotal').textContent = day4_preciptotal;
    document.getElementById('day4_windavg').textContent = day4_windavg; 
    document.getElementById('day4_humavg').textContent = day4_humavg; 
 
    /* Day 3 variables */
    let day3_date = data.summaries[3].obsTimeLocal.split(' ')[0].trim();
    let day3_tempavg = data.summaries[3].metric.tempAvg;
    let day3_preciptotal = data.summaries[3].metric.precipTotal;
    let day3_windavg = data.summaries[3].metric.windspeedAvg;
    let day3_humavg = data.summaries[3].humidityAvg;

    document.getElementById('day3_date').textContent = day3_date;
    document.getElementById('day3_tempavg').textContent = day3_tempavg; 
    document.getElementById('day3_preciptotal').textContent = day3_preciptotal;
    document.getElementById('day3_windavg').textContent = day3_windavg; 
    document.getElementById('day3_humavg').textContent = day3_humavg;

    /* Day 2 variables */
    let day2_date = data.summaries[2].obsTimeLocal.split(' ')[0].trim();
    let day2_tempavg = data.summaries[2].metric.tempAvg;
    let day2_preciptotal = data.summaries[2].metric.precipTotal;
    let day2_windavg = data.summaries[2].metric.windspeedAvg;
    let day2_humavg = data.summaries[2].humidityAvg;

    document.getElementById('day2_date').textContent = day2_date;
    document.getElementById('day2_tempavg').textContent = day2_tempavg; 
    document.getElementById('day2_preciptotal').textContent = day2_preciptotal;
    document.getElementById('day2_windavg').textContent = day2_windavg; 
    document.getElementById('day2_humavg').textContent = day2_humavg;

    /* Day 1 variables */
    let day1_date = data.summaries[1].obsTimeLocal.split(' ')[0].trim();
    let day1_tempavg = data.summaries[1].metric.tempAvg;
    let day1_preciptotal = data.summaries[1].metric.precipTotal;
    let day1_windavg = data.summaries[1].metric.windspeedAvg;
    let day1_humavg = data.summaries[1].humidityAvg;

    document.getElementById('day1_date').textContent = day1_date;
    document.getElementById('day1_tempavg').textContent = day1_tempavg; 
    document.getElementById('day1_preciptotal').textContent = day1_preciptotal;
    document.getElementById('day1_windavg').textContent = day1_windavg; 
    document.getElementById('day1_humavg').textContent = day1_humavg;

    /* Day 0 variables */
    let day0_date = data.summaries[0].obsTimeLocal.split(' ')[0].trim();
    let day0_tempavg = data.summaries[0].metric.tempAvg;
    let day0_preciptotal = data.summaries[0].metric.precipTotal;
    let day0_windavg = data.summaries[0].metric.windspeedAvg;
    let day0_humavg = data.summaries[0].humidityAvg;

    document.getElementById('day0_date').textContent = day0_date;
    document.getElementById('day0_tempavg').textContent = day0_tempavg; 
    document.getElementById('day0_preciptotal').textContent = day0_preciptotal;
    document.getElementById('day0_windavg').textContent = day0_windavg; 
    document.getElementById('day0_humavg').textContent = day0_humavg;

    /* Totals */
    /* rain fall total over 7days */
    let rainTotal = (day0_preciptotal + day1_preciptotal + day2_preciptotal + day3_preciptotal + day4_preciptotal + day5_preciptotal + day6_preciptotal);
    rainTotal = rainTotal.toFixed(2); 
    
    /* average temperature over 7days */
    let averageTemp = (day0_tempavg + day1_tempavg + day2_tempavg + day3_tempavg + day4_tempavg + day5_tempavg + day6_tempavg )/7;
    averageTemp = averageTemp.toFixed(2);

    /* average humidity over 7days */
    let averageHum = (day0_humavg + day1_humavg + day2_humavg + day3_humavg + day4_humavg + day5_humavg + day6_humavg)/7;
    averageHum = averageHum.toFixed(2);

    document.getElementById('rainTotal').textContent = rainTotal;
    document.getElementById('averageTemp').textContent = averageTemp;
    document.getElementById('averageHum').textContent = averageHum;
   
}
    

