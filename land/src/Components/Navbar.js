import React, { useState } from "react";
import logo from "../Assets/logo.png";
import {BsCart2} from "react-icons/bs";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
//import {HitOutlineBars3} from "react-icons/hi2";
import { HiBars3 } from "react-icons/hi2";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const Navbar = () =>{
    const[openMenu, SetOpenMenu] = useState(false);
    const menuOptions = [
        {
            text: "Home",
            icon:<HomeIcon />
        },
        {
            text: "Nossos cafés",
            icon:<InfoIcon />
        },
        {
            text: "Sobre",
            icon:<InfoIcon />
        },
        {
            text: "Contato",
            icon:<LocalPhoneRoundedIcon />
        },
        {
            text: "Cart",
            icon:<ShoppingCartRoundedIcon />
        },
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
                <HiBars3 onClick= {() =>SetOpenMenu(true)} />
            </div>

            <Drawer open={openMenu} onClose={() => SetOpenMenu(false)} anchor="right">

                <Box sx={{ width:250 }} role="presentation" onClick={() => SetOpenMenu(false)} onKeyDown={() => SetOpenMenu(false)}> 
                    <List>
                        {menuOptions.map((item)=>(
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary = {item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </nav>
    )
        
    
};

export default Navbar;