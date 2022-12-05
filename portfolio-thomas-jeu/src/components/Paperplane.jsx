import svgPaperplane from "../assets/img/paper_plane.svg";

function Paperplane() {
    function openResume () {
        console.log('The paper plane was clicked.');
    }
    return (
        <div onClick={openResume} className="Paperplane">
            <img src={svgPaperplane} alt=""/>
        </div>
    )
}

export default Paperplane