
import { useState } from "react";

export default function PortfolioPage() {
    const [section, setSection]=useState(false)
    console.log(section);
    return (
        
      <div>
        <div><a href="#portfolio" onClick={() => setSection(!section)}><h1 id="portfolio">PORTFOLIO</h1></a></div>
        { section ?
            <div className="textion">
                <ul><a href="https://chit-chat-wechatalot-00f4f8dc2d8e.herokuapp.com/"><h2>CHIT CHAT</h2></a></ul> 
                <ul><a href="https://github.com/adamywfong/singalong"><h2>SINGALONG</h2></a></ul> 
                <ul><a href="https://github.com/BrianPizz/fithub"><h2>FITHUB</h2></a></ul> 
            </div> : null
        }
      </div>
    );
  }
  