import React from 'react'

function SubirElemento() {
    return (
        <div>
            <div className='flex flex-col justify-center items-center mt-8'>
                <div className='flex flex-col text-center mb-5 border-solid border-8 border-white shadow-2xl rounded-lg p-5 w-1/2 h-96 mx-auto mt-10'>
                    <h2 className='font-sans font-bold text-3xl mb-2'>Selecciona tus archivos aqui</h2>
                    <div className='flex flex-col justify-center items-center p-20'>
                        <form className='flex flex-col align-middle'>
                            <input type="file" className="w-full text-md text-zinc-700 file:py-2 file:px-4  file:rounded-full file:border-0 file:text-lg file:font-semibold file:text-white hover:file:bg-C393E46 file:bg-CF95757" />
                            <button type="submit" className=' text-white font-mono font-semibold text-2xl p-2 rounded-lg mt-5 h-16 bg-ColorSidebar'>Subir a Drive</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubirElemento