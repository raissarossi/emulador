import React from 'react';

function DetalhesPedido({ formData, setFormData }) {
    return (
        <div id='other-info-container' className='bosch-form-page'>
            <div className='bosch-input2'>
                <h1 className='bosch-h1'>N° Desenho:</h1>
                <input type='text' required placeholder='N° desenho...' className='bosch-input' value={formData.numDesenho} onChange={(event) => setFormData({ ...formData, numDesenho: event.target.value })} />
            </div>

            <div className='bosch-input2'>
                <h1 className='bosch-h1'>Grupo:</h1>
                <input type='text' required placeholder='Grupo...' className='bosch-input' value={formData.grupo} onChange={(event) => setFormData({ ...formData, grupo: event.target.value })} />
            </div>

            <div className='bosch-input2'>
                <h1 className='bosch-h1'>Anexo Desenho:</h1>
                <input type='file' required placeholder='Anexo Desenho...'
                    multiple='multiple' className='w-5/6 py-1 px-3 focus:outline-none focus:border-bosch-blau1 rounded-md placeholder:text-bosch-grau2' value={formData.anexoDesenho} onChange={(event) => setFormData({ ...formData, anexoDesenho: event.target.value })} />
            </div>

            <div className='w-5/6 flex items-center'>
                <div className='bosch-input2 items-start'>
                    <h1 className='bosch-h1'>Existe Semelhante?</h1>
                    {/* <input type="checkbox" /> */}
                    <select id="Existe Semelhante" required defaultValue={'0'} className='bosch-input' value={formData.existeSemelhante} onChange={(event) => setFormData({ ...formData, existeSemelhante: event.target.value })}>
                        <option value='0' selected hidden>Placeholder</option>
                        <option value='1'>Sim</option>
                        <option value='2'>Não</option>
                    </select>
                </div>
                <div className='bosch-input2 items-end'>
                    <h1 className='bosch-h1'>N° da Solicitação Semelhante:</h1>
                    <input type='text' required placeholder='N° da Solicitação...' className='bosch-input' value={formData.numSemelhante} onChange={(event) => setFormData({ ...formData, numSemelhante: event.target.value })} />
                </div>
            </div>
        </div>
    );
}

export default DetalhesPedido;
