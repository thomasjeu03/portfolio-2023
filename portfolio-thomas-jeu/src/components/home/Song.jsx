import React from "react";

class Song extends React.Component {
    state = {
        audio: new Audio(this.props.son),
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
            <button onClick={this.playPause} key={this.props.id}
                    className={`song ${this.state.isPlaying ? "isPlaying" : ""}`}>
                <figure className="logo">
                    <img className="notInvert" src={this.props.image}/>
                </figure>
                <div>
                    <b>{this.props.titre}</b>
                    <p className="artiste">{this.props.artiste}</p>
                    <p>{this.state.isPlaying ? "Is Playing..." : ""}</p>
                </div>
                <figure className="bg">
                    <img className="notInvert" src={this.props.image}/>
                </figure>
            </button>
        )
    }
}

export default Song