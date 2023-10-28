import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from "../../components/Index/Footer";
import {jwtDecode} from 'jwt-decode';


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

  const [user, setUser] = useState({});


  function handleCallbackResponse(response){
    console.log("Encoded JWT ID token:" + response.credential);
    var userObject = jwtDecode(response.credential);
    console.log(userObject);
    setUser(userObject);
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "161190821674-h1blcbm7mif1202m3v6ghp6j8qvueo3s.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("singInDiv"),
      {theme: "outline", size: "large"}
    );
    
  }, [])


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

        <div className='flex justify-between my-10 mx-auto' id='singInDiv'>
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
