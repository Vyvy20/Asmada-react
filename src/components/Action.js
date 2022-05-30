import React from "react";

import "../Css/Action.css"
const Picture1 = new URL("../images/7.jpg", import.meta.url)
const PictureAsmada = new URL("../images/Asmada.jpg", import.meta.url)

function Action(){

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
                    <h2 className="GrosTitre">Actions</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between ">
                        <div className="flex-grow-1">
                            <p> L’association ASMADA  a été fondée en 2003 par Arlette Bruel- Groléas pour soutenir, dans le respect des coutumes malgaches, le développement économique et culturel de la commune de ses ancêtres Masindray  située à 20 km d’Antananarivo, la capitale. Cinq pôles d’actions ont été mis en place <br/><br/>
                               - Eau<br/>
                               - Agriculture<br/>
                               - Electrification solaire<br/>
                               - Education<br/>
                               - Santé<br/>
                            </p> 
                        </div>
                    </div> 
                   <br/>
                    <div className="d-flex flex-column flex-md-row justify-content-between ">
                        <div className="flex-grow-1">
                            <h3 className="GrosTitre">Réalisations</h3>
                            <div className="subheadingP">Eau </div>
                            <p>ASMADA  a réalisé à partir de 2003 une adduction d’eau pour alimenter les hameaux ; elle a construit 3 grands réservoirs et 38 bornes-fontaines. <br/>
                               En 2020 ASMADA a réalisé des travaux de captage d'une source pour irriguer un verger de citronniers.  <br/> <br/>
                            </p>
                        </div>
                    </div>
                    <br/>
                    <div className="d-flex flex-column flex-md-row justify-content-between ">
                        <div className="flex-grow-1">
                            <div className="subheadingP">Agriculture</div>
                            <p>En 2008, ASMADA a loué 107 ha de terrain à la DREF (Direction Régionale des Eaux et Forêts de Madagascar)  pour planter 100 000 arbres (Eucalyptus citriodora et  Ravintsara) dont les feuilles produisent des huiles essentielles. ASMADA emploie 12 gardiens récolteurs.   Depuis 2017, ASMADA soutient la coopérative agricole FIFATAMASI en finançant des formations par le FERT-Madagascar concernant le choix des semences, des cultures, des intrants écologiques, mais aussi  les bonnes pratiques commerciales. <br/>
                               En 2020 ASMADA a financé la plantation de 200 citronniers Meyer. <br/></p>
                        </div>
                    </div>
                    <br/>

                    <br/>
                    <div className="d-flex flex-column flex-md-row justify-content-between ">
                        <div className="flex-grow-1">
                            <div className="subheadingP">Electrification solaire</div>
                            <p>ASMADA a subventionné depuis 2009 la pose de panneaux solaires sur un collège, 2 écoles primaires, un dispensaire et une bibliothèque. En 2018-2019 elle a financé la pose d’un générateur solaire hybride constitué de 30 panneaux solaires à l’hôpital de Mahitsy afin de suppléer aux baisses d’alimentation électrique fréquentes.<br/>
                            </p>
                        </div>
                    </div>
                    <br/>

                    <br/>
                    <div className="d-flex flex-column flex-md-row justify-content-between ">
                        <div className="flex-grow-1">
                            <div className="subheadingP">Education</div>
                            <p>ASMADA   a fait en 2015 des travaux de rénovation de la bibliothèque d’Ivoara (quartier de Masindray) la transformant en médiathèque grâce à l’acquisition de livres français et malgaches, de logiciels et  d’ordinateurs, acquisition rendue possible par l’électrification solaire. Une bibliothécaire est payée par ASMADA . Des cours de français sont assurés depuis 2016 par l’Alliance Française. Enfin une cantine scolaire a été créée fin 2019 pour assurer à une centaine d’enfants un repas équilibré en milieu de journée, ASMADA assure le financement de la nourriture, les parents d’élèves assurant bénévolement la cuisine.<br/>
                            </p>
                        </div>
                    </div>
                    <br/>

                    <br/>
                    <div className="d-flex flex-column flex-md-row justify-content-between ">
                        <div className="flex-grow-1">
                            <div className="subheadingP">Santé</div>
                            <p>Du petit matériel médical, des fauteuils roulants, 136 ordinateurs et 81 microscopes OLYMPUS ont été cédés  pour aider des centres médicaux. L’hôpital de Mahitsy a été équipé de 30 panneaux solaires. Nous avons par ailleurs soutenu les villageois de Masindray, le centre de santé du village ainsi que l’hôpital de Mahitsy face à la pandémie de coronavirus avec l’achat de masques, de blouses, de gel hydroalcoolique et de désinfectant. <br/>
                            </p>
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

export default Action;