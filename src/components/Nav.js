import React,{useState, useEffect} from "react";

// import { BsHouseDoorFill } from "react-icons/bs";
//  import { BsFillInfoCircleFill } from "react-icons/bs";
// import { BsCardText } from "react-icons/bs";
//  import { FaHandshake } from "react-icons/fa";
//  import { FaHands } from "react-icons/fa";
//  import { BsLockFill } from "react-icons/bs";
import { AiOutlineBars } from "react-icons/ai";
import App from "./App";
import Connexion from "./Connexion";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import "../Css//App.css"


function Nav(){
    

    const [toggleMenu, setToggleMenu] = useState (false);
    const [largeur, setLargeur] = useState (window.innerWidth)

    const toggleNavSmallScreen = () => {
        setToggleMenu(!toggleMenu);
    }

    useEffect(() => {
    
        const changeWidth = () => {
            setLargeur(window.innerWidth);

           if(window.innerWidth > 825){
             setToggleMenu(false);
            }
        }
        window.addEventListener('resize', changeWidth);
        return() => {
            window.removeEventListener('resize', changeWidth);

        }

    }, [])
    return(
        <Router>
        <div>
        <nav>
            
            {(toggleMenu || largeur > 825) && (
                <ul className="liste">
                   <li className="items"> Accueil </li>
                   <li className="items"> Qui sommes nous</li>
                   <li className="items"> Actualités</li>
                   <li className="items"> Nos action</li>
                   <li className="items"> Espace bénévoles</li>
                   <li className="items"> Connexion</li>
                   
                </ul>
            )}
            <button onClick={toggleNavSmallScreen} className="bgm"><AiOutlineBars /></button>
        </nav>
  
        <Route path="/Connexion" component={Connexion} />

        </div>
        </Router>
        
    );

}

export default Nav;




 