"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Html } from "@react-three/drei";
import { motion } from "framer-motion";
import { useState } from "react";

const gods = [
  { name: "Zeus", symbol: "⚡", domain: "Sky & Thunder", color: "#facc15", pos: [0, 3, 0] },
  { name: "Poseidon", symbol: "🌊", domain: "Sea", color: "#38bdf8", pos: [-2, 1.5, 1] },
  { name: "Hades", symbol: "💀", domain: "Underworld", color: "#a78bfa", pos: [2, 0.5, -1] },
  { name: "Athena", symbol: "🦉", domain: "Wisdom", color: "#f472b6", pos: [1, 2, 2] },
  { name: "Apollo", symbol: "🌞", domain: "Sun & Music", color: "#fcd34d", pos: [-1, 2.2, -2] },
  { name: "Artemis", symbol: "🏹", domain: "Moon & Hunt", color: "#c084fc", pos: [2, 1.5, 2] },
  { name: "Ares", symbol: "⚔️", domain: "War", color: "#ef4444", pos: [-2, 0.8, -2] },
  { name: "Aphrodite", symbol: "🌹", domain: "Love", color: "#f9a8d4", pos: [1, 0.8, 2] },
  { name: "Hermes", symbol: "🕊️", domain: "Travel", color: "#67e8f9", pos: [-1, 1.5, -1.5] },
  { name: "Hephaestus", symbol: "🔥", domain: "Forge", color: "#fb923c", pos: [2, 0.5, 1.5] },
  { name: "Hera", symbol: "👑", domain: "Marriage", color: "#f0abfc", pos: [0, 2.5, -1.5] },
  { name: "Demeter", symbol: "🌾", domain: "Harvest", color: "#bef264", pos: [-1.5, 1, 1.5] },
];

function GodOrb({ god, onClick }: { god: any; onClick: (g: any) => void }) {
  return (
    <mesh position={god.pos} onClick={() => onClick(god)}>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshStandardMaterial emissive={god.color} color={god.color} emissiveIntensity={0.5} />
      <Html center>
        <div className="text-2xl select-none cursor-pointer">{god.symbol}</div>
      </Html>
    </mesh>
  );
}

export default function Olympus3D() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 to-gray-900 text-white relative">
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 3, 10] }}>
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} intensity={1.2} />
          <Stars />
          <OrbitControls />
          
          {/* Mountain (simple cone) */}
          <mesh rotation={[0, 0, 0]}>
            <coneGeometry args={[3, 5, 8]} />
            <meshStandardMaterial color="#ffffff" wireframe />
          </mesh>

          {/* Floating gods */}
          {gods.map((g) => (
            <GodOrb key={g.name} god={g} onClick={setSelected} />
          ))}
        </Canvas>
      </div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-8 w-full text-center text-5xl font-bold tracking-widest drop-shadow-lg font-cinzel"
        >
        Mount Olympus
      </motion.h1>

      {/* Info modal */}
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/60 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gray-900 rounded-2xl p-8 text-center shadow-xl max-w-sm"
          >
            <div className="text-5xl mb-3">{selected.symbol}</div>
            <h2 className="text-2xl font-bold mb-1">{selected.name}</h2>
            <p className="text-gray-300 mb-4">{selected.domain}</p>
            <button
              onClick={() => setSelected(null)}
              className="mt-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </main>
  );
}
