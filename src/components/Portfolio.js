import React from 'react'
import netflix from "../images/netflix.png";
import cityGuide from "../images/city-guide-app.png";
import portfolio from "../images/portfolio.png";
import taskManager from "../images/task-manager.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css";


// Netflix
const openPopupboxNetflix = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={netflix} alt="Netflix Clone Project..." />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/8020Coding/netflix-project")}>https://github.com/8020Coding/netflix-project</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigNetflix = {
    titleBar: {
      enable: true,
      text: "Netflix clone project."
    },
    fadeIn: true,
    fadeInSpeed: 600
  }


  // City Guide App
const openPopupboxCityGuide = () => {
  const content = (
    <>
      <img className="portfolio-image-popupbox" src={cityGuide} alt="City Guide Project..." />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
      <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/8020Coding/netflix-project")}>https://github.com/8020Coding/netflix-project</a>
    </>
  )
  PopupboxManager.open({ content })
}

const popupboxConfigCityGuide = {
  titleBar: {
    enable: true,
    text: "City Guide project."
  },
  fadeIn: true,
  fadeInSpeed: 600
}


// Portfolio App
const openPopupboxPortfolio = () => {
  const content = (
    <>
      <img className="portfolio-image-popupbox" src={portfolio} alt="Portfolio Project..." />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
      <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/8020Coding/netflix-project")}>https://github.com/8020Coding/netflix-project</a>
    </>
  )
  PopupboxManager.open({ content })
}

const popupboxConfigPortfolio = {
  titleBar: {
    enable: true,
    text: "Portfolio project."
  },
  fadeIn: true,
  fadeInSpeed: 600
}


// TaskManager App
const openPopupboxTaskManager = () => {
  const content = (
    <>
      <img className="portfolio-image-popupbox" src={taskManager} alt="TaskManager Project..." />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
      <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/8020Coding/netflix-project")}>https://github.com/8020Coding/netflix-project</a>
    </>
  )
  PopupboxManager.open({ content })
}

const popupboxConfigTaskManager = {
  titleBar: {
    enable: true,
    text: "TaskManager project."
  },
  fadeIn: true,
  fadeInSpeed: 600
}



const Portfolio = () => {
    return (
      <div className="portfolio-wrapper">
        <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>     
        <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="portfolio-image-box d-flex justify-content-center" onClick={openPopupboxNetflix}>
            <img className="portfolio-image" src={netflix} alt="Netflix Clone Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearch} />
          </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="portfolio-image-box d-flex justify-content-center" onClick={openPopupboxCityGuide}>
            <img className="portfolio-image" src={cityGuide} alt="City Guide Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearch} />
          </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="portfolio-image-box d-flex justify-content-center" onClick={openPopupboxPortfolio}>
            <img className="portfolio-image" src={portfolio} alt="Portfolio React and Material UI Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearch} />
          </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="portfolio-image-box d-flex justify-content-center" onClick={openPopupboxTaskManager}>
            <img className="portfolio-image" src={taskManager} alt="Task Manager React and Redux Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearch} />
          </div>
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigNetflix} />
      <PopupboxContainer {...popupboxConfigCityGuide} />
      <PopupboxContainer {...popupboxConfigPortfolio} />
      <PopupboxContainer {...popupboxConfigTaskManager} />
    </div>
    )
}

export default Portfolio
