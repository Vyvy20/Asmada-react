import React from "react";

const logoPicture = new URL("../images/Asmada1.jpg", import.meta.url)
function Header(){
    return <>
    <header>
        <img src={logoPicture} />
    </header> 
    </>

}

export default Header;