import React, { useState, useEffect } from 'react'

function ContenidoNota({ notaUtilizar }) {

  // Endpoint de post
  const [nota, setNota] = useState({
    Titulo: "",
    Contenido: "",
    FK_Usuario: "1",
    Fecha_Creacion: "2023-10-10"
  });

  //UPDATE

  // const actualizarNota = async () => {
  //   try {
  //     const response = await fetch(`http://localhost:4000/Notas/${notaUtilizar.Id_Nota}`, {
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(nota),
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       setNota(data);
  //     } else {
  //       console.error('Error al realizar la solicitud.');
  //     }
  //   } catch (error) {
  //     console.error('Error de red:', error);
  //   }

  // }




  useEffect(() => {
    if (notaUtilizar) {
      setNota({
        Titulo: notaUtilizar.Titulo,
        Contenido: notaUtilizar.Contenido,
      });
    }
  }, [notaUtilizar]);


  const enviarNota = async () => {
    try {
      const response = await fetch('http://localhost:4000/Notas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nota),
      });

      if (response.ok) {
        const data = await response.json();
        setNota(data);
      } else {
        console.error('Error al realizar la solicitud.');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };




  return (
    <div className=' h-screen overflow-auto w-full'>
      <input className='font-PassionOne text-7xl mt-5 mb-3 outline-none w-full' placeholder='Ingresa un titulo' value={nota.Titulo} onChange={(e) => setNota({ ...nota, Titulo: e.target.value })} />
      <div className='mx-5 mt-5 flex flex-col justify-center items-center'>
        <textarea
          placeholder='Escribe el contenido de la nota'
          className='font-mono w-full outline-none resize-none h-96'
          value={nota.Contenido} onChange={(e) => setNota({ ...nota, Contenido: e.target.value })}
        ></textarea>
        <button className='font-PassionOne text-3xl mx-3 mt-5 mb-3 outline-none hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition-colors duration-300 ease-in-out w-40 h-14 tareasenproceso' type='button' name='button' onClick={enviarNota}>Guardar</button>
      </div>
    </div>
  )
}

export default ContenidoNota