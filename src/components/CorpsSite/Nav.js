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
import Connexion from "../Visiteur/Connexion";
import Inscription from "../Visiteur/Inscription";
import Nous from "../Visiteur/Nous";
import Action from "../Visiteur/Action";
import Contact from "../Visiteur/Contact";
import Test from "../Benevole/Test";
import FaireTest from "../Admin/FaireTest";
import "../../Css/App.css";


import Mission from "../Benevole/Mission";
import Actu from "../Visiteur/Actu";
import AjoutMission from "../Admin/AjoutMission";
import DetailActu from "../Benevole/DetailActu";
import DetailMission from "../Benevole/DetailMission";
import MissionAdmin from "../Admin/MissionAdmin";
import ModifMission from "../Admin/ModifMission";
import ProfilAdmin from "../Admin/ProfilAdmin";


import MissionDemandeSup from "../Admin/MissionDemandeSup"; 
import ProfilBenevole from "../Benevole/ProfilBenevole";


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
                   <Link className="items"  to="/"> Accueil </Link>
                   <Link className="items" to="/Qui_sommes_nous"> Qui sommes nous</Link>
                   <Link className="items" to="/Actu"> Actualités</Link>
                   <Link className="items" to="/Action"> Actions</Link>
                   <Link className="items" to="/Connexion"> Connexion</Link>


                   {/*<Link className="items"  to="/Mission"> Mission </Link>
                   <Link className="items"  to="/DetailMission"> DetailMission Benev</Link>
                   <Link className="items"  to="/AjoutMission"> AjoutMission </Link>
                   <Link className="items"  to="/MissionAdmin"> MissionAdmin</Link>
                   <Link className="items"  to="/ModifMission"> ModifMission</Link>


                   <Link className="items"  to="/DetailActu"> DetailActu </Link>  
                   <Link className="items"  to="/ProfilAdmin"> ProfilAdmin</Link>

                  
                   <Link className="items"  to="/MissionDemandeSup"> MissionDemandeSup</Link>*/}
                   
                </ul>
            )} 
            <button onClick={toggleNavSmallScreen} className="bgm"><AiOutlineBars /></button>
        </nav>
              <Route exact path="/" component={Article} />
              <Route exact path="/Qui_sommes_nous" component={Nous} />
              <Route exact path="/Action" component={Action} />
              <Route exact path="/Inscription" component={Inscription} />
              <Route exact path="/Actu" component={Actu} />
              <Route exact path="/Contact" component={Contact} />
              <Route exact path="/Connexion" component={Connexion} />
              <Route exact path="/Test" component={Test} />
              <Route exact path="/FaireTest" component={FaireTest} />


              <Route exact path="/Mission" component={Mission} />
              <Route exact path="/AjoutMission" component={AjoutMission} />
              <Route exact path="/DetailMission" component={DetailMission} />
              <Route exact path="/DetailActu" component={DetailActu} />
              <Route exact path="/MissionAdmin" component={MissionAdmin} />
              <Route exact path="/ModifMission" component={ModifMission} />
              <Route exact path="/ProfilAdmin" component={ProfilAdmin} /> 

              <Route exact path="/ProfilBenevole" component={ProfilBenevole} />

              
              <Route exact path="/MissionDemandeSup" component={MissionDemandeSup} />
              
        </div>
        </Routes>
 
        
    );

}

export default Nav;




 