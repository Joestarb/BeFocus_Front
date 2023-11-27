import React, { useState } from 'react'
import ContenidoNota from '../components/Notas/Contenido_Nota'
import MenuNotas from '../components/Notas/MenuNotas'
import Sidebar from '../components/Sidebar/Sidebar'
import { motion } from "framer-motion";

function Notas() {

  const [notaUtilizar, setNotaUtilizar] = useState();
  const [notaEfectos, setNotaEfectos] = useState(0);

  return (
    <div

      className='flex flex-col xl:flex-row'>
      <div className=''>
        <Sidebar />
      </div>
      <motion.div
        initial={{ opacity: 0, }}
        animate={{ opacity: 1, }}
        transition={{ duration: 0.5 }}
        className='flex w-full xl:flex-row flex-col'>
        <div className=' xl:w-3/12 overflow-auto'>
          <MenuNotas notaUtilizar={notaUtilizar} setNotaUtilizar={setNotaUtilizar} notaEfectos={notaEfectos} />
        </div>
        <div className=' xl:w-9/12'>
          <ContenidoNota notaUtilizar={notaUtilizar} setNotaUtilizar={setNotaUtilizar} notaEfectos={notaEfectos} setNotaEfectos={setNotaEfectos}/>
        </div>
      </motion.div>
    </div>
  )
}

export default Notas