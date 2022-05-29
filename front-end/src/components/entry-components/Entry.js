import {Link} from "react-router-dom";
import { format, parseISO } from "date-fns";

export default function Entry ({entry}){
    console.log(entry);

    let formattedDate = format(parseISO(entry.date_created), "MM/dd/yyyy hh:mm aaaaa'm'");
    return(
        <div>
            <div>
                <Link to={`/entries/${entry.id}`}>
                    <h3>id:{ entry.id }</h3>
                    <h3>Created At: {formattedDate}</h3>
                    <h3>Mood: {entry.mood}</h3>
                    <h3>Interest: {entry.interest}</h3>
                    <h3>Activity: {entry.activity}</h3>                
                </Link>
            </div>
        </div>
    )
}