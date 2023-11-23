import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from "../../components/Index/Footer";

function Olvicontra() {
  const [email, setEmail] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [token, setToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isPasswordChanged, setIsPasswordChanged] = useState(false);

  const handleForgotPassword = async () => {
    try {
      // Realiza una solicitud al backend para solicitar la recuperación de contraseña
      const response = await fetch('http://localhost:4000/recuperar-contrasena', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Correo: email }),
      });

      if (response.ok) {
        setIsEmailSent(true);
      } else {
        // Maneja errores de la solicitud
        console.error('Error al solicitar recuperación de contraseña');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  const handleChangePassword = async () => {
    try {
      // Realiza una solicitud al backend para cambiar la contraseña con el token
      const response = await fetch('http://localhost:4000/cambiar-contrasena-recuperacion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tokenRecuperacion: token, nuevaContrasena: newPassword }),
      });

      if (response.ok) {
        setIsPasswordChanged(true);
      } else {
        // Maneja errores de la solicitud
        console.error('Error al cambiar la contraseña');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <>
      <div className='grid place-content-center h-screen'>
        <h2 className='text-6xl font-bold text-center'>Bienvenido a BeFocus</h2>
        <h4 className='text-6xl font-semibold text-center redColor'>Solicitud de Restablecimiento de Contraseña</h4>
        <span className='pt-14' />

        {isEmailSent ? (
          <div>
            <p className="text-green-500 font-semibold text-center">
              Se ha enviado un correo de recuperación de contraseña a {email}. Revise su bandeja de entrada.
            </p>
            <input
              type="text"
              className="w-80 p-2 mb-4 border text-black bg-gray-200 border-gray-300 rounded-3xl"
              placeholder="Token de recuperación"
              value={token}
              onChange={(e) => setToken(e.target.value)}
            />
            <input
              type="password"
              className="w-80 p-2 mb-4 border text-black bg-gray-200 border-gray-300 rounded-3xl"
              placeholder="Nueva contraseña"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white py-2 px-4 w-70 rounded-full hover:bg-blue-600"
              onClick={handleChangePassword}
            >
              Cambiar Contraseña
            </button>
          </div>
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

        {isPasswordChanged && (
          <p className="text-green-500 font-semibold text-center">Contraseña cambiada exitosamente.</p>
        )}

        <p>¿Recuerdas tu contraseña? <Link to='/Login' className='font-bold'>Inicia Sesión</Link></p>
        <p>¿No tienes Cuenta? <Link to='/Registro' className='font-bold'>Regístrate</Link></p>
      </div>
      <Footer />
    </>
  );
}

export default Olvicontra;
