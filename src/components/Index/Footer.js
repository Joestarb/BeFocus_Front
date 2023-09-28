import React from 'react'
import facebook from "../../assets/indexAssets/iconsFooter/facebook.png"
import ig from "../../assets/indexAssets/iconsFooter/ig.png"
import linkedin from "../../assets/indexAssets/iconsFooter/linkedin.png"
import youtube from "../../assets/indexAssets/iconsFooter/youtube.png"
function Footer() {
    return (
        <div className=' bg-black   text-gray-400 '>
            <nav className=' pt-12'>
                <ul class="flex justify-center gap-8 ">
                    <li>Inicio</li>
                    <li>Nosotros </li>
                    <li>Contacto </li>
                </ul>
            </nav>
            <h2 className=' text-center font-bold text-white mt-5 text-6xl'>
                BeFocus
            </h2>
            <p className=' text-gray-400 text-center m-4'>Optimiza tu día al maximo</p>
            <div>
                <div className='  flex justify-center  gap-6 m-2 '>

                <img src={ig} alt=''/>
                <img src={facebook} alt=''/>
                <img src={youtube} alt=''/>
                <img src={linkedin} alt=''/>
                </div>
            </div>
            <div className='border border-white m-5'></div>
            <p className=' text-center   text-white p-5'>
            © 2023 Be Focus. Todos los derechos reservados.
            </p>
        </div>
    )
}

export default Footer