import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Google from "../../assets/LoginAssets/Google.png";
import Facebook from "../../assets/LoginAssets/facebook.png";
import Footer from "../../components/Index/Footer";
import { gapi} from "gapi-script";
import GoogleLogin from "react-google-login";


//npm install gapi-script es para conectar con apis de google
//npm install react-google-login

function LoginP() {


  const clientID = "509169001406-292rqr2qemtdpkm895o37qatcmcugun4.apps.googleusercontent.com";

  const [user, setUser] = useState({});
  

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
    setUser(response.profileObj);
  }

  const onFailure = (response) => {
    console.log("Algo ha salido mal");
  }


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
  
  };



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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="w-auto p-2 mb-4 border text-black bg-gray-200 border-gray-300 rounded-3xl"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className='flex justify-center'>
        <Link to='/Notas'>
        <button
            className="bg-blue-500 text-white py-2 px-4 w-60 rounded-full hover:bg-blue-600"
            onClick={handleLogin}
          >
            Iniciar sesión
          </button>
        </Link>
        </div>

        <div className='flex justify-between my-10'>
        <GoogleLogin
        clientId={clientID}
        onSuccess={onSuccess }
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
