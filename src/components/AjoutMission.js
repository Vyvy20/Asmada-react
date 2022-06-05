import React, {Component} from 'react';

function AjoutMission() {
    return (

        <form className='FormAjoutMiss'>

            <div className='AjoutMiss'>

                <h1 className='TitreAjoutMiss'>Ajout d'une mission</h1>
                <label className='LblTitreMiss'>Titre :</label>
                <input type='text' className='TxtTitreMiss' value='Entre un titre'></input>
                <label className='LblDuree'>Durée :</label>
                <input type='text' className='TxtDuree' value='Entre une durée'></input><br></br>
                <label className='LblLieu'>Lieu :</label>
                <input type='text' className='TxtLieu' value='Entre un lieu'></input>
                <label className='LblDom'>Domaines :</label>
                <input type='text' className='TxtDom' value='Entre des domaines'></input><br></br>
                <label className='LblDesc'>Description :</label><br></br>
                <textarea className='TxtDesc'></textarea><br></br>
                <input type='submit' className='BtnAjout' value='Ajouter'></input>
            </div>

        </form>
    )
}

export default AjoutMission;