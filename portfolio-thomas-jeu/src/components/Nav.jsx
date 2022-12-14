import '../style/Nav.scss'

import switch_btn from '../assets/img/switch_btn.svg';
import { Link } from "react-router-dom";

function Nav () {
    const handleClick = () => {
        const html = document.querySelector("html");
        html.classList.toggle("darkMode");
    }

    return (
        <div className="containerNav">
            <div className="nav">
                <div className="dflex w100">
                    <Link to="/">
                        <span><b>19</b>YRS <br/>OLD</span>
                    </Link>
                    <button className="darkModebutton" onClick={handleClick}>
                        <img src={switch_btn} alt="Switch dark mode"/>
                    </button>
                </div>
                <p>Besançon /
                    <br/>Paris
                    <br/>.fr</p>
            </div>
        </div>
    )
}

export default Nav
