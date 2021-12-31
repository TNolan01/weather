async function rainChart() {
    const response = await fetch('https://api.weather.com/v2/pws/dailysummary/7day?stationId=IENNIS18&format=json&units=m&apiKey=d26d907038e74f7fad907038e7ef7f0e');
    const data = await response.json();
    console.log(data);

    console.log(data.summaries[6].metric.precipTotal);
    summaries[0].obsTimeLocal
    summaries[0].metric
    summaries[0].metric.precipTotal
  
    var pressure = data.observations[0].metric.pressure;

    summaries[1].obsTimeUtc
    
    var res = "test: example1".split(':')[1].trim();

    console.log(res);



}