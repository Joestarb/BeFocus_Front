import React from 'react'
import FormularioDrive from '../components/Nube/FormularioDrive'
import Sidebar from '../components/Sidebar/Sidebar'
import SubirElemento from '../components/Nube/SubirElemento'
import Archivos from '../components/Nube/Archivos'
import { useState } from 'react'
import GoogleDrivePicker from '../components/GoogleDrive/GoogleDrivePicker'

function Nube() {

  const [usuario, setUsuario] = useState({
    Nombre: localStorage.getItem("nombre"),
    Correo: localStorage.getItem("correo"),
    Imagen: localStorage.getItem("imagen"),
    TokenGoogle: localStorage.getItem("tokengoogle"),
  });

  return (
    <div className='flex h-full'>
      <div className=''>
        <Sidebar />
      </div>
      <div className='w-full overflow-auto'>
        <div className=' w-full h-screen flex flex-col justify-center'>
          <div className=' m-auto w-full h-full'>
          <GoogleDrivePicker/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nube