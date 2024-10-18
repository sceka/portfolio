import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import "./Avatar.scss";

export default function Avatar() {
	function Avatar3D() {
		const { scene } = useGLTF("/images/marko.glb");

		// Adjust the position to center the avatar properly
		return <primitive object={scene} scale={7} position={[0, -8, 0]} />;
	}

	return (
		<Canvas
			camera={{ fov: 45, position: [0, 0, 15] }}
			style={{ width: "100%", height: "100%" }}>
			<ambientLight intensity={1} />
			<directionalLight position={[10, 10, 5]} intensity={1} />
			<Suspense fallback={null}>
				<Avatar3D />
			</Suspense>
			<OrbitControls />
		</Canvas>
	);
}
