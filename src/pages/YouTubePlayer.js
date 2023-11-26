import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';

const YouTubePlayer = () => {
    const apiKey = 'AIzaSyBpwwuXcXeCJpdjk-vO0i-5tA1Gya1cfeo';
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [loading, setLoading] = useState(false);


    const onSearch = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchTerm}&type=video&key=${apiKey}`
            );

            if (!response.ok) {
                throw new Error('Error searching videos');
            }

            const data = await response.json();
            setSearchResults(data.items);
            setCurrentVideoIndex(0);
            setLoading(false);
        } catch (error) {
            console.error('Error searching videos:', error);
            setLoading(false);
        }
    };

    const onNextClick = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % searchResults.length);
    };

    useEffect(() => {
        if (searchResults.length > 0) {
            setLoading(false);
        }
    }, [searchResults]);

    const opts = {
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
    };

    const onReady = (event) => {
        event.target.playVideo();
    };

    const onEnd = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % searchResults.length);
    };

    return (
        <div className="font-sans w-8/12 mx-auto text-center mt-8 bg-zinc-300 text-white py-8 rounded-xl shadow-md backdrop-blur-3xl bg-opacity-50 backdrop-filter">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-700 via-gray-900 to-black text-transparent bg-clip-text">
                YouTube Video Player
            </h1>
            <div className="flex justify-center mb-4">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Buscar videos..."
                    className="p-2 mr-2 rounded-md border-2 border-gray-500 text-black"
                />
                <button
                    onClick={onSearch}
                    className="px-3 py-2 bg-gray-900 text-white rounded-md hover:bg-zinc-900 focus:outline-none transition"
                >
                    Buscar
                </button>
            </div>
            {loading ? (
                <p>Cargando...</p>
            ) : searchResults.length > 0 ? (
                <div className="grid place-content-center space-y-4">
                    <div className="bg-gray-900 p-6 rounded-md shadow-md">
                        <YouTube
                            videoId={searchResults[currentVideoIndex].id.videoId}
                            opts={opts}
                            onReady={onReady}
                            onEnd={onEnd}
                        />
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
            ) : (
                <p>No se encontraron resultados</p>
            )}
        </div>
    );
};

export default YouTubePlayer;
