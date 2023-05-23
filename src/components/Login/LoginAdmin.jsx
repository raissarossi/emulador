import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Botao from "../Gerais/Botao";
import Input from "../Gerais/Input";

const LoginAdmin = () => {
    const rota = useNavigate();
    const [formData, setFormData] = useState({
        // nome: "",
        user: "",
        codigo: "",
    });


    const checkInputs = () => {
        if (formData.user.length == 6 && formData.codigo.length == 10) {
            return formData.user && formData.codigo
        }

    };
    const isNextDisabled = !checkInputs();


    return (
        <div className="flex justify-center">
            <div className="bosch-form1">
                <h1 className="bosch-titleS">Login Admin:</h1>
                <div className="bg-bosch-grau2 w-5/6 h-[1px]"></div>

                {/* <Input
                    tipo={'text'}
                    texto={'Nome...'}
                    maxLength={50}
                    required
                    valueI={formData.nome}
                    act={(event) => setFormData({ ...formData, nome: event.target.value })} /> */}

                <Input
                    tipo={'text'}
                    texto={'Usuário...'}
                    maxLength={6}
                    required
                    valueI={formData.user}
                    act={(event) => setFormData({ ...formData, user: event.target.value })} />

                <Input
                    tipo={'text'}
                    texto={'Senha...'}
                    maxLength={10}
                    required
                    valueI={formData.codigo}
                    act={(event) => setFormData({ ...formData, codigo: event.target.value })} />

                <button className="bosch-button " disabled={isNextDisabled} onClick={() => rota("/aprovacao")}>Entrar</button>

                <div className="flex">
                    <h2 className="font-semibold text-sm">Precisa de acesso?</h2>
                    <Botao rotaa="/criaradmin" texto="Criar Administrador"/>
                    
                </div>
            </div>
        </div>
    );
}

export default LoginAdmin;