import anime from "animejs";
import React, { useEffect, useRef } from 'react';
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
        <div ref={headerTextRef} className="headerText h-screen">
           <h2 className="  font-bold text-center  text-4xl">Por que elegir be focus</h2>
        </div>
    )
}

export default IndexContent2