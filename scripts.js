/*
   VARIABLER AV API-NYCKLAR
*/

const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=35f6f4ecefca8bd4b39c17f88cdad84e';
const iconUrl = 'https://openweathermap.org/img/w/';


/* Async funktion inmehållande fetch api */

async function getWeather() {
 const response = await fetch(apiUrl);
 const data = await response.json();
 
 /* Selekterar den data av JSON-responsen som kommer att användas samt tilldelar variabler värden från JSON-objektet */
 const { main, weather, name } = data;
 const desc = weather[0].description;
 const temp = main.temp.toFixed(1);
 const city = name;
 const icon = weather[0].icon;

/* Tilldelar variabler till de olika HTML-elementen */

 document.getElementById('desc').textContent = desc;
 document.getElementById('temp').textContent = temp + " °C";
 document.getElementById('city').textContent = city;
 document.getElementById('img').src = iconUrl + icon + ".png";

  
}

getWeather()