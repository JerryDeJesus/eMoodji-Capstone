import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { format, parseISO } from "date-fns";
import Flippy, {FrontSide, BackSide} from "react-flippy";

const API = process.env.REACT_APP_API_URL;

export default function UserEntries (){
    const [userEntries, setUserEntries] = useState([]);
    
    let {id} = useParams();
    let navigate = useNavigate();
    
    useEffect(()=>{
        axios.get(`${API}/users/${id}/entries`)
        .then((res)=> {
            if(res.data){
                setUserEntries(res.data)
            } else {
                navigate("/not-found")
            }
        })
    }, [id, navigate]);

    const cardStyle = {
        width: "350px", 
        height: "150px",
        margin: "20px",
        textAlign: "center",
    }

    const frontStyle = {
        borderRadius: "20px",
        backgroundColor: "rgb(153, 186, 221)",
        color: "white",
        fontSize: "25px",
        fontFamily: "sans-serif"
    }

    const backStyle = {
        boxShadow: "4px 0.7px 20px 3px rgb(153, 186, 221)",
        borderRadius: "20px",
        color: "rgb(153, 186, 221)",
        fontSize: "20px",
        fontFamily: "sans-serif",
        display: "flex",
    }

    const enlargeEmojiStyle = {
        fontSize: "50px",
        boxShadow: "4px 0.7px 20px 3px rgb(153, 186, 221)",
        borderRadius: "20px",
        color: "rgb(153, 186, 221)",
    }

    
    let displayUserEntries = userEntries.map((entry, index)=>{
        let formattedDate = format(parseISO(entry.date_created), "MM/dd/yyyy hh:mm aaaaa'm'");
        let linkToEntry = `/entries/${entry.id}`;

        return(
            <div className='usEntri' key = {index} >
                <Flippy 
    key={index}
    flipOnClick = {true}
    flipDirection = "horizontal"
    style={cardStyle}
    >
        <FrontSide style = {frontStyle}>
            <h3>{formattedDate}</h3>
            <h3>{entry.mood}</h3>
        </FrontSide>
        <BackSide style={backStyle}>
            <div >
                
                <h3>Interest: {entry.interest}</h3>
                <h3>Activity: {entry.activity}</h3>
            </div>
        </BackSide>
</Flippy>
                {/* <Link to={linkToEntry}>
                    <h3>Created At: {formattedDate}</h3>
                    <h3>Mood: {entry.mood}</h3>
                    <h3>Interest: {entry.interest}</h3>
                    <h3>Activity: {entry.activity}</h3>
                </Link> */}
                <br />
            </div>
        )
    })
    

    return(
        <div className="sUE">
            {userEntries.length ? displayUserEntries : "No Entries"}
        </div>
    )
}

