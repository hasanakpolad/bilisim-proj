import React from 'react'

function GetWeather() {
  var url = "https://api.openweathermap.org/data/2.5/weather?appid={openweathermap_apikey}&q=chicago";

  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);

  xhr.setRequestHeader("Accept", "application/json");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
    }
  };

  xhr.send();
}
function Weather() {
  return (
    <div>
      {{GetWeather}}
      Weather
    </div>
  )
}

export default Weather