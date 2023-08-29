import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight, faPause, faPlay} from "@fortawesome/free-solid-svg-icons";
import "../styles/_player.scss"
import { useRef, useState} from "react";

const Player = ({currentSong, isPlaying, setIsPlaying}) => {
    // Ref
    const audioRef = useRef(null)
    // Event handlers function bosilganda muzika qoyilsin
    const playSongHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying)
        } else {
            audioRef.current.play()
            setIsPlaying(!isPlaying)
        }
    }

    // State ashula haqida ma'lumot
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0
    })

    // Function
    const timeUpdateHandler = (e) => {
        const currentTime = e.target.currentTime;
        const duration = e.target.duration;

        setSongInfo({
            ...songInfo,
            currentTime: currentTime,
            duration: duration
        })
    }

    const getTime = (time) => {
        return (Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2))
    }

    const dragFunc = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...setSongInfo, currentTime: e.target.value})
    }

    return (
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input type="range" min="0" max={songInfo.duration} value={songInfo.currentTime} onChange={dragFunc}/>
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="player-control">
                <FontAwesomeIcon className="skip-back" icon={faAngleLeft} size={"2x"}/>
                <FontAwesomeIcon onClick={playSongHandler} className="play" icon={isPlaying ? faPause : faPlay}
                                 size={"2x"}/>
                <FontAwesomeIcon className="skip-forward" icon={faAngleRight} size={"2x"}/>
            </div>
            <audio onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler}
                   ref={audioRef} src={currentSong.audio}></audio>
        </div>
    )
}

export default Player