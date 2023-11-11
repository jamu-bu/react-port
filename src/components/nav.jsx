// Bringing in the required import from 'react-router-dom'
//import { Link } from 'react-router-dom'

import PortfolioPage from "../pages/PortfolioPage";
import AboutPage from "../pages/AboutPage";
import ResumePage from "../pages/ResumePage";
import Eyelogo from "./UI/eyeopen";
import ContactPage from "../pages/ContactPage";

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
        <PortfolioPage/>
        <ResumePage/>
        <ContactPage/>
      
    </div>
  );
}
