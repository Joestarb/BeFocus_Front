import React from 'react'

function TraductorP() {
  return (
    <div className='h-screen w-screen'>
      <h2 className='font-PassionOne text-center text-6xl mt-5 border-b-4 h-14'>Traductor</h2>
      {/* Este es el div general */}
      <div className='flex flex-col justify-center traductor mt-16 m-auto'>
        {/* Este es el div de color negro, contiene la selección de idiomas y un boton para traducir */}
        <div className='h-20 w-full traductorColor flex justify-between text-white rounded-tl-lg rounded-tr-lg'>
          <select className='h-12 ml-32 mt-3 text-2xl font-semibold bg-transparent outline-none text-center'>
            <option value="" className='traductorColor text-white'>Seleccionar idioma</option>
            <option className='traductorColor text-white' value="espanol">Español</option>
            <option className='traductorColor text-white' value="english">English</option>
          </select>
          <button className='h-12 m-auto text-center text-2xl font-semibold bg-red-400 p-3 rounded-xl'>Traducir</button>
          <select className='h-12 mr-32 mt-3 text-2xl font-semibold bg-transparent outline-none text-center'>
            <option className='traductorColor text-white' value="">Seleccionar idioma</option>
            <option className='traductorColor text-white' value="espanol">Español</option>
            <option className='traductorColor text-white' value="english">English</option>
          </select>
        </div>
        <div className=' grid grid-cols-2'>
        {/* Este div es donde se pondra el texto y obtendra el resultado */}
          <div>
            <textarea className='border-2 font-mono border-gray-400 w-full h-96 outline-none resize-none placeholder:text-center p-2' placeholder='Escribe o pega el texto que quieres traducir aqui' />
          </div>
          <div>
            <textarea className='border-2 border-gray-400 w-full h-96 outline-none resize-none p-2' readOnly />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TraductorP