import axios from "axios";
import { useState, useEffect } from "react";
import Entry from "./Entry.js";

export default function Entries (){
    const [entries, setEntries] = useState([]);
    const API = process.env.REACT_APP_API_URL;

    useEffect(()=>{
        axios.get(`${API}/entries`)
            .then(res => {
                setEntries(res.data)
            })
            .catch(error => console.log(error))
    }, [API]);

    let displayEntries = entries.map((entry, index) => {
        return <Entry key={index} entry={entry} />
    });

    return(
        <div>
            {displayEntries}
        </div>
    )
}