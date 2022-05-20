import { Link } from 'react-router-dom';

export default function NavBar () {

    const handleLogOut = () => {
        localStorage.clear();
        console.log(localStorage.getItem("user_id"));
    };


    return (
        <nav><Link to="/"><img src="https://dummyimage.com/200x200/00b3ff/0011ff.png" alt="Logo"/></Link> 
            <Link to="/"><button>eMoodji</button></Link>
           <Link to="/"><button onClick={handleLogOut}>Log out</button></Link>
        </nav>
    
        
    )
};