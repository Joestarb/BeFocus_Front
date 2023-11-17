import React, { useState } from 'react'
import { useEffect } from 'react';
import useDrivePicker from 'react-google-drive-picker'


function GoogleDrivePicker() {

    const [archivos, setArchivos] = useState([]);
    const [seleccionado, setSeleccionado] = useState(false);


    const [openPicker, authResponse] = useDrivePicker();
    const handleOpenPicker = () => {
        openPicker({
            clientId: "217262335288-jbmsuc27rectrml6t3gon27h96pdfn79.apps.googleusercontent.com",
            developerKey: "AIzaSyDUGE_LkrPZzWKrrM4XY1vnhLlzByiuWmc",
            viewId: "DOCS",
            showUploadView: true,
            token: "ya29.a0AfB_byDiQLJkVjIpszv7vUGfc06_ePk90hKF2UuBIYg1mOeNxYYxUl5pjSrtyO3qthgqFElVMTuc0eJLl5N7iHwHk8_JUTlfkpxaQ73B8FnjJer-TgLX0rXiwfQPoOtUyffu3RlNRDzZeZc8zCq-AhAeI9OYKGUSR2W9aCgYKAa8SARESFQHGX2MiIcp2GqSVxGfhBL9yy0KRwA0171", //Esto lo ponemos por que es necesario dar acceso de dubir archivos a drive por lo que se necesita un token especial de google
            showUploadFolders: true,
            supportDrives: true,
            multiselect: true,
            locale: 'es',
            callbackFunction: (data) => {
                if (data.action === 'cancel') {
                    console.log('User clicked cancel/close button');
                } else if (data.docs && data.docs.length > 0) {
                    // Agrega los nuevos archivos a la lista existente
                    setArchivos((archivos) => [...archivos, ...data.docs]);
                    setSeleccionado(true);
                }
            },
        })
    }

    useEffect(() => {
        console.log('Valor actual de archivo:', archivos);
    }, [archivos]);


    const eliminarArchivo = (id) => {
        // Filtra los archivos para mantener solo los que no tienen el ID especificado
        setArchivos((archivos) => archivos.filter((archivo) => archivo.id !== id));

    };

    return (
        <>
            <div className=''>
                <header className='h-20 flex justify-center bg-zinc-50'>
                    <h1 className='font-PassionOne text-center md:text-6xl text-4xl m-auto md:p-3 w-full py-5 h-20'>Almacenamiento en la nube</h1>
                </header>
            </div>
            {archivos.length > 0 ?
                <div className='w-full h-full flex flex-col align-middle'>
                    <div className='m-5 flex flex-col align-middle'>
                        <button class=" xl:w-5/12 relative m-auto inline-flex items-center justify-center my-5 overflow-hidden text-3xl font-medium text-white rounded-lg bg-[#A4D0A4] outline-none" onClick={() => handleOpenPicker()}>
                            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
                                Seleccionar mas archivos
                            </span>
                        </button>
                    </div>
                    <div className='grid xl:grid-cols-2 gap-4 mx-5'>
                        {archivos.map((archivo) => {
                            return (
                                <div key={archivo.id} className="mb-2 max-w-xl border border-gray-200 rounded bg-[#F5F5F5] shadow h-full flex flex-col">
                                        <div className="p-5 flex flex-col justify-between h-full">
                                            <div>
                                                <a href={archivo.url} target="_blank" rel="noopener noreferrer">
                                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-C393E46 line-clamp-2">{archivo.name}</h5>
                                                </a>
                                                <p className="mb-3 font-semibold text-[#9DB2BF]">Tamaño de archivo: {archivo.sizeBytes}Kb</p>
                                                <p className="mb-3 font-semibold text-[#9DB2BF]">Tipo de archivo: {archivo.mimeType}</p>
                                            </div>
                                            <div className=' flex justify-center'>
                                                <button
                                                    className="text-white font-semibold p-2 rounded-lg bg-CF95757"
                                                    onClick={() => eliminarArchivo(archivo.id)}
                                                >Eliminar</button>
                                            </div>
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                </div>
                :
                <div className='w-full h-full flex flex-col justify-center align-middle'>
                    <button class=" xl:w-2/6  m-auto relative inline-flex items-center justify-center p-3 my-5 overflow-hidden text-3xl font-medium text-white rounded-lg bg-[#A4D0A4]" onClick={() => handleOpenPicker()}>
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
                            Abrir Google Drive
                        </span>
                    </button>
                </div>
            }
        </>

    )
}

export default GoogleDrivePicker