import React from "react";
import twitterbefore from "./twitterbefore.png";
import facebookbefore from "./facebookbefore.png";
import githubbefore from "./githubbefore.png";
import twitterhover from "./twitterhover.png";
import facebookhover from "./facebookhover.png";
import githubhover from "./githubhover.png";


function Footer(props) {
    return <footer>
        <div className="icons">
            <img id="twitter" src={twitterbefore}/>
            <img id="facebook" src={facebookbefore}/>
            <img id="github" src={githubbefore}/>
        </div>
        <p className="copyright">Copyright © Your Website 2019</p>
    </footer>
}

export default Footer;