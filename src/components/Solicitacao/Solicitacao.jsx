import { useState } from "react";
import Input from "../Gerais/Input";

const Solicitacao = () => {
    const [formData, setFormData] = useState({
        nome: "",
        user: "",
        justificativa: "",
    });


    const checkInputs = () => {
        if (formData.user.length == 6 && formData.justificativa.length > 30){
            return formData.nome && formData.user && formData.justificativa
        }
    
    };
    const isNextDisabled = !checkInputs();


    return (
        <div className="flex justify-center">
            <div className="bosch-form1">
                <h1 className="bosch-titleS">Solicitar Acesso:</h1>
                <div className="bg-bosch-grau2 w-5/6 h-[1px]"></div>

                <Input
                    tipo={'text'}
                    texto={'Nome...'}
                    maxLength={50}
                    required
                    valueI={formData.nome}
                    act={(event) => setFormData({ ...formData, nome: event.target.value })} />

                <Input
                    tipo={'text'}
                    texto={'Usuário...'}
                    maxLength={6}
                    required
                    valueI={formData.user}
                    act={(event) => setFormData({ ...formData, user: event.target.value })} />


                <textarea placeholder="Justificativa..." rows={5} cols={40} maxLength={150} className="bosch-input" required value={formData.justificativa} onChange={(event) => setFormData({ ...formData, justificativa: event.target.value })} />

                <button className="bosch-button " disabled={isNextDisabled} onClick={console.log(formData)}>Solicitar</button>

                <div className="flex">
                    <h2 className="font-semibold text-sm">Já tem acesso?</h2>
                    <h2 className="text-bosch-blau2 font-semibold text-sm pl-2 cursor-pointer">Entrar</h2>
                </div>
            </div>
        </div>
    );
}

export default Solicitacao;