import React, {Component} from 'react';
import "../Css/ActuAdmin.css"

function ActuAdmin() {
    return (

        <div className='ActuAdmin'>

            <h1 className='TitrePageActuA'>Actualités du moment</h1>
            <hr className='SepActuA'></hr>
            <input type='submit' className='btnAjouterActu' value='Ajouter une actualité'></input>
            
            {/* Bloc des actualités */}
            <div className='LstActuAdmin'>

                {/* Bloc première actualié */}
                <div className='ActuNum1A'>
                    <h2 className='TitreActu1A' href='*'>Pronuntiante puniri sorte cum sorte</h2>
                    <label className='LblResumeNum1A'>Résumé</label>
                    <p className='ResumeActu1A'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <input className='btnModifActu' type="submit" value="Modifier " />
                    <input className='btnSuppActu' type="submit" value="Supprimer " />

                </div>

                {/* Bloc deuxième actualité */}
                <div className='ActuNum2A'>

                <h2 className='TitreActu1' href='*'>Test du moment</h2>
                    <label className='LblResumeNum2'>Résumé</label>
                    <p className='ResumeActu2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <input className='btnModifActu' type="submit" value="Modifier " />
                    <input className='btnSuppActu' type="submit" value="Supprimer " />
                    
                </div>

            </div>

        </div>
    )
}

export default ActuAdmin;