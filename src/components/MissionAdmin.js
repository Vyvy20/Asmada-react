import React, {Component} from 'react';
import "../Css/MissionAdmin.css"

function MissionAdmin() {
    return (

        <div className='MissionsAssoAdmin'>

            <h1 className='TitrePageMissA'>Missions proposées</h1>
            <hr className='SepMissA'></hr>
            <input type='submit' className='btnAjouterMiss' value='Ajouter une mission'></input>
            
            {/* Bloc des missions */}
            <div className='LstMissionsAdmin'>

                {/* Bloc première mission */}
                <div className='MissionNum1A'>

                    <h2 className='TitreMission1A'>Professeur de soutien en programmation</h2>
                    <label className='DureeA'>Durée : </label>
                    <p>3 semaines</p>
                    <label className='LieuA'>Lieu : </label>
                    <p>Salary</p>
                    <label className='ThèmeA'>Thèmes : </label>
                    <p>Programmation, Education</p>
                    <input className='btnModif' type="submit" value="Modifier " />
                    <input className='btnSupp' type="submit" value="Supprimer " />

                </div>

                {/* Bloc deuxième mission */}
                <div className='MissionNum2A'>

                    <h2 className='TitreMission1A'>Electricien</h2>
                    <label className='DureeA'>Durée : </label>
                    <p>2 semaines</p>
                    <label className='LieuA'>Lieu : </label>
                    <p>Ankara</p>
                    <label className='ThèmeA'>Thèmes : </label>
                    <p>Electricité</p>
                    <input className='btnModif' type="submit" value="Modifier " />
                    <input className='btnSupp' type="submit" value="Supprimer " />
                    
                </div>

            </div>

        </div>
    )
}

export default MissionAdmin;