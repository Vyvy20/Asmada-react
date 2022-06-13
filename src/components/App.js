import React from "react";
import {BrowserRouter, Route} from "react-router-dom"

import Header from "./CorpsSite/Header";
import Nav from "./CorpsSite/Nav";
// import Article from "./Article";
// import Connexion from "./Connexion";
// import Inscription from "./Inscription";
// import Action from "../visiteur/Action";
// import Nous from "./Nous";
import Footer from "./CorpsSite/Footer";
// import ProfilBenevole from "./ProfilBenevole";
// import Contact from "./Contact";


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
