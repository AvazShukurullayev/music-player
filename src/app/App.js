// Adding Styles
import "../styles/app.scss"
// Adding Components
import Song from "../components/Song";
import Player from "../components/Player";
// Adding data
import data from "../util"
import {useRef, useState} from "react";
import Library from "../components/Library";

const App = () => {
    const [songs, setSongs] = useState(data())
    const [currentSong, setCurrentSong] = useState(songs[0])
    const [isPlaying, setIsPlaying] = useState(false)

    // Ref
    const audioRef = useRef(null)

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
    return (
        <div className="app">
            <Song currentSong={currentSong}/>
            <Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioRef={audioRef}
                    timeUpdateHandler={timeUpdateHandler} songInfo={songInfo} setSongInfo={setSongInfo}/>
            <Library songs={songs} setCurrentSong={setCurrentSong} audioRef={audioRef} isPlaying={isPlaying}/>
        </div>
    )
}

export default App