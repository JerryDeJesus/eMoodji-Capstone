import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/logo/eMoodji_logo_white.png";
// import { useState, useEffect } from  "react";
// import axios from "axios";
// import wheatherIcons from "wheatherIcons";

export default function NavBar () {
    let navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.clear();
        console.log(localStorage.getItem("userid"));
        navigate('/');
        window.location.reload();
    };



    // export default function NavBWheather(q){
    //     const q = 'q=auto:ip';
    //     function getIpLookup(q, callback)
    //     const [wheather, setWheather] = useState([]);
    //     useEffect(() => {
    //         axios("https://api.wheatherapi.com/v1/ip.json?key=6a073340fe75460b9b3182849222505/q=auto:ip/condition:icon/temp_f")
    //         .then(res => {
    //           setWheather(res.data);
    //           console.log(res.data);
    //         })  
            
    //     }, []);


    return (
        <nav id="NavBar">
            <Link to="/" style={{'textDecoration': 'none'}} ><img id="logo" src={logo} alt="Logo" style={{'width': "225px"}}/></Link>
            {/* <h1 id='wheather'>"{wheather.text}"</h1> */}
            {localStorage.getItem("userid") ? <h1 id="welcome" >Welcome, {localStorage.getItem('firstName')}!</h1> : null}
            {localStorage.getItem("userid") ? <Link to="/"><button id='logout' onClick={handleLogOut} style={{'textDecoration' : 'none', 'width': '200px', 'height': '50px', 'borderRadius': '10px', 'backgroundColor': 'white', 'color': 'rgb(153, 186, 221)', 'fontWeight': '700', 'fontSize': '25px', 'outline': 'none'}} > Log Out </button></Link> : null}
        </nav>
    
        
    )
}