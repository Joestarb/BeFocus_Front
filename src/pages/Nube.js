import React from 'react'
import FormularioDrive from '../components/Nube/FormularioDrive'
import Sidebar from '../components/Sidebar/Sidebar'
import SubirElemento from '../components/Nube/SubirElemento'
import Archivos from '../components/Nube/Archivos'
import { useState } from 'react'

const clientID = "509169001406-292rqr2qemtdpkm895o37qatcmcugun4.apps.googleusercontent.com";
const apiKey = "AIzaSyASVxg15JTDzGWJu3bOLqqrDBTVo3h2dwA";
var discoveryDocs = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
var scopes = "https://www.googleapis.com/auth/drive";

function Nube() {

  const [usuario, setUsuario] = useState({
    Nombre: localStorage.getItem("nombre"),
    Correo: localStorage.getItem("correo"),
    Imagen: localStorage.getItem("imagen"),
    TokenGoogle: localStorage.getItem("tokengoogle"),
  });

  // function initiClient() {
  //   gapi.client.init({
  //     apiKey: apiKey,
  //     discoveryDocs: discoveryDocs,
  //     clientId: clientID,
  //     scope: scopes,
  //   }).then(
  //     function () {
  //     })
  // }

  return (
    <div className='flex h-screen'>
      <div className=''>
        <Sidebar />
      </div>
      <div className='w-full overflow-auto'>
        <div className=' w-full h-screen'>
          <FormularioDrive />
          <SubirElemento />
        </div>
        <Archivos />
      </div>
    </div>
  )
}

export default Nube