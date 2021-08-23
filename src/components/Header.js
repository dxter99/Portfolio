import React from 'react'
import Typed from 'react-typed';

const Header = () => {
    return (
        <div id="Home" className="header-wrapper">
            <div className="main-info">
                <h1>
                    Shubham Nachare
                </h1>
                <Typed className="typed-text" strings={["Web Design", "Web Development", "Web Api", ".Net FrameWork"]} typeSpeed={60} backSpeed={90} loop />
                <a href="#" className="btn-main-offer">Contact Me</a>
            </div>
        </div>
    )
}

export default Header
