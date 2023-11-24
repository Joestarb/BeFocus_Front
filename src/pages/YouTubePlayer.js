// YouTubePlayer.js
import React, { useEffect, useState } from 'react';

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
                setLoading(false); // Marcamos la carga como completada cuando los datos se obtienen correctamente.
            } catch (error) {
                console.error('Error fetching playlist:', error);
                setLoading(false); // Marcamos la carga como completada incluso si hay un error.
            }
        };

        fetchPlaylist();
    }, [playlistId, apiKey]);

    const playNextVideo = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % playlistItems.length);
    };

    return (
        <div className="font-sans text-center mt-8">
            <h1 className="text-2xl font-bold mb-4">Music Playlist</h1>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                playlistItems.length > 0 && (
                    <div className='grid  place-content-center '>
                        <iframe
                            width="640"
                            height="360"
                            src={`https://www.youtube.com/embed/${playlistItems[currentVideoIndex].snippet.resourceId.videoId}`}
                            title="YouTube Player"

                            allowFullScreen
                            className="mb-4"
                        ></iframe>
                        <button
                            onClick={playNextVideo}
                            className="px-4 py-2 text-white bg-green-500 rounded-md cursor-pointer"
                        >
                            Play Next
                        </button>
                    </div>
                )
            )}
        </div>
    );
};

export default YouTubePlayer;
