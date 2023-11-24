import React from 'react';
import { CiUser } from "react-icons/ci";

function SidebarAdmin() {
  return (
    <div className="bg-[#ACB1D6]  font-semibold h-screen w-1/5 p-4">
      <div className=' flex  gap-3'>
        <h2 className="text-2xl font-bold mb-4 mt-4">Befocus</h2>
      </div>
      <ul>
        <div className='flex text-2xl items-center'>
          <CiUser className=' ' />
          <li className="">Lista de usuarios</li>
        </div>

      </ul>
    </div>
  );
}

export default SidebarAdmin;
