import axios from "axios";
import { useNavigate } from "react-router-dom";
import WizardModal from "./WizardModal.js";
import React, { useState } from "react";
import FlipCard from "../FlipCard.js";

const API = process.env.REACT_APP_API_URL;

export default function StepSubmit(props) {
    const {entry} = props;
    const navigate = useNavigate();
    const userEntriesLink = `/users/${localStorage.getItem('userid')}/entries`;

    const listItems = Object.entries(entry).map(([key, value], i) => {
        return (
            <FlipCard key = {i} value = {value} k = {key} />
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
        localStorage.setItem("tempEntryMood", entry.mood);
        localStorage.setItem("tempEntryInterest", entry.interest);
        localStorage.setItem("tempEntryActivity", entry.activity);
        axios.post(`${API}/entries`, entry)
             .catch(error=> console.log(error))
    };

    const checkUserAccount = () => {
        if(localStorage.getItem('userid')){
            return (
                <form onSubmit={handleSubmitForSignIn} >
                    <div>
                        <button className="wizard-button">Submit</button>
                    </div>
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

            <div className="card-container">
                {listItems}
            </div>
            
            {checkUserAccount()}
        </div>
    )
}