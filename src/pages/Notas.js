import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Menu_Notas from '../components/Notas/Menu_Notas'
import Contenido_Nota from '../components/Notas/Contenido_Nota'

function Notas() {
  return (
    <div className='flex'>
      <div className=''>
      <Sidebar />
      </div>
      <div className='flex'>
        <div className=' w-3/12 overflow-auto'>
          <Menu_Notas />
        </div>
        <div className=' w-9/12'>
          <Contenido_Nota />
        </div>
      </div>
    </div>
  )
}

export default Notas