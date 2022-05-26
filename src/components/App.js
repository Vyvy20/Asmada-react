import React from "react";

import Header from "./Header";
import Nav from "./Nav";
import NavB from "./NavB";
import Article from "./Article";
import Connexion from "./Connexion";
import Inscription from "./Inscription";
import ProfileB from "./ProfilBenevole";
import Footer from "./Footer";



import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

function App(){
   return (
      <Router>
      <div>
         <Header />
         <NavB />
         <ProfileB />
         <Footer />
      </div>
      </Router>
   );

}

export default App;
