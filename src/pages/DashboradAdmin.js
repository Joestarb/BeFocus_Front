import React from 'react'
import SidebarAdmin from '../components/AdminDash/SidebarAdmin'
import UsersCrud from '../components/AdminDash/UsersCrud'
function DashboradAdmin() {
  return (
    <div className="flex">
      <SidebarAdmin />
      <div className="flex-1 h-screen overflow-y-auto">
        <UsersCrud />
      </div>
    </div>
  );
}


export default DashboradAdmin