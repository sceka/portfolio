import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
import "./Avatar.scss";
import * as THREE from "three";

export default function Avatar() {
	const [hovered, setHovered] = useState(false);
	const animationRef = useRef<THREE.AnimationAction | null>(null);

	function Avatar3D() {
		const { scene, animations } = useGLTF("/images/marko-shaking-hands.glb");
		const { actions } = useAnimations(animations, scene);

		useEffect(() => {
			if (hovered) {
				animationRef.current = actions[Object.keys(actions)[0]];
				animationRef.current?.play();
			} else {
				animationRef.current?.stop();
			}
		}, [hovered, actions]);

		// Adjust the position to center the avatar properly
		return (
			<primitive
				object={scene}
				onPointerOver={() => setHovered(true)}
				onPointerOut={() => setHovered(false)}
				scale={6}
				position={[0, -5.7, 0]}
			/>
		);
	}

	return (
		<Canvas
			camera={{ fov: 45, position: [0, 5, 15] }}
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
