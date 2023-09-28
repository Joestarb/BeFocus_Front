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
            <div className='flex'>
                <div className=' mt-6'>
                    <img src={gridImage1} alt='grid imagen 1' className='  w-60' />
                </div>
                <div className="grid  gap-2 w-60 mt-6 ml-5">
                    <div className="col-span-3">
                        <img src={gridImage2} alt='gridimage2' />

                    </div>
                    <div className="col-span-3  w-64">
                        <img src={gridImage3} alt='gridimage3' />
                    </div>


                </div>

                <div className="grid  w-60 mt-6   ml-16">
                    <div className="col-span-2 w-60">
                        <img src={gridImage4} alt='gridimage4' />
                    </div>
                    <div className="col-span-3">
                        <img src={gridImage5} alt='gridimage5' />
                    </div>
                </div>
                <div className="grid gap-2 w-60 mt-6  ml-20">
                    <div className="col-span-2  w-52">
                        <img src={gridImage6} alt='gridimage4' />
                    </div>
                    <div className="    w-56">
                        <img src={gridImage7} alt='gridimage5' />
                    </div>
                </div>
            </div>
            <div className='border border-black'></div>
        </div>
    )
}

export default IndexContent