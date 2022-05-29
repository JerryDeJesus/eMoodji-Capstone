import { useState } from "react";
import interestIcons from "../../data/interestIcons";

export default function Step2(props) {
    const {progressBarComponent, entry, setEntry, next, back} = props;
    const [isActiveClick, setIsActiveClick] = useState(false);
    
    const handleSelectInterest = (e) => {
        if(!isActiveClick) {
            e.target.style.transform = "scale(1.8)";
            setEntry({...entry, interest: e.target.alt});
            setIsActiveClick(!isActiveClick);
        } else {
            e.target.style.transform = "none";
            setEntry({...entry, interest: ""});
            setIsActiveClick(!isActiveClick);
        }
    }

    const displayInterestIcons = interestIcons.map(({id, imgSrc, alt}) => {
        return <img className="interest-img" key = {id} src = {imgSrc} alt = {alt} onClick={(e)=> handleSelectInterest(e)} />
    })

    return(
        <form className="parent-container">
            <div className="float-right">
                {progressBarComponent}
            </div>

            <div className="float-left">
                <p className="wizard-question">Tell me, what's your interest?</p>

                <div className="interest-container">
                    {displayInterestIcons}
                </div>
                
                <div className="button-container step">
                    <button className="wizard-button" type = "button" onClick={back}>Back</button> 
                    <button className="wizard-button" type = "button" onClick={next}>Next</button>
                </div>
            </div>
        </form>
    )
}