import "../styles/_librarySong.scss"

const LibrarySong = ({song, setCurrentSong}) => {
    const songSelectHandler = () => {
        setCurrentSong(song)
    }
    return (
        <div className="library-song" onClick={songSelectHandler}>
            <img src={song.cover} alt={song.name}/>
            <h2>{song.name}</h2>
            <p>{song.artist}</p>
        </div>
    )
}

export default LibrarySong