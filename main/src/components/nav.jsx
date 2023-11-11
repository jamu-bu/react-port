// Bringing in the required import from 'react-router-dom'
//import { Link } from 'react-router-dom'

import AboutPage from "../pages/AboutPage";
import Eyelogo from "./UI/eyeopen";

export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
      
    <div>
        <div>
          <h1 id="name">
          차<br/>
          미<br/>
          경<br/>
          </h1>
        </div>
        <div><Eyelogo/></div>
        <AboutPage/>
        <div id="nav-container">
          
          <div><a href="#portfolio"><h1 id="port">PORTFOLIO</h1></a></div>
          <div><a href="#resume"><h1 id="resume">RESUME</h1></a></div>
          <div><a href="#contact"><h1 id="contact">CONTACT</h1></a></div>
        </div>
      
    </div>
  );
}
