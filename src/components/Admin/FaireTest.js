import React from "react";

import "../../Css/Action.css"
const quiz = new URL("../../images/quiz.jpg", import.meta.url)
const PictureAsmada = new URL("../../images/Asmada.jpg", import.meta.url)

function FaireTest(){

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
                    Création du test d'évaluation
                    </h1>
                </div><br/><br/>
            </section> 


            <hr className="m-0" />


            <section className="resume-sectionTest">
                
                <div className="resume-section-content">
                    <div className="d-flex flex-column flex-md-row justify-content-between ">
                        <div className="flex-grow-1">
                            <div className="TitreTest">
                                <h3 className="GrosTitreFaireTest">Test en </h3>
                                <input  type="email" placeholder="Entrez la catégorie de test" className="TextConnexionTest"  /> 
                            </div>

                            <div className="subheadingP">Question 1</div>
                            <input  type="email" placeholder="Entrez la question" className="TextConnexion"  /> 
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
                    <div className="d-flex flex-column flex-md-row justify-content-between ">
                        <div className="flex-grow-1">
                            <div className="subheadingP">Question 2</div>
                            <input  type="email" placeholder="Entrez la question" className="TextConnexion"  /> 

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
                            <input  type="email" placeholder="Entrez la question" className="TextConnexion"  /> 

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
                            <input  type="email" placeholder="Entrez la question" className="TextConnexion"  /> 

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
                            <input  type="email" placeholder="Entrez la question" className="TextConnexion"  /> 

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
                            <input  type="email" placeholder="Entrez la question" className="TextConnexion"  /> 

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
                            <input  type="email" placeholder="Entrez la question" className="TextConnexion"  /> 

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
                            <input  type="email" placeholder="Entrez la question" className="TextConnexion"  /> 

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
                            <input  type="email" placeholder="Entrez la question" className="TextConnexion"  /> 

                           
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
                            <input  type="email" placeholder="Entrez la question" className="TextConnexion"  /> 

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
                    <br/>

                    <div className="boutonTest">
                        <div className="ParagDonTest" >
                            <div className="BoutonTest">
                                    <a className="submitDonNousTest" href="#">Créer le Test</a>
                            </div>
                        </div>

                        <div className="ParagDonTest" >
                            <div className="BoutonDonNous">
                                    <a className="submitAnnuler" href="/ProfilAdmin">Annuler</a>
                            </div>
                        </div>
                    </div> 
                </div>

                
            </section>
        </div>
      
 
        
    );
}

export default FaireTest;