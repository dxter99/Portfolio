import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-scroll'
import resume from '../Resume/Resume.pdf'

const Header = () => {
    return (
        <div id="Home" className="header-wrapper">
                <div className="main-info">
                    <canvas></canvas>
                    <span class="subheading">Hey! I am</span>
                    <h1>
                        Shubham Nachare
                    </h1>
                    <h2 className="typed-h2">I Like <Typed className="typed-text" strings={["Web Designing", "Web Development","DevOps"]} typeSpeed={60} backSpeed={90} loop/></h2>
                    <span className="button-wrapper">
                    <Link smooth={true} duration={500}s to="Contacts" offset={-95} className="btn-main-offer">Contact Me</Link>
                    <a smooth={true} rel="noopener noreferrer" target="_blank" duration={500}s href={resume} offset={-95} className="btn-main-resume">Resume</a>
                    </span>
                </div>
        </div>
    )
}

export default Header
