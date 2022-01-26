
/*jshint esversion: 9 */ 
async function solarChart() {
    const response = await fetch('https://api.weather.com/v2/pws/dailysummary/7day?stationId=IENNIS18&format=json&units=m&apiKey=d26d907038e74f7fad907038e7ef7f0e');
    const data = await response.json();
    console.log(data);    
    /* code to check if the API is online */
    if (data.summaries[6].obsTimeLocal === undefined) {
        alert("Weather data is currently unavailable, updates occour between 00:00 to 00:15 approximately. Please check back in 15 miuntes.")
    } else { 
  

    let dayName=[]; /* new array to hold day name for chart */

    /* convert date and time into a day referencce for chart label */
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      for (let i=0; i<7; i++) {
        let date = data.summaries[i].obsTimeLocal;  
        let today= days[new Date(date).getDay()];
        dayName.push(today); 
      }   
    
    /* code to destory canvas to allow new chart be displayed */
    document.querySelector("#chart_container").innerHTML = '<canvas id="myChart"></canvas>';  

    /* chart creation */
    const ctx = document.getElementById('myChart').getContext('2d');
    ctx.canvas.width = 400;
    ctx.canvas.height = 400;
    const myChart = new Chart(ctx, { 
        
        type: 'line',
        data: {
            labels: [dayName[0], 
                    dayName[1],
                    dayName[2], 
                    dayName[3], 
                    dayName[4], 
                    dayName[5],
                    dayName[6]
                  ],
            datasets: [{
                label: 'Solar radition daily high, watts per metre squared',
                data: [data.summaries[0].solarRadiationHigh,
                      data.summaries[1].solarRadiationHigh,
                      data.summaries[2].solarRadiationHigh,
                      data.summaries[3].solarRadiationHigh,
                      data.summaries[4].solarRadiationHigh,
                      data.summaries[5].solarRadiationHigh,
                      data.summaries[6].solarRadiationHigh
                      ],
                backgroundColor: [
                    'rgba(255, 159, 64, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(100, 100, 255, 1)'
                ],
                borderColor: [
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
                animation: {
                onComplete: function() {
               }}, 
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                    }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Solar Radiation Daily High Over Past 7 Days',
                    font: {
                        size: 16,
                    }
                   
                }
            }
        }
    });
    var image = myChart.toBase64Image();  /* variable for chart image */
    
    /* download function and pop up box */
    document.getElementById('btn-download').onclick = function() {
       
            let confirmAction = confirm("Are you sure you want to download this chart?");
            if (confirmAction) {
                alert("Download successfully executed");
                var a = document.createElement('a');
                a.href = myChart.toBase64Image();
                a.download = 'weather_chart.png';
                a.click();
            } 
            
     } };
}