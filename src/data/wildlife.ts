import ethiopianWolf from "@/assets/wildlife-ethiopian-wolf.jpg";
import gelada from "@/assets/wildlife-gelada.jpg";
import waliaIbex from "@/assets/wildlife-walia-ibex.jpg";
import mountainNyala from "@/assets/wildlife-mountain-nyala.jpg";
import thickBilledRaven from "@/assets/wildlife-thick-billed-raven.jpg";
import blueWingedGoose from "@/assets/wildlife-blue-winged-goose.jpg";
import ruspoliTuraco from "@/assets/wildlife-ruspoli-turaco.jpg";
import menelikBushbuck from "@/assets/wildlife-menelik-bushbuck.jpg";
import somaliWildAss from "@/assets/wildlife-somali-wild-ass.jpg";
import swayneHartebeest from "@/assets/wildlife-swayne-hartebeest.jpg";
import giantLobelia from "@/assets/wildlife-giant-lobelia.jpg";
import baleFrog from "@/assets/wildlife-bale-frog.jpg";

export interface WildlifeSpecies {
  id: string;
  name: string;
  scientificName: string;
  image: string;
  category: "mammal" | "bird" | "reptile" | "amphibian" | "flora";
  conservationStatus:
    | "critically-endangered"
    | "endangered"
    | "vulnerable"
    | "near-threatened"
    | "least-concern";
  description: string;
  location: string;
  featured?: boolean;
}

