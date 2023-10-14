import React, { useEffect, useState } from 'react';
import * as HiIcons from 'react-icons/hi';
import * as SlIcons from 'react-icons/sl';
import CardNotas from './CardNotas';


function MenuNotas({notaUtilizar, setNotaUtilizar}) {
    const [notas, setNotas] = useState([]);
    const [notaSeleccionada, setNotaSeleccionada] = useState([]);

    // useEffect(() => {
    //     console.log(notaUtilizar)
    // }, [])


    //Obtener todos las notas
    useEffect(() => {
        fetch('http://localhost:4000/Notas')
            .then(res => res.json())
            .then(data => setNotas(data))
            .catch(err => console.log(err));
    }, []);

    //Obtener una nota especifica
    const obtenerNotaSeleccionada = (Id_Nota) => {
        fetch(`http://localhost:4000/Notas/${Id_Nota}`)
            .then(res => res.json())
            .then(data => {
                setNotaSeleccionada(data);
                setNotaUtilizar(data);
            })
            .catch(err => console.log(err));
    }

    //Eliminar nota
    const eliminarNotaSeleccionada = (Id_Nota) => {
        fetch(`http://localhost:4000/Notas/${Id_Nota}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                setNotaSeleccionada(data);
            })
            .then(() => {
                window.location.reload();
            })
            .catch(err => console.log(err));
            console.log("Se elimino la nota")
    }


    //Queda pendiente de hacer el actualizar y lograr mostrar una nota especifica en el lado de contenido_Nota

    return (
        <div className='bgNotas h-screen overflow-auto'>
            <div className='flex justify-between p-3'>
                <h1 className='font-PassionOne text-5xl'>Notas</h1>
                <div className='flex'>
                    <button onClick={() => setNotaUtilizar(false)}>
                        <HiIcons.HiPlus className='text-4xl my-auto text-zinc-900' />
                    </button>
                    {/* <button>
                        <SlIcons.SlOptionsVertical className='text-3xl my-auto text-zinc-900' />
                    </button> */}
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
