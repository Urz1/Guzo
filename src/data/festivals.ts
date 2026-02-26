import irrechaImg from "@/assets/festival-irrecha.jpg";
import ficheeImg from "@/assets/festival-fichee.jpeg";
import ashendaImg from "@/assets/festival-ashenda.jpg";
import enkutatashImg from "@/assets/festival-enkutatash.jpg";
import timkatImg from "@/assets/festival-timkat.jpg";
import meskelImg from "@/assets/gallery-meskel.jpg";
import eidImg from "@/assets/EID_alfitr.jpg";

export type FestivalTradition =
  | "orthodox"
  | "islamic"
  | "traditional"
  | "national";

export interface Festival {
  id: string;
  name: string;
  amharicName: string;
  tradition: FestivalTradition;
  month: string;
  location: string;
  tagline: string;
  description: string;
  highlights: string[];
  image: string;
  unescoStatus?: string;
}

export const traditionLabels: Record<FestivalTradition, string> = {
  orthodox: "Orthodox Christian",
  islamic: "Islamic",
  traditional: "Traditional",
  national: "National",
};

export const traditionColors: Record<FestivalTradition, string> = {
  orthodox: "bg-amber-700",
  islamic: "bg-emerald-700",
  traditional: "bg-sky-700",
  national: "bg-violet-700",
};

