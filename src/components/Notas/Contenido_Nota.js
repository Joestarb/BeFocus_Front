import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2';


function ContenidoNota({ notaUtilizar }) {
  const fechaActual = new Date().toISOString().split('T')[0];

  // Endpoint de post
  const [nota, setNota] = useState({
    Titulo: "",
    Contenido: "",
    FK_Usuario: "1",
    Fecha_Creacion: fechaActual
  });

  const [notaSeleccionada, setNotaSeleccionada] = useState({
    Titulo: "",
    Contenido: "",
    FK_Usuario: "1",
    Fecha_Creacion: "2023-10-10"
  });



  const enviarNota = async () => {

    if (nota.Titulo.trim() === '' && nota.Contenido.trim() === '') {
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'El título y el contenido están vacíos. No se guardará la nota.',
        })
      return; // No actualices si falta información
  }
  if (nota.Contenido.trim() === '' || nota.Titulo.trim() === '') {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Para guardar la nota no deben haber campos vacios.',
      })
    return; // No actualices si falta información
}
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
        window.location.reload()
      } else {
        console.log(nota)
        console.error('Error al realizar la solicitud.');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  const actualizarNota = async () => {
    try {
      const response = await fetch(`http://localhost:4000/Notas/${notaUtilizar.Id_Nota}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Titulo: notaSeleccionada.Titulo,
          Contenido: notaSeleccionada.Contenido,
        }),
      });
      if (response.ok) {
        console.log('Nota actualizada correctamente.');
        console.log(notaSeleccionada);
        window.location.reload();

      } else {
        console.error('Error al actualizar la nota.');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  useEffect(() => {
    if (notaUtilizar) {
      setNotaSeleccionada({
        Titulo: notaUtilizar.Titulo,
        Contenido: notaUtilizar.Contenido,
      });
    }
  }, [notaUtilizar]);





  return (
    <div className=' h-screen overflow-auto w-full'>
      {(notaUtilizar) ? <textarea className='font-PassionOne text-7xl outline-none w-full p-3 resize-none h-20' placeholder='Ingresa un titulo' value={notaSeleccionada.Titulo} onChange={(e) => setNotaSeleccionada({ ...notaSeleccionada, Titulo: e.target.value })} />
        : <textarea className='font-PassionOne text-7xl outline-none w-full p-3 resize-none h-20' placeholder='Ingresa un titulo' value={nota.Titulo} onChange={(e) => setNota({ ...nota, Titulo: e.target.value })} />}
      <div className='mx-5 mt-5 flex flex-col justify-center items-center'>
        {
          (notaUtilizar) ? <textarea
            placeholder='Escribe el contenido de la nota'
            className='font-mono w-full outline-none resize-none h-80'
            value={notaSeleccionada.Contenido} onChange={(e) => setNotaSeleccionada({ ...notaSeleccionada, Contenido: e.target.value })}
          ></textarea>
            :
            <textarea
              placeholder='Escribe el contenido de la nota'
              className='font-mono w-full outline-none resize-none h-80'
              value={nota.Contenido} onChange={(e) => setNota({ ...nota, Contenido: e.target.value })}
            ></textarea>
        }
        {
          (notaUtilizar) ? <button className='font-bold text-3xl mx-3 mt-5 mb-3 outline-none hover:bg-[#89B9AD] text-white py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition-colors duration-300 ease-in-out w-40 h-14 bg-[#83A2FF]' type='button' name='button' onClick={actualizarNota}>actualizar</button>
            : <button className='font-bold text-3xl mx-3 mt-5 mb-3 outline-none hover:bg-[#89B9AD] text-white  py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition-colors duration-300 ease-in-out w-40 h-14 bg-[#83A2FF]' type='button' name='button' onClick={enviarNota}>Guardar</button>

        }

      </div>
    </div>
  )
}

export default ContenidoNota