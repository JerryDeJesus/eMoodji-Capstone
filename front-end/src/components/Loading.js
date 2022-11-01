import React from "react";
import ReactLoading from 'react-loading';

export default function Loading () {
    return(
        <div>
            <ReactLoading
                type='spin'
                color="#99badd"
                height="50px"
                width="50px"
                className="loading"
            />
        </div>
    )
}