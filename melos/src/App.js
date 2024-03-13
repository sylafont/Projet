import { useEffect, useState } from "react";
import {
  getUserData,
  isLogged,
  loginSpotify,
  logoutSpotify,
  refreshSpotify,
  getTopTracks
} from "./spotify";

import {MyChoiceofNumber} from "./User"

function App() {
  const [user, setUser] = useState();
  const [topTracks, setTopTracks] = useState()
  const [nb_tracks, setnb_Tracks] = useState(1)


  const handleChange = (event) => {
    setnb_Tracks(event.target.value);
    };

    useEffect(() => {
      getUserData().then(setUser);
      getTopTracks(nb_tracks).then(setTopTracks);
    }, [nb_tracks]);
  

  return (
    <>
      <h1>API Spotify</h1>
      <button onClick={loginSpotify}>login</button>
      <button onClick={logoutSpotify}>logout</button>
      <button onClick={refreshSpotify}>refresh</button>
      <MyChoiceofNumber handleChange={handleChange} nb_tracks={nb_tracks}/>
      {isLogged() ? (
        <p>You are logged as {user?.display_name}.</p>
      ) : (
        <p>You are not logged.</p>
      )}
      <h2>Get top {nb_tracks} tracks</h2>
      
      <ol>{topTracks?.map(({name, artists}) =><li>{name} by {artists.map(artist => artist.name).join(', ')}</li>)}</ol>


    </>
  );
}

export default App;
