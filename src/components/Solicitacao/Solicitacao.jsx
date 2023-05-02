const Solicitacao = () => {
    return ( 
        <div className="flex justify-center">
            <form className="bosch-form1">
                <h1 className="bosch-titleS">Solicitar Acesso:</h1>
                <div className="bg-bosch-grau2 w-5/6 h-[1px]"></div>
                <input type="text" placeholder="Nome" className="bosch-input" required />
                <input type="integer" placeholder="EDV" className="bosch-input" required />
                <input type="text" placeholder="Justificativa de acesso" className="bosch-input pb-10" required />
                <button className="bosch-button">Solicitar</button>
                <div className="flex">
                    <h2 className="font-semibold text-sm">Já tem acesso?</h2>
                    <h2 className="text-bosch-blau2 font-semibold text-sm pl-2 cursor-pointer">Entrar</h2>
                </div>
            </form>
        </div>
     );
}
 
export default Solicitacao;