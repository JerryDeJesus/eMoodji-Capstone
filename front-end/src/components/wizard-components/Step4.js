import React, { useState } from "react";

const MAP_KEY = process.env.REACT_APP_MAP_API_KEY;

export default function Step4(props) {
    const {progressBarComponent, entry, next, back, activitiesData} = props;
    const [userAddress, setUserAddress] = useState("");

    const handleUserAddressInput = (e) => setUserAddress(e.target.value);

    const addressInput = (address) => { if(address.length > 0) return address.split(" ").join("+") }

    let activityAddress = entry.activity.split(" ").join("+");

    const showMap = <iframe
                        title = "myMap"
                        width = "400" 
                        height = "300"
                        frameBorder = "0" style={{border: "0"}}
                        referrerPolicy="no-referrer-when-downgrade"
                        src={`https://www.google.com/maps/embed/v1/directions?key=${MAP_KEY}&origin=${addressInput(userAddress)}&destination=${activityAddress}`}
                        allowFullScreen>
                    </iframe>;

    const displayMessage = <div className="display-msg">Direction is needed to navigate!</div>;   
    
    const selectedActivityData = activitiesData[entry.interest].findIndex((el) => el.name === entry.activity);

    const {name, address, description, phone, website} = activitiesData[entry.interest][selectedActivityData];

    return(
        <div className="parent-container">
            <div className="float-right">
                {progressBarComponent}
            </div>

            <div className="float-left">
                <p className="wizard-question format-name">{name}</p>

                <div className="map-info">
                    <div className="map-container">
                        <input type="text" id="user_address" onChange={handleUserAddressInput} placeholder="Enter starting address.."/>
                        <div className="map-display">
                            {userAddress ? showMap : displayMessage}
                        </div>
                    </div>

                    <div>
                        <div className="result-container">
                            <p className="bi bi-telephone">{" "}{phone}</p>
                            <p className="bi bi-globe">{" "}<a href={website} target="_blank" rel="noreferrer noopener">{website}</a></p>
                            <p className="bi bi-building">{" "}{address} </p>
                            <p className="bi bi-blockquote-left">{" "}{description}</p>
                        </div>

                        <form className="last-step-btn">
                            <button className="wizard-button-small" type = "button" onClick={back}>Back</button> 
                            <button className="wizard-button-small" type = "button" onClick={next}>Next</button>
                        </form> 
                    </div>
                </div>
                
            </div>               
        </div>
    )
}