import React, {Component} from 'react';
import "../Css/ProfilAdmin.css"

function ProfilA() {
  return (
    <div classname='ProfilGlobalAdmin'>

    {/* Bloc des titres */}
      <div className='TitreProfilA'>
        <h4 className='NomAdmin'> Administrice {'>'} Amélie ADMIN</h4>
        <hr className='SepProfilA'></hr>
      </div>

       {/* Contenu du profil contenant le menu, les informations de l'administrateur et un bloc pour donner un statut à la mission */}
      <div className='ContenuProfilA'>
        <h1 className='MsgBienvenueA'>Bienvenue Amélie</h1>

        {/* Bloc du menu */}
        <div className='MenuA'>
          <input type='submit' className='btnCompteA' value='Mon Compte'/> <br className='EspaceCA'></br>
          <input type='submit' className='btnProfilA' value='Mon Profil'/> <br className='EspacePA'></br>
          <input type='submit' className='btnGestInsc' value='Gestion des inscrits'/> <br className='EspaceI'></br>
          <input type='submit' className='btnGestMiss' value='Gestion des missions'/> <br className='EspaceM'></br>
          <input type='submit' className='btnContactA' value='Contacter un bénévole'/> <br className='EspaceCoA'></br>
          <input type='submit' className='btnDecoA' value='Déconnexion'/> <br className='EspaceDA'></br>
        </div>

        {/* Bloc des informations de l'administrateur */}
        <div className='InfoAdmin'>
          <h5 className='TitreCoordA'>Mes coordonnées</h5>
          <label className='PrenomA'>Prénom : Amélie </label><br></br>
          <label className='NomA'>Nom : ADMIN </label><br></br>
          <label className='TelA'>Téléphone : 06 24 68 02 46 </label><br></br>
          <label className='EmailA'>Email : amelie.admin@laposte.net </label><br></br>
          <h5 className='TitreMdpA'>Mot de passe</h5>
          <a className='ChangerMdpA' href='*'>Changer de mot de passe</a>
          <h5 className='TitreSuppCompteA'>Supprimer mon compte</h5>
          <a className='SuppMdpA' href='*'>Supprimer définitivement mon compte</a>
          <input type='submit' className='BtnModifInfosA' value='Je modifie mes informations'/><br></br>
          <h5 className='OutilsA'>Outils</h5>
          <a className='GestCand' href='*'>Gestion des candidatures</a><br></br>
          <a className='GestTest' href='*'>Gestion des tests</a><br></br>

          {/* Bloc du statut des missions */}
          <div className='StatutMissions'>
            <h5 className='TitreStatutMission'>Donnez le statut de la mission</h5>
            <input type='submit' className='BtnStatutMiss' value='Je renseigne le statut de la mission'/>
          </div>
        
        </div>

      </div>
    
    </div>
    
    );
  }


export default ProfilA;