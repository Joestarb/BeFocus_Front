import React from 'react'

function CardsNotas(props) {
  const { Titulo, Contenido, Fecha_Creacion } = props;

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
  
  
  return (
    <div className='bg-white w-11/12 m-auto rounded-2xl mt-4 mb-3'>
      <h1 className='ml-4 font-semibold text-xl pt-2'>{Titulo}</h1>
      <p className='ml-4 mb-6 mr-2'>{truncarContenido(Contenido, 20)}</p>
      <h3 className=' text-end font-medium mr-3 mt-1'>{formatearFecha(Fecha_Creacion)}</h3>
    </div>
    
  )
}

export default CardsNotas