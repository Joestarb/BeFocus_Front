import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';

const YouTubePlayer = () => {
    const apiKey = 'AIzaSyBpwwuXcXeCJpdjk-vO0i-5tA1Gya1cfeo'; // Reemplaza con tu clave de API de YouTube
    const playlistId = 'PL_77ETNrRb7Ep0Zv3tQNLNxQgwTsTHNrV'; // Reemplaza con el ID de tu playlist
    
    
    const [playlistItems, setPlaylistItems] = useState([]);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    const [playerOpts, setPlayerOpts] = useState({
        height: '480',
        width: '853',
        playerVars: {
            autoplay: 1,
            controls: 0,
            disablekb: 1,
            enablejsapi: 1,
            iv_load_policy: 3,
            modestbranding: 1,
            playsinline: 1,
            showinfo: 0,
            loop: 1,
        },
    });

    const onNextClick = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % playlistItems.length);
    };

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
    }, []);

    useEffect(() => {
        const handleResize = () => {
            const isSmallScreen = window.innerWidth < 640;
            const isMediumScreen = window.innerWidth >= 640 && window.innerWidth < 1024;

            if (isSmallScreen) {
                setPlayerOpts({
                    height: '144',
                    width: '256',
                    playerVars: { ...playerOpts.playerVars },
                });
            } else if (isMediumScreen) {
                setPlayerOpts({
                    height: '240',
                    width: '426',
                    playerVars: { ...playerOpts.playerVars },
                });
            } else {
                setPlayerOpts({
                    height: '480',
                    width: '853',
                    playerVars: { ...playerOpts.playerVars },
                });
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Sin dependencias, para que se ejecute solo al montar el componente

    const onReady = (event) => {
        event.target.playVideo();
    };

    const onEnd = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % playlistItems.length);
    };

    return (
        <div className="font-sans mx-auto text-center mt-8 bg-zinc-300 text-white py-8 rounded-xl shadow-md backdrop-blur-3xl bg-opacity-50 backdrop-filter w-11/12 md:w-9/12 xl:w-3/4">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-700 via-gray-900 to-black text-transparent bg-clip-text">
                Music Playlist
            </h1>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                playlistItems.length > 0 && (
                    <div className="grid place-content-center space-y-4 ">
                        <div className='bg-gray-900 p-6 rounded-md shadow-md'>
                            <YouTube videoId={playlistItems[currentVideoIndex].snippet.resourceId.videoId} opts={playerOpts} onReady={onReady} onEnd={onEnd} />
                        </div>
                        <div className="flex justify-center">
                            <button
                                onClick={onNextClick}
                                className="px-3 py-1 bg-gray-900 text-white rounded-full hover:bg-zinc-900 focus:outline-none transition"
                            >
                                Siguiente
                            </button>
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default YouTubePlayer;
