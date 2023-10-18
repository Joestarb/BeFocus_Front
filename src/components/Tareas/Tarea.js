// import React from 'react'

// function Tarea() {

    // //FORMATEAR FECHA
    // const formatearFecha = (fechaISO) => {
    //     const fechaFormateada = new Date(fechaISO).toLocaleDateString();
    //     return fechaFormateada;
    // };

//     //MOVER A PROCESO
//     const handleMoveToProceso = (tarea) => {
//         setTareasEnProceso([...tareasEnProceso, tarea]);
//         setTareas(tareas.filter((t) => t.Id_Tarea !== tarea.Id_Tarea));
//     };



//     return (
//         <div>
//             <section>
//                 <div className="container mx-auto">
//                     <ul className="list-disc space-y-2">
//                         {tareas.map((tarea, index) => (
//                             <div className='border border-gray-400 p-5 rounded-xl mt-4' key={index}>
//                                 <div>
//                                     <div className='font-semibold text-4xl'>{tarea.Descripcion}</div>
//                                     <div className='flex mt-2 text-gray-400'>
//                                         <img src={Calendario} alt='calendar' className='mr-2' /> {formatearFecha(tarea.Fecha)}
//                                     </div>
//                                     <div className='materia rounded-xl ml-4 text-center font-semibold w-36'>
//                                         Materia: {tarea.Materia}
//                                     </div>
//                                     <button onClick={() => handleDeleteTarea(tarea.Id_Tarea)} className="bg-red-500 text-white p-2 mt-2 rounded">
//                                         Eliminar
//                                     </button>
//                                     <button onClick={() => handleMoveToProceso(tarea)} className="bg-blue-500 text-white p-2 mt-2 rounded">
//                                         Mover a Proceso
//                                     </button>
//                                 </div>
//                             </div>
//                         ))}
//                     </ul>
//                 </div>
//             </section>
//         </div>
//     )
// }

// export default Tarea