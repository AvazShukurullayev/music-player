import LibrarySong from "./LibrarySong";
import "../styles/_library.scss"

const Library = ({songs, setCurrentSong, audioRef, isPlaying,setSongs}) => {
    return (
        <div className="library">
            <h2 className="library-title">Library</h2>
            <div className="library-box">
                {songs.map(song => <LibrarySong
                    key={song.id} song={song} setCurrentSong={setCurrentSong}
                    audioRef={audioRef} isPlaying={isPlaying} songs={songs} id={song.id} setSongs={setSongs}
                />)}
            </div>
        </div>
    )
}

export default Library