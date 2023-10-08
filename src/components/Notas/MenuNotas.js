import React from 'react'
import * as HiIcons from 'react-icons/hi'
import * as SlIcons from 'react-icons/sl'
import CardNotas from './CardNotas'

function MenuNotas() {
    return (
        <div className=' bgNotas h-screen overflow-auto'>
            <div className='flex justify-between p-3'>
                <h1 className=' font-PassionOne text-5xl'>Notas</h1>
                <div className='flex'>
                    <button>
                        <HiIcons.HiPlus className='text-4xl my-auto text-zinc-900' />
                    </button>
                    <button>
                        <SlIcons.SlOptionsVertical className='text-3xl my-auto text-zinc-900' />
                    </button>
                </div>
            </div>
            <div>
                <CardNotas />
            </div>
        </div>
    )
}

export default MenuNotas