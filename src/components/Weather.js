import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Weatherpic from "./assets/weatherpic.jpg";
// const lat = "39.9679389";
// const long = "-86.12427819999999";

const key = "d7ae70b412dfeecd253828278594b5e3";

const Text = styled.div`
  position: relative;
  left: 65vw;
  font-size: 30px;
`;
const Header = styled.h2`
  font-size: 40px;  
`;

const Bkgrnd = styled.div`
  background-image: url(${Weatherpic});
  height: 800px;
  width: 100vw;
  background-repeat: no-repeat;
`;

const Littlepic = styled.img`
    margin-top: 175px;
    `;

const Weather = () => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [icon, setIcon] = useState("");
  const [description, setDescription] = useState("");
  const [temperature, setTemperature] = useState("");
  const [degrees, setDegrees] = useState("");
  const [button, setButton] = useState("");
  const [wind, setWind] = useState("");
  const [clouds, setClouds] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=imperial`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.cod === 200) {
            setCity(data.name);
            setCountry(data.sys.country);
            setIcon(data.weather[0].icon);
            setDescription(data.weather[0].description);
            setTemperature(data.main.temp);
            setDegrees("°F");
            setButton("°C / °F");
            setWind(data.wind.speed);
            setClouds(data.clouds.all);
          }
        });
    });
  }, []);
  const toFahrenheit = () => {
    let result = temperature * 1.8 + 32;
    return result.toFixed(2);
  };

  const toCelcius = () => {
    let result = (temperature - 32) * 0.5556;
    return result.toFixed(2);
  };

  const handleClick = () => {
    setButton("°F/°C");
    if (degrees === "°C") {
      let farenheit = toFahrenheit();
      setTemperature(farenheit);
      setDegrees("°F");
    } else if (degrees === "°F") {
      let celcius = toCelcius();
      setTemperature(celcius);
      setDegrees("°C");
      setButton("°C/°F");
    }
  };

  return (
    <div>
      <Bkgrnd className="row mb-3">
        <Text className="text-justify">
          <Littlepic
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="weather img"
          />
          <Header>
            {city}, {country}
          </Header>
          <br />
          <p>
            <b>Current condition: </b> '{description}'
          </p>
          <p>
            <b> Temperature: </b>
            {temperature} {degrees}
          </p>
          <p>
            <b> Wind Speed: </b>
            {wind}
          </p>
          <p>
            <b> Clouds: </b>
            {clouds}
          </p>
          <button className="btn btn-primary mb-2" onClick={handleClick}>
            {button}
          </button>
        </Text>
      </Bkgrnd>
    </div>
  );
};
export default Weather;
