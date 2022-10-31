// import { useState } from "react";

export default function Step3(props) {
    const {progressBarComponent, entry, setEntry, next, back, activitiesData} = props;

    const handleSelectActivity = (e) => {
            setEntry({...entry, activity: e.target.outerText})
    };

    const getInterestActivities = activitiesData?.[entry.interest].map((el, i) => {
        return(
            <li className={entry.activity === el.name ? "activity-box active" : "activity-box"} key = {i} onClick = {(e) => handleSelectActivity(e)}>{el.name}</li>
        )
    })


    return(
        <form className="parent-container">
            <div className="progress-bar">
                {progressBarComponent}
            </div>

            <div className="wizard-container">
                <p className="wizard-question">Choose an activity from below.</p>

                <div className="activity-container">
                    {getInterestActivities}
                </div>

                <div className="button-container step">
                    <button className="wizard-button" type = "button" onClick={back}>Back</button> 
                    <button className="wizard-button" type = "button" onClick={next}>Next</button>
                </div>
            </div>
        </form>
    )
}