export const festivals: Festival[] = [
  {
    id: "irrecha",
    name: "Irrecha",
    amharicName: "ኢሬቻ",
    tradition: "traditional",
    month: "September – October",
    location: "Lake Hora, Bishoftu (Debre Zeit)",
    tagline: "Oromo Thanksgiving at the Sacred Lake",
    description:
      "Irrecha is the Oromo people's annual thanksgiving celebration honoring Waaqa (God) and marking the transition from the rainy season to the bright harvest months. Millions gather at Lake Hora Bishoftu dressed in vibrant traditional attire, carrying fresh grass and flowers as offerings of gratitude. The festival embodies the Oromo philosophy of living in harmony with nature and community — its roots stretch back thousands of years, predating all Abrahamic religions in the region.",
    highlights: [
      "Millions gather at Lake Hora in traditional Oromo dress",
      "Offerings of fresh grass and wildflowers at the water's edge",
      "Traditional Oromo songs, chanting, and horseback displays",
      "Connected to the Gadaa system — UNESCO Intangible Heritage",
    ],
    image: irrechaImg,
    unescoStatus: "Gadaa System — UNESCO Intangible Heritage (2016)",
  },
  {
    id: "fichee-chambalaalla",
    name: "Fichee-Chambalaalla",
    amharicName: "ፊቼ ጫምባላላ",
    tradition: "traditional",
    month: "Varies (lunar calendar)",
    location: "Sidama Region, Southern Ethiopia",
    tagline: "Sidama New Year — A Feast of Unity",
    description:
      "Fichee-Chambalaalla is the New Year festival of the Sidama people, rooted in the story of a woman named Ficho who brought buurisame — a dish of false banana, milk, and butter — to share with her parents and neighbors after marriage. The festival celebrates unity, reconciliation, gender equality, and environmental stewardship. Sidama astrologers called Ayantos determine the date each year by observing stars and moon movements.",
    highlights: [
      "Traditional buurisame feast shared among neighbors",
      "Clan leaders counsel peace, forgiveness, and environmental care",
      "Colorful traditional songs, dances, and community gatherings",
      "Date determined by Ayantos astrologers reading the stars",
    ],
    image: ficheeImg,
    unescoStatus: "UNESCO Intangible Cultural Heritage (2015)",
  },
  {
    id: "ashenda",
    name: "Ashenda",
    amharicName: "አሸንዳ",
    tradition: "national",
    month: "August (third week)",
    location: "Tigray & Amhara Regions",
    tagline: "Festival of the Girls",
    description:
      "Ashenda — also called Shadey in Tigrinya — is a uniquely female festival where young women and girls dress in elaborate traditional cotton garments with intricate embroidery, jewelry, and braided hairstyles. The name comes from a tall dried grass woven into decorative skirts. Groups of girls go house-to-house singing traditional songs with hand drums, receiving gifts and blessings. It is one of the most photogenic and culturally distinctive celebrations on the continent, with roots that likely predate Christianity in the region.",
    highlights: [
      "Young women in stunning traditional dress with grass skirts",
      "House-to-house singing and drumming processions",
      "Elaborate hairstyles and handwoven tilfi garments",
      "Celebrated primarily in Mekelle, Adwa, and across Tigray",
    ],
    image: ashendaImg,
  },
  {
    id: "enkutatash",
    name: "Enkutatash",
    amharicName: "እንቁጣጣሽ",
    tradition: "national",
    month: "September 11 (or 12 in leap year)",
    location: "Nationwide",
    tagline: "Ethiopian New Year — Gift of Jewels",
    description:
      "Enkutatash means 'gift of jewels' and marks the Ethiopian New Year on September 11, when the country's unique calendar turns over. The festival coincides with the end of the heavy rains, when the countryside erupts in fields of yellow Adey Abeba (Meskel daisies). Children gather bouquets of the golden flowers to present to neighbors while singing traditional New Year songs. Families gather for feasts of injera, doro wat, and freshly roasted coffee. It is celebrated across all faiths and ethnicities — a truly national moment of renewal.",
    highlights: [
      "Hillsides blanketed in yellow Meskel daisies",
      "Children singing door-to-door with flower bouquets",
      "Traditional family feasts with injera and doro wat",
      "Cross-faith celebration observed by all Ethiopians",
    ],
    image: enkutatashImg,
  },
  {
    id: "timkat",
    name: "Timkat",
    amharicName: "ጥምቀት",
    tradition: "orthodox",
    month: "January 19 (or 20 in leap year)",
    location: "Nationwide — best in Gondar & Lalibela",
    tagline: "The Baptism of Water and Light",
    description:
      "Timkat celebrates the baptism of Jesus in the Jordan River and is Ethiopia's most spectacular Orthodox festival. The Tabot (replica of the Ark of the Covenant) is carried in procession from churches to a body of water, accompanied by priests in full ceremonial regalia, chanting, drums, and tens of thousands of white-robed faithful. At dawn, the water is blessed and the crowd plunges in. In Gondar, the procession fills Fasilides' Bath — creating one of Africa's most photographed moments.",
    highlights: [
      "Torch-lit processions carrying the Tabot through the night",
      "Mass baptism at dawn in blessed waters",
      "Fasilides' Bath in Gondar filled for the ceremony",
      "Priests in jeweled crowns and embroidered vestments",
    ],
    image: timkatImg,
    unescoStatus: "UNESCO Intangible Cultural Heritage (2019)",
  },
  {
    id: "meskel",
    name: "Meskel",
    amharicName: "መስቀል",
    tradition: "orthodox",
    month: "September 27",
    location: "Nationwide — best in Addis Ababa (Meskel Square)",
    tagline: "When the Sky Catches Fire",
    description:
      "Meskel commemorates the discovery of the True Cross and is marked by the lighting of a massive bonfire called Demera in Addis Ababa's Meskel Square. Hundreds of thousands gather as choirs sing, priests dance, and the towering Demera — decorated with daisies and topped with a cross — is set ablaze at dusk. The direction the bonfire falls is believed to foretell the coming year. As Ethiopia's first UNESCO-inscribed intangible heritage, Meskel is both a religious observance and a defining national spectacle.",
    highlights: [
      "Massive Demera bonfire in Meskel Square, Addis Ababa",
      "Choirs, priests, and dancers circling the flames",
      "The direction the bonfire falls foretells the year ahead",
      "Yellow Meskel daisies blanket the city",
    ],
    image: meskelImg,
    unescoStatus: "UNESCO Intangible Cultural Heritage (2013)",
  },
  {
    id: "eid-al-fitr",
    name: "Eid al-Fitr",
    amharicName: "ዒድ አል ፊጥር",
    tradition: "islamic",
    month: "Varies (1st Shawwal — end of Ramadan)",
    location: "Nationwide — Addis Ababa, Harar, Dire Dawa, Jimma",
    tagline: "A Nation Celebrates the Breaking of the Fast",
    description:
      "Eid al-Fitr marks the end of the holy month of Ramadan and is one of Ethiopia's most joyous celebrations, observed by millions of Muslims across the country. In Addis Ababa, tens of thousands gather at the Addis Ababa Stadium and major mosques for dawn prayers, dressed in their finest clothes. The streets come alive with families visiting one another, sharing feasts of traditional dishes, and exchanging gifts. Eid in Ethiopia is a vivid reminder of the country's deep Islamic heritage — nearly half the population observes Ramadan, and the celebration bridges communities across ethnic and regional lines.",
    highlights: [
      "Massive dawn prayers at stadiums and mosques across Addis Ababa",
      "Families in festive dress visiting neighbors with sweets and gifts",
      "Traditional feasts featuring special Eid dishes shared communally",
      "A celebration that unites Muslim communities across all of Ethiopia's regions",
    ],
    image: eidImg,
  },
];

export function getFestivalsByTradition(
  tradition: FestivalTradition
): Festival[] {
  return festivals.filter((f) => f.tradition === tradition);
}

export function getFeaturedFestivals(count = 4): Festival[] {
  return [
    festivals.find((f) => f.id === "irrecha")!,
    festivals.find((f) => f.id === "timkat")!,
    festivals.find((f) => f.id === "ashenda")!,
    festivals.find((f) => f.id === "eid-al-fitr")!,
  ].slice(0, count);
}
