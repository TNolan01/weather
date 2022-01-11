async function graphIt() {
  const response = await fetch('https://api.weather.com/v2/pws/dailysummary/7day?stationId=IENNIS18&format=json&units=m&apiKey=d26d907038e74f7fad907038e7ef7f0e');
  const data = await response.json();
  console.log(data);
 
  /* Calculate the highest daily average temperature over the past 7 days */
  let largest = 0;
  
      for (i=0; i<6; i++) {
      console.log(data.summaries[i].metric.tempAvg);
        if (data.summaries[i].metric.tempAvg > largest) {
          largest=data.summaries[i].metric.tempAvg;
      }
  }
  console.log(largest);

}

function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}



/* const summaries[0].metric.precipTotal */