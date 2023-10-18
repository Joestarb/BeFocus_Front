import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Google from "../../assets/LoginAssets/Google.png";
import Footer from "../../components/Index/Footer";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";


//npm install gapi-script es para conectar con apis de google
//npm install react-google-login

function LoginP() {
  const [usuario, setUsuario] = useState({
    Nombre: "",
    Correo: "",
    Contrasena: "",
    Imagen: null,
    FK_Tipo_Usuario: 1,
    TokenBeFocus: null,
    TokenGoogle: null,
  });


  //LOGIN DE GOOGLE
  const clientID = "509169001406-292rqr2qemtdpkm895o37qatcmcugun4.apps.googleusercontent.com";

  const obtenerUsuarioGoogle = async () => {
    fetch(`http://localhost:4000/Usuarios/${usuario.Correo}`)
      .then(res => res.json())
      .then(data => {
        setUsuario(data)
        console.log(usuario);
        alert("Login exitoso")
      })
      .catch(err => console.log(err));
  }

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
    usuario.Nombre = response.profileObj.givenName + " " + response.profileObj.familyName;
    usuario.Correo = response.profileObj.email;
    usuario.Imagen = response.profileObj.imageUrl;
    usuario.FK_Tipo_Usuario = 1;
    usuario.TokenGoogle = response.googleId;
    console.log(usuario.Correo);
    obtenerUsuarioGoogle();

    localStorage.setItem("correo", usuario.Correo);
    localStorage.setItem("nombre", usuario.Nombre);
    localStorage.setItem("imagen", usuario.Imagen);
    localStorage.setItem("tokengoogle", usuario.TokenGoogle);
  
  }

  const onFailure = (response) => {
    console.log("Algo ha salido mal");
  }

  //--------------------------------------------------------

  //Validar login

  const validarLogin = () => {
    if (usuario.Correo === "" || usuario.Contrasena === "") {
      alert("Por favor complete todos los campos");
    } else {
      obtenerUsuario();
    }
  }

  // LOGIN DE LA BD DE LA APP
  const obtenerUsuario = () => {
    fetch(`http://localhost:4000/Usuarios/${usuario.Correo}`)
      .then(res => res.json())
      .then(data => {
        setUsuario(data)
        console.log(usuario);
        alert("Login exitoso")
      })
      .catch(err => console.log(err));
  }


  return (
    <>
      <div className='grid place-content-center h-screen'>
        <h2 className='text-6xl font-bold text-center'>Bienvenido a BeFocus</h2>
        <h4 className='text-6xl font-semibold text-center redColor'>Inicia sesión</h4>
        <span className='pt-14' />
        <input
          type="email"
          className="w-auto p-2 mb-4 border text-balck bg-gray-200 border-gray-300 rounded-3xl"
          placeholder="Correo electrónico"
          value={usuario.Correo}
          onChange={(e) => setUsuario({ ...usuario, Correo: e.target.value })}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="w-auto p-2 mb-4 border text-black bg-gray-200 border-gray-300 rounded-3xl"
          value={usuario.Contrasena}
          onChange={(e) => setUsuario({ ...usuario, Contrasena: e.target.value })}
        />
        <div className='flex justify-center mt-5'>
          <button className="bg-ColorSidebar text-gray-100 py-3 px-4 w-54 rounded-full my-auto border border-gray-300focus:outline-none mx-auto" onClick={validarLogin}>
            Iniciar sesión
          </button>
        </div>
        <div className='flex flex-col justify-center my-10'>
          <GoogleLogin
            clientId={clientID}
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_policy'}
            className=" w-52 h-10 m-auto"
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
                <span className="my-auto">Iniciar sesión con Google</span>
              </button>
            )}
          />
        </div>

        <p>¿No tienes Cuenta? <Link to='/Registro' className='font-bold'>Regístrate</Link></p>
        <p>
          ¿Olvidaste tu contraseña?
          <Link to='/Olvcontra' className='font-bold'>
            Recupérala aquí
          </Link>

        </p>
      </div>
      <Footer />
    </>
  );
}

export default LoginP;
