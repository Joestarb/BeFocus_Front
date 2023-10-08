import React from 'react';
import * as Biicons from 'react-icons/bi';
import * as BsIcons from 'react-icons/bs';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo/Logo_Befocus.png';

function Sidebar() {
  return (
    <div className='bgSidebar w-16 h-screen'>
      <ul className='flex flex-col justify-between h-full'>
        {/* <div>
          <li>
            <Link to='/'>
              <img src={Logo} alt='Logo' className='  m-auto w-12' />
            </Link>
          </li>
        </div> */}
        <div>
          <li className='my-5'>
            <Link to='/Notas'>
              <FaIcons.FaRegStickyNote className=' text-5xl mx-auto text-white' />
            </Link>
          </li>
          <li className='my-5'>
            <Link to='/Tareas'>
              <FaIcons.FaTasks className=' text-5xl mx-auto text-white' />
            </Link>
          </li>
          <li className='my-5'>
            <Link to='/Nube'>
              <BsIcons.BsFillCloudArrowUpFill className=' text-5xl mx-auto text-white' />
            </Link>
          </li>
          <li className='my-5'>
            <Link to='/Traductor'>
              <BsIcons.BsTranslate className=' text-5xl mx-auto text-white' />
            </Link>
          </li>
          <li className='my-5'>
            <Link to='/Musica'>
              <FaIcons.FaMusic className=' text-5xl mx-auto text-white' />
            </Link>
          </li>
        </div>
        <div>
          <li>
            <Link to='/Perfil'>
              <Biicons.BiExit className=' text-5xl mx-auto text-white' />
            </Link>
          </li>
        </div>
      </ul>
    </div>
  )
}

export default Sidebar