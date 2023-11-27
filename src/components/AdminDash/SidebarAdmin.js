import React, { useState } from 'react';
import { CiUser } from 'react-icons/ci';
import { Link } from 'react-router-dom';

function SidebarAdmin() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  let logueado = localStorage.getItem("Logueado");
  const nombre = localStorage.getItem("Nombre") || "";
  const nombreCortado = nombre.split(' ');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setModalOpen(!modalOpen);
  };

  function cerrarSesion() {
    localStorage.clear();
  }

  return (
    <div className="bg-[#ACB1D6] font-semibold items-center justify-center p-4 h-14 flex">
      <h2 className="md:text-base text-sm italic ml-2 text-white m-auto w-1/3">Befocus - Dashboard</h2>
      <div className={`md:flex space-x-4 md-1/3 mx-auto justify-center ${menuOpen ? 'hidden' : 'hidden'}`}>
        <div className='m-auto w-full'>
          {/* <CiUser className="text-4xl font-bold my-auto" /> */}
          <button className="md:font-semibold text-sm md:text-base font-medium transition ease-in-out delay-150 italic my-auto text-white hover:text-zinc-900 mx-auto">Usuarios</button>
        </div>
      </div>
      <div className='md:hidden'>
        <button onClick={toggleMenu} className='text-xl text-zinc-900 hover:text-zinc-100'>
          <svg fill='none' viewBox='0 0 24 24' stroke='currentColor' className='h-6 w-6 text-white'>
            {menuOpen ? (
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
            ) : (
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
            )}
          </svg>
        </button>
      </div>
      <div />
      <div className="hidden md:grid place-content-end w-1/3">
        <Link to='/Login'>
          <button className='font-semibold py-2 px-4 rounded transition ease-in-out delay-150 bg-zinc-100 text-zinc-900  hover:-translate-y-1 hover:scale-105 hover:bg-zinc-800 hover:text-zinc-100 duration-300 m-auto' onClick={cerrarSesion}>Log Out</button>
        </Link>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded flex flex-col justify-center ">
              <p className='font-bold text-lg text-center  py-2 px-4 rounded-lg transition ease-in-out delay-150 duration-300 my-2 mx-auto cursor-pointer' onClick={toggleMenu}>Usuarios</p>
            <Link to='/Login' className='mx-auto' onClick={toggleMenu}>
              <p className='font-bold text-lg text-center  py-2 px-4 rounded-lg transition ease-in-out delay-150 duration-300 my-2' onClick={cerrarSesion}>Log out</p>
            </Link>
            <button onClick={() => { setModalOpen(false); toggleMenu() }} className='font-bold text-lg text-center bg-zinc-900 text-zinc-100 p-2 rounded-lg transition ease-in-out delay-150 duration-300 my-2 mx-auto'>Cerrar</button>

          </div>
        </div>
      )}
    </div>
  );
}

export default SidebarAdmin;
