import React from 'react'
import Sidebar from "../components/Sidebar/Sidebar"
import TareasP from '../components/Tareas/TareasP'
import TodoList from '../components/Todo/TodoList'


function Tareas() {
    return (
        <div className='flex  xl:flex-row flex-col'>
            <div>
            <Sidebar />
            </div>
            <div className=' overflow-auto w-full'>
                <TodoList />
            </div>
        </div>
    )
}

export default Tareas