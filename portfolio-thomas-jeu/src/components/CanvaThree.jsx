import {Canvas} from '@react-three/fiber'
import {Box, OrbitControls, Sphere} from "@react-three/drei";
import FillLight from "./threejs/FillLight.jsx";
import GroundPlane from "./threejs/GroundPlane.jsx";
import SnowBale from "./threejs/SnowBale.jsx";

function firstScene () {
     return (
        <Canvas className="CanvaThree">
            <mesh rotation={[5, 0, 0]} position={[0, -10, 0]} >
                <planeBufferGeometry attach="geometry" args={[100000, 100000]} />
                <meshBasicMaterial color="#ec658d"/>
            </mesh>
            <GroundPlane rotation={[5, 0, 0]} position={[0, -6, -.8]} />
            <GroundPlane rotation={[-5, 0, 0]} position={[0, 6, -.8]} />
            <GroundPlane rotation={[0, 0, 0]} position={[0, 0, -5]} />
            <FillLight brightness={2.6} color={"red"} />

            <SnowBale rotation={[0, 0, 0]} position={[0, 0, 0]} />
            <SnowBale rotation={[0, 0, 0]} position={[-4, -2, 1.2]} />
            <SnowBale rotation={[0, 0, 0]} position={[6, 2, -3]} />

            {/*<OrbitControls />*/}
        </Canvas>
    );
}

export default firstScene