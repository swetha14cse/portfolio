import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Education from './components/Education';
import EventsAndDance from './components/EventsAndDance';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Certifications />
      <About />
      <Education />
      <EventsAndDance />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
