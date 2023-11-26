import React from 'react'
import TraductorP from '../components/Traductor/TraductorP'
import Sidebar from '../components/Sidebar/Sidebar'
import {motion} from "framer-motion"
function Traductor() {
  return (
    <div className='xl:flex'>
      <div className='h-full'>
        <Sidebar />
      </div>
      <motion.div
        initial={{ opacity: 0, }}
        animate={{ opacity: 1, }}
        transition={{ duration: 0.5 }}
      >
        <TraductorP />
      </motion.div>
    </div>
  )
}

export default Traductor