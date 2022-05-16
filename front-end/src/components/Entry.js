import {Link} from "react-router-dom"
export default function Entry ({entry}){
    let {id, date_created, mood, interest, activity} = entry;
    return(
        <div>
            <div>
                <Link to={`/entries/${id}`}>
                    <h3>Date Created: {date_created}</h3>
                    <h3>Mood: {mood}</h3>
                    <h3>Interest: {interest}</h3>
                    <h3>Activity: {activity}</h3>                
                </Link>
            </div>
        </div>
    )
}