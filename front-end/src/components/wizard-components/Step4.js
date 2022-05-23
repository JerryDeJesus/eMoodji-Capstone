import React, { useState } from "react";


export default function Step4(props) {
    const {entry, next, back, activitiesData} = props;
    const [userAddress, setUserAddress] = useState("");

    const MAP_KEY = process.env.REACT_APP_MAP_API_KEY;

    const handleUserAddressInput = (e) => setUserAddress(e.target.value);

    const addressInput = (address) => {
        if(address.length > 0){
            return address.split(" ").join("+");
        }
    }

    let activityAddress = entry.activity.split(" ").join("+");

    const showMap = <iframe
                            title = "myMap"
                            width = "450" 
                            height = "250"
                            frameBorder = "0" style={{border: "0"}}
                            referrerPolicy="no-referrer-when-downgrade"
                            src={`https://www.google.com/maps/embed/v1/directions?key=${MAP_KEY}&origin=${addressInput(userAddress)}&destination=${activityAddress}`}
                            allowFullScreen>
                    </iframe>;

    const displayMessage = <div>Direction is needed to navigate!</div>;   
    
    const selectedActivityData = activitiesData[entry.interest].findIndex((el) => el.name === entry.activity);

    const {name, address, description, phone, website} = activitiesData[entry.interest][selectedActivityData];

    return(
        <div>
            <div>
                <h2>Details Page </h2>
                <h3>Name: {name}</h3>
                <h3>Address: {address} </h3>
                <h3>Description: {description} </h3>
                <h3>Phone: {phone} </h3>
                <h3>Website: {website} </h3>
            </div>

            <form>
                <button type = "button" onClick={back}>Back</button> 
                <button type = "button" onClick={next}>Next</button>
            </form> 
            <hr />
            <div>
                <label htmlFor="user_address">Enter Your Starting Address</label>
                <input type="text" id="user_address" onChange={handleUserAddressInput}/>
                {userAddress ? showMap : displayMessage}
            </div>               
        </div>
    )
}