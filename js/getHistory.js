async function getHistory() {
    const response = await fetch('https://api.weather.com/v2/pws/dailysummary/7day?stationId=IENNIS18&format=json&units=m&apiKey=d26d907038e74f7fad907038e7ef7f0e');
    const data = await response.json();
    console.log(data);
    console.log(data.summaries[5].obsTimeLocal);
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

    /* Totals */
    /* rain fall total over 5days */
    let rainTotal = (day1_preciptotal + day2_preciptotal + day3_preciptotal + day4_preciptotal + day5_preciptotal);
    rainTotal = rainTotal.toFixed(2); 
    console.log(rainTotal);
    /* average temperature over 5days */
    let averageTemp = (day1_tempavg + day2_tempavg + day3_tempavg + day4_tempavg + day5_tempavg)/5;
    console.log(averageTemp);
    /* average humidity over 5days */
    let averageHum = (day1_humavg + day2_humavg + day3_humavg + day4_humavg + day5_humavg)/5;
    console.log(averageHum);

    document.getElementById('rainTotal').textContent = rainTotal;
    document.getElementById('averageTemp').textContent = averageTemp;
    document.getElementById('averageHum').textContent = averageHum;
   
}
    

