import Arrow from "../../components/Arrow.jsx";
import React, {useState} from "react";
import {Link} from "react-router-dom";

class CardProject extends React.Component {
    render() {
        return (
            <Link key={this.props.name} to={`/${this.props.name}`} className={`CardProject card ${this.props.newclass}`}>
                <figure className="notInvert">
                    <img src={this.props.image} alt={this.props.name} />
                </figure>
                <Arrow className="notInvert" />
            </Link>
        )
    }
}

export default CardProject