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
          <p className=" text-lg mb-5 animate__animated animate__fadeIn  animate__delay-.8s">Ser la plataforma líder que transforma la gestión del tiempo y el aprendizaje, ofreciendo a estudiantes y profesionales un entorno digital integral y personalizado. Buscamos ser reconocidos por nuestra capacidad para simplificar la vida diaria, fomentar el aprendizaje continuo y proporcionar herramientas que potencien el máximo rendimiento en el ámbito académico y profesional.
          </p>

          <h2 className="text-2xl md:text-3xl my-5 lg:mt-0 font-bold italic animate__animated animate__fadeIn  animate__delay-.8s">Nuestra historia</h2>
          <p className="text-lg animate__animated animate__fadeIn  animate__delay-.8s">En "BeFocus", nos comprometemos a proporcionar un espacio digital que va más allá de la gestión de tareas, notas y servicios externos. Nuestra misión es facilitar la vida cotidiana, mejorar la productividad y enriquecer el aprendizaje. A través de una interfaz intuitiva y la integración de servicios útiles, aspiramos a ser el compañero esencial que impulsa el éxito personal y profesional de nuestros usuarios.
          </p>
        </div>
      </div>
      <Footer/>
    </>

  )
}

export default Nosotros