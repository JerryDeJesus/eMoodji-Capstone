import { useState, useEffect } from "react";
import { useNavigate, useParams, Link} from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function EditEntry () {
    let {id} = useParams();
    const navigate = useNavigate();
    
    const [entry,setEntry] = useState({
        userid: null,
        date_created: "",
        mood: "",
        interest: "",
        activity: "",
    });
    
    let {date_created, mood, interest, activity} = entry;
    
    useEffect(()=> {
        axios.get(`${API}/entries/${id}`)
            .then((res) => setEntry(res.data))
            .catch(error => console.log(error))
    },[id])

    const handleText = (e) => {
        setEntry({...entry, [e.target.id]: e.target.value})
    };

    const handleEdit = (e) => {
        e.preventDefault();

        axios.put(`${API}/entries/${id}`, entry)
            .then((res) => navigate("/entries"))
            .catch(error => console.log(error))
    }

    return(
        <div>
             <form onSubmit={handleEdit}>
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

                <button type="submit">Edit Entry</button>
                <Link to={`/entries/${id}`}><button>Back</button></Link>
            </form>
        </div>
    )
}