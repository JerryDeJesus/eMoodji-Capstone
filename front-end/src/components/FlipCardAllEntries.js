import { useState } from "react";

export default function FlipCardAllEntries ({entry, formattedDate, resourceLink, resourceDescription}) {
    let [flip, setFlip] = useState(false);

    let handleFlip = () => {
        setFlip(!flip);
    }
    let interestCapitalized = entry.interest[0].toUpperCase() + entry.interest.slice(1);
    return (
        <div className="card-outer-all-entries" onClick = {() => handleFlip()}>
             <div className={`card-all-entries ${flip ? "flip" : ""}`}>
               <div className="front-all-entries">
                     <h1 className="largest-emoji-size">{entry.mood}</h1>
                     <h2 className="entry-date">{formattedDate}</h2>
                        <a href={resourceLink} className="activity-link" target="_blank" rel="noreferrer noopener">Visit {entry.activity}'s site</a>
                 
                </div>

                 <div className="back-all-entries">
                     <h3>{interestCapitalized}</h3>
                     <h4>{resourceDescription}</h4>
                 </div>
             </div>
         </div>
       
    )
}