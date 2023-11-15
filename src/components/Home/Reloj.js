// Importa las bibliotecas necesarias
import React, { useEffect, useState } from 'react';

function Reloj() {
    const [hora, setHora] = useState('');
    const [minutos, setMinutos] = useState('');
    const [segundos, setSegundos] = useState('');
    const [ampm, setAMPM] = useState('');
    const [diaSemana, setDiaSemana] = useState('');
    const [dia, setDia] = useState('');
    const [mes, setMes] = useState('');
    const [anio, setAnio] = useState('');

    useEffect(() => {
        const actualizarHora = () => {
            const fecha = new Date();
            const hora = fecha.getHours();
            const minutos = fecha.getMinutes();
            const segundos = fecha.getSeconds();
            const diaSemana = fecha.getDay();
            const dia = fecha.getDate();
            const mes = fecha.getMonth();
            const anio = fecha.getFullYear();
            let ampm;

            const semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
            const meses = [
                'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
            ];

            setDiaSemana(semana[diaSemana]);
            setDia(dia);
            setMes(meses[mes]);
            setAnio(anio);

            if (hora >= 12) {
                setAMPM('PM');
            } else {
                setAMPM('AM');
            }

            const formattedHour = hora === 0 ? 12 : hora > 12 ? hora - 12 : hora;
            setHora(formattedHour < 10 ? '0' + formattedHour : formattedHour.toString());
            setMinutos(minutos < 10 ? '0' + minutos : minutos.toString());
            setSegundos(segundos < 10 ? '0' + segundos : segundos.toString());
        };

        actualizarHora();
        const intervalo = setInterval(actualizarHora, 1000);

        return () => clearInterval(intervalo);
    }, []);

    return (
        <div className="bg-zinc-800 text-white p-8 rounded-md shadow-md">
            <div className="text-3xl mb-4">
                {`${diaSemana} ${dia} de ${mes} del ${anio}`}
            </div>
            <div className="text-5xl font-bold">
                {`${hora}:${minutos}:${segundos} ${ampm}`}
            </div>
        </div>
    );
}

export default Reloj;
