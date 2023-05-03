import React from 'react';

function DetalhesPedido({ formData, setFormData }) {
    return (
        <div id='other-info-container' className=''>
            <input type='text' required placeholder='N° desenho...' value={formData.numDesenho} onChange={(event) => setFormData({ ...formData, numDesenho: event.target.value })} />

            <input type='text' required placeholder='Grupo...' value={formData.grupo} onChange={(event) => setFormData({ ...formData, grupo: event.target.value })} />

            <input type='file' required placeholder='Anexo Desenho...'
                multiple='multiple' value={formData.anexoDesenho} onChange={(event) => setFormData({ ...formData, anexoDesenho: event.target.value })} />

            <select id="Existe Semelhante" required defaultValue={'0'} value={formData.existeSemelhante} onChange={(event) => setFormData({ ...formData, existeSemelhante: event.target.value })}>
                <option value='0' selected hidden>Placeholder</option>
                <option value='1'>Sim</option>
                <option value='2'>Não</option>
            </select>

            <input type='text' required placeholder='N° da Solicitação...' value={formData.numSemelhante} onChange={(event) => setFormData({ ...formData, numSemelhante: event.target.value })} />
        </div>
    );
}

export default DetalhesPedido;
