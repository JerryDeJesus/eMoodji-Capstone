import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function UserDetails(){
    const [user, setUser] = useState([]);
    const [showPassword, setShowPassword] = useState(false);
    let { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API}/users/${id}`)
        .then((res) => {
            if(res.data.id){
                setUser(res.data);
            }else{
                navigate(`/not-found`)
            }
        })
    }, [id, navigate]);

    let { fname, lname, email, password } = user;

    const handleDelete = () => {
        axios.delete(`${API}/users/${id}`)
            .then(res => navigate("/"))
            .catch(error => console.log(error))
    };

    const handleShowingPassword = () => {
        setShowPassword(!showPassword)
    }

    return(
        <article className="User">
           
                <div>
                    <h3>First name: {fname}</h3>
                    <h3>Last name: {lname}</h3>
                    <h3>Email: {email}</h3>
                    <h3>Password: {showPassword ? password : '******'}</h3>
                </div>
            <button onClick={handleShowingPassword}>Show/Hide Password</button>
            <button onClick={handleDelete}>Delete Account</button>
            <Link to={`/users/${id}/edit`}><button>Edit User Information</button></Link>
        </article>
    )
}