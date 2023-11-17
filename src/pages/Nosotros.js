import Navbar from "../components/Index/Navbar"
import FotoNosotros from "../assets/indexAssets/Nosotros.jpg"
import Footer from "../components/Index/Footer"

function Nosotros() {
  return (
    <>
      <Navbar />
      <div className="grid  lg:grid-cols-2 m-10">
        <img src={FotoNosotros} alt="Logo hilos de tradicion" 
        className="w-full md:w-3/5 lg:w-full h-auto justify-self-center animate__animated animate__fadeIn  animate__delay-.8s" />

        <div className="mx-8 my-3 flex flex-col justify-center">

          <h2 className="text-2xl md:text-3xl  my-5 lg:mt-0 font-bold italic animate__animated animate__fadeIn  animate__delay-.8s">Nuestra misión</h2>
          <p className=" text-lg mb-5 animate__animated animate__fadeIn  animate__delay-.8s">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium natus esse, ullam facilis ipsum praesentium quas. Corrupti distinctio laboriosam doloribus fugit, sapiente quod cum neque harum voluptates maxime temporibus nesciunt!
            rem, ipsum dolor sit amet consectetur adipisicing elit. Quidem ratione totam vel possimus officia iusto quia nam nobis nulla harum hic tempora suscipit deleniti, corrupti ipsam unde consequatur. Sequi, maiores?
          </p>

          <h2 className="text-2xl md:text-3xl my-5 lg:mt-0 font-bold italic animate__animated animate__fadeIn  animate__delay-.8s">Nuestra historia</h2>
          <p className="text-lg animate__animated animate__fadeIn  animate__delay-.8s">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, in impedit explicabo id rerum hic tempora, esse veritatis incidunt perspiciatis quo officia quae quos qui molestias vitae facere quam! Quibusdam?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis consequuntur necessitatibus, sequi doloremque quod et consequatur corrupti aspernatur, quisquam pariatur, expedita officia inventore incidunt. Officia reiciendis itaque omnis veniam corrupti!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos dolores quaerat, et laboriosam provident, quibusdam reprehenderit quae repellendus mollitia esse voluptas vero, dolor maiores. Voluptas suscipit quae modi mollitia 
          lor
          </p>
        </div>
      </div>
      <Footer/>
    </>

  )
}

export default Nosotros