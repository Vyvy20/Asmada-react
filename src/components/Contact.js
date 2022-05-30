import React from "react";

import "../Css/Action.css"
const Picture1 = new URL("../images/2.jpg", import.meta.url)
const PictureAsmada = new URL("../images/Asmada.jpg", import.meta.url)

function Contact(){

    return(
        
        <div className="page-top">

            <div> 
                <img className="Photo1" src={Picture1} />
            </div>
            <div className="logoAsmada"> 
                <img className="Photo2" src={PictureAsmada} />
            </div><br/><br/>

             <section className="resume-Titre">
                 
                <div className="resume-section-content">
                    <h1 className="Titre">
                          NOUS RENCONTRER
                    </h1>
                </div><br/><br/>
            </section> 


            <hr className="m-0" />


            <section className="resume-section">
                
                <div className="resume-section-content">
                    <div className="d-flex flex-column flex-md-row justify-content-between ">
                        <div className="flex-grow-1">
                            <h3 className="GrosTitre">COORDONNÉES</h3>
                            <div className="subheadingP">ASMADA</div>
                            <p>Maison des associations - 5 bis Villa Emile Bergerat<br/>
                               92200 Neuilly sur Seine. <br/>
                               Tél: 01 55 61 91 20/21 <br/>
                               Email: asmada01@yahoo.fr </p>
                        </div>
                    </div>
                    <br/>
                    <div className="d-flex flex-column flex-md-row justify-content-between ">
                        <div className="flex-grow-1">
                            <div className="subheadingP">Présidente fondatrice</div>
                            <p>Arlette Bruel-Groléas<br/>
                               92200 Neuilly sur Seine. <br/>
                               Tél: 0642514669 <br/>
                               Email: arlette.bruel@gmail.com </p>
                        </div>
                    </div>
                    <br/>
                    <div className="GrosTextDon">
                         <h2 className="TextDon">Vous aimez notre organisme ?</h2>
                         <div >
                            <div className="ParagDon" >
                                  <p className="TextDon-P">Soutenez les villageois d'une commune de Madagascar en faisant un don <br/>
                                  </p>
                                 <div className="BoutonDonNous">
                                      <a className="submitDonNous" href="https://www.helloasso.com/associations/asmada/formulaires/3" >FAIRE UN DON</a>
                                </div>
                             </div>
                        </div> 
                    </div>

                </div>

                
            </section>
        </div>
      
 
        
    );
}

export default Contact;