import React from 'react'
import indexImage from "../../assets/indexAssets/hero_img.png"
function Header() {
    return (
        <>
            <header className=' grid md:grid-cols-2  mb-28 m-10 xl:m-24'>
                <div className='w-full'>
                    <h2 className=' text-2xl xl:text-4xl text-center xl:text-left font-bold italic animate__animated animate__fadeIn  animate__delay-.8s md:mt-14'>
                        Desata el poder de la organización con BeFocus
                    </h2>
                    <p className=' mt-4 text-lg text-center xl:text-left mb-5 animate__animated animate__fadeIn  animate__delay-.8s'>
                    En el ajetreo diario, mantenerse organizado es clave para el éxito. Con BeFocus, tu aplicación personalizada para hacer notas y gestionar tareas, la organización se convierte en una experiencia intuitiva y efectiva.
                    </p>
                    <div className='grid xl:place-content-start place-content-center my-6'>
                        <button className=' text-xl rounded-xl bg-[#00DFA2] hover:bg-[#FF6363] transition ease-in-out delay-150 hover:scale-110 duration-300  p-2 font-bold text-white'>Descubrir</button>
                    </div>

                </div>
                <div className='m-auto'>
                    <img src={indexImage} alt='indeximage' />
                </div>
            </header>
            <div className='border-b border-gray-300'></div>
        </>
    )
}

export default Header