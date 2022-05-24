import React, {Component} from 'react';
import Inscription from "./Inscription";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import "../Css/Connexion.css"

function Connexion() {
  return (
      <form>
        <div className='Connex'>

          <h1 className='TitreConnexion'>Connexion</h1>

          <label className='LabelConnexion'>Login : </label><br></br>

          <input  type="text" placeholder="Entrez votre adresse e-mail" className="TextConnexion"  /><br></br>

          <label className='LabelConnexion'>Mot de passe : </label><br></br>

          <input  type="text" placeholder="Entrez votre mot de passe"  className="TextConnexion" /><br></br>

          <input className='boutenText' type="submit" value="Se connecter" /> <br></br>

          <p className='MotdePass'>Mot de passe oublié ?</p>

          <hr className='bare'></hr>

          <div className='Nouveau' name="TitreConnexion">Nouveau Utilisateur</div>

          <div className='boutenText' id="btnInscription" type="submit">S'inscrire</div>
          </div>

      </form>

    );
  }


export default Connexion;