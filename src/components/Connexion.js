import React, {Component} from 'react';
import Inscription from "./Inscription";
import {BrowserRouter as Routes, Route, Link} from "react-router-dom"

import "../Css/Connexion.css"

function Connexion() {
  return (
    <Routes>
      <form className='bodyconnex'>
        <div className='Connex'>

          <h1 className='TitreConnexion'>Connexion</h1>

          <label className='LabelConnexion'>Login : </label><br></br>

          <input  type="email" placeholder="Entrez votre adresse e-mail" className="TextConnexion"  /><br></br>

          <label className='LabelConnexion'>Mot de passe : </label><br></br>

          <input  type="password" placeholder="Entrez votre mot de passe"  className="TextConnexion" /><br></br>

          <input className='boutenText' type="submit" value="Se connecter" /> <br></br>

          <p className='MotdePass'>Mot de passe oublié ?</p>

          <hr className='bare'></hr>

          <div className='Nouveau' name="TitreConnexion">Nouveau Utilisateur</div>

          <a href="/Inscription" className='boutenText'  type="submit">S'inscrire</a>
          </div>

      </form>
      </Routes>
    );
  }


export default Connexion;