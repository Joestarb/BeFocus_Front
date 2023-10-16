import React from 'react';
import Revisio from "../../assets/TareasAssets/revision.png";

function Revision() {
    return (
        <section>
            <div className='tareasenrevision p-4 rounded-2xl flex justify-between'>
                <div>
                    <p className='text-white text-6xl '>20</p>
                    <p className='ml-3 text-white'>Revision</p>
                </div>
                <div>
                    <img src={Revisio} alt='tareas' />
                </div>
            </div>

            <div className="container mx-auto">

            </div>
        </section>
    )
}

export default Revision