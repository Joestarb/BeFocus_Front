import React from 'react'
import indexImage from "../../assets/indexAssets/hero_img.png"
function Header() {
    return (
        <>
            <header className=' grid md:grid-cols-2  mb-28   m-24'>
                <div>
                    <h2 className=' font-bold text-4xl md:mt-14'>
                        Desata el poder de la organización con
                        BeFocus
                    </h2>
                    <p className=' mt-7'>
                    En el ajetreo diario, mantenerse organizado es clave para el éxito. Con BeFocus, tu aplicación personalizada para hacer notas y gestionar tareas, la organización se convierte en una experiencia intuitiva y efectiva.
                    </p>
                    <div className=' grid place-content-center mt-6'>
                        <button className=' text-xl rounded-xl bg-orange-500  p-2 font-bold text-white'>
                            Descubrir
                        </button>
                    </div>

                </div>
                <div>
                    <img src={indexImage} alt='indeximage' />
                </div>

            </header>
            <div className='border border-black'></div>
        </>
    )
}

export default Header