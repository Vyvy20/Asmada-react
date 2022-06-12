import React, {Component} from 'react';
import "../Css/SuppDemandeActu.css"

function DemandeSuppActu() {
    return (

        <div className='ActuAdminDemandeSupp'>

            <h1 className='TitrePageActuADemandeSupp'>Actualités du moment</h1>
            <hr className='SepDemandeSuppActu'></hr>
            <input type='submit' className='btnAjouterActu' value='Ajouter une actualité'></input>
            
            {/* Bloc des actualités */}
            <div className='LstActuAdminDemandeSupp'>

                {/* Bloc première actualié */}
                <div className='ActuNum1ADemandeSupp'>
                    <h2 className='TitreActu1ADemandeSupp' href='*'>Pronuntiante puniri sorte cum sorte</h2>
                    <label className='LblResumeNum1ADemandeSupp'>Résumé</label>
                    <p className='ResumeActu1ADemandeSupp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <input className='btnModifActuDemandeSupp' type="submit" value="Modifier " />
                    <input className='btnSuppActuDemandeSupp' type="submit" value="Supprimer " />

                </div>

                {/* Bloc deuxième actualité */}
                <div className='ActuNum2ADemandeSupp'>

                <h2 className='TitreActu2DemandeSupp' href='*'>Test du moment</h2>
                    <label className='LblResumeNum2DemandeSupp'>Résumé</label>
                    <p className='ResumeActu2DemandeSupp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <input className='btnModifActuDemandeSupp' type="submit" value="Modifier " />
                    <input className='btnSuppActuDemandeSupp' type="submit" value="Supprimer " />
                    
                </div>

            </div>

            {/*Bloc suppression*/}
            <div className='CacheActu'>
            
                {/*Bloc demande de suppression*/}
                <div className='DemandeSupActu'>

                    <p className='MsgSupDemandeActu'>Voulez-vous vraiment supprimer supprimer cette mission ?</p>
                    <input type='submit' className='BtnOuiSuppActu' value='Oui'></input>
                    <input type='submit' className='BtnNonSuppActu' value='Non'></input>
                </div>

            </div>

        </div>
    )
}

export default DemandeSuppActu;