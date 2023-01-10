import svgPaperplane from "../../assets/img/paper_plane.svg";
import CV from "../../assets/pdf/Curriculum_Vitae_Thomas_JEU.pdf"

function Paperplane() {
    return (
        <a href={CV} target="_blank" rel="noopener" className="Paperplane">
            <img src={svgPaperplane} alt=""/>
        </a>
    )
}

export default Paperplane