import React from 'react';
import Input from '../Gerais/Input';

function AreaInfo({ formData, setFormData }) {
    return (
        <div id='sign-up-container' className='bosch-form-page'>
            <div className='bosch-input2'>
                <h1 className='bosch-h1'>GB</h1>
                <select id="GB" required value={formData.GB} onChange={(event) => setFormData({ ...formData, GB: event.target.value })} className='bosch-input ' >
                    <option value="" disabled selected className=''>Selecione...</option>
                    <option value='1'>exemplo1111</option>
                    <option value='2'>exemplo2222</option>
                    <option value='3'>exemplo3333</option>
                    <option value='4'>exemplo4444</option>
                </select>
            </div>

            <div className='bosch-input2 '>
                <h1 className='bosch-h1'>Ramal:</h1>
                <Input
                    tipo={'num'}
                    texto={'Ramal...'}
                    maxLength={4}
                    required
                    valueI={formData.ramal}
                    act={(event) => setFormData({ ...formData, ramal: event.target.value })} />
            </div>


            <div className='w-5/6 flex items-center'>
                <div className='bosch-input2 items-start'>
                    <h1 className='bosch-h1'>Local Débito:</h1>
                    <select id="Local Debito" value={formData.localDebito} onChange={(event) => setFormData({ ...formData, localDebito: event.target.value })} className='bosch-input3' >
                        <option value="" disabled selected className=''>Selecione...</option>
                        <option value='1'>exemplo1111</option>
                        <option value='2'>exemplo2222</option>
                        <option value='3'>exemplo3333</option>
                        <option value='4'>exemplo4444</option>
                    </select>
                </div>
                <div className='bosch-input2 items-end'>
                    <h1 className='bosch-h1'>N°:</h1>
                    <Input
                        tipo={'num'}
                        texto={'N°...'}
                        maxLength={20}
                        required
                        valueI={formData.num}
                        act={(event) => setFormData({ ...formData, num: event.target.value })} />
                </div>
            </div>


            <div className='bosch-input2'>
                <h1 className='bosch-h1'>Tipo Débito</h1>
                <select id="Tipo Debito" value={formData.tipoDebito} onChange={(event) => setFormData({ ...formData, tipoDebito: event.target.value })} className='bosch-input' >
                    <option value="" disabled selected className=''>Selecione...</option>
                    <option value='1'>exemplo1111</option>
                    <option value='2'>exemplo2222</option>
                    <option value='3'>exemplo3333</option>
                    <option value='4'>exemplo4444</option>
                </select>
            </div>



        </div>
    );
}

export default AreaInfo;
