import React from 'react'

const LibrarySong = ({ song, songs, setCurrentSong, id }) => {
    const selectSongHandler = () => {
        //const selectedSong = songs.filter((state) => state.id === id);
        setCurrentSong(song);
    }
    return (
        <div className="library-song-container" onClick={selectSongHandler}>
            <img src={song.cover} alt="" />
            <div>
                <h3>{song.name}</h3>
                <h5>{song.artist}</h5>
            </div>


        </div>
    )
}

export default LibrarySong
