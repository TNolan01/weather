/*jshint esversion: 9 */
async function windChart() {
    const response = await fetch('https://api.weather.com/v2/pws/dailysummary/7day?stationId=IENNIS18&format=json&units=m&apiKey=d26d907038e74f7fad907038e7ef7f0e');
    const data = await response.json();
    let dayName = []; /* new array to hold day name for chart */

    let length = data.summaries.length;
    if (length < 7) {
        alert("Weather data is currently unavailable, please try again in 15 minutes. Weather can be unavailible between 00:00 and 00:15 approximately due to update.");
    } else {

        /* convert date and time into a day reference for chart label */
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        for (let i = 0; i < 7; i++) {
            let date = data.summaries[i].obsTimeLocal;
            let today = days[new Date(date).getDay()];
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
                    onComplete: function () {}
                },
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
                        text: 'Wind Speeds Over Past 7 Days, km/hr',
                        font: {
                            size: 16,
                        }

                    }
                }
            }
        });
        var image = myChart.toBase64Image(); /* variable for chart image */

        /* download function and pop up box */
        document.getElementById('btn-download').onclick = function () {

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
}