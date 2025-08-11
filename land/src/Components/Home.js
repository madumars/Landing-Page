import Navbar from "./Navbar";
import BannerBackground from "../Assets/home-bar.png";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {

    return(
        <div className="containerHome">
           <Navbar/>
           <div className="HomeBannerContainer">
                <div className="HomeBannerImageContainer">
                    <img src={BannerBackground} alt="imagem de fundo"/>
                </div>
                <div className="sectionHomeText">
                    <h1 className="primaryHeading">Os mais variados sabores de café aqui mesmo</h1>
                    <p className="primaryText">Conheça nossos sabores e faça seu pedido</p>

                    <button className="secondaryButton">Peça aqui <FaArrowRight/></button>
                </div>
           </div>
        </div>
    )
        
};

export default Home;