export const wildlife: WildlifeSpecies[] = [
  {
    id: "ethiopian-wolf",
    name: "Ethiopian Wolf",
    scientificName: "Canis simensis",
    image: ethiopianWolf,
    category: "mammal",
    conservationStatus: "endangered",
    description:
      "The world's rarest canid and Africa's most endangered carnivore, the Ethiopian Wolf survives only in the Afroalpine highlands above 3,000 meters. With fewer than 500 individuals remaining, the Bale Mountains host over half the global population. Their rust-red coats and slender frames make them unmistakable as they hunt giant mole-rats across the Sanetti Plateau at dawn.",
    location: "Bale Mountains, Simien Mountains",
    featured: true,
  },
  {
    id: "gelada-baboon",
    name: "Gelada",
    scientificName: "Theropithecus gelada",
    image: gelada,
    category: "mammal",
    conservationStatus: "least-concern",
    description:
      "The 'bleeding-heart monkey' is the world's last surviving species of grazing primate, found only in the Ethiopian highlands. Herds of 800 or more cascade over cliff edges in the Simien Mountains at dusk, their hourglass-shaped red chest patches flashing in the golden light. Their complex vocal communication is the closest to human speech of any non-human primate.",
    location: "Simien Mountains National Park",
    featured: true,
  },
  {
    id: "walia-ibex",
    name: "Walia Ibex",
    scientificName: "Capra walie",
    image: waliaIbex,
    category: "mammal",
    conservationStatus: "vulnerable",
    description:
      "Found exclusively in the Simien Mountains, the Walia Ibex is Ethiopia's most iconic endemic mammal. With massive curved horns reaching over a meter in length, these agile climbers navigate near-vertical cliffs at altitudes above 2,500 meters. Once reduced to fewer than 250 individuals, conservation efforts have slowly stabilized the population.",
    location: "Simien Mountains National Park",
    featured: true,
  },
  {
    id: "mountain-nyala",
    name: "Mountain Nyala",
    scientificName: "Tragelaphus buxtoni",
    image: mountainNyala,
    category: "mammal",
    conservationStatus: "endangered",
    description:
      "One of the last large mammals discovered by science (1910), the Mountain Nyala is a magnificent antelope found only in the southeastern Ethiopian highlands. Males carry impressive spiraling horns and sport a shaggy grey-brown coat. The Bale Mountains are the species' stronghold, where they browse in juniper forests and Afroalpine moorlands.",
    location: "Bale Mountains National Park",
  },
  {
    id: "thick-billed-raven",
    name: "Thick-billed Raven",
    scientificName: "Corvus crassirostris",
    image: thickBilledRaven,
    category: "bird",
    conservationStatus: "least-concern",
    description:
      "The largest corvid in the world and an Ethiopian endemic, the Thick-billed Raven is instantly recognizable by its massive curved bill with a white tip and deep, resonant croaking call. A supremely intelligent bird, it soars on thermals above Ethiopia's cliffs and towns, often performing acrobatic barrel rolls in pairs.",
    location: "Highlands throughout Ethiopia",
  },
  {
    id: "blue-winged-goose",
    name: "Blue-winged Goose",
    scientificName: "Cyanochen cyanoptera",
    image: blueWingedGoose,
    category: "bird",
    conservationStatus: "vulnerable",
    description:
      "This shy, elegant goose is found only in the Ethiopian highlands, typically above 2,400 meters near streams and wet meadows. Its pale blue wing patches flash in flight, and its soft whistling call is a distinctive sound of the Afroalpine zone. Often seen in pairs, they are most common on the Sanetti Plateau in Bale.",
    location: "Bale Mountains, Simien Mountains",
  },
  {
    id: "prince-ruspoli-turaco",
    name: "Prince Ruspoli's Turaco",
    scientificName: "Menelikornis ruspolii",
    image: ruspoliTuraco,
    category: "bird",
    conservationStatus: "vulnerable",
    description:
      "One of Africa's most elusive and beautiful birds, this turaco was discovered in 1892 by an Italian prince who was killed by an elephant before he could document the location. Found only in a small area of juniper forest in southern Ethiopia, its white crest and crimson wing feathers make it a holy grail for birdwatchers worldwide.",
    location: "Arero & Yabello forests, Southern Ethiopia",
  },
  {
    id: "menelik-bushbuck",
    name: "Menelik's Bushbuck",
    scientificName: "Tragelaphus scriptus meneliki",
    image: menelikBushbuck,
    category: "mammal",
    conservationStatus: "near-threatened",
    description:
      "A dark, strikingly beautiful subspecies of bushbuck found only in the Ethiopian highlands, Menelik's Bushbuck is the darkest of all bushbucks — males are nearly black with faint white markings. They inhabit the dense juniper and Hagenia forests of the Bale Mountains, emerging at dawn and dusk to browse on forest edges.",
    location: "Bale Mountains, Arsi Highlands",
  },
  {
    id: "somali-wild-ass",
    name: "Somali Wild Ass",
    scientificName: "Equus africanus somaliensis",
    image: somaliWildAss,
    category: "mammal",
    conservationStatus: "critically-endangered",
    description:
      "The ancestor of the domestic donkey, the Somali Wild Ass is the most endangered equid on Earth, with fewer than 600 remaining in the wild. Ethiopia's Afar region holds the last viable population. Their distinctive leg stripes and desert-adapted physiology allow them to survive in one of the hottest places on the planet.",
    location: "Afar Region, Danakil",
  },
  {
    id: "swayne-hartebeest",
    name: "Swayne's Hartebeest",
    scientificName: "Alcelaphus buselaphus swaynei",
    image: swayneHartebeest,
    category: "mammal",
    conservationStatus: "endangered",
    description:
      "Once roaming the Ethiopian plains in herds of thousands, Swayne's Hartebeest has been reduced to a few hundred individuals in scattered sanctuaries. This endemic subspecies with its distinctive lyre-shaped horns is the focus of intensive conservation efforts in Senkelle Swayne's Hartebeest Sanctuary.",
    location: "Senkelle Sanctuary, Southern Ethiopia",
  },
  {
    id: "giant-lobelia",
    name: "Giant Lobelia",
    scientificName: "Lobelia rhynchopetalum",
    image: giantLobelia,
    category: "flora",
    conservationStatus: "near-threatened",
    description:
      "Rising up to 6 meters tall in the Afroalpine zones above 3,500 meters, the Giant Lobelia is an alien-looking plant that defines Ethiopia's highland landscapes. Each plant grows for 20–30 years before producing a single massive flower spike, then dies. Fields of these surreal giants on the Sanetti Plateau create landscapes found nowhere else on Earth.",
    location: "Bale & Simien Mountains",
  },
  {
    id: "bale-frog",
    name: "Bale Mountains Tree Frog",
    scientificName: "Balebreviceps hillmani",
    image: baleFrog,
    category: "amphibian",
    conservationStatus: "endangered",
    description:
      "This tiny, jewel-like frog is found exclusively in the Harenna Forest of the Bale Mountains, discovered only in 1989. It lives in the leaf litter of the cloud forest floor and communicates through clicks rather than the typical frog calls. Climate change and habitat loss threaten its extremely limited range.",
    location: "Harenna Forest, Bale Mountains",
  },
];

export function getWildlifeByCategory(category: WildlifeSpecies["category"]): WildlifeSpecies[] {
  return wildlife.filter((w) => w.category === category);
}

export function getFeaturedWildlife(): WildlifeSpecies[] {
  return wildlife.filter((w) => w.featured);
}

export const conservationStatusLabels: Record<WildlifeSpecies["conservationStatus"], string> = {
  "critically-endangered": "Critically Endangered",
  endangered: "Endangered",
  vulnerable: "Vulnerable",
  "near-threatened": "Near Threatened",
  "least-concern": "Least Concern",
};

export const conservationStatusColors: Record<WildlifeSpecies["conservationStatus"], string> = {
  "critically-endangered": "bg-red-600",
  endangered: "bg-orange-600",
  vulnerable: "bg-amber-500",
  "near-threatened": "bg-yellow-500",
  "least-concern": "bg-green-600",
};

export const wildlifeStats = {
  mammalSpecies: "320+",
  birdSpecies: "860+",
  endemicMammals: "31",
  endemicBirds: "23",
};
