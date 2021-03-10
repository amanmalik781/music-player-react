import React from 'react'
import LibrarySong from './LibrarySong'

const Library = ({ songs, setCurrentSong, audioRef, isPlaying }) => {
    return (
        <div className="library-container">
            <h2>LIBRARY</h2>
            <div className="library-songs">
                {songs.map(song => {
                    return (
                        <LibrarySong
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
