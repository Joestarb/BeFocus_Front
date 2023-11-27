import React from 'react';
import { Link } from 'react-router-dom';
import Footer from "../../components/Index/Footer";

function Error404() {
  return (
    <>
      <div className='grid place-content-center h-screen w-full'>
        <h2 className='md:text-5xl text-3xl font-bold text-center italic text-zinc-800 mb-3'>Oops! Página no encontrada</h2>
        <img src='https://cdn.dribbble.com/users/550484/screenshots/2128340/media/ab10d36499f3f14a8749486c80d3cafe.gif' alt='Error 404' className='  w-3/4 mx-auto ' />
        
        <div className="flex flex-col items-center">
          <p className='text-center text-zinc-800 font-medium italic text-lg md:mx-auto mx-5'>Lo sentimos, la página que estás buscando no existe.</p>
          <p className='text-center text-zinc-800 font-medium italic text-lg md:mx-auto mx-5'>Pero aquí tienes algunas cosas que podrías hacer:</p>

          <div className='flex flex-col mt-5'>
            <p className='font-medium text-lg mx-5 text-center'>
              ¿Quieres volver al inicio? <Link to='/' className='font-bold text-lg text-[#7895B2] text-center'>Ir a la página principal</Link>
            </p>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}

export default Error404;
