// import { Link } from 'react-router-dom';

import fbLogo from "../assets/logo/facebook_icon_white.png";
import twtLogo from "../assets/logo/white_twitter_icon.png";
import igLogo from "../assets/logo/instagram_white_icon.png";
import ghLogo from "../assets/logo/github_white_icon.png";

export default function Footer () {
    return (
        <nav className='footer'>
            
            <a id='fb' href='https://facebook.com' target='_blank' rel='noreferrer noopener'><img src={fbLogo} alt='fb' style={{'width': '27.5px'}}/></a>
            <a id='twt' href='https://twitter.com' target='_blank' rel='noreferrer noopener'><img src={twtLogo} alt='twt' style={{'width': '30px'}}/></a>
            <a id='ig' href='https://instagram.com' target='_blank' rel='noreferrer noopener'><img src={igLogo} alt='ig' style={{'width': '17.5px'}}/></a>
            <a id='gh' href='https://github.com' target='_blank' rel='noreferrer noopener'><img src={ghLogo} alt='gh' style={{'width': '17.5px'}}/></a>
        
            <div id='cr'>Copyright 2022</div>
        </nav>    
    )
};