import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import WizardModal from "./WizardModal.js";

const MAP_KEY = process.env.REACT_APP_MAP_API_KEY;
const API = process.env.REACT_APP_API_URL;

export default function Step4(props) {
    const {progressBarComponent, entry, back, activitiesData} = props;
    const [userAddress, setUserAddress] = useState("New York");
    const navigate = useNavigate();
    const userEntriesLink = `/users/${localStorage.getItem('userid')}/entries`;
        

    let activityAddress = entry.activity.split(" ").join("+");
    
    const addressInput = (address) => { if(address.length > 0) return address.split(" ").join("+") }
    
    const handleUserAddressInput = (e) => setUserAddress(e.target.value);

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
                    <button className="wizard-button-small" onClick={back}>Back</button>
                        <button className="wizard-button-small">Submit</button>
                </form>)
        } else {
            return (
                <form onSubmit={handleSubmitForNotSignIn} >
                    <button className="wizard-button-small" onClick={back}>Back</button>
                    <WizardModal />
                </form>)
        }
    }

    const showMap = <iframe
                        title = "myMap"
                        width = "500" 
                        height = "500"
                        frameBorder = "0" style={{border: "0"}}
                        referrerPolicy="no-referrer-when-downgrade"
                        src={`https://www.google.com/maps/embed/v1/directions?key=${MAP_KEY}&origin=${addressInput(userAddress || "Times Square, New York")}&destination=${activityAddress}`}
                        allowFullScreen>
                    </iframe>;
    
    const selectedActivityData = activitiesData[entry.interest].findIndex((el) => el.name === entry.activity);

    const {name, address, description, phone, website} = activitiesData[entry.interest][selectedActivityData];

    return(
        <div className="parent-container">
            <div className="progress-bar">
                {progressBarComponent}
            </div>

            <div className="wizard-container">
                <p className="wizard-question format-name">{name}</p>

                <div className="map-info">
                    <div className="map-container">
                        <input type="text" id="user_address" onChange={handleUserAddressInput} placeholder="Enter starting address..."/>
                        <div className="map-display">
                            {showMap}
                        </div>
                    </div>

                    <div className="info-box">
                        <div className="result-container">
                            <p className="bi bi-telephone">{" "}{phone}</p>
                            <p className="bi bi-globe">{" "}<a href={website} target="_blank" rel="noreferrer noopener">{website}</a></p>
                            <p className="bi bi-building">{" "}{address} </p>
                            <p className="bi bi-blockquote-left">{" "}{description}</p>
                        </div>                             
                            {checkUserAccount()}
                    </div>
                </div>
                
            </div>               
        </div>
    )
}