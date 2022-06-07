import React, {Component} from 'react';

function ModifMission() {
    return (

       

            <div className='ModifMissEns'>

                <h1 className='TitreModifMiss'>Ajout d'une mission</h1>
                <hr className='SepModifMiss'></hr>
                <form className='FormModifMiss'>
                    <div className='ModifMiss'>
                        <label className='LblTitreMissModif'>Titre :</label><br></br>
                        <input type='text' className='TxtTitreMissModif' value='Entre un titre'></input><br></br>
                        <label className='LblDureeModif'>Durée :</label><br></br>
                        <input type='text' className='TxtDureeModif' value='Entre une durée'></input><br></br>
                        <label className='LblLieuModif'>Lieu :</label><br></br>
                        <input type='text' className='TxtLieuModif' value='Entre un lieu'></input><br></br>
                        <label className='LblDomModif'>Domaines :</label><br></br>
                        <input type='text' className='TxtDomModif' value='Entre des domaines'></input><br></br>
                        <label className='LblDescModif'>Description :</label><br></br>
                        <textarea className='TxtDescModif'></textarea><br></br>
                        <input type='submit' className='BtnModif' value='Ajouter'></input>
                        <input type='submit' className='BtnAnnulModif' value='Annuler'></input>
                    </div>
                </form>
            </div>
    )
}

export default ModifMission;