import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight,faPhoneAlt,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll'


import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    RedditShareButton,
    RedditIcon,
    LinkedinShareButton,
    LinkedinIcon,
  } from "react-share";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row roww">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <h4 className="footersections">About</h4>
                        <div className="d-flex">
                            <row><p>I Like web development and working on new techologies. Creating projects to get hands on experience and to implement my learnings.
                                also to meet new people and learn from them :)</p>
                                <p>Location - Mumbai, India</p>
                            </row>  
                        </div>
                        <div className="pt-5 social d-flex">
                        <FacebookShareButton
                            url={"https://www.facebook.com/shubham.nachare.9"}
                            quote={"FullStack Developer"}
                            hashtag="#javascript"
                        >
                            <FacebookIcon className="mx-3" size={36} />
                        </FacebookShareButton>
                        <TwitterShareButton
                            url={"https://twitter.com/Shubham40760018"}
                            quote={"FullStack Developer"}
                            hashtag="#javascript"
                        >
                            <TwitterIcon className="mx-3" size={36} />
                        </TwitterShareButton>
                        <RedditShareButton
                            url={""}
                            quote={"FullStack Developer"}
                            hashtag="#javascript"
                        >
                            <RedditIcon className="mx-3" size={36} />
                        </RedditShareButton>
                        <LinkedinShareButton
                            url={"https://www.linkedin.com/in/shubham-nachare-653024146/"}
                            quote={"FullStack Developer"}
                            hashtag="#javascript"
                        >
                            <LinkedinIcon className="mx-3" size={36} />
                        </LinkedinShareButton>
                        </div>
                    </div>
                    <div className="col-lg-3 offset-md-1 col-md-2 col-sm-6">
                        <h4 className="footersections">Links</h4>            
                            <ul className="list-unstyled">                          
                                <li><Link smooth={true} duration={1000} to="Home" className="footer-nav"><FontAwesomeIcon className="me-2 NavIconFooter" icon={faLongArrowAltRight}/>Home</Link></li>                               
                                <li><Link smooth={true} duration={1000} to="About" className="footer-nav"><FontAwesomeIcon className="me-2 NavIconFooter" icon={faLongArrowAltRight}/>About Me</Link>  </li>                             
                                <li><Link smooth={true} duration={1000} to="Services" className="footer-nav"><FontAwesomeIcon className="me-2 NavIconFooter" icon={faLongArrowAltRight}/>Services</Link>     </li>                          
                                <li><Link smooth={true} duration={1000} to="Experience" className="footer-nav"><FontAwesomeIcon className="me-2 NavIconFooter" icon={faLongArrowAltRight}/>Experience</Link></li>                                                           
                                <li><Link smooth={true} duration={1000} to="Portfolio" className="footer-nav"><FontAwesomeIcon className="me-2 NavIconFooter" icon={faLongArrowAltRight}/>Portfolio</Link></li>
                                <li><Link smooth={true} duration={1000} to="Contacts"  className="footer-nav"><FontAwesomeIcon className="me-2 NavIconFooter" icon={faLongArrowAltRight}/>Contacts</Link></li>
                            </ul>
                    </div>
                    <div className="col-lg-4 col-md-5 col-sm-6 align-items-right">
                        <h4 className="footersections">Have a Question?</h4>
                        <ul className="list-unstyled">
                            <li><a className="contactlink"><FontAwesomeIcon className="NavIconFootercon" icon={faPhoneAlt}/>+91 9137604629</a></li>
                            <li><a className="contactlink"><FontAwesomeIcon className="NavIconFootercon" icon={faEnvelope}/>Shubhamnachare08@outlook.com</a></li>
                        </ul>
                    </div>
                    <p className="copy">
                    Copyright &copy; {new Date().getFullYear()} | All Rights Reserved
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
