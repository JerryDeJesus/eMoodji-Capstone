import { useEffect, useState } from "react";
import interestIcons from "../../data/interestIcons";
import Loading from "../Loading";

export default function Step2(props) {
    const {progressBarComponent, entry, setEntry, next, back} = props;
    const [disabled, setDisabled] = useState(true);
    const [loadingStatus, setLoadingStatus] = useState(true);
    
    useEffect (() => {
        if(entry.interest) setDisabled(false)
        setLoadingStatus(false);
    },[entry.interest]);

    const handleSelectInterest = (e) => {
            setEntry({...entry, interest: e.target.alt});
            //doesnt need to be here for some reason?
            // setDisabled(false);
    };

    const displayInterestIcons = interestIcons.map(({id, imgSrc, alt}) => {
        return <img className={alt === entry.interest ? "interest-img active" : "interest-img"} key = {id} src = {imgSrc} alt = {alt} onClick={(e)=> handleSelectInterest(e)} />
    });

    return(
        <form className="parent-container">
            <div className="progress-bar">
                {progressBarComponent}
            </div>

            <div className="wizard-container">
                <p className="wizard-question">Which interest looks best right about now?</p>

                <div className="interest-container">
                    {loadingStatus ? <Loading/> : displayInterestIcons}
                </div>

                <div className="button-container step">
                    <button className="wizard-button" type = "button" onClick={back}>Back</button> 
                    <button className="wizard-button" type = "button" onClick={next} disabled={disabled}>Next</button>
                </div>
            </div>
        </form>
    )
}