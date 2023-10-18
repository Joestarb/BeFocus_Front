import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Google from "../../assets/LoginAssets/Google.png";
import Footer from "../Index/Footer";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";

function RegistroP() {
  const [contrasena, setContrasena] = useState()

  const [usuarios, setUsuarios] = useState({
    Nombre: "",
    Correo: "",
    Contrasena: "",
    Imagen: null,
    FK_Tipo_Usuario: 1,
    TokenBeFocus: null,
    TokenGoogle: null,
  })

  const crearUsuarioForm = async () => {
    try {
      const respuesta = await fetch('http://localhost:4000/Usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuarios),
      });
      console.log(usuarios)
      if (respuesta.ok) {
        alert("Usuario creado correctamente");
      }
      else {
        alert("Error al crear el usuario");

      }
    }
    catch (error) {
      console.error('Error de red:', error);
    }
  }

  const validarContrasena = (e) => {
    if (contrasena !== usuarios.Contrasena) {
      alert("Las contraseñas no coinciden");
    } else {
      crearUsuarioForm();
    }
  }

  //Crear usuario con google
  const crearUsuarioGoogle = async () => {
    try {
      const respuesta = await fetch('http://localhost:4000/Usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuarios),
      });
      console.log(usuarios)
      if (respuesta.ok) {
        alert("Usuario creado correctamente");
      }
      else {
        alert("Error al crear el usuario");

      }
    }
    catch (error) {
      console.log(error)
    }
  }


  const clientID = "509169001406-292rqr2qemtdpkm895o37qatcmcugun4.apps.googleusercontent.com";

  useEffect(() => {
    const start = () => {
      gapi.auth2.init({
        client_id: clientID,
      });

    }
    gapi.load("client:auth2", start);
  }, [])

  const onSuccess = (response) => {
    console.log(response);
    usuarios.Nombre = response.profileObj.givenName + " " + response.profileObj.familyName;
    usuarios.Correo = response.profileObj.email;
    usuarios.Imagen = response.profileObj.imageUrl;
    usuarios.FK_Tipo_Usuario = 1;
    usuarios.TokenGoogle = response.googleId;
    console.log(usuarios);
    crearUsuarioGoogle();
  }

  const onFailure = (response) => {
    console.log("Algo ha salido mal");
  }


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
          value={usuarios.Nombre}
          onChange={(e) => setUsuarios({ ...usuarios, Nombre: e.target.value })}
        />
        <input
          type="email"
          className="w-auto p-2 mb-4 border text-black bg-gray-200 border-gray-300 rounded-3xl placeholder-gray-500" // Agrega las clases de Tailwind para estilos
          placeholder="Correo Electrónico"
          value={usuarios.Correo}
          onChange={(e) => setUsuarios({ ...usuarios, Correo: e.target.value })}
        />
        <input
          type="password"
          className="w-auto p-2 mb-4 border text-black bg-gray-200 border-gray-300 rounded-3xl placeholder-gray-500" // Agrega las clases de Tailwind para estilos
          placeholder="Contraseña"
          value={usuarios.Contrasena}
          onChange={(e) => setUsuarios({ ...usuarios, Contrasena: e.target.value })}
        />
        <input
          type="password"
          className="w-auto p-2 mb-4 border text-black bg-gray-200 border-gray-300 rounded-3xl placeholder-gray-500"
          placeholder="Confirmar Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />
        <div className='flex justify-center'>
          <button type='submit' className="bg-blue-500 text-white py-2 px-4 w-60 rounded-full hover:bg-blue-600" onClick={validarContrasena}> Registrarse </button>
        </div>

        <div className='flex justify-between my-5'>
          <GoogleLogin
            clientId={clientID}
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_policy'}
            className=" w-52 h-10 m-2"
            render={(renderProps) => (
              <button
                className="bg-white text-gray-700 py-2 w-54 px-4 h-14 rounded-full my-auto border border-gray-300 hover:bg-gray-100 focus:outline-none flex mx-auto"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <img
                  src={Google}
                  alt="Google Icon"
                  className="w-6 h-6 mr-2 my-auto"
                />
                <span className="my-auto">Registrarse con Google</span>
              </button>
            )}
          />
        </div>

        <p>¿Tienes Cuenta? <Link to='/Login' className='font-bold'>Inicia Sesión</Link></p>
      </div>
      <Footer />
    </>
  );
}

export default RegistroP;
