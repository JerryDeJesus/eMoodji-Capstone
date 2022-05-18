import { Link } from 'react-router-dom';

export default function NavBar () {
    return (
        <nav><Link to="/"><img src="https://dummyimage.com/200x200/00b3ff/0011ff.png" alt="Logo"/></Link> 
            <Link to="/"><button>eMoodji</button></Link>
        </nav>
    
        
    )
};