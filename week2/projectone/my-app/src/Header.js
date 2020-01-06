import React from "react";
import homeBg from "./home-bg.jpg";
import Navbar from "./Navbar";

function Header() {
    return(
        <div>
        <Navbar />
        <header id="tophead">
            <div id="headercover"></div>
            <div id="headerspacer">
                <h1>Clean Blog</h1>
                <h3>A Blog Theme by Start Bootstrap</h3>
            </div>
        </header>
        </div>
    )
}



export default Header;