import React from 'react'
import logo from '../Logo2.PNG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div class="container">
                <a class="navbar-brand" href="#"><img className="logo" src={logo} alt='logo' /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "#0099ff" }} />
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item active">
                            <Link smooth={true} to="Home" className="nav-link" aria-current="page" href="#">Home
                            <span className="sr-only">(current)</span></Link>    
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="About" offset={-100} className="nav-link" href="#">About me</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="Services" offset={-100} className="nav-link" href="#">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="Experience" offset={-100} className="nav-link" href="#">Experience</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="Portfolio" offset={-100} className="nav-link" href="#">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="Contacts" offset={-95} className="nav-link" href="#">Contacts</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar
