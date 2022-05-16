import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsFillGeoAltFill } from "react-icons/bs";
import "../Css/App.css"

function footer(){
    return(
        <footer>
            <div className="containerFooter"> 
                    <div class="footer_col">
                            <ul>
                               <li><a className="figurlignefooter" href="#" >Mentions Légales</a></li>
                               <li><a className="figurlignefooter" href="#" >Association ASMADA n° w922006766</a></li>
                            </ul>
                    </div>
                    <div class="footer_col">
                        <ul>
                            <li><a className="figurlignefooter" href="https://www.facebook.com/Asmada/" ><BsFacebook /> Rejoignz-nos</a></li>
                            <li><a className="figurlignefooter" href="https://www.google.com/maps/dir/?api=1&destination=48.88516%2C2.26086&fbclid=IwAR25UUfkpF7BePw3pQEsZvl4vvc5Y1zWjjvHf3M0qDWz8inuDZPWXtWeAUU" ><BsFillGeoAltFill /> 5 bis villa Emile Bergerat 92200 Neuilly sur Seine </a></li>
                        </ul>
                    </div>
            </div>     
        </footer>  
    );

}

export default footer;