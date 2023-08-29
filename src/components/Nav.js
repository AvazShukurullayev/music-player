import "../styles/_nav.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMusic} from "@fortawesome/free-solid-svg-icons";

const Nav = ({libraryStatus, setLibraryStatus}) => {
    return (
        <nav className="nav">
            <h1 className="nav-title">Spotify clone</h1>
            <button className="btn-library" onClick={() => setLibraryStatus(!libraryStatus)}>
                Library
                <FontAwesomeIcon icon={faMusic}/>
            </button>
        </nav>
    )
}

export default Nav