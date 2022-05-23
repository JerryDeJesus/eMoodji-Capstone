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
    <div className="Home">
        <h1>Welcome, {localStorage.getItem("firstName")}!</h1>
        <h1>{quote.text} - {quote.author} </h1>
        <Link to="/wizard"><button> New Entry </button></Link>
        <Link to={userEntriesLink}><button>All Entries</button></Link>
    </div>
    )
}