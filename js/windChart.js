async function windChart() {
    const response = await fetch('https://api.weather.com/v2/pws/dailysummary/7day?stationId=IENNIS18&format=json&units=m&apiKey=d26d907038e74f7fad907038e7ef7f0e');
    const data = await response.json();
    console.log(data);
    let day_name=[]; /* new array to hold day name for chart */

    /* convert date and time into a day referencce for chart label */
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      for (i=0; i<7; i++) {
        console.log(data.summaries[i].obsTimeLocal);
        let date = data.summaries[i].obsTimeLocal;  
        let today= days[new Date(date).getDay()];
        console.log(today);
        day_name.push(today); 
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
            labels: [day_name[0], 
                    day_name[1],
                    day_name[2], 
                    day_name[3], 
                    day_name[4], 
                    day_name[5],
                    day_name[6]
                  ],
            datasets: [{
                label: 'Wind speed daily high, km/hr',
                data: [data.summaries[0].metric.windspeedHigh,
                      data.summaries[1].metric.windspeedHigh,
                      data.summaries[2].metric.windspeedHigh,
                      data.summaries[3].metric.windspeedHigh,
                      data.summaries[4].metric.windspeedHigh,
                      data.summaries[5].metric.windspeedHigh,
                      data.summaries[6].metric.windspeedHigh
                      ],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)'                    
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 2
                },
                {
                label: 'Wind speed daily average, km/hr',
                    data: [data.summaries[0].metric.windspeedAvg,
                    data.summaries[1].metric.windspeedAvg,
                    data.summaries[2].metric.windspeedAvg,
                    data.summaries[3].metric.windspeedAvg,
                    data.summaries[4].metric.windspeedAvg,
                    data.summaries[5].metric.windspeedAvg,
                    data.summaries[6].metric.windspeedAvg
                ],
                backgroundColor: [
                'rgba(63, 191, 191, 1)'                    
                ],
                borderColor: [
                'rgba(63, 191, 191, 1)'
                ],
                borderWidth: 2
                },
                {
                    label: 'Wind speed daily low, km/hr',
                        data: [data.summaries[0].metric.windspeedAvg,
                        data.summaries[1].metric.windspeedLow,
                        data.summaries[2].metric.windspeedLow,
                        data.summaries[3].metric.windspeedLow,
                        data.summaries[4].metric.windspeedLow,
                        data.summaries[5].metric.windspeedLow,
                        data.summaries[6].metric.windspeedLow
                    ],
                    backgroundColor: [
                    'rgba(63, 191, 63, 1)'                    
                    ],
                    borderColor: [
                    'rgba(63, 191, 63, 1)'
                    ],
                    borderWidth: 2
                    }
        ]


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
                    text: 'Wind Speeds Over Past 7 Days, km/hr'
                    ,
                    font: {
                        size: 16,
                    }
                   
                }
            }
        }
    });
    var image = myChart.toBase64Image();  /* variable for chart image */
    
    document.getElementById('btn-download').onclick = function() {
       
            let confirmAction = confirm("Are you sure you want to download this chart?");
            if (confirmAction) {
                alert("Download successfully executed");
                var a = document.createElement('a');
                a.href = myChart.toBase64Image();
                a.download = 'weather_chart.png';
                a.click();
            } else {
              alert("Download cancelled");
                 
            }
    }    
}