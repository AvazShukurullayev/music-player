import "../styles/_librarySong.scss"

const LibrarySong = ({song, setCurrentSong, audioRef, isPlaying, songs, id, setSongs}) => {
    // Adding new songs
    const newSongs = songs.map((song) => {
        if (song.id === id) {
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
    })

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
        setSongs(newSongs)
    }

    return (
        <div className={`library-song ${song.active ? 'selected' : ''}`} onClick={songSelectHandler}>
            <img src={song.cover} alt={song.name}/>
            <h2>{song.name}</h2>
            <p>{song.artist}</p>
        </div>
    )
}

export default LibrarySong