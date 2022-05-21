import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function Login(){
    const [user, setUser] = useState({
        email: "",
        password: "",
        id: null
    });
    let navigate = useNavigate();


    const handleTextChange = (e) => {
        setUser({...user, [e.target.id]: e.target.value})
    }

    let userLogIn = {};

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${API}/users/loginpage`, user)
         .then(res => {
            console.log(res.data.id);
            userLogIn = res.data.id;
            localStorage.setItem("user_id", userLogIn);
            console.log(localStorage.getItem("user_id"));
            navigate("/");
            }
         )

         .catch(error => console.log("invalid login credentials"))
    };

    
    
    return(
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email"></label>
                <input 
                    id = "email"
                    value = {user.email} 
                    type = "email" 
                    onChange = {handleTextChange} 
                    placeholder="example@email.com"
                    required
                />

                <label htmlFor="password"></label>
                <input
                    id = "password"
                    value = {user.password}
                    type = "password"
                    onChange = {handleTextChange} 
                    placeholder="Password"
                    required
                />
                <br />
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}