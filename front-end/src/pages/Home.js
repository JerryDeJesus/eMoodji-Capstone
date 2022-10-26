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

                     <div className="banner-container">
                        <div id="descript">
                            <div>Practice mindfulness with eMoodjí! Reflect on your emotions and receive helpful therapeutic recommendations for relaxing activities/events going on near you! </div>
                        </div>
                     </div>

                       <div className="inHomeBox">
                        <Link id="hbNewEntry" to="/wizard">
                            <button className="newEntryB"> Get Started </button>
                        </Link>

                        <br /><br />

                        <Link id="hbLogIn" to="/loginpage">
                            <button className="newEntryB"> Log In </button>
                        </Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <Link id="hbCrAcc" to="/createaccount" >
                            <button className="newEntryB" > Create Account </button>
                        </Link>
                       </div> 
            </div>
        )
    }
};
