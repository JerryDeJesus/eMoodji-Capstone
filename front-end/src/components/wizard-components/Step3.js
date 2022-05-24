export default function Step3(props) {
    const {progressBarComponent, entry, setEntry, next, back, activitiesData} = props;

    const getInterestActivities = activitiesData?.[entry.interest].map((el, i) => {
        return(
            <li key = {i} onClick = {(e) => handleSelectActivity(e)}>{el.name}</li>
        )
    })

    const handleSelectActivity = (e) => setEntry({...entry, activity: e.target.outerText});

    return(
        <form>
            <div>
                {progressBarComponent}
            </div>

            <div>
                <h2>What Float's Your Boat?</h2>

                <div>
                    {getInterestActivities}
                </div>

                <div>
                    <button type = "button" onClick={back}>Back</button> 
                    <button type = "button" onClick={next}>Next</button>
                </div>
            </div>
        </form>
    )
}