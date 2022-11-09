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
        <div className="newForm">
            <div className="new-user-image-container">
                <div className="bubble">Welcome to eMoodjí! 😊</div>
            </div>
            
                <form onSubmit={handleSubmit} className="new-user-form">
                    <div className="signup-container">

                    <h3 className="signup-heading">We just need a bit of information about you to get your account set up!</h3>
                    <div>
                        <input 
                            id = "fname" 
                            value = {fname} 
                            type = "text" 
                            onChange = {handleTextChange} 
                            placeholder = "First Name"
                            required 
                            />
                    
                        <input 
                            id = "lname"
                            value = {lname} 
                            type = "text" 
                            onChange = {handleTextChange} 
                            placeholder = "Last Name"
                            />
                    </div>

                    <div>
                        <input 
                            id = "email"
                            value = {email} 
                            type = "email" 
                            onChange = {handleTextChange} 
                            placeholder = "Email"
                            required
                            />
                    
                        <input 
                            id = "password"
                            value = {password} 
                            type = "password" 
                            onChange = {handleTextChange} 
                            placeholder = "Password"
                            required
                            />
                    </div>

                    <button id='confirm-account-creation' type="Submit" >
                        Create Account
                    </button>
                    </div>
                </form>
            
        </div>
    )
}