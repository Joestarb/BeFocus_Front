import CalendarioApi from "./CalendarioApi/CalendarioApi"
function CalendarioP() {
    return (
        <div>
            <div className=' m-10'>
                <h1 className='font-bold text-5xl text-center redColor'>Bienvenido a tu calendario</h1>
                <h2 className='font-bold text-3xl text-center'>Maneja mejor tu agenda y mantente al dia con tus actividades</h2>
                <div className='border ml-14 border-gray-400 line'></div>
            </div>

            <p className='  ml-24 font-semibold  text-2xl'> Calendario</p>
            <div className=' border border-gray-400  rounded-xl mx-14  p-36'>
                <CalendarioApi />
            </div>
        </div>
    )
}

export default CalendarioP