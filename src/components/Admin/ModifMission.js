import React, {Component} from 'react';
import "../../Css/ModifMission.css"
const Miss = new URL("../../images/Mission.png", import.meta.url)
const PictureAsmada = new URL("../../images/Asmada.jpg", import.meta.url)

function ModifMission() {
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
                        Modification d'une mission
                    </h1>
                </div><br/><br/>
            </section> 
            <div className='ModifMiss'>
                <label className='LblTitreMissModif'>Titre :</label><br></br>
                <input type='text' className='TxtTitreMissModif' placeholder='Professeur de soutien en programmation'></input><br></br>
                <label className='LblDureeModif'>Durée :</label><br></br>
                <input type='text' className='TxtDureeModif' placeholder='3 semaines'></input><br></br>
                <label className='LblLieuModif'>Lieu :</label><br></br>
                <input type='text' className='TxtLieuModif' placeholder='Salary'></input><br></br>
                <label className='LblDomModif'>Domaines :</label><br></br>
                <input type='text' className='TxtDomModif' placeholder='Programmation, Education'></input><br></br>
                <label className='LblDescModif'>Description :</label><br></br>
                <textarea className='TxtDescModif' placeholder='Cette mission consiste à aider les adolescents qui ont des difficultés en programmation.'></textarea><br></br>
                <label className='LblImg'>Image :</label>
                <div className='ZoneGlissDep'>Glisser-Déposer</div>
                <input type='submit' className='BtnModif' value='Modifier'></input>
                <input type='submit' className='BtnAnnulModif' value='Annuler'></input>
            </div>
        </div>
    )
}

export default ModifMission;