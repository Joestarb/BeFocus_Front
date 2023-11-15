import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import HeaderPersonal from '../components/Index/HeaderPersonal'
import webIcon from '../assets/Icons/diary.png'
import Reloj from '../components/Home/Reloj'
import { Link } from 'react-router-dom'
import Motivacion from '../components/Home/Motivacion'

function Home() {
  return (
    <div>
      <HeaderPersonal />
      <header className='w-full h-64 bg-cover bg-center bg-[url("https://i.pinimg.com/originals/f2/3d/6a/f23d6a550ead5955dd1b42576ae7c82c.jpg")]'></header>
      <div className='h-32 w-full relative'>
        <div className=' w-28 h-28 absolute top-[-50px] ml-20 border-4 bg-zinc-100 rounded-full'>
          <img src={webIcon} alt='Icon' className='w-20 h-20 mt-3 ml-2' />
        </div>
      </div>
      <main className='w-full'>
        <div className='w-4/5 m-auto h-20 border-b-4 border-zinc-400'>
          <h1 className='text-zinc-700 py-2 px-1 font-semibold font-serif text-4xl'>Planner Dashboard</h1>
        </div>
        <div className='flex mt-10 w-5/6 mx-auto justify-between align-middle'>
          <section className="flex flex-col justify-center mx-5 hover:scale-125 transition duration-500 cursor-pointer">
            <Link to={"/Notas"}>
              <img src='https://i.pinimg.com/originals/8e/1b/d9/8e1bd9dfbca01b7ab7fdaceaad51ebd1.png' className='w-40 h-40 rounded-t-xl' />
              <button className=' text-lg font-medium italic w-full hover:bg-zinc-100 p-1'>Notas</button>
            </Link>
          </section>
          <section className="flex flex-col justify-center mx-5 hover:scale-125 transition duration-500 cursor-pointer">
            <Link to={"/Tareas"}>
              <img src='https://i.pinimg.com/originals/82/cd/7c/82cd7c4e0b086f658841c11830c14337.jpg' className='w-40 h-40 rounded-t-xl' />
              <button className=' text-lg font-medium italic w-full hover:bg-zinc-100 p-1'>Tareas</button>
            </Link>
          </section>
          <section className="flex flex-col justify-center mx-5 hover:scale-125 transition duration-500 cursor-pointer">
            <Link to={"/Traductor"}>
              <img src='https://i.pinimg.com/736x/c7/79/0e/c7790ef8c56815db7485293ad6356435.jpg' className='w-40 h-40 rounded-t-xl' />
              <button className=' text-lg font-medium italic w-full hover:bg-zinc-100 p-1'>Traductor</button>
            </Link>
          </section>
          <section className="flex flex-col justify-center mx-5 hover:scale-125 transition duration-500 cursor-pointer">
            <Link to={"/Nube"}>
              <img src='https://i0.wp.com/guitarandlace.com/wp-content/uploads/2020/09/Google-Drive-1.jpg?ssl=1' className='w-40 h-40 rounded-t-xl' />
              <button className=' text-lg font-medium italic w-full hover:bg-zinc-100 p-1'>Google Drive</button>
            </Link>
          </section>
          {/* <section className="flex flex-col justify-center mx-5">
            <img src='https://i.pinimg.com/originals/f8/26/78/f82678f3b71cc142aaed571f9f05ef8b.png' className='w-40 h-40 rounded-t-xl' />
            <button className=' text-lg font-medium italic w-full hover:bg-zinc-100 p-1'></button>
          </section> */}
        </div>
        <section className="w-5/6 mx-auto my-20 flex">
          <div className='w-1/2'>
            <div className='my-5 w-full'>
              <Reloj />
            </div>
            <div className='my-5 w-full'>
              <Motivacion />
            </div>
          </div>
        </section>
      </main>
    </div >

  )
}

export default Home