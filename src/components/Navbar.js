import React,{useState} from 'react'
// import logo from '../Logo2.PNG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll'

const Navbar = () => {
    const[navbar,setNavbar] = useState(false);
    const[comp,setComp] = useState(true);
    const changeBackground = () =>{
        if(window.scrollY >= 680){
            console.log(comp,"Link")
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <html>
        <body>
        <nav className={navbar ? 'navbar navbar-expand-lg fixed-top active' : 'navbar navbar-expand-lg fixed-top'}>
            <div className="container">
                <a className="navbar-brand" href="#">Shubham Nachare</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "#0099ff" }} />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">                        
                        <li className="nav-item active">
                            <Link smooth={true} duration={1000} to="Home" className="nav-link" aria-current="page" href="#">Home
                            <span className="sr-only">(current)</span></Link>    
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} duration={500} to="About" offset={-100} className="nav-link" href="#">About me</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} duration={500} to="Services" offset={-100} className="nav-link" href="#">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} duration={500} to="Experience" offset={-100} className="nav-link" href="#">Experience</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} duration={500} to="Portfolio" offset={-100} className="nav-link" href="#">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} duration={500} to="Contacts" offset={-95} className="nav-link" href="#">Contact</Link>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav>
        </body>
        </html>
    );
}

export default Navbar
