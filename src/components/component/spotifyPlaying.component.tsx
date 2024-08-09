import { useState, ChangeEvent, useEffect } from "react";

export const SpotifyPlaying = () => {
  const [song, setSong] = useState("");

  useEffect(() => {
    fetch("/api/Spotify")
      .then((response) => response.json())
      .then((data) => setSong(data.song));
  }, []);

  return (
    <div>
      <h1>Currently playing: {song}</h1>
    </div>
  );
};
