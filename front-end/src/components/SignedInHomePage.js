import { Link } from "react-router-dom";

export default function SignedInHomePage(){

    // const API = process.env.REACT_APP_API_URL;
    const works = `/users/${localStorage.getItem('user_id')}/entries`;
    return(
    <div className="Home">
        <h1>Signed in Home Page</h1>
        <h1>Quote of the Day</h1>
        <Link to="/entries/new"><button> New Entry </button></Link>
        <Link to={works}><button>All Entries</button></Link>
    </div>
    )
}