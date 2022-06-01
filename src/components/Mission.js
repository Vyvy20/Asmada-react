import React, {Component} from 'react';


function Mission() {
    return (

        <div className='MissionsAsso'>

            <h1 className='TitrePageMiss'>Missions proposées</h1>

            {/* Bloc des missions */}
            <div className='LstMissions'>

                {/* Bloc première mission */}
                <div className='Mission1'>

                    <h2 className='TitreMission1'>Professeur de soutien en programmation</h2>
                    <label className='Duree'>Durée : </label>
                    <p>3 semaines</p>
                    <label className='Lieu'>Lieu : </label>
                    <p>Salary</p>
                    <label className='Thème'>Thèmes : </label>
                    <p>Programmation, Education</p>

                </div>

                {/* Bloc deuxième mission */}
                <div className='Mission2'>

                    <h2 className='TitreMission1'>Electricien</h2>
                    <label className='Duree'>Durée : </label>
                    <p>2 semaines</p>
                    <label className='Lieu'>Lieu : </label>
                    <p>Ankara</p>
                    <label className='Thème'>Thèmes : </label>
                    <p>Electricité</p>
                    
                </div>

            </div>

        </div>
    )
}

export default Mission;