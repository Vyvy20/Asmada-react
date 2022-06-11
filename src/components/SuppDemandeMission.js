import React, {Component} from 'react';
import "../Css/SuppDemandeMission.css"

function MissionDemandeSup() {
    return (

        <div className='MissionsAssoAdminDemandeSupp'>

            <h1 className='TitrePageMissADemandeSupp'>Missions proposées</h1>
            <hr className='SepMissADemandeSupp'></hr>
            <input type='submit' className='btnAjouterMissDemandeSupp' value='Ajouter une mission'></input>
            
            {/* Bloc des missions */}
            <div className='LstMissionsAdminDemandeSupp'>

                {/* Bloc première mission */}
                <div className='MissionNum1ADemandeSupp'>

                    <h2 className='TitreMission1ADemandeSupp'>Professeur de soutien en programmation</h2>
                    <label className='DureeADemandeSupp'>Durée : </label>
                    <p>3 semaines</p>
                    <label className='LieuADemandeSupp'>Lieu : </label>
                    <p>Salary</p>
                    <label className='ThèmeADemandeSupp'>Thèmes : </label>
                    <p>Programmation, Education</p>
                    <input className='btnModifDemandeSupp' type="submit" value="Modifier " />
                    <input className='btnSuppDemandeSupp' type="submit" value="Supprimer " />

                </div>

                {/* Bloc deuxième mission */}
                <div className='MissionNum2ADemandeSupp'>

                    <h2 className='TitreMission1ADemandeSupp'>Electricien</h2>
                    <label className='DureeADemandeSupp'>Durée : </label>
                    <p>2 semaines</p>
                    <label className='LieuADemandeSupp'>Lieu : </label>
                    <p>Ankara</p>
                    <label className='ThèmeADemandeSupp'>Thèmes : </label>
                    <p>Electricité</p>
                    <input className='btnModifDemandeSupp' type="submit" value="Modifier " />
                    <input className='btnSuppDemandeSupp' type="submit" value="Supprimer " />
                    
                </div>

            </div>

            {/*Bloc suppression*/}
            <div className='Cache'>
            
                {/*Bloc demande de suppression*/}
                <div className='DemandeSup'>

                    <p className='MsgSupDemande'>Voulez-vous vraiment supprimer supprimer cette mission ?</p>
                    <input type='submit' className='BtnOuiSupp' value='Oui'></input>
                    <input type='submit' className='BtnNonSupp' value='Non'></input>
                </div>

            </div>

        </div>
    )
}

export default MissionDemandeSup;