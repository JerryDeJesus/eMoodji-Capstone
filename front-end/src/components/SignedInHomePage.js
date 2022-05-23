import { Link } from "react-router-dom";
import { useState, useEffect } from  "react";
import axios from "axios";

const api_url ="https://zenquotes.io/api/random";

async function getapi(url)
{
  const response = await fetch(url);
  let data = await response.json();
  console.log(data);
}

getapi(api_url);

export default function SignedInHomePage(){
    // const  [quote, setQuote] = useState([]);
    // useEffect(() => {
    //     axios("https://zenquotes.io/api/random")
    //     .then(res => {
    //       setQuote(res.data)
    //       console.log(res.data);
    //     })
    // })
    // const API = process.env.REACT_APP_API_URL;
    const works = `/users/${localStorage.getItem('user_id')}/entries`;
    return(
    <div className="Home">
        <h1>Signed in Home Page</h1>
        <h1>Quote of the Day <a href="https://today.zenquotes.io/" >ZenQuotes API</a></h1>
        <Link to="/entries/new"><button> New Entry </button></Link>
        <Link to={works}><button>All Entries</button></Link>
    </div>
    )
}