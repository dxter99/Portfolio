import React from 'react';
import photo from '../Personal.jpg'


const AboutMe = () => {
    return (
        <div id="About" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={photo} alt="Shubham..." />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">

                    <h1 className="about-heading">About Me</h1>
                    <p>
                        <br></br>
                        <h5>Hello! I am Shubham.</h5>
                        I'm Full-Stack Developer. I like to develop things and get creative.

                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
