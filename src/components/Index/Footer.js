import React from 'react'
import * as FaIcons from 'react-icons/fa';

function Footer() {
    return (
        <div className=' bg-zinc-900 w-full'>
            <div className='flex justify-center p-4'>
                <FaIcons.FaInstagram className='text-4xl my-auto text-zinc-100 mx-2 ease-out duration-300 hover:scale-125'></FaIcons.FaInstagram>
                <FaIcons.FaFacebook className='text-4xl my-auto text-zinc-100 mx-2 ease-out duration-300 hover:scale-125'></FaIcons.FaFacebook>
                <FaIcons.FaYoutube className='text-4xl my-auto text-zinc-100 mx-2 ease-out duration-300 hover:scale-125'></FaIcons.FaYoutube>
                <FaIcons.FaLinkedin className='text-4xl my-auto text-zinc-100 mx-2 ease-out duration-300 hover:scale-125'></FaIcons.FaLinkedin>
            </div>
            <div className='my-2 w-2/6 m-auto transition ease-in-out delay-150 hover:scale-110'>
                <h2 className=' text-center font-bold text-zinc-200 text-4xl'>BeFocus</h2>
                <p className=' text-zinc-200 text-center font-medium'>Optimiza tu día al maximo</p>
            </div>
            <div className='border border-zinc-300 w-full'></div>
            <div className='py-3'>
                <p className='italic font-medium text-center text-zinc-100'>© 2023 Be Focus. Todos los derechos reservados.</p>
            </div>
        </div>
    )
}

export default Footer