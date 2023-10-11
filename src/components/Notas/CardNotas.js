import React from 'react'
import * as MdIcons from 'react-icons/md';

function CardsNotas(props) {
  const { Id,Titulo, Contenido, Fecha_Creacion, Eleccion, Eliminacion } = props;

  const elegirNota = () => {
    Eleccion(Id);
  }


  const formatearFecha = (fechaISO) => {
    const fechaFormateada = new Date(fechaISO).toLocaleDateString();
    return fechaFormateada;
  };

  const truncarContenido = (texto, palabrasMaximas) => {
    const palabras = texto.split(' ');
    if (palabras.length > palabrasMaximas) {
      return palabras.slice(0, palabrasMaximas).join(' ') + '...'; // Agrega puntos suspensivos al final
    }
    return texto;
  };
  

  //Eliminar nota
  const eliminarNota = () => {
    Eliminacion(Id);
  }
  
  return (
    <div className='bg-white w-11/12 m-auto rounded-2xl mt-4 mb-3 cursor-pointer' onClick={elegirNota}>
      <div className='flex justify-between'>
      <h1 className='ml-4 font-semibold text-xl pt-2'>{Titulo}</h1>
      <MdIcons.MdDeleteForever className='text-3xl my-auto mr-1 text-red-500 cursor-pointer' onClick={eliminarNota}/>
      </div>
      <p className='ml-4 mb-6 mr-2'>{truncarContenido(Contenido, 20)}</p>
      <h3 className=' text-end font-medium mr-3 mt-1'>{formatearFecha(Fecha_Creacion)}</h3>
    </div>
    
  )
}

export default CardsNotas