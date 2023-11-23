// YouTubePlayer.js
import React, { useEffect, useState } from 'react';

const YouTubePlayer = () => {
    const apiKey = 'AIzaSyBpwwuXcXeCJpdjk-vO0i-5tA1Gya1cfeo'; // Reemplaza con tu clave de API de YouTube
    const playlistId = 'PL_77ETNrRb7Ep0Zv3tQNLNxQgwTsTHNrV'; // Reemplaza con el ID de tu playlist

    const [playlistItems, setPlaylistItems] = useState([]);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

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
            } catch (error) {
                console.error('Error fetching playlist:', error);
            }
        };

        fetchPlaylist();
    }, [playlistId, apiKey]);

    const playNextVideo = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % playlistItems.length);
    };

    return (
        <div>
            <h1>Music Playlist</h1>
            {playlistItems.length > 0 && (
                <div>
                    <iframe
                        width="640"
                        height="360"
                        src={`https://www.youtube.com/embed/${playlistItems[currentVideoIndex].snippet.resourceId.videoId}`}
                        title="YouTube Player"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                    <button onClick={playNextVideo}>Play Next</button>
                </div>
            )}
        </div>
    );
};

export default YouTubePlayer;
