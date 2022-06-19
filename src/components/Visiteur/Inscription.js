import React, {Component} from 'react';
import {BrowserRouter as Routes, Route, Link} from "react-router-dom"
import Connexion from "./Connexion";

import "../../Css/Connexion.css"



function Inscription() {
  return (
      <form className='FormClass'>
        <div className='insciption'>

          <h1 className='TitreConnexion '>Inscription</h1>
          <div>
               <label className='LabelInsciption'>Nom : </label>
               <label className='LabelInsciptionPrenom'>Prénom: </label><br></br>

               <input className="TextInsciptionNom"  type="text" placeholder="Entrez votre nom" />
               <input className="TextInsciptionNom" type="text" placeholder="Entrez votre prénom" /><br></br>
          </div>

          <label className='LabelConnexion'>Téléphone: </label><br></br>

          <input className="TextInsciption" type="number" placeholder="Entrez votre adresse téléphone" /><br></br>

          <label className='LabelConnexion'>Login : </label><br></br>

          <input className="TextInsciption" type="text" placeholder="Entrez votre adresse psudo"  /><br></br>

          <label className='LabelConnexion' >Adresse email : </label><br></br>
          <input className="TextInsciption" type="email" placeholder="Entrez votre Adresse email" /><br></br>

          <label className='LabelConnexion'>Mot de passe : </label><br></br>

          <input className="TextInsciption" type="password" placeholder="Entrez votre mot de passe" /><br></br>

          <a className='boutenTextins' id="btnInscription" type="submit" href='/Connexion' >S'inscrire</a>

          <hr className='bare'></hr>

          <div className='Nouveau' name="TextInsciption">Vous avez un compte ?</div>

          <Link to="/Connexion" className='boutenTextins' type="submit">Se connecter </Link><br></br>
          <div className='loi'>
            Les informations recueillies sont nécessaires pour votre inscription. Elles font l’objet d’un traitement informatique et sont destinées aux associations qui pourront les visualiser dans un espace sécurisé. En application des articles 39 et suivants de la loi du 6 janvier 1978 modifiée, vous bénéficiez d’un droit d’accès et de rectification aux informations qui vous concernent grâce aux codes d’accès qui vous sont communiqués par email.
          </div>
  
          
          </div>

      </form>
  
    );
  }


export default Inscription;