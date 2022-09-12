import React, { useState , useEffect} from 'react'

const WeatherCard = ({ tempInfo }) => {

    const [weatherState, setWeatherState] = useState("");
    const {
        temp,
        humidity,
        pressure,
        speed,
        weathermood,
        name,
        country,
        sunset,
      } = tempInfo;

      useEffect(() => {
        
        if(weathermood) {
          switch (weathermood) {
            case "Clouds":
              setWeatherState("wi-day-cloudy");
              break;

              case "Rain":
              setWeatherState("wi-day-rain");
              break;

              case "Haze":
              setWeatherState("wi-day-fog");
              break;

              case "Clear":
              setWeatherState("wi-day-sunny");
              break;
            default:
              setWeatherState("wi-day-sunny");
              break;
          }
        }
      }, [weathermood]);
      

      //converting time into sec
      let sec = sunset;
      let date = new Date(sec*1000);
      let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
        <article className='widget'>
        <div className='weatherIcon'>
          <i className={`wi ${weatherState}`}></i>
        </div>

        <div className='weatherInfo'>
          <div className='temperature'>
            <span>&nbsp;{temp}℃</span>
          </div>

          <div className='description'>
            <div className='weatherCondition'>{weathermood}</div>
            <div className='place'> {name}, {country}</div>
          </div>
        </div>
        <div className='date'> {new Date().toLocaleString()} </div>

        {/* OUR four column section */}
        <div className='extra-temp'>
          <div className='temp-info-minmax' >
            <div className='two-sided-section'>
              <p> 
                <i className={'wi wi-sunset'}></i>
              </p>
              <p className='extra-info-leftsided'>
                    {timeStr} <br />
                    Sunset
                  </p>
            </div>
            <div className='two-sided-section'>
              <p> 
                <i className={'wi wi-rain'}></i>
              </p>
              <p className='extra-info-leftsided'>
                    {humidity} <br />
                    Humidity
                  </p>
            </div>
          </div>

          <div className='weather-extra-info'>
          <div className='two-sided-section'>
              <p> 
                <i className={'wi wi-rain'}></i>
              </p>
              <p className='extra-info-leftsided'>
                    {pressure} <br />
                    Pressure
                  </p>
            </div>

            <div className='two-sided-section'>
              <p> 
                <i className={'wi wi-strong-wind'}></i>
              </p>
              <p className='extra-info-leftsided'>
                    {speed} <br />
                    Speed
                  </p>
            </div>
          </div>
        </div>
      </article>
    </>
  )
};

export default WeatherCard;