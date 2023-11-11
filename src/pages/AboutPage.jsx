
import { useState } from "react";

export default function AboutPage() {
    const [section, setSection]=useState(false)
    console.log(section);

    return (
        
      <div>{
        <div><a href="#about" onClick={() => setSection(!section)}><h1 id="about">ABOUT</h1></a></div>}
        { section ?
            <p className="textion">
                Jamie is interested in UX UI design. She would like to further pursue the Arts in a digital medium whether it be through design, or the implemenation of 
                front end elements. In her free time she enjoys going to Art Museums and creating 3D models in Blender. 
            </p> : null
        }
      </div>
    );
  }
  