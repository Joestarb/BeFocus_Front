import React, { useState } from 'react';
import HeaderPersonal from '../components/Index/HeaderPersonal'
import webIcon from '../assets/Icons/growth.png'
import Reloj from '../components/Home/Reloj'
import { Link } from 'react-router-dom'
import Motivacion from '../components/Home/Motivacion'
import Clima from '../components/Home/Clima'
import Modal from 'react-modal';

import YouTubePlayer from '../pages/YouTubePlayer';

function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleMusic = () => {
    setModalIsOpen(!modalIsOpen);
  }

  return (
    <div>
      <HeaderPersonal />
      <header className='w-full h-64 bg-cover bg-center bg-[url("https://i.pinimg.com/originals/1a/34/c7/1a34c74eae7f645218092b13ac2641de.jpg")]'></header>
      <div className='h-32 w-full relative flex justify-center xl:flex-col'>
        <div className=' w-28 h-28 absolute xl:top-[-50px] xl:ml-20 border-4 top-[-50px] bg-zinc-100 rounded-full'>
          <img src={webIcon} alt='Icon' className='w-20 h-20 mt-3 ml-2' />
        </div>
      </div>
      <main className='w-full'>
        <div className='w-4/5 m-auto h-20 border-b-4 border-zinc-400'>
          <h1 className='text-zinc-700 py-2 px-1 font-semibold font-serif md:text-4xl text-3xl'>Planner Dashboard</h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-10 w-5/6 mx-auto'>
          <section className="flex flex-col justify-center items-center mx-auto xl:hover:scale-125 hover:scale-110 transition duration-500 cursor-pointer mb-10">
            <Link to={"/Notas"}>
              <img src='https://i.pinimg.com/736x/7e/75/c0/7e75c00f3e4ce6759bbf99da08c17490.jpg' className='xl:w-40 xl:h-40 w-60 m-auto  rounded-t-xl' alt='Notas Icon' />
              <button className='text-lg font-medium italic xl:w-full w-60 hover:bg-zinc-100 p-1 mx-auto'>Notas</button>
            </Link>
          </section>

          <section className="flex flex-col justify-center items-center mx-auto xl:hover:scale-125 hover:scale-110 transition duration-500 cursor-pointer mb-10">
            <Link to={"/Tareas"}>
              <img src='https://i.pinimg.com/originals/82/cd/7c/82cd7c4e0b086f658841c11830c14337.jpg' className='xl:w-40 xl:h-40 w-60 m-auto  rounded-t-xl' alt='Tareas Icon' />
              <button className='text-lg font-medium italic xl:w-full w-60 hover:bg-zinc-100 p-1 mx-auto'>Tareas</button>
            </Link>
          </section>

          <section className="flex flex-col justify-center items-center mx-auto xl:hover:scale-125 hover:scale-110 transition duration-500 cursor-pointer mb-10">
            <Link to={"/Traductor"}>
              <img src='https://i.pinimg.com/736x/c7/79/0e/c7790ef8c56815db7485293ad6356435.jpg' className='xl:w-40 xl:h-40 w-60 m-auto  rounded-t-xl' alt='Traductor Icon' />
              <button className='text-lg font-medium italic xl:w-full w-60 hover:bg-zinc-100 p-1 mx-auto'>Traductor</button>
            </Link>
          </section>

          <section className="flex flex-col justify-center items-center mx-auto xl:hover:scale-125 hover:scale-110 transition duration-500 cursor-pointer mb-10">
            <Link to={"/Nube"}>
              <img src='https://i.pinimg.com/originals/46/72/4e/46724ee08ff4368afba4b7cd99c3b4ab.jpg' className='xl:w-40 xl:h-40 w-60 m-auto  rounded-t-xl' alt='Google Drive Icon' />
              <button className='text-lg font-medium italic xl:w-full w-60 hover:bg-zinc-100 p-1 mx-auto'>Google Drive</button>
            </Link>
          </section>

          {/* Agrega más secciones según sea necesario */}
        </div>

        <section className="grid grid-cols-1 xl:grid-cols-2 gap-5 w-5/6 mx-auto mb-10 mt-10">
          <div className='m-5 xl:flex xl:flex-col xl:justify-between'>
            <div className='mb-5 xl:h-full'>
              <Reloj />
            </div>
            <div className='mt-5 xl:h-full'>
              <Motivacion />
            </div>
          </div>
          <div className='m-5'>
            <Clima />
          </div>
        </section>
        <section className='my-5'>
        <YouTubePlayer />
        </section>
      </main>
    </div >

  )
}

export default Home