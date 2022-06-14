import React, {Component} from 'react';
import "../Css/AjoutMission.css"
const Miss = new URL("../images/Mission.png", import.meta.url)
const PictureAsmada = new URL("../images/Asmada.jpg", import.meta.url)

function AjoutMission() {
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
                        Ajout d'une mission
                    </h1>
                </div><br/><br/>
            </section> 
            <form className='FormAjoutMiss'>
                <div className='AjoutMiss'>
                    <label className='LblTitreMiss'>Titre :</label><br></br>
                    <input type='text' className='TxtTitreMiss' placeholder='Entrez un titre'></input><br></br>
                    <label className='LblDuree'>Durée :</label><br></br>
                    <input type='text' className='TxtDuree' placeholder='Entrez une durée'></input><br></br>
                    <label className='LblLieu'>Lieu :</label><br></br>
                    <input type='text' className='TxtLieu' placeholder='Entrez un lieu'></input><br></br>
                    <label className='LblDom'>Domaines :</label><br></br>
                    <input type='text' className='TxtDom' placeholder='Entrez un domaine'></input><br></br>
                    <label className='LblDesc'>Description :</label><br></br>
                    <textarea className='TxtDesc' placeholder='Entrez une description'></textarea><br></br>
                    <label className='LblImg'>Image :</label>
                    <div className='ZoneGlissDep'>Glisser-Déposer</div>
                    <input type='submit' className='BtnAjout' value='Ajouter'></input>
                    <input type='submit' className='BtnAnnul' value='Annuler'></input>
                </div>
            </form>
        </div>
    )
}

export default AjoutMission;