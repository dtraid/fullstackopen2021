import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = ({ city }) => {
  const [weather, setWeather] = useState();
  const apiKey = process.env.REACT_APP_API_KEY;
  const queryUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

  useEffect(() => axios.get(queryUrl).then((res) => setWeather(res.data), []));

  if (!weather) return <div>Loading weather...</div>;
  if (!weather.success) {
    return <div>Error fetching weather: {weather.error.info}</div>;
  }

  return (
    <div>
      <h2>Weather in {city}</h2>
      <div>
        <strong>temperature:</strong> {weather.temperature} Celsius
      </div>
      {weather.weather_icons.map((icon, index) => (
        <img
          alt={weather.weather_descriptions[index]}
          key={weather.weather_descriptions[index]}
          src={icon}
        />
      ))}
      <div>
        <strong>wind:</strong> {weather.wind_speed} mph direction{' '}
        {weather.wind_dir}
      </div>
    </div>
  );
};

export default Weather;
