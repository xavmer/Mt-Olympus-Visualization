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
                        The Hierarchy and Relationships of the Olympian gods
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
                        Click on a deity to learn more about their relationships and myths
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
                                    <strong>Purpose & POV:</strong><br />
                                    This project argues that the power structure of Mount Olympus is fascinating because it is not cut and dry, but a complex web of familial obligations, alliances, and domains. By visualizing the gods as nodes in a network, we can see that no god rules in isolation, and has a deep web of relationships and families that make the classical theistic system fascinating and complex. Unlike other more linear theistic systems, the Olympian gods are particularly interesting and full of life, story and tradition, and this project shows how complex and interconnected the gods are. There is not a simplistic family tree, or a theistic system where one god controls everything, but one where every god has a very real purpose and domain they control. Each god has a valuable spot on the mountain, and that is why they are distributed across, with their necessary positions in classical life. These relationships help shape the mythological and narrative landscape of classics, and I hope my project can help visualize that in a unique and modern way. 
                                </p>
                                <p>
                                    <strong>Project Commentary:</strong><br />
                                    I decided to make a web application to visualize Mt. Olympus and how its godly residents interact because I was really interested in the gods and how they have such intricate and numerous relationships with each other, as well as how Odysseus and other mortals interact with them. I remember while working on discussion posts and other assignments related to the Odyssey, I would find myself scrolling through the OEACD and the Theoi Project, reading the stories about the gods. This interest was expanded upon as I read more of the Odyssey, and I wanted to combine that with my interest in Computer Science and software development. Over the summer and this semester, I have become more familiar with web development and decided to create a Next.js project, using React frameworks and Typescript. I styled it using Tailwind CSS and Three.js for 3D objects, and stored the datasets locally. These elements, I was familiar with and wanted to both enhance my skill in them through this project, and also utilize them to create a unique and technologically neat representation of my learning this semester in CC 303. I started by just mapping the 12-13 main gods of Mt. Olympus, and slowly moved to add other characters, such as Penelope and Odysseus. I ran into some difficulties programming and developing the project, as one might with a complex project like this, but I was able to overcome them and create a project that runs smoothly and looks good, as well. I used emojis to symbolize each god or hero as well, which I thought enhanced the visualization and could give a viewer an idea of what the god’s purpose and duties are, simply from that icon. I also had challenges figuring out how to source my data, but using the Odyssey and Hesiod’s Theogony, I was able to figure out my project’s gods and relationships. In the Future, I would love to add more heroes, more gods, and more myths and stories to tie them together. This project has infinite room for expansion (at least until we run out of classic stories), and it would be really cool to continuously update and enhance the project. I think if I ever take another classics course, adding more gods and heroes that I learn about could be really cool for visualizing how their theistic relationships and families work. Overall, I learned a lot, artistically, technically, and of course in classics, and I am really excited to have this project under my belt and share my knowledge.    
                                </p>
                                <p className="text-sm italic text-gray-500 mt-8 border-t border-gray-800 pt-4">
                                    Tech Stack: Next.js, React, Tailwind CSS, Framer Motion, three.js
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
                                    Homer. <em>The Odyssey</em>. Translated by Johnston, Ian, Vancouver Island University Press, 2002.
                                </p>
                                <p>
                                    Ovid. <em>Metamorphoses</em>. Translated by More, Brookes, Cornhill Publishing Co. 1922..
                                </p>
                                <p>
                                    Anonymous Authors. <em>Homeric Hymns</em>. Translated by Evelyn-White, H.G., Harvard University Press, 1914, https://www.theoi.com/Text/HomericHymns1.html.
                                </p>
                                <p className="text-sm italic text-gray-500 mt-8 border-t border-gray-800 pt-4">
                                    Images from Open Source Unicode Emojis
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div >
    );
}
