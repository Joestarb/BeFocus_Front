import React, { useState, useEffect } from 'react';
import * as Biicons from 'react-icons/bi';
import * as BsIcons from 'react-icons/bs';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo/Logo_Befocus.png';

function Sidebar() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // useEffect(() => {
  //   function handleResize() {
  //     setIsSmallScreen(window.innerWidth <= 768);
  //   }

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function cerrarSesion(){
    localStorage.clear();
  };

  return (
    <div className={`bgSidebar ${isSmallScreen ? 'block' : 'xl:w-16 xl:h-screen w-full h-auto'}`}>
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
      <li className={`my-5 ${isSmallScreen ? 'hover:bg-white' : ''}`}>
          <Link to='/Notas' onClick={toggleMenu}>
            {isSmallScreen ? <p className=' font-PassionOne text-4xl text-white hover:text-C82A0D8 p-2'>Notas</p> : <FaIcons.FaRegStickyNote className='xl:text-5xl text-2xl xl:mx-auto text-white' />}
          </Link>
        </li>
        <li className={`my-5 ${isSmallScreen ? 'hover:bg-white' : ''}`}>
          <Link to='/Tareas' onClick={toggleMenu}>
            {isSmallScreen ? <p className=' font-PassionOne text-4xl text-white hover:text-C82A0D8 p-2'>Tareas</p> : <FaIcons.FaTasks className='xl:text-5xl text-2xl xl:mx-auto text-white' />}
          </Link>
        </li>
        <li className={`my-5 ${isSmallScreen ? 'hover:bg-white' : ''}`}>
          <Link to='/Nube' onClick={toggleMenu}>
            {isSmallScreen ? <p className=' font-PassionOne text-4xl text-white hover:text-C82A0D8 p-2'>Nube</p> : <BsIcons.BsFillCloudArrowUpFill className='xl:text-5xl text-2xl xl:mx-auto text-white' />}
          </Link>
        </li>
        <li className={`my-5 ${isSmallScreen ? 'hover:bg-white' : ''}`}>
          <Link to='/Traductor' onClick={toggleMenu}>
            {isSmallScreen ? <p className=' font-PassionOne text-4xl text-white hover:text-C82A0D8 p-2'>Traductor</p> : <BsIcons.BsTranslate className='xl:text-5xl text-2xl xl:mx-auto text-white' />}
          </Link>
        </li>
        <li className={`my-5 ${isSmallScreen ? 'hover:bg-white' : ''}`}>
          <Link to='/Musica' onClick={toggleMenu}>
            {isSmallScreen ? <p className=' font-PassionOne text-4xl text-white hover:text-C82A0D8 p-2'>Música</p> : <FaIcons.FaMusic className='xl:text-5xl text-2xl xl:mx-auto text-white' />}
          </Link>
        </li>
        <li className={`my-5 ${isSmallScreen ? 'hover:bg-white' : ''}`}>
          <Link to='/' onClick={toggleMenu}>
            {isSmallScreen ? <p className=' font-PassionOne text-4xl text-white hover:text-C82A0D8 p-2'>Salir</p> : <Biicons.BiExit className='xl:text-5xl text-2xl xl:mx-auto text-white' onClick={cerrarSesion}/>}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;