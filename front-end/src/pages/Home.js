import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="Home">
            <h1>Home Page</h1>
            <h1>Description</h1>
            <Link to="/entries/new"><button> New Entry </button></Link>
            <button> Log In </button>
            <Link to="/createaccount"><button> Create Account </button></Link>
        </div>
    )
};
