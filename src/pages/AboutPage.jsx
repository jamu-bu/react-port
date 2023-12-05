
import { useState } from "react";

export default function AboutPage() {
    const [section, setSection]=useState(false)
    console.log(section);

    return (
        
      <div>{
        <div><a href="#about" onClick={() => setSection(!section)}><h1 id="about">ABOUT</h1></a></div>}
        { section ?
            <p className="textion">
                Jamie is a UX/UI Designer passionate about bringing brands to life through creative design. 
                She has previously worked for University of Washington Bothell, University of Washington Seattle, 
                and Boston University in office/administrative support roles. She is seeking to further her experience 
                and education in Tech and possess a B.A. in Psychology from Boston University and a Full Stack Development 
                Certificate from University of California Los Angeles Extension Bootcamp. In her free time she enjoys going 
                to Art Museums and creating 3D models in Blender. 
            </p> : null
        }
      </div>
    );
  }
  