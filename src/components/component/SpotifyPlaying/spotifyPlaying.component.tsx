import React, { useState, useEffect } from 'react';
import './spotifyPlaying.style.css';

export const SpotifyPlaying = () => {
  const [song, setSong] = useState('Getting data from spotify...');
  const [artist, setArtist] = useState('');
  const [albumCover, setAlbumCover] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/Spotify', { cache: 'no-store' });
        const data = await response.json();
        setSong(data.song);
        setArtist(data.artist);
        setAlbumCover(data.albumCover);
      } catch (error) {
        setSong('Nothing playing right now');
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <section className="py-12 md:py-24 lg:py-32 xl:py-48" key="spotifysection">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:gap-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black dark:text-white">
            {isLoading ? 'Loading...' : '🎧Currently playing'}
          </h2>
          <div className="flex flex-col sm:flex-row md:flex-row items-center">
            {!isLoading && albumCover && (
              <div className="relative w-24 h-24 sm:w-5 sm:h-5 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 sm:mr-4 spin-slow mb-4 sm:mb-0">
                <img
                  src={albumCover}
                  alt="Album Cover"
                  className="w-full h-full object-cover rounded-full album-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2 h-2 sm:w-1 sm:h-1 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 bg-white dark:bg-black rounded-full"></div>
                </div>
              </div>
            )}
            <div className="flex flex-col flex-grow-0">
              <p className="text-gray-500 text-2xl md:text-3xl lg:text-2xl xl:text-3xl dark:text-gray-400">
                {song} - {artist}
              </p>
              {!isLoading && (
                <div
                  className="flex space-x-1 sm:space-x-2 md:space-x-4 mt-1"
                  style={{ transform: 'scaleY(-1)' }}
                >
                  {Array(15)
                    .fill(null)
                    .map((_, i) => (
                      <div
                        className="h-8 sm:h-12 md:h-20 lg:h-24 xl:h-28 relative w-1 sm:w-1.5 md:w-2 mx-0.5 sm:mx-1 md:mx-2 lg:mx-3 xl:mx-3"
                        key={i}
                      >
                        <div
                          key={i}
                          className={`w-0.5 sm:w-1 md:w-1.5 lg:w-2 xl:w-2.5 h-1 bg-lightblue rounded`}
                          style={{
                            animation: `equalizer ${((i % 5) + 1) * 350}ms infinite`,
                            height: '1rem',
                          }}
                        />
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
