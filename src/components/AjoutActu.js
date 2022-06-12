import React, {Component} from 'react';
import "../Css/AjoutActu.css"

function AjoutActu() {
    return (

       

            <div className='AjoutActuEns'>

                <h1 className='TitreAjoutActu'>Ajout d'une actualité</h1>
                <hr className='SepAjoutActu'></hr>
                <form className='FormAjoutActu'>
                    <div className='AjoutActu'>
                        <label className='LblTitreActu'>Titre :</label><br></br>
                        <input type='text' className='TxtTitreActu' placeholder='Entrez un titre'></input><br></br>
                        <label className='LblResuActu'>Résumé :</label><br></br>
                        <textarea className='TxtResuActu' placeholder='Entrez un résumé'></textarea><br></br>
                        <label className='LblDescActu'>Description :</label><br></br>
                        <textarea className='TxtDescActu' placeholder='Entrez une description'></textarea><br></br>
                        <input type='submit' className='BtnAjoutActu' value='Ajouter'></input>
                        <input type='submit' className='BtnAnnulActu' value='Annuler'></input>
                    </div>
                </form>
            </div>
    )
}

export default AjoutActu;