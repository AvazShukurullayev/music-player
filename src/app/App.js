// Adding Styles
import "../styles/app.scss"
// Adding Components
import {Song, Player, Library, Nav} from "../components"
// Adding data
import data from "../util"
import {useRef, useState} from "react";


const App = () => {
    const [songs, setSongs] = useState(data())
    const [currentSong, setCurrentSong] = useState(songs[0])
    const [isPlaying, setIsPlaying] = useState(false)
    const [libraryStatus, setLibraryStatus] = useState(false)

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
            <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
            <Song currentSong={currentSong}/>
            <Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioRef={audioRef}
                    timeUpdateHandler={timeUpdateHandler} songInfo={songInfo} setSongInfo={setSongInfo}/>
            <Library libraryStatus={libraryStatus} songs={songs} setCurrentSong={setCurrentSong} audioRef={audioRef}
                     isPlaying={isPlaying}
                     setSongs={setSongs}/>
        </div>
    )
}

export default App