import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons';

const Player = ({ setSongs, setCurrentSong, songs, currentSong, isPlaying, setIsPlaying, songInfo, setSongInfo, audioRef }) => {
    useEffect(() => {
        const newSongs = songs.map((song) => {
            if (song.id === currentSong.id) {
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
    }, [currentSong]);

    const playSongHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        } else {
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }

    }

    const getTime = (time) => {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }
    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({
            ...songInfo,
            currentTime: e.target.value,

        })
    }
    const skipSongHandler = (direction) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        if (direction === "skip-forward") {
            setCurrentSong(songs[(currentIndex + 1) % songs.length]);
        }
        if (direction === "skip-back") {
            if ((currentIndex - 1) % songs.length === -1) {
                setCurrentSong(songs[songs.length - 1]);
                //return;
            } else {
                setCurrentSong(songs[(currentIndex - 1) % songs.length]);
            }

        }
    }
    return (
        <div className="player-container">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input min={0} max={songInfo.duration} value={songInfo.currentTime} onChange={dragHandler} type="range" />
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-controls">

                <FontAwesomeIcon onClick={() => skipSongHandler("skip-back")} className="skip-back" size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={isPlaying ? faPause : faPlay} />
                <FontAwesomeIcon onClick={() => skipSongHandler("skip-forward")} className="skip-forward" size="2x" icon={faAngleRight} />
            </div>

        </div>
    )
}

export default Player;
