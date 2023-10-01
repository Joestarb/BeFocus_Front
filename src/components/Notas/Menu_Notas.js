import React from 'react'
import * as HiIcons from 'react-icons/hi'
import * as SlIcons from 'react-icons/sl'
import Card_Notas from './Card_Notas'

function Menu_Notas() {
    return (
        <div className='bg-ColorMenuNotas h-screen overflow-auto'>
            <div className='flex justify-between p-3'>
                <h1 className=' font-PassionOne text-6xl'>Notas</h1>
                <div className='flex'>
                    <button>
                    <HiIcons.HiPlus className='text-5xl my-auto text-zinc-900' />
                    </button>
                    <button>
                    <SlIcons.SlOptionsVertical className='text-4xl my-auto text-zinc-900' />
                    </button>
                </div>
            </div>
            <div>
                 <Card_Notas/>
            </div>
        </div>
    )
}

export default Menu_Notas