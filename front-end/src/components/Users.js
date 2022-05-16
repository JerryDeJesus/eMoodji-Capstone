import axios from "axios";
import { useState, useEffect } from "react";
import User from "./User";

export default function Users(){
    const [user, setUser] = useState([]);
    const API = process.env.REACT_APP_API_URL;


    useEffect(() => {
        axios.get(`${API}/users`)
            .then((res) => {
                setUser(res.data);
            })
            .catch((err) => console.log(err))
    }, [API]);

    let displayUsers = user.map((user, id) => {
        return < User key = { id } user = { user } />
    });

    return(
        <section>
            {displayUsers}
        </section>
    )
}