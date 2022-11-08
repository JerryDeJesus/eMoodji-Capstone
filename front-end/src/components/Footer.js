import fbLogo from "../assets/logo/fb_blue_icon.png";
import twtLogo from "../assets/logo/twitter_blue_icon.png";
import igLogo from "../assets/logo/insta_blue_icon.png";
import ghLogo from "../assets/logo/github_blue_icon.png";
import LiLogo from "../assets/logo/linkedin-blue-icon.png";

export default function Footer () {
    return (
        <nav className='footer'>
            <div className="footer-logo-container">
                <a href='https://instagram.com' target='_blank' rel='noreferrer noopener'><img className="footer-logo" style={{'width':'32px'}} src={igLogo} alt='ig'/></a>
                <a href='https://facebook.com' target='_blank' rel='noreferrer noopener'><img className="footer-logo" style={{'width': '50px'}} src={fbLogo} alt='fb'/></a>
                <a href='https://twitter.com' target='_blank' rel='noreferrer noopener'><img className="footer-logo" style={{'width': '53px','paddingTop':'5px'}} src={twtLogo} alt='twt'/></a>
                <a href='https://github.com' target='_blank' rel='noreferrer noopener'><img className="footer-logo" style={{'width':'33px'}} src={ghLogo} alt='gh'/></a>
            </div>
            <div className="dev-links">Check out the developer's links here: 
                <a href='https://github.com/JerryDeJesus' target='_blank' rel='noreferrer noopener'><img className="footer-logo" style={{'width':'33px'}} src={ghLogo} alt='gh'/></a>
                <a href='https://linkedin.com/in/jerrydejesus/' target='_blank' rel='noreferrer noopener'><img className="footer-logo" style={{'width':'33px'}} src={LiLogo} alt='gh'/></a>
            </div>
            <div className="copyright">Copyright 2022</div>
        </nav>
    )
};

