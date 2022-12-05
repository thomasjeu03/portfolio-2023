import album from "../assets/img/album.webp";

function Song() {
    return (
        <div className="song">
            <figure className="logo">
                <img className="notInvert" src={album}/>
            </figure>
            <div>
                <b>As It Was</b>
                <p>Harry Style</p>
            </div>
        </div>
    )
}

export default Song