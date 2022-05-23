import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function EntryNewForm (){
    const navigate = useNavigate();
    
    const [entry,setEntry] = useState({
        userid: "",
        date_created: "",
        mood: "",
        interest: "",
        activity: "",
    });
    let {date_created, mood, interest, activity} = entry;
    
    const handleText = (e) => {
        setEntry({...entry, [e.target.id]: e.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        axios.post(`${API}/entries`, entry)
            .then(res=> navigate("/entries"))
            .catch(error=> console.log(error))
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="date_created">Date Created: </label>
                <input type="text" id="date_created" value={date_created} onChange={handleText} placeholder="enter date here"/>
                <br />

                <label htmlFor="mood">Mood: </label>
                <input type="text" id="mood" value={mood} onChange={handleText} placeholder="enter mood here"/>
                <br />

                <label htmlFor="interest">Interest: </label>
                <input type="text" id="interest" value={interest} onChange={handleText} placeholder="enter interest here"/>
                <br />

                <label htmlFor="activity">Activity: </label>
                <input type="text" id="activity" value={activity} onChange={handleText} placeholder="enter activity here"/>
                <br />

                <button type="submit">Create Entry</button>
            </form>
        </div>
    )
}