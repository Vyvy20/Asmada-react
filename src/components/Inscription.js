import React, {Component} from 'react';
import "../Css/Connexion.css"

function Inscription() {
  return (
      <form>
        <div className='Connex'>

          <h1 name="TitreConnexion">Inscription</h1>

          <label>Login : </label><br></br>

          <input type="text" placeholder="Entrez votre adresse e-mail" className="emailText"  /><br></br>

          <label>Adresse email : </label><br></br>
          <input type="text" placeholder="Entrez votre Adresse email"  className="MdpText" /><br></br>

          <label>Mot de passe : </label><br></br>

          <input type="text" placeholder="Entrez votre mot de passe"  className="MdpText" /><br></br>

          <input className='boutenText' id="btnInscription" type="submit" value="S'inscrire" onClick="document.location.href='Inscription.js'"/>

          <hr></hr>

          <div className='Nouveau' name="TitreConnexion">Vous avez un compte ?</div>
          <input className='boutenText' type="submit" value="Se connecter" /> <br></br>
          
          </div>
      </form>
    );
  }


export default Inscription;