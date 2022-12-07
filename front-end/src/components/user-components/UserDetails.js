import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import icon from "../../assets/logo/user-details-icon.png";

const API = process.env.REACT_APP_API_URL;

export default function UserDetails(){
    const [user, setUser] = useState({});
    const [entriesCount, setEntriesCount] = useState(0);

    let { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API}/users/${id}`)
        .then((res) => {
            if(res.data.id){
                console.log(res.data);
                setUser(res.data);
            }else{
                navigate(`/not-found`)
            }
        })
        .catch(error => console.log(error))
        
        axios.get(`${API}/users/${id}/entries`)
        .then((res)=> {
            if(res.data){
                setEntriesCount(res.data.length);
            }
        })
        .catch(error => console.log(error))
    }, []);
    let { firstname, lastname, email } = user;

    const handleDelete = () => {
        axios.delete(`${API}/users/${id}`)
            .then(res => navigate("/"))
            .catch(error => console.log(error))
    };
    return(
        <article className="user-details-page">
                <div className="user-details">
                <div style={{'textAlign':'center'}}>
                    <img className="user-details-icon" src={icon} alt="user details icon"/>
                </div>
                <h1>Your Information</h1>
                    <h3>First name: {firstname}</h3>
                    <h3>Last name: {lastname}</h3>
                    <h3>Email: {email}</h3>
                    <h3>Total Entries Made: {entriesCount}</h3>
                    <button onClick={handleDelete} className="homepage-button nav-button user-info-button">Delete Account</button>
                    <Link to={`/users/${id}/edit`}><button className="homepage-button nav-button user-info-button">Edit Information</button></Link>
                </div>
        </article>
    )
}