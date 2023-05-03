import React from 'react';

function ServicoInfo({ formData, setFormData }) {
    return (
        <div id='personal-info-container' className=''>

            <select id="Categoria" required defaultValue={'0'} value={formData.categoria} onChange={(event) => setFormData({ ...formData, categoria: event.target.value })}>
                <option value='0' selected hidden>Placeholder</option>
                <option value='1'>exemplo1111</option>
                <option value='2'>exemplo2222</option>
                <option value='3'>exemplo3333</option>
                <option value='4'>exemplo4444</option>
            </select>
            <select id="Tipo Servico" required defaultValue={'0'} value={formData.tipoServico} onChange={(event) => setFormData({ ...formData, tipoServico: event.target.value })}>
                <option value='0' selected hidden>Placeholder</option>
                <option value='1'>exemplo1111</option>
                <option value='2'>exemplo2222</option>
                <option value='3'>exemplo3333</option>
                <option value='4'>exemplo4444</option>
            </select>

            <input type='date' required placeholder='Prazo Pretendido...' value={formData.prazo} onChange={(event)=> setFormData({...formData, prazo: event.target.value})}/>

            <input type='text' required placeholder='Descrição...' value={formData.descricao} onChange={(event)=> setFormData({...formData, descricao: event.target.value})}/>

        </div>
    );
}

export default ServicoInfo;
