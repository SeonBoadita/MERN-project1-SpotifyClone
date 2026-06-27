// import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

const Model3D = () => {
    return (
        <>
            <Canvas style={{ width: "100vw", height: "100vh" }}>
                <mesh>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshBasicMaterial />
                </mesh>
                {/* <OrbitControls /> */}
            </Canvas>
        </>
    )
}

export default Model3D
