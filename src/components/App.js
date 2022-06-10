import React from "react";

import Header from "./Header";
import Nav from "./Nav";
import NavB from "./NavB";
import Article from "./Article";
import Connexion from "./Connexion";
import Inscription from "./Inscription";
import ProfileB from "./ProfilBenevole";
import Footer from "./Footer";
import ProfileA from "./ProfilAdmin";
import Mission from "./Mission";
import DetailMission from "./DetailMission";
import MissionAdmin from "./MissionAdmin";
import AjoutMission from "./AjoutMission";
import ModifMission from "./ModifMission";
import SuppDemandeMission from "./SuppDemandeMission";

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

function App(){
   return (
      <div>
         <Header />
         <Nav/>
         <SuppDemandeMission/>
         <Footer />
      </div>
   );

}

export default App;
