"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
    OrbitControls,
    Stars,
    Sparkles,
    Float,
    Text,
    Line,
    Sphere,
    MeshDistortMaterial
} from "@react-three/drei";
import { useState, useRef, useMemo } from "react";
import * as THREE from "three";
import { gods, God } from "../data/gods";

interface OlympusSceneProps {
    onSelectGod: (god: God | null) => void;
    selectedGod: God | null;
}

const ConnectionLine = ({ start, end, color, dashed = false }: { start: [number, number, number], end: [number, number, number], color: string, dashed?: boolean }) => {
    return (
        <Line
            points={[start, end]}
            color={color}
            lineWidth={1.5}
            transparent
            opacity={0.6}
            dashed={dashed}
            dashScale={2}
            dashSize={0.5}
            dashOffset={0}
        />
    );
};

const GodNode = ({ god, isSelected, isRelated, onClick }: { god: God, isSelected: boolean, isRelated: boolean, onClick: (g: God) => void }) => {
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHover] = useState(false);

    // Subtle pulsing if selected
    useFrame((state) => {
        if (meshRef.current && isSelected) {
            meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.1);
        }
    });

    const isActive = isSelected || isRelated;

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <group position={god.pos}>
                <mesh
                    ref={meshRef}
                    onClick={(e) => { e.stopPropagation(); onClick(god); }}
                    onPointerOver={() => setHover(true)}
                    onPointerOut={() => setHover(false)}
                >
                    {/* Main Orb */}
                    <sphereGeometry args={[isSelected ? 0.5 : 0.4, 32, 32]} />
                    <MeshDistortMaterial
                        color={god.color}
                        emissive={god.color}
                        emissiveIntensity={isSelected || hovered ? 0.8 : 0.4}
                        distort={0.4}
                        speed={2}
                        roughness={0.2}
                        metalness={0.8}
                    />
                </mesh>

                {/* Glow Halo */}
                {(isSelected || hovered) && (
                    <mesh scale={1.5}>
                        <sphereGeometry args={[0.4, 32, 32]} />
                        <meshBasicMaterial color={god.color} transparent opacity={0.15} />
                    </mesh>
                )}

                {/* Symbol Label */}
                <Text
                    position={[0, 0.7, 0]}
                    fontSize={0.4}
                    color="white"
                    anchorX="center"
                    anchorY="middle"
                    outlineWidth={0.02}
                    outlineColor="#000000"
                >
                    {god.symbol}
                </Text>

                <Text
                    position={[0, -0.6, 0]}
                    fontSize={0.2}
                    color="#e5e7eb"
                    anchorX="center"
                    anchorY="middle"
                    outlineWidth={0.01}
                    outlineColor="#000000"
                >
                    {god.name}
                </Text>
            </group>
        </Float>
    );
};

export default function OlympusScene({ onSelectGod, selectedGod }: OlympusSceneProps) {
    return (
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-gray-900 via-purple-950 to-black">
            <Canvas camera={{ position: [0, 2, 18], fov: 45 }}>
                <fog attach="fog" args={['#1e1b4b', 5, 30]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffd700" />
                <pointLight position={[-10, 5, -10]} intensity={0.5} color="#4c1d95" />

                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <Sparkles count={200} scale={12} size={2} speed={0.4} opacity={0.5} color="#ffd700" />

                <OrbitControls
                    enablePan={false}
                    minDistance={10}
                    maxDistance={30}
                    maxPolarAngle={Math.PI / 1.5}
                />

                {/* Stylized Olympus Peak */}
                <mesh position={[0, 1.0, 0]} rotation={[0, 0, 0]}>
                    <coneGeometry args={[4, 7, 8]} />
                    <meshStandardMaterial color="#ffffff" wireframe />
                </mesh>

                {/* Ground particles/clouds at base */}
                <Sparkles position={[0, -1, 0]} count={500} scale={[10, 2, 10]} size={5} speed={0.2} opacity={0.2} color="#8b5cf6" />

                {/* Connections */}
                {selectedGod && gods.map((otherGod) => {
                    // Find if connected
                    const rel = selectedGod.relationships.find(r => r.targetId === otherGod.id);
                    if (!rel) return null;

                    let color = "white";
                    let dashed = false;
                    if (rel.type === "spouse") color = "#f472b6"; // Pink
                    if (rel.type === "sibling") color = "#60a5fa"; // Blue
                    if (rel.type === "parent" || rel.type === "child") color = "#facc15"; // Yellow
                    if (rel.type === "rival" || rel.type === "lover") { color = "#ef4444"; dashed = true; } // Red

                    return (
                        <ConnectionLine
                            key={`${selectedGod.id}-${otherGod.id}`}
                            start={selectedGod.pos}
                            end={otherGod.pos}
                            color={color}
                            dashed={dashed}
                        />
                    );
                })}

                {/* Gods */}
                {gods.map((god) => {
                    const isRelated = selectedGod ? selectedGod.relationships.some(r => r.targetId === god.id) : false;
                    return (
                        <GodNode
                            key={god.id}
                            god={god}
                            isSelected={selectedGod?.id === god.id}
                            isRelated={isRelated}
                            onClick={onSelectGod}
                        />
                    );
                })}

                {/* Click background to deselect */}
                <mesh position={[0, 0, -5]} scale={100} visible={false} onClick={() => onSelectGod(null)}>
                    <planeGeometry />
                    <meshBasicMaterial />
                </mesh>
            </Canvas>
        </div>
    );
}
