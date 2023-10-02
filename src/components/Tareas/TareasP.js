import React from 'react';
import Proceso from "../../assets/TareasAssets/Proceso.png";
import Tareasimg from "../../assets/TareasAssets/Tareas.png";
import Calendario from "../../assets/TareasAssets/calendario.png";
import Revision from "../../assets/TareasAssets/revision.png";

function TareasP() {
    const tareas = [
        {
            tituloTarea: "Examen Web 1",
            FechaDeCaducidad: "10 oct",
            materia: "appsWeb"
        },
        {
            tituloTarea: "Examen Web 2",
            FechaDeCaducidad: "15 oct",
            materia: "appsWeb"
        },
        {
            tituloTarea: "Examen Web 3",
            FechaDeCaducidad: "15 oct",
            materia: "appsWeb"
        },
        // Agrega más tareas aquí si es necesario
    ];

    return (
        <div>
            <div className='mx-12 mt-12'>
                <p className='font-semibold text-6xl mb-2'>Mis Tareas</p>
                <div className='border border-gray-400 line'></div>
            </div>
            {/* tareas */}
            <div className='grid grid-cols-3 ml-12 mt-5 line gap-10'>
                <section>
                    <div className='tarea p-4 rounded-2xl flex justify-between'>
                        <div>
                            <p className='text-white text-6xl '>20</p>
                            <p className='ml-3 text-white'>Tareas</p>
                        </div>
                        <div>
                            <img src={Tareasimg} alt='tareas' />
                        </div>
                    </div>

                    <div className="container  mx-auto">
                        <ul className="list-disc space-y-2">
                            {tareas.map((tarea, index) => (
                                <div className='border border-gray-400 p-5 rounded-xl mt-4'>
                                    <div key={index}>

                                        <div className='font-semibold  text-4xl '> {tarea.tituloTarea}</div>
                                        <div className='flex mt-2 text-gray-400'>
                                            <img src={Calendario} alt='calendar' className='mr-2' /> {tarea.FechaDeCaducidad}
                                            <div className='materia rounded-xl ml-4 text-center font-semibold  w-36' >
                                                Materia: {tarea.materia}
                                            </div>
                                        </div>



                                    </div>
                                </div>

                            ))}
                        </ul>
                    </div>

                </section>
                <section>
                    <div className='tareasenproceso p-4 rounded-2xl flex justify-between '>
                        <div>
                            <p className='text-white text-6xl '>20</p>
                            <p className='ml-3 text-white'>Tareas en proceso</p>
                        </div>
                        <div>
                            <img src={Proceso} alt='tareas' />
                        </div>
                    </div>
                    <div className="container  mx-auto">
                        <ul className="list-disc space-y-2">
                            {tareas.map((tarea, index) => (
                                <div className='border border-gray-400 p-5 rounded-xl mt-4'>
                                    <div key={index}>

                                        <div className='font-semibold  text-4xl '> {tarea.tituloTarea}</div>
                                        <div className='flex mt-2 text-gray-400'>
                                            <img src={Calendario} alt='calendar' className='mr-2' /> {tarea.FechaDeCaducidad}
                                            <div className='materia rounded-xl ml-4 text-center font-semibold  w-36' >
                                                Materia: {tarea.materia}
                                            </div>
                                        </div>



                                    </div>
                                </div>

                            ))}
                        </ul>
                    </div>
                </section>
                <section>
                    <div className='tareasenrevision p-4 rounded-2xl flex justify-between '>
                        <div>
                            <p className='text-white text-6xl '>20</p>
                            <p className='ml-3 text-white'>Tareas en revisión</p>
                        </div>
                        <div>
                            <img src={Revision} alt='tareas' />
                        </div>
                    </div>
                    <div className="container  mx-auto">
                        <ul className="list-disc space-y-2">
                            {tareas.map((tarea, index) => (
                                <div className='border border-gray-400 p-5 rounded-xl mt-4'>
                                    <div key={index}>

                                        <div className='font-semibold  text-4xl '> {tarea.tituloTarea}</div>
                                        <div className='flex mt-2 text-gray-400'>
                                            <img src={Calendario} alt='calendar' className='mr-2' /> {tarea.FechaDeCaducidad}
                                            <div className='materia rounded-xl ml-4 text-center font-semibold  w-36' >
                                                Materia: {tarea.materia}
                                            </div>
                                        </div>



                                    </div>
                                </div>

                            ))}
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default TareasP;
