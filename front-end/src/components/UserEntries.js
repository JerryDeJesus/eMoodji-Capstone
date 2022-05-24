import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function UserEntries (){
    const [userEntries, setUserEntries] = useState([]);
    
    let {id} = useParams();
    let navigate = useNavigate();
    
    useEffect(()=>{
        axios.get(`${API}/users/${id}/entries`)
        .then((res)=> {
            console.log(res.data);
            if(res.data){
                setUserEntries(res.data)
            } else {
                navigate("/not-found")
            }
        })
    }, [id, navigate]);

    
    let displayUserEntries = userEntries.map((entry, index)=>{
        let linkToEntry = `/entries/${entry.id}`;
        return(
            <div className='usEntri' key = {index} >
                <Link to={linkToEntry}><h3>Entry Number : {entry.id}</h3></Link>
                <h3>Date Created: {entry.date_created}</h3>
                <h3>Mood: {entry.mood}</h3>
                <h3>Interest: {entry.interest}</h3>
                <h3>Activity: {entry.activity}</h3>
                <br />
            </div>
        )
    })
    

    return(
        <div>
            {displayUserEntries}
        </div>
    )
}