
export interface Relationship {
    targetId: string;
    type: "sibling" | "spouse" | "child" | "parent" | "lover" | "rival";
    description: string;
}

export interface God {
    id: string;
    name: string;
    greekName: string;
    romanName: string;
    symbol: string;
    domain: string;
    description: string;
    primarySource: string;
    quote?: string;
    color: string;
    pos: [number, number, number]; // x, y, z coordinates in 3D space relative to Olympus peak
    relationships: Relationship[];
}

export const gods: God[] = [
    {
        id: "zeus",
        name: "Zeus",
        greekName: "Zeus (Ζεύς)",
        romanName: "Jupiter",
        symbol: "⚡",
        domain: "King of Gods, Sky, Thunder, Law",
        description: "The ruler of Mount Olympus, who enforces justice and governs the universe. His power represents the supreme patriarchal order of the cosmos.",
        primarySource: "Hesiod, Theogony 453-458; Homer, Iliad 1.503-530",
        quote: "Sing, goddess, the anger of Peleus' son Achilleus... and the plan of Zeus was accomplished.",
        color: "#facc15", // yellow-400
        pos: [0, 4.5, 0],
        relationships: [
            { targetId: "hera", type: "spouse", description: "Sister and Wife" },
            { targetId: "poseidon", type: "sibling", description: "Brother" },
            { targetId: "hades", type: "sibling", description: "Brother" },
            { targetId: "athena", type: "child", description: "Daughter (born from head)" },
            { targetId: "ares", type: "child", description: "Son" },
        ],
    },
    {
        id: "hera",
        name: "Hera",
        greekName: "Hera (Ἥρα)",
        romanName: "Juno",
        symbol: "👑",
        domain: "Queen of Gods, Marriage, Women, Childbirth",
        description: "Protector of marriage and queen of Olympus. Known for her jealousy and vengeance against Zeus's lovers, defending the sanctity of her domain.",
        primarySource: "Homer, Iliad 14.153-353; Hesiod, Theogony 921",
        color: "#f0abfc", // fuchsia-300
        pos: [1.2, 4.0, -0.5],
        relationships: [
            { targetId: "zeus", type: "spouse", description: "Husband and Brother" },
            { targetId: "ares", type: "child", description: "Son" },
            { targetId: "hephaestus", type: "child", description: "Son" },
        ],
    },
    {
        id: "poseidon",
        name: "Poseidon",
        greekName: "Poseidon (Ποσειδῶν)",
        romanName: "Neptune",
        symbol: "🌊",
        domain: "Sea, Earthquakes, Horses",
        description: "Lord of the seas. His mood is as changeable as the ocean, capable of creating calm seas or violent storms.",
        primarySource: "Homer, Odyssey 5.282-296; Hesiod, Theogony 453-458",
        color: "#38bdf8", // sky-400
        pos: [-2.5, 2.0, 2.0],
        relationships: [
            { targetId: "zeus", type: "sibling", description: "Brother" },
            { targetId: "hades", type: "sibling", description: "Brother" },
        ],
    },
    {
        id: "demeter",
        name: "Demeter",
        greekName: "Demeter (Δημήτηρ)",
        romanName: "Ceres",
        symbol: "🌾",
        domain: "Agriculture, Harvest, Sacred Law",
        description: "Goddess of the harvest who presides over grains and the fertility of the earth. Her grief over Persephone causes the winter.",
        primarySource: "Homeric Hymn to Demeter",
        color: "#bef264", // lime-300
        pos: [-1.5, 1.5, -2.5],
        relationships: [
            { targetId: "zeus", type: "sibling", description: "Sister & Mother of Persephone" },
        ],
    },
    {
        id: "athena",
        name: "Athena",
        greekName: "Athena (Ἀθηνᾶ)",
        romanName: "Minerva",
        symbol: "🦉",
        domain: "Wisdom, Handicraft, Warfare",
        description: "The strategic aspect of war and patron of heroic endeavor. Born fully armed from the head of Zeus.",
        primarySource: "Hesiod, Theogony 886-900; Homer, Iliad 5.733-747",
        color: "#e2e8f0", // slate-200 (silver/grey for wisdom/armor)
        pos: [1.5, 3.2, 2.0],
        relationships: [
            { targetId: "zeus", type: "parent", description: "Father" },
            { targetId: "ares", type: "rival", description: "Strategic vs Chaotic War" },
        ],
    },
    {
        id: "apollo",
        name: "Apollo",
        greekName: "Apollo (Ἀπόλλων)",
        romanName: "Apollo",
        symbol: "🌞",
        domain: "Sun, Light, Oracles, Music, Healing",
        description: "Leader of the Muses and god of prophecy. He represents order, harmony, and civilization.",
        primarySource: "Homeric Hymn to Apollo",
        color: "#fcd34d", // amber-300
        pos: [-1.0, 3.0, -3.0],
        relationships: [
            { targetId: "zeus", type: "parent", description: "Father" },
            { targetId: "artemis", type: "sibling", description: "Twin Sister" },
        ],
    },
    {
        id: "artemis",
        name: "Artemis",
        greekName: "Artemis (Ἄρτεμις)",
        romanName: "Diana",
        symbol: "🏹",
        domain: "Hunt, Wilderness, Moon, Archery",
        description: "Protector of young girls and goddess of the hunt. She values independence and the wild places.",
        primarySource: "Homeric Hymn to Artemis; Callimachus, Hymn to Artemis",
        color: "#c084fc", // purple-400 (moon/night vibe)
        pos: [2.5, 2.5, -2.5],
        relationships: [
            { targetId: "zeus", type: "parent", description: "Father" },
            { targetId: "apollo", type: "sibling", description: "Twin Brother" },
        ],
    },
    {
        id: "ares",
        name: "Ares",
        greekName: "Ares (Ἄρης)",
        romanName: "Mars",
        symbol: "⚔️",
        domain: "War, Bloodshed, Violence",
        description: "The physical and untamed aspect of war. Often despised by the other gods for his bloodlust.",
        primarySource: "Homer, Iliad 5.890-898",
        color: "#ef4444", // red-500
        pos: [-2.0, 1.5, 3.0],
        relationships: [
            { targetId: "zeus", type: "parent", description: "Father" },
            { targetId: "hera", type: "parent", description: "Mother" },
            { targetId: "aphrodite", type: "lover", description: "Lover" },
        ],
    },
    {
        id: "aphrodite",
        name: "Aphrodite",
        greekName: "Aphrodite (Ἀφροδίτη)",
        romanName: "Venus",
        symbol: "🌹",
        domain: "Love, Beauty, Desire",
        description: "Born from the sea foam (or daughter of Dione). Her power is irresistible, even to Zeus.",
        primarySource: "Hesiod, Theogony 188-206; Homeric Hymn to Aphrodite",
        color: "#f9a8d4", // pink-300
        pos: [2.0, 1.8, 3.5],
        relationships: [
            { targetId: "hephaestus", type: "spouse", description: "Husband" },
            { targetId: "ares", type: "lover", description: "Lover" },
        ],
    },
    {
        id: "hephaestus",
        name: "Hephaestus",
        greekName: "Hephaestus (Ἥφαιστος)",
        romanName: "Vulcan",
        symbol: "🔥",
        domain: "Blacksmiths, Craftsmen, Fire",
        description: "The lame god of the forge. He builds the magnificent palaces of the gods on Olympus.",
        primarySource: "Homer, Iliad 18.368-617",
        color: "#fb923c", // orange-400
        pos: [3.0, 1.0, 1.0],
        relationships: [
            { targetId: "hera", type: "parent", description: "Mother" },
            { targetId: "aphrodite", type: "spouse", description: "Wife" },
        ],
    },
    {
        id: "hermes",
        name: "Hermes",
        greekName: "Hermes (Ἑρμῆς)",
        romanName: "Mercury",
        symbol: "🕊️",
        domain: "Messenger, Trade, Thieves, Travelers",
        description: "The trickster god and messenger between realms. He guides souls to the Underworld.",
        primarySource: "Homeric Hymn to Hermes",
        color: "#67e8f9", // cyan-300
        pos: [-1.5, 2.8, -1.0],
        relationships: [
            { targetId: "zeus", type: "parent", description: "Father" },
        ],
    },
    {
        id: "hades",
        name: "Hades",
        greekName: "Hades (Ἅιδης)",
        romanName: "Pluto",
        symbol: "💀",
        domain: "Underworld, Dead, Riches",
        description: "Ruler of the Underworld. While not traditionally resident on Olympus, his influence is fundamental to the cosmic balance.",
        primarySource: "Homeric Hymn to Demeter; Hesiod, Theogony 453-458",
        color: "#a78bfa", // violet-400
        pos: [0, -1.0, 0], // Below the others
        relationships: [
            { targetId: "zeus", type: "sibling", description: "Brother" },
            { targetId: "poseidon", type: "sibling", description: "Brother" },
        ],
    },
];
