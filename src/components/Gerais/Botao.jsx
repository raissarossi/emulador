import { useNavigate } from "react-router-dom";

const Botao = ({rotaa, texto}) => {
    const rota = useNavigate()
    return ( 
        <button className="text-bosch-blau2 font-semibold text-sm pl-2 cursor-pointer" onClick={()=>rota(rotaa)}>{texto}</button>
     );
}
 
export default Botao;