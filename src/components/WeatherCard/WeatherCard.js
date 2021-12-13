import {useSelector} from "react-redux";
import React from "react";

export const WeatherCard = () => {
    const weatherData = useSelector((state) => state.forecast);
    console.log(weatherData.status);


    if (weatherData.status === 'success') {
        console.log(weatherData.locationForecast.current.weather[0].icon);
        return (<div>
            <span>Температура:{weatherData.locationForecast.current.temp}°С</span>
            <img
                src={`http://openweathermap.org/img/wn/${weatherData.locationForecast.current.weather[0].icon}@2x.png`}
                alt="weatherImage"
            />

        </div>)
    } else {
        return null
    }
}
