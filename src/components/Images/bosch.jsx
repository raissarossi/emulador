import React from 'react';
import boschBar from '../Images/boschSupergraphic.svg'


const Bosch = () => {
    return (
        <>
            <div className="h-2 sm:h-2 w-full overflow-hidden flex items-center">
                <img src={boschBar} className="w-full" alt="boschBar" />
            </div>
            <div>
                <img className="h-24" src={require('../Images/boschLogo.png')}/>
            </div>
        </>
    );
}

export default Bosch;