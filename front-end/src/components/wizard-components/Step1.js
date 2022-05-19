import React, { useEffect } from "react";
import axios from "axios";

export default function Step1(props) {
    const {entry, handleText, next} = props;

    useEffect (() => {
        axios("https://emoji-api.com/emojis?access_key=744076d35cc355d8260e77156e70486fed3d0694")
            .then(res => console.log(res.data))
    })

    return(
        <form>
            <div>
                <h2>Hi, There!</h2>
                <label htmlFor="mood">What's your emoodji for this moment?</label>
                <input type="text" id = "mood" value = {entry.mood ?? ""} onChange = {handleText} />
                <br />
                <button type = "button" onClick={next}>Next</button>
            </div>
        </form>
    )
}