
import { useState } from "react";

export default function ContactPage() {
    const [section, setSection]=useState(false)
    console.log(section);
    return (
        
      <div>
        <div><a href="#contact" onClick={() => setSection(!section)}><h1 id="contact">CONTACT</h1></a></div>
        { section ?
            <div className="textion">
                <p>Feel free to reach out via LinkedIn</p>
                <h2><a href="https://www.linkedin.com/in/jamie-han-2021/"><p>FOLLOW THE JOURNEY HERE</p></a></h2> 
            </div> : null
        }
      </div>
    );
  }
  