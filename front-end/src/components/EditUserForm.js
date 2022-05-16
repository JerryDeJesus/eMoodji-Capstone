import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;


export default function EditUserForm(){
    let { id } = useParams();

    const [user, setUser] = useState({
        fname: "",
        lname: "",
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    // const validateEmail = (email) => {
    //     return String(email)
    //       .toLowerCase()
    //       .match(
    //         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //       );
    //   }

      useEffect(() => {
          axios.get(`${API}/users/${id}`)
            .then(res => setUser(res.data))
            .catch(error => console.log(error))
      }, [id]);

const handleTextChange = (e) => {
    //email validation suggestion by Greg
     console.log(e.target.value);
    // if(e.target.id === "email" ){
    //     let results = validateEmail(e.target.value);
    //     if(results.length === 0){
    //          console.log("invalid");
    //         return
    //     }else{
    //         console.log("valid");
    //     }
    // }

    setUser({...user, [e.target.id]: e.target.value})
};

const handleEdit = (e) => {
    e.preventDefault();
    axios.put(`${API}/users/${id}`, user)
        .then(res => navigate("/users"))
        .catch(error => console.log(error))
};

let { fname, lname, email, password } = user;

    return(
        <div id="edit-form">
                <form onSubmit={handleEdit}>
                    
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
                    type = "text" 
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
                <Link to={`/users/${id}`}><button>Back</button></Link>
                
                <button type="submit">Update User </button>
                </form>
            </div>
    )
}