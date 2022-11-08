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
            <div className="banner-container">
                <h1 id='descript'> 🥰🤪😂🥳😬🙃😎🤩<p> Practice mindfulness with eMoodji! Reflect on your emotions and receive helpful therapeutic recommendations for relaxing activities/events going on near you ! </p></h1>
            </div>
            
            <div>
                <form 
                onSubmit={handleSubmit} 
                style={{'color':'white', 'paddingTop': '35px'}} 
                >
                    <input 
                        style={{'margin':'25px'}}
                        id = "fname" 
                        value = {fname} 
                        type = "text" 
                        onChange = {handleTextChange} 
                        placeholder = "First Name"
                        required 
                    />
                
                    <input 
                        style={{'margin':'25px'}}
                        id = "lname"
                        value = {lname} 
                        type = "text" 
                        onChange = {handleTextChange} 
                        placeholder = "Last Name"
                        />
                    <br/>

                    <input 
                        style={{'margin':'25px'}}
                        id = "email"
                        value = {email} 
                        type = "email" 
                        onChange = {handleTextChange} 
                        placeholder = "Email"
                        required
                    />
                
                    <input 
                        style={{'margin':'25px'}}
                        id = "password"
                        value = {password} 
                        type = "password" 
                        onChange = {handleTextChange} 
                        placeholder = "Password"
                        required
                    />
                    <br />

                    <button 
                    id='nSubmit' 
                    type="Submit" 
                    style={{'margin':'25px'}} 
                    >Create Account
                    </button>
                </form>
            </div>
        </div>
    )
}