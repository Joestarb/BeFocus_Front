import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Google from "../../assets/LoginAssets/Google.png";
import Facebook from "../../assets/LoginAssets/facebook.png";
import Footer from "../Index/Footer";

function RegistroP() {
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');

  const handleRegistro = () => {
  
  };

  return (
    <>
      <div className='grid place-content-center h-screen'>
        <h2 className='text-6xl font-bold text-center'>Bienvenido a BeFocus</h2>
        <h4 className='text-6xl font-semibold text-center redColor'>Regístrate</h4>
        <span className='pt-14' />
        <input
          type="text"
          className="w-auto p-2 mb-4 border text-black bg-gray-200 border-gray-300 rounded-3xl placeholder-gray-500" // Agrega las clases de Tailwind para estilos
          placeholder="Nombre Completo"
          value={nombreCompleto}
          onChange={(e) => setNombreCompleto(e.target.value)}
        />
        <input
          type="email"
          className="w-auto p-2 mb-4 border text-black bg-gray-200 border-gray-300 rounded-3xl placeholder-gray-500" // Agrega las clases de Tailwind para estilos
          placeholder="Correo Electrónico"
          value={correoElectronico}
          onChange={(e) => setCorreoElectronico(e.target.value)}
        />
        <input
          type="password"
          className="w-auto p-2 mb-4 border text-black bg-gray-200 border-gray-300 rounded-3xl placeholder-gray-500" // Agrega las clases de Tailwind para estilos
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />
        <input
          type="password"
          className="w-auto p-2 mb-4 border text-black bg-gray-200 border-gray-300 rounded-3xl placeholder-gray-500" // Agrega las clases de Tailwind para estilos
          placeholder="Confirmar Contraseña"
          value={confirmarContrasena}
          onChange={(e) => setConfirmarContrasena(e.target.value)}
        />
        <div className='flex justify-center'>
          <button
            className="bg-blue-500 text-white py-2 px-4 w-60 rounded-full hover:bg-blue-600"
            onClick={handleRegistro}
          >
            Registrarse
          </button>
        </div>

        <div className='flex justify-center'>
          <img src={Google} alt="google" className='w-12 m-2' />
          <img src={Facebook} alt="google" className='w-12 m-2' />
        </div>

        <p>¿Tienes Cuenta? <Link to='/Login' className='font-bold'>Inicia Sesión</Link></p>
      </div>
      <Footer />
    </>
  );
}

export default RegistroP;
