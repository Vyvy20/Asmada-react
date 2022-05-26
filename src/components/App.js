import React from "react";
import {BrowserRouter as Routes, Route} from "react-router-dom"

import Header from "./Header";
import Nav from "./Nav";
import Article from "./Article";
import Connexion from "./Connexion";
import Inscription from "./Inscription";
import Nous from "./Nous";
import Footer from "./Footer";


function App(){
   return (
      
      <div >
         <Header />
         <Nav />
         <Article />
         <Footer />
       

      </div>
      
   );

}
export default App;
