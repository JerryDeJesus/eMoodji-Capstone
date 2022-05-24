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
                        width = "550" 
                        height = "350"
                        frameBorder = "0" style={{border: "0"}}
                        referrerPolicy="no-referrer-when-downgrade"
                        src={`https://www.google.com/maps/embed/v1/directions?key=${MAP_KEY}&origin=${addressInput(userAddress)}&destination=${activityAddress}`}
                        allowFullScreen>
                    </iframe>;

    const displayMessage = <div>Direction is needed to navigate!</div>;   
    
    const selectedActivityData = activitiesData[entry.interest].findIndex((el) => el.name === entry.activity);

    const {name, address, description, phone, website} = activitiesData[entry.interest][selectedActivityData];

    return(
        <div className="parent-container">
            <div className="float-right">
                {progressBarComponent}
            </div>

            <div className="float-left">
                <h2>Details Page </h2>
                
                <div>
                    <h3>Name: {name}</h3>
                    <h3>Address: {address} </h3>
                    <h3>Description: {description} </h3>
                    <h3>Phone: {phone} </h3>
                    <h3>Website: <a href={`https://` + website} target="_blank" rel="noreferrer noopener">{website}</a></h3>
                </div>

                <form>
                    <button type = "button" onClick={back}>Back</button> 
                    <button type = "button" onClick={next}>Next</button>
                </form> 
           
                <label htmlFor="user_address">Enter Your Starting Address</label>
                <input type="text" id="user_address" onChange={handleUserAddressInput}/>
                
                <div>
                    {userAddress ? showMap : displayMessage}
                </div>
            </div>               
        </div>
    )
}