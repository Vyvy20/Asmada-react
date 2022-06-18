import React, {Component} from 'react';
import "../../Css/Actu.css"
const PictureAsmada = new URL("../../images/Asmada.jpg", import.meta.url)
const PictureNews = new URL("../../images/Journal.jpeg", import.meta.url)
const PictureEcole = new URL("../../images/ecole.jpg", import.meta.url)
const PictureHop= new URL("../../images/Hôpital.jpg", import.meta.url)
const PicturePot= new URL("../../images/potager.jpg", import.meta.url)
const PictureBien= new URL("../../images/Bienvenue.png", import.meta.url)
const PictureChanti= new URL("../../images/Chantier.jpg", import.meta.url)
const PictureSol= new URL("../../images/solaire.jpg", import.meta.url)

function Actu() {
    return (

        <div className="page-top">

            <div> 
                <img className="Photo1Miss" src={PictureNews} />
            </div>
            <div className="logoAsmada"> 
                <img className="Photo2" src={PictureAsmada} />
            </div><br/><br/>

             <section className="resume-Titre">
                 
                <div className="resume-section-content">
                    <h1 className="Titre">
                    Actualités du moment
                    </h1>
                </div><br/><br/>
            </section>

            {/* Bloc des actualités */}
            <div className='LstActu'>

                {/* Bloc première actualité */}
                <div className='ActuNum1'>

                    <a className='TitreActu1' href='*'>Une école est ouverte !</a><br></br>
                    <img className="Photo2Actu" src={PictureEcole} /><br></br>
                    <label className='LblResumeNum1'>Résumé</label>
                    <p className='ResumeActu1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                </div>

                {/* Bloc deuxième actualité */}
                <div className='ActuNum2'>

                    <a className='TitreActu1'>Construction d'un hôpital</a><br></br>
                    <img className="Photo2Actu" src={PictureHop} /><br></br>
                    <label className='LblResumeNum1'>Résumé</label>
                    <p className='ResumeActu1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    
                </div>

                {/* Bloc troisième actualité */}
                <div className='ActuNum3'>

                    <a className='TitreActu1'>Projet d'un potager</a><br></br>
                    <img className="Photo2Actu" src={PicturePot} /><br></br>
                    <label className='LblResumeNum1'>Résumé</label>
                    <p className='ResumeActu1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    
                </div>

                 {/* Bloc quatrième actualité */}
                 <div className='ActuNum4'>

                    <a className='TitreActu1'>Des idées de chantier</a><br></br>
                    <img className="Photo2Actu" src={PictureChanti} /><br></br>
                    <label className='LblResumeNum1'>Résumé</label>
                    <p className='ResumeActu1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                </div>

                {/* Bloc cinquième actualité */}
                <div className='ActuNum5'>

                    <a className='TitreActu1'>Panneaux solaires pour le lycée</a><br></br>
                    <img className="Photo2Actu" src={PictureSol} /><br></br>
                    <label className='LblResumeNum1'>Résumé</label>
                    <p className='ResumeActu1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                </div>

                {/* Bloc sixième actualité */}
                <div className='ActuNum6'>

                    <a className='TitreActu1'>Bienvenue aux nouveaux membres !</a><br></br>
                    <img className="Photo2Actu" src={PictureBien} /><br></br>
                    <label className='LblResumeNum1'>Résumé</label>
                    <p className='ResumeActu1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    
                </div>

            </div>

        </div>
    )
}

export default Actu;