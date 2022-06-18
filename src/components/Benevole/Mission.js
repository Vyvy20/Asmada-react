import React, {Component} from 'react';
import "../../Css/Mission.css"

const Miss = new URL("../../images/Mission.png", import.meta.url)
const PictureAsmada = new URL("../../images/Asmada.jpg", import.meta.url)
const PictureJava = new URL("../../images/java.jpg", import.meta.url)
const PictureElect = new URL("../../images/Elect.jpg", import.meta.url)
const PictureMaçon = new URL("../../images/maçon.jpg", import.meta.url)
const PictureCuis = new URL("../../images/dessin-cuisinier.png", import.meta.url)

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
                    <p>Programmation</p>
                    <img className="Photo2Miss" src={PictureJava} />

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
                    <img className="Photo2Miss" src={PictureElect} />
                    
                </div>

                {/* Bloc troisième mission */}
                <div className='MissionNum3'>

                    <a className='TitreMission1' href='*'>Maçon</a><br></br>
                    <label className='Duree'>Durée : </label>
                    <p>1 semaine</p>
                    <label className='Lieu'>Lieu : </label>
                    <p>Tuléar</p>
                    <label className='Thème'>Thèmes : </label>
                    <p>Maçonerie</p>
                    <img className="Photo2Miss" src={PictureMaçon} />
                    
                </div>

                {/* Bloc quatrième mission */}
                <div className='MissionNum4'>

                    <a className='TitreMission1' href='*'>Cuisinier</a><br></br>
                    <label className='Duree'>Durée : </label>
                    <p>1 mois</p>
                    <label className='Lieu'>Lieu : </label>
                    <p>Majunga</p>
                    <label className='Thème'>Thèmes : </label>
                    <p>Cuisine</p>
                    <img className="Photo2Miss" src={PictureCuis} />
                    
                </div>

            </div>

        </div>
    )
}

export default Mission;