import React from "react";
import logo from "../Assets/logo.png"

const Navbar = () =>{

    return(
        <nav>
            <div className="logoNav">
                <img src={logo} alt="logo cafeteria"/>
            </div>

            <div className="linksNav">
            <a href="">Home</a>
            <a href="">Nossos cafés</a>
            <a href="">Sobre</a>
            <a href="">Contato</a>
            </div>
        </nav>
    )
        
    
};

export default Navbar;