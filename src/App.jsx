import Navbar from "./components/layout/Navbar/Navbar.jsx";
import Hero from "./components/layout/Hero/Hero.jsx";
import ExpSection from "./components/layout/Experience/ExpSection.jsx";
import Projects from "./components/layout/Projects/ProjectsSection.jsx";
import Technologies from "./components/layout/Technologies/Technologies.jsx";
import Contact from "./components/layout/Contact/Contact.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ExpSection />
      <Projects />
      <Technologies />
      <Contact />
      <ScrollToTop />
    </>
  );
}

export default App;
