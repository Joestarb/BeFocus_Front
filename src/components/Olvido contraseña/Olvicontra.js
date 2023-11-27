import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import Footer from "../../components/Index/Footer";
import Swal from 'sweetalert2';

function Olvicontra() {
  const [email, setEmail] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // New state for the confirmation password
  const [isPasswordChanged, setIsPasswordChanged] = useState(false);
  const [isVerificationModalOpen, setIsVerificationModalOpen] = useState(false);
  const [casillas, setCasillas] = useState(['', '', '', '', '', '']);
  const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const openChangePasswordModal = () => {
    setIsVerificationModalOpen(false);
    setIsChangePasswordModalOpen(true);
  };

  const cerrarModalVerificacion = () => {
    setIsVerificationModalOpen(false);
    setCasillas(['', '', '', '', '', ''])
  }

  //Solicitar cambio de contraseña
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    if (email === '' || email === null || email === undefined || email.trim() === '') {
      Swal.fire({
        title: "Ingresa tu correo correctamente",
        icon: "error",
        confirmButtonText: "Ok"
      })
      return;
    }
    console.log('Validando cuenta...')
    try {
      setIsSubmitting(true);
      const response = await fetch('http://localhost:4000/olvido-contrasena', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Correo: email }),
      });

      const data = await response.json();
      if(data.message === "Usuario no encontrado"){
        Swal.fire({
          title: "Usuario no encontrado",
          icon: "error",
          confirmButtonText: "Ok"
        })
      }
      if (response.ok) {
        setIsVerificationModalOpen(true);
      } else {
        console.error('Error al solicitar recuperación de contraseña');
      }

    } catch (error) {
      console.error('Error en la solicitud:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  //Verificar el codigo
  const verificarCodigo = async () => {
    console.log(email)
    console.log(casillas)
    const cadenaDeCasillas = casillas.join('');
    console.log(cadenaDeCasillas);

    if (casillas.some(valor => valor.trim() === '')) {
      Swal.fire({
        title: "Completa todos los campos de verificación",
        icon: "error",
        confirmButtonText: "Ok"
      });
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await fetch('http://localhost:4000/verificar-codigo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Correo: email, CodigoVerificacion: cadenaDeCasillas }),
      });
      const data = await response.json();
      if(data.message === "Código de verificación inválido o expirado"){
        Swal.fire({
          title: "Código de verificación inválido o expirado",
          icon: "error",
          confirmButtonText: "Ok"
        })
      }
      if (response.ok) {
        console.log("Codigo valido")
        Swal.fire({
          title: "Verificación valida",
          icon: "success",
          confirmButtonText: "Ok"
        }).then((result) => {
          if (result.isConfirmed) {
            openChangePasswordModal();
          }
        });
      } else {
        console.error('Codigo invalido');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    } finally {
      setIsSubmitting(false);
    }
  }

  //Cambiar contraseña
  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (newPassword === '' || newPassword === null || newPassword === undefined || newPassword.trim() === '') {
      Swal.fire({
        title: "Ingresa tu nueva contraseña correctamente",
        icon: "error",
        confirmButtonText: "Ok"
      })
      return;
    }
    if (confirmPassword === '' || confirmPassword === null || confirmPassword === undefined || confirmPassword.trim() === '') {
      Swal.fire({
        title: "Ingresa tu nueva contraseña correctamente",
        icon: "error",
        confirmButtonText: "Ok"
      })
      return;
    }
    try {
      setIsSubmitting(true);

      // Check if passwords match
      if (newPassword !== confirmPassword) {
        Swal.fire({
          title: 'Las contraseñas no coinciden',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
        return;
      }

      const response = await fetch('http://localhost:4000/Cambiar-contrasena', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Contrasena: confirmPassword, Correo: email }),
      });
      const data = await response.json();
      if(data.message === "Algo ha salido mal, intentalo mas tarde"){
        Swal.fire({
          title: "Algo ha salido mal, intentalo mas tarde",
          icon: "error",
          confirmButtonText: "Ok"
        })
      
      }
      if (response.ok) {
        Swal.fire({
          title: "Contraseña cambiada exitosamente",
          icon: "success",
          confirmButtonText: "Ok"
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/Login";
          }
        });

      } else {
        console.error('Error al cambiar la contraseña');
        Swal.fire({
          title: "Algo ha salido mal, intentalo mas tarde",
          icon: "error",
          confirmButtonText: "Ok"
        })
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      Swal.fire({
        title: "Algo ha salido mal, intentalo mas tarde",
        icon: "error",
        confirmButtonText: "Ok"
      })
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCasillaInput = (e, index) => {
    const inputValue = e.target.innerText;
    if (/^[a-zA-Z0-9]*$/.test(inputValue) && inputValue.length <= 1) {
      const newCasillas = [...casillas];
      newCasillas[index] = inputValue;
      setCasillas(newCasillas);
    } else {
      e.target.innerText = casillas[index];
    }
  };

  return (
    <>
      <div className='grid place-content-center h-screen'>
        <h2 className='md:text-5xl text-3xl font-bold text-center italic text-zinc-800'>¿Olvidaste tu contraseña?</h2>
        <img src='https://media.tenor.com/rAHN17V5nhQAAAAi/huh-what.gif' alt='Confused' className='my-5 ml-auto md:mr-52 mr-28 h-48' />

        <Modal
          isOpen={isVerificationModalOpen}
          onRequestClose={cerrarModalVerificacion}
          contentLabel="Verificación de Código"
        >
          <div class="text-center h-full w-full flex flex-col ">
          <button className=' text-3xl font-bold mr-auto p-2' onClick={cerrarModalVerificacion}> x </button>
            <h1 className=' text-2xl font-semibold italic mt-10'>Te hemos enviado un email a tu correo, revisa tu bandeja de entrada</h1>
            <div className='m-auto w-full'>
              <h2 class="md:text-2xl text-lg font-semibold m-auto w-full">Introduce el código de verificación</h2>
              <div className="my-10 grid grid-cols-6 gap-4 mx-auto xl:mx-[30%]">
                {casillas.map((valor, index) => (
                  <div
                    key={index}
                    contentEditable
                    className="md:w-16 w-10 h-16 mx-auto border border-gray-300 flex items-center justify-center rounded text-center text-2xl font-bold italic bg-[#EADBC8] text-zinc-700 outline-none"
                    onInput={(e) => handleCasillaInput(e, index)}
                  >
                    {valor}
                  </div>
                ))}
              </div>
              <button class="mt-4 bg-[#1F4172] hover:bg-[#4477CE] font-semibold text-lg text-white px-4 py-2 rounded" onClick={verificarCodigo}>Verificar código</button>
              
            </div>
          </div>
        </Modal>

        <Modal
          isOpen={isChangePasswordModalOpen}
          onRequestClose={() => setIsChangePasswordModalOpen(false)}
          contentLabel="Cambiar Contraseña"
        >
          <div className="text-center h-full w-full flex flex-col justify-center items-center">
            <h1 className="text-3xl font-semibold italic mt-10 mb-5">
              Cambia tu contraseña
            </h1>
            <form className="mt-5 flex flex-col" onSubmit={handleChangePassword}>
              <label className="font-medium text-xl text-gray-700">
                Nueva Contraseña:
              </label>
              <input
                type="password"
                className="w-80 p-2 mb-4 border font-medium text-lg text-zinc-800 bg-gray-200 border-gray-300 rounded-xl outline-none"
                placeholder="Introduce tu nueva contraseña"
                value={newPassword}
                // required
                minLength={8}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <label className="font-medium text-xl text-gray-700">
                Confirmar Contraseña:
              </label>
              <input
                type="password"
                className="w-80 p-2 mb-4 border font-medium text-lg text-zinc-800 bg-gray-200 border-gray-300 rounded-xl outline-none"
                placeholder="Confirma la nueva contraseña"
                value={confirmPassword}
                // required
                minLength={8}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                className="bg-[#1F4172] font-medium text-lg text-white py-2 px-4 w-70 rounded-xl hover:bg-[#4477CE] my-5"
                type="submit"
              >
                Cambiar Contraseña
              </button>
            </form>
          </div>
        </Modal>

        {isEmailSent ? (
          <div>
            <p className="text-green-500 font-semibold text-center">
              Se ha enviado un correo de recuperación de contraseña a {email}. Revise su bandeja de entrada.
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <p className='text-center text-zinc-800 font-medium italic text-lg md:mx-auto mx-2'>Introduce tu email para recibir las instrucciones <br className='md:block hidden' /> para restablecer tu contraseña</p>
            <form onSubmit={handleForgotPassword} className='flex flex-col mt-5'>
              <label className=' font-medium text-lg text-gray-700'>Correo:</label>
              <input
                type="email"
                className="w-80 p-2 mb-4 border font-medium text-lg text-zinc-800 bg-gray-200 border-gray-300 rounded-xl outline-none"
                placeholder="Introduce tu correo electrónico"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="bg-[#1F4172] font-medium text-lg text-white py-2 px-4 w-70 rounded-xl hover:bg-[#4477CE] my-5" type='submit'>
                Enviar Correo de Recuperación
              </button>
            </form>
          </div>
        )}

        {isSubmitting && (
          <Modal isOpen={true} contentLabel="Realizando operación" className="modal">
            <div className="text-center h-screen flex justify-center align-middle items-center">
              <p className="text-gray-700 font-semibold m-auto text-4xl my-auto">Realizando operación...</p>
              <div className="w-20 h-20 border-4 border-t-4 border-gray-700 rounded-full animate-spin"></div>
            </div>
          </Modal>
        )}
        <div className='flex justify-center items-center flex-col'>
          <p className='font-medium text-lg'>¿Recuerdas tu contraseña? <Link to='/Login' className='font-bold text-lg text-[#7895B2] text-center'>Inicia Sesión</Link></p> <br />
          <p className='font-medium text-lg'>¿No tienes Cuenta? <Link to='/Registro' className='font-bold text-lg text-[#798777] text-center'>Regístrate</Link></p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Olvicontra;
