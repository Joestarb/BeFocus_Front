import React from 'react'
import gridImage1 from "../../assets/indexAssets/grid_image1.png"
import gridImage2 from "../../assets/indexAssets/grid_image2.png"
import gridImage3 from "../../assets/indexAssets/grid_image3.png"
import gridImage4 from "../../assets/indexAssets/grid_image4.png"
import gridImage5 from "../../assets/indexAssets/grid_image5.png"
import gridImage6 from "../../assets/indexAssets/grid_image6.png"
import gridImage7 from "../../assets/indexAssets/grid_image7.png"
function IndexContent() {
    return (
        <div>
            <h1 className="text-center font-bold text-3xl mt-10">Herramientas que nececitas <br /> para tu dia a dia</h1><br />
            <p className=' text-center' >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore <br />et dolore magna aliqua.
            </p>
            {/*grid layout*/}
            <section className='flex justify-center gap-3 m-10'>
                <div><img  src={gridImage1} alt='gridImage' /></div>

                <div >
                    <div className='mb-2'><img className='caja2' src={gridImage2} alt='gridImage' /></div>
                    <div><img  src={gridImage3} alt='gridImage' /></div>
                </div>

                <div>
                    <div className='mb-2'><img className='caja4' src={gridImage4} alt='gridImage' /></div>
                    <div><img  src={gridImage5} alt='gridImage' /></div>
                </div>

                <div>
                    <div className='mb-2'><img src={gridImage7} alt='gridImage' /></div>
                    <div ><img src={gridImage6} alt='gridImage' /></div>

                </div>
            </section>

            <div className='border border-black'></div>
        </div>
    )
}

export default IndexContent