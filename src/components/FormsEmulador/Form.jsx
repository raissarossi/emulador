import React, { useState } from 'react';
import AreaInfo from './AreaInfo';
import ServicoInfo from './ServicoInfo';
import DetalhesPedido from './DetalhesPedido';


function Form() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
      GB: "",
      ramal: "",
      localDebito: "",
      num: "",
      tipoDebito: "",

      categoria: "",
      tipoServico: "",
      prazo: "",
      descricao: "",

      numDesenho: "",
      grupo: "",
      anexoDesenho: "",
      existeSemelhante: "",
      numSemelhante: "",
    });
    const FormTitles = ['Áreas Infos', 'Serviço Infos', 'Detalhes do Pedido'];
  
    const checkInputs = () => {
        if (page === 0) {
          return formData.GB && formData.ramal && formData.localDebito && formData.num && formData.tipoDebito;
        } else if (page === 1) {
          return formData.categoria && formData.tipoServico && formData.prazo && formData.descricao;
        } else if (page === 2) {
          return formData.numDesenho && formData.grupo && formData.anexoDesenho && formData.existeSemelhante && formData.numSemelhante;
        }
        return false;
      };
    const isNextDisabled = !checkInputs();
  
    const PageDisplay = () => {
      if (page === 0) {
        return <AreaInfo formData={formData} setFormData={setFormData} />;
      } else if (page === 1) {
        return <ServicoInfo formData={formData} setFormData={setFormData} />;
      } else if (page === 2) {
        return <DetalhesPedido formData={formData} setFormData={setFormData} />;
      }
    };
  
  
    return (
      <div id="form" className="">
        <div id="progressbar" className="h-4 bg-orange-500 flex items-center">
          <div
            style={{
              width:
                page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%",
            }}
            className="h-3 bg-black rounded-r-full"
          ></div>
        </div>
        <div id="form-container" className="">
          <div id="header" className="">
            <h1>{FormTitles[page]}</h1>
          </div>
          <div id="body" className="">
            {PageDisplay()}
          </div>
          <div id="footer" className="">
            <button
              className="border hover:bg-slate-400 m-1 disabled:hidden"
              disabled={page === 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              PREV
            </button>
            <button
              className="border bg-slate-300 hover:bg-slate-400 m-1 disabled:bg-slate-900"
              disabled={isNextDisabled}
              onClick={() => {
                if (page === FormTitles.length - 1) {
                  alert("SUBMITTED");
                  console.log(formData);
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
            >
              {page === FormTitles.length - 1 ? "SUBMIT" : "NEXT"}
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Form;
  