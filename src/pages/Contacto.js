import Navbar from "../components/Index/Navbar";
import Footer from "../components/Index/Footer";
import mapa from '../assets/indexAssets/mapa.jpg'

function Contacto() {
  return (
    <>
      <Navbar />
      <div className="grid lg:grid-cols-2 m-10 mb-16 animate__animated animate__fadeIn animate__delay-.8s">
        {/* Puedes agregar una imagen relacionada con la sección de contacto si lo deseas */}
        <img
          src={mapa}
          alt="Imagen de contacto"
          className="w-full md:w-3/5 lg:w-full h-auto justify-self-center animate__animated animate__fadeIn animate__delay-.8s rounded-2xl"
        />
        <div className="mx-8 my-3 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl my-5 lg:mt-0 font-bold italic animate__animated animate__fadeIn animate__delay-.8s">
            Contáctanos
          </h2>

          <p className="text-lg mb-5 animate__animated animate__fadeIn animate__delay-.8s">
            ¿Listo para conectarte con nosotros? ¡Nos encantaría saber de ti!
            Utiliza la información a continuación para ponerte en contacto o
            simplemente decir hola:
          </p>

          {/* Información de contacto */}
          <p className="text-lg animate__animated animate__fadeIn animate__delay-.8s">
            <strong>Correo Electrónico:</strong>{" "}
            <a href="mailto:infodreamx2023@gmail.com">infodreamx2023@gmail.com</a>
          </p>
          <p className="text-lg animate__animated animate__fadeIn animate__delay-.8s">
            <strong>Teléfono:</strong> [+52] 998-705-XXXX
          </p>

          {/* Redes sociales*/}
          <div className="flex mt-5 space-x-4 animate__animated animate__fadeIn animate__delay-.8s">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Facebook
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Twitter
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Instagram
            </a>
          </div>

          {/* Horario de atención (opcional) */}
          <div className="mt-5 animate__animated animate__fadeIn animate__delay-.8s">
            <h3 className="text-xl font-bold mb-2">Horario de Atención</h3>
            <p className="text-lg">
              Lunes a Viernes: 9:00 AM - 6:00 PM
              <br />
              Sábado y Domingo: Cerrado
            </p>
          </div>

          {/* Ubicación (opcional) */}
          <div className="mt-5 animate__animated animate__fadeIn animate__delay-.8s">
            <h3 className="text-xl font-bold mb-2">Nuestra Ubicación</h3>
            <p className="text-lg">
              [Cancún]
              <br />
              [Quintana Roo, México]
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contacto;
