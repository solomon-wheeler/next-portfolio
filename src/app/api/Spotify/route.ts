import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import dotenv from "dotenv";
const qs = require("qs");

dotenv.config();

export async function GET(req: any) {
  const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFTY_REFRESH_TOKEN } =
    process.env;

  if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET) {
    return new Response(
      JSON.stringify({ error: "Missing Spotify API credentials" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  try {
    const response = await axios({
      url: "https://accounts.spotify.com/api/token",
      method: "post",
      data: qs.stringify({
        grant_type: "refresh_token",
        refresh_token: SPOTIFTY_REFRESH_TOKEN,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded", // Corrected here
        Authorization:
          "Basic " +
          Buffer.from(SPOTIFY_CLIENT_ID + ":" + SPOTIFY_CLIENT_SECRET).toString(
            "base64"
          ),
      },
    });

    const accessToken = response.data.access_token;

    const recentlyPlayedResponse = await axios({
      url: "https://api.spotify.com/v1/me/player/recently-played?limit=1",
      method: "get",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const recentlyPlayedSong = recentlyPlayedResponse.data.items[0].track.name;

    return new Response(JSON.stringify({ song: recentlyPlayedSong }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
