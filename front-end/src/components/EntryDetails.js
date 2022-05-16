import { useState, useEffect } from "react";
import {Link, useParams, useNavigate} from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function EntryDetails () {
    const [entry,setEntry] = useState([]);
    let navigate = useNavigate();
    let {eid} = useParams();
    let {userid, date_created, mood, interest, activity} = entry; 

    useEffect(() => {
        axios.get(`${API}/entries/${eid}`)
            .then((res) => {
                console.log(res.data)
                setEntry(res.data)
            })
            .catch(error => console.log(error))
    }, [eid]);

    const handleDelete = () => {
        axios.delete(`${API}/entries/${eid}`)
            .then(() => navigate("/entries"))
            .catch(error => console.log(error))
    }

    return(
        <div>
            <h3>Date Created: {date_created}</h3>
            <h3>Mood: {mood}</h3>
            <h3>Interest: {interest}</h3>
            <h3>Activity: {activity}</h3>  
            <Link to={`/entries`}><button>BACK</button></Link>
            <Link to={`/entries/${eid}/edit`}><button>EDIT</button></Link>
            <button onClick={handleDelete}>DELETE</button>
        </div>
    )
}