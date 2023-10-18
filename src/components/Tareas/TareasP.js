import React, { useEffect, useState } from 'react';
import Process from "../../assets/TareasAssets/Proceso.png";
import Revisio from "../../assets/TareasAssets/revision.png";
import TodasTareas from './TodasTareas';
import Proceso from './Proceso';
import Revision from './Revision';



function TareasP() {
    const initialValidationState = {
        Descripcion: true,
        Fecha: true,
        Materia: true,
    };
    const [tareas, setTareas] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [validation, setValidation] = useState(initialValidationState);
    const [tareasEnProceso, setTareasEnProceso] = useState([]); // Nuevo estado para tareas en proceso
    const [nuevaTarea, setNuevaTarea] = useState({
        Descripcion: '',
        Fecha: '',
        Materia: '',
        FK_Usuario: 1, // Ajusta esto según tus necesidades
        Estatus: 'Actividades'
    });

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

    //POST DE TAREA
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
                        Estatus: 'Actividades'
                    });
                    setShowForm(false);
                    setValidation(initialValidationState);
                })
                .catch((error) => console.error('Error al agregar la tarea:', error));
        }
    };

    return (
        <div>
            <div className='mx-12 mt-12'>
                <div className='flex justify-between'>
                    <p className='font-semibold text-6xl mb-2'>Mis Tareas</p>
                    <button onClick={handleFormToggle} className='bg-blue-400 hover:bg-blue-600 duration-600 shadow-xl rounded-xl px-8 py-4 m-4 font-semibold '>
                        Añadir tarea
                    </button>
                </div>
                <div className='border border-gray-400 w-[85vw]'></div>
            </div>
            {/* -------- */}
            {showForm && (
                <div className='mx-12 mt-5'>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="Descripcion" className="block text-2xl font-semibold text-gray-600">Descripción (máximo 20 caracteres):</label>
                            <input
                                type="text"
                                id="Descripcion"
                                name="Descripcion"
                                value={nuevaTarea.Descripcion}
                                onChange={handleInputChange}
                                maxLength={20}
                                className={`w-full p-2 border rounded-xl outline-none mt-4 ${validation.Descripcion ? '' : 'border-red-500'}`}
                            />
                            {!validation.Descripcion && (
                                <p className="text-red-500">La descripción es obligatoria</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="Fecha" className="block text-2xl font-semibold text-gray-600">Fecha:</label>
                            <input
                                type="date"
                                id="Fecha"
                                name="Fecha"
                                value={nuevaTarea.Fecha}
                                onChange={handleInputChange}
                                className={`w-full p-2 border rounded-xl outline-none mt-4 ${validation.Fecha ? '' : 'border-red-500'}`}
                            />
                            {!validation.Fecha && <p className="text-red-500">La fecha es obligatoria</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="Materia" className="block text-2xl font-semibold text-gray-600">Materia (máximo 20 caracteres):</label>
                            <input
                                type="text"
                                id="Materia"
                                name="Materia"
                                value={nuevaTarea.Materia}
                                onChange={handleInputChange}
                                maxLength={20}
                                className={`w-full p-2 border rounded-xl outline-none mt-4${validation.Materia ? '' : 'border-red-500'}`}
                            />
                            {!validation.Materia && <p className="text-red-500">La materia es obligatoria</p>}
                        </div>
                        <div className=' text-center'>
                            <button onClick={handleFormToggle} className='bg-red-400 hover:bg-blue-600 duration-600 shadow-xl rounded-xl m-2 p-4 font-semibold text-white'>cerrar menú</button>
                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="bg-blue-400 hover:bg-blue-600 duration-600 shadow-xl rounded-xl  m-2 p-4 font-semibold text-white"
                            >
                                Agregar tarea
                            </button>
                        </div>
                    </form>
                </div>
            )}
            {/* ---------- */}

            {/* tareas */}
            <div className=' grid grid-cols-3 mx-12 mt-5 gap-4 columns-3'>
                <div>
                    <TodasTareas />
                </div>
                <div>
                    <Proceso />
                </div>
                <div>
                    <Revision />
                </div>
            </div>
        </div>
    );
}

export default TareasP;