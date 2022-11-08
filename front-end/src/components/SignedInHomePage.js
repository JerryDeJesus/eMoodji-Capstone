import { Link } from "react-router-dom";
import { useState, useEffect } from  "react";
import axios from "axios";

export default function SignedInHomePage(){
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [loader, setLoader] = useState(false);
    const [quote, setQuote] = useState([]);
    const API = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios("https://type.fit/api/quotes")
        .then(res => {
          setQuote(res.data[Math.floor(Math.random() * 50)]);
        });
        //temp entry storage from the end of wizard route
        if(typeof localStorage.getItem("tempEntryMood") === "string"){
            let entry = {
                userid: localStorage.getItem("userid"),
                mood: localStorage.getItem("tempEntryMood"),
                interest: localStorage.getItem("tempEntryInterest"),
                activity: localStorage.getItem("tempEntryActivity")
            };
            localStorage.removeItem("tempEntryMood");
            localStorage.removeItem("tempEntryActivity");
            localStorage.removeItem("tempEntryInterest");
            axios.post(`${API}/entries`, entry)
            .catch(err => console.log(err));
        }
    }, [API]);

    const submitEmailSubscription = (e) => {

        //     // set loader to true
            setLoader(true);
            e.preventDefault();
    
        //     const requestParams = {
        //         method: 'POST',
                
        //     }
    
        //     fetch('https://www.myendpoint.com', requestParams)
        //     .then(response => response.json())
        //     .then(data => {
        //         setLoader(false);
    
        //         // replace view with success view
        //     }).catch(err => {
        //         // set loader to false
    
        //         // set an error state
        //     })
    
        };

    const userEntriesLink = `/users/${localStorage.getItem('userid')}/entries`;
    return(
                <div className="home">
                    <div id="wallpaper">
                        <div style={{ height: "30px" }}></div>
                        <section className="home-info">
                            <div className="left-info-box">
                                <h2>
                                One-stop quick reflections on your well-being! Discover relaxing
                                activities and events in the <br />
                                <p>New York Metropolitan Area!</p>
                                </h2>
                            </div>
                            <div className="right-info-box">
                                <h3>Describe</h3>
                                <p>
                                Your current feelings with the use of a simple emoji
                                </p>
                                <h3>Choose</h3>
                                <p>
                                An interest from a short list of supported topics
                                </p>
                                <h3>Discover</h3>
                                <p>
                                NYC locations and businesses that provide therapeutic activities and events!
                                </p>
                            </div>
                        </section>
                    {/* <div className="homepage-bubble">
                        Practice mindfulness with eMoodjí!
                    </div>
                    <div className="homepage-bubble">"{quote.text}" <br /> - {quote.author ? quote.author : "Unknown"}</div> */}
        
                        <div className="inHomeBox">
                            <Link to="/wizard">
                                <button className="homepage-button">Get Started</button>
                            </Link>
                            
                            <Link to={userEntriesLink}>
                                <button className='homepage-button'>All Entries</button>
                            </Link>
                        </div>

                    </div>
        
                    <div className="email-subscription-form">
                        <div className="email-subscription-title">
                            Join the newsletter!
                        </div>

                        <p className="email-subscription-description">
                            Subscribe for news on upcoming features!
                        </p>

                        <form>
                            <div className="email-subscription-input">
                            <input
                                type="text"
                                placeholder="Your first name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            ></input>
                            </div>

                            <div className="email-subscription-input">
                            <input
                                type="email"
                                placeholder="Your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            ></input>
                            </div>

                            <button
                            className="email-subscription-button"
                            onClick={submitEmailSubscription}
                            >
                            {loader ? "Great! You'll be hearing from eMoodji soon!" : 'Subscribe'}
                            </button>
                        </form>

                    </div>
                </div>
    )
}