// Bringing in the required import from 'react-router-dom'
//import { Link } from 'react-router-dom'

import Eyelogo from "./UI/eyeopen";

export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <div>
        <Eyelogo/>
        <div><h1>ABOUT</h1></div>
        <div><h1>PORTFOLIO</h1></div>
        <div><h1>RESUME</h1></div>
        <div><h1>CONTACT</h1></div>
      
    </div>
  );
}
