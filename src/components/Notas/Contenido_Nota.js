import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2';


function ContenidoNota({ notaUtilizar, notaEfectos, setNotaEfectos }) {
  const fechaActual = new Date().toLocaleDateString('en-CA'); // Ajusta el formato según tu necesidad

  const id_usuario = localStorage.getItem("Usuario")

  // Endpoint de post
  const [nota, setNota] = useState({
    Titulo: "",
    Contenido: "",
    FK_Usuario: id_usuario,
    Fecha_Creacion: ""
  });

  const [notaSeleccionada, setNotaSeleccionada] = useState({
    Titulo: "",
    Contenido: "",
    FK_Usuario: id_usuario,
    Fecha_Creacion: ""
  });

  useEffect(() => {
    if(!notaSeleccionada){
      setNotaSeleccionada({ // Limpiar valores
        Titulo: "",
        Contenido: "",
        FK_Usuario: id_usuario,
        Fecha_Creacion: ""
      });
      setNota({ // Limpiar valores
        Titulo: "",
        Contenido: "",
        FK_Usuario: id_usuario,
        Fecha_Creacion: ""
      });
    }
  }, [notaSeleccionada]);




  const enviarNota = async () => {
    nota.Fecha_Creacion = fechaActual;
    console.log(fechaActual)
    console.log(nota)

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
        Swal.fire({
          icon: 'success',
          title: 'Nota creada correctamente',
          showConfirmButton: true,
          confirmButtonText: 'Ok',
        }).then((result) => {
          if (result.isConfirmed) {
            // setNota(data);
            setNotaEfectos(notaEfectos + 1);
            setNotaSeleccionada({ // Limpiar valores
              Titulo: "",
              Contenido: "",
              FK_Usuario: id_usuario,
              Fecha_Creacion: ""
            });
            setNota({ // Limpiar valores
              Titulo: "",
              Contenido: "",
              FK_Usuario: id_usuario,
              Fecha_Creacion: ""
            });
            // window.location.reload()
          }
        })
      } else {
        console.log(nota)
        console.error('Error al realizar la solicitud.');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  const actualizarNota = async () => {
    if (notaSeleccionada.Titulo.trim() === '' && notaSeleccionada.Contenido.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El título y el contenido están vacíos. No se guardará la nota.',
      })
      return; // No actualices si falta información
    }
    if (notaSeleccionada.Contenido.trim() === '' || notaSeleccionada.Titulo.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Para guardar la nota no deben haber campos vacios.',
      })
      return; // No actualices si falta información
    }
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
        Swal.fire({
          icon: 'success',
          title: 'Nota Actualizada',
          showConfirmButton: true,
          confirmButtonText: 'Ok',
        }).then((result) => {
          if (result.isConfirmed) {
            // window.location.reload();
            setNotaEfectos(notaEfectos + 1);
            setNotaSeleccionada({ // Limpiar valores
              Titulo: "",
              Contenido: "",
              FK_Usuario: id_usuario,
              Fecha_Creacion: ""
            });
            setNota({ // Limpiar valores
              Titulo: "",
              Contenido: "",
              FK_Usuario: id_usuario,
              Fecha_Creacion: ""
            });
          }
        })
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
          (notaUtilizar) ? <button className='font-bold text-3xl mx-3 mt-5 mb-3 outline-none hover:bg-[#1F4172] text-white py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition-colors duration-300 ease-in-out w-40 h-14 bg-[#ACB1D6]' type='button' name='button' onClick={actualizarNota}>actualizar</button>
            : <button className='font-bold text-3xl mx-3 mt-5 mb-3 outline-none hover:bg-[#1F4172] text-white  py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition-colors duration-300 ease-in-out w-40 h-14 bg-[#ACB1D6]' type='button' name='button' onClick={enviarNota}>Guardar</button>

        }

      </div>
    </div>
  )
}

export default ContenidoNota