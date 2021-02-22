import React, { useEffect, useState } from 'react';
import './styles/App.css';
import Login from './Login/Login';
import { getTokenFromUrl } from './spotify/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './Comps/DataLayer';
import Player from './Comps/Player';

const spotify = new SpotifyWebApi();

function App() {

  const [{user, token, categories, new_releases, playlists}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {

      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });
      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

      spotify.getNewReleases().then((new_releases) => {
        dispatch({
          type: 'SET_NEW_RELEASES',
          new_releases: new_releases,
        });
      });
      spotify.getCategories().then((categories) => {
        dispatch({
          type: 'SET_CATEGORIES',
          categories: categories,
        });
      });
      spotify.getFeaturedPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        })
      })
    }
  }, []);


  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
