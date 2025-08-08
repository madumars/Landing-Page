import React from "react";
import logo from "../Assets/logo.png";
import {BsCart2} from "react-icons/bs";

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
            <BsCart2 className="navbar-icon-cart"/>
            </div>
        </nav>
    )
        
    
};

export default Navbar;