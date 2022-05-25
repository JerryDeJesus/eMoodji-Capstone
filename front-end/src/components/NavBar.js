import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/logo/eMoodji_logo_white.png";

export default function NavBar () {
    let navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.clear();
        console.log(localStorage.getItem("userid"));
        navigate('/');
        window.location.reload();
    };


    return (
        <nav id="NavBar">
            <Link to="/"><img id="logo" src={logo} alt="Logo" style={{'width': "225px"}}/></Link>
            {localStorage.getItem("userid") ? <h3 id="welcome" >Welcome, {localStorage.getItem('firstName')}!</h3> : null}
            {localStorage.getItem("userid") ? <Link to="/"><button id='logout' onClick={handleLogOut}>Log out</button></Link> : null}
        </nav>
    
        
    )
};