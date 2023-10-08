import React from 'react'
import TraductorP from '../components/Traductor/TraductorP'
import Sidebar from '../components/Sidebar/Sidebar'
function Traductor() {
  return (
    <div className='flex'>
        <Sidebar/>
        <TraductorP/>
    </div>
  )
}

export default Traductor