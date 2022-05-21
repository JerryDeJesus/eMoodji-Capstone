import React, { useState } from "react";

export default function Step2(props) {
    const {entry, handleText, next, back} = props;
    
    return(
        <form>
            <div>
                <label htmlFor="interest">Tell me what's your interest</label>
                <input type = "text" id = "interest" value={entry.interest ?? ""} onChange={handleText} />
                <button type = "button" onClick={back}>Back</button> 
                <button type = "button" onClick={next}>Next</button>
            </div>
        </form>
    )
}