import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/logo/eMoodji_logo_white.png";
// import weatherIcons from "../data/weatherIcons.json";
import { useState, useEffect } from  "react";
import NavBWeather from "./NavBWeather.js";
import axios from "axios";

export default function NavBar () {
    let navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.clear();
        console.log(localStorage.getItem("userid"));
        navigate('/');
        window.location.reload();
    };

    const [weather, setWeather] = useState(null);
    console.log(weather);
    useEffect(() => {
        axios("http://api.weatherapi.com/v1/current.json?key=6a073340fe75460b9b3182849222505&q=auto:ip&condition:icon&temp_f")
        .then(res => {
          setWeather(res.data);
       
        })  
        
    }, []);

console.log(weather?.current.condition.icon)
    return (
        <nav className="NavBar">
            <Link to="/" style={{'text-decoration': 'none'}} ><img id="logo" src={logo} alt="Logo" style={{'width': "225px"}}/></Link>
            <div ><img id='weather' src={`https:${weather?.current.condition.icon}`} /><p className='weatherArea'>{weather?.current.temp_f} °F</p></div>
            {localStorage.getItem("userid") ? <h1 id="welcome" >Welcome, {localStorage.getItem('firstName')}!</h1> : null}
            {localStorage.getItem("userid") ? <Link to="/"><button id='logout' onClick={handleLogOut} style={{'text-decoration' : 'none', 'width': '200px', 'height': '50px', 'border-radius': '10px', 'background-color': 'white', 'color': 'rgb(153, 186, 221)', 'font-weight': '700', 'font-size': '25px', 'outline': 'none'}} > Log Out </button></Link> : null}
        </nav>
    
        
    )
}