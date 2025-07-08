import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Technologies from './components/Technologies/Technologies.jsx';
import Projects from './components/Projects/Projects.jsx';
import Contact from './components/Contact/Contact.jsx';

import './App.css'

function App() {

  return (
    <>
     <Navbar />
      <Hero />
      <Projects />
      <Technologies />
      <Contact />
    </>
  )
}

export default App
