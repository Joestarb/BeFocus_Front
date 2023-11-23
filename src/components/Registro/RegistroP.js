import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from "../Index/Footer";
import { jwtDecode } from 'jwt-decode';
import Swal from 'sweetalert2'


function RegistroP() {
  const [usuarios, setUsuarios] = useState({
    Nombre: "",
    Correo: "",
    Contrasena: "",
    Imagen: null,
    FK_Tipo_Usuario: 1,
    TokenBeFocus: null,
    TokenGoogle: null,
  })

  const [user, setUser] = useState({});

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token:" + response.credential);
    const userObject = jwtDecode(response.credential);
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

  const crearUsuarioForm = async (e) => {
    e.preventDefault(); // Evitar la recarga de la página
    try {

      console.log(usuarios);

      // Validar que las contraseñas coincidan
      if (usuarios.Contrasena !== usuarios.ConfirmarContrasena) {
        // Las contraseñas no coinciden, mostrar un mensaje de error
        Swal.fire({
          title: 'Contraseñas no coinciden',
          text: 'Las contraseñas ingresadas no coinciden. Por favor, inténtelo de nuevo.',
          icon: 'error',
          showConfirmButton: true,
        });
        return; // Detener la ejecución si las contraseñas no coinciden
      }
      const espaciosEnBlancoRegex = /\s/;
      if (espaciosEnBlancoRegex.test(usuarios.Contrasena)) {
        Swal.fire({
          title: 'Contraseña inválida',
          text: 'La contraseña no puede contener espacios en blanco. Por favor, elija otra contraseña.',
          icon: 'error',
          showConfirmButton: true,
        });
        return; // Detener la ejecución si la contraseña contiene espacios en blanco
      }
      // Verificar si el usuario ya existe por su TokenGoogle
      const usuarioExistenteResponse = await fetch(`http://localhost:4000/Usuarios/${usuarios.Correo}`);
      const usuarioExistente = await usuarioExistenteResponse.json();
      console.log(usuarioExistente);

      if (usuarioExistente.message !== 'Usuario no encontrado') {
        // El usuario ya existe, mostrar un mensaje de error o tomar una acción apropiada
        Swal.fire({
          title: 'Usuario existente',
          text: 'Este usuario ya está registrado. Por favor, inicie sesión.',
          icon: 'error',
          showConfirmButton: true,
        }).then(() => {
          // Puedes agregar más lógica aquí si es necesario
        });
      }
      else {
        const respuesta = await fetch('http://localhost:4000/Registro', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(usuarios),
        })
        console.log(usuarios)
        if (respuesta.ok) {
          console.log(respuesta)
          const data = await respuesta.json();
          const token = data.TokenBeFocus;
          localStorage.setItem("Usuario", data.Id_Usuario)
          localStorage.setItem("Token", token);
          localStorage.setItem("Logueado", "True");
          Swal.fire({
            title: 'Usuario creado correctamente',
            showDenyButton: false,
            showCancelButton: false,
            confirmButtonText: 'Ok',
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "/Home";
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })

        }

      }
    }
    catch (error) {
      console.error('Error de red:', error);
    }
  }

  // Crear usuario con Google
  const crearUsuarioGoogle = async () => {
    try {
      console.log(user);

      // Verificar si el usuario ya existe por su TokenGoogle
      const usuarioExistenteResponse = await fetch(`http://localhost:4000/Usuarios/google/${user.sub}`);
      const usuarioExistente = await usuarioExistenteResponse.json();
      console.log(usuarioExistente);

      if (usuarioExistente.message !== 'Usuario no encontrado') {
        // El usuario ya existe, mostrar un mensaje de error o tomar una acción apropiada
        Swal.fire({
          title: 'Usuario existente',
          text: 'Este usuario de Google ya está registrado. Por favor, inicie sesión.',
          icon: 'error',
          showConfirmButton: true,
        }).then(() => {
          // Puedes agregar más lógica aquí si es necesario
        });
      } else {
        // El usuario no existe, proceder con la creación
        const respuesta = await fetch('http://localhost:4000/Registro', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            Nombre: user.name,
            Correo: user.email,
            Contrasena: null,
            Imagen: user.picture,
            TokenGoogle: user.sub,
            TokenBeFocus: null,
            FK_Tipo_Usuario: 1,
          }),
        });
        console.log(respuesta)
        if (respuesta.ok) {
          const data = await respuesta.json();
          const token = data.TokenBeFocus;
          localStorage.setItem("Usuario", data.Id_Usuario)
          localStorage.setItem("Token", token);
          localStorage.setItem("Logueado", "True");
          // Usuario creado exitosamente
          Swal.fire({
            title: 'Usuario de Google creado correctamente',
            showDenyButton: false,
            showCancelButton: false,
            confirmButtonText: 'Ok',
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "/Home";
            }
          });
        } else {
          alert("Error al crear el usuario de Google");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    if (user && user.sub) {
      crearUsuarioGoogle();
    }
  }, [user]);

  return (
    <>
      <div className='grid place-content-center h-screen'>
        <h1 className='text-6xl font-bold text-center mt-10'>Bienvenido a BeFocus</h1>
        <h2 className='text-5xl font-bold text-center redColor my-3'>Regístrate</h2>
        <form className='mt-10 flex flex-col' onSubmit={crearUsuarioForm}>
          <input
            type="text"
            minLength={5}
            className="w-auto p-2 mb-4 border text-black bg-gray-200 border-gray-300 rounded-3xl placeholder-gray-500" // Agrega las clases de Tailwind para estilos
            placeholder="Nombre Completo"
            required
            value={usuarios.Nombre}
            onChange={(e) => setUsuarios({ ...usuarios, Nombre: e.target.value })}
          />
          <input
            type="email"
            className="w-auto p-2 mb-4 border text-black bg-gray-200 border-gray-300 rounded-3xl placeholder-gray-500" // Agrega las clases de Tailwind para estilos
            placeholder="Correo Electrónico"
            value={usuarios.Correo}
            onChange={(e) => setUsuarios({ ...usuarios, Correo: e.target.value })}
            required
          />
          <input
            type="password"
            minLength={8}
            className="w-auto p-2 mb-4 border text-black bg-gray-200 border-gray-300 rounded-3xl placeholder-gray-500" // Agrega las clases de Tailwind para estilos
            placeholder="Contraseña"
            value={usuarios.Contrasena}
            onChange={(e) => setUsuarios({ ...usuarios, Contrasena: e.target.value })}
            required
          />
          <input
            type="password"
            className="w-auto p-2 mb-4 border text-black bg-gray-200 border-gray-300 rounded-3xl placeholder-gray-500"
            placeholder="Confirmar Contraseña"
            value={usuarios.ConfirmarContrasena}
            onChange={(e) => setUsuarios({ ...usuarios, ConfirmarContrasena: e.target.value })}
            required
          />
          <div className='flex justify-center mt-5'>
            <button type='submit' className="bg-[#F95757] text-white py-2 w-40 rounded-xl font-bold"> Registrarse </button>
          </div>

        </form>
        <div className='flex justify-between my-10 mx-auto' id='singInDiv'></div>
        <div className='flex flex-col justify-center align-middle'>
          <h1 className='text-center'>
            <strong>¿Ya tienes Cuenta?</strong> <Link to='/Login' className='font-bold text-[#6499E9]'>Inicia Sesión</Link>
          </h1>
          <p className=' text-center'><strong>Al registrarse aceptas nuestras condiciones de uso y
            <Link className='text-[#B5CB99]'> politica de privacidad.</Link>
          </strong></p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RegistroP;
