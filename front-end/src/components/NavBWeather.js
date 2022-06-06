import { useState, useEffect } from  "react";
import axios from "axios";


export default function NavBWeather(){
    const [weather, setWeather] = useState([]);
    console.log(weather.condition, weather.temp_f)
    useEffect(() => {
        axios("http://api.weatherapi.com/v1/current.json?key=6a073340fe75460b9b3182849222505&q=auto:ip&condition:icon&temp_f")
        .then(res => {
          setWeather(res.data.current);
        })  
        
    }, []);

return(
  <div >{weather.temp_f}</div>)
}
