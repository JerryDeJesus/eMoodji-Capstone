import { Link } from "react-router-dom";
import { useState, useEffect } from  "react";
import axios from "axios";


export default function SignedInHomePage(){
    const [quote, setQuote] = useState([]);
    useEffect(() => {
        axios("https://type.fit/api/quotes")
        .then(res => {
          setQuote(res.data[Math.floor(Math.random() * 10)]);
          console.log(res.data[Math.floor(Math.random() * 10)]);
        })  
        
    }, []);

    const userEntriesLink = `/users/${localStorage.getItem('userid')}/entries`;
    return(
       
        <body className="sIHomePage">
            <div>
                {/* <h1>Signed in Home Page</h1> */}
                <h1 id='quote'>{quote.text} - {quote.author} </h1>
                <Link id='nEntry' to="/entries/new"><button> New Entry </button></Link><br />
                <Link id='aEntry'  to={userEntriesLink}><button>All Entries</button></Link>
            </div>
        </body>
    )
}