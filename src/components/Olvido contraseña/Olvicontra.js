import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Google from "../../assets/LoginAssets/Google.png";
import Facebook from "../../assets/LoginAssets/facebook.png";
import Footer from "../../components/Index/Footer";

function Olvicontra() {
  const [email, setEmail] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleForgotPassword = () => {
   
    setIsEmailSent(true);
  };

  return (
    <>
      <div className='grid place-content-center h-screen'>
        <h2 className='text-6xl font-bold text-center'>Bienvenido a BeFocus</h2>
        <h4 className='text-6xl font-semibold text-center redColor'>Solicitud de Restablecimiento de Contraseña</h4>
        <span className='pt-14' />
        {isEmailSent ? (
          <p className="text-green-500 font-semibold text-center">Se ha enviado un correo de recuperación de contraseña a {email}. Revise su bandeja de entrada.</p>
        ) : (
          <div className="flex flex-col items-center">
            <input
              type="email"
              className="w-80 p-2 mb-4 border text-black bg-gray-200 border-gray-300 rounded-3xl"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white py-2 px-4 w-70 rounded-full hover:bg-blue-600"
              onClick={handleForgotPassword}
            >
              Enviar Correo de Recuperación
            </button>
          </div>
        )}

        <div className='flex justify-center'>
          <img src={Google} alt="google" className='w-12 m-2' />
          <img src={Facebook} alt="google" className='w-12 m-2' />
        </div>

        <p>¿Recuerdas tu contraseña? <Link to='/Login' className='font-bold'>Inicia Sesión</Link></p>
        <p>¿No tienes Cuenta? <Link to='/Registro' className='font-bold'>Regístrate</Link></p>
      </div>
      <Footer />
    </>
  );
}

export default Olvicontra;
