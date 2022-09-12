import React, { useEffect, useState } from 'react'
import WeatherCard from './weather/WeatherCard';
import "./style.css";
const Temp = () => {

  const [searchValue, setsearchValue] = useState("kolkata");
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid={apicode}`; //create your own api from openweathermap.org

      let res = await fetch(url); //fetch the raw data value from url
      let data = await res.json(); //convert raw data into json file


      //object destructring from api
      const {temp, humidity, pressure} = data.main;
      const {speed} = data.wind;
      const {main: weathermood} = data.weather[0];
      const {name} = data;
      const {country, sunset} = data.sys; 

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        speed,
        weathermood,
        name,
        country,
        sunset,
      };

      setTempInfo(myNewWeatherInfo);
    } catch(error) {
      console.log(error);
    }
  };

  useEffect(() => { //whenever the page refreshes for first time thi function will be called
    getWeatherInfo();
  }, []);

  return (
    <>
      <div className='wrap'>
        <div className='search'>
          <input type="search" 
            placeholder='search...'
            autoFocus
            id="search"
            className='searchTerm'
            value={searchValue} // the input value in search bar 
            onChange={(e) => setsearchValue(e.target.value)} // storing the search value in the state when search buttn is clicked
          />

          <button className='searchButton' type='button' onClick={getWeatherInfo}>
            Search</button>
        </div>
      </div>

      {/* Our waether temp card */}
      <WeatherCard tempInfo = {tempInfo}/>
    </>
  );
};

export default Temp;