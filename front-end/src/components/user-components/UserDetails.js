import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function UserDetails(){
    const [user, setUser] = useState([]);
    let { id } = useParams();
    let navigate = useNavigate();
    // (error) => navigate(`/not-found`)

    useEffect(() => {
        axios.get(`${API}/users/${id}`)
        .then((res) => {
            if(res.data.id){
                setUser(res.data);
            }else{
                navigate(`/not-found`)
                // error handling revisit
            }
        })
    }, [id, navigate]);

    let { fname, lname, email, password } = user;

    const handleDelete = () => {
        axios.delete(`${API}/users/${id}`)
            .then(res => navigate("/users"))
            .catch(error => console.log(error))
    };

    return(
        <article className="User">
           
                <div>
                    <h3>First name: {fname}</h3>
                    <h3>Last name: {lname}</h3>
                    <h3>Email: {email}</h3>
                    <h3>Password: {password}</h3>
                </div>
            
            <button onClick={handleDelete}>Delete Account</button>
            <Link to={`/users/${id}/edit`}><button>Edit User Information</button></Link>
        </article>
    )
}