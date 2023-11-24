import React from "react";
import Navbar from "../components/Index/Navbar";
import Footer from "../components/Index/Footer";


const Politicas = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto my-10 p-5 bg-white shadow-lg rounded-md">
                <h1 className="text-3xl font-bold mb-5">Políticas de Privacidad</h1>

                <p className="mb-3">
                    Bienvenido a BeFocus. Tu privacidad es esencial para nosotros. Esta Política de Privacidad explica cómo recopilamos, utilizamos, divulgamos y protegemos tu información cuando utilizas nuestro servicio.
                </p>

                <h2 className="text-2xl font-bold mt-5 mb-3">Recopilación de información</h2>

                <p className="mb-3">
                    Recopilamos diferentes tipos de información con diversos fines para
                    proporcionar y mejorar nuestro servicio para ti.
                </p>

                <p className="mb-3">
                    Información Personal
                    Cuando te registras en BeFocus, podemos recopilar información personal que nos proporcionas, como tu nombre, dirección de correo electrónico y otra información relevante.
                </p>

                <p className="mb-3">
                    Registramos información sobre cómo interactúas con nuestro servicio, como las tareas que creas, las notas que tomas y cómo utilizas nuestras funciones.
                </p>

                <h2 className="text-2xl font-bold mt-5 mb-3">Uso de la información</h2>
                <p className="mb-3">
                    Utilizamos la información recopilada para ofrecerte y mejorar nuestros servicios, personalizar tu experiencia, y comunicarnos contigo. No compartimos tu información personal con terceros, excepto cuando sea necesario para proporcionar nuestros servicios o cumplir con requisitos legales.
                </p>


                <h2 className="text-2xl font-bold mt-5 mb-3">Cookies</h2>

                <p className="mb-3">
                    Tomamos medidas para proteger tu información, pero ten en cuenta que ninguna transmisión por Internet o sistema de almacenamiento es completamente seguro.
                </p>

                <h2 className="text-2xl font-bold mt-5 mb-3">Seguridad</h2>

                <p className="mb-3">
                    Tomamos medidas para proteger tu información, pero ten en cuenta que ninguna transmisión por Internet o sistema de almacenamiento es completamente seguro.
                </p>

                <h2 className="text-2xl font-bold mt-5 mb-3">Cambios a Esta Política de Privacidad</h2>

                <p className="mb-3">
                    Podemos actualizar nuestra Política de Privacidad de vez en cuando.
                    Te informaremos de cualquier cambio publicando la nueva Política de
                    Privacidad en esta página.
                </p>

                <h2 className="text-2xl font-bold mt-5 mb-3">Contacto</h2>

                <p>
                    Si tienes alguna pregunta sobre nuestra Política de Privacidad,
                    contáctanos:
                </p>

                <ul className="list-disc ml-5 mb-3">
                    <li><strong>Correo:</strong><a href="mailto:infodreamx2023@gmail.com"> infodreamx2023@gmail.com</a></li>
                    <li><strong>Teléfono:</strong> [+52] 998-705-XXXX</li>
                </ul>
            </div>
            <Footer />
        </>
    );
};

export default Politicas;
