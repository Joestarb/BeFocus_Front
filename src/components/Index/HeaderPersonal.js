import React from 'react'
import { Link } from 'react-router-dom';
import webIcon from '../../assets/Icons/website.png'

function HeaderPersonal() {

    const logueado = localStorage.getItem('Logueado');
    const nombre = localStorage.getItem('Nombre');
    const nombreCortado = nombre.split(' ');

    function cerrarSesion(){
        localStorage.clear();
      };


    return (
        <>
            <nav className='flex items-center justify-between p-4 h-14'>
                <div className='flex items-center'>
                    <img src={webIcon} alt="website icon" className='w-6 h-6 mx-2' />
                    <p className='md:text-base text-sm italic ml-2'>Personal Planner</p>
                </div>
                {logueado ? <p className='md:text-lg text-sm font-semibold italic mr-2'>Bienvenido {nombreCortado[0]}</p> : null}
                <div className='grid place-content-end'>
                    <Link to='/Login'>
                        <button className='hover:bg-zinc-900 hover:text-zinc-100 md:font-semibold text-sm md:text-base font-medium ransition ease-in-out delay-150 bg-zinc-100 duration-300 p-2 md:py-2 md:px-4 rounded' onClick={cerrarSesion}>Log Out</button>
                    </Link>
                </div>
            </nav>

        </>
    )
}

export default HeaderPersonal