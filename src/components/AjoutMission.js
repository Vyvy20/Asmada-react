import React, {Component} from 'react';
import "../Css/AjoutMission.css"

function AjoutMission() {
    return (

       

            <div className='AjoutMissEns'>

                <h1 className='TitreAjoutMiss'>Ajout d'une mission</h1>
                <hr className='SepAjoutMiss'></hr>
                <form className='FormAjoutMiss'>
                    <div className='AjoutMiss'>
                        <label className='LblTitreMiss'>Titre :</label><br></br>
                        <input type='text' className='TxtTitreMiss' placeholder='Entre un titre'></input><br></br>
                        <label className='LblDuree'>Durée :</label><br></br>
                        <input type='text' className='TxtDuree' placeholder='Entre une durée'></input><br></br>
                        <label className='LblLieu'>Lieu :</label><br></br>
                        <input type='text' className='TxtLieu' placeholder='Entre un lieu'></input><br></br>
                        <label className='LblDom'>Domaines :</label><br></br>
                        <input type='text' className='TxtDom' placeholder='Entre des domaines'></input><br></br>
                        <label className='LblDesc'>Description :</label><br></br>
                        <textarea className='TxtDesc'></textarea><br></br>
                        <input type='submit' className='BtnAjout' value='Ajouter'></input>
                        <input type='submit' className='BtnAnnul' value='Annuler'></input>
                    </div>
                </form>
            </div>
    )
}

export default AjoutMission;