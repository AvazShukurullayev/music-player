import "../styles/_librarySong.scss"

const LibrarySong = ({song, setCurrentSong, audioRef, isPlaying}) => {
    const songSelectHandler = () => {
        setCurrentSong(song)
        if (isPlaying) {
            const playPromise = audioRef.current.play()
            if (playPromise !== undefined) {
                playPromise.then((audio) => {
                    console.log("audio promise => ", audio)
                    audioRef.current.play()
                })
            }
        }
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