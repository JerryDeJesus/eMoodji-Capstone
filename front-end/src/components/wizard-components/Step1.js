import React, { useState, useEffect } from "react";
import axios from "axios";

const ACCESS_KEY = process.env.REACT_APP_API_KEY;

export default function Step1(props) {
    const {progressBarComponent, entry, setEntry, next} = props;
    const [emojis, setEmojis] = useState([]);
    const [moodInput, setMoodInput] = useState("");
    const [isActiveClick, setIsActiveClick] = useState(false);
   
    useEffect (() => {
        axios(`https://emoji-api.com/emojis?access_key=${ACCESS_KEY}`)
            .then(res => {
                setEmojis(res.data);
            })
            .catch(error => console.log(error))
        
    }, []);

    const handleSelectEmoji = (e, emoji) => {
        if(!isActiveClick) {
            e.target.style.transform = "scale(1.8)"
            setEntry({...entry, mood : emoji.character});
            setIsActiveClick(!isActiveClick);
        } 
        else {
            e.target.style.transform = "none"
            setEntry({...entry, mood : ""});
            setIsActiveClick(!isActiveClick);
        }    
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
            <div className = "child-emoji" 
                 key = {i} 
                 onClick = {e => handleSelectEmoji(e, el)}>{el.character}
            </div>
        )
    });
    
    return(
        <form className="parent-container">
                <div className="float-right">
                    {progressBarComponent}
                </div>

                <div className="float-left">
                    <div className="wizard-question-search">
                        <label className="wizard-question" htmlFor="mood">Hi there! What's your emoodji for this moment?</label>
                        <input className="mood-search" type="text" id = "mood" value = {moodInput} onChange = {handleMoodInput} placeholder="eMoodji search..."/>
                    </div>
                    
                    <div className="parent-emoji">
                        {renderedFilteredEmojis}
                    </div>

                    <div>
                        <p className="warning-msg1">* To deselect, click your selected emoodj?? again *</p>
                    </div>

                    <div className="button-container">
                        <button className="wizard-button" type = "button" onClick={next}>Next</button>
                    </div>
                </div>
        </form>
    )
}