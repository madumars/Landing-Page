import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { fatHouseWater, faUtensils, faTrucks } from "@fortawesome/free-solid-svg-icons"
import { GiCoffeePot } from "react-icons/gi";
import { PiCoffeeBeanDuotone } from "react-icons/pi";
import { LiaStoreAltSolid } from "react-icons/lia";

 
const WorkInfoData =[
    
    {
    image:<GiCoffeePot/>,
    title: 'Feito com carinho',
    text: "Todo o café é produzido com o mesmo carinho do café da nossa vó numa sexta a tarde, com aroma que convida a mais uma xícara e o sabor perfeito que você estava buscando. "
    },
    {
    image:<PiCoffeeBeanDuotone/>,
    title: 'Os melhores grãos',
    text: "Todas as nossas safras são selecionadas para sempre entregarmos o melhor. Temos uma curadoria rigorosa para que os grãos tenham uma qualidade excelente"
    },
    {
    image:<LiaStoreAltSolid />,
    title: 'Conheça nosso espaço',
    text: "Além da entrega das nossas cápsulas e sacas temos nosso espaço para você conferir. Venha conhecer nosso espaço pensado para você que precisa de um momento tranquilo no dia e um espaço confortável para levar seus amigos e familiares"
    },
]
    

const Work = () => {
   return(
    <div className="workSectionWrapper">
        <div className="workSectionTop">
            <p className="primarySubHeading">Nossos cafés</p>
            <h1>Nossos serviços</h1>

            <p className="primaryText">
            Nossa missão é levar a vocês conforto, lazer e um bom café.
            Nossos aromas são pensados desde os momentos leves até os
            mais intensos.
            Temos comprometimento em trazer qualidade, sabor e conforto.</p>
        </div>

        <div className="workSectionButton">
            {WorkInfoData.map( (data) => (
                <div className="workSectionInfo" key={data.title}>
                    <div className='infoBoxesImgContainer'> {data.image}</div>
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                </div>
            ))}

        </div>

    </div>
   );
};
export default Work;