import React from 'react'
import { Link } from 'react-router-dom';
import webIcon from '../../assets/Icons/website.png'

function HeaderPersonal() {

    function cerrarSesion(){
        localStorage.clear();
      };


    return (
        <>
            <nav className='flex items-center justify-between p-4 h-14'>
                <div className='flex items-center'>
                    <img src={webIcon} alt="website icon" className='w-6 h-6 mx-2' />
                    <p className='text-base italic ml-2'>Personal Planner</p>
                </div>
                <div className='grid place-content-end'>
                    <Link to='/Login'>
                        <button className='hover:bg-zinc-100 py-2 px-4 rounded' onClick={cerrarSesion}>Log Out</button>
                    </Link>
                </div>
            </nav>

        </>
    )
}

export default HeaderPersonal