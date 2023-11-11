
import { useState } from "react";

export default function PortfolioPage() {
    const [section, setSection]=useState(false)
    console.log(section);
    return (
        
      <div>
        <div><a href="#portfolio" onClick={() => setSection(!section)}><h1 id="portfolio">PORTFOLIO</h1></a></div>
        { section ?
            <div className="textion">
                <ul><a href="https://github.com/adamywfong/singalong"><h2>SINGALONG</h2></a></ul> 
                <ul><a href="https://github.com/BrianPizz/fithub"><h2>FITHUB</h2></a></ul> 
                <ul><a href="https://github.com/jamu-bu/social-network"><h2>SOCIAL</h2></a></ul> 
                <ul><a href="https://github.com/jamu-bu/svg-maker"><h2>SVG MAKER</h2></a></ul> 
                <ul><a href="https://github.com/jamu-bu/readme-generator"><h2>README-GENERATOR</h2></a></ul> 
                <ul><a href="https://github.com/jamu-bu/api-code-quiz"><h2>CODING QUIZ</h2></a></ul> 
            </div> : null
        }
      </div>
    );
  }
  