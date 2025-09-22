import ProfilePic from "../Assets/imagePerfil.jpg";
import { AiFillStar } from "react-icons/ai";

const Testemonial = () => {
    return (
        <div className="workSectionWrapper">
            <div className="workSectionTop">
                <p className="primarySubHeading">Avaliação</p>
                <h1 className="primaryHeading">Nossas avaliações</h1>
                <p className="primaryText">
                    Nossa variedade de sabores trazem o conforto o sabor e o acolhimento. 
                    Cada aroma traz a calma, a leveza, e a satisfação. Recebemos elogios diários sobre nossas safras e sabores.
                </p>
            </div>

            <div className="testemonialSectionBottom">
                <img src={ProfilePic} alt="imagem do avaliador"/>
                <p>
                    Encontrei este café com a recomendação do google e sinceramente não poderiam ter me recomendado lugar melhor. 
                    Vim para este estado a pouco tempo e o "café de vô" me traz a sensação de estar com a minha familia, me ajudou na minha saudade 
                    e ainda me ajudou a encontrar alguns amigos que passaram o mesmo que eu, o espaço tem várias comunidades e eu adorei a ideia de ter horários para encontar sua comunidade.
                    Recomendo 100%.
                </p>
                <div className="testemonialStarsContainer">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
            </div>
            <h2>Ana Vitória</h2>
            </div>

            
        </div>
    )
};

export default Testemonial;