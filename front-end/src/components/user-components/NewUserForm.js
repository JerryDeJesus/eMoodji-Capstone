import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;


export default function NewUserForm(){
    const [user, setUser] = useState({
        fname: "",
        lname: "",
        email: "",
        password: ""
    });
    
    let navigate = useNavigate();

const handleTextChange = (e) => {
    setUser({...user, [e.target.id]: e.target.value})
};

let userSignUp = {};
let userFirstName = {};

const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post(`${API}/users`, user)
         .then(res => {
            userSignUp = res.data.id;
            userFirstName = res.data.fname;
            localStorage.setItem("userid", userSignUp);
            localStorage.setItem("firstName", userFirstName);
            navigate("/");
        })
         .catch(error => console.log(error))
};

let { fname, lname, email, password } = user;

    return(
        <div id="new-form">
                <form onSubmit={handleSubmit}>
                    
                <label htmlFor = "fname">First Name</label>
                <input 
                    id = "fname" 
                    value = {fname} 
                    type = "text" 
                    onChange = {handleTextChange} 
                    placeholder = "First Name"
                    required 
                />
                <br/>

                
                <label htmlFor = "lname">Last Name</label>
                <input 
                    id = "lname"
                    value = {lname} 
                    type = "text" 
                    onChange = {handleTextChange} 
                    placeholder = "Last Name"
                    required
                />
                <br/>

                <label htmlFor = "email">Email</label>
                <input 
                    id = "email"
                    value = {email} 
                    type = "email" 
                    onChange = {handleTextChange} 
                    placeholder = "Email"
                    required
                />
                <br/>

                <label htmlFor = "password">Password</label>
                <input 
                    id = "password"
                    value = {password} 
                    type = "password" 
                    onChange = {handleTextChange} 
                    placeholder = "Password"
                    required
                />
                <br/>

                <br/>
                <button type="submit">Create Account</button>
                </form>
            </div>
    )
}