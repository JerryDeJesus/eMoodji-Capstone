import React, { useState, useEffect } from "react";
import axios from "axios";

const ACCESS_KEY = process.env.REACT_APP_API_KEY;

export default function Step1(props) {
    const {progressBarComponent, entry, setEntry, next} = props;
    const [emojis, setEmojis] = useState([]);
    const [moodInput, setMoodInput] = useState("");
    const [disabled, setDisabled] = useState(true);
   
    useEffect (() => {
        axios(`https://emoji-api.com/emojis?access_key=${ACCESS_KEY}`)
        .then(res => {
            setEmojis(res.data);
        })
        .catch(error => console.log(error))
        if(entry.mood) setDisabled(false)
    });

    const handleSelectEmoji = (e, emoji) => {
        setEntry({...entry, mood : emoji.character});
        setDisabled(false);
    }

    const handleMoodInput = (e) => {
        setMoodInput(e.target.value);
    }

    const filteredEmojis = emojis.filter((el, i) => {
        if(i > 14 && moodInput.length === 0) {
            return false;
        } else {
            return el.unicodeName.includes(moodInput);
        }
    })
        
    const renderedFilteredEmojis = filteredEmojis.map((el, i) => {
        return(
            <div 
                 className = {el.character === entry.mood ? "child-emoji active" : "child-emoji"}
                 key = {i} 
                 onClick = {e => handleSelectEmoji(e, el)}>{el.character}
            </div>
        )
    });

    //handle users heading backwards to edit decisions
    // if(!moodInput && entry.mood){
    //     setDisabled(false)
    // }

    return(
        <form className="parent-container">
                <div className="progress-bar">
                    {progressBarComponent}
                </div>

                <div className="wizard-container">
                    <div className="wizard-question-search">
                        <label className="wizard-question" htmlFor="mood">Hi! Choose an emoji to describe how you're feeling.</label>
                        <input className="mood-search" type="text" id = "mood" value = {moodInput} onChange = {handleMoodInput} placeholder="Search a particular emoji here..."/>
                    </div>
                    
                    <div className="parent-emoji">
                        {renderedFilteredEmojis}
                    </div>

                    <div className="button-container">
                        <button className="wizard-button" onClick={next} disabled={disabled}>Next</button>
                    </div>
                </div>
        </form>
    )
}