async function getHistory() {
    const response = await fetch('https://api.weather.com/v2/pws/dailysummary/7day?stationId=IENNIS18&format=json&units=m&apiKey=d26d907038e74f7fad907038e7ef7f0e');
    const data = await response.json();
    console.log(data);
    console.log(data.summaries[5].obsTimeLocal);
    /* Day 5 variables */
    var day5_date = data.summaries[5].obsTimeLocal;
    var day5_tempavg = data.summaries[5].metric.tempAvg;
    var day5_preciptotal = data.summaries[5].metric.precipTotal;
    var day5_windavg = data.summaries[5].metric.windspeedAvg;
    var day5_humavg = data.summaries[5].humidityAvg;

    document.getElementById('day5_date').textContent = day5_date;
    document.getElementById('day5_tempavg').textContent = day5_tempavg; 
    document.getElementById('day5_preciptotal').textContent = day5_preciptotal;
    document.getElementById('day5_windavg').textContent = day5_windavg; 
    document.getElementById('day5_humavg').textContent = day5_humavg; 
    
    /* Day 4 variables */
    var day4_date = data.summaries[4].obsTimeLocal;
    var day4_tempavg = data.summaries[4].metric.tempAvg;
    var day4_preciptotal = data.summaries[4].metric.precipTotal;
    var day4_windavg = data.summaries[4].metric.windspeedAvg;
    var day4_humavg = data.summaries[4].humidityAvg;
 
    /* Day 3 variables */
    var day3_date = data.summaries[3].obsTimeLocal;
    var day3_tempavg = data.summaries[3].metric.tempAvg;
    var day3_preciptotal = data.summaries[3].metric.precipTotal;
    var day3_windavg = data.summaries[3].metric.windspeedAvg;
    var day3_humavg = data.summaries[3].humidityAvg;

    /* Day 2 variables */
    var day2_date = data.summaries[2].obsTimeLocal;
    var day2_tempavg = data.summaries[2].metric.tempAvg;
    var day2_preciptotal = data.summaries[2].metric.precipTotal;
    var day2_windavg = data.summaries[2].metric.windspeedAvg;
    var day2_humavg = data.summaries[2].humidityAvg;

    /* Day 1 variables */
    var day1_date = data.summaries[1].obsTimeLocal;
    var day1_tempavg = data.summaries[1].metric.tempAvg;
    var day1_preciptotal = data.summaries[1].metric.precipTotal;
    var day1_windavg = data.summaries[1].metric.windspeedAvg;
    var day1_humavg = data.summaries[1].humidityAvg;



}/*getHistory(); */
  
