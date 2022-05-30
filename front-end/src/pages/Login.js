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
        id: null,
        email: "",
        password: "",
    });
    let navigate = useNavigate();


    const handleTextChange = (e) => {
        setUser({...user, [e.target.id]: e.target.value})
    }


    let userFirstName = "";
    // let entry = {
    //     userid: null,
    //     mood: localStorage.getItem("tempEntryMood"),
    //     interest: localStorage.getItem("tempEntryInterest"),
    //     activity: localStorage.getItem("tempEntryActivity")
    //     };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${API}/users/loginpage`, user)
         .then(res => {
            console.log(res.data);
            userFirstName = res.data.fname;
            setUser({...user, id: res.data.id});
            localStorage.setItem("userid", res.data.id);
            localStorage.setItem("firstName", userFirstName);
            navigate("/");
        })
        .catch(error => alert("invalid login credentials"))

        // let entry = {
        //     userid: usersId,
        //     mood: localStorage.getItem("tempEntryMood"),
        //     interest: localStorage.getItem("tempEntryInterest"),
        //     activity: localStorage.getItem("tempEntryActivity")
        //     };

        // axios.post(`${API}/entries`, entry)
        // .then(res =>{
        //     console.log(res);
        // })
        // .catch(err => console.log(err))
        
    };

    
    
    return(
        <div className='login'>
            {/* <h1>Login Page</h1> */}
            <h1 id='descript' style={{'padding-top': '50px'}}> 🥰🤪😂🥳😬🙃😎🤩 <p> Practice mindfulness with eMoodji! Reflect on your emotions and receive helpful therapeutic recommendations for relaxing activities/events going on near you ! </p></h1>
            <form onSubmit={handleSubmit} style={{'color':'white'}} >

                <input    
                    id = "email"
                    value = {user.email} 
                    type = "email" 
                    onChange = {handleTextChange} 
                    placeholder="example@email.com"
                    required
                    />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              
                    <input
                    id = "password"
                    value = {user.password}
                    type = "password"
                    onChange = {handleTextChange} 
                    placeholder="Password"
                    required
                    /><br />
                <button id='logIn' type="submit" >Log In</button>
            </form>
        </div>
    )
}