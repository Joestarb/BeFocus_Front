import React from 'react'
import indexImage from "../../assets/indexAssets/hero_img.png"
function Header() {
    return (
        <>
            <header className=' grid grid-cols-2  mb-28   m-24'>
                <div>
                    <h2 className=' font-bold text-4xl mt-14'>
                        Desata el poder de la organización con
                        BeFocus
                    </h2>
                    <p className=' mt-7'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className=' grid place-content-center mt-6'>
                        <button className=' text-xl rounded-xl bg-orange-500  p-2 font-bold text-white'>
                            Descubrir
                        </button>
                    </div>

                </div>
                <div>
                    <img src={indexImage} alt='indeximage'/>
                </div>
               
            </header>
            <div className='border border-black'></div>
        </>
    )
}

export default Header