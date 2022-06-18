import React, {Component} from 'react';
import "../../Css/SuppDemandeMission.css"
const Miss = new URL("../../images/Mission.png", import.meta.url)
const PictureAsmada = new URL("../../images/Asmada.jpg", import.meta.url)
const PictureJava = new URL("../../images/java.jpg", import.meta.url)
const PictureElect = new URL("../../images/Elect.jpg", import.meta.url)
const PictureMaçon = new URL("../../images/maçon.jpg", import.meta.url)
const PictureCuis = new URL("../../images/dessin-cuisinier.png", import.meta.url)

function MissionDemandeSup() {
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
                    Gestion des missions
                    </h1>
                </div><br/><br/>
            </section> 

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
                    <p>Programmation</p>
                    <img className="Photo2Miss" src={PictureJava} />
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
                    <img className="Photo2Miss" src={PictureElect} />
                    <input className='btnModif' type="submit" value="Modifier " />
                    <input className='btnSupp' type="submit" value="Supprimer " />
                    
                </div>

                {/*Bloc 3ème mission*/}
                <div className='MissionNum3A'>

                    <h2 className='TitreMission1' href='*'>Maçon</h2>
                    <label className='Duree'>Durée : </label>
                    <p>1 semaine</p>
                    <label className='Lieu'>Lieu : </label>
                    <p>Tuléar</p>
                    <label className='Thème'>Thèmes : </label>
                    <p>Maçonerie</p>
                    <img className="Photo2Miss" src={PictureMaçon} />
                    <input className='btnModif' type="submit" value="Modifier " />
                    <input className='btnSupp' type="submit" value="Supprimer " />
                    
                </div>

                {/*Bloc 4ème mission*/}
                <div className='MissionNum4A'>

                <h2 className='TitreMission1' href='*'>Cuisinier</h2>
                    <label className='Duree'>Durée : </label>
                    <p>1 mois</p>
                    <label className='Lieu'>Lieu : </label>
                    <p>Majunga</p>
                    <label className='Thème'>Thèmes : </label>
                    <p>Cuisine</p>
                    <img className="Photo2Miss" src={PictureCuis} />
                    <input className='btnModif' type="submit" value="Modifier " />
                    <input className='btnSupp' type="submit" value="Supprimer " />
                    
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