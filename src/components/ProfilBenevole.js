import React, {Component} from 'react';
import "../Css/ProfilBenevole.css"

function ProfilB() {
  return (
    <div classname='ProfilGlobal'>
      {/* Bloc des titres */}
      <div className='TitreProfil'>
        <h4 className='NomBenevole'> Bénévole {'>'} Camille DANG</h4>
        <hr className='SepProfil'></hr>
      </div>

      {/* Contenu du profil contenant le menu, les informations du bénévoles et un bloc pour candidater */}
      <div className='ContenuProfil'>
        <h3 className='MsgBienvenue'>Bienvenue Camille</h3>

        {/* Bloc du menu */}
        <div className='MenuB'>
          <input type='submit' className='btnCompte' value='Mon Compte'/> <br className='EspaceC'></br>
          <input type='submit' className='btnProfil' value='Mon Profil'/> <br className='EspaceP'></br>
          <input type='submit' className='btnHistoriqueMission' value='Historique'/> <br className='EspaceH'></br>
          <input type='submit' className='btnContact' value='Contact'/> <br className='EspaceCo'></br>
          <input type='submit' className='btnDeco' value='Déconnexion'/> <br className='EspaceD'></br>
        </div>

        {/* Bloc des informations du bénévoles */}
        <div className='InfoBenevole'>
          <h5 className='TitreCoord'>Mes coordonnées</h5>
          <label className='Prenom'>Prénom : Camille </label><br></br>
          <label className='Nom'>Nom : Dang </label><br></br>
          <label className='Tel'>Téléphone : 06 12 34 56 78 </label><br></br>
          <label className='Email'>Email : camille.dang@gmail.com </label><br></br>
          <h5 className='TitreMdp'>Mot de passe</h5>
          <a className='ChangerMdp' href='*'>Changer de mot de passe</a>
          <h5 className='TitreSuppCompte'>Supprimer mon compte</h5>
          <a className='SuppMdp' href='*'>Supprimer définitivement mon compte</a>
          <h5 className='Outils'>Outils</h5>
          <a className='ConseilMission' href='*'>Conseils pour trouver votre mission bénévole</a><br></br>
          <a className='ContactConseiller' href='*'>Contacter un conseiller</a><br></br>
          <input type='submit' className='BtnModifInfos' value='Je modifie mes informations'/><br></br>
          
          {/* Bloc pour candidater aux missions */}
          <div className='ConsultMissions'>
            <h5 className='TitreConsultMission'>Consultez les missions bénévoles proposées par l'association</h5>
            <input type='submit' className='BtnRenseigne' value='Je renseigne mon profil pour trouver des&#13;&#10;missions qui me correspondent'/>
          </div>
        
        </div>

      </div>
    
    </div>
    
    );
  }


export default ProfilB;