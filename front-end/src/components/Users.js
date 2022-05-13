import axios from "axios";
import { useState, useEffect } from "react";
import User from "./User";

export default function AllUsers(){
    const [user, setUser] = useState([]);
    const API = process.env.REACT_APP_API_URL;


    useEffect(() => {
        axios.get(`${API}/users`)
            .then((res) => {
                console.log(res.data);
                setUser(res.data);
            })
            .catch((err) => console.log(err))
    }, [API]);

    let displayUsers = user.map((user, uid) => {
        return < User key = { uid } user = { user } />
    })

    return(
        <section>
            {displayUsers}
        </section>
    )
}