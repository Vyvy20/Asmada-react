import React, {Component} from 'react';
import "../Css/Connexion.css"

function Connexion() {
  return (
      <form>
        <div className='Connex'>

          <h1 name="TitreConnexion">Connexion</h1>

          <label>Login : </label><br></br>

          <input type="text" placeholder="Entrez votre adresse e-mail" className="emailText"  /><br></br>

          <label>Mot de passe : </label><br></br>

          <input type="text" placeholder="Entrez votre mot de passe"  className="MdpText" /><br></br>

          <input className='boutenText' type="submit" value="Se connecter" /> <br></br>

          <p className='MotdePass'>Mot de passe oublié ?</p>

          <hr></hr>

          <div className='Nouveau' name="TitreConnexion">Nouveau Utilisateur</div>

          <input className='boutenText' id="btnInscription" type="submit" value="S'inscrire" onClick="document.location.href='Inscription.js'"/>
          </div>
      </form>
    );
  }


export default Connexion;