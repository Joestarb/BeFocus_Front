import React, { useState } from 'react';
import * as Biicons from 'react-icons/bi';
import * as BsIcons from 'react-icons/bs';
import * as FaIcons from 'react-icons/fa';
import * as HiIcons from 'react-icons/hi';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { FaYoutube } from "react-icons/fa";
import YouTubePlayer from '../../pages/YouTubePlayer';
import { motion, AnimatePresence } from "framer-motion";


function Sidebar() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMusic = () => {
    setModalIsOpen(!modalIsOpen);
  };

  function cerrarSesion() {
    localStorage.clear();
  };

  return (
    <div className={`bg-[#ACB1D6] ${isSmallScreen ? 'block' : 'xl:w-16 xl:h-screen w-full h-auto'}`}>
      {isSmallScreen && (
        <div className='flex justify-between'>
          <button className="text-white p-3 text-2xl" onClick={toggleMenu}>
            ☰
          </button>
          <div className='flex justify-center'>
            <p className='font-PassionOne text-4xl text-white m-2'>BeFocus</p>
          </div>
        </div>
      )}

      <ul className={`flex flex-col xl:flex-col justify-between h-full ${isMenuOpen || !isSmallScreen ? 'block' : 'hidden'}`}>
        <li className={`my-3 ${isSmallScreen ? 'hover:bg-white' : ''}`}>
          <Link to='/Home' onClick={toggleMenu}>
            {isSmallScreen ? <p className=' font-PassionOne text-4xl text-white hover:text-C82A0D8 px-2'>Home</p> : <HiIcons.HiHome className='xl:text-5xl text-2xl xl:mx-auto text-white' />}
          </Link>
        </li>
        <li className={`mb-3 ${isSmallScreen ? 'hover:bg-white' : ''}`}>
          <Link to='/Notas' onClick={toggleMenu}>
            {isSmallScreen ? <p className=' font-PassionOne text-4xl text-white hover:text-C82A0D8 px-2'>Notas</p> : <FaIcons.FaRegStickyNote className='xl:text-5xl text-2xl xl:mx-auto text-white' />}
          </Link>
        </li>
        <li className={`mb-3 ${isSmallScreen ? 'hover:bg-white' : ''}`}>
          <Link to='/Tareas' onClick={toggleMenu}>
            {isSmallScreen ? <p className=' font-PassionOne text-4xl text-white hover:text-C82A0D8 px-2'>Tareas</p> : <FaIcons.FaTasks className='xl:text-5xl text-2xl xl:mx-auto text-white' />}
          </Link>
        </li>
        <li className={`mb-3 ${isSmallScreen ? 'hover:bg-white' : ''}`}>
          <Link to='/Nube' onClick={toggleMenu}>
            {isSmallScreen ? <p className=' font-PassionOne text-4xl text-white hover:text-C82A0D8 px-2'>Nube</p> : <BsIcons.BsFillCloudArrowUpFill className='xl:text-5xl text-2xl xl:mx-auto text-white' />}
          </Link>
        </li>
        <li className={`mb-3 ${isSmallScreen ? 'hover:bg-white' : ''}`}>
          <Link to='/Traductor' onClick={toggleMenu}>
            {isSmallScreen ? <p className=' font-PassionOne text-4xl text-white hover:text-C82A0D8 px-2'>Traductor</p> : <BsIcons.BsTranslate className='xl:text-5xl text-2xl xl:mx-auto text-white' />}
          </Link>
        </li>
        <li>
          <div className="relative">
            <FaYoutube
              className="xl:text-5xl text-2xl xl:mx-auto text-white"
              onClick={toggleMusic}
            />

            <AnimatePresence>
              {modalIsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="fixed inset-0 z-50 flex items-center justify-center"
                >
                  <div className="bg-black w-full bg-opacity-50 absolute inset-0" onClick={toggleMusic}></div>

                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-4 rounded-lg z-10"
                  >

                    <YouTubePlayer />
                    <div className=' flex justify-center mt-4'>
                      <button className="bg-red-500 p-2 text-white rounded-lg" onClick={toggleMusic}>
                        Cerrar Formulario
                      </button>
                    </div>

                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </li>

        <li className={`${isSmallScreen ? 'hover:bg-white' : ''}`}>
          <Link to='/' onClick={toggleMenu}>
            {isSmallScreen ? <p className=' font-PassionOne text-4xl text-white hover:text-C82A0D8 px-2'>Salir</p> : <Biicons.BiExit className='xl:text-5xl text-2xl xl:mx-auto text-white' onClick={cerrarSesion} />}
          </Link>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;