async function historical() {
    let searchText = document.getElementById('start').value;
      
    const response = await fetch ('https://api.weather.com/v2/pws/history/daily?stationId=IENNIS18&format=json&units=m&date=${start}&apiKey=d26d907038e74f7ad907038e7ef7f0e'); 
    const data = await response.json();
    console.log(data);








}
