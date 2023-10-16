import React from 'react';
import Calendario from "../../assets/TareasAssets/calendario.png";
import Revisio from "../../assets/TareasAssets/revision.png";

function Revision({ tareasEnRevision, onDeleteTarea, setTareasEnRevision }) {
    const handleDelete = (tarea) => {
        // Llama a la función onDeleteTarea para eliminar la tarea de la base de datos
        onDeleteTarea(tarea.Id_Tarea);

        // Elimina la tarea de la sección de revisión
        setTareasEnRevision(tareasEnRevision.filter((t) => t.Id_Tarea !== tarea.Id_Tarea));
    };

    return (
        <section>
            <div className='tareasenrevision p-4 rounded-2xl flex justify-between'>
                <div>
                    <p className='text-white text-6xl '>{tareasEnRevision.length}</p>
                    <p className='ml-3 text-white'>Revision</p>
                </div>
                <div>
                    <img src={Revisio} alt='tareas' />
                </div>
            </div>

            <div className="container mx-auto">
                {tareasEnRevision.length > 0 ? (
                    tareasEnRevision.map((tarea, index) => (
                        <div className='border border-gray-400 p-5 rounded-xl mt-4' key={index}>
                            <div>
                                <div>
                                    <div className='font-semibold text-4xl'>{tarea.Descripcion}</div>
                                    <div className='flex mt-2 text-gray-400'>
                                        <img src={Calendario} alt='calendar' className='mr-2' /> {tarea.Fecha}
                                    </div>
                                    <div className='materia rounded-xl ml-4 text-center font-semibold w-36'>
                                        Materia: {tarea.Materia}
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => handleDelete(tarea)} className="bg-red-500 text-white p-2 mt-2 rounded">
                                Eliminar
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No hay tareas en revisión.</p>
                )}
            </div>
        </section>
    );
}

export default Revision;
