import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import GoogleDrivePicker from '../components/GoogleDrive/GoogleDrivePicker'

function Nube() {
  return (
    <div className='xl:flex h-full'>
      <div className=''>
        <Sidebar />
      </div>
      <div className='w-full overflow-auto'>
        <div className=' w-full h-screen flex flex-col justify-center'>
          <div className=' m-auto w-full h-full'>
          <GoogleDrivePicker/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nube