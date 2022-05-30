import React from "react";

import {BrowserRouter as Routes, Route, Link} from "react-router-dom"
import Inscription from "./Inscription";
import "../Css/App.css"


const Picture1 = new URL("../images/7.jpg", import.meta.url)
const Picture2 = new URL("../images/5.jpg", import.meta.url)
const Log1 = new URL("../images/Log1.png", import.meta.url)
const Log2 = new URL("../images/Log2.png", import.meta.url)
const Log3 = new URL("../images/Log3.png", import.meta.url)
const Log4 = new URL("../images/Log4.png", import.meta.url)
const Log5 = new URL("../images/Log5.png", import.meta.url)
const Log6 = new URL("../images/Log6.png", import.meta.url)
const Log7 = new URL("../images/Log7.png", import.meta.url)

function Article(){
    return(
       
        <div className="ArticleGlobale">
            <div className="Article1">
                
                 <div className="Presentation">
                     <div className="PresentationDemi">
                        <p className="PresentationTxt"> ASMADA : ASSOCIATION D’AIDE AU DÉVELOPPEMENT DE COMMUNES RURALES À MADAGASCAR   
                        </p>
                        <p className="PresentationTxt1">Devenez membre de l'association, faites-nous un don, inscrivez-vous et devenez acteur de nos actions.</p>
                        <div className="BoutonDon">
                         
                            <a  className="submitDon" href="https://www.helloasso.com/associations/asmada/formulaires/3" >FAIRE UN DON</a>

                        </div>
                    </div>
                </div>
                 <div className="Picturs">
                    <img className="Pict" src={Picture1} />
                    <img className="Pict1" src={Picture2} />
                         <div className="Bouton">
                         
                         <a  className="submit" type="submit" href="/Inscription"> Devenir bénévole</a>

                         </div>
                </div>

            </div>

            <div className="Article2">
                
                <div className="Contact">
                     <ul className="listeContact">
                         <a href="/Contact" className="itemsContact"> Contact</a><br></br>
                         <li href="https://www.helloasso.com/associations/asmada/formulaires/3" className="itemsContact">  Faire un don</li><br></br>
                         <a href="/Action" className="itemsContact"> Nos projet</a>
                      </ul>
s
                </div>

                <div className="Partenaires">
                    <p className="textParag">NOUS PARTENAIRES</p>
                    <div className="PicParten">
                      <img className="LogPict" src={Log1} />
                      <img className="LogPict" src={Log2} />
                      <img className="LogPict" src={Log3} />
                      <img className="LogPict" src={Log4} />
                      <img className="LogPict" src={Log5} />
                      <img className="LogPict" src={Log6} />
                     <img className="LogPict" src={Log7} />
                    </div>

                </div>
            </div>

        </div>
    );

}

export default Article;