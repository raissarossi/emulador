const Login = () => {
    return ( 
        <div className="flex justify-center">
            <form className="bosch-form1">
                <h1 className="bosch-titleS">Acesso ao Emulador:</h1>
                <div className="bg-bosch-grau2 w-5/6 h-[1px]"></div>
                <input type="text" placeholder="Nome:" className="bosch-input" />
                <input type="integer" placeholder="EDV:" className="bosch-input" />
                <input type="text" placeholder="Código:" className="bosch-input" />
                <button className="bosch-button">Logar</button>
                <div className="flex">
                    <h2 className="font-semibold text-sm">Não tem acesso?</h2>
                    <h2 className="text-bosch-blau2 font-semibold text-sm pl-2 cursor-pointer">Solicite aqui</h2>
                </div>
            </form>
        </div>
     );
}
 
export default Login;