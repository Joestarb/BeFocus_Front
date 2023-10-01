import React from 'react';
import * as Biicons from 'react-icons/bi';
import * as BsIcons from 'react-icons/bs';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo/Logo_Befocus.png';

function Sidebar() {
  return (
    <div className=' bg-ColorSidebar w-16 h-screen'>
        <ul>
            <li className='mb-3'>
                <Link to='/'>
                  <img src={Logo} alt='Logo' className='m-auto w-12'/>
                </Link>
            </li>
            <li className='my-5'>
                <Link to='/Notas'>
                  <FaIcons.FaRegStickyNote className=' text-5xl mx-auto text-zinc-900'/>
                </Link>
            </li>
            <li className='my-5'>
              <Link to='/Tareas'>
                <FaIcons.FaTasks className=' text-5xl mx-auto text-zinc-900'/>
              </Link>
            </li>
            <li className='my-5'>
              <Link to='/Calendario'>
                <BsIcons.BsFillCalendar2WeekFill className=' text-5xl mx-auto text-zinc-900'/>
              </Link>
            </li>
            <li className='my-5'>
              <Link to='/Traductor'>
                <BsIcons.BsTranslate className=' text-5xl mx-auto text-zinc-900'/>
              </Link>
            </li>
            <li className='my-5'>
              <Link to='/Recursos'>
                <Biicons.BiSolidBookBookmark className=' text-5xl mx-auto text-zinc-900'/>
              </Link>
            </li>
            <li className='my-5'>
              <Link to='/Musica'>
                <FaIcons.FaMusic className=' text-5xl mx-auto text-zinc-900'/>
              </Link>
            </li>
            <li className='mt-24'>
              <Link to='/Perfil'>
                <Biicons.BiUser className=' text-5xl mx-auto text-zinc-900'/>
              </Link>
            </li>

        </ul>
    </div>
  )
}

export default Sidebar