import Logo from "../Assets/logo.png"
import { SiLinkedin } from 'react-icons/si';
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return(
        <div className="footerWrapper">
            <div className="footerSectionOne">
                <div className="footerLogoContainer">
                <img src={Logo} alt="logo Donuts"/>
            </div>
        <div className="footerIcons">
            <SiLinkedin />
            <FaGithub />
        </div>
        </div>

        <div className="footerSectionTwo">
            <div className="footerSectionColumns">
                <span>Qualidade</span>
                <span>Ajuda</span>
                <span>Nossa Marca</span>
                <span>Carreira</span>
                <span>Avaliação</span>
                <span>Nosso Trabalho</span>
            </div>

            <div className="footerSectionColumns">
                <span>19 1234-5678</span>
                <span>cafezinho@gmail.com</span>
                <span></span>
            </div>

            <div className="footerSectionColumns">
                <span>Termos e Condições</span>
                <span>Politica e Privacidade</span>
            </div>
        </div>
    </div>
    );
};
export default Footer;