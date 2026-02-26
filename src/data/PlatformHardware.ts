export interface HardwareLog {
  id: number;
  gameTitle: string;
  reviewText: string;
  os: string;
  hardwareSpecs: string;
  averageFps: number;
}

export const hardwareData: HardwareLog[] = [
  {
    id: 1,
    gameTitle: "Marvel Rivals",
    reviewText:
      "Proton Experimental works great, slight stutter on compiling shaders.",
    os: "Arch Linux",
    hardwareSpecs: "i7-14700KF, 32GB RAM, RTX 4070",
    averageFps: 180,
  },
  {
    id: 2,
    gameTitle: "Palworld",
    reviewText:
      "Running as a dedicated server, performance is incredibly stable.",
    os: "Debian 13",
    hardwareSpecs: "Ryzen 5 3600, 32GB RAM",
    averageFps: 60,
  },
  {
    id: 3,
    gameTitle: "Cyberpunk 2077",
    reviewText:
      "Laptop runs hot, DLSS required for a stable framerate in crowded areas.",
    os: "Windows 11",
    hardwareSpecs: "MSI GE75 Raider 9SE",
    averageFps: 55,
  },
  {
    id: 4,
    gameTitle: "Deadlock",
    reviewText: "Flawless performance on max settings.",
    os: "Windows 11",
    hardwareSpecs: "i7-14700KF, 32GB RAM, RTX 4070",
    averageFps: 144,
  },
  {
    id: 5,
    gameTitle: "Minecraft",
    reviewText: "Vanilla runs well, but struggles heavily with 200+ modpacks.",
    os: "NixOS",
    hardwareSpecs: "ThinkPad T480",
    averageFps: 60,
  },
  {
    id: 6,
    gameTitle: "Half-Life: Alyx",
    reviewText: "VR performance is locked and smooth, no nausea.",
    os: "Windows 11",
    hardwareSpecs: "RTX 4070, Oculus Rift S",
    averageFps: 80,
  },
  {
    id: 7,
    gameTitle: "Elden Ring",
    reviewText: "Perfect 60fps cap maintained seamlessly.",
    os: "Arch Linux",
    hardwareSpecs: "i7-14700KF, RTX 4070",
    averageFps: 60,
  },
  {
    id: 8,
    gameTitle: "Valorant",
    reviewText: "Extremely high framerate, Vanguard strictly requires Windows.",
    os: "Windows 11",
    hardwareSpecs: "i7-14700KF, RTX 4070",
    averageFps: 400,
  },
  {
    id: 9,
    gameTitle: "Beat Saber",
    reviewText: "No headset tracking issues detected.",
    os: "Windows 11",
    hardwareSpecs: "RTX 4070, Oculus Rift S",
    averageFps: 80,
  },
  {
    id: 10,
    gameTitle: "Terraria",
    reviewText: "Native Linux build runs flawlessly.",
    os: "NixOS",
    hardwareSpecs: "ThinkPad T480",
    averageFps: 60,
  },
];
