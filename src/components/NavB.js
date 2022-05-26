import React,{useState, useEffect} from "react";

// import { BsHouseDoorFill } from "react-icons/bs";
//  import { BsFillInfoCircleFill } from "react-icons/bs";
// import { BsCardText } from "react-icons/bs";
//  import { FaHandshake } from "react-icons/fa";
//  import { FaHands } from "react-icons/fa";
//  import { BsLockFill } from "react-icons/bs";
import { AiOutlineBars } from "react-icons/ai";

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
            // if(window.innerHeight > 825){
            //     setToggleMenu(false);
            //    }
        }
        window.addEventListener('resize', changeWidth);
        return() => {
            window.removeEventListener('resize', changeWidth);

        }

    }, [])
    return(
        <nav>
            {(toggleMenu || largeur > 825) && (
                <ul className="liste">
                   <li className="items"> Accueil </li>
                   <li className="items"> Missions</li>
                   <li className="items"> Historiques</li>
                   <li className="items"> Contacter</li>
                   <li className="items"> Mon profil </li>
                   <li className="items"> Déconnexion</li>
                </ul>
            )}
            <button onClick={toggleNavSmallScreen} className="bgm"><AiOutlineBars /></button>
        </nav>
    );

}

export default Nav;




 