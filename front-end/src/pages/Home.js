import { Link } from "react-router-dom";
import SignedInHomePage from "../components/SignedInHomePage";

export default function Home() {
    console.log("user id: ",localStorage.getItem("userid"));
    if(localStorage.getItem("userid")){
        return(
            <SignedInHomePage />
        )
    }else{
        return (
            <div className="Home">
                <h1>Logged out Home Page</h1>
                <h1>Description</h1>
                <Link to="/wizard"><button> New Entry </button></Link>
                <Link to="/loginpage"><button> Log In </button></Link>
                <Link to="/createaccount"><button> Create Account </button></Link>
            </div>
        )
    }
};
