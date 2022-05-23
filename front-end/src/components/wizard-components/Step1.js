import React, { useState, useEffect } from "react";
import axios from "axios";

const ACCESS_KEY = process.env.REACT_APP_API_KEY;

export default function Step1(props) {
    const {entry, setEntry, next} = props;
    const [emojis, setEmojis] = useState([]);
    const [moodInput, setMoodInput] = useState("");

    useEffect (() => {
        axios(`https://emoji-api.com/emojis?access_key=${ACCESS_KEY}`)
            .then(res => {
                setEmojis(res.data);
            })
            .catch(error => console.log(error))
        
    }, []);

    const handleSelectEmoji = (emoji) => {
        setEntry({...entry, mood : emoji.character});
    }

    const handleMoodInput = (e) => {
        setMoodInput(e.target.value);
    }

    const filteredEmojis = emojis.filter((el, i) => {
        if(i > 10 && moodInput.length === 0) {
            return false;
        } else {
            return el.unicodeName.includes(moodInput);
        }
    })

    const renderedFilteredEmojis = filteredEmojis.map((el, i) => {
        return(
            <li key = {i} onClick = {()=>handleSelectEmoji(el)}>
                {el.character}
            </li>
        )
    })

    return(
        <form>
            <div>
                <h2>Hi, There!</h2>
                <label htmlFor="mood">What's your emoodji for this moment?</label>
                <input type="text" id = "mood" value = {moodInput} onChange = {handleMoodInput} />
                <br />
                {renderedFilteredEmojis}
                <button type = "button" onClick={next}>Next</button>
            </div>
        </form>
    )
}