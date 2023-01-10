import {useLoader} from "@react-three/fiber";
import {TextureLoader} from "three";
import bgimagePath from "../../assets/img/print-bg.webp";

function GroundPlane({rotation, position}) {
    const bgimage = useLoader(TextureLoader, bgimagePath)
    return (
        <mesh rotation={rotation} position={position}>
            <planeBufferGeometry attach="geometry" args={[25, 19]} />
            <meshBasicMaterial map={bgimage}/>
        </mesh>
    );
}
export default GroundPlane