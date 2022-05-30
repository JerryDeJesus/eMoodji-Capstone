import { useState } from "react";

export default function Step3(props) {
    const {progressBarComponent, entry, setEntry, next, back, activitiesData} = props;
    const [isActiveClick, setIsActiveClick] = useState(false);

    const getInterestActivities = activitiesData?.[entry.interest].map((el, i) => {
        return(
            <li className="activity-box" key = {i} onClick = {(e) => handleSelectActivity(e)}>{el.name}</li>
        )
    })

    const handleSelectActivity = (e) => {
        if(!isActiveClick){
            e.target.style.transform = "scale(1.3)"
            setEntry({...entry, activity: e.target.outerText})
            setIsActiveClick(!isActiveClick);
        } else {
            e.target.style.transform = "none"
            setEntry({...entry, activity: ""});
            setIsActiveClick(!isActiveClick);
        }
    };

    return(
        <form className="parent-container">
            <div className="float-right">
                {progressBarComponent}
            </div>

            <div className="float-left">
                <p className="wizard-question">What Float's Your Boat?</p>

                <div className="activity-container">
                    {getInterestActivities}
                </div>

                <div className="warning-msg3-container">
                    <p className="warning-msg3">* To deselect, click your selected interest again *</p>
                </div>

                <div className="button-container step">
                    <button className="wizard-button" type = "button" onClick={back}>Back</button> 
                    <button className="wizard-button" type = "button" onClick={next}>Next</button>
                </div>
            </div>
        </form>
    )
}