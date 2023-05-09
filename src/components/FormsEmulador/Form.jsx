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
    <div className='flex justify-center'>

      <div id="form" className="flex flex-col w-9/12 justify-center items-center">

        <div id="progressbar" className="h-3 w-5/6 sm:w-3/6 flex items-center my-10 bg-bosch-grau2 rounded-full">
          <div
            style={{
              width:
                page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%",
            }}
            className="h-3 bg-bosch-blau2 rounded-full"
          ></div>
        </div>

        <div id="form-container" className="flex justify-center flex-col items-center bosch-form2">
          <div id="header" className="">
            <h1>{FormTitles[page]}</h1>
          </div>
          <div id="body" className="w-full">
            {PageDisplay()}
          </div>
          <div id="footer" className=" flex w-5/6 justify-between">
            <button
              className="disabled:bg-transparent disabled:text-transparent bg-bosch-blau2 hover:bg-bosch-blau3 text-white mt-10 py-2 px-5 rounded-md"
              disabled={page === 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              PREV
            </button>
            <button
              className="bg-bosch-blau2 hover:bg-bosch-blau3 disabled:bg-bosch-grau3 text-white mt-10 py-2 px-5 rounded-md"
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
    </div>
  );
}

export default Form;
