import React, {Component} from 'react';
import "../../Css/DetailMission.css"
const Miss = new URL("../../images/Mission.png", import.meta.url)
const PictureAsmada = new URL("../../images/Asmada.jpg", import.meta.url)
const PictureJava = new URL("../../images/java.jpg", import.meta.url)

function DetailMission() {
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
                        Professeur de soutien en programmation
                    </h1>
                </div><br/><br/>
            </section>

            <div className='MissionAssoDetail'>
                <label className='DureeMiss'>Durée : </label>
                <p>3 semaines</p>
                <label className='LieuMiss'>Lieu : </label>
                <p>Salary</p>
                <label className='ThemeMiss'>Thèmes : </label>
                <p>Programmation</p>
                <label className='Descrip'>Description : </label>
                <p>Cette mission consiste à aider les adolescents qui ont des difficultés en programmation.</p>
                <img className="Photo2MissDet" src={PictureJava} />

                <form>
                    <div className='Dispo'>

                        <label className='TrancheDispo'>Disponibilité du : </label>
                        <input type="text" placeholder="Entrez une date de début" className='DateDebut'  />
                        <label className='TrancheDispo2'> au </label>
                        <input type="text" placeholder="Entrez une date de fin" className='DateFin'  />

                    </div>
                </form><br></br>

                <input className='btnQuest' type="submit" value="Réaliser le test " />
                <input className='btnPostu' type="submit" value="Postuler " />

            </div>

        </div>
    )
}

export default DetailMission;