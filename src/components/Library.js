import LibrarySong from "./LibrarySong";
import "../styles/_library.scss"

const Library = ({songs,setCurrentSong}) => {
    return (
        <div className="library">
            <h2 className="library-title">Library</h2>
            <div className="library-box">
                {songs.map(song => <LibrarySong key={song.id} song={song} setCurrentSong={setCurrentSong}/>)}
            </div>
        </div>
    )
}

export default Library