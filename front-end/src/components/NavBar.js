import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/logo/eMoodji_logo_white.png";
import { useState, useEffect } from  "react";
import axios from "axios";

export default function NavBar () {
    let navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.clear();
        navigate('/');
        window.location.reload();
    };

    const [weather, setWeather] = useState(null);
    useEffect(() => {
        axios("https://api.weatherapi.com/v1/current.json?key=6a073340fe75460b9b3182849222505&q=auto:ip&condition:icon&temp_f")
        .then(res => {
          setWeather(res.data);
          console.log(res.data);
        })  
        
    }, []);

    return (
        <nav className="NavBar">
        
            <Link to="/" style={{'textDecoration': 'none'}} ><img id="logo" src={logo} alt="Logo" style={{'width': "175px"}}/></Link>
            <div className='weatherDisplay'>
                <div><img id='weather-icon' alt='weatherIcon' src={`https:${weather?.current.condition.icon}`} /></div>
                <div>{weather?.location.name}<br/>{weather?.current.temp_f + '°F'}</div>
            </div>
            {localStorage.getItem("userid") ? <div id="welcome" >Welcome, {localStorage.getItem('firstName')}!</div> : null}
            {localStorage.getItem("userid") ? <Link to="/"><button id='logout' onClick={handleLogOut} style={{'textDecoration' : 'none', 'width': '200px', 'height': '50px', 'borderRadius': '10px', 'backgroundColor': 'white', 'color': 'rgb(153, 186, 221)', 'fontWeight': '700', 'fontSize': '25px', 'outline': 'none'}} > Log Out </button></Link> : null}
        </nav>
    
        
    )
}