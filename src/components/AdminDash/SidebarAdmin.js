import React from 'react';
import { CiUser } from "react-icons/ci";

function SidebarAdmin() {

  return (
    <div className="bg-[#ACB1D6]  font-semibold h-screen w-1/5 p-4">
      <div className='border-b-4 border-zinc-100 mb-4'>
        <h2 className="text-2xl font-bold mb-4 mt-4">Befocus - Dashboard</h2>
        <h2 className="text-xl italic font-semibold mb-4 mt-4">Bienvenido Administrador</h2>
      </div>
      <ul>
        <div className='flex text-4xl items-center mt-5 '>
          <CiUser className=' ' />
          <button className="text-2xl italic font-semibold my-auto">Usuarios</button>
        </div>

      </ul>
    </div>
  );
}

export default SidebarAdmin;
