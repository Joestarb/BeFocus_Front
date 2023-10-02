import React from 'react'
import { Link } from 'react-router-dom'
import Google from "../../assets/LoginAssets/Google.png"
import Facebook from "../../assets/LoginAssets/facebook.png"
import Footer from "../../components/Index/Footer"
function LoginP() {
  return (
    <>
      <div className=' grid place-content-center h-screen    '>
        <h2 className=' text-6xl font-bold text-center'>Bienvenido a BeFocus</h2>
        <h4 className='text-6xl font-semibold text-center redColor'>Inicia sesión</h4>
        <span className=' pt-14' />
        <input
          type="email"
          className="  w-auto p-2 mb-4 border   text-black  bg-gray-400 border-gray-300  rounded-3xl "
          placeholder="Correo electrónico"

        />
        <input
          type="password"
          placeholder="Contraseña"
          className=" w-auto p-2 mb-4 border   text-black  bg-gray-400 border-gray-300  rounded-3xl"
        />
        <div className=' flex justify-center'>

          <Link to='/Notas'>
            <button className="bg-blue-500 text-white py-2 px-4  w-60 rounded-full  hover:bg-blue-600">
              Iniciar sesión
            </button>
          </Link>

        </div>

        <div className=' flex justify-center '>
          <img src={Google} alt="google" className=' w-12 m-2 ' />
          <img src={Facebook} alt="google" className=' w-12 m-2' />
        </div>

    <p>¿No tienes Cuenta?  <Link to='/Registro' className='font-bold'>Registrate</Link></p>
      </div>
      <Footer />
    </>
  )
}

export default LoginP