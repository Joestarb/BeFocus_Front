import Navbar from "../components/Index/Navbar"
import FotoNosotros from "../assets/indexAssets/Nosotros3.jpg"
import Footer from "../components/Index/Footer"

function Nosotros() {
  return (
    <>
      <Navbar />
      <div className="grid  lg:grid-cols-2 m-10 mb-16">
        <img src={FotoNosotros} alt="Logo hilos de tradicion" 
        className="w-full md:w-3/5 lg:w-full h-auto justify-self-center animate__animated animate__fadeIn  animate__delay-.8s rounded-2xl"/>

        <div className="mx-8 my-3 flex flex-col justify-center">

          <h2 className="text-2xl md:text-3xl  my-5 lg:mt-0 font-bold italic animate__animated animate__fadeIn  animate__delay-.8s">Nuestra misión</h2>
          <p className=" text-lg mb-5 animate__animated animate__fadeIn  animate__delay-.8s">
          Facilitar la vida diaria de nuestros usuarios al proporcionar una plataforma integral que potencie la productividad, la organización y el bienestar personal. Nos esforzamos por ser la herramienta indispensable que impulse el rendimiento y la eficiencia en cada tarea y actividad.
          </p>

          <h2 className="text-2xl md:text-3xl my-5 lg:mt-0 font-bold italic animate__animated animate__fadeIn  animate__delay-.8s">Nuestra compromiso</h2>
          <p className="text-lg animate__animated animate__fadeIn  animate__delay-.8s">En BeFocus nos comprometemos a ofrecer soluciones innovadoras que se adapten a las necesidades cambiantes de nuestros usuarios. Buscamos constantemente mejorar y enriquecer sus experiencias, brindando un servicio confiable, intuitivo y centrado en agregar valor a cada momento de sus vidas. En BeFocus, nuestro compromiso es ser su aliado confiable en la búsqueda de un enfoque más efectivo y equilibrado.
          </p>
        </div>
      </div>
      <Footer/>
    </>

  )
}

export default Nosotros