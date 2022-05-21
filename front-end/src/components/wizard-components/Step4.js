import React, { useState, useEffect } from "react";
// import axios from "axios";

export default function Step4(props) {
    const {entry, next, back} = props;
    const [userAddress, setUserAddress] = useState("");

    const MAP_KEY = process.env.REACT_APP_MAP_API_KEY;

    const handleUserAddressInput = (e) => {
        let {value} = e.target
        if(value.length > 0){
            let split = value.split(" ")
            split.join("+")
        }
        setUserAddress(value)
    }

    let activityAddress = entry.activity.split(" ").join("+")
    console.log(activityAddress)

    // useEffect (() => {
    //     axios(`https://www.google.com/maps/embed/v1/directions?key=${MAP_KEY}&origin=${userAddress}&destination=${activityAddress}`)
    //         .then(res => {
    //             console.log(res.data);
    //         })
    //         .catch(error => console.log(error))
        
    // }, [MAP_KEY, activityAddress, userAddress]);

    return(
        <div>
            <div>
                <h2>Details Page </h2>
                <h3>Name: </h3>
                <h3>Address: </h3>
                <h3>Description: </h3>
                <h3>Phone: </h3>
                <h3>Email: </h3>
            </div>

            <form>
                <button type = "button" onClick={back}>Back</button> 
                <button type = "button" onClick={next}>Next</button>
            </form>

            <div>
                <label htmlFor="user_address"></label>
                <input type="text" id="user_address" onChange={handleUserAddressInput}/>
            
                <iframe
                    width = "450" 
                    height = "250"
                    frameBorder = "0" style={{border: "0"}}
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps/embed/v1/directions?key=${MAP_KEY}&origin=${userAddress}&destination=${activityAddress}`}
                    allowFullScreen>
                </iframe>
            </div>                
        </div>
    )
}