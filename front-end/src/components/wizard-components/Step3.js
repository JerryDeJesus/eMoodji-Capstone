import React from "react";

export default function Step3(props) {
    const {entry, handleText, next, back} = props;
    return(
        <form>
            <div>
                <label htmlFor="activity">What Float's Your Boat?</label>
                <input type = "text" id = "activity" value={entry.activity ?? ""} onChange={handleText} />
                <button type = "button" onClick={back}>Back</button> 
                <button type = "button" onClick={next}>Next</button>
            </div>
        </form>
    )
}