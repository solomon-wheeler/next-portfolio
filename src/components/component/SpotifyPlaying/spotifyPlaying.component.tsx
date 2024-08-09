import { useState, useEffect } from "react";
import "./spotifyPlaying.styles.css";
export const SpotifyPlaying = () => {
  const [song, setSong] = useState("Getting data from spotify...");
  const [artist, setArtist] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/Spotify");
        const data = await response.json();
        setSong(data.song);
        setArtist(data.artist);
      } catch (error) {
        console.error(error);
        setSong("Nothing playing right now");
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <section className="py-12 md:py-24 lg:py-32 xl:py-48" key="spotifysection">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:gap-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">
              {isLoading ? "Loading..." : "🎧Currently playing"}
            </h2>

            <p className="text-gray-500 pt-10 pb-2 text-2xl md:text-3xl lg:text-2xl xl:text-3xl dark:text-gray-400">
              {" "}
              {song}
              {" -"} {artist}
            </p>
            {!isLoading && (
              <div
                className="flex space-x-4 "
                style={{ transform: "scaleY(-1)" }}
              >
                {Array(20)
                  .fill(null)
                  .map((_, i) => (
                    <div className="h-16 relative w-4 mx-2" key={i}>
                      <div
                        key={i}
                        className={`w-2 bg-lightblue rounded`}
                        style={{
                          animation: `equalizer ${
                            ((i % 5) + 1) * 300
                          }ms infinite`,
                          height: "1rem",
                        }}
                      ></div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
