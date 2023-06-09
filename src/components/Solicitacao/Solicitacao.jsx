import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Gerais/Input";

const Solicitacao = () => {
    const rota = useNavigate()
    const [formData, setFormData] = useState({
        nome: "",
        user: "",
        email: "",
        justificativa: "",
    });


    const checkInputs = () => {
        if (formData.user.length == 6 && formData.justificativa.length > 30 && formData.email.includes("@"&&"bosch")) {
            return formData.nome && formData.user && formData.email && formData.justificativa
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
                <Input
                    tipo={'text'}
                    texto={'Email corporativo...'}
                    maxLength={100}
                    required
                    valueI={formData.email}
                    act={(event) => setFormData({ ...formData, email: event.target.value })} />


                <textarea placeholder="Justificativa..." rows={5} cols={40} maxLength={150} className="bosch-input" required value={formData.justificativa} onChange={(event) => setFormData({ ...formData, justificativa: event.target.value })} />

                <button className="bosch-button " disabled={isNextDisabled} onClick={()=>rota("/aguarde")}>Solicitar</button>

                <div className="flex">
                    <h2 className="font-semibold text-sm">Já tem acesso?</h2>
                    <button className="text-bosch-blau2 font-semibold text-sm pl-2 cursor-pointer" onClick={() => rota("/")}>Entrar</button>
                </div>
            </div>
        </div>
    );
}

export default Solicitacao;