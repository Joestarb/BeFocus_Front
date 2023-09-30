import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div>
      <nav className='flex items-center justify-between p-4'>
        <div className='flex items-center'>
          <p className='font-bold text-2xl'>BeFocus</p>
        </div>
        <div className='flex space-x-4'>
          <Link to='/Login'>
            <p className='font-bold text-lg'>Inicio</p>
          </Link>
          <Link to='/novedades'>
            <p className='font-bold text-lg'>Novedades</p>
          </Link>
          <Link to='/nosotros'>
            <p className='font-bold text-lg'>Nosotros</p>
          </Link>
        </div>
        <div className='grid place-content-end'>
          <button className='bg-blue-500 text-white py-2 px-4 rounded'>Log In</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
