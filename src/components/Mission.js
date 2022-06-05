import React, {Component} from 'react';
import "../Css/Mission.css"

function Mission() {
    return (

        <div className='MissionsAsso'>

            <h1 className='TitrePageMiss'>Missions proposées</h1>
            <hr className='SepMiss'></hr>

            {/* Bloc des missions */}
            <div className='LstMissions'>

                {/*
                <form className='FrmFiltre'>

                    <div className='Filtres'>

                        <h2 className='TitreFiltresRech'>Filtres de recherche</h2>
                        <label className='LblMotCle'>Mot-clé :</label>
                        <input type='text' className='TxtMotCle' value='Entrer un mot clé'></input>
                        <label className='LblThm'>Thème : </label>
                        <input type='text' className='TxtThm' value='Entrer un thème'></input> <br></br>
                        <input type='submit' className='BtnRech' value='Rechercher'></input>

                    </div>

                </form>*/}

                {/* Bloc première mission */}
                <div className='MissionNum1'>

                    <a className='TitreMission1' href='*'>Professeur de soutien en programmation</a><br></br>
                    <label className='Duree'>Durée : </label>
                    <p>3 semaines</p>
                    <label className='Lieu'>Lieu : </label>
                    <p>Salary</p>
                    <label className='Thème'>Thèmes : </label>
                    <p>Programmation, Education</p>

                </div>

                {/* Bloc deuxième mission */}
                <div className='MissionNum2'>

                    <a className='TitreMission1' href='*'>Electricien</a><br></br>
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