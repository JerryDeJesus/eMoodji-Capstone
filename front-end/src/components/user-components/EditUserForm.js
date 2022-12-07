import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;


export default function EditUserForm(){
    let { id } = useParams();

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      }

      useEffect(() => {
          axios.get(`${API}/users/${id}`)
            .then(res => setUser(res.data))
            .catch(error => console.log(error))
      }, [id]);

const handleTextChange = (e) => {
    if(e.target.id === "email" ){
        let results = validateEmail(e.target.value);
        if(results === null){
            console.log("invalid");
            return
        }else{
            console.log("valid");
        }
    }
    setUser({...user, [e.target.id]: e.target.value})
};

const handleEdit = (e) => {
    e.preventDefault();
    axios.put(`${API}/users/${id}`, user)
    .then(res =>{
        console.log(localStorage.getItem("userid"))

        localStorage.setItem("userid",user.firstName);
        console.log(localStorage.getItem("userid"))
        navigate(`/users/${id}`)
    })
    .catch(error => console.log(error))
};

let { firstName, lastName, email, password } = user;

    return(
        <div id="edit-form">
                <form onSubmit={handleEdit}>
                    
                <label htmlFor = "firstName">First Name</label>
                <input 
                    id = "firstName" 
                    value = {firstName} 
                    type = "text" 
                    onChange = {handleTextChange} 
                    placeholder = "First Name"
                    required 
                />
                <br/>

                
                <label htmlFor = "lastName">Last Name</label>
                <input 
                    id = "lastName"
                    value = {lastName} 
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
                <Link to={`/users/${localStorage.getItem("userid")}`}><button>Back</button></Link>
                
                <button type="submit">Update User</button>
                </form>
            </div>
    )
}