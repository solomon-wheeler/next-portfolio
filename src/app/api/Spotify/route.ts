/* eslint-disable no-console */

import axios from 'axios';
import dotenv from 'dotenv';
import qs from 'qs';

dotenv.config();

export async function GET(req: any) {
  const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFTY_REFRESH_TOKEN } =
    process.env;

  if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET) {
    return new Response(
      JSON.stringify({ error: 'Missing Spotify API credentials' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }

  try {
    const response = await axios({
      url: 'https://accounts.spotify.com/api/token',
      method: 'post',
      data: qs.stringify({
        grant_type: 'refresh_token',
        refresh_token: SPOTIFTY_REFRESH_TOKEN,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          'Basic ' +
          Buffer.from(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET).toString(
            'base64',
          ),
      },
    });

    const accessToken = response.data.access_token;
    const currentlyPlayingResponse = await axios({
      url: 'https://api.spotify.com/v1/me/player/currently-playing',
      method: 'get',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (
      currentlyPlayingResponse.status === 200 &&
      currentlyPlayingResponse.data?.item
    ) {
      console.log('Currently playing song found');
      const currentlyPlayingSong = currentlyPlayingResponse.data.item;
      const currentlyPlayingSongName = currentlyPlayingSong.name;
      const currentlyPlayingSongArtist = currentlyPlayingSong.artists[0].name;
      const currentlyPlayingSongAlbumCover =
        currentlyPlayingSong.album.images[0].url;

      return new Response(
        JSON.stringify({
          song: currentlyPlayingSongName,
          artist: currentlyPlayingSongArtist,
          albumCover: currentlyPlayingSongAlbumCover,
          type: 'currently-playing',
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-store, max-age=0',
          },
        },
      );
    } else {
      console.log('No currently playing song found');
      console.log(currentlyPlayingResponse);
    }

    const recentlyPlayedResponse = await axios({
      url: 'https://api.spotify.com/v1/me/player/recently-played?limit=1',
      method: 'get',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const recentlyPlayedSong = recentlyPlayedResponse.data.items[0].track;
    const recenntlyPlayedSongName = recentlyPlayedSong.name;
    const recentlyPlayedSongArtist = recentlyPlayedSong.artists[0].name;
    const recentlyPlayedSongAlbumCover = recentlyPlayedSong.album.images[0].url;
    console.log('Recently playing song found');

    return new Response(
      JSON.stringify({
        song: recenntlyPlayedSongName,
        artist: recentlyPlayedSongArtist,
        albumCover: recentlyPlayedSongAlbumCover,
        type: 'recently-played',
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store, max-age=0',
        },
      },
    );
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ error: 'There was an error calling the spotify api' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store, max-age=0',
        },
      },
    );
  }
}

export const revalidate = 0;
