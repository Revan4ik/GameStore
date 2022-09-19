import React from "react";
import { GameItem } from "../../components/game-item";
import { Footer } from "../../components/footer"
import "./home-page.scss";

const GAMES = [
  {
    image: "https://images6.alphacoders.com/983/983639.png",
    title: "God of War",
    genres: ["Action", "RPG", "Adventure"],
    price: 20,
    video: "https://youtube.com/embed/K0u_kAWLJOA",
    id: 1,
    description:
      "His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.",
  },
  {
    image: "https://images3.alphacoders.com/601/601997.jpg",
    title: "Horizon Zero Dawn™",
    genres: ["Action", "RPG", "Adventure"],
    video: "https://youtube.com/embed/u4-FCsiF5x4",
    price: 10,
    id: 2,
    description:
      "Experience Aloy’s legendary quest to unravel the mysteries of a future Earth ruled by Machines. Use devastating tactical attacks against your prey and explore a majestic open world in this award-winning action RPG!",
  },
  {
    image: "https://images5.alphacoders.com/710/710789.jpg",
    title: "DEATH STRANDING ",
    genres: ["Action", "Open World", "Adventure"],
    video: "https://youtube.com/embed/UcaMw4aCz4c",
    price: 25,
    id: 3,
    description:
      "From legendary game creator Hideo Kojima comes a genre-defying experience, now expanded in this definitive DIRECTOR’S CUT. As Sam Bridges, your mission is to deliver hope to humanity by connecting the last survivors of a decimated America.",
  },
  {
    image: "https://images6.alphacoders.com/121/1216600.png",
    title: "Ghostrunner",
    genres: ["Action", "Shooter"],
    video: "https://www.youtube.com/embed/Vt8yOLn8vmo",
    price: 7.5,
    id: 4,
    description:
      "Ghostrunner offers a unique single-player experience: fast-paced, violent combat, and an original setting that blends science fiction with post-apocalyptic themes. It tells the story of a world that has already ended and its inhabitants who fight to survive.",
  },
  {
    image: "https://images.alphacoders.com/988/988021.jpg",
    title: "Cyberpunk 2077",
    video: "https://youtube.com/embed/UjxS9ciNlII",
    genres: ["Action", "RPG", "Open World", "Adventure"],
    price: 12,
    id: 5,
    description:
      "Cyberpunk 2077 is an open-world, action-adventure RPG set in the dark future of Night City — a dangerous megalopolis obsessed with power, glamor, and ceaseless body modification.",
  },
  {
    image: "https://images8.alphacoders.com/103/1037074.jpg",
    title: "Control",
    genres: ["Action", "Adventure"],
    video: "https://youtube.com/embed/PT5yMfC9LQM",
    price: 4,
    id: 6,
    description:
      "After a secretive agency in New York is invaded by an otherworldly threat, you become the new Director struggling to regain Control.",
  },
  {
    image: "https://cdn1.epicgames.com/spt-assets/177dc72233934ac487abd83b01587086/spirit-of-the-north-offer-mznb7.jpg",
    title: "Spirit of the North",
    genres: ["Indie", "Adventure"],
    price: 3,
    video: "https://youtube.com/embed/K0u_kAWLJOA",
    id: 7,
    description:
      "Spirit of the North is a single-player 3rd-person adventure game inspired by the breathtaking and mysterious landscapes of Iceland. Play as an ordinary red fox whose story becomes entwined with the guardian of the Northern Lights, a female spirit fox.",
  },
  {
    image: "https://images6.alphacoders.com/117/1176870.jpg",
    title: "Gloomhaven",
    genres: ["Turn-Based", "RPG", "Strategy"],
    price: 2,
    video: "https://youtube.com/embed/K0u_kAWLJOA",
    id: 8,
    description:
      "Whether you are drawn to Gloomhaven by the call of adventure or by an avid desire for gold glimmering in the dark, your fate will surely be the same. Gloomhaven, the digital adaptation of the acclaimed board game, mixes Tactical-RPG and dungeon-crawling.",
  },
  {
    image: "https://images6.alphacoders.com/960/960596.jpg",
    title: "ARK: Survival Evolved",
    genres: ["survival simulator", "Action-adventure"],
    price: 5,
    video: "https://youtube.com/embed/K0u_kAWLJOA",
    id: 9,
    description:
      "Stranded on the shores of a mysterious island, you must learn to survive. Use your cunning to kill or tame the primeval creatures roaming the land, and encounter other players to survive, dominate... and escape!",
  },
];

export const HomePage = () => {
  return (
    <div className="home-page">
      {GAMES.map((game) => (
        <GameItem game={game} key={game.id} />
      ))}
      <Footer />
    </div>
  );
};
