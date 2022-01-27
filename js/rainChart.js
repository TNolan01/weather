
/*jshint esversion: 9 */ 
async function rainChart() {
    const response = await fetch('https://api.weather.com/v2/pws/dailysummary/7day?stationId=IENNIS18&format=json&units=m&apiKey=d26d907038e74f7fad907038e7ef7f0e');
    const data = await response.json();
    let dayName=[]; /* new array to hold day name for chart */

    /* convert date and time into a day reference for chart label */
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
    myChart = new Chart (ctx, {
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
                label: 'Daily Precipation Total in mm',
                data: [data.summaries[0].metric.precipTotal,
                      data.summaries[1].metric.precipTotal,
                      data.summaries[2].metric.precipTotal,
                      data.summaries[3].metric.precipTotal,
                      data.summaries[4].metric.precipTotal,
                      data.summaries[5].metric.precipTotal,
                      data.summaries[6].metric.precipTotal
                      ],
                backgroundColor: [
                    'rgba(63, 191, 191, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(120, 192, 192, 1)',
                    'rgba(127, 150, 192, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderColor: [
                    'rgba(63, 191, 191, 1)'
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
                    text: 'Rainfall Totals Over Past 7days in mm',
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
    };
}        





