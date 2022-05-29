import { useState, useEffect } from "react";
import {Link, useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import { format, parseISO } from "date-fns";

const API = process.env.REACT_APP_API_URL;

export default function EntryDetails () {
    const [entry,setEntry] = useState([]);
    let navigate = useNavigate();
    let {id} = useParams();
    let {date_created, mood, interest, activity} = entry; 

    useEffect(() => {
        axios.get(`${API}/entries/${id}`)
            .then((res) => {
                console.log(res.data)
                setEntry(res.data);
            })
            .catch(error => console.log(error))
    }, [id]);

    const handleDelete = () => {
        axios.delete(`${API}/entries/${id}`)
            .then(() => navigate(`/users/${id}/entries`))
            .catch(error => console.log(error))
    }

    let formattedDate = typeof date_created === "string" ? format(parseISO(entry.date_created), "MM/dd/yyyy hh:mm aaaaa'm'") : "";
    
    return(
        <div>
            <h3>Created At: {formattedDate}</h3>
            <h3>Mood: {mood}</h3>
            <h3>Interest: {interest}</h3>
            <h3>Activity: {activity}</h3>  
            <Link to={`/users/${localStorage.getItem('userid')}/entries`}><button>BACK</button></Link>
            <Link to={`/entries/${id}/edit`}><button>EDIT</button></Link>
            <button onClick={handleDelete}>DELETE</button>
        </div>
    )
}