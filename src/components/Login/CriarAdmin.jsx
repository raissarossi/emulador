import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Botao from "../Gerais/Botao";
import Input from "../Gerais/Input";

const CriarAdmin = () => {
    const rota = useNavigate()
    const [errorMsg, setErrorMsg] = useState("");
    const [formData, setFormData] = useState({
        nome: "",
        user: "",
        email: "",
        codigo: "",
        confirmarCodigo: "",
    });

    const checkInputs = () => {
        if (formData.user.length == 6 && formData.email.includes("@" && "bosch") && (formData.codigo == formData.confirmarCodigo)) {
            return formData.nome && formData.user && formData.email && formData.codigo
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
                <Input
                    tipo={'password'}
                    texto={'Senha...'}
                    maxLength={100}
                    required
                    valueI={formData.codigo}
                    act={(event) => setFormData({ ...formData, codigo: event.target.value })} />
                <Input
                    tipo={'password'}
                    texto={'Confirmar senha...'}
                    maxLength={100}
                    required
                    valueI={formData.confirmarCodigo}
                    act={(event) => setFormData({ ...formData, confirmarCodigo: event.target.value })} />
                {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}


                <button className="bosch-button " disabled={isNextDisabled} onClick={() => rota("/aguarde")}>Solicitar</button>

                <div className="flex">
                    <h2 className="font-semibold text-sm">Já tem acesso?</h2>
                    <Botao rotaa="/loginadmin" texto="Entrar"/>
                </div>
            </div>
        </div>
    );
}

export default CriarAdmin;