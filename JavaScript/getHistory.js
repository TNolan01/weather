async function getHistory() {
    const response = await fetch('https://api.weather.com/v2/pws/dailysummary/7day?stationId=IENNIS18&format=json&units=m&apiKey=d26d907038e74f7fad907038e7ef7f0e');
    const data = await response.json();
    console.log(data);
    console.log(data.summaries[5].obsTimeLocal);
    /* Day 5 variables */
    var day5_date = data.summaries[5].obsTimeLocal;
    var day5_tempAvg = data.summaries[5].metric.tempAvg;
    var day5_precipTotal = data.summaries[5].metric.precipTotal;
    var day5_windAvg = data.summaries[5].metric.windspeedAvg;
    var day5_humAvg = data.summaries[5].humidityAvg;


     /* Day 4 variables */
    var day5_date = data.summaries[4].obsTimeLocal;
    var day5_tempAvg = data.summaries[4].metric.tempAvg;
    var day5_precipTotal = data.summaries[4].metric.precipTotal;
    var day5_windAvg = data.summaries[4].metric.windspeedAvg;
    var day5_humAvg = data.summaries[4].humidityAvg;

    

}getHistory();
  
