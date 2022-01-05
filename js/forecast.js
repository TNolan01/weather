async function getForecast() {
    const response = await fetch('https://api.weather.com/v3/wx/forecast/daily/5day?geocode=52.525993,-6.565699&format=json&units=m&language=en-US&apiKey=d26d907038e74f7fad907038e7ef7f0e');
    const data = await response.json();
    console.log(data);
    let daypart1 = data.daypart[0].daypartName[1];
    let daypart2 = data.daypart[0].daypartName[2];
    let daypart3 = data.daypart[0].daypartName[3];
    let daypart4 = data.daypart[0].daypartName[4];

    let daypartFC1 = data.daypart[0].narrative[1];
    let daypartFC2 = data.daypart[0].narrative[2];
    let daypartFC3 = data.daypart[0].narrative[3];
    let daypartFC4 = data.daypart[0].narrative[4];
    
    document.getElementById('daypart1').textContent = daypart1;
    document.getElementById('daypartFC1').textContent = daypartFC1;
    document.getElementById('daypart2').textContent = daypart2;
    document.getElementById('daypartFC2').textContent = daypartFC2;
    document.getElementById('daypart3').textContent = daypart3;
    document.getElementById('daypartFC3').textContent = daypartFC3;
    document.getElementById('daypart4').textContent = daypart4;
    document.getElementById('daypartFC4').textContent = daypartFC4;

}
