import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import "./style.css"

function Weather() {
  const [weather, setWeather] = useState('');
  const [city, setCity] = useState('');
  const apiKey = "b4af6529c0a0ab29cf61630dc5a920bf";

  const apiCall = async (e) => {
    e.preventDefault()
    const loc = e.target.elements.loc.value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`;
    const req = axios.get(url);
    const res = await req;
    setWeather({
      descp: res.data.weather[0].description,
      temp: res.data.main.temp,
      city: res.data.name,
      humidity: res.data.main.humidity,
      press: res.data.main.pressure,
      wind: res.data.wind.speed
    })

    setCity(res.data.name)

  }

  //Converting K to C
  let k = weather.temp;
  let C = k - 273.15

  const Weath = () => {
    return <div>
      <div className="winfo">
        Anlık Hava Durumu Bilgileri {city}
        <hr></hr>
      </div>
      <div className="Weath">
        <div className="welement">
          Weather : {weather.descp}
        </div>
        <div className="welement">
          Temperature : {C.toFixed(2)} &#8451;
        </div>
        <div className="welement">
          Humidity :{weather.humidity} %
        </div>
        <div className="welement">
          Pressure :  {weather.press} mb
        </div>
        <div className="welement">
          Wind :  {weather.wind} km
        </div>
      </div>
    </div>
  }
  return (<>
    <div className="weathhead">Hava Durumu</div>
    <div className="mainweather">
      <div className="weather">
        <form onSubmit={apiCall} className="form">
          <input type="text"
            placeholder="Şehir ismi girin"
            name="loc" />
          <button className="bttn">Şehir Ara</button>
        </form>

        {weather && <Weath />}
      </div>
    </div>
  </>
  )
}

export default Weather