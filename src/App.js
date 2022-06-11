import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Quote from "./components/Quote";
import LazyLoad from "react-lazyload";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <AboutMe />
      <Education />
      <LazyLoad height={500}>
        <Project />
      </LazyLoad>
      <Skill />
      <Experience />
      <Contact />
      <Quote />
      <Footer />
    </Router>
  );
}

export default App;
