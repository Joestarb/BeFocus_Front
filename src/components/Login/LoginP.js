import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Google from "../../assets/LoginAssets/Google.png";
import Facebook from "../../assets/LoginAssets/facebook.png";
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
    TokenUsuario: null,
    TokenGoogle: null,
    TokenFacebook: null
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
        <div className='flex justify-center'>
            <button className="bg-blue-500 text-white py-2 px-4 w-60 rounded-full hover:bg-blue-600" onClick={validarLogin}>
              Iniciar sesión
            </button>
        </div>

        <div className='flex justify-between my-10'>
          <GoogleLogin
            clientId={clientID}
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_policy'}
            className=" w-52 h-10 m-auto ml-40 "
          />
          <img src={Facebook} alt="google" className='w-12 m-auto mr-40' />
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
