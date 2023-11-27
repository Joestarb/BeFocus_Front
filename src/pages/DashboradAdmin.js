import React from 'react'
import SidebarAdmin from '../components/AdminDash/SidebarAdmin'
import UsersCrud from '../components/AdminDash/UsersCrud'
function DashboradAdmin() {
  return (
    <div className="">
      <SidebarAdmin />
      <div className="">
        <UsersCrud />
      </div>
    </div>
  );
}


export default DashboradAdmin