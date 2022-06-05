import React from "react";

import "../Css/Action.css"
const quiz = new URL("../images/quiz.jpg", import.meta.url)
const PictureAsmada = new URL("../images/Asmada.jpg", import.meta.url)

function Test(){

    return(
        
        <div className="page-top">

            <div> 
                <img className="Photo1Test" src={quiz} />
            </div>
            <div className="logoAsmada"> 
                <img className="Photo2" src={PictureAsmada} />
            </div><br/><br/>

             <section className="resume-Titre">
                 
                <div className="resume-section-content">
                    <h1 className="Titre">
                       Test d'évaluation
                    </h1>
                </div><br/><br/>
            </section> 


            <hr className="m-0" />


            <section className="resume-sectionTest">
                
                <div className="resume-section-content">
                    <div className="d-flex flex-column flex-md-row justify-content-between ">
                        <div className="flex-grow-1">
                            <h3 className="GrosTitre">Test en informatique</h3>
                            <div className="subheadingP">Question 1</div>
                            <p>Le BIOS est le premier programme qui s'exécute lors de la mise en marche d'un ordinateur ?<br/>
                            </p>

                            <div>
                               <input type="checkbox" name="checkbox1" value="checkbox"/>
                                <label for="TextTest"> Vrai</label>
                            </div>

                            <div>
                               <input type="checkbox" name="checkbox1" value="checkbox"/>
                                <label for="TextTest"> Faux</label>
                            </div>

                        </div>
                    </div>
                    <br/>
                    <div className="d-flex flex-column flex-md-row justify-content-between ">
                        <div className="flex-grow-1">
                            <div className="subheadingP">Question 2</div>
                            <p>Le cerveau de tout système informatique est CPU ?<br/>
                            </p>

                            <div>
                               <input type="checkbox" name="checkbox1" value="checkbox"/>
                                <label for="TextTest"> Vrai</label>
                            </div>

                            <div>
                               <input type="checkbox" name="checkbox1" value="checkbox"/>
                                <label for="TextTest"> Faux</label>
                            </div>
                        
                        </div>
                    </div>
                    <br/>
                    <div className="d-flex flex-column flex-md-row justify-content-between ">
                        <div className="flex-grow-1">
                            <div className="subheadingP">Question 3</div>
                            <p>Une adresse IP se code sur 16 bits.<br/>
                            </p>

                            <div>
                               <input type="checkbox" name="checkbox1" value="checkbox"/>
                                <label for="TextTest"> Vrai</label>
                            </div>

                            <div>
                               <input type="checkbox" name="checkbox1" value="checkbox"/>
                                <label for="TextTest"> Faux</label>
                            </div>


                        </div>
                    </div>
                    <br/>
                    <div className="d-flex flex-column flex-md-row justify-content-between ">
                        <div className="flex-grow-1">
                            <div className="subheadingP">Question 4</div>
                            <p>Dans un système UNIX, il y a un super-utilisateur, généralement appelé "Administrateur", qui a tous les pouvoirs. Il peut accéder librement à toutes les ressources de l'ordinateur<br/>
                            </p>

                            <div>
                               <input type="checkbox" name="checkbox1" value="checkbox"/>
                                <label for="TextTest"> Vrai</label>
                            </div>

                            <div>
                               <input type="checkbox" name="checkbox1" value="checkbox"/>
                                <label for="TextTest"> Faux</label>
                            </div>

                        </div>
                    </div>
                    <br/>
                    <div className="d-flex flex-column flex-md-row justify-content-between ">
                        <div className="flex-grow-1">
                            <div className="subheadingP">Question 5</div>
                            <p>PHP est un langage de programmation côté serveur<br/>
                            </p>

                            <div>
                               <input type="checkbox" name="checkbox1" value="checkbox"/>
                                <label for="TextTest"> Vrai</label>
                            </div>

                            <div>
                               <input type="checkbox" name="checkbox1" value="checkbox"/>
                                <label for="TextTest"> Faux</label>
                            </div>

                        </div>
                    </div>
                    <br/>
                    <div className="d-flex flex-column flex-md-row justify-content-between ">
                        <div className="flex-grow-1">
                            <div className="subheadingP">Question 6</div>
                            <p>On mesure la fréquence d'un microprocesseur en MHz<br/>
                            </p>

                            <div>
                               <input type="checkbox" name="checkbox1" value="checkbox"/>
                                <label for="TextTest"> Vrai</label>
                            </div>

                            <div>
                               <input type="checkbox" name="checkbox1" value="checkbox"/>
                                <label for="TextTest"> Faux</label>
                            </div>
                            
                        </div>
                    </div>
                    <br/>
                    <div className="d-flex flex-column flex-md-row justify-content-between ">
                        <div className="flex-grow-1">
                            <div className="subheadingP">Question 7</div>
                            <p> L'octet est une unité de mesure en informatique mesurant la quantité de données, égal à 8 bytes<br/> 
                            </p>

                            <div>
                               <input type="checkbox" name="checkbox1" value="checkbox"/>
                                <label for="TextTest"> Vrai</label>
                            </div>

                            <div>
                               <input type="checkbox" name="checkbox1" value="checkbox"/>
                                <label for="TextTest"> Faux</label>
                            </div>

                        </div>
                    </div>
                    <br/> 
                    <div className="d-flex flex-column flex-md-row justify-content-between ">
                        <div className="flex-grow-1">
                            <div className="subheadingP">Question 8</div>
                            <p>"firewall" en informatique est souvent utilisé pour cloisonner un réseau privé.<br/>
                            </p>

                            <div>
                               <input type="checkbox" name="checkbox1" value="checkbox"/>
                                <label for="TextTest"> Vrai</label>
                            </div>

                            <div>
                               <input type="checkbox" name="checkbox1" value="checkbox"/>
                                <label for="TextTest"> Faux</label>
                            </div>

                        </div>
                    </div>
                    <br/>
                    <div className="d-flex flex-column flex-md-row justify-content-between ">
                        <div className="flex-grow-1">
                            <div className="subheadingP">Question 9</div>
                            <p>Si je veux ajouter une carte graphique sur mon PC, je peux l'insérer sur l'une des prises PCI Express 16x de la carte mère<br/>
                            </p>

                           
                            <div>
                               <input type="checkbox" name="checkbox1" value="checkbox"/>
                                <label for="TextTest"> Vrai</label>
                            </div>

                            <div>
                               <input type="checkbox" name="checkbox1" value="checkbox"/>
                                <label for="TextTest"> Faux</label>
                            </div>


                        </div>
                    </div>
                    <br/>
                    <div className="d-flex flex-column flex-md-row justify-content-between ">
                        <div className="flex-grow-1">
                            <div className="subheadingP">Question 10</div>
                            <p> l'internet qui s'occupe de l'acheminement des paquets TCP/IP ?<br/>
                            </p>

                            <div>
                               <input type="checkbox" name="checkbox1" value="checkbox"/>
                                <label for="TextTest"> Vrai</label>
                            </div>

                            <div>
                               <input type="checkbox" name="checkbox1" value="checkbox"/>
                                <label for="TextTest"> Faux</label>
                            </div>

                        </div>
                    </div>
                    <br/>

                     <div className="ParagDonTest" >
                        <div className="BoutonDonNous">
                                <a className="submitDonNousTest" href="#">Valider les réponses</a>
                        </div>
                    </div>
                       
                </div>

                
            </section>
        </div>
      
 
        
    );
}

export default Test;