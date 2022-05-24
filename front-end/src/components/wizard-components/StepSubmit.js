import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import WizardModal from "./WizardModal.js";

const API = process.env.REACT_APP_API_URL;

export default function StepSubmit(props) {
    const {entry} = props;
    console.log(entry);
    const navigate = useNavigate();
    const userEntriesLink = `/users/${localStorage.getItem('userid')}/entries`;
    const listItems = Object.entries(entry).map(([key, value]) => {
        return (
            <li key = {key}>
                <h3>{key}:</h3>
                <p>{value}</p>
            </li>
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
                    {/* <button>Create An Account</button> */}
                </form>)
        }
    }

    return (
        <div className="parent-container"> 
            <ul>{listItems}</ul>
            {/* <WizardModal /> */}
            {checkUserAccount()}

        </div>
    )
}