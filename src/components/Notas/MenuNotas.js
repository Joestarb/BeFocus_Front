import React, { useEffect, useState } from 'react';
import * as HiIcons from 'react-icons/hi';
import CardNotas from './CardNotas';
import Swal from 'sweetalert2';


function MenuNotas({notaUtilizar, setNotaUtilizar, notaEfectos, setNotaEfectos}) {
    const [notas, setNotas] = useState([]);
    const [notaSeleccionada, setNotaSeleccionada] = useState([]);

    const recargarNotas = () => {
        const id_Usuario = localStorage.getItem("Usuario");
        fetch(`http://localhost:4000/Notas/${id_Usuario}`)
          .then(res => res.json())
          .then(data => setNotas(data))
          .catch(err => console.log(err));
      };

    //Obtener una nota especifica
    const obtenerNotaSeleccionada = (Id_Nota) => {
        fetch(`http://localhost:4000/Notas/Nota/${Id_Nota}`)
            .then(res => res.json())
            .then(data => {
                // setNotaSeleccionada(data);
                setNotaUtilizar(data);
            })
            .catch(err => console.log(err));
    }

    //Eliminar nota
    const eliminarNotaSeleccionada = (Id_Nota) => {
        Swal.fire({
            title: "¿Estas seguro que quieres eliminar esta nota?",
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: "Eliminar",
            denyButtonText: `Cancelar`
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire("Se elimino la nota", "", "success");
              fetch(`http://localhost:4000/Notas/${Id_Nota}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    setNotaUtilizar(false)
                })
                .catch(err => console.log(err));
                console.log("Se elimino la nota")
            } else if (result.isDenied) {
              Swal.fire("Se cancelo la operación", "", "info");
            }
          });
    }

        //Obtener todos las notas
        useEffect(() => {
            const id_Usuario = localStorage.getItem("Usuario");
            fetch(`http://localhost:4000/Notas/${id_Usuario}`)
                .then(res => res.json())
                .then(data => setNotas(data))
                .catch(err => console.log(err));
        }, [eliminarNotaSeleccionada, notaEfectos]);

    return (
        <div className='bg-slate-50 h-screen overflow-auto w-full'>
            <div className='flex justify-between p-3'>
                <h1 className='font-PassionOne text-5xl'>Notas</h1>
                <div className='flex'>
                    <button onClick={() => setNotaUtilizar(false)}>
                        <HiIcons.HiPlus className='text-4xl my-auto text-zinc-900' />
                    </button>
                </div>
            </div>
            <div>
                {notas.map(nota => (
                    <CardNotas
                        key={nota.Id_Nota}
                        Id={nota.Id_Nota} // Pasa el ID de la nota como una prop
                        Titulo={nota.Titulo}
                        Contenido={nota.Contenido}
                        Fecha_Creacion={nota.Fecha_Creacion}
                        Eleccion={obtenerNotaSeleccionada}
                        Eliminacion={eliminarNotaSeleccionada}
                    />
                ))}
            </div>
            
        </div>
    );
}

export default MenuNotas;
