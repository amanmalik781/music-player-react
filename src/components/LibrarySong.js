import React from 'react'

const LibrarySong = ({ setSongs, songs, song, setCurrentSong, id, audioRef, isPlaying }) => {
    const selectSongHandler = () => {
        //const selectedSong = songs.filter((state) => state.id === id);
        setCurrentSong(song);
        //add active state
        const newSongs = songs.map((song) => {
            if (song.id === id) {
                return {
                    ...song,
                    active: true

                }
            } else {
                return {
                    ...song,
                    active: false
                }
            }

        });
        setSongs(newSongs);
        //check if the song is playing
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
