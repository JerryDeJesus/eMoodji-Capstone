import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function Login(){
    const [user, setUser] = useState({
        id: null,
        email: "",
        password: "",
    });
    let navigate = useNavigate();


    const handleTextChange = (e) => {
        setUser({...user, [e.target.id]: e.target.value})
    }

    let userFirstName = "";
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${API}/users/loginpage`, user)
         .then(res => {
            // console.log(res.data);
            userFirstName = res.data.fname;
            setUser({...user, id: res.data.id});
            localStorage.setItem("userid", res.data.id);
            localStorage.setItem("firstName", userFirstName);
            navigate("/");
        })
        .catch(error => alert("invalid login credentials"))
    }
    
    return(
        <div className='login'>
            <div className="banner-container">
                <h1 id='descript'><p>Practice mindfulness with eMoodjí! Reflect on your emotions and receive helpful therapeutic recommendations for relaxing activities/events going on near you!</p>🥰🤪😂🥳😬🙃😎🤩</h1>
            </div>
            <form onSubmit={handleSubmit}>

                <input
                    id = "email"
                    value = {user.email} 
                    type = "email" 
                    onChange = {handleTextChange} 
                    placeholder="Email"
                    required
                    />
              
                <input 
                id = "password"
                value = {user.password}
                type = "password"
                onChange = {handleTextChange} 
                placeholder="Password"
                required
                />
                <br />
                <button id='logIn' type="submit" >Log In</button>
                
            </form>
        </div>
    )
}