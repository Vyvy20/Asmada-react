import React from "react";
import {BrowserRouter, Route} from "react-router-dom"

import Header from "./Header";
import Nav from "./Nav";
import Article from "./Article";
import Connexion from "./Connexion";
import Inscription from "./Inscription";
import Action from "./Action";
import Nous from "./Nous";
import Footer from "./Footer";
import ProfilBenevole from "./ProfilBenevole";
import Contact from "./Contact";


function App(){
   return (
      
      <div >
         <Header />
         <Nav />
         <Footer />

      </div>

      
      
   );

}
export default App;
