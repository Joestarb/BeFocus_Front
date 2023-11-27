import React from 'react'
import TraductorP from '../components/Traductor/TraductorP'
import Sidebar from '../components/Sidebar/Sidebar'
import {motion} from "framer-motion"
function Traductor() {
  return (
    <div className='flex  xl:flex-row flex-col w-full'>
      <div>
        <Sidebar />
      </div>
      <motion.div
        initial={{ opacity: 0, }}
        animate={{ opacity: 1, }}
        transition={{ duration: 0.5 }}
        className='w-full'
      >
        <div className=' overflow-auto w-full'>
        <TraductorP />
        </div>
      </motion.div>
    </div>
  )
}

export default Traductor