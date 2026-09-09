// Simple weather demo

document.addEventListener("DOMContentLoaded", function(){

let weather = document.getElementById("weather");

if(weather){
weather.innerHTML =
"Temperature: 29°C <br> Rain Chance: 30% <br> Humidity: 65%";
}

});