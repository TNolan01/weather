
/*jshint esversion: 9 */ 
async function getForecast() {
    
    const response = await fetch('https://api.weather.com/v3/wx/forecast/daily/5day?geocode=52.525993,-6.565699&format=json&units=m&language=en-US&apiKey=d26d907038e74f7fad907038e7ef7f0e');
    const data = await response.json();
  
    let dayPart1 = data.daypart[0].daypartName[1];
    let dayPart2 = data.daypart[0].daypartName[2];
    let dayPart3 = data.daypart[0].daypartName[3];
    let dayPart4 = data.daypart[0].daypartName[4];

    let dayPartFC1 = data.daypart[0].narrative[1];
    let dayPartFC2 = data.daypart[0].narrative[2];
    let dayPartFC3 = data.daypart[0].narrative[3];
    let dayPartFC4 = data.daypart[0].narrative[4];
    
    document.getElementById('daypart1').textContent = dayPart1;
    document.getElementById('daypartFC1').textContent = dayPartFC1;
    document.getElementById('daypart2').textContent = dayPart2;
    document.getElementById('daypartFC2').textContent = dayPartFC2;
    document.getElementById('daypart3').textContent = dayPart3;
    document.getElementById('daypartFC3').textContent = dayPartFC3;
    document.getElementById('daypart4').textContent = dayPart4;
    document.getElementById('daypartFC4').textContent = dayPartFC4;
}
