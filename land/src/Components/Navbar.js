import React, { useState } from "react";
import logo from "../Assets/logo.png";
import {BsCart2} from "react-icons/bs";
import HomeIcon from "@mui/icons-material/Home";

const Navbar = () =>{
    const[openMenu, SetOpenMenu] = useState = false;
    const menuOptions = [
        {
            text: "Home",
            icon:<HomeIcon />,
        }
    ];

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
            <a href="">
              <BsCart2 className="navbar-icon-cart"/>
            </a>
            {/* 
            o botão abaixo é uma ideia para pedidos grandes
            não sei se ficará no projeto final
            */}
            <button className="primaryButton">Reserve</button>
            </div>

            <div className="navBarMenu">

            </div>
        </nav>
    )
        
    
};

export default Navbar;