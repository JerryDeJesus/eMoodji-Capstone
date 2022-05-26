export default function Step3(props) {
    const {progressBarComponent, entry, setEntry, next, back, activitiesData} = props;

    const getInterestActivities = activitiesData?.[entry.interest].map((el, i) => {
        return(
            <li className="activity-box" key = {i} onClick = {(e) => handleSelectActivity(e)}>{el.name}</li>
        )
    })

    const handleSelectActivity = (e) => setEntry({...entry, activity: e.target.outerText});

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

                <div className="button-container step">
                    <button className="wizard-button" type = "button" onClick={back}>Back</button> 
                    <button className="wizard-button" type = "button" onClick={next}>Next</button>
                </div>
            </div>
        </form>
    )
}