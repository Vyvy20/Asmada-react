import React from "react";

import Inscription from "./Inscription";
import App from "./App";


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
                    <p> L’ASSOCIATION D’AIDE AU DÉVELOPPEMENT DE COMMUNES RURALES À MADAGASCAR

                    </p>

                </div>
                 <div className="Picturs">
                    <img className="Pict" src={Picture1} />
                    <img className="Pict" src={Picture2} />
                         <div className="Bouton">
                         
                         <div  className="submit" type="submit" to="/Inscription"> Devenir bénévole</div>

                         </div>
                </div>

               
            </div>

            <div className="Article2">
                
                <div className="Contact">
                     <ul className="listeContact">
                         <li className="itemsContact"> Contact </li>
                         <li className="itemsContact"> Faire un don</li>
                         <li className="itemsContact"> Nos projet</li>
                      </ul>

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