import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div>
      <nav className='flex items-center max-sm:flex-col justify-between p-4'>
        <div className='flex items-center'>
          <p className='font-bold text-2xl transition ease-in-out delay-150 hover:scale-125'>BeFocus</p>
        </div>
        <div className='flex space-x-4'>
          <Link to='/'>
            <p className='font-bold text-lg hover:bg-zinc-900 hover:text-zinc-100 p-2 rounded-lg transition ease-in-out delay-150 duration-300'>Inicio</p>
          </Link>
         
          <Link to='/Nosotros'>
            <p className='font-bold text-lg hover:bg-zinc-900 hover:text-zinc-100 p-2 rounded-lg transition ease-in-out delay-150 duration-300'>Nosotros</p>
          </Link>
        </div>
        <div className='grid place-content-end'>
          <Link to='/Login'>
            <button className='font-semibold py-2 px-4 rounded transition ease-in-out delay-150 bg-zinc-100 text-zinc-900  hover:-translate-y-1 hover:scale-110 hover:bg-zinc-900 hover:text-zinc-100 duration-300'>Log In</button>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
