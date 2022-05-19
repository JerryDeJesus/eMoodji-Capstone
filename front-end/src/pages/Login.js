import { useState } from "react";

export default function Login(){
    const [user, setUser] = useState({
        email: "",
        password: "",
        id: null
    });

    const handleTextChange = (e) => {
        setUser({...user, [e.target.id]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

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