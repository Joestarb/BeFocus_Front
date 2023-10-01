import React from 'react'
import ContenidoNota from '../components/Notas/Contenido_Nota'
import MenuNotas from '../components/Notas/MenuNotas'
import Sidebar from '../components/Sidebar/Sidebar'

function Notas() {
  return (
    <div className='flex'>
      <div className=''>
      <Sidebar />
      </div>
      <div className='flex'>
        <div className=' w-3/12 overflow-auto'>
          <MenuNotas />
        </div>
        <div className=' w-9/12'>
          <ContenidoNota />
        </div>
      </div>
    </div>
  )
}

export default Notas