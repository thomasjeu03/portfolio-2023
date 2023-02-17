import '../style/Nav.scss'

import switch_btn from '../assets/img/switch_btn.svg';
import { Link } from "react-router-dom";

function calculerAge(dateDeNaissance) {
    const aujourdHui = new Date();
    const anneeDeNaissance = new Date(dateDeNaissance).getFullYear();
    const anneeActuelle = aujourdHui.getFullYear();
    let age = anneeActuelle - anneeDeNaissance;

    // ajustement pour les anniversaires déjà passés cette année
    const moisDeNaissance = new Date(dateDeNaissance).getMonth();
    const jourDeNaissance = new Date(dateDeNaissance).getDate();
    if (moisDeNaissance > aujourdHui.getMonth() ||
        (moisDeNaissance === aujourdHui.getMonth() && jourDeNaissance > aujourdHui.getDate())) {
        age--;
    }

    return age;
}

function Nav () {
    const handleClick = () => {
        const html = document.querySelector("html");
        html.classList.toggle("darkMode");
    }

    const dateDeNaissance = '2003-04-02'; // format: YYYY-MM-DD
    const age = calculerAge(dateDeNaissance);

    return (
        <div className="containerNav">
            <div className="nav">
                <div className="dflex w100">
                    <Link to="/">
                        <span><b>{age}</b>YRS <br/>OLD</span>
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
