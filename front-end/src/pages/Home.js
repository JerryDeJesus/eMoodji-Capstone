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

                     <div className="banner-container">
                        <h1 id='descript'><p>Practice mindfulness with eMoodjí! Reflect on your emotions and receive helpful therapeutic recommendations for relaxing activities/events going on near you! </p>🥰🤪😂🥳😬🙃😎🤩</h1>
                     </div>

                       <div className='inHomeBox'>
                        <Link id='hbNewEntry' to="/wizard" >
                            <button className='newEntryB' style={{'width':'200px', 'height': '50px', 'borderRadius': '10px', 'marginBottom': '0px','backgroundColor': 'rgb(153, 186, 221)', 'color': 'white', 'fontWeight': '700', 'fontSize': '25px', 'border': 'none'}} > New Entry </button>
                        </Link>

                        <br /><br />

                        <Link id='hbLogIn' to="/loginpage" >
                            <button className='newEntryB' style={{'width':'200px', 'height': '50px', 'borderRadius': '10px', 'marginTop': '20px', 'backgroundColor': 'rgb(153, 186, 221)', 'color': 'white', 'fontWeight': '700', 'fontSize': '25px', 'border': 'none'}} > Log In </button>
                        </Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <Link id='hbCrAcc' to="/createaccount" >
                            <button className='newEntryB' style={{'width':'200px', 'height': '50px', 'borderRadius': '10px', 'backgroundColor': 'rgb(153, 186, 221)', 'color': 'white', 'fontWeight': '700', 'fontSize': '25px', 'border': 'none'}} > Create Account </button>
                        </Link>
                       </div> 
            </div>
        )
    }
};
