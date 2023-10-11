import React from 'react'
import FormularioDrive from '../components/Nube/FormularioDrive'
import Sidebar from '../components/Sidebar/Sidebar'


function Nube() {
  return (
    <div className='flex'>
        <Sidebar/>
        <FormularioDrive/>
    </div>
  )
}

export default Nube