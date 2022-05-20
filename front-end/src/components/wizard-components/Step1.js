import React, { useState, useEffect } from "react";
import axios from "axios";

const ACCESS_KEY = process.env.REACT_APP_API_KEY;

export default function Step1(props) {
    const {entry, handleText, next} = props;
    //const [emojis, setEmojis] = useState([]);
    const [selectedEmojis, setSelectedEmojis] = useState([]);

    // let searchEmojisAPI = `https://emoji-api.com/emojis?search=${entry.mood}&access_key=${ACCESS_KEY}`;

    // useEffect (() => {
    //     axios(`https://emoji-api.com/emojis?access_key=${ACCESS_KEY}`)
    //         .then(res => {
    //             console.log(res.data)
    //             setEmojis(res.data);
    //         })
    //         .catch(error => console.log(error))
    // }, []);

    // const requestSearchEmojisAPI = axios.get(searchEmojisAPI);
    // requestSearchEmojisAPI.then(res => setSelectedEmojis(res.data))
    //                       .catch(error => console.log(error))

    // const displayEmojis = emojis.filter((el, i) => i < 10).map((el, i) => {
    //     return(
    //         <li key = {i}>
    //             {el.character}
    //         </li>
    //     )
    // });

    useEffect (() => {
        axios(`https://emoji-api.com/emojis?search=${entry.mood}&access_key=${ACCESS_KEY}`)
            .then(res => {
                setSelectedEmojis(res.data);
                //console.log(res.data)
            })
            .catch(error => console.log(error))
    }, [entry.mood]);

    const displaySelectedEmojis = selectedEmojis.filter((el, i) => i < 10).map((el, i) =>{
        return(
            <li key = {i} style = {{fontSize: "40px"}}>{el.character}</li>
        )
    })

    /*
    // Need to Fix:
    const replaceSearchedText = (moodText) => {
        for(let e of selectedEmojis) {
            moodText = entry.mood;
            return entry.mood = e.slug;
        }
    }

    console.log(replaceSearchedText(entry.mood));
    */

    return(
        <form>
            <div>
                <h2>Hi, There!</h2>
                <label htmlFor="mood">What's your emoodji for this moment?</label>
                <input type="text" id = "mood" value = {entry.mood ?? ""} onChange = {handleText} />
                <br />
                {displaySelectedEmojis}
                <button type = "button" onClick={next}>Next</button>
            </div>
        </form>
    )
}