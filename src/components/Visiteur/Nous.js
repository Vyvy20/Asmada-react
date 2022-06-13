import React from "react";

import "../../Css/Action.css"
const PictureNous = new URL("../../images/Nous.jpg", import.meta.url)
const PictureAsmada = new URL("../../images/Asmada.jpg", import.meta.url)
const Maps = new URL("../../images/Maps.jpg", import.meta.url)

function Nous(){

    return(
        
        <div className="page-top">

            <div> 
                <img className="Photo1" src={PictureNous} />
            </div>
            <div className="logoAsmada"> 
                <img className="Photo2" src={PictureAsmada} />
            </div><br/><br/>

             <section className="resume-Titre">
                 
                <div className="resume-section-content">
                    <h1 className="Titre">
                         ASMADA
                    </h1>
                    <h5 className="TitreAss">Humanitaire - Caritative</h5>
                    <div className="subheading">
                    ASSOCIATION D'AIDE AU DÉVELOPPEMENT DE COMMUNES RURALES À MADAGASCAR
                    </div>
                </div><br/><br/>
            </section> 


            <hr className="m-0" />


            <section className="resume-section">
                
                <div className="resume-section-content">
                    <h2 className="GrosTitre">Historique</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between ">
                        <div className="flex-grow-1">
                            <p>L'association ASMADA a été fondé le 12 mars 2003 à Neuilly sur Seine à l'initiative d'un agent INSERM, d'origine Malgache : Mme Arlette Bruel-Groléas. <br/><br/>
                            Voyant la population malgache désoeuvrée, elle décide d'entreprendre des actions humanitaires pour assouvir les besoins vitaux des malgaches : entrainant la naissance d'ASMADA. <br/>
                            </p> 
                        </div>
                    </div> 
                   <br/>
                    <div className="d-flex flex-column flex-md-row justify-content-between ">
                        <div className="flex-grow-1">
                            <h3 className="GrosTitre">Objet</h3>
                            <p>Aider au développement de communautés rurales de Madagascar. L’association se propose de favoriser le développement d’infrastructures légères destinées à améliorer la vie agricole, rurale, artisanale, sanitaire, sociale et culturelle par tous moyens. L’objectif prioritaire de l’association concernera l’aide au développement économique, culturel et social du village de Soavina, dans la commune de Masindray à l’est de Antananarivo, capitale de Madagascar, et éventuellement étendra ses activités à d’autres villages de Madagascar. L’association pourra également participer directement ou indirectement à toute activité ayant le même objet et s’intéresser à toute activité secondaire ou connexe qui serait susceptible de concourir à la réalisation de son objet.<br/> <br/>
                            </p>
                        </div>
                    </div>
                    <br/>
                    <div className="d-flex flex-column flex-md-row justify-content-between ">
                        <div className="flex-grow-1">
                             <h3 className="GrosTitre">Administration</h3>
                            <div className="subheadingP">Présidente :</div>
                                <p>Mme Arlette BRUEL-GROLEAS (Ingénieur-Chercheur) de nationalité franco-malgache, née le 3 juillet 1944 à Antananarivo (Madagascar), domiciliée au 111 avenue Charles de Gaulle 92200 Neuilly sur Seine.<br/>
                                 Tel : 01 46 24 52 57<br/>
                                 Mel : abruel@chu-stlouis.fr<br/><br/></p>

                                 <div className="subheadingP">Trésorière : :</div>
                                <p>Mme Jacqueline DRUGUET-CIRRINCIONE<br/>
                                 Mel : j.cirrincione@wanadoo.fr<br/><br/></p>

                                 <div className="subheadingP">Secrétaire Général :</div>
                                <p>Mr Timothée BRUEL<br/>
                                 Mel : Mel : timoth38@hotmail.com<br/><br/></p>

                                 <div className="subheadingP">Vice - Président </div>
                                <p>Mr Pascal BRUEL<br/>
                                Mel : pascal.bruel@socgen.com<br/><br/></p>
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

            <section className="resume-Titre">
                 
                 <div className="Maps">
                     <h1 className="Titre"> Où nous trouver </h1><br/><br/>
                     <div className="NousMaps">
                             <div  className="imgMaps">
                                  <a href="https://goo.gl/maps/FMGGQGYtDcoBSB1H7"><img  className="PhotoMaps" src={Maps} /></a>
                             </div>
                            <div className="Coordonnees">
                                 <div>
                                     <h3>Coordonnées</h3>
                                 </div>
                                 <div>
                                    <label>Adresse</label>
                                    <p>Maison des associations, 5 bis villa Emile Bergerat, 92200 Neuilly sur Seine</p>
                                 </div>
                                   
                                 <div>
                                    <label>Email</label>
                                    <p>asmada01@yahoo.fr</p>
                                 </div>

                                 <div>
                                    <label>Téléphone</label>
                                    <p>0642514669</p>
                                 </div>
                        
                            </div>
                    </div>
                 </div><br/><br/>
             </section> 


        </div>
      
 
        
    );



}

export default Nous;