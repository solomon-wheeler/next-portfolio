import { useState, useEffect } from "react";

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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {isLoading ? "Loading..." : "Currently playing"}
            </h2>

            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {song}
              {" -"} {artist}
            </p>
            <div className="flex space-x-4">
              {Array(30)
                .fill(null)
                .map((_, i) => (
                  <div
                    key={i}
                    className={`h-6 w-1 bg-lightblue rounded animate-pulse duration-${
                      ((i % 5) + 1) * 200
                    }`}
                  ></div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
