import { Link } from "react-router-dom";

export default function Home() {
    // console.log(localStorage.getItem("user_id"));

    if(localStorage.getItem("user_id")){
        return (
            <div className="Home">
                <h1>Signed in Home Page</h1>
                <h1>Quote of the Day</h1>
                <Link to="/entries/new"><button> New Entry </button></Link>
                <button>All Entries</button>
            </div>
        )
    }else{
        return (
            <div className="Home">
                <h1>Logged out Home Page</h1>
                <h1>Description</h1>
                <Link to="/entries/new"><button> New Entry </button></Link>
                <Link to="loginpage"><button> Log In </button></Link>
                <Link to="/createaccount"><button> Create Account </button></Link>
            </div>
        )
    }
};
