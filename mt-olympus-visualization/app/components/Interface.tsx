"use client";

import { motion, AnimatePresence } from "framer-motion";
import { God, Relationship, gods } from "../data/gods";
import { useState } from "react";

interface InterfaceProps {
    selectedGod: God | null;
    onCloseSelection: () => void;
}

export default function Interface({ selectedGod, onCloseSelection }: InterfaceProps) {
    const [showCommentary, setShowCommentary] = useState(false);
    const [showBibliography, setShowBibliography] = useState(false);

    // Helper to find god name by ID
    const getGodName = (id: string) => gods.find(g => g.id === id)?.name || id;

    return (
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-6 z-10 overflow-hidden">

            {/* Header */}
            <header className="pointer-events-auto flex justify-between items-start">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="font-cinzel text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200 drop-shadow-[0_2px_10px_rgba(251,191,36,0.3)]">
                        Mount Olympus
                    </h1>
                    <p className="text-amber-100/70 text-sm md:text-lg italic mt-2 max-w-md font-serif">
                        "Sing, O Muse, of the gods who hold the high peaks of snowy Olympus."
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col gap-2"
                >
                    <button
                        onClick={() => setShowCommentary(true)}
                        className="px-6 py-2 border border-amber-500/50 text-amber-100 rounded-full hover:bg-amber-900/30 transition-all font-serif text-sm backdrop-blur-sm"
                    >
                        Project Commentary
                    </button>
                    <button
                        onClick={() => setShowBibliography(true)}
                        className="px-6 py-2 border border-amber-500/50 text-amber-100 rounded-full hover:bg-amber-900/30 transition-all font-serif text-sm backdrop-blur-sm"
                    >
                        MLA Bibliography
                    </button>
                </motion.div>
            </header>

            {/* Main Content Area - Left empty for 3D view center */}

            {/* Footer / Interaction Hint */}
            {!selectedGod && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center pb-8"
                >
                    <p className="text-white/50 animate-pulse font-light tracking-widest text-sm uppercase">
                        Click on a deity to reveal their mysteries
                    </p>
                </motion.div>
            )}

            {/* God Detail Panel */}
            <AnimatePresence>
                {selectedGod && (
                    <motion.div
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "100%", opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="pointer-events-auto absolute right-0 top-0 bottom-0 w-full md:w-[450px] bg-black/60 backdrop-blur-xl border-l border-white/10 p-8 overflow-y-auto custom-scrollbar shadow-2xl"
                    >
                        <button
                            onClick={onCloseSelection}
                            className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>

                        <div className="mt-12 space-y-8">
                            {/* Identity */}
                            <div>
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="w-20 h-20 rounded-full flex items-center justify-center text-4xl bg-gradient-to-br from-white/10 to-transparent border border-white/20 mb-4 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                                    style={{ borderColor: selectedGod.color, boxShadow: `0 0 20px ${selectedGod.color}40` }}
                                >
                                    {selectedGod.symbol}
                                </motion.div>
                                <h2 className="font-cinzel text-4xl text-white font-bold mb-1">{selectedGod.name}</h2>
                                <div className="flex gap-4 text-sm text-white/50 mb-2 font-serif">
                                    <span>{selectedGod.greekName}</span>
                                    <span>•</span>
                                    <span>{selectedGod.romanName}</span>
                                </div>
                                <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border border-white/10 bg-white/5 text-amber-200">
                                    {selectedGod.domain}
                                </div>
                                <div className={`inline-block ml-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border border-white/10 ${selectedGod.role === 'hero' ? 'bg-blue-500/20 text-blue-200' : 'bg-amber-500/20 text-amber-200'}`}>
                                    {selectedGod.role}
                                </div>
                            </div>

                            {/* Description */}
                            <div className="text-gray-300 leading-relaxed font-light">
                                {selectedGod.description}
                            </div>

                            {/* Source Quote */}
                            <div className="border-l-2 border-amber-500/50 pl-4 py-1 italic text-gray-400 text-sm">
                                "{selectedGod.quote}"
                                {selectedGod.quoteSource && (
                                    <div className="block mt-1 text-[10px] not-italic text-amber-500/60 uppercase tracking-widest text-right">
                                        — {selectedGod.quoteSource}
                                    </div>
                                )}
                                <div className="text-amber-500/80 text-xs not-italic mt-2 font-semibold">
                                    — Primary Source: {selectedGod.primarySource}
                                </div>
                            </div>


                            {/* Relationships */}
                            <div>
                                <h3 className="font-cinzel text-xl text-white mb-4 border-b border-white/10 pb-2">Relationships</h3>
                                <div className="space-y-3">
                                    {selectedGod.relationships.map((rel, idx) => (
                                        <div key={idx} className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5 hover:bg-white/10 transition-colors">
                                            <div className="w-2 h-2 rounded-full"
                                                style={{ backgroundColor: rel.type === 'sibling' ? '#60a5fa' : rel.type === 'spouse' ? '#f472b6' : rel.type === 'rival' ? '#ef4444' : '#facc15' }}
                                            />
                                            <div className="flex-1">
                                                <span className="font-bold text-gray-200 block">{getGodName(rel.targetId)}</span>
                                                <span className="text-xs text-gray-400 uppercase tracking-wide block">{rel.description}</span>
                                                <span className="text-[10px] text-white/30 italic block mt-0.5">{rel.source}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Major Myths */}
                            {selectedGod.myths && selectedGod.myths.length > 0 && (
                                <div>
                                    <h3 className="font-cinzel text-xl text-white mb-4 border-b border-white/10 pb-2">Major Myths</h3>
                                    <div className="space-y-4">
                                        {selectedGod.myths.map((myth, idx) => (
                                            <div key={idx} className="bg-white/5 p-4 rounded-lg border border-white/5">
                                                <h4 className="font-bold text-amber-200 mb-1 font-cinzel">{myth.title}</h4>
                                                <p className="text-sm text-gray-300 leading-relaxed mb-2">{myth.description}</p>
                                                <div className="text-xs text-white/40 italic text-right">— {myth.source}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Commentary Modal */}
            <AnimatePresence>
                {showCommentary && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="pointer-events-auto fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="bg-gray-900 border border-white/10 max-w-2xl w-full max-h-[80vh] overflow-y-auto rounded-2xl p-8 shadow-2xl relative"
                        >
                            <button
                                onClick={() => setShowCommentary(false)}
                                className="absolute top-4 right-4 text-gray-500 hover:text-white"
                            >
                                ✕
                            </button>

                            <h2 className="font-cinzel text-3xl text-amber-100 mb-6">Project Commentary: The Hierarchy of Olympus</h2>

                            <div className="prose prose-invert prose-amber max-w-none text-gray-300 space-y-4">
                                <p>
                                    <strong>Clarity of Purpose & Point of View:</strong><br />
                                    This project argues that the power structure of Mount Olympus is not merely a hierarchy of strength, but a complex web of familial obligations, transactional alliances, and clearly delineated domains. By visualizing the gods as nodes in a network, we can see that no god—not even Zeus—rules in isolation.
                                </p>
                                <p>
                                    <strong>Engagement with Mythology:</strong><br />
                                    The visualization relies on the canonical twelve Olympians as described in Hesiod's <em>Theogony</em> and the Homeric Hymns. Particular attention has been paid to the specific epithets and domains (e.g., distinguishing Athena's strategic warfare from Ares's bloodlust).
                                </p>
                                <p>
                                    <strong>Design Philosophy:</strong><br />
                                    The aesthetic choices—dark, atmospheric, using gold and deep purples—reflect the "awesome" (in the dreadful sense) nature of the divine. The interaction design allows the user to explore these connections organically, discovering the narrative of the pantheon through their own curiosity.
                                </p>
                                <p className="text-sm italic text-gray-500 mt-8 border-t border-gray-800 pt-4">
                                    Sources: Hesiod's Theogony, Homer's Iliad & Odyssey, Homeric Hymns.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}

            </AnimatePresence>

            {/* Bibliography Modal */}
            <AnimatePresence>
                {showBibliography && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="pointer-events-auto fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="bg-gray-900 border border-white/10 max-w-2xl w-full max-h-[80vh] overflow-y-auto rounded-2xl p-8 shadow-2xl relative"
                        >
                            <button
                                onClick={() => setShowBibliography(false)}
                                className="absolute top-4 right-4 text-gray-500 hover:text-white"
                            >
                                ✕
                            </button>

                            <h2 className="font-cinzel text-3xl text-amber-100 mb-6">Works Cited</h2>

                            <div className="prose prose-invert prose-amber max-w-none text-gray-300 space-y-4 font-serif pl-8 indent-[-2rem]">
                                <p>
                                    Hesiod. <em>Theogony</em>.  Translated by Evelyn-White, H.G., Harvard University Press, 1914, https://www.theoi.com/Text/HomericHymns1.html.
                                </p>
                                <p>
                                    The British Museum. “Gods and Goddesses of the Greek and Roman Pantheon.” The British Museum, 7 May 2021, www.britishmuseum.org/blog/gods-and-goddesses-greek-and-roman-pantheon.
                                </p>
                                <p>
                                    Homer. <em>The Odyssey</em>. Translated by Ian Johnston, Vancouver Island University Press, 2002.
                                </p>
                                <p>
                                    Anonymous Authors. <em>Homeric Hymns</em>. Translated by Evelyn-White, H.G., Harvard University Press, 1914, https://www.theoi.com/Text/HomericHymns1.html.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div >
    );
}
