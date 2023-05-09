import React from 'react';

function ServicoInfo({ formData, setFormData }) {
    return (
        <div id='personal-info-container' className='bosch-form-page'>
            <div className='bosch-input2'>
                <h1 className='bosch-h1'>Categoria:</h1>
                <select id="Categoria" required defaultValue={'0'} value={formData.categoria} onChange={(event) => setFormData({ ...formData, categoria: event.target.value })} className='bosch-input' >
                    <option value='0' selected hidden className=''>Categoria</option>
                    <option value='1'>exemplo1111</option>
                    <option value='2'>exemplo2222</option>
                    <option value='3'>exemplo3333</option>
                    <option value='4'>exemplo4444</option>
                </select>
            </div>

            <div className='bosch-input2'>
                <h1 className='bosch-h1'>Categoria:</h1>
                <select id="Tipo Servico" required defaultValue={'0'} value={formData.tipoServico} onChange={(event) => setFormData({ ...formData, tipoServico: event.target.value })} className='bosch-input' >
                    <option value='0' selected hidden>Placeholder</option>
                    <option value='1'>exemplo1111</option>
                    <option value='2'>exemplo2222</option>
                    <option value='3'>exemplo3333</option>
                    <option value='4'>exemplo4444</option>
                </select>
            </div>

            <div className='bosch-input2'>
                <h1 className='bosch-h1'>Categoria:</h1>
                <input type='date' required placeholder='Prazo Pretendido...' value={formData.prazo} onChange={(event) => setFormData({ ...formData, prazo: event.target.value })} className='bosch-input' />
            </div>

            <div className='bosch-input2'>
                <h1 className='bosch-h1'>Categoria:</h1>
                <input type='text' required placeholder='Descrição...' value={formData.descricao} onChange={(event) => setFormData({ ...formData, descricao: event.target.value })} className='bosch-input' />
            </div>

        </div>
    );
}

export default ServicoInfo;
