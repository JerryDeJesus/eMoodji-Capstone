import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function StepSubmit(props) {
    const {entry} = props;
    const navigate = useNavigate();
    const listItems = Object.entries(entry).map(([key, value]) => {
        return (
            <li key = {key}>
                <h3>{key}:</h3>
                <p>{value}</p>
            </li>
        )
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`${API}/entries`, entry)
            .then(res=> navigate("/entries"))
            .catch(error=> console.log(error))
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <ul>{listItems}</ul>
                <button>Submit</button>
            </form>
        </div>
    )
}