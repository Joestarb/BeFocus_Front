import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const TodoList = () => {
  const [tareas, setTareas] = useState([]);
  const id_Usuario = localStorage.getItem("Usuario");
  const [tareaData, setTareaData] = useState({
    Descripcion: '',
    Fecha: '',
    Materia: '',
    FK_Usuario: id_Usuario,
    Estatus: 'pendiente'
  });

  const [tareaEditada, setTareaEditada] = useState({
    Descripcion: '',
    Fecha: '',
    Materia: '',
    FK_Usuario: id_Usuario,
    Estatus: 'pendiente',
  });

  const [indiceTarea, setIndiceTarea] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [filtroEstado, setFiltroEstado] = useState('todas');


  const formatearFecha = (Fecha) => {
    const fecha = new Date(Fecha);
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const anio = fecha.getFullYear();
    return `${dia}/${mes}/${anio}`;
  };

  //Obtenemos todas las tareas
  useEffect(() => {
    obtenerTareas();
  }, [filtroEstado]);

  const obtenerTareas = () => {
    fetch(`http://localhost:4000/tareas/${id_Usuario}`)
      .then((response) => response.json())
      .then((data) => setTareas(data))
      .catch((error) => {
        console.error('Error al obtener las tareas:', error);
        showAlert('Error', 'Error al obtener las tareas.', 'error');
      });
  };

  //Alerta formato
  const showAlert = (title, text, icon) => {
    Swal.fire({
      title,
      text,
      icon,
      confirmButtonText: 'OK',
    });
  };

  //Crear una nueva tarea
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { Descripcion, Fecha, Materia, Estatus } = tareaData;

    if (!Descripcion || !Fecha || !Materia || !Estatus) {
      showAlert('Error', 'Por favor, complete todos los campos correctamente.', 'error');
      return;
    }

    if (!Descripcion.trim() || !Fecha || !Materia.trim() || !Estatus) {
      showAlert('Error', 'Por favor, complete todos los campos correctamente.', 'error');
      return;
    }

    // Validar que la fecha no sea anterior al día actual
    const today = new Date().toISOString().slice(0, 10);
    const selectedDate = new Date(tareaData.Fecha).toISOString().slice(0, 10);

    if (selectedDate < today) {
      console.log(selectedDate)
      console.log(today)
      showAlert('Error', 'La fecha de entrega no puede ser anterior al día de hoy.', 'error');
      return;
    } else {
      console.log(selectedDate)
    }

    try {
      const resultado = await fetch('http://localhost:4000/tareas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tareaData),
      });

      if (!resultado.ok) {
        showAlert('Error', 'Ha ocurrido un error al crear la tarea.', 'error');
        return;
      }

      setTareaData({
        Descripcion: '',
        Fecha: '',
        Materia: '',
        FK_Usuario: id_Usuario,
        Estatus: 'pendiente',
      });

      setModalVisible(false);
      obtenerTareas();
      showAlert('Éxito', 'Tarea creada exitosamente.', 'success');
    } catch (error) {
      console.log(error);
      showAlert('Error', 'Ha ocurrido un error.', 'error');
    }
  };

  //Para editar la tarea

  const handleEditTask = (index) => {
    const tarea = tareas[index];
    setTareaData(tarea);
    setIndiceTarea(index);
    setModalVisible(true);
  };

  const handleEdit = async (e) => {
    e.preventDefault();

    // Validar que la descripción y la categoría no estén vacías
    if (!tareaData.Descripcion.trim() || !tareaData.Materia.trim()) {
      showAlert('Error', 'Por favor, complete todos los campos correctamente.', 'error');
      return;
    }

    // Validar que la fecha no sea anterior al día actual
    const today = new Date().toISOString().slice(0, 10);
    const selectedDate = new Date(tareaData.Fecha).toISOString().slice(0, 10);

    if (selectedDate < today) {
      showAlert('Error', 'La fecha de entrega no puede ser anterior al día de hoy.', 'error');
      return;
    }

    try {
      const resultado = await fetch(`http://localhost:4000/tareas/${tareas[indiceTarea].Id_Tarea}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tareaData),
      });

      if (!resultado.ok) {
        showAlert('Error', 'Ha ocurrido un error al editar la tarea.', 'error');
        return;
      }

      setTareaData({
        Descripcion: '',
        Fecha: '',
        Materia: '',
        FK_Usuario: id_Usuario,
        Estatus: 'pendiente',
      });

      setIndiceTarea(null);
      setModalVisible(false);
      obtenerTareas();
      showAlert('Éxito', 'Tarea editada exitosamente.', 'success');
    } catch (error) {
      console.log(error);
      showAlert('Error', 'Ha ocurrido un error.', 'error');
    }
  };

  const eliminarTarea = (taskId) => {
    fetch(`http://localhost:4000/tareas/${taskId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.status === 200) {
          setTareas(tareas.filter((tarea) => tarea.Id_Tarea !== taskId));
          showAlert('Éxito', 'Tarea eliminada exitosamente.', 'success');
        } else if (response.status === 404) {
          showAlert('Error', 'Tarea no encontrada.', 'error');
        } else {
          showAlert('Error', 'Error al eliminar la tarea.', 'error');
        }
      })
      .catch((error) => showAlert('Error', 'Error al eliminar la tarea.', 'error'));
  };

  const actualizarEstado = (tarea, estado) => {
    tareaEditada.Descripcion = tarea.Descripcion
    tareaEditada.Fecha = tarea.Fecha
    tareaEditada.Materia = tarea.Materia
    tareaEditada.FK_Usuario = tarea.FK_Usuario
    tareaEditada.Estatus = estado

    fetch(`http://localhost:4000/tareas/${tarea.Id_Tarea}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tareaEditada),
    })
      .then((response) => {
        if (response.status === 200) {
          obtenerTareas();
          showAlert('Éxito', 'Estado de la tarea actualizado exitosamente.', 'success');
        } else if (response.status === 404) {
          showAlert('Error', 'Tarea no encontrada.', 'error');
        } else {
          showAlert('Error', 'Error al actualizar el estado de la tarea.', 'error');
        }
      })
      .catch((error) => showAlert('Error', 'Error al actualizar el estado de la tarea.', 'error'));
  }

  const filtrarTareasPorEstado = (tareas, estado) => {
    if (estado === 'todas') {
      return tareas;
    }
    return tareas.filter((tarea) => tarea.Estatus === estado);
  };



  return (
    <div className="min-h-screen text-white p-8">
      <motion.h1
        initial={{ opacity: 0, }}
        animate={{ opacity: 1, }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 1 }}
        className="text-center my-8 text-5xl font-bold text-zinc-900 italic m-auto">Lista de Tareas</motion.h1>

      <div className="flex flex-col ">
        <AnimatePresence>
          {modalVisible && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: .5 }}
              className="fixed top-0 left-0  w-full h-full flex items-center justify-center bg-black bg-opacity-50"

            >
              <div className="bg-zinc-100 p-8 rounded w-full mx-3 lg:w-1/2">
                <form onSubmit={indiceTarea !== null ? handleEdit : handleSubmit} className="text-left">
                  <label className="block text-md font-semibold text-zinc-900">Nombre de la Tarea:</label>
                  <input
                    type="text"
                    value={tareaData.Descripcion}
                    onChange={(e) => setTareaData({ ...tareaData, Descripcion: e.target.value })}
                    required
                    className="mt-1 p-2 w-full border rounded-md text-black outline-none"
                  />
                  <label htmlFor="fecha" className="block mt-4 text-md font-semibold text-zinc-900">Fecha de Entrega:</label>
                  <input
                    type="date"
                    value={tareaData.Fecha}
                    onChange={(e) => setTareaData({ ...tareaData, Fecha: e.target.value })}
                    className="mt-1 p-2 w-full border rounded-md text-black outline-none"
                  />
                  <label htmlFor="materia" className="block mt-4 text-md font-semibold text-zinc-900">Categoria:</label>
                  <input
                    type="text"
                    value={tareaData.Materia}
                    onChange={(e) => setTareaData({ ...tareaData, Materia: e.target.value })}
                    required
                    className="mt-1 p-2 w-full border rounded-md text-black outline-none"
                  />
                  <label htmlFor="estado" className="block mt-4 text-md font-semibold text-zinc-900">Estado:</label>
                  <select
                    name="Estatus"
                    value={tareaData.Estatus}
                    onChange={(e) => {
                      setTareaEditada({ ...tareaEditada, Estatus: e.target.value })
                      setTareaData({ ...tareaData, Estatus: e.target.value });
                    }}
                    className="mt-1 p-2 w-full border rounded-md text-black outline-none"
                  >
                    <option value="pendiente">Pendiente</option>
                    <option value="completada">Completada</option>
                    <option value="en proceso">En Proceso</option>
                  </select>
                  <div className="flex justify-center mt-4">
                    <button
                      type="submit"
                      className="bg-[#2E4374] text-white border-none rounded p-2 cursor-pointer text-xl font-bold w-full"
                    >
                      {indiceTarea !== null ? 'Editar Tarea' : 'Crear Tarea'}
                    </button>
                  </div>
                </form>
                <div className="flex justify-center mt-4">
                  <button
                    onClick={() => setModalVisible(false)}
                    className="bg-red-500 shadow-2xl text-white border-none rounded-full p-2 cursor-pointer text-xl font-bold"
                  >
                    Cerrar Formulario
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="bg-white bg-opacity-80 rounded p-4 md:p-8 w-full text-left m-auto">
          <div className="flex  justify-center mb-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1 }}
              className="flex flex-wrap  ">
              <div className='  flex-grow-0  '>
                <button
                  onClick={() => setFiltroEstado('todas')}
                  className={`filtroBtn ${filtroEstado === 'todas' ? 'bg-[#1F4172]' : 'bg-[#413543]'} text-white border-none rounded p-2 cursor-pointer text-md md:text-xl font-medium md:font-bold ml-2`}
                >
                  Todas
                </button>
                <button
                  onClick={() => setFiltroEstado('pendiente')}
                  className={`filtroBtn ${filtroEstado === 'pendiente' ? 'bg-[#1F4172]' : 'bg-[#413543]'} text-white border-none rounded p-2 cursor-pointer text-md md:text-xl font-medium md:font-bold ml-2`}
                >
                  Pendientes
                </button>
                <button
                  onClick={() => setFiltroEstado('en proceso')}
                  className={`filtroBtn ${filtroEstado === 'en proceso' ? 'bg-[#1F4172]' : 'bg-[#413543]'} text-white border-none rounded p-2 cursor-pointer text-md md:text-xl font-medium md:font-bold ml-2`}
                >
                  En proceso
                </button>
                <button
                  onClick={() => setFiltroEstado('completada')}
                  className={`filtroBtn ${filtroEstado === 'completada' ? 'bg-[#1F4172]' : 'bg-[#413543]'} text-white border-none rounded p-2 cursor-pointer text-md md:text-xl font-medium md:font-bold ml-2`}
                >
                  Completadas
                </button>
                <button
                  onClick={() => {
                    setTareaData({
                      Descripcion: '',
                      Fecha: '',
                      Materia: '',
                      FK_Usuario: id_Usuario,
                      Estatus: 'pendiente',
                    });
                    setIndiceTarea(null);
                    setModalVisible(true);
                  }}
                  className="bg-[#1F4172] ml-3 text-white border-none rounded-full px-4 py-2 cursor-pointer text-xl font-bold"
                >
                  +
                </button>
              </div>
            </motion.div>

          </div>
          {/* ternario para decir que no hay tareas agreagdas */}
          {tareas.length > 0 ?
            (<>
              <div className="overflow-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 ">
                {filtrarTareasPorEstado(tareas, filtroEstado).map((tarea, index) => (
                  <div className="ease-out duration-300 hover:scale-105 m-5">
                                      <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 1 }}
                    key={tarea.Id_Tarea} className={`rounded p-4 mb-4 shadow-lg shadow-zinc-100  border-2 border-zinc-100 text-zinc-800  `}
                    >
                    <h3 className="taskName text-lg font-semibold mb-2" style={{ overflowWrap: 'break-word' }}>Nombre: {tarea.Descripcion}</h3>
                    <h3 className="taskDate text-lg font-semibold mb-2" style={{ overflowWrap: 'break-word' }}>Fecha de Entrega: {formatearFecha(tarea.Fecha)}</h3>
                    <h3 className="taskCategory text-lg font-semibold mb-2" style={{ overflowWrap: 'break-word' }}>Categoría: {tarea.Materia}</h3>
                    <h3 className="taskStatus text-lg font-semibold mb-2" style={{ overflowWrap: 'break-word' }}>Estado: {tarea.Estatus}</h3>
                    <div className="options mt-3 flex space-x-2">
                    <button
                        className={`${tarea.Estatus === 'pendiente' ? 'bg-[#CBB279]' : tarea.Estatus === 'en proceso' ? 'bg-[#1F4172]' : 'bg-[#1F8A70]'} text-white rounded p-2 cursor-pointer text-lg font-semibold`}
                        onClick={() => {
                          if (tarea.Estatus === 'pendiente') {
                            actualizarEstado(tarea, 'en proceso')
                          }
                          if (tarea.Estatus === 'en proceso') {
                            actualizarEstado(tarea, 'completada')
                          }
                          if (tarea.Estatus === 'completada') {
                            actualizarEstado(tarea, 'pendiente')
                          }
                        }}
                      >
                        {/* Cambiar el texto del botón según el estado de la tarea */}
                        {tarea.Estatus === 'pendiente' ? 'en proceso' : tarea.Estatus === 'en proceso' ? 'Completada' : 'Pendiente'}
                      </button>
                      <button
                        className="editBtn bg-blue-500 text-white border-none rounded p-2 cursor-pointer text-lg font-semibold"
                        onClick={() => handleEditTask(index)}
                      >
                        Editar
                      </button>
                      <button
                        className="deleteBtn bg-red-500 text-white border-none rounded p-2 cursor-pointer text-lg font-semibold"
                        onClick={() => eliminarTarea(tarea.Id_Tarea)}
                      >
                        Eliminar
                      </button>
                    </div>
                  </motion.div>
                  </div>
                ))}
              </div>
            </>)
            :
            (<>
              <p className="text-black text-center text-3xl font-semibold"> No hay tareas agregadas, empieza agregando algo a la lista</p>
            </>)
          }
        </div>
      </div>
    </div>
  );
};

export default TodoList;
