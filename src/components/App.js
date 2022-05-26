import React from "react";
import {BrowserRouter as Routes, Route} from "react-router-dom"

import Header from "./Header";
import Nav from "./Nav";
import Article from "./Article";
import Connexion from "./Connexion";
import Inscription from "./Inscription";
import Action from "./Action";
import Nous from "./Nous";
import Footer from "./Footer";
import ProfilBenevole from "./ProfilBenevole";


function App(){
   return (
      
      <div >
         <Header />
         <Nav />
         <Nous />
         <Footer />
       

      </div>
      
   );

}
export default App;
