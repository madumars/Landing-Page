const Contact = () => {
   return(
    <div className="contactPageWrapper">
        <p className="primarySubHeading">Contate a gente!</p>
        <h1 className="primaryHeading">Tem uma pergunta?</h1>
        <h2 className="primaryHeading">Nós podemos ajudar!!</h2>

        <div className="contactFormContainer">
            <input type="text" placeholder="seu_email@email.com"/>
            <button className="secondaryButton">Enviar</button>
        </div>
    </div>
   )
};
export default Contact