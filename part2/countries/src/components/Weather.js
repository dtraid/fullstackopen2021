import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = ({ city }) => {
  const [currentWeather, setWeather] = useState({});
  const apiKey = process.env.REACT_APP_API_KEY;
  const queryUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

  useEffect(() =>
    axios.get(queryUrl).then((res) => setWeather(res.data.current), [])
  );

  return (
    <div>
      {currentWeather ? (
        <>
          <h2>Weather in {city}</h2>
          <div>
            <strong>temperature:</strong> {currentWeather.temperature} Celsius
          </div>
          {currentWeather.weather_icons.map((icon, index) => (
            <img
              alt={currentWeather.weather_descriptions[index]}
              key={currentWeather.weather_descriptions[index]}
              src={icon}
            />
          ))}
          <div>
            <strong>wind:</strong> {currentWeather.wind_speed} mph direction{' '}
            {currentWeather.wind_dir}
          </div>
        </>
      ) : (
        'Loading weather...'
      )}
    </div>
  );
};

export default Weather;
