async function compass() { 
    const response = await fetch('https://api.weather.com/v2/pws/observations/current?stationId=IENNIS18&format=json&units=m&apiKey=d26d907038e74f7fad907038e7ef7f0e');
    const data = await response.json();
    var deg = data.observations[0].winddir;
    console.log(deg)
    directions = ['north', 'northeast', 'east', 'southeast', 'south', 'southwest', 'west', 'northwest'];
// Split into the 8 directions
    deg = deg * 8 / 360;
    // round to nearest integer.
    deg = Math.round(deg, 0);
    // Ensure it's within 0-7
    deg = (deg + 8) % 8;
    console.log(directions[deg])

    document.getElementById('deg').textContent = directions[deg];
}
    

