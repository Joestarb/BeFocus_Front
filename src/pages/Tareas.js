import React from 'react'
import Sidebar from "../components/Sidebar/Sidebar"
import TareasP from '../components/Tareas/TareasP'


function Tareas() {
    return (
        <div className='flex  xl:flex-row flex-col'>
            <div className='xl:fixed'>
            <Sidebar />
            </div>
            <div className=' overflow-auto mx-10'>
            <TareasP />
            </div>
        </div>
    )
}

export default Tareas