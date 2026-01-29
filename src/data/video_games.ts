// all data retrieved from https://igdb.com

export interface VideoGame {
  id: number;
  name: string;
  url: string;
  synopsis: string;
  avg_critic_rating: number;
  avg_user_rating: number;
  artwork_url: string;
  developer: string;
  publisher: string;
  initial_release_date: string;
  platforms: string[];
  genre: string[];
  multiplayer: boolean;
}

export const videoGames: VideoGame[] = [
  {
    id: 350392,
    name: "Elden Ring",
    url: "https://www.igdb.com/games/elden-ring",
    synopsis: "Elden Ring is an action RPG developed by FromSoftware and published by Bandai Namco Entertainment, released in February 2022. Directed by Hidetaka Miyazaki, with world-building contributions from novelist George R. R. Martin, the game features an expansive open world called the Lands Between. Players assume the role of a customisable character known as the Tarnished, who must explore this world, battle formidable enemies, and seek to restore the Elden Ring to become the Elden Lord. The game builds on the challenging gameplay mechanics familiar from the Dark Souls series but introduces a more open-ended structure with vast exploration, dynamic weather, and a day-night cycle. It offers deep lore, complex characters, and an interconnected world filled with secrets, dungeons, and powerful bosses.",
    avg_critic_rating: 9.7,
    avg_user_rating: 9.4,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co4jni.jpg",
    developer: "FromSoftware",
    publisher: "Bandai Namco Entertainment",
    initial_release_date: "02-25-2022",
    platforms: [
      "Windows",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S",
      "Nintendo Switch 2"
    ],
    genre: [
      "Role-playing",
    ],
    multiplayer: true,
  },
  {
    id: 30492,
    name: "Clair Obscur: Expedition 33",
    url: "https://www.igdb.com/games/clair-obscur-expedition-33",
    synopsis: "Lead the members of Expedition 33 on their quest to destroy the Paintress so that she can never paint death again. Explore a world of wonders inspired by Belle Époque France and battle unique enemies in this turn-based RPG with real-time mechanics.",
    avg_critic_rating: 8.7,
    avg_user_rating: 9.2,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co9gam.jpg",
    developer: "Sandfall Interactive",
    publisher: "Kepler Interactive",
    initial_release_date: "04-24-2025",
    platforms: [
      "Windows",
      "PlayStation 5",
      "Xbox Series X/S",
    ],
    genre: [
      "Role-playing",
    ],
    multiplayer: false,
  },
  {
    id: 339266,
    name: "Donkey Kong Bananza",
    url: "https://www.igdb.com/games/donkey-kong-bananza",
    synopsis: "Donkey Kong Bananza is exclusively on Nintendo Switch 2! Explore a vast underground world—by smashing your way through it! Bash, throw, and climb through just about anything in DK’s brand-new 3D platforming action-adventure game!",
    avg_critic_rating: 9.0,
    avg_user_rating: 9.3,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/coa082.jpg",
    developer: "Nintendo",
    publisher: "Nintendo",
    initial_release_date: "07-17-2025",
    platforms: [
      "Nintendo Switch 2"
    ],
    genre: [
      "Platformer",
      "Adventure"
    ],
    multiplayer: false,
  },
  {
    id: 371776,
    name: "ARC Raiders",
    url: "https://www.igdb.com/games/arc-raiders",
    synopsis: "",
    avg_critic_rating: 8.9,
    avg_user_rating: 8.9,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co9rk1.jpg",
    developer: "Embark Studios",
    publisher: "Embark Studios",
    initial_release_date: "10-30-2025",
    platforms: [
      "Windows",
      "PlayStation 5",
      "Xbox Series X/S",
    ],
    genre: [
      "Shooter",
      "Extraction",
    ],
    multiplayer: true,
  },
  {
    id: 376989,
    name: "Street Fighter 6",
    url: "https://www.igdb.com/games/street-fighter-6",
    synopsis: "",
    avg_critic_rating: 9.3,
    avg_user_rating: 8.2,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co9wxo.jpg",
    developer: "Capcom",
    publisher: "Capcom",
    initial_release_date: "06-02-2023",
    platforms: [
      "Windows",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S",
      "Nintendo Switch 2"
    ],
    genre: [
      "Fighting",
      "Arcade",
    ],
    multiplayer: true,
  },
  {
    id: 85727,
    name: "Call of Duty: Black Ops 7",
    url: "https://www.igdb.com/games/call-of-duty-black-ops-7",
    synopsis: "Embrace the madness. In Call of Duty: Black Ops 7, Treyarch and Raven Software are bringing players the most mind-bending Black Ops ever. The year is 2035 and the world is on the brink of chaos, ravaged by violent conflict and psychological warfare following the events of the fan-favorite titles Black Ops 2 and Black Ops 6. Wielding cutting-edge technology, the Black Ops team led by David Mason must fight back against a manipulative enemy who weaponizes fear above all else.",
    avg_critic_rating: 6.6,
    avg_user_rating: 3.8,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co9xwv.jpg",
    developer: "Treyarch",
    publisher: "Activision",
    initial_release_date: "11-14-2025",
    platforms: [
      "Windows",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S",
      "Nintendo Switch 2"
    ],
    genre: [
      "Shooter",
    ],
    multiplayer: true,
  },
  {
    id: 63844,
    name: "Baldur's Gate III",
    url: "https://www.igdb.com/games/baldurs-gate-iii",
    synopsis: "An ancient evil has returned to Baldur's Gate, intent on devouring it from the inside out. The fate of Faerun lies in your hands. Alone, you may resist. But together, you can overcome.",
    avg_critic_rating: 9.5,
    avg_user_rating: 9.6,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co670h.jpg",
    developer: "Larian Studios",
    publisher: "Larian Studios",
    initial_release_date: "08-03-2023",
    platforms: [
      "Windows",
      "Mac",
      "PlayStation 5",
      "Xbox Series X/S",
      "Nintendo Switch 2"
    ],
    genre: [
      "Role-playing",
      "Strategy",
      "Turn-based",
    ],
    multiplayer: true,
  },
  {
    id: 371149,
    name: "The Witcher 3: Wild Hunt",
    url: "https://www.igdb.com/games/the-witcher-3-wild-hunt",
    synopsis: "Set in a dark fantasy world, the game follows Geralt of Rivia, a monster hunter searching for his adopted daughter, Ciri, while navigating political conflicts and supernatural threats. Gameplay features exploration, combat, character progression, and branching narratives shaped by player choices. Widely acclaimed for its writing, world-building, and depth, it is considered one of the most influential RPGs of its generation.",
    avg_critic_rating: 9.2,
    avg_user_rating: 9.4,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/coaarl.jpg",
    developer: "CD Projekt RED",
    publisher: "WB Games",
    initial_release_date: "05-19-2015",
    platforms: [
      "Windows",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S",
      "Nintendo Switch",
    ],
    genre: [
      "Role-playing",
      "Adventure",
    ],
    multiplayer: false,
  },
  {
    id: 330684,
    name: "Chrono Trigger",
    url: "https://www.igdb.com/games/chrono-trigger",
    synopsis: "In this turn-based Japanese RPG, young Crono must travel through time through a misfunctioning teleporter to rescue his misfortunate companion and take part in an intricate web of past and present perils. The adventure that ensues soon unveils an evil force set to destroy the world, triggering Crono's race against time to change the course of history and bring about a brighter future.",
    avg_critic_rating: 9.1,
    avg_user_rating: 9.3,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3plw.jpg",
    developer: "Square",
    publisher: "Square",
    initial_release_date: "03-11-1995",
    platforms: [
      "Super Famicom",
      "Satellaview",
      "Super Nintendo Entertainment System",
      "Nintendo Wii",
    ],
    genre: [
      "Role-playing",
    ],
    multiplayer: false,
  },
  {
    id: 220875,
    name: "The Legend of Zelda: Tears of the Kingdom",
    url: "https://www.igdb.com/games/the-legend-of-zelda-tears-of-the-kingdom",
    synopsis: "An epic adventure across the land and skies of Hyrule awaits in The Legend of Zelda: Tears of the Kingdom for Nintendo Switch. The adventure is yours to create in a world fueled by your imagination. In this sequel to The Legend of Zelda: Breath of the Wild, you'll decide your own path through the sprawling landscapes of Hyrule and the mysterious islands floating in the vast skies above. Can you harness the power of Link's new abilities to fight back against the malevolent forces that threaten the kingdom?",
    avg_critic_rating: 9.5,
    avg_user_rating: 9.3,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5vmg.jpg",
    developer: "Nintendo",
    publisher: "Nintendo",
    initial_release_date: "05-11-2023",
    platforms: [
      "Nintendo Switch",
      "Nintendo Switch 2",
    ],
    genre: [
      "Puzzle",
      "Adventure",
      "Action",
    ],
    multiplayer: false,
  },
  {
    id: 94850,
    name: "Hollow Knight: Silksong",
    url: "https://www.igdb.com/games/hollow-knight-silksong",
    synopsis: "Hollow Knight: Silksong is the epic sequel to Hollow Knight, the epic action-adventure of bugs and heroes. As the lethal hunter Hornet, journey to all-new lands, discover new powers, battle vast hordes of bugs and beasts and uncover ancient secrets tied to your nature and your past.",
    avg_critic_rating: 9.0,
    avg_user_rating: 9.3,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/cobccf.jpg",
    developer: "Team Cherry",
    publisher: "Team Cherry",
    initial_release_date: "09-04-2025",
    platforms: [
      "Windows",
      "Mac",
      "Linux",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S",
      "Nintendo Switch",
      "Nintendo Switch 2"
    ],
    genre: [
      "Platformer",
      "Metroidvania",
      "Adventure",
    ],
    multiplayer: false,
  },
  {
    id: 152887,
    name: "Metroid Prime",
    url: "https://www.igdb.com/games/metroid-prime",
    synopsis: "A 3D exploration-focused metroidvania with first-person shooting mechanics and the first 3D entry in the Metroid series, Metroid Prime follows Samus Aran after the events of Metroid (1986) as she boards a Space Pirate frigate, then chases her escaping archrival Ridley into the intricately structured Tallon IV, a planet full of deadly wildlife and former home to the advanced and ancient Chozo race.",
    avg_critic_rating: 9.5,
    avg_user_rating: 9.2,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3w4w.jpg",
    developer: "Retro Studios",
    publisher: "Nintendo",
    initial_release_date: "11-17-2002",
    platforms: [
      "Nintendo GameCube"
    ],
    genre: [
      "Shooter",
      "Platformer",
      "Adventure",
      "Metroidvania",
    ],
    multiplayer: false,
  },
  {
    id: 120563,
    name: "Metal Gear Solid 3: Snake Eater",
    url: "https://www.igdb.com/games/metal-gear-solid-3-snake-eater",
    synopsis: "Metal Gear Solid 3: Snake Eater is the prequel to the entire Metal Gear series. Most of the series' defining gameplay elements have been carried over and as before, Snake must use stealth and wits rather than brute force to infiltrate enemy zones and eliminate his major adversaries. Unlike the previous games, this installment takes place in a large outdoor jungle. Snake is able to use camouflage, climb trees, hide in tall grass or wear clothes that make him less noticeable.",
    avg_critic_rating: 8.6,
    avg_user_rating: 9.2,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5ei5.jpg",
    developer: "Konami Computer",
    publisher: "Konami",
    initial_release_date: "11-17-2004",
    platforms: [
      "PlayStation 2"
    ],
    genre: [
      "Stealth",
      "Tactical",
      "Adventure",
      "Shooter"
    ],
    multiplayer: false,
  },
  {
    id: 367989,
    name: "Portal 2",
    url: "https://www.igdb.com/games/portal-2",
    synopsis: "Sequel to the acclaimed Portal (2007), Portal 2 pits the protagonist of the original game, Chell, and her new robot friend, Wheatley, against more puzzles conceived by GLaDOS, an A.I. with the sole purpose of testing the Portal Gun's mechanics and taking revenge on Chell for the events of Portal. As a result of several interactions and revelations, Chell once again pushes to escape Aperture Science Labs.",
    avg_critic_rating: 9.2,
    avg_user_rating: 9.1,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1rs4.jpg",
    developer: "Valve Software",
    publisher: "Valve",
    initial_release_date: "04-18-2011",
    platforms: [
      "Windows",
      "Mac",
      "PlayStation 3",
      "Xbox 360",
      "Nintendo Switch",
    ],
    genre: [
      "Puzzle",
      "Platformer",
      "Adventure",
    ],
    multiplayer: true,
  },
  {
    id: 138930,
    name: "Silent Hill 2",
    url: "https://www.igdb.com/games/silent-hill-2",
    synopsis: "The second entry in the Silent Hill franchise, Silent Hill 2 is a narrative-focused third-person psychological survival horror game with emphasis on combat, exploration and puzzle-solving elements which follows James Sunderland, a man who receives a letter, seemingly sent by his three-years-deceased wife Mary, in which he is beckoned to the fog-ridden town of Silent Hill at the same time as numerous other people troubled by their past.",
    avg_critic_rating: 9.0,
    avg_user_rating: 9.1,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2vyg.jpg",
    developer: "Team Silent",
    publisher: "Konami",
    initial_release_date: "09-24-2001",
    platforms: [
      "PlayStation 2",
    ],
    genre: [
      "Horror",
      "Puzzle",
      "Survival",
    ],
    multiplayer: false,
  },
  {
    id: 363578,
    name: "Final Fantasy VII",
    url: "https://www.igdb.com/games/final-fantasy-vii",
        synopsis: "Final Fantasy VII is a role-playing game set in a post-modern, steampunk world where technology and fantasy elements coexist. Players control Cloud Strife, an ex-soldier who joins the eco-terrorist group AVALANCHE to oppose Shinra Inc., a corporation draining the planet's life energy. The game features turn-based combat with an active time element, a customizable Materia system for abilities, and unique Limit Break attacks for each character. Players explore 3D environments, engage in various mini-games, and uncover a complex plot involving Cloud's mysterious past and a powerful threat to the world. As the story progresses, players gain access to different vehicles, allowing them to explore new areas and uncover additional content.",
    avg_critic_rating: 8.5,
    avg_user_rating: 9.1,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2kx2.jpg",
    developer: "Square",
    publisher: "Sony Computer Entertainment",
    initial_release_date: "01-31-1997",
    platforms: [
      "PlayStation 1"
    ],
    genre: [
      "Role-playing",
      "Adventure"
    ],
    multiplayer: false,
  },
  {
    id: 79850,
    name: "Half-Life 2",
    url: "https://www.igdb.com/games/half-life-2",
    synopsis: "1998. HALF-LIFE sends a shock through the game industry with its combination of pounding action and continuous, immersive storytelling. NOW. By taking the suspense, challenge and visceral charge of the original, and adding startling new realism and responsiveness, Half-Life 2 opens the door to a world where the player's presence affects everything around them, from the physical environment to the behaviors even the emotions of both friends and enemies",
    avg_critic_rating: 7.9,
    avg_user_rating: 9.0,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1nmw.jpg",
    developer: "Valve Software",
    publisher: "Valve",
    initial_release_date: "11-16-2004",
    platforms: [
      "Windows",
      "Mac",
      "Linux",
      "Android",
      "Xbox",
      "Xbox 360",
      "PlayStation 3",
    ],
    genre: [
      "Shooter",
      "Puzzle",
      "Adventure"
    ],
    multiplayer: false,
  },
  {
    id: 264844,
    name: "NieR: Automata",
    url: "https://www.igdb.com/games/nier-automata",
    synopsis: "NieR: Automata tells the story of androids 2B, 9S and A2 and their battle to reclaim the machine-driven dystopia overrun by powerful machines.",
    avg_critic_rating: 8.6,
    avg_user_rating: 9.0,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5pcj.jpg",
    developer: "PlatinumGames",
    publisher: "Square Enix",
    initial_release_date: "02-23-2017",
    platforms: [
      "Windows",
      "PlayStation 4",
    ],
    genre: [
      "Role-playing",
      "Hack and slash"
    ],
    multiplayer: false,
  },
  {
    id: 111651,
    name: "Hades",
    url: "https://www.igdb.com/games/hades--1",
    synopsis: "A rogue-lite hack and slash dungeon crawler in which Zagreus, son of Hades the Greek god of the dead, attempts to escape his home and his oppressive father by fighting the souls of the dead through the various layers of the ever-shifting underworld, while getting to know and forging relationships with its inhabitants.",
    avg_critic_rating: 9.4,
    avg_user_rating: 9.0,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/cob9kr.jpg",
    developer: "Supergiant Games",
    publisher: "Supergiant Games",
    initial_release_date: "09-17-2020",
    platforms: [
      "Windows",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S",
      "Nintendo Switch",
      "iOS"
    ],
    genre: [
      "Role-playing",
      "Roguelike",
      "Hack and slash",
    ],
    multiplayer: false,
  },
  {
    id: 274434,
    name: "Super Mario Odyssey",
    url: "https://www.igdb.com/games/super-mario-odyssey",
    synopsis: "Explore incredible places far from the Mushroom Kingdom as you join Mario and his new ally Cappy on a massive, globe-trotting 3D adventure. Use amazing new abilities, like the power to capture and control objects, animals, and enemies to collect Power Moons so you can power up the Odyssey airship and save Princess Peach from Bowser’s wedding plans!",
    avg_critic_rating: 9.7,
    avg_user_rating: 8.9,
    artwork_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1mxf.jpg",
    developer: "Nintendo",
    publisher: "Nintendo",
    initial_release_date: "10-27-2017",
    platforms: [
      "Nintendo Switch"
    ],
    genre: [
      "Platformer",
      "Adventure",
    ],
    multiplayer: false,
  },
];
