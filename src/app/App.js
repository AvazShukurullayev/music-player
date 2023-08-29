// Adding Styles
import "../styles/app.scss"
// Adding Components
import Song from "../components/Song";
import Player from "../components/Player";
// Adding data
import data from "../util"
import {useState} from "react";
import Library from "../components/Library";

const App = () => {
    const [songs, setSongs] = useState(data())
    const [currentSong, setCurrentSong] = useState(songs[0])
    const [isPlaying, setIsPlaying] = useState(false)

    return (
        <div className="app">
            <Song currentSong={currentSong}/>
            <Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
            <Library songs={songs} setCurrentSong={setCurrentSong} />
        </div>
    )
}

export default App