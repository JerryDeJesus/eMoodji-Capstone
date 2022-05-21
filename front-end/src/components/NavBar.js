import { Link, useNavigate } from 'react-router-dom';
import data from "../data/";

export default function NavBar () {
    let navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.clear();
        console.log(localStorage.getItem("user_id"));
        navigate('/');
    };


    return (
        <nav><Link to="/"><img src={data} alt="Logo"/></Link> 
            <Link to="/"><button>eMoodji</button></Link>
           <Link to="/"><button onClick={handleLogOut}>Log out</button></Link>
        </nav>
    
        
    )
};