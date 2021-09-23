import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Particles from 'react-particles-js';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Aboutme from './components/AboutMe';
import Services from './components/Services';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contacts from './components/Contacts';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Particles
        className="particles-canvas"
         params={{
	    "particles": {
	        "number": {
	            "value": 30,
	            "density": {
	                "enable": true,
	                "value_area": 1500,
	            }
	        },
	        "line_linked": {
	            "enable": true,
	            "opacity": 2,
              "color": '#0099ff'
	        },
          "color":{
            "value":'#0099ff',
            "opacity":0.05
          },
	        "move": {
	            "speed": 0.5
	        },
	        "size": {
	            "random":true
	        },
	        "opacity": {
	            "anim": {
	                "enable": true,
	                "speed": 1,
	                "opacity_min": 1
	            }
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onClick": {
	                "enable": true,
	                "mode": "push"
	            }
	        },
	        "modes": {
	            "push": {
	                "particles_nb": 1
	            }
	        }
	    },
	    "retina_detect": true
	}}
      />
      <Navbar />
      <Header />
      <Aboutme />
      <Services />
      <Experience />
      <Portfolio />
      <Testimonials/>
      <Contacts/>
      <Footer/>
    </>
  );
}

export default App;
