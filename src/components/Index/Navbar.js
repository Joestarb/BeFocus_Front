import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className='flex items-center justify-between p-4'>
        <div className='flex items-center'>
          <p className='font-bold text-2xl'>BeFocus</p>
        </div>
        <div className='flex space-x-4'>
          <a>          <p className='font-bold text-lg'>Inicio</p>
          </a>
          <a>
            <p className='font-bold text-lg'>Novedades</p>

          </a>
          <a>
            <p className='font-bold text-lg'>Nosotros</p>

          </a>

        </div>
        <div className='grid place-content-end'>
          <button className='bg-blue-500 text-white py-2 px-4 rounded'>Log In</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar