import React, {Component} from 'react';


function Mission() {
    return (

        <div className='MissionsAsso'>

            <h1 className='TitrePageMiss'>Missions proposées</h1>

            {/* Bloc des missions */}
            <div className='LstMissions'>

                {/* Bloc première mission */}
                <div className='Mission1'>

                    <h2 className='TitreMission1'>Professeur de programmation</h2>
                    <label className='Descrip'>Description :</label>
                    <p>Cette mission consiste à donner des cours de programmation aux adolescents.</p>
                    <input type='submit' className='btnPostu' value='Postuler'></input>

                </div>

                {/* Bloc deuxième mission */}
                <div className='Mission2'>

                    <h2 className='TitreMission1'>Electricien</h2>
                    <label className='Descrip'>Description :</label>
                    <p>Cette mission consiste à raccorder des fils électriques dans plusieurs maisons.</p>
                    <input type='submit' className='btnPostu' value='Postuler'></input>

                </div>

            </div>

        </div>
    )
}

export default Mission;