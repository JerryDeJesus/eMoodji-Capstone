import fbLogo from "../assets/logo/facebook_icon_white.png";
import twtLogo from "../assets/logo/white_twitter_icon.png";
import igLogo from "../assets/logo/instagram_white_icon.png";
import ghLogo from "../assets/logo/github_white_icon.png";

export default function Footer () {
    return (
        <nav className='footer'>
            <div className="footer-logo-container">
                <a href='https://instagram.com' target='_blank' rel='noreferrer noopener'><img className="footer-logo" style={{'width':'32px'}} src={igLogo} alt='ig'/></a>
                <a href='https://facebook.com' target='_blank' rel='noreferrer noopener'><img className="footer-logo" style={{'width': '50px'}} src={fbLogo} alt='fb'/></a>
                <a href='https://twitter.com' target='_blank' rel='noreferrer noopener'><img className="footer-logo" style={{'width': '53px','paddingTop':'5px'}} src={twtLogo} alt='twt'/></a>
                <a href='https://github.com' target='_blank' rel='noreferrer noopener'><img className="footer-logo" style={{'width':'33px', 'paddingBottom':'3px'}} src={ghLogo} alt='gh'/></a>
            </div>
        
            <div className="copyright">Copyright 2022</div>
        </nav>
    )
};

