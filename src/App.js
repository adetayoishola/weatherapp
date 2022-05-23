import React, { useState } from "react";
import axios from "axios";
import "./index.css";
const API_KEY = process.env.REACT_APP_API_KEY;
function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
 const searchLocation = (event)=>{
    if(event.key === "Enter") {
        axios.get(url).then((res) =>{
          setData(res.data);
        })
      setLocation("")
      } 
    }
    
        
  return (
    <div className="app">
    <div className="search">
        <input placeholder="Enter Location" 
               type="text" 
              value={location}
              onChange={(event)=> setLocation(event.target.value)}
              onKeyPress={searchLocation}
            />
    </div>         
        <div className="container">
              <div className="top">
                <div className="location">
                    <p>{data.name}</p>
                </div>
                <div className="temperature">
                    {data.main ? <h1>{data.main.temp.toFixed()}&#8451;</h1>:null}
                </div>
                <div className="description">
                    <p>{data.weather ? <h1>{data.weather[0].main}</h1>: null}</p>
                </div>
              </div>
              {data.name !== undefined &&  
              <div className="bottom">
                  <div className="feels">
                      {/* <p>61&#8451;</p> */}
                      {data.main ? <p>{data.main.feels_like.toFixed()}&#8451;</p> : null}
                      <p>feels Like</p>

                  </div>
                  <div className="humidity">
                      {data.main ? <p>{data.main.humidity.toFixed()} %</p> : null}
                      <p>Humidity</p>
                      
                  </div>
                  <div className="wind">
                       {data.wind ? <p>{data.wind.speed.toFixed()} MPH</p> : null}
                       <p>Wind Speed</p>
                  </div>
              </div>
              } 
        </div> 
    </div> 
  )
}
// To roundoff numbers use toFixed()
export default App;
