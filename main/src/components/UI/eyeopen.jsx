import eyeopen from './eyeopen.png';
import eyeclose from './eyeclose.png'
import { useState, useEffect } from 'react';
import '../../App.css';

function Eyelogo() {
    
    const [eye, setEye] = useState(eyeclose);
    const changeEye=()=> {
        let value = eye;

        if (value ===eyeclose){
            setEye(eyeopen);
            document.body.style.backgroundColor = "black";
            document.getElementById('name').style.color="white";
        } else {
            setEye(eyeclose);
            document.body.style.backgroundColor = "white";
            document.getElementById('name').style.color="black";
        }
    }

   return (
        <img className='eye' src={eye} width={200} height={200} onClick={changeEye} />
    )
}; 

export function getBG() {
    return bg;
}

export default Eyelogo