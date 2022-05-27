import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import WizardModal from "./WizardModal.js";

const API = process.env.REACT_APP_API_URL;

export default function StepSubmit(props) {
    const {entry} = props;
    const navigate = useNavigate();
    const userEntriesLink = `/users/${localStorage.getItem('userid')}/entries`;
    const listItems = Object.entries(entry).map(([key, value]) => {
        return (
            <div key = {key} className="display-entry-result">
                <div className="flip-card-front">
                    <h3>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
                </div>
                <div className="flip-card-back">
                    <p>{value}</p>
                </div>
            </div>
        )
    });
    const handleSubmitForSignIn = (e) => {
        e.preventDefault();

        axios.post(`${API}/entries`, entry)
            .then(res=> navigate(userEntriesLink))
            .catch(error=> console.log(error))
    };

    const handleSubmitForNotSignIn = (e) => {
        e.preventDefault();
        //add entry to localstorage for navigating???
        localStorage.setItem("tempEntryMood", entry.mood);
        localStorage.setItem("tempEntryInterest", entry.interest);
        localStorage.setItem("tempEntryActivity", entry.activity);
        // console.log(localStorage.getItem("tempEntryActivity"));
        axios.post(`${API}/entries`, entry)
             .catch(error=> console.log(error))
    };

    const checkUserAccount = () => {
        if(localStorage.getItem('userid')){
            return (
                <form onSubmit={handleSubmitForSignIn} >
                    <button>Submit</button>
                </form>)
        } else {
            return (
                <form onSubmit={handleSubmitForNotSignIn} >
                    <WizardModal />
                </form>)
        }
    }

    return (
        <div> 
            <p className="wizard-question">Entry</p>

            <div className="display-entry-result-container">
                {listItems}
            </div>

            {checkUserAccount()}
        </div>
    )
}