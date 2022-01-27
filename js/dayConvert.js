function dayConvert() {
let dayName=[]; /* new array to hold day name for chart */

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      for (let i=0; i<7; i++) {
        let date = data.summaries[i].obsTimeLocal;  
        let today= days[new Date(date).getDay()];
        dayName.push(today); 
      }   

} export {dayConvert};


