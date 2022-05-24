import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

// export default function QuoteInHomePage(){
//     const [quote, setQuote] = useState([]);
//     useEffect(() => {
//         axios("https://type.fit/api/quotes")
//         .then(res => {
//           setQuote(res.data[Math.floor(Math.random() * 10)]);
//           console.log(res.data[Math.floor(Math.random() * 10)]);
//         })  
        
//     }, []);

export default function Login(){
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    let navigate = useNavigate();


    const handleTextChange = (e) => {
        setUser({...user, [e.target.id]: e.target.value})
    }

    let userLogIn = {};
    let userFirstName = {};

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${API}/users/loginpage`, user)
         .then(res => {
            console.log(res.data);
            userLogIn = res.data.id;
            userFirstName = res.data.fname;
            localStorage.setItem("userid", userLogIn);
            localStorage.setItem("firstName", userFirstName);
            navigate("/");
            }
         )

         .catch(error => alert("invalid login credentials"))
    };

    
    
    return(
        <div className='login'>
            {/* <h1>Login Page</h1> */}
            {/* <h1 id='homeQuote'>"{quote.text} - {quote.author}"</h1> */}
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