import React, {Component} from 'react';


function Mission() {
    return (

        <div className='MissionsAsso'>

            <h1 className='TitrePageMiss'>Missions proposées</h1>

            {/* Bloc des missions */}
            <div className='LstMissions'>

                {/* Bloc première mission */}
                <div className='Mission1'>

                    <h2 className='TitreMission1'>Professeur de réseaux</h2>
                    <label className='Lieu'>Lieu : Salary</label><br></br>
                    <label className='Thème'>Thème : Réseaux</label>

                </div>

                {/* Bloc deuxième mission */}
                <div className='Mission2'>

                    <h2 className='TitreMission1'>Electricien</h2>
                    <label className='Lieu'>Lieu : Ankarana</label><br></br>
                    <label className='Thème'>Thème : Electricité</label>
                    
                </div>

            </div>

        </div>
    )
}

export default Mission;