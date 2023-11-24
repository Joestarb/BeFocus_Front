import anime from "animejs";
import React, { useEffect, useRef } from 'react';
import gridimage from '../../assets/indexAssets/1gridContent2.png';
import gridimage2 from '../../assets/indexAssets/2gridContent2.png';
import gridimage3 from '../../assets/indexAssets/3gridContent2.png';


function IndexContent2() {
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
        <div className=" h-full my-10">
            <h2 className="md:text-4xl xl:text-6xl italic animate__animated animate__fadeIn  animate__delay-.8s md:mt-14 text-center font-bold text-2xl mt-10">¿Por qué elegir BeFocus?</h2>

            <div ref={headerTextRef} className="headerText grid place-content-center mt-5 md:mx-10 xl:m-auto">
                <div className="grid place-content-center mt-10 xl:grid-cols-3 gap-28">
                    <div className="grid place-content-center text-center h-full m-auto">
                        <div className="flex justify-center mb-5">
                            <img src={gridimage} alt="img"/>
                        </div>
                        <p className="w-3/4 m-auto italic text-md">
                            Crea categorías y etiquetas personalizadas para adaptar BeFocus a tu estilo de vida. Desde apuntes de reuniones hasta listas de compras, BeFocus se adapta a ti.
                        </p>
                    </div>
                    <div className="grid place-content-center text-center h-full m-auto">
                        <div className="flex justify-center mb-5">
                            <img src={gridimage2} alt="img"/>
                        </div>
                        <p className="w-3/4 m-auto italic text-md">
                            Olvídate de las fechas límite perdidas. BeFocus gestiona tus tareas pendientes, asegurándote que nunca te pierdas nada crucial.
                        </p>
                    </div>
                    <div className="grid place-content-center text-center h-full m-auto mb-10">
                        <div className="flex justify-center mb-5">
                            <img src={gridimage3} alt="img" />
                        </div>
                        <p className="w-3/4 m-auto italic text-md">
                            Nuestra interfaz fácil de usar garantiza que puedas acceder rápidamente a tus notas y tareas, permitiéndote concentrarte en lo que realmente importa.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default IndexContent2