import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/logo/eMoodji_logo_white.png";
import { useState, useEffect } from  "react";
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
            <Link to="/" style={{'text-decoration': 'none'}} ><img id="logo" src={logo} alt="Logo" style={{'width': "175px"}}/></Link>
            <div ><img alt='weather icon' id='weather' src={`https:${weather?.current.condition.icon}`} /><p className='weatherArea'>{weather?.current.temp_f} °F </p></div>
            {localStorage.getItem("userid") ? <h3 id="welcome" >Welcome, {localStorage.getItem('firstName')}!</h3> : null}
            {localStorage.getItem("userid") ? <Link to="/"><button id='logout' onClick={handleLogOut} style={{'textDecoration' : 'none', 'width': '200px', 'height': '50px', 'borderRadius': '10px', 'backgroundColor': 'white', 'color': 'rgb(153, 186, 221)', 'fontWeight': '700', 'fontSize': '25px', 'outline': 'none'}} > Log Out </button></Link> : null}
        </nav>
    
        
    )
}