const Emulador = () => {
    return (
        <>
            <h1>Emulador</h1>

            <form>
                <input type="text"  placeholder="GB" />
                <input type="text"  placeholder="Local Débito" />
                <input type="text"  placeholder="Ramal" />
                <input type="text"  placeholder="Tipo Débito" />
                <input type="text"  placeholder="Categoria" />
                <input type="text"  placeholder="Tipo Serviço" />
                <button type="submit">Enviar</button>
            </form>
        </>
    );
}

export default Emulador;