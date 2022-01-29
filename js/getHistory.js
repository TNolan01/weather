/*jshint esversion: 9 */
async function getHistory() {
    const response = await fetch('https://api.weather.com/v2/pws/dailysummary/7day?stationId=IENNIS18&format=json&units=m&apiKey=d26d907038e74f7fad907038e7ef7f0e');
    const data = await response.json();
    
    let length = data.summaries.length;
    if (length < 7) {
        alert("Weather data is currently unavailable, please try again in 15 minutes. Weather can be unavailible between 00:00 and 00:15 approximately due to update.");
    } else {

        /* Day 6 variables */
        let day6Date = data.summaries[6].obsTimeLocal.split(' ')[0].trim();
        let day6Tempavg = data.summaries[6].metric.tempAvg;
        let day6Preciptotal = data.summaries[6].metric.precipTotal;
        let day6Windavg = data.summaries[6].metric.windspeedAvg;
        let day6Humavg = data.summaries[6].humidityAvg;

        document.getElementById('day6_date').textContent = day6Date;
        document.getElementById('day6_tempavg').textContent = day6Tempavg;
        document.getElementById('day6_preciptotal').textContent = day6Preciptotal;
        document.getElementById('day6_windavg').textContent = day6Windavg;
        document.getElementById('day6_humavg').textContent = day6Humavg;

        /* Day 5 variables */
        let day5Date = data.summaries[5].obsTimeLocal.split(' ')[0].trim();
        let day5Tempavg = data.summaries[5].metric.tempAvg;
        let day5Preciptotal = data.summaries[5].metric.precipTotal;
        let day5Windavg = data.summaries[5].metric.windspeedAvg;
        let day5Humavg = data.summaries[5].humidityAvg;

        document.getElementById('day5_date').textContent = day5Date;
        document.getElementById('day5_tempavg').textContent = day5Tempavg;
        document.getElementById('day5_preciptotal').textContent = day5Preciptotal;
        document.getElementById('day5_windavg').textContent = day5Windavg;
        document.getElementById('day5_humavg').textContent = day5Humavg;

        /* Day 4 variables */
        let day4Date = data.summaries[4].obsTimeLocal.split(' ')[0].trim();
        let day4Tempavg = data.summaries[4].metric.tempAvg;
        let day4Preciptotal = data.summaries[4].metric.precipTotal;
        let day4Windavg = data.summaries[4].metric.windspeedAvg;
        let day4Humavg = data.summaries[4].humidityAvg;

        document.getElementById('day4_date').textContent = day4Date;
        document.getElementById('day4_tempavg').textContent = day4Tempavg;
        document.getElementById('day4_preciptotal').textContent = day4Preciptotal;
        document.getElementById('day4_windavg').textContent = day4Windavg;
        document.getElementById('day4_humavg').textContent = day4Humavg;

        /* Day 3 variables */
        let day3Date = data.summaries[3].obsTimeLocal.split(' ')[0].trim();
        let day3Tempavg = data.summaries[3].metric.tempAvg;
        let day3Preciptotal = data.summaries[3].metric.precipTotal;
        let day3Windavg = data.summaries[3].metric.windspeedAvg;
        let day3Humavg = data.summaries[3].humidityAvg;

        document.getElementById('day3_date').textContent = day3Date;
        document.getElementById('day3_tempavg').textContent = day3Tempavg;
        document.getElementById('day3_preciptotal').textContent = day3Preciptotal;
        document.getElementById('day3_windavg').textContent = day3Windavg;
        document.getElementById('day3_humavg').textContent = day3Humavg;

        /* Day 2 variables */
        let day2Date = data.summaries[2].obsTimeLocal.split(' ')[0].trim();
        let day2Tempavg = data.summaries[2].metric.tempAvg;
        let day2Preciptotal = data.summaries[2].metric.precipTotal;
        let day2Windavg = data.summaries[2].metric.windspeedAvg;
        let day2Humavg = data.summaries[2].humidityAvg;

        document.getElementById('day2_date').textContent = day2Date;
        document.getElementById('day2_tempavg').textContent = day2Tempavg;
        document.getElementById('day2_preciptotal').textContent = day2Preciptotal;
        document.getElementById('day2_windavg').textContent = day2Windavg;
        document.getElementById('day2_humavg').textContent = day2Humavg;

        /* Day 1 variables */
        let day1Date = data.summaries[1].obsTimeLocal.split(' ')[0].trim();
        let day1Tempavg = data.summaries[1].metric.tempAvg;
        let day1Preciptotal = data.summaries[1].metric.precipTotal;
        let day1Windavg = data.summaries[1].metric.windspeedAvg;
        let day1Humavg = data.summaries[1].humidityAvg;

        document.getElementById('day1_date').textContent = day1Date;
        document.getElementById('day1_tempavg').textContent = day1Tempavg;
        document.getElementById('day1_preciptotal').textContent = day1Preciptotal;
        document.getElementById('day1_windavg').textContent = day1Windavg;
        document.getElementById('day1_humavg').textContent = day1Humavg;

        /* Day 0 variables */
        let day0Date = data.summaries[0].obsTimeLocal.split(' ')[0].trim();
        let day0Tempavg = data.summaries[0].metric.tempAvg;
        let day0Preciptotal = data.summaries[0].metric.precipTotal;
        let day0Windavg = data.summaries[0].metric.windspeedAvg;
        let day0Humavg = data.summaries[0].humidityAvg;

        document.getElementById('day0_date').textContent = day0Date;
        document.getElementById('day0_tempavg').textContent = day0Tempavg;
        document.getElementById('day0_preciptotal').textContent = day0Preciptotal;
        document.getElementById('day0_windavg').textContent = day0Windavg;
        document.getElementById('day0_humavg').textContent = day0Humavg;

        /* Totals */
        /* rain fall total over 7days */
        let rainTotal = (day0Preciptotal + day1Preciptotal + day2Preciptotal + day3Preciptotal + day4Preciptotal + day5Preciptotal + day6Preciptotal);
        rainTotal = rainTotal.toFixed(2);

        /* average temperature over 7days */
        let averageTemp = (day0Tempavg + day1Tempavg + day2Tempavg + day3Tempavg + day4Tempavg + day5Tempavg + day6Tempavg) / 7;
        averageTemp = averageTemp.toFixed(2);

        /* average humidity over 7days */
        let averageHum = (day0Humavg + day1Humavg + day2Humavg + day3Humavg + day4Humavg + day5Humavg + day6Humavg) / 7;
        averageHum = averageHum.toFixed(2);

        document.getElementById('rainTotal').textContent = rainTotal;
        document.getElementById('averageTemp').textContent = averageTemp;
        document.getElementById('averageHum').textContent = averageHum;

    }

}