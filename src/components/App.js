import React from "react";

import Header from "./Header";
import Nav from "./Nav";
import Article from "./Article";
import Connexion from "./Connexion";
import Footer from "./Footer";

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

function App(){
   return (
      <Router>
      <div>
         <Header />
         <Nav />
         <Connexion />
         <Footer />
      </div>
      </Router>
   );

}

export default App;
