import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

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

    let userFirstName = '';
    let userId = {};
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${API}/users/loginpage`, user)
         .then(res => {
            console.log(res)
            userFirstName = res.data.firstname;
            userId = res.data.id;
            
            setUser({...user, id: res.data.id});
            localStorage.setItem("userid", userId);
            localStorage.setItem("firstName", userFirstName);
            localStorage.setItem("accessToken",res.data.accessToken);
            navigate("/");
        })
        .catch(error => alert("Invalid email and/or password!"))
    }
    
    return(
        <div className='login'>
            <div className="login-container">

                <div className="login-image-container">
                    <h1>Welcome Back to eMoodjí! 😊</h1>
                </div>

                <div className="login-form-container">
                    <form onSubmit={handleSubmit} >
                        <h2>Already a Member?</h2>
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

                        <button id='confirm-login' type="submit" >Log In</button>
                    </form>
                    <div className="register">
                        Dont have an account yet?
                        <Link to="/createaccount"> Create An Account Now!</Link> 
                    </div>
                </div>
            </div>
        </div>
    )
}