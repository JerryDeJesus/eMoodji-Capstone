import { Link } from "react-router-dom";
import { useState, useEffect } from  "react";
import axios from "axios";

export default function SignedInHomePage(){
    const [quote, setQuote] = useState([]);
    const API = process.env.REACT_APP_API_URL;
    useEffect(() => {
        axios("https://type.fit/api/quotes")
        .then(res => {
          setQuote(res.data[Math.floor(Math.random() * 50)]);
        });

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

    const userEntriesLink = `/users/${localStorage.getItem('userid')}/entries`;
    return(
       
            <div className="sIHomePage">
                <div className="banner-container">
                    <h1 id='quote'>"{quote.text}" <br /> - {quote.author ? quote.author : "Unknown"}</h1><br /><br />
                </div>
                <div className='eBGrid'>
                    <div className='entryBox'>
                    <Link id='nEntry' to="/wizard"><button style={{'width': '200px', 'height': '50px', 'borderRadius': '10px', 'backgroundColor': 'rgb(153, 186, 221)', 'color': 'white', 'fontWeight': '700', 'fontSize': '25px', 'outline': 'none'}}> New Entry </button></Link>
                    <Link id='aEntry'  to={userEntriesLink}><button style={{'width': '200px', 'height': '50px', 'borderRadius': '10px', 'backgroundColor': 'rgb(153, 186, 221)', 'color': 'white', 'fontWeight': '700', 'fontSize': '25px', 'outline': 'none'}} >All Entries</button></Link>
                    </div>
                </div>
            </div>
     
    )
}