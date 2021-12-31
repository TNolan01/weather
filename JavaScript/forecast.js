async function getForecast() {
    const response = await fetch('https://api.weather.com/v3/wx/forecast/daily/5day?geocode=52.525993,-6.565699&format=json&units=m&language=en-US&apiKey=d26d907038e74f7fad907038e7ef7f0e');
    const data = await response.json();
    console.log(data);
}
