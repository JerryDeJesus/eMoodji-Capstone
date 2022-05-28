import { useState } from "react"
import hugIcon from "../../assets/icon-interests/hug.png"
import massageIcon from "../../assets/icon-interests/massage.png"
import musicIcon from "../../assets/icon-interests/music.png"
import paintIcon from "../../assets/icon-interests/paint.png"
import petsIcon from "../../assets/icon-interests/pets.png"
import yogaIcon from "../../assets/icon-interests/yoga.png"

export default function Step2(props) {
    const {progressBarComponent, entry, setEntry, next, back} = props;
    const [isActiveClick, setIsActiveClick] = useState(false);
    
    const handleSelectInterest = (e) => {
        if(!isActiveClick) {
            e.target.style.border = "8px solid white";
            e.target.style.borderRadius = "50px";
            setEntry({...entry, interest: e.target.alt});
            setIsActiveClick(!isActiveClick);
        } else {
            e.target.style.border = "none";
            e.target.style.borderRadius = "none";
            setEntry({...entry, interest: ""});
            setIsActiveClick(!isActiveClick);
        }

    }

    return(
        <form className="parent-container">
            <div className="float-right">
                {progressBarComponent}
            </div>

            <div className="float-left">
                <p className="wizard-question">Tell me, what's your interest?</p>

                <div className="interest-container">
                    <img src={hugIcon} style={{width:"100px"}} onClick={(e)=> handleSelectInterest(e)} alt="hug" className="interest-hover" />
                    <img src={massageIcon} style={{width:"100px"}} onClick={(e)=> handleSelectInterest(e)} alt="acupuncture" className="interest-hover" />
                    <img src={musicIcon} style={{width:"100px"}} onClick={(e)=> handleSelectInterest(e)} alt="music" className="interest-hover" />
                    <img src={paintIcon} style={{width:"100px"}} onClick={(e)=> handleSelectInterest(e)} alt="art" className="interest-hover" />
                    <img src={petsIcon} style={{width:"100px"}} onClick={(e)=> handleSelectInterest(e)} alt="pet" className="interest-hover" />
                    <img src={yogaIcon} style={{width:"100px"}} onClick={(e)=> handleSelectInterest(e)} alt="yoga" className="interest-hover" />
                </div>
                
                <div className="button-container step">
                    <button className="wizard-button" type = "button" onClick={back}>Back</button> 
                    <button className="wizard-button" type = "button" onClick={next}>Next</button>
                </div>
            </div>
        </form>
    )
}