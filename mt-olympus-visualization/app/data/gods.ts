
export interface Relationship {
    targetId: string;
    type: "sibling" | "spouse" | "child" | "parent" | "lover" | "rival" | "creator" | "mentor" | "nemesis" | "helper";
    description: string;
    source: string;
}

export interface Myth {
    title: string;
    description: string;
    source: string;
}

export interface God {
    id: string;
    name: string;
    greekName: string;
    romanName: string;
    role: "god" | "hero";
    symbol: string;
    domain: string;
    description: string;
    primarySource: string;
    quote?: string;
    quoteSource?: string;
    color: string;
    pos: [number, number, number];
    relationships: Relationship[];
    myths: Myth[];
}

export const gods: God[] = [
    {
        id: "zeus",
        name: "Zeus",
        greekName: "Zeus (Ζεύς)",
        romanName: "Jupiter",
        role: "god",
        symbol: "⚡",
        domain: "King of Gods, Sky, Thunder, Law",
        description: "The ruler and king of Gods, Zeus rules Mt. Olympus, enforces justice and governs the universe. He also controls the weather and is the father of many gods and mortals.",
        primarySource: "Homer, Odyssey 1.63-80; Hesiod, Theogony 453-458",
        quote: "Oh for shame, how the mortals put the blame upon us gods, for they say evils come from us, but it is they, rather, who by their own recklessness win sorrow beyond what is given.",
        quoteSource: "Homer, Odyssey 1.32-34",
        color: "#facc15",
        pos: [0, 4.5, 0],
        relationships: [
            { targetId: "hera", type: "spouse", description: "Sister & Wife", source: "Hesiod, Theogony 921" },
            { targetId: "poseidon", type: "sibling", description: "Brother, The Loud Crashing Earth Shaker", source: "Hesiod, Theogony 453-458" },
            { targetId: "hades", type: "sibling", description: "Brother", source: "Hesiod, Theogony 453-458" },
            { targetId: "athena", type: "child", description: "Daughter (also born from head)", source: "Hesiod, Theogony 886-900" },
            { targetId: "ares", type: "child", description: "Son", source: "Hesiod, Theogony 922" },
            { targetId: "apollo", type: "child", description: "Son (with Leto)", source: "Hesiod, Theogony 918" },
            { targetId: "hermes", type: "child", description: "Son (with Maia)", source: "Hesiod, Theogony 938" },
            { targetId: "odysseus", type: "parent", description: "Divine Ancestor (via Arcesius)", source: "Ovid, Metamorphoses 13" },
        ],
        myths: [
            {
                title: "The Titanomachy",
                description: "Zeus led his siblings in a ten-year war against their father Cronus and the Titans, and in the process, established the Olympian order.",
                source: "Hesiod, Theogony 617-886"
            },
            {
                title: "The Birth of Athena",
                description: "Zeus bore Athena himself, other sources stating his forehead, symbolizing her role as the goddess of wisdom and childbirth.",
                source: "Hesiod, Theogony 886-900"
            }
        ]
    },
    {
        id: "hera",
        name: "Hera",
        greekName: "Hera (Ἥρα)",
        romanName: "Juno",
        role: "god",
        symbol: "👑",
        domain: "Queen of Gods, Marriage, Women, Childbirth",
        description: "Protector of marriage and queen of Olympus. Known for her jealousy and vengeance against Zeus's lovers, defending her domain and her children.",
        primarySource: "Hesiod, Theogony 921",
        quote: "I am the wife of Zeus and the Queen of the Immortals.",
        quoteSource: "Homeric Hymn to Hera 1-5 (Paraphrase)",
        color: "#f0abfc",
        pos: [1.2, 4.0, -0.5],
        relationships: [
            { targetId: "zeus", type: "spouse", description: "Husband & Brother", source: "Hesiod, Theogony 921" },
            { targetId: "ares", type: "child", description: "Son", source: "Hesiod, Theogony 922" },
            { targetId: "hephaestus", type: "child", description: "Son", source: "Hesiod, Theogony 927" },
        ],
        myths: [
            {
                title: "Io and Argus",
                description: "She turned Io into a cow and made the hundred-eyed Argus to watch her. A common theme of Hera is to get revenge on Zeus's lovers.",
                source: "Ovid, Metamorphoses 1.583-667"
            }
        ]
    },
    {
        id: "poseidon",
        name: "Poseidon",
        greekName: "Poseidon (Ποσειδῶν)",
        romanName: "Neptune",
        role: "god",
        symbol: "🌊",
        domain: "Sea, Earthquakes, Horses",
        description: "Lord of the seas. His mood is as changeable as the ocean, capable of creating calm seas or violent storms.",
        primarySource: "Homer, Odyssey 5.282-296; Hesiod, Theogony 453-458",
        quote: "He shall have his fill of trouble, I promise, before he reaches the land of the Phaeacians.",
        quoteSource: "Homer, Odyssey 5.286-290",
        color: "#38bdf8",
        pos: [-2.5, 2.0, 2.0],
        relationships: [
            { targetId: "zeus", type: "sibling", description: "Brother", source: "Hesiod, Theogony 453-458" },
            { targetId: "hades", type: "sibling", description: "Brother", source: "Hesiod, Theogony 453-458" },
            { targetId: "odysseus", type: "nemesis", description: "Divine Nemesis", source: "Homer, Odyssey" },
        ],
        myths: [
            {
                title: "Odysseus's Curse",
                description: "Poseidon delayed Odysseus's return home by ten years and crashes his boat.",
                source: "Homer, Odyssey 5.340"
            }
        ]
    },
    {
        id: "demeter",
        name: "Demeter",
        greekName: "Demeter (Δημήτηρ)",
        romanName: "Ceres",
        role: "god",
        symbol: "🌾",
        domain: "Agriculture, Harvest, Seasons, Fertility",
        description: "Goddess of the harvest who presides over grains and the fertility of the earth. Unfortunately, her grief over Persephone causes the winter.",
        primarySource: "Homeric Hymn to Demeter",
        quote: "I will not let the earth bear fruit until I see my daughter with my own eyes.",
        quoteSource: "Homeric Hymn to Demeter 331-333",
        color: "#bef264",
        pos: [-1.5, 1.5, -2.5],
        relationships: [
            { targetId: "zeus", type: "sibling", description: "Sister & Mother of Persephone", source: "Hesiod, Theogony 912" },
            { targetId: "hades", type: "rival", description: "Abductor of her daughter", source: "Homer, Odyssey 11" },
        ],
        myths: [
            {
                title: "Abduction of Persephone",
                description: "When Hades stole her daughter, Demeter let the earth go barren until a compromise was reached, creating the seasons.",
                source: "Homeric Hymn to Demeter"
            }
        ]
    },
    {
        id: "athena",
        name: "Athena",
        greekName: "Athena (Ἀθηνᾶ)",
        romanName: "Minerva",
        role: "god",
        symbol: "🦉",
        domain: "Wisdom, Handicraft, Warfare",
        description: "The god of the strategic aspect of war and wisdom. Born fully armed from the head of Zeus.",
        primarySource: "Homer, Odyssey 13.299-319; Hesiod, Theogony 886-900",
        quote: "I am always with you in all your toils... I will not leave you in your misfortune, because you are courteous and quick-witted and steady.",
        quoteSource: "Homer, Odyssey 13.330",
        color: "#e2e8f0",
        pos: [1.5, 3.2, 2.0],
        relationships: [
            { targetId: "zeus", type: "parent", description: "Father (born from head)", source: "Hesiod, Theogony 886-900" },
            { targetId: "ares", type: "rival", description: "Strategic vs Chaotic War", source: "Homeric Hymn to Aphrodite 10" },
            { targetId: "hephaestus", type: "sibling", description: "Intellectual Peer", source: "" },
            { targetId: "odysseus", type: "mentor", description: "Divine Protector", source: "Homer, Odyssey 13" },
            { targetId: "telemachus", type: "mentor", description: "Guide/Mentor", source: "Homer, Odyssey 2-4" },
            { targetId: "penelope", type: "helper", description: "Inspirer of Dreams", source: "Homer, Odyssey 4" },
        ],
        myths: [
            {
                title: "Birth from Zeus",
                description: "Metis was swallowed by Zeus, and Athena later sprang from his head fully armored.",
                source: "Hesiod, Theogony 886-900"
            },
            {
                title: "Athena and Odysseus",
                description: "She guided Odysseus throughout his journeys, appearing in disguise to offer wisdom and strategy for his return.",
                source: "Homer, Odyssey 13"
            }
        ]
    },
    {
        id: "apollo",
        name: "Apollo",
        greekName: "Apollo (Ἀπόλλων)",
        romanName: "Apollo",
        role: "god",
        symbol: "🌞",
        domain: "Sun, Light, Archery, Prophecies, Music, Healing",
        description: "Leader of the Muses and god of prophecy. He represents order, harmony, and civilization.",
        primarySource: "Homeric Hymn to Apollo 140-161",
        quote: "I will declare the unfailing will of Zeus to men. The lyre and the curved bow shall ever be dear to me.",
        quoteSource: "Homeric Hymn to Apollo 131",
        color: "#fcd34d",
        pos: [-1.0, 3.0, -3.0],
        relationships: [
            { targetId: "zeus", type: "parent", description: "Father", source: "Hesiod, Theogony 918" },
            { targetId: "artemis", type: "sibling", description: "Twin Sister", source: "Hesiod, Theogony 918" },
            { targetId: "hermes", type: "sibling", description: "Half-brother/Rival", source: "Homeric Hymn to Hermes" },
        ],
        myths: [
            {
                title: "Slaying of Python",
                description: "Apollo killed the serpent Python at Delphi to establish his oracle.",
                source: "Homeric Hymn to Apollo"
            },
        ]
    },
    {
        id: "artemis",
        name: "Artemis",
        greekName: "Artemis (Ἄρτεμις)",
        romanName: "Diana",
        role: "god",
        symbol: "🏹",
        domain: "Hunt, Wilderness, Moon, Archery",
        description: "Protector of young girls and goddess of the hunt. She values independence, nature, as well as bathing.",
        primarySource: "Homeric Hymn to Artemis; Callimachus, Hymn to Artemis",
        quote: "Father, give me to keep my maidenhood forever... and give me the mountains.",
        quoteSource: "Callimachus, Hymn to Artemis",
        color: "#c084fc",
        pos: [2.5, 2.5, -2.5],
        relationships: [
            { targetId: "zeus", type: "parent", description: "Father", source: "Hesiod, Theogony 918" },
            { targetId: "apollo", type: "sibling", description: "Twin Brother", source: "Hesiod, Theogony 918" },
            { targetId: "aphrodite", type: "rival", description: "Rival,Chastity vs Lust", source: "" },
        ],
        myths: [
            {
                title: "Acteon",
                description: "When the hunter Acteon saw her bathing, she turned him into a stag and he was devoured by his own hounds.",
                source: "Ovid, Metamorphoses 3.138"
            }
        ]
    },
    {
        id: "ares",
        name: "Ares",
        greekName: "Ares (Ἄρης)",
        romanName: "Mars",
        role: "god",
        symbol: "⚔️",
        domain: "War, Bloodshed, Violence",
        description: "The physical and untamed aspect of war. Often despised by the other gods for his nature and bloodlust.",
        primarySource: "Homer, Odyssey 8.266-369",
        quote: "He is a helper of men, one who gives boldness to their hearts, who breaks their shield-walls...",
        quoteSource: "Homeric Hymn to Ares 3 (Description)",
        color: "#ef4444",
        pos: [-2.0, 1.5, 3.0],
        relationships: [
            { targetId: "zeus", type: "parent", description: "Father", source: "Hesiod, Theogony 922" },
            { targetId: "hera", type: "parent", description: "Mother", source: "Hesiod, Theogony 922" },
            { targetId: "aphrodite", type: "lover", description: "Lover", source: "Homer, Odyssey 8.266" },
            { targetId: "athena", type: "rival", description: "Tactical Opponent", source: "Homeric Hymn to Aphrodite" },
            { targetId: "hephaestus", type: "rival", description: "Rival, Cuckolded Brother", source: "Homer, Odyssey 8.266" },
        ],
        myths: [
            {
                title: "The Net of Hephaestus",
                description: "Ares was trapped in an unbreakable, invisible net while in bed with Aphrodite, exposing them to the ridicule of the gods.",
                source: "Homer, Odyssey 8.266"
            }
        ]
    },
    {
        id: "aphrodite",
        name: "Aphrodite",
        greekName: "Aphrodite (Ἀφροδίτη)",
        romanName: "Venus",
        role: "god",
        symbol: "🌹",
        domain: "Love and Beauty",
        description: "Born from the sea foam, her power and charm is irresistible, even to Zeus.",
        primarySource: "Hesiod, Theogony 188-206; Homeric Hymn to Aphrodite",
        quote: "Be not afraid, lady... I am no goddess: why do you liken me to the immortals? A mortal woman I am, and a mortal woman bore me.",
        quoteSource: "Homeric Hymn to Aphrodite 108-110",
        color: "#f9a8d4",
        pos: [2.0, 1.8, 3.5],
        relationships: [
            { targetId: "hephaestus", type: "spouse", description: "Husband", source: "Homer, Odyssey 8.340" },
            { targetId: "ares", type: "lover", description: "Lover", source: "Homer, Odyssey 8.340" },
            { targetId: "artemis", type: "rival", description: "Rival, Chastity vs Lust", source: "" },
        ],
        myths: [
            {
                title: "Birth from the Sea",
                description: "She rose from the sea, growing amid the foam and grass near Cyprus",
                source: "Hesiod, Theogony 188-206"
            },
            {
                title: "The Net of Hephaestus",
                description: "Hephaestus crafted an unbreakable, invisible net to trap his wife Aphrodite and her lover Ares in bed. Posiedon later revealed the net",
                source: "Homer, Odyssey 8.340"
            }
        ]
    },
    {
        id: "hephaestus",
        name: "Hephaestus",
        greekName: "Hephaestus (Ἥφαιστος)",
        romanName: "Vulcan",
        role: "god",
        symbol: "🔥",
        domain: "Blacksmiths, Craftsmen, Fire, Crafts in",
        description: "The lame god of the forge. He builds the magnificent palaces of the gods on Olympus.",
        primarySource: "Homer, Odyssey 8.266-369",
        quote: "There is no other god who is as unhappy as I... I who am lame and an object of reproach.",
        quoteSource: "Homer, Odyssey 8.307",
        color: "#fb923c",
        pos: [3.0, 1.0, 1.0],
        relationships: [
            { targetId: "hera", type: "parent", description: "Mother ", source: "Hesiod, Theogony 930" },
            { targetId: "aphrodite", type: "spouse", description: "Wife", source: "Homer, Odyssey 8.340" },
            { targetId: "ares", type: "rival", description: "Rival, Wife's Lover", source: "Homer, Odyssey 8.340" },
            { targetId: "athena", type: "sibling", description: "Intellectual Peer", source: "" },
        ],
        myths: [
            {
                title: "The Net of Hephaestus",
                description: "Hephaestus crafted an unbreakable, invisible net to trap his wife Aphrodite and her lover Ares in bed.",
                source: "Homer, Odyssey 8.340"
            },
        ]
    },
    {
        id: "hermes",
        name: "Hermes",
        greekName: "Hermes (Ἑρμῆς)",
        romanName: "Mercury",
        role: "god",
        symbol: "🕊️",
        domain: "Messenger, Trade, Thieves, Travelers",
        description: "The trickster god and messenger between realms. He guides souls to the Underworld.",
        primarySource: "Homeric Hymn to Hermes",
        quote: "I will go to Ito, and steal the cattle of Apollo... I will be master of my own craft, and I will be the prince of thieves.",
        quoteSource: "Homeric Hymn to Hermes 4.14",
        color: "#67e8f9",
        pos: [-1.5, 2.8, -1.0],
        relationships: [
            { targetId: "zeus", type: "parent", description: "Father", source: "Hesiod, Theogony 938" },
            { targetId: "apollo", type: "sibling", description: "Half-Brother", source: "Hesiod, Theogony 938" },
            { targetId: "artemis", type: "sibling", description: "Half-Sister", source: "Hesiod, Theogony 938" },
            { targetId: "odysseus", type: "helper", description: "Argus-Slayer, Guide, Moly-Giver", source: "Homer, Odyssey 10.360" },
        ],
        myths: [
            {
                title: "Odysseus's Guide",
                description: "Hermes gave Odysseus the moly plant to protect him from Circe's magic.",
                source: "Homer, Odyssey 10.360"
            }
        ]
    },
    {
        id: "hades",
        name: "Hades",
        greekName: "Hades (Ἅιδης)",
        romanName: "Pluto",
        role: "god",
        symbol: "💀",
        domain: "Underworld and the  Dead",
        description: "Ruler of the Underworld. While not resident on Olympus, his influence is fundamental to the balance of the gods and their domains. I have Hades located underneath the mountain to signify his role as the ruler of the Underworld.",
        primarySource: "Homeric Hymn to Demeter; Hesiod, Theogony 453-458",
        quote: "Go now, Persephone, to your dark-robed mother... I am not an unseemly husband among the deathless gods, I who am own brother to Zeus.",
        quoteSource: "Homeric Hymn to Demeter 360-365",
        color: "#a78bfa",
        pos: [0, -1.0, 0],
        relationships: [
            { targetId: "zeus", type: "sibling", description: "Brother, sometimes Rival", source: "Hesiod, Theogony 453-458" },
            { targetId: "poseidon", type: "sibling", description: "Brother, The Loud Crashing Earth Shaker", source: "Hesiod, Theogony 453-458" },
            { targetId: "demeter", type: "rival", description: "Rival, Stole Daughter as wife", source: "Homer, Odyssey 11" },
            { targetId: "odysseus", type: "creator", description: "Allowed Entrance", source: "Homer, Odyssey 11" },
        ],
        myths: [
            {
                title: "Odysseus in the Underworld",
                description: "Odysseus traveled to the entrance of Hades to sacrifice and speak with the prophet Tiresias.",
                source: "Homer, Odyssey 11"
            }
        ]
    },
    {
        id: "odysseus",
        name: "Odysseus",
        greekName: "Odysseus (Ὀδυσσεύς)",
        romanName: "Ulysses",
        role: "hero",
        symbol: "⛵",
        domain: "King of Ithaca, Hero",
        description: "The cunning king of Ithaca, a hero known for his cunning abilities and his long journey, an odyssey even, home from the Trojan War.",
        primarySource: "Homer, Odyssey 1.1-10",
        quote: "I am Odysseus, son of Laertes, known to the world for every kind of craft - my fame has reached the skies.",
        quoteSource: "Homer, Odyssey 9.19",
        color: "#9ca3af", // gray-400
        pos: [0, -4, 4],
        relationships: [
            { targetId: "athena", type: "mentor", description: "Divine Protector", source: "Homer, Odyssey 13" },
            { targetId: "poseidon", type: "nemesis", description: "Nemesis, Blinded Son", source: "Homer, Odyssey 1, 9" },
            { targetId: "penelope", type: "spouse", description: "Loyal Wife", source: "Homer, Odyssey" },
            { targetId: "telemachus", type: "child", description: "Son", source: "Homer, Odyssey 1" },
            { targetId: "hermes", type: "helper", description: "Received Aid", source: "Homer, Odyssey 10" },
        ],
        myths: [
            {
                title: "The Cyclops Polyphemus",
                description: "Odysseus blinded Poseidon's son Polyphemus to escape his cave, incurring the god's wrath.",
                source: "Homer, Odyssey 9"
            }
        ]
    },
    {
        id: "penelope",
        name: "Penelope",
        greekName: "Penelope (Πηνελόπη)",
        romanName: "Penelope",
        role: "hero",
        symbol: "🧶",
        domain: "Queen of Ithaca",
        description: "The faithful wife of Odysseus who kept her suitors at bay for twenty years through her intelligence and loyalty.",
        primarySource: "Homer, Odyssey 2.85-128",
        quote: "My heart has been cold as stone, and no one has ever moved it... but now you have softened my hard heart.",
        quoteSource: "Homer, Odyssey 23.230",
        color: "#d8b4fe", // light purple
        pos: [2.5, -4, 4],
        relationships: [
            { targetId: "odysseus", type: "spouse", description: "Husban, who she is faithful to", source: "Homer, Odyssey" },
            { targetId: "telemachus", type: "child", description: "Son", source: "Homer, Odyssey 1" },
            { targetId: "athena", type: "helper", description: "Received Dreams", source: "Homer, Odyssey 4" },
        ],
        myths: [
            {
                title: "The Shroud of Laertes",
                description: "She promised to choose a suitor once she finished weaving a shroud for Laertes, but torched and unraveled it every night.",
                source: "Homer, Odyssey 2"
            },
            {
                title: "Her Loyalty to Odysseus",
                description: "She remained loyal to Odysseus for 20 years while he was away, waiting for his return.",
                source: "Homer, Odyssey 2"
            }
        ]
    },
    {
        id: "telemachus",
        name: "Telemachus",
        greekName: "Telemachus (Τηλέμαχος)",
        romanName: "Telemachus",
        role: "hero",
        symbol: "🗡️",
        domain: "Prince of Ithaca",
        description: "The son of Odysseus and Penelope. He matures from a boy into a man under Athena's guidance while seeking news of his father.",
        primarySource: "Homer, Odyssey 1-4",
        quote: "My father, they say, is Odysseus, but for myself I do not know. For no man yet has known his own parentage.",
        quoteSource: "Homer, Odyssey 1.215",
        color: "#60a5fa", // blue-400
        pos: [-2.5, -4, 4],
        relationships: [
            { targetId: "odysseus", type: "parent", description: "Father", source: "Homer, Odyssey 16" },
            { targetId: "penelope", type: "parent", description: "Mother", source: "Homer, Odyssey 1" },
            { targetId: "athena", type: "mentor", description: "Guide/Mentor", source: "Homer, Odyssey 2-4" },
        ],
        myths: [
            {
                title: "Journey to Pylos and Sparta",
                description: "inspired by Athena, he traveled to Pylos to ask Nestor for news of his father.",
                source: "Homer, Odyssey 3.9"
            }
        ]
    },
    {
        id: "dionysus",
        name: "Dionysus",
        greekName: "Dionysus (Διόνυσος)",
        romanName: "Bacchus",
        role: "god",
        symbol: "🍇",
        domain: "Wine, Madness, Theatre",
        description: "The god of the grape-harvest, wine, fertility, ecstasy, and theatre.",
        primarySource: "Hesiod, Theogony 940-942; Homeric Hymn 7",
        quote: "I am Dionysus the loud-crier... and he who knows me not knows not the gods.",
        quoteSource: "Homeric Hymn 7.56 (Adapted)",
        color: "#a21caf", // fuchsia-700
        pos: [3.0, 2.2, -3.5],
        relationships: [
            { targetId: "zeus", type: "parent", description: "Father", source: "Hesiod, Theogony 940" },
            { targetId: "hera", type: "nemesis", description: "Persecutor", source: "" },        ],
        myths: [
            {
                title: "Tyrrhenian Pirates",
                description: "When pirates captured him thinking he was a prince, he turned into a lion and transformed them into dolphins.",
                source: "Homeric Hymn to Dionysus (7)"
            },
            {
                title: "Birth of Dionysus",
                description: "Born to Zeus and Semele, he was sewn into Zeus's thigh until he was ready to be born.",
                source: "Hesiod, Theogony 940-942"
            }
        ]
    }
];
