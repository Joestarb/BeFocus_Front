import React, { useState, useEffect } from 'react';
import searchIcon from '../../assets/IconsWeather/search.png';
import clearIcon from '../../assets/IconsWeather/clear.png';
import cloudIcon from '../../assets/IconsWeather/cloud.png';
import drizzleIcon from '../../assets/IconsWeather/drizzle.png';
import rainIcon from '../../assets/IconsWeather/rain.png';
import snowIcon from '../../assets/IconsWeather/snow.png';
import windIcon from '../../assets/IconsWeather/wind.png';
import humidityIcon from '../../assets/IconsWeather/humidity.png';

function Clima() {
  const [clima, setClima] = useState({});
  const [ciudad, setCiudad] = useState('');
  const [ciudadEncontrada, setCiudadEncontrada] = useState('');
  const [ciudadesMexico, setCiudadesMexico] = useState([]);
  const [wicon, setWicon] = useState(clearIcon);
  const [ciudadNoEncontrada, setCiudadNoEncontrada] = useState(false);

  // useEffect(() => {
  //   //Ciudades
  //   const ciudades = [
  //     'Ciudad de México',
  //     'Guadalajara',
  //     'Monterrey',
  //     'Puebla',
  //     'Querétaro',
  //     'Oaxaca',
  //     'Cancún',
  //     'Mérida',
  //     'Tijuana',
  //     'Culiacán',
  //     'Toluca',
  //     'León',
  //     'Chihuahua',
  //     'Mazatlán',
  //     'Acapulco',
  //     'Veracruz',
  //     'Tuxtla Gutiérrez',
  //     'Hermosillo',
  //     'Aguascalientes',
  //     'Morelia',
  //     'Saltillo',
  //     'Mexicali',
  //     'Villahermosa',
  //     'Campeche',
  //     'Tampico',
  //     'Torreón',
  //     'Durango',
  //     'Xalapa',
  //     'Celaya',
  //     'Cuernavaca',
  //     'Matamoros',
  //     'Colima',
  //     'Zacatecas',
  //     'La Paz',
  //     'Pachuca',
  //     'Tlaxcala',
  //     'Chetumal',
  //     'Guaymas',
  //     'Nuevo Laredo',
  //     'Poza Rica',
  //     'Reynosa',
  //     'San Luis Potosí',
  //     'Tapachula',
  //     'Texcoco',
  //     'Zamora',
  //     'Zapopan',
  //     'Irapuato',
  //     'Playa del Carmen',
  //     'Puerto Vallarta',
  //     'Ixtapa-Zihuatanejo',
  //     'Ciudad Obregón',
  //     'Cozumel',
  //     'Nogales',
  //     'Cabo San Lucas',
  //   ];
  //   setCiudadesMexico(ciudades);
  // }, []);

  const buscarInfo = () => {
    console.log('Buscando información....');
    console.log(ciudad);

    // fetch(`https://api.api-ninjas.com/v1/weather?city=${ciudad}`, {
    //   headers: {
    //     'X-Api-Key': '8KQmKfL4EiOZLUWfsodhMA==yHpQScyE6AXBXYXw',
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setClima(data);
    //     console.log(data);
    //     setCiudadEncontrada(ciudad);
    //   })
    //   .catch((err) => console.log(err));
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=64b645d09a472acd4448f03daa49ca22&lang=es&units=metric`)
      .then((res) => res.json())
      .then((data) => {
        setClima(data);

        if (data.cod === "404") {
          // Ciudad no encontrada
          setCiudadNoEncontrada(true);
        } else {
          setCiudadNoEncontrada(false);
        }

        console.log(data);
        setCiudadEncontrada(ciudad);

        if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
          setWicon(clearIcon);
        }
        else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
          setWicon(cloudIcon);
        }
        else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
          setWicon(drizzleIcon);
        }
        else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
          setWicon(rainIcon);
        }
        else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
          setWicon(rainIcon);
        }
        else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
          setWicon(snowIcon);
        }
        else {
          setWicon(clearIcon);
        }

      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='bg-gradient-to-b from-[#614BC3] via-[#64CCC5] to-[#85E6C5] rounded-xl w-full h-full'>
      {/* Buscador */}
      <div className='flex justify-center items-center pt-10'>
        {/* <select
          className='py-4 px-6 rounded-3xl w-4/6 no-underline border-none outline-none'
          onChange={(e) => setCiudad(e.target.value)}
        >
          <option value='' disabled selected>
            Selecciona una ciudad
          </option>
          {ciudadesMexico.map((ciudad) => (
            <option key={ciudad} value={ciudad}>
              {ciudad}
            </option>
          ))}
        </select> */}
        {/* <input className='p-4 rounded-2xl w-4/6 no-underline border-none outline-none m-auto' onChange={(e) => setCiudad(e.target.value)} placeholder='Busca una ciudad' type='text'></input> */}
        <input className='p-4 rounded-2xl w-4/6 no-underline border-none outline-none m-auto' onChange={(e) => setCiudad(e.target.value)} placeholder='Busca una ciudad' type='text'></input>
        <button className=' bg-white p-3 rounded-full flex justify-center align-middle mx-auto cursor-pointer' onClick={buscarInfo}>
          <img src={searchIcon} alt='search icon' className='w-6 h-6 m-auto ' />
        </button>
      </div>
      <div>
        {ciudadEncontrada ? (
          <div className='w-full h-full flex flex-col justify-center align-middle'>
            {!ciudadNoEncontrada ? (
              <>
                <div className='w-full'>
                  <h1 className='text-white text-center mt-5 text-4xl font-semibold'>{`${clima.weather[0].description}`}</h1>
                  <img src={wicon} className='m-auto' alt='Weather Icon' />
                </div>
                <h1 className='text-center text-white text-6xl font-normal mb-5'>{`${clima.main.temp}°`}</h1>
                <h1 className='text-center text-white text-4xl font-semibold'>{`${ciudadEncontrada}`}</h1>
                <div className='w-full flex justify-center my-10'>
                  <div className='w-1/2 m-auto flex flex-col justify-center align-middle items-center'>
                    <img src={humidityIcon} alt='humidity icon' className='m-auto' />
                    <h1 className='text-white text-xl m-auto mt-3 font-semibold'>{`${clima.main.humidity}%`}</h1>
                    <h1 className='text-white text-xl font-semibold m-auto text-center'>Humedad</h1>
                  </div>
                  <div className='w-1/2 m-auto flex flex-col justify-center align-middle items-center'>
                    <img src={windIcon} alt='wind icon' className='m-auto' />
                    <h1 className='text-white text-xl font-semibold m-auto mt-3'>{`${clima.wind.speed} km/h`}</h1>
                    <h1 className='text-white text-xl font-semibold m-auto text-center'>Velocidad del viento</h1>
                  </div>
                </div>
              </>
            ) : (
              <>
                <p className='text-center text-white text-4xl font-semibold m-auto mt-5'>Ciudad no encontrada</p>
                <div className='w-5/6 mx-auto'>
                <img src='https://media.tenor.com/V50UJrfufssAAAAi/cute.gif' className='my-10 m-auto rounded-xl'/>

                </div>
              </>
            )}
          </div>
        ) : (
          <>
            <div className='w-full flex flex-col justify-center align-middle'>
              <img src={"https://media.tenor.com/ywIY7WlJRLwAAAAi/yes-please-sir-waiting.gif"} className='rounded-xl w-80 m-auto' alt='cloud icon' />
              <p className="text-white md:text-3xl font-semibold my-5 mx-auto">Esperando busqueda...</p>
            </div>
            <p className='text-center text-white text-4xl font-semibold'>{null}</p>

          </>
        )}
      </div>

    </div>
  );
}

export default Clima;
