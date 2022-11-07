import React from "react";
import ReactLoading from 'react-loading';

export default function Loading () {
    return(
        <div id="loading-container">
            <ReactLoading
                type='spin'
                color="#73a0d0"
                height="50px"
                width="50px"
                className="loading"
            />
        </div>
    )
}