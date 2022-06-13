import React, {Component} from 'react';
import "../Css/Mission.css"
const Miss = new URL("../images/Mission.png", import.meta.url)
const PictureAsmada = new URL("../images/Asmada.jpg", import.meta.url)

function Mission() {
    return (

        <div className="page-top">

            <div> 
                <img className="Photo1Miss" src={Miss} />
            </div>
            <div className="logoAsmada"> 
                <img className="Photo2" src={PictureAsmada} />
            </div><br/><br/>

             <section className="resume-Titre">
                 
                <div className="resume-section-content">
                    <h1 className="Titre">
                    Missions proposées
                    </h1>
                </div><br/><br/>
            </section> 

            {/* Bloc des missions */}
            <div className='LstMissions'>

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