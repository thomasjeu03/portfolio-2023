import React from "react";

class Song extends React.Component {
    state = {
        audio: new Audio(this.props.track.href),
        isPlaying: false,
    };

    playPause = () => {
        let isPlaying = this.state.isPlaying;
        if (isPlaying) {
            this.state.audio.pause();
        } else {
            this.state.audio.play();
        }
        this.setState({ isPlaying: !isPlaying });
    };

    render() {
        return (
            <button onClick={this.playPause} key={this.props.track.id}
                    className={`song ${this.state.isPlaying ? "isPlaying" : ""}`}>
                {this.props.track.album.images.map((image, index) => (
                    <figure className="logo">
                        <img className="notInvert" src={image.url}/>
                    </figure>
                ))}
                <div>
                <b>{this.props.track.name}</b>
                {this.props.track.artists.map((artist, index) => (
                    <p className="artiste">{artist.name}</p>
                ))}
                <p>{this.state.isPlaying ? "Is Playing..." : ""}</p>
                </div>
                {this.props.track.album.images.map((image, index) => (
                    <figure className="bg">
                        <img className="notInvert" src={image.url}/>
                    </figure>
                ))}
            </button>
        )
    }
}

export default Song