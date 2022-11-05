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
                <div id="wallpaper">
                    <div style={{'height':'30px'}}></div>
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

                    
                <section className="home-info">
                    <div>
                        <h2>The world's largest therapy service. <br/><p>100% online.</p></h2>
                    </div>
                    <div className="right-info-box">
                        <p><h3>268,526,178</h3> Messages, chat, phone, video sessions</p>
                        <p><h3>268,526,178</h3> Messages, chat, phone, video sessions</p>
                        <p><h3>268,526,178</h3> Messages, chat, phone, video sessions</p>
                    </div>
                </section>
            </div>
        )
    }
};
