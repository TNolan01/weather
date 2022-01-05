async function graphIt() {
    const response = await fetch('https://api.weather.com/v2/pws/dailysummary/7day?stationId=IENNIS18&format=json&units=m&apiKey=d26d907038e74f7fad907038e7ef7f0e');
    const data = await response.json();
    console.log(data);
    var i = 1;
    
    for(var i = 1; i < 6; i++) {
        const tempHigh = data.summaries[i].metric.tempAvg;
        console.log(tempHigh); 
        
        }
}