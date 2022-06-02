import { Link } from "react-router-dom";
import SignedInHomePage from "../components/SignedInHomePage";

export default function Home() {
    console.log("user id: ",localStorage.getItem("userid"));
    if(localStorage.getItem("userid")){
        return(
            <SignedInHomePage />
        )
    }else{
        return (
            <div className="home">
                {/* <h1>Logged out Home Page</h1> */}
                {/* <div className='homeBxGrid'> */}
                     {/* <div className='outHomeBox'> */}
                     <div className="banner-container">
                        <h1 id='descript'><p>Practice mindfulness with eMoodjí! Reflect on your emotions and receive helpful therapeutic recommendations for relaxing activities/events going on near you! </p>🥰🤪😂🥳😬🙃😎🤩</h1>
                     </div>
                       <div className='inHomeBox'>
                        <Link id='hbNewEntry' to="/wizard" ><button className='newEntryB' style={{'width':'200px', 'height': '50px', 'border-radius': '10px', 'margin-bottom': '0px','background-color': 'rgb(153, 186, 221)', 'color': 'white', 'font-weight': '700', 'font-size': '25px', 'border': 'none'}} > New Entry </button></Link><br />
                        <br /><Link id='hbLogIn' to="/loginpage" ><button className='newEntryB' style={{'width':'200px', 'height': '50px', 'border-radius': '10px', 'margin-top': '20px', 'background-color': 'rgb(153, 186, 221)', 'color': 'white', 'font-weight': '700', 'font-size': '25px', 'border': 'none'}} > Log In </button></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link id='hbCrAcc' to="/createaccount" ><button className='newEntryB' style={{'width':'200px', 'height': '50px', 'border-radius': '10px', 'background-color': 'rgb(153, 186, 221)', 'color': 'white', 'font-weight': '700', 'font-size': '25px', 'border': 'none'}} > Create Account </button></Link>
                       </div> 
                    {/* </div> */}
                {/* </div> */}
            </div>
        )
    }
};
