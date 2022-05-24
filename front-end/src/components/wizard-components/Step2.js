import hugIcon from "../../assets/icon-interests/hug.png"
import massageIcon from "../../assets/icon-interests/massage.png"
import musicIcon from "../../assets/icon-interests/music.png"
import paintIcon from "../../assets/icon-interests/paint.png"
import petsIcon from "../../assets/icon-interests/pets.png"
import yogaIcon from "../../assets/icon-interests/yoga.png"

export default function Step2(props) {
    const {progressBarComponent, entry, setEntry, next, back} = props;
    
    const handleSelectInterest = (e) => {
        setEntry({...entry, interest: e})
    }

    return(
        <form>
            <div>
                <div>
                    {progressBarComponent}
                </div>

                <div>
                    <h2>Tell me what's your interest</h2>

                    <div>
                        <img src={hugIcon} style={{width:"100px"}} onClick={(e)=> handleSelectInterest(e.target.alt)} alt="hug"/>
                        <img src={massageIcon} style={{width:"100px"}} onClick={(e)=> handleSelectInterest(e.target.alt)} alt="acupuncture"/>
                        <img src={musicIcon} style={{width:"100px"}} onClick={(e)=> handleSelectInterest(e.target.alt)} alt="music"/>
                        <img src={paintIcon} style={{width:"100px"}} onClick={(e)=> handleSelectInterest(e.target.alt)} alt="art"/>
                        <img src={petsIcon} style={{width:"100px"}} onClick={(e)=> handleSelectInterest(e.target.alt)} alt="pet"/>
                        <img src={yogaIcon} style={{width:"100px"}} onClick={(e)=> handleSelectInterest(e.target.alt)} alt="yoga"/>
                    </div>
                    
                    <div>
                        <button type = "button" onClick={back}>Back</button> 
                        <button type = "button" onClick={next}>Next</button>
                    </div>
                </div>
            </div>
        </form>
    )
}