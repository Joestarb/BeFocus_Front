import React, {useState, useEffect} from 'react'

function ContenidoNota() {

  return (
    <div className=' h-screen overflow-auto'>
      <input className='font-PassionOne text-7xl ml-3 mt-5 mb-3 outline-none' placeholder='Ingresa un titulo' />
      <div className='mx-5 mt-5 flex flex-col justify-center items-center'>
        <textarea
          placeholder='Escribe el contenido de la nota'
          className='font-mono w-full outline-none resize-none h-96'
        ></textarea>
        <button className='font-PassionOne text-3xl mx-3 mt-5 mb-3 outline-none hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition-colors duration-300 ease-in-out w-40 h-14 tareasenproceso' type='button' name='button'>Guardar</button>
      </div>
    </div>
  )
}

export default ContenidoNota