import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import GoogleDrivePicker from '../components/GoogleDrive/GoogleDrivePicker'
import { motion } from "framer-motion"
function Nube() {
  return (
    <div className='xl:flex h-full'>
      <div className=''>
        <Sidebar />
      </div>
      <motion.div
        initial={{ opacity: 0, }}
        animate={{ opacity: 1, }}
        transition={{ duration: 0.5 }}
        className='w-full overflow-auto'>
        <div className=' w-full h-screen flex flex-col justify-center'>
          <div className=' m-auto w-full h-full'>
            <GoogleDrivePicker />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Nube