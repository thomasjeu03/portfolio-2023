function FillLight({ brightness, color }) {
    return (
        <rectAreaLight
            width={2}
            height={2}
            intensity={brightness}
            color={color}
            position={[0, 5, 10]}
            rotation={[0, 180, 0]}
            castShadow
        />
    );
}

export default FillLight