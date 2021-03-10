import React from 'react'

const LibrarySong = ({ song, setCurrentSong, id, audioRef, isPlaying }) => {
    const selectSongHandler = () => {
        //const selectedSong = songs.filter((state) => state.id === id);
        setCurrentSong(song);
        if (isPlaying) {
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.then(
                    (audio) => {
                        audioRef.current.play();
                    }
                );
            }
        }
        audioRef.current.play();
    }
    return (
        <div className={` library-song-container ${song.active ? 'selected' : ""}`} onClick={selectSongHandler}>
            <img src={song.cover} alt="" />
            <div>
                <h3>{song.name}</h3>
                <h5>{song.artist}</h5>
            </div>


        </div>
    )
}

export default LibrarySong
