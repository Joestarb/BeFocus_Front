 import React from 'react'
import CalendarioP from '../components/Calendario/CalendarioP'
import Sidebar from "../components/Sidebar/Sidebar"
 function Calendario() {
   return (
    <div className='flex'>
      <div className=''>
      <Sidebar />
      </div>
      <div className='flex'>
        <div className=' overflow-auto'>
          <CalendarioP />
        </div>
      </div>
    </div>
   )
 }
 
 export default Calendario