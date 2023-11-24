import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setModalOpen(!modalOpen);
  };

  return (
    <div>
      <nav className='flex items-center justify-between p-4'>
        <div className='flex items-center'>
          <p className='font-bold text-2xl '>BeFocus</p>
        </div>
        <div className={`md:flex space-x-4 ${menuOpen ? 'hidden' : 'hidden'}`}>
          <Link to='/' onClick={toggleMenu}>
            <p className='font-bold text-lg hover:bg-zinc-900 hover:text-zinc-100 p-2 rounded-lg transition ease-in-out delay-150 duration-300'>Inicio</p>
          </Link>
          <Link to='/Nosotros' onClick={toggleMenu}>
            <p className='font-bold text-lg hover:bg-zinc-900 hover:text-zinc-100 p-2 rounded-lg transition ease-in-out delay-150 duration-300'>Nosotros</p>
          </Link>
          <Link to='/Contacto' onClick={toggleMenu}>
            <p className='font-bold text-lg hover:bg-zinc-900 hover:text-zinc-100 p-2 rounded-lg transition ease-in-out delay-150 duration-300'>Contacto</p>
          </Link>
        </div>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-xl text-zinc-900 hover:text-zinc-100'>
            <svg fill='none' viewBox='0 0 24 24' stroke='currentColor' className='h-6 w-6'>
              {menuOpen ? (
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
              ) : (
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
              )}
            </svg>
          </button>
        </div>
        <div className='hidden md:grid place-content-end'>
          <Link to='/Login'>
            <button className='font-semibold py-2 px-4 rounded transition ease-in-out delay-150 bg-zinc-100 text-zinc-900  hover:-translate-y-1 hover:scale-110 hover:bg-zinc-900 hover:text-zinc-100 duration-300'>Log In</button>
          </Link>
        </div>
      </nav>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded flex flex-col justify-center ">
            <Link to='/' onClick={toggleMenu}>
              <p className='font-bold text-lg text-center hover:bg-zinc-900 hover:text-zinc-100 p-2 rounded-lg transition ease-in-out delay-150 duration-300 my-2'>Inicio</p>
            </Link>
            <Link to='/Nosotros' onClick={toggleMenu}>
              <p className='font-bold text-lg text-center hover:bg-zinc-900 hover:text-zinc-100 p-2 rounded-lg transition ease-in-out delay-150 duration-300 my-2'>Nosotros</p>
            </Link>
            <Link to='/Contacto' onClick={toggleMenu}>
              <p className='font-bold text-lg text-center hover:bg-zinc-900 hover:text-zinc-100 py-2 px-4 rounded-lg transition ease-in-out delay-150 duration-300 my-2'>Contacto</p>
            </Link>
            <button onClick={() => {setModalOpen(false); toggleMenu()}} className='font-bold text-lg text-center bg-zinc-900 text-zinc-100 p-2 rounded-lg transition ease-in-out delay-150 duration-300 my-2 mx-auto'>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
