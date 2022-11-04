import { Link } from "react-router-dom";
import SignedInHomePage from "../components/SignedInHomePage";

export default function Home() {
    if(localStorage.getItem("userid")){
        return(
            <SignedInHomePage />
        )
    }else{
        return (
            <div className="home">

                    <div className="homepage-bubble">Practice mindfulness with eMoodjí! Reflect on your emotions and receive helpful therapeutic recommendations for relaxing activities and events going on in the New York Metropolitan Area! </div>

                    <div className="inHomeBox">
                        <Link to="/wizard">
                            <button className="homepage-button"> Get Started </button>
                        </Link>

                        <Link to="/loginpage">
                            <button className="homepage-button"> Log In </button>
                        </Link>

                        <Link to="/createaccount">
                            <button className="homepage-button" > Create Account </button>
                        </Link>
                    </div> 

            </div>
        )
    }
};
