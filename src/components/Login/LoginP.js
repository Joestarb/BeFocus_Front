import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from "../../components/Index/Footer";
import { jwtDecode } from 'jwt-decode';
import Swal from 'sweetalert2'

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

  function handleCallbackResponse(response) {
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
      { theme: "outline", size: "large" }
    );

  }, [])

  //Traer los datos del usuario y verificar que exista
  const logearUsuarioGoogle = async () => {
    try {
      console.log(user);

      // Verificar si el usuario ya existe por su TokenGoogle
      const usuarioExistenteResponse = await fetch(`http://localhost:4000/Usuarios/google/${user.sub}`);
      const usuarioExistente = await usuarioExistenteResponse.json();
      console.log(usuarioExistente);

      if (usuarioExistente.message === 'Usuario no encontrado') {
        // El usuario no existe
        Swal.fire({
          title: 'Usuario inexistente',
          text: 'Este usuario no está existe. Por favor, registrate para poder iniciar sesión.',
          icon: 'error',
          showConfirmButton: true,
        });
      }
      else {
        // El usuario si existe, validar que los datos coincidan
        if (usuarioExistente.Correo === user.email) {
          console.log(usuarioExistente)
          const token = usuarioExistente.TokenBeFocus;
          localStorage.setItem("Usuario", usuarioExistente.Id_Usuario)
          localStorage.setItem("Token", token)
          localStorage.setItem("Logueado", "True");
          // Los datos coinciden, iniciar sesión
          Swal.fire({
            title: 'Inicio de sesión exitoso',
            text: '¡Bienvenido a BeFocus!',
            icon: 'success',
            showConfirmButton: true,
          }).then(() => {
            window.location.href = "/Home";
          });
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (user && user.sub) {
      logearUsuarioGoogle();
    }
  }, [user]);
  //--------------------------------------------------------

  //Validar login

  const validarLogin = () => {
    if (usuario.Correo === "" || usuario.Contrasena === "") {
      Swal.fire({
        title: "Oops...",
        text: "¡Por favor completa todos los campos!",
        icon: "warning"
      });
    } else {
      obtenerUsuario();
    }
  }

  // LOGIN DE LA BD DE LA APP
  const obtenerUsuario = () => {
    fetch(`http://localhost:4000/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        Correo: usuario.Correo,
        Contrasena: usuario.Contrasena,
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json(); // Devuelve la Promesa resultante de res.json()
        } else if (res.status === 401) {
          Swal.fire({
            icon: 'error',
            title: 'Contraseña incorrecta',
            text: 'La contraseña proporcionada no es válida.'
          });
        } else if (res.status === 404) {
          Swal.fire({
            icon: 'error',
            title: 'Usuario no encontrado',
            text: 'El usuario no se encuentra registrado. Por favor, regístrate para iniciar sesión.'
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error en la solicitud',
            text: 'Ha ocurrido un error en la solicitud. Por favor, inténtalo de nuevo más tarde.'
          });
        }
      })
      .then(data => {
        if (data) {
          // "data" ya es un objeto JavaScript con la respuesta del servidor
          console.log(data);

          // Accede a las propiedades de "data" y realiza las acciones necesarias
          const token = data.token;

          // Almacena la información en localStorage
          localStorage.setItem("Usuario", data.Id_Usuario);
          localStorage.setItem("Token", token);
          localStorage.setItem("Logueado", "True");

          Swal.fire({
            title: '¡Inicio de sesión exitoso!',
            icon: 'success',
            showCancelButton: false,
            showConfirmButton: true,
            confirmButtonText: 'Continuar',
          }).then((result) => {
            if (result.isConfirmed) {
              // Redirige al usuario a la página deseada después de un inicio de sesión exitoso
              window.location.href = "/Home";
            }
          });
        }
      })
      .catch(err => {
        console.error(err);
        Swal.fire({
          icon: 'error',
          title: 'Error en la solicitud',
          text: 'Hubo un error al procesar la solicitud. Por favor, inténtalo de nuevo más tarde.'
        });
      });
  }



  function iniciarSesion(e) {
    e.preventDefault();
    validarLogin();
  }


  return (
    <>
      <div className='grid place-content-center h-screen'>
        <h1 className='text-6xl font-bold text-center mt-10'>Bienvenido a BeFocus</h1>
        <h2 className='text-5xl font-bold text-center redColor my-3'>Inicia sesión</h2>
        <form className='flex flex-col mt-10' onSubmit={iniciarSesion}>
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
            <div className='flex justify-center mt-5'>
              <button type='submit' className="bg-[#F95757] text-white py-2 w-40 rounded-xl font-bold">Iniciar sesión</button>
            </div>
          </div>
        </form>

        <div className='flex justify-between my-10 mx-auto' id='singInDiv'></div>
        <div className='flex flex-col justify-center align-middle'>
          <h1 className='text-center'>
            <strong>¿No tienes Cuenta?</strong> <Link to='/Registro' className='font-bold text-[#6499E9]'>Registrate</Link>
          </h1>
          <h1 className='text-center'>
            <strong>¿Olvidaste tu contraseña?</strong> <Link to='/Olvcontra' className='font-bold text-[#B5CB99]'>Recupérala aquí</Link>
          </h1>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LoginP;