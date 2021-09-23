import React from 'react'

const Experience = () => {
    return (
        <div id="Experience" className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1>experience</h1>
            </div>
            <div className="container experience-wrapper">

                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2019-2021</h3>
                        <p>Persuing my post graduation in Master of comupter application.</p>
                    </div>
                </div>

                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2020-2021</h3>
                        <h5>Software engineer at Capgemini</h5>
                        <p>Got promoted as Software engineer on June 2020. In Augest 2021 after completing 2 years 3 months in the organization took break for furthur studies.</p>
                    </div>
                </div>

                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2019-2020</h3>
                        <h5>Software associate at Capgemini</h5>
                        <p>After graducation started my career with capgemini where I was trained as .Net Full Stack developer 
                            with angular. Got into Support and maintainece project. applying bug fix and change request for client 
                            appliication which was based on .Net and Sharepoint.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Experience
