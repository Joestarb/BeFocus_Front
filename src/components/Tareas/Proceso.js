import React, { useState } from 'react';
import Process from "../../assets/TareasAssets/Proceso.png";
import Calendario from "../../assets/TareasAssets/calendario.png";
import Revision from './Revision';
function Proceso({ tareasEnProceso, onDeleteTarea, setTareasEnProceso }) {
    const [tareasEnRevision, setTareasEnRevision] = useState([]);
    const handleDelete = (tarea) => {
        onDeleteTarea(tarea.Id_Tarea);
        setTareasEnProceso(tareasEnProceso.filter((t) => t.Id_Tarea !== tarea.Id_Tarea));
    };

    const handleSendToRevision = (tarea) => {
        // Mueve la tarea a la sección de revisión y elimínala de la sección de proceso
        setTareasEnRevision([...tareasEnRevision, tarea]);
        setTareasEnProceso(tareasEnProceso.filter((t) => t.Id_Tarea !== tarea.Id_Tarea));
    };


    return (
        <section className=' grid grid-cols-2 gap-4'>
            <div>
                <div className='tareasenproceso p-4 rounded-2xl flex justify-between'>
                    <div>
                        <p className='text-white text-6xl '>{tareasEnProceso.length}</p>
                        <p className='ml-3 text-white'>Proceso</p>
                    </div>
                    <div>
                        <img src={Process} alt='tareas' />
                    </div>
                </div>
                <div className="container mx-auto">
                    {tareasEnProceso.length > 0 ? (
                        tareasEnProceso.map((selectedTarea, index) => (
                            <div className='border border-gray-400 p-5 rounded-xl mt-4' key={index}>
                                <div>
                                    <div className='font-semibold text-4xl'>{selectedTarea.Descripcion}</div>
                                    <div className='flex mt-2 text-gray-400'>
                                        <img src={Calendario} alt='calendar' className='mr-2' /> {selectedTarea.Fecha}
                                    </div>
                                    <div className='materia rounded-xl ml-4 text-center font-semibold w-36'>
                                        Materia: {selectedTarea.Materia}
                                    </div>
                                </div>
                                <button onClick={() => handleDelete(selectedTarea)} className="bg-red-500 text-white p-2 mt-2 rounded">
                                    Eliminar
                                </button>
                                <button onClick={() => handleSendToRevision(selectedTarea)} className="bg-blue-500 text-white p-2 mt-2 rounded">
                                Mandar a Revisión
                            </button>
                            </div>
                        ))
                    ) : (
                        <p>No hay tareas en proceso.</p>
                    )}
                </div>
            </div>


            <div>
            <Revision
             tareasEnRevision={tareasEnRevision}
             onDeleteTarea = {onDeleteTarea}
             setTareasEnRevision = {setTareasEnRevision}
             />

            </div>
        </section>
    );
}

export default Proceso;
