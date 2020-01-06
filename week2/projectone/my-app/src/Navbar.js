import React from "react";

function Navbar(props) {

    return (
        <div id="navbar">
            <a href="#" id="stbtsrp">Start Bootstrap</a>
            <span id="rightnavcontainer">
                <a href="#" className="navbuttons">HOME</a>
                <a href="#" className="navbuttons">ABOUT</a>
                <a href="#" className="navbuttons">SAMPLE POST</a>
                <a href="#" className="navbuttons">CONTACT</a>
            </span>
        </div>
    )
}


export default Navbar;