import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { format, parseISO } from "date-fns";
// import Flippy, {FrontSide, BackSide} from "react-flippy";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {Doughnut} from "react-chartjs-2";

const API = process.env.REACT_APP_API_URL;
const activitiesData = require('../data/activities.json');
ChartJS.register(ArcElement, Tooltip, Legend);

export default function UserEntries (){
    const [userEntries, setUserEntries] = useState([]);

    let {id} = useParams();
    let navigate = useNavigate();
    
    useEffect(()=>{
        axios.get(`${API}/users/${id}/entries`)
        .then((res)=> {
            if(res.data){
                setUserEntries(res.data)
            } else {
                navigate("/not-found")
            }
        })
    }, [id, navigate]);

    // const cardStyle = {
    //     width: "375px", 
    //     height: "375px",
    //     margin: "20px",
    //     textAlign: "center",
    // }

    // const frontStyle = {
    //     borderRadius: "20px",
    //     backgroundColor: "rgb(153, 186, 221)",
    //     color: "white",
    //     fontSize: "25px",
    //     fontFamily: "sans-serif"
    // }

    // const backStyle = {
    //     boxShadow: "4px 0.7px 20px 3px rgb(153, 186, 221)",
    //     borderRadius: "20px",
    //     color: "rgb(153, 186, 221)",
    //     fontSize: "20px",
    //     fontFamily: "sans-serif",
    //     display: "flex",
    // }
    
    const emojiStyle = {
        fontSize: "180px"
    };

    let displayUserEntries = userEntries.map((entry, index)=>{
        let formattedDate = format(parseISO(entry.date_created), "MM/dd/yyyy hh:mm aaaaa'm'");
        let linkToEntry = `/entries/${entry.id}`;
        let resourceLink = "";
        let resourceDescription = "";
        let resourceArray = entry.interest && entry.activity ? activitiesData[entry.interest] : null;
        for(let each of resourceArray){
            if(each.name === entry.activity){
                resourceLink = each.website;
                resourceDescription = each.description;
            }
        }
        return(
            <div className='usEntry' key = {index} >
                {/* <Flippy 
                key={index}
                flipOnClick = {true}
                flipDirection = "horizontal"
                style={cardStyle}
                >
                    <FrontSide style = {frontStyle}>
                        <br/>
                        <h2>{formattedDate}</h2>
                        <h1 style={emojiStyle}>{entry.mood}</h1>
                    </FrontSide>
                    
                    <BackSide style={backStyle}>
                        <div className="entry-card-back">
                            <h3>{entry.interest.toUpperCase()}</h3>
                           
                            <h3><a href={resourceLink} target="_blank" rel="noreferrer noopener">{entry.activity}</a></h3>
                           
                            <h4>{resourceDescription}</h4>
                        </div>
                    </BackSide>
                </Flippy> */}
                
                <br />
            </div>
        )
    })

    let emojis = [];
    let emojiCount = {};
    
    let emojiGrabber = userEntries.map((entry) => {
        emojis.push(entry.mood);    
    })

    let emojiCounter = emojis.map((emojis) => {
        for(let each of emojis){
            if(emojiCount[each]){
                emojiCount[each]++;
            }else{
                emojiCount[each] = 1;
            }
        }
    })
    let emojiNums = Object.values(emojiCount);
    console.log(emojiCount);
    let doughnutChart = 
        <div id="doughnut-chart"><Doughnut 
        data={{
            labels:[...Object.keys(emojiCount)],
            datasets:[
                {
                    label: '# of Entries',
                    data: [...emojiNums],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.3)',
                        'rgba(54, 162, 235, 0.3)',
                        'rgba(255, 206, 86, 0.3)',
                        'rgba(75, 192, 192, 0.3)',
                        'rgba(153, 102, 255, 0.3)',
                        'rgba(255, 159, 64, 0.3)',
                        'rgba(42, 23, 247, 0.3)',
                        'rgba(35, 230, 193, 0.3)',
                        'rgba(113, 132, 167, 0.3)',
                        'rgba(61, 3, 73, 0.3)',
                        'rgba(214, 46, 133, 0.3)',
                        'rgba(128, 73, 136, 0.3)',
                        'rgba(150, 26, 152, 0.3)',
                        'rgba(228, 138, 18, 0.3)',
                        'rgba(185, 200, 254, 0.3)',
                        'rgba(179, 253, 13, 0.3)',
                        ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(42, 23, 247, 1)',
                        'rgba(35, 230, 193, 1)',
                        'rgba(113, 132, 167, 1)',
                        'rgba(61, 3, 73, 1)',
                        'rgba(214, 46, 133, 1)',
                        'rgba(128, 73, 136, 1)',
                        'rgba(150, 26, 152, 1)',
                        'rgba(228, 138, 18, 1)',
                        'rgba(185, 200, 254, 1)',
                        'rgba(179, 253, 13, 1)',
                        ],
                    borderWidth: 1,
                }
            ],   
        }}
        options={{
            plugins:{
                legend:{
                    labels: {
                        font:{
                            size: 35,
                        }
                    }
                }
            }
        }}

        /></div>;
    return(
    <div id="entriesPageContainer">
        <div className="sUE">
            {userEntries.length ? displayUserEntries : "No Entries"}
        </div>
            {doughnutChart}
    </div>
    )
}