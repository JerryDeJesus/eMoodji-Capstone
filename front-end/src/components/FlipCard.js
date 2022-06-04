import { useState } from "react";

export default function FlipCard ({k, value}) {
    let [flip, setFlip] = useState(false);

    let handleFlip = () => {
        setFlip(!flip);
    }
    
    return (   
        <div className="card-outer" onClick = {() => handleFlip()}>
            <div className={`card ${flip ? "flip" : ""}`}>
                <div className="front">{k.charAt(0).toUpperCase() + k.slice(1)}</div>
                {k === "mood" ?
                    <div className="enlarge-emoji">{value}</div>
                :
                    <div className="back">{value}</div>
                }    
            </div>
        </div>
    )
}