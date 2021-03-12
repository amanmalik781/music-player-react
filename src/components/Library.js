import React from 'react'
import LibrarySong from './LibrarySong'

const Library = ({ libraryStatus, setSongs, songs, setCurrentSong, audioRef, isPlaying }) => {
    return (
        <div className={`library-container ${libraryStatus ? 'active-library' : ''}`}>
            <h2>LIBRARY</h2>
            <div className="library-songs">
                {songs.map(song => {
                    return (
                        <LibrarySong
                            setSongs={setSongs}
                            songs={songs}
                            setCurrentSong={setCurrentSong}
                            song={song}
                            id={song.id}
                            audioRef={audioRef}
                            isPlaying={isPlaying}
                        />
                    )

                })}
            </div>


        </div>
    )
}

export default Library
