import React from "react";
import {BrowserRouter as Routes, Route} from "react-router-dom"

import Header from "./Header";
import Nav from "./Nav";
import Article from "./Article";
import Connexion from "./Connexion";
import Inscription from "./Inscription";
import Action from "./Action";
import Footer from "./Footer";


function App(){
   return (
      
      <div >
         <Header />
         <Nav />
         <Action />
         <Footer />
       

      </div>
      
   );

}
export default App;
