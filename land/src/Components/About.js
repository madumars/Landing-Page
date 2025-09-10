import AboutBackground from "../Assets/image8.jpg";
import AboutBackgroundImage from "../Assets/image9.jpg";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
    return(
        <div className="AboutSectionContainer">
            <div className="AboutBackgroundImageContainer">
                <img src={AboutBackground} alt="Imagem de café com chocolate"/>
            </div>

            <div  className="aboutSectionImageContainer">
                <img src={AboutBackgroundImage} alt=""/>
            </div>

            <div className="aboutSectionTextContainer">
                <p className="primarySubHeading">Sobre nós</p>
                <h1 className="primaryHeading">
                    Como é feito o seu café favorito?
                </h1>

                <p className="primaryText">Nossos cafés são produzidos nacional e internacionalmente para os mais diversos gostos</p>

                <p className="primaryText">Nossa vontade de transformar café em laser e sabor começou no primeiro gole. Decidimos fazer reuniões com amigos a base de café e surgiu a nossa forma de trazer aproximação e sabor aos nossos clientes. </p>

                <div className="aboutButtonsContainer">
                    <button className="secondaryButton">Leia mais</button>
                    <button className="watchVideoButton">
                        <BsFillPlayCircleFill/> Saiba sobre nossa história
                    </button>
                </div>
            </div>
        </div>
    )
    
};
export default About;