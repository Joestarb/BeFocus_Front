import React from 'react'
import Sidebar from "../components/Sidebar/Sidebar"
import TareasP from '../components/Tareas/TareasP'
function Tareas() {
    return (
        <div className=' flex '>

            <Sidebar />
          
            <TareasP />
        </div>
    )
}

export default Tareas