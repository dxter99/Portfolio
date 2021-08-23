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

function App() {
  return (
    <>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 60,
              density: {
                enable: true,
                volume_area: 900
              }
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 6,
                color: '#f9ab00'
              }
            }

          }
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
    </>
  );
}

export default App;
