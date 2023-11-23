import anime from "animejs";
import React, { useEffect, useRef } from 'react';
import gridImage1 from "../../assets/indexAssets/grid_image1.png";
import gridImage2 from "../../assets/indexAssets/grid_image2.png";
import gridImage3 from "../../assets/indexAssets/grid_image3.png";
import gridImage4 from "../../assets/indexAssets/grid_image4.png";
import gridImage5 from "../../assets/indexAssets/grid_image5.png";
import gridImage6 from "../../assets/indexAssets/grid_image6.png";
import gridImage7 from "../../assets/indexAssets/grid_image7.png";
function IndexContent() {
    const headerTextRef = useRef(null);

    useEffect(() => {
        const headerText = headerTextRef.current;

        const handleScroll = () => {
            const elementTop = headerText.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight) {
                anime({
                    targets: headerText,
                    translateX: 0,
                    opacity: [0, 1],
                    easing: 'easeInOutQuad',
                    duration: 1500,
                    delay: anime.stagger(200), // Para agregar un retraso escalonado a cada elemento
                });

                // Quita el event listener después de que se haya activado la animación
                window.removeEventListener('scroll', handleScroll);
            }
        };

        // Agrega el event listener al scroll
        window.addEventListener('scroll', handleScroll);

        // Llama a handleScroll una vez para verificar el estado inicial
        handleScroll();

        // Limpia el event listener cuando el componente se desmonta
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div ref={headerTextRef} className="headerText">
            <h1 className="text-center font-bold text-6xl mt-10">Herramientas que necesitas <br /> para tu dia a dia</h1><br />
            <p className=' text-center' >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore <br />et dolore magna aliqua.
            </p>
            {/*grid layout*/}
            <section className='flex justify-center gap-3 m-10'>
                <div><img src={gridImage1} alt='gridImage' /></div>

                <div >
                    <div className='mb-2'><img className='caja2' src={gridImage2} alt='gridImage' /></div>
                    <div><img src={gridImage3} alt='gridImage' /></div>
                </div>

                <div>
                    <div className='mb-2'><img className='caja4' src={gridImage4} alt='gridImage' /></div>
                    <div><img src={gridImage5} alt='gridImage' /></div>
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