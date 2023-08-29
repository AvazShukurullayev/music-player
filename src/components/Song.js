import "../styles/_song.scss"

const Song = ({currentSong}) => {
    return (
        <div className="song-container">
            <img className="song-img" src={currentSong.cover} alt={currentSong.name} />
            <h1 className="song-title">{currentSong.name}</h1>
            <p className="song-subtitle">{currentSong.artist}</p>
        </div>
    )
}

export default Song