import React, {Component} from 'react';
import "../Css/Actu.css"

function Actu() {
    return (

        <div className='Actu'>

            <h1 className='TitrePageActu'>Actualités du moment</h1>
            <hr className='SepActu'></hr>

            {/* Bloc des actualités */}
            <div className='LstActu'>

                {/*
                <form className='FrmFiltre'>

                    <div className='Filtres'>

                        <h2 className='TitreFiltresRech'>Filtres de recherche</h2>
                        <label className='LblMotCle'>Mot-clé :</label>
                        <input type='text' className='TxtMotCle' value='Entrer un mot clé'></input>
                        <label className='LblThm'>Thème : </label>
                        <input type='text' className='TxtThm' value='Entrer un thème'></input> <br></br>
                        <input type='submit' className='BtnRech' value='Rechercher'></input>

                    </div>

                </form>*/}

                {/* Bloc première actualité */}
                <div className='ActuNum1'>

                    <a className='TitreActu1' href='*'>Pronuntiante puniri sorte cum sorte</a><br></br>
                    <label className='LblResumeNum1'>Résumé</label>
                    <p className='ResumeActu1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                </div>

                {/* Bloc deuxième mission */}
                <div className='ActuNum2'>

                    <a className='TitreActu1' href='*'>Test</a><br></br>
                    <label className='LblResumeNum2'>Résumé</label>
                    <p className='ResumeActu2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    
                </div>

            </div>

        </div>
    )
}

export default Actu;