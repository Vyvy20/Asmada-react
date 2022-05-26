import React,{useState, useEffect} from "react";
import {BrowserRouter as Routes, Route, Link} from "react-router-dom"
// import { BsHouseDoorFill } from "react-icons/bs";
//  import { BsFillInfoCircleFill } from "react-icons/bs";
// import { BsCardText } from "react-icons/bs";
//  import { FaHandshake } from "react-icons/fa";
//  import { FaHands } from "react-icons/fa";
//  import { BsLockFill } from "react-icons/bs";
import { AiOutlineBars } from "react-icons/ai";

import Article from "./Article";
import Connexion from "./Connexion";
import Inscription from "./Inscription";

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
        <Routes>

        <div>
        <nav>
            
            {(toggleMenu || largeur > 825) && (
                <ul className="liste">
                   <Link className="items"  to="/Home"> Accueil </Link>
                   <li className="items"> Qui sommes nous</li>
                   <li className="items"> Actualités</li>
                   <li className="items"> Nos action</li>
                   <li className="items"> Espace bénévoles</li>
                  <Link to="/Connexion"> <li className="items"> Connexion</li></Link>
                   
                </ul>
            )}
            <button onClick={toggleNavSmallScreen} className="bgm"><AiOutlineBars /></button>
        </nav>
              <Route exact path="/Home" component={Article} />
              <Route  path="/Connexion" component={Connexion} />
    
        </div>
        </Routes>
 
        
    );

}

export default Nav;




 