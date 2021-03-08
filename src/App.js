import './styles/app.scss';

import Player from "./components/Player";
import Song from "./components/Song";
import chillHop from "./data";
import { useState } from 'react';
import Library from './components/Library';

function App() {
  const [songs, setSongs] = useState(chillHop());
  //console.log(songs);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">

      <Song currentSong={currentSong} />
      <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} />
      <Library setCurrentSong={setCurrentSong} songs={songs} />
    </div>
  );
}

export default App;

