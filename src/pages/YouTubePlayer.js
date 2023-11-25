import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';

const YouTubePlayer = () => {
    const apiKey = 'AIzaSyBpwwuXcXeCJpdjk-vO0i-5tA1Gya1cfeo'; // Reemplaza con tu clave de API de YouTube
    const playlistId = 'PL_77ETNrRb7Ep0Zv3tQNLNxQgwTsTHNrV'; // Reemplaza con el ID de tu playlist

    const [playlistItems, setPlaylistItems] = useState([]);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPlaylist = async () => {
            try {
                const response = await fetch(
                    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${playlistId}&key=${apiKey}`
                );

                if (!response.ok) {
                    throw new Error('Error fetching playlist');
                }

                const data = await response.json();
                setPlaylistItems(data.items);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching playlist:', error);
                setLoading(false);
            }
        };

        fetchPlaylist();
    }, [playlistId, apiKey]);

    const opts = {
        height: '360',
        width: '640',
        playerVars: {
            autoplay: 1, // Autoreproducción al cargar
            controls: 0, // Sin controles del reproductor
            disablekb: 1, // Desactiva el teclado
            enablejsapi: 1, // Habilita la API JavaScript
            iv_load_policy: 3, // Desactiva las anotaciones
            modestbranding: 1, // Modo de marca mínima
            playsinline: 1, // Reproduce el video en línea con el contenido de la página
            showinfo: 0, // Oculta la información del video
            loop: 1, // Repetir la lista de reproducción
        },
    };

    const onReady = (event) => {
        // Reproducir el video cuando esté listo
        event.target.playVideo();
    };

    const onEnd = () => {
        // Reproducir el siguiente video al finalizar el actual
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % playlistItems.length);
    };

    return (
        <div className="font-sans text-center mt-8">
            <h1 className="text-2xl font-bold mb-4">Music Playlist</h1>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                playlistItems.length > 0 && (
                    <div className="grid place-content-center">
                        <YouTube
                            videoId={playlistItems[currentVideoIndex].snippet.resourceId.videoId}
                            opts={opts}
                            onReady={onReady}
                            onEnd={onEnd}
                        />
                    </div>
                )
            )}
        </div>
    );
};

export default YouTubePlayer;
