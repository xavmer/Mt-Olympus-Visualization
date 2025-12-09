"use client";

import { useState } from "react";
import OlympusScene from "./components/OlympusScene";
import Interface from "./components/Interface";
import { God } from "./data/gods";

export default function Home() {
  const [selectedGod, setSelectedGod] = useState<God | null>(null);

  return (
    <main className="relative w-full h-screen bg-black overflow-hidden">
      <OlympusScene
        onSelectGod={setSelectedGod}
        selectedGod={selectedGod}
      />
      <Interface
        selectedGod={selectedGod}
        onCloseSelection={() => setSelectedGod(null)}
      />
    </main>
  );
}
