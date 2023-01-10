import {useLoader} from "@react-three/fiber";
import {Sphere} from "@react-three/drei";
import {TextureLoader} from "three";
import MapPath from "../../assets/img/snow.jpg";

function SnowBale({rotation, position}) {
    const Map = useLoader(TextureLoader, MapPath)

    return (
        <Sphere rotation={rotation} position={position}>
            <meshPhysicalMaterial
                displacementScale={0.3}
                map={Map}
                color="white"
                clearcoat="0"
                metalness="0"
                thickness=".7"
                transmission="1"
                roughness=".3"/>
        </Sphere>
    );
}
export default SnowBale