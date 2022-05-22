import React from "react";
import { useState } from "react";
const activitiesData = require('../../data/activities.json');

export default function Step3(props) {
    const {entry, setEntry, next, back} = props;
    const [activities, setActivities] = useState(activitiesData);

    const getInterestActivities = activities[entry.interest].map((el, i) => {
        return(
            <li key = {i} onClick = {(e) => handleSelectActivity(e)}>{el.name}</li>
        )
    })

    const handleSelectActivity = (e) => {
        console.log(e.target.outerText)
        setEntry({...entry, activity: e.target.outerText})
    }

    return(
        <form>
            <div>
                {/* <label htmlFor="activity">What Float's Your Boat?</label> */}
                {/* <input type = "text" id = "activity" value={entry.activity ?? ""} onChange={handleText} /> */}
                <h2>What Float's Your Boat?</h2>
                <div>
                {getInterestActivities}
                </div>
                <button type = "button" onClick={back}>Back</button> 
                <button type = "button" onClick={next}>Next</button>
            </div>
        </form>
    )
}