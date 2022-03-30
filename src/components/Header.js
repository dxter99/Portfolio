import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-scroll'

const Header = () => {
    return (
        <div id="Home" className="header-wrapper">
                <div className="main-info">
                    <canvas></canvas>
                    <span class="subheading">Hey! I am</span>
                    <h1>
                        Shubham Nachare
                    </h1>
                    <h2 className="typed-h2">I Like <Typed className="typed-text" strings={["Web Design", "Web Development","DevOps"]} typeSpeed={60} backSpeed={90} loop/></h2>
                    <Link smooth={true} duration={500} to="Contacts" offset={-95} className="btn-main-offer">Contact Me</Link>
                </div>
        </div>
    )
}

export default Header
