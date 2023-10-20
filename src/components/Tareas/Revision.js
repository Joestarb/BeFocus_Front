import React, {useEffect, useState} from 'react';
import Calendario from "../../assets/TareasAssets/calendario.png";
import Revisio from "../../assets/TareasAssets/revision.png";
import Swal from 'sweetalert2';


function Revision({ tareasEnRevision, onDeleteTarea, setTareasEnRevision }) {
    const [tareas, setTareas] = useState([]);
    const [editingTarea, setEditingTarea] = useState(null);
    const [editedDescripcion, setEditedDescripcion] = useState('');
    const [editedFecha, setEditedFecha] = useState('');
    const [editedMateria, setEditedMateria] = useState('');


    //EDITAR TAREA
    const editarTarea = (tarea) => {
        setEditingTarea(tarea);
        setEditedDescripcion(tarea.Descripcion);
        setEditedFecha(tarea.Fecha);
        setEditedMateria(tarea.Materia);
    };


    //ELIMINAR TAREA
    const eliminarTarea = (taskId) => {
        fetch(`http://localhost:4000/tareas/${taskId}`, {
            method: 'DELETE',
        })
            .then((response) => {
                if (response.status === 200) {
                    setTareas(tareas.filter((tarea) => tarea.Id_Tarea !== taskId));
                } else if (response.status === 404) {
                    console.error('Tarea no encontrada');
                } else {
                    console.error('Error al eliminar la tarea');
                }
            })
            .catch((error) => console.error('Error al eliminar la tarea:', error));
    };

    //OBTENER TODAS LAS TAREAS
    const obtenerTareas = async () => {
        fetch('http://localhost:4000/tareas?Estatus=Revision')
        .then((response) => response.json())
        .then((data) => setTareas(data))
        .catch((error) => console.error('Error al obtener las tareas:', error));
    console.log(tareas)
    }

    useEffect(() => {
        obtenerTareas()
    }, []);

    //FORMATEAR FECHA
    const formatearFecha = (fechaISO) => {
        const fechaFormateada = new Date(fechaISO).toLocaleDateString();
        return fechaFormateada;
    };


    //UPDATE
    const actualizarTarea = async (tarea) => {
        const Id_Tarea = tarea.Id_Tarea;
        const Descripcion = editedDescripcion;
        const Fecha = editedFecha;
        const Materia = editedMateria;

        if (!Descripcion || !Fecha || !Materia) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Necesitas rellenar todos los campos para poder actualizar la tarea',
              })
            return; // No actualices si falta información
        }

        try {
            const response = await fetch(`http://localhost:4000/tareas/${Id_Tarea}?Estatus=Revision`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    Descripcion: Descripcion,
                    Fecha: Fecha,
                    Materia: Materia,
                    Estatus: tarea.Estatus
                }),
            });
            if (response.ok) {
                console.log('Tarea actualizada correctamente.');
                obtenerTareas()
            } else {
                console.error('Error al actualizar la nota.');
            }
        } catch (error) {
            console.error('Error de red:', error);
        }
    }

    //CANCELAR EDICION
    const cancelarEdicion = () => {
        setEditingTarea(null);
        setEditedDescripcion('');
        setEditedFecha('');
        setEditedMateria('');
    }

    const cambiarEstatus = async (tarea) => {
        const Id_Tarea = tarea.Id_Tarea;
        const Descripcion = tarea.Descripcion;
        const Fecha = tarea.Fecha;
        const Materia = tarea.Materia;

        console.log(tarea)
        console.log(Id_Tarea)
        console.log(Descripcion)
        console.log(Fecha)
        console.log(Materia)
        try {
            const response = await fetch(`http://localhost:4000/tareas/${Id_Tarea}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    Descripcion: Descripcion,
                    Fecha: Fecha,
                    Materia: Materia,
                    Estatus: 'Proceso'
                }),
            });
            if (response.ok) {
                console.log(tarea)
                console.log(tarea.Descripcion)
                console.log(tarea.Estatus)
                console.log(response)
                console.log('Tarea actualizada correctamente.');
                obtenerTareas()

            } else {
                console.error('Error al actualizar la nota.');
            }
        } catch (error) {
            console.error('Error de red:', error);
        }
    }


    return (
        <div>
            <div>
                <div className='tareasenrevision p-4 rounded-2xl flex justify-between'>
                    <div className=' text-center'>
                        <p className='text-white text-6xl font-semibold'>{tareas.length}</p>
                        <p className='ml-3 text-white font-semibold'>Tareas en Revisión</p>
                    </div>
                    <div className=' m-auto ml-32'>
                        <img src={Revisio} width={80} height={80} alt='tareas' className=' m-auto' />
                    </div>
                </div>
            </div>
            <div>
                {tareas.map((tarea) => (
                    <div key={tarea.Id_Tarea}>
                        {editingTarea === tarea ? (
                            <div className='p-4 rounded-2xl border my-3 shadow-xl'>
                                <input
                                    type="text"
                                    value={editedDescripcion}
                                    onChange={(e) => setEditedDescripcion(e.target.value)}
                                    className='p-2 rounded-xl border-2 w-full outline-none mt-4'
                                />
                                <input
                                    type="date"
                                    value={editedFecha}
                                    onChange={(e) => setEditedFecha(e.target.value)}
                                    className='p-2 rounded-xl border-2 w-full outline-none mt-4'

                                />
                                <input
                                    type="text"
                                    value={editedMateria}
                                    onChange={(e) => setEditedMateria(e.target.value)}
                                    className='p-2 rounded-xl border-2 w-full outline-none mt-4'
                                />
                                <div className='flex justify-between'>
                                    <button onClick={() => actualizarTarea(tarea)} className='bg-ColorSidebar text-white p-2 mt-2 rounded mx-auto'>Guardar</button>
                                    <button onClick={() => cancelarEdicion()} className='bg-CF95757 text-white p-2 mt-2 rounded mx-auto'>Cancelar</button>
                                </div>
                            </div>
                        ) : (
                            <div className='p-4 rounded-2xl border my-3 shadow-xl'>
                                <h2 className='font-semibold text-3xl mb-2'>{tarea.Descripcion}</h2>
                                <div className='flex mt-2 text-gray-400 mb-2'>
                                    <img src={Calendario} alt='calendar' className='mr-2' />
                                    {formatearFecha(tarea.Fecha)}
                                </div>
                                <h2 className='materia rounded-xl text-center font-semibold w-36'>
                                    Materia: {tarea.Materia}
                                </h2>
                                <div className='flex justify-between'>
                                    <button onClick={() => editarTarea(tarea)} className='bg-ColorSidebar text-white p-2 mt-2 rounded mx-auto'>Editar</button>
                                    <button onClick={() => eliminarTarea(tarea.Id_Tarea)} className='bg-CF95757 text-white p-2 mt-2 rounded mx-auto'>Eliminar</button>

                                </div>
                            </div>
                        )}
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Revision;
