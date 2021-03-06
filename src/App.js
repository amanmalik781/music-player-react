import './styles/app.scss';

import Player from "./components/Player";
import Song from "./components/Song";
import chillHop from "./data";
import { useRef, useState } from 'react';
import Library from './components/Library';
import Nav from './components/Nav';

function App() {
  const [songs, setSongs] = useState(chillHop());
  //console.log(songs);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0
  });
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration || 0;
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration: duration,
    })
  }


  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />
      <Library
        libraryStatus={libraryStatus}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
        songs={songs}
        audioRef={audioRef}
        isPlaying={isPlaying}

      />
      <audio onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
}

export default App;

