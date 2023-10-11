import React from 'react'

function FormularioDrive() {
    return (
        <div className=' w-full'>
            <h1 className='font-PassionOne text-center text-6xl mt-5 border-b-4 h-14'>Almacenamiento en la nube</h1>
            <div className='flex flex-col justify-center items-center mt-20'>
                <h2 className='font-mono text-3xl'>Sube tus archivos aquí</h2>
                <div className='flex justify-center items-center mb-5 border-2 border-black rounded-lg p-5 w-1/2 h-96 mx-auto'>
                    <form className='flex flex-col align-middle'>
                        <input type="file" className="block w-full text-sm text-zinc-700 file:mr-4 file:py-2 file:px-4    file:rounded-full file:border-0 file:text-sm file:font-semibold file:text-white hover:file:bg-violet-100 file:bg-red-500"/>
                        <button type="submit" className=' text-white font-mono font-semibold text-2xl p-2 rounded-lg mt-5 h-16 botonsubir'>Subir a Drive</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormularioDrive