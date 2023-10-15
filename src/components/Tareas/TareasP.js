import React, { useEffect, useState } from 'react';
import Proceso from "../../assets/TareasAssets/Proceso.png";
import Tareasimg from "../../assets/TareasAssets/Tareas.png";
import Calendario from "../../assets/TareasAssets/calendario.png";
import Revision from "../../assets/TareasAssets/revision.png";

function TareasP() {
    const initialValidationState = {
        Descripcion: true,
        Fecha: true,
        Materia: true,
    };
    const [tareas, setTareas] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [validation, setValidation] = useState(initialValidationState);
    const [nuevaTarea, setNuevaTarea] = useState({
        Descripcion: '',
        Fecha: '',
        Materia: '',
        FK_Usuario: 1, // Ajusta esto según tus necesidades
    });

    useEffect(() => {
        // Realizar la solicitud HTTP para obtener las tareas desde el servidor
        fetch('http://localhost:4000/tareas')
            .then((response) => response.json())
            .then((data) => setTareas(data))
            .catch((error) => console.error('Error al obtener las tareas:', error));
    }, []);

    const handleFormToggle = () => {
        setShowForm(!showForm); // Alternar la visibilidad del formulario
    };



    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNuevaTarea({
            ...nuevaTarea,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        const newValidation = { ...initialValidationState };

        if (nuevaTarea.Descripcion === '') {
            newValidation.Descripcion = false;
        }

        if (nuevaTarea.Fecha === '') {
            newValidation.Fecha = false;
        }

        if (nuevaTarea.Materia === '') {
            newValidation.Materia = false;
        }

        // Si alguna validación no se cumple, no se envía la solicitud
        if (Object.values(newValidation).some((valid) => !valid)) {
            setValidation(newValidation);
        } else {
            // Realizar la solicitud HTTP POST para agregar la tarea al servidor
            fetch('http://localhost:4000/tareas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(nuevaTarea),
            })
                .then((response) => response.json())
                .then((data) => {
                    // Actualizar el estado de tareas con la nueva tarea
                    setTareas([...tareas, data]);
                    // Reiniciar el formulario y ocultarlo
                    setNuevaTarea({
                        Descripcion: '',
                        Fecha: '',
                        Materia: '',
                        FK_Usuario: 1,
                    });
                    setShowForm(false);
                    setValidation(initialValidationState);

                    // Recargar la página actual para actualizar el contenido
                    window.location.reload();
                })
                .catch((error) => console.error('Error al agregar la tarea:', error));
        }
    };



    const handleDeleteTarea = (taskId) => {
        // Realizar la solicitud DELETE para eliminar la tarea del servidor
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


    return (
        <div>
            <div className='mx-12 mt-12'>
                <div className='flex justify-between'>
                    <p className='font-semibold text-6xl mb-2'>Mis Tareas</p>
                    <button onClick={handleFormToggle} className='bg-blue-400 hover:bg-blue-600 duration-600 shadow-xl rounded-xl'>
                        Añadir tarea
                    </button>
                </div>
                <div className='border border-gray-400 w-[85vw]'></div>
            </div>

            {showForm && (
                <div className='mx-12 mt-5'>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="Descripcion" className="block text-2xl font-semibold text-gray-600">
                                Descripción:
                            </label>
                            <input
                                type="text"
                                id="Descripcion"
                                name="Descripcion"
                                value={nuevaTarea.Descripcion}
                                onChange={handleInputChange}
                                className={`w-full p-2 border rounded-xl ${validation.Descripcion ? '' : 'border-red-500'}`}
                            />
                            {!validation.Descripcion && (
                                <p className="text-red-500">La descripción es obligatoria</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="Fecha" className="block text-2xl font-semibold text-gray-600">
                                Fecha:
                            </label>
                            <input
                                type="date"
                                id="Fecha"
                                name="Fecha"
                                value={nuevaTarea.Fecha}
                                onChange={handleInputChange}
                                className={`w-full p-2 border rounded-xl ${validation.Fecha ? '' : 'border-red-500'}`}
                            />
                            {!validation.Fecha && <p className="text-red-500">La fecha es obligatoria</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="Materia" className="block text-2xl font-semibold text-gray-600">
                                Materia:
                            </label>
                            <input
                                type="text"
                                id="Materia"
                                name="Materia"
                                value={nuevaTarea.Materia}
                                onChange={handleInputChange}
                                className={`w-full p-2 border rounded-xl ${validation.Materia ? '' : 'border-red-500'}`}
                            />
                            {!validation.Materia && <p className="text-red-500">La materia es obligatoria</p>}
                        </div>
                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="bg-blue-400 hover:bg-blue-600 duration-600 shadow-xl rounded-xl"
                        >
                            Agregar tarea
                        </button>
                    </form>
                </div>
            )}

            {/* tareas */}
            <div className='grid grid-cols-3 ml-12 mt-5 gap-10'>
                <section>
                    <div className='tarea p-4 rounded-2xl flex justify-between'>
                        <div>
                            <p className='text-white text-6xl '>{tareas.length}</p>
                            <p className='ml-3 text-white'>Tareas</p>
                        </div>
                        <div>
                            <img src={Tareasimg} alt='tareas' />
                        </div>
                    </div>

                    <div className="container mx-auto">
                        <ul className="list-disc space-y-2">
                            {tareas.map((tarea, index) => (
                                <div className='border border-gray-400 p-5 rounded-xl mt-4' key={index}>
                                    <div>
                                        <div className='font-semibold text-4xl'>{tarea.Descripcion}</div>
                                        <div className='flex mt-2 text-gray-400'>
                                            <img src={Calendario} alt='calendar' className='mr-2' /> {tarea.Fecha}
                                            <div className='materia rounded-xl ml-4 text-center font-semibold w-36'>
                                                Materia: {tarea.Materia}
                                            </div>
                                            <button onClick={() => handleDeleteTarea(tarea.Id_Tarea)} className="bg-red-500 text-white p-2 mt-2 rounded">
                                                Eliminar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* tareas en proceso*/}
                <section>
                    <div className='tareasenproceso p-4 rounded-2xl flex justify-between'>
                        <div>
                            <p className='text-white text-6xl '>{tareas.length}</p>
                            <p className='ml-3 text-white'>Tareas</p>
                        </div>
                        <div>
                            <img src={Proceso} alt='tareas' />
                        </div>
                    </div>

                    <div className="container mx-auto">

                    </div>
                </section>

                {/* tareas en revision*/}
                <section>
                    <div className='tareasenrevision p-4 rounded-2xl flex justify-between'>
                        <div>
                            <p className='text-white text-6xl '>{tareas.length}</p>
                            <p className='ml-3 text-white'>Tareas</p>
                        </div>
                        <div>
                            <img src={Revision} alt='tareas' />
                        </div>
                    </div>

                    <div className="container mx-auto">

                    </div>
                </section>
            </div>
        </div>
    );
}

export default TareasP;
