import axios from "axios";
import { useNavigate } from "react-router-dom";
import WizardModal from "./WizardModal.js";
import Flippy, {FrontSide, BackSide} from "react-flippy";
import React from "react";

const API = process.env.REACT_APP_API_URL;

export default function StepSubmit(props) {
    const {entry} = props;
    const navigate = useNavigate();
    const userEntriesLink = `/users/${localStorage.getItem('userid')}/entries`;

    const cardStyle = {
        width: "275px", 
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

    const listItems = Object.entries(entry).map(([key, value]) => {
        return (
            <div key = {key}>
                {value === entry.mood && key === "mood" ? 
                    <Flippy key = {key}
                    flipOnClick = {true}
                    flipDirection = "horizontal"
                    style = {cardStyle}
                    > 
                        <FrontSide style = {frontStyle}>   
                            <h3>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
                        </FrontSide>    
    
                        <BackSide style = {enlargeEmojiStyle}>
                            <div className="vertical-align-emoji">{value}</div>
                        </BackSide>
                    </Flippy>
                : 
                    <Flippy key = {key}
                    flipOnClick = {true}
                    flipDirection = "horizontal"
                    style = {cardStyle}
                    > 
                        <FrontSide style = {frontStyle}>   
                            <h3>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
                        </FrontSide>    

                        <BackSide style = {backStyle}>
                            <div className="vertical-align-text">{value}</div>
                        </BackSide>
                    </Flippy>
                }    
            </div>
        )
    });

    const handleSubmitForSignIn = (e) => {
        e.preventDefault();

        axios.post(`${API}/entries`, entry)
            .then(res=> navigate(userEntriesLink))
            .catch(error=> console.log(error))
    };

    const handleSubmitForNotSignIn = (e) => {
        e.preventDefault();
        localStorage.setItem("tempEntryMood", entry.mood);
        localStorage.setItem("tempEntryInterest", entry.interest);
        localStorage.setItem("tempEntryActivity", entry.activity);
        axios.post(`${API}/entries`, entry)
             .catch(error=> console.log(error))
    };

    const checkUserAccount = () => {
        if(localStorage.getItem('userid')){
            return (
                <form onSubmit={handleSubmitForSignIn} >
                    <div className="button-container">
                        <button className="wizard-button">Submit</button>
                    </div>
                </form>)
        } else {
            return (
                <form onSubmit={handleSubmitForNotSignIn} >
                    <WizardModal />
                </form>)
        }
    }

    return (
        <div> 
            <p className="wizard-question">Entry</p>

            <div className="display-entry-result-container">
                {listItems}
            </div>
            
            {checkUserAccount()}
        </div>
    )
}