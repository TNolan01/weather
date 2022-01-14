async function rainChart() {
    const response = await fetch('https://api.weather.com/v2/pws/dailysummary/7day?stationId=IENNIS18&format=json&units=m&apiKey=d26d907038e74f7fad907038e7ef7f0e');
    const data = await response.json();
    console.log(data);
    let day_name=[]; /* new array to hold day name for chart */
    /* convert date and time into a day referecnce for chart label */
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      for (i=0; i<7; i++) {
        console.log(data.summaries[i].obsTimeLocal);
        let date = data.summaries[i].obsTimeLocal;  
        let today= days[new Date(date).getDay()];
        console.log(today);
        day_name.push(today); 
      }
    const ctx = document.getElementById('myChart').getContext('2d');
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
                label: 'Rainfall Total',
                data: [data.summaries[0].metric.precipTotal,
                      data.summaries[1].metric.precipTotal,
                      data.summaries[2].metric.precipTotal,
                      data.summaries[3].metric.precipTotal,
                      data.summaries[4].metric.precipTotal,
                      data.summaries[5].metric.precipTotal,
                      data.summaries[6].metric.precipTotal
                      ],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
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
                    text: 'Rainfall totals over past 7days in mm'
                    ,
                    font: {
                        size: 16,
                    }
                   
                }
            }
        }
    });

  }



