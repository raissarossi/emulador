import React from 'react';

function AreaInfo({ formData, setFormData }) {
    return (
        <div id='sign-up-container' className='flex'>
            <select id="GB" required defaultValue={'0'} value={formData.GB} onChange={(event) => setFormData({ ...formData, GB: event.target.value })}>
                <option value='0' selected hidden>Placeholder</option>
                <option value='1'>exemplo1111</option>
                <option value='2'>exemplo2222</option>
                <option value='3'>exemplo3333</option>
                <option value='4'>exemplo4444</option>
            </select>

            <input type='text' required placeholder='Ramal...' value={formData.ramal} onChange={(event) => setFormData({ ...formData, ramal: event.target.value })} />


            <div>
                <select id="Local Debito" defaultValue={'0'} value={formData.localDebito} onChange={(event) => setFormData({ ...formData, localDebito: event.target.value })}>
                    <option value='0' selected hidden>Placeholder</option>
                    <option value='1'>exemplo1111</option>
                    <option value='2'>exemplo2222</option>
                    <option value='3'>exemplo3333</option>
                    <option value='4'>exemplo4444</option>
                </select>

                <input type='text' required placeholder='N°...' value={formData.num} onChange={(event) => setFormData({ ...formData, num: event.target.value })} />
            </div>


            <select id="Tipo Debito" defaultValue={'0'} value={formData.tipoDebito} onChange={(event) => setFormData({ ...formData, tipoDebito: event.target.value })}>
                <option value='0' selected hidden>Placeholder</option>
                <option value='1'>exemplo</option>
                <option value='2'>exemplo1111</option>
                <option value='3'>exemplo1111</option>
                <option value='4'>exemplo1111</option>
            </select>



        </div>
    );
}

export default AreaInfo;
