import AboutBackground from "../Assets/image8.jpg"
import AboutBackgroundImage from "../Assets/image9.jpg"

const About = () => {
    return(
        <div className="AboutSectionContainer">
            <div className="AboutBackgroundImageContainer">
                <img src={AboutBackground} alt="Imagem de café com chocolate"/>
            </div>

            <div  className="aboutSectionImageContainer">
                <img src={AboutBackgroundImage} alt=""/>
            </div>
        </div>
    )
    
};
export default About;