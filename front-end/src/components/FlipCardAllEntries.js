import { useState } from "react";

export default function FlipCardAllEntries ({entry, formattedDate, resourceLink, resourceDescription}) {
    let [flip, setFlip] = useState(false);

    let handleFlip = () => {
        setFlip(!flip);
    }

    return (
        <div className="card-outer-all-entries" onClick = {() => handleFlip()}>
            <div className={`card-all-entries ${flip ? "flip" : ""}`}>
                <div className="front-all-entries">
                    <h2>{formattedDate}</h2>
                    <h1 className="largest-emoji-size">{entry.mood}</h1>
                </div>
                <div className="back-all-entries">
                    <h3>{entry.interest.toUpperCase()}</h3>
                    <h3><a href={resourceLink} target="_blank" rel="noreferrer noopener">{entry.activity}</a></h3>
                    <h4>{resourceDescription}</h4>
                </div>
            </div>
        </div>
    )
}