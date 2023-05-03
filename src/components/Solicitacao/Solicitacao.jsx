import { useState } from "react";
import Input from "../Gerais/Input";

const Solicitacao = () => {
    const [formData, setFormData] = useState({
        nome: "",
        user: "",
        justificativa: "",
    });


    const checkInputs = () => {
        return formData.nome && formData.EDV && formData.justificativa

    };
    const isNextDisabled = !checkInputs();


    return (
        <div className="flex justify-center">
            <div className="bosch-form1">
                <div className="flex flex-col justify-center w-full items-center">

                    <h1 className="bosch-titleS">Solicitar Acesso:</h1>
                    <div className="bg-bosch-grau2 w-5/6 h-[1px]"></div>

                    <input type="text" placeholder="Nome" className="bosch-input" required value={formData.nome} onChange={(event) => setFormData({ ...formData, nome: event.target.value })} maxLength={50}/>

                    <input type="text" placeholder="Usuário" className="bosch-input" required value={formData.EDV} onChange={(event) => setFormData({ ...formData, EDV: event.target.value })} maxLength={6} />

                    <textarea placeholder="aa" rows={5} cols={40} maxLength={150} className="bosch-input" required value={formData.justificativa} onChange={(event) => setFormData({ ...formData, justificativa: event.target.value })} />

                    

                </div>
                <div className="flex flex-col justify-center w-full items-center">

                    <button className="bosch-button " disabled={isNextDisabled} onClick={console.log(formData)}>Solicitar</button>

                    <div className="flex">
                        <h2 className="font-semibold text-sm">Já tem acesso?</h2>
                        <h2 className="text-bosch-blau2 font-semibold text-sm pl-2 cursor-pointer">Entrar</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Solicitacao;