import React, {Component} from 'react';
import "../Css/ModifMission.css"

function ModifMission() {
    return (

       

            <div className='ModifMissEns'>

                <h1 className='TitreModifMiss'>Modification d'une mission</h1>
                <hr className='SepModifMiss'></hr>
                <form className='FormModifMiss'>
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
                        <input type='submit' className='BtnModif' value='Modifier'></input>
                        <input type='submit' className='BtnAnnulModif' value='Annuler'></input>
                    </div>
                </form>
            </div>
    )
}

export default ModifMission;