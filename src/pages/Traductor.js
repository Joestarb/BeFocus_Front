import React from 'react'
import TraductorP from '../components/Traductor/TraductorP'
import Sidebar from '../components/Sidebar/Sidebar'
function Traductor() {
  return (
    <div className='xl:flex'>
      <div className='h-full'>
      <Sidebar/>
      </div>
        <TraductorP/>
    </div>
  )
}

export default Traductor