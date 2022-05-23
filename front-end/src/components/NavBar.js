import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/logo/eMoodji_logo_white.png";

export default function NavBar () {
    let navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.clear();
        console.log(localStorage.getItem("user_id"));
        navigate('/');
    };


    return (
        <nav id = "NavBar">
            <Link to="/"><img id="logo" src={logo} alt="Logo" style={{'width': "200px"}}/></Link> 
            <Link to="/"><button>eMoodji</button></Link>
            <Link to="/"><button onClick={handleLogOut}>Log out</button></Link>
        </nav>
    
        
    )
};