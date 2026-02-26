import heroLalibela from "@/assets/hero-lalibela.png";
import lalibelaGallery1 from "@/assets/lalibela-gallery-1.jpg";
import lalibelaGallery2 from "@/assets/lalibela-gallery-2.jpg";
import lalibelaGallery3 from "@/assets/lalibela-gallery-3.jpg";
import lalibelaGallery4 from "@/assets/lalibela-gallery-4.jpg";
import lalibelaGallery5 from "@/assets/lalibela-gallery-5.jpg";

import heroAxum from "@/assets/hero-axum.jpg";
import axumGallery1 from "@/assets/axum-gallery-1.jpg";
import axumGallery2 from "@/assets/axum-gallery-2.jpg";
import axumGallery3 from "@/assets/axum-gallery-3.jpg";
import axumGallery4 from "@/assets/axum-gallery-4.jpg";

import gondarGallery1 from "@/assets/gondar-gallery-1.jpg";
import gondarGallery2 from "@/assets/gondar-gallery-2.jpg";
import gondarGallery3 from "@/assets/gondar-gallery-3.jpg";
import gondarGallery4 from "@/assets/gondar-gallery-4.jpg";

import heroHarar from "@/assets/hero-harar.jpg";
import hararGallery1 from "@/assets/harar-gallery-1.jpg";
import hararGallery2 from "@/assets/harar-gallery-2.jpg";
import hararGallery3 from "@/assets/harar-gallery-3.jpg";
import hararGallery4 from "@/assets/harar-gallery-4.png";
import hararGallery5 from "@/assets/harar-gallery-5.jpg";

import abajifarHero from "@/assets/abajifar-hero.jpg";
import abajifarGallery1 from "@/assets/abajifar-gallery-1.jpg";
import abajifarGallery2 from "@/assets/abajifar-gallery-2.jpg";
import abajifarGallery3 from "@/assets/abajifar-gallery-3.jpg";

import nejashiHero from "@/assets/nejashi-hero.jpg";
import nejashiGallery1 from "@/assets/nejashi-gallery-1.jpg";
import nejashiGallery2 from "@/assets/nejashi-gallery-2.jpg";
import nejashiGallery3 from "@/assets/nejashi-gallery-3.jpg";

import sheikhHusseinHero from "@/assets/sheikh-hussein-hero.jpg";
import sheikhHusseinGallery1 from "@/assets/sheikh-hussein-gallery-1.jpg";
import sheikhHusseinGallery2 from "@/assets/sheikh-hussein-gallery-2.jpg";
import sheikhHusseinGallery3 from "@/assets/sheikh-hussein-gallery-3.jpg";

import baleHero from "@/assets/bale-hero.jpg";
import baleGallery1 from "@/assets/bale-gallery-1.jpg";
import baleGallery2 from "@/assets/bale-gallery-2.jpg";
import baleGallery3 from "@/assets/bale-gallery-3.jpg";
import baleGallery4 from "@/assets/bale-gallery-4.jpg";

export interface DestinationHighlight {
  title: string;
  description: string;
}

export interface GalleryImage {
  url: string;
  caption: string;
}

export interface DestinationFact {
  label: string;
  value: string;
}

export interface Destination {
  slug: string;
  name: string;
  amharicName: string;
  tagline: string;
  region: string;
  category: "heritage" | "nature" | "sacred";
  heroImage: string;
  galleryImages: GalleryImage[];
  description: string[];
  highlights: DestinationHighlight[];
  facts: DestinationFact[];
  bestTimeToVisit: string;
  gettingThere: string;
  whatToPack: string[];
}

export const destinations: Destination[] = [
  {
    slug: "lalibela",
    name: "Lalibela",
    amharicName: "ላሊበላ",
    tagline: "The New Jerusalem",
    region: "Amhara Region",
    category: "heritage",
    heroImage: heroLalibela,
    galleryImages: [
      { url: lalibelaGallery1, caption: "Bet Giyorgis — The Church of St. George" },
      { url: lalibelaGallery2, caption: "Interior of a rock-hewn church" },
      { url: lalibelaGallery3, caption: "Pilgrim at dawn prayers" },
      { url: lalibelaGallery4, caption: "Ancient passageways between churches" },
      { url: lalibelaGallery5, caption: "Traditional priest in ceremonial robes" },
    ],
    description: [
      "Eleven medieval monolithic cave churches carved from a single block of granite in the 12th century, Lalibela remains one of humanity's most extraordinary architectural achievements. King Lalibela commissioned these structures to create a 'New Jerusalem' when pilgrimages to the Holy Land became impossible due to the conflicts of the era.",
      "Each church is a masterwork of engineering — carved from the top down into the earth, with intricate drainage systems, secret tunnels connecting them, and walls adorned with centuries-old frescoes. Bet Giyorgis, shaped as a perfect cruciform, is the crown jewel visible from above as a cross cut 15 meters into the rock.",
      "Today, Lalibela remains an active site of worship. White-robed pilgrims gather at dawn, their chants echoing through passages carved nearly a millennium ago. It is not a ruin — it is a living, breathing testament to faith that defies the imagination.",
    ],
    highlights: [
      { title: "Bet Giyorgis (Church of St. George)", description: "The most iconic of the churches, carved in a perfect cross shape 15 meters into volcanic rock." },
      { title: "Bet Medhane Alem", description: "The largest monolithic church in the world, supported by 72 pillars inside and out." },
      { title: "Christmas & Timkat Celebrations", description: "Ethiopian Christmas (Genna) on January 7 draws tens of thousands of pilgrims in white." },
      { title: "Asheton Maryam Monastery", description: "A hilltop monastery offering panoramic views over the Lasta Mountains, reached by a steep trail." },
    ],
    facts: [
      { label: "UNESCO Status", value: "World Heritage Site (1978)" },
      { label: "Altitude", value: "2,500 m" },
      { label: "Best Season", value: "Oct – Mar" },
      { label: "Churches", value: "11 Rock-Hewn" },
    ],
    bestTimeToVisit: "October to March offers dry weather and clear skies. January features the spectacular Timkat (Epiphany) celebration with processions and chanting through the night.",
    gettingThere: "Daily flights from Addis Ababa to Lalibela Airport (1.5 hours). Overland via the historic northern route takes 1–2 days through stunning highland scenery.",
    whatToPack: [
      "Modest clothing for church visits (shoulders and knees covered)",
      "Sturdy walking shoes for uneven rock surfaces",
      "Sun protection — the highland sun is intense",
      "A headlamp for exploring dark tunnel passages",
    ],
  },
  {
    slug: "axum",
    name: "Axum",
    amharicName: "አክሱም",
    tagline: "Cradle of Civilization",
    region: "Tigray Region",
    category: "heritage",
    heroImage: heroAxum,
    galleryImages: [
      { url: axumGallery1, caption: "The Great Stele of Axum" },
      { url: axumGallery2, caption: "Ancient ruins of the palace complex" },
      { url: axumGallery3, caption: "Church of Our Lady Mary of Zion" },
      { url: axumGallery4, caption: "Inscriptions on ancient Axumite stones" },
    ],
    description: [
      "Axum was the capital of one of the great civilizations of the ancient world — the Aksumite Empire — which at its height rivaled Rome, Persia, and China. For nearly a thousand years, it controlled trade routes stretching from the Mediterranean to India, minting its own gold coins and erecting towering granite obelisks that still stand today.",
      "The city is home to the Northern Stelae Park, where massive carved monoliths — some reaching 33 meters — were raised as funeral markers for Aksumite royalty. The largest fallen stele weighs an estimated 520 tonnes, making it one of the heaviest single stones ever erected by human hands.",
      "Axum holds a singular claim in Ethiopian identity: the Chapel of the Tablet, which by tradition houses the Ark of the Covenant brought here by Menelik I, son of King Solomon and the Queen of Sheba — a narrative shared across Ethiopia's Christian, Islamic, and Jewish traditions. The Aksumite Empire was also among the first states in the world to embrace both Christianity and Islam, welcoming the companions of the Prophet Muhammad during the First Hijrah in 615 AD.",
    ],
    highlights: [
      { title: "Northern Stelae Park", description: "A field of towering granite obelisks, some over 1,700 years old, carved with false doors and windows." },
      { title: "Chapel of the Tablet", description: "Said to house the Ark of the Covenant — guarded by a single monk who never leaves." },
      { title: "Queen of Sheba's Bath", description: "An ancient reservoir still used today for the Timkat celebration, associated with the legendary queen." },
      { title: "Dungur Palace Ruins", description: "The ruins of what local tradition calls the Palace of the Queen of Sheba, spanning 3,000 square meters." },
    ],
    facts: [
      { label: "UNESCO Status", value: "World Heritage Site (1980)" },
      { label: "Altitude", value: "2,131 m" },
      { label: "Best Season", value: "Oct – Mar" },
      { label: "Founded", value: "~400 BC" },
    ],
    bestTimeToVisit: "October to March for dry weather. The Festival of Maryam Zion in late November and the annual Hidar Tsion celebration draw visitors to Axum's ancient sites.",
    gettingThere: "Daily flights from Addis Ababa to Axum Airport (1.5 hours). Can be combined with a northern circuit including Lalibela and Gondar.",
    whatToPack: [
      "Comfortable walking shoes for ruins exploration",
      "Sun hat and sunscreen for highland exposure",
      "Camera with zoom lens for stele details",
      "Light layers — highland temperatures vary widely",
    ],
  },
  {
    slug: "gondar",
    name: "Gondar",
    amharicName: "ጎንደር",
    tagline: "The Camelot of Africa",
    region: "Amhara Region",
    category: "heritage",
    heroImage: gondarGallery1,
    galleryImages: [
      { url: gondarGallery1, caption: "Fasil Ghebbi — The Royal Enclosure" },
      { url: gondarGallery2, caption: "Debre Berhan Selassie Church ceiling" },
      { url: gondarGallery3, caption: "Castle walls at golden hour" },
      { url: gondarGallery4, caption: "Fasilides' Bath during Timkat" },
    ],
    description: [
      "Gondar served as Ethiopia's capital for over two centuries, from 1636 to 1855, and its skyline of medieval castles, churches, and royal baths earned it the title 'Camelot of Africa.' The Fasil Ghebbi — a fortified royal compound — contains palaces, a chancery, libraries, and elaborate gardens surrounded by 900-meter walls.",
      "The architectural fusion is extraordinary: Portuguese Baroque merged with Aksumite traditions, Indian and Moorish influences woven into the stone. Emperor Fasilides and his successors built a complex that rivaled the courts of Europe, hosting grand banquets, diplomatic receptions, and religious ceremonies.",
      "Beyond the castles, Debre Berhan Selassie (Trinity at the Mount of Light) contains what many consider the finest church art in Ethiopia — an entire ceiling of winged angel faces gazing down, painted in vivid color over 300 years ago.",
    ],
    highlights: [
      { title: "Fasil Ghebbi (Royal Enclosure)", description: "A UNESCO-listed compound of six castles and numerous auxiliary buildings within fortified walls." },
      { title: "Debre Berhan Selassie Church", description: "Famous for its ceiling covered with 80 angel faces and walls of biblical narratives in vivid color." },
      { title: "Fasilides' Bath", description: "A sunken stone pool filled annually for Timkat — one of Ethiopia's most photographed moments." },
      { title: "Kuskuam Complex", description: "The hilltop palace of Empress Mentewab with sweeping views over the city and Lake Tana." },
    ],
    facts: [
      { label: "UNESCO Status", value: "World Heritage Site (1979)" },
      { label: "Altitude", value: "2,133 m" },
      { label: "Best Season", value: "Oct – Mar" },
      { label: "Founded", value: "1636 AD" },
    ],
    bestTimeToVisit: "October to March for optimal weather. Timkat (Ethiopian Epiphany) in January transforms Fasilides' Bath into one of the most spectacular celebrations in Africa.",
    gettingThere: "Daily flights from Addis Ababa (1 hour). By road from Bahir Dar (3 hours) through scenic highland routes along Lake Tana.",
    whatToPack: [
      "Walking shoes for cobblestone paths in the royal enclosure",
      "Light rain jacket if visiting early October",
      "Binoculars for viewing church ceiling artwork details",
      "Respectful attire for church visits",
    ],
  },
  {
    slug: "harar",
    name: "Harar",
    amharicName: "ሐረር",
    tagline: "The Walled City of Peace",
    region: "Harari Region",
    category: "heritage",
    heroImage: heroHarar,
    galleryImages: [
      { url: hararGallery1, caption: "Colorful alleyways of Harar" },
      { url: hararGallery2, caption: "The ancient gates of Harar" },
      { url: hararGallery3, caption: "Traditional Harari house interior" },
      { url: hararGallery4, caption: "Hyena man of Harar feeding wild hyenas" },
      { url: hararGallery5, caption: "Spice market within the old walls" },
    ],
    description: [
      "Harar Jugol — the fortified historic town — is considered the fourth holiest city in Islam, home to 82 mosques (three dating to the 10th century) and 102 shrines packed within medieval walls. Its labyrinth of 368 alleyways creates one of the most atmospheric urban experiences on the continent.",
      "The old city is a sensory tapestry: the scent of freshly roasted coffee mingles with frankincense from shrines, hand-painted Harari houses glow in turquoise and ochre, and the call to prayer echoes through narrow passages that have changed little in 500 years. Harar is also claimed as the birthplace of the coffee ceremony.",
      "Perhaps most remarkably, Harar's residents have maintained a centuries-old tradition of feeding wild hyenas at the city gates each night. The 'Hyena Man' calls them by name, hand-feeding meat to animals most cities would exterminate — a relationship built on mutual respect unique in the world.",
    ],
    highlights: [
      { title: "Harar Jugol (Old Walled City)", description: "A UNESCO-listed maze of 368 alleyways, 82 mosques, and brightly painted traditional houses." },
      { title: "Hyena Feeding Ceremony", description: "A nightly tradition where the 'Hyena Man' feeds wild hyenas by hand at the city walls — visitors can participate." },
      { title: "Arthur Rimbaud's House", description: "The residence of the French poet who traded coffee here in the 1880s, now a museum and cultural center." },
      { title: "Traditional Harari Houses", description: "Interiors decorated with colorful baskets and textiles, each wall arrangement telling the family's story." },
    ],
    facts: [
      { label: "UNESCO Status", value: "World Heritage Site (2006)" },
      { label: "Altitude", value: "1,885 m" },
      { label: "Best Season", value: "Oct – Feb" },
      { label: "Mosques", value: "82 Historic" },
    ],
    bestTimeToVisit: "October to February for pleasant temperatures. The annual Ashura celebration is a major event, and the hyena feeding happens every single night year-round.",
    gettingThere: "Flights to Dire Dawa (1 hour from Addis), then a 45-minute drive to Harar. The scenic train from Addis Ababa to Dire Dawa offers a memorable alternative.",
    whatToPack: [
      "Comfortable shoes for navigating cobblestone alleyways",
      "Modest dress — Harar is a deeply religious city",
      "A good camera for the vibrant house colors",
      "An adventurous spirit for the hyena feeding",
    ],
  },
  {
    slug: "aba-jifar-palace",
    name: "Aba Jifar Palace",
    amharicName: "አባ ጅፋር ቤተ መንግሥት",
    tagline: "Kingdom in the Coffee Forests",
    region: "Jimma Zone, Oromia",
    category: "heritage",
    heroImage: abajifarHero,
    galleryImages: [
      { url: abajifarGallery1, caption: "Lush forests surrounding the palace grounds" },
      { url: abajifarGallery2, caption: "Traditional audience hall architecture" },
      { url: abajifarGallery3, caption: "Views across the Gibe River valley" },
    ],
    description: [
      "Perched atop Jiren Hill overlooking the coffee-rich Gibe River valley, Aba Jifar Palace is the last surviving royal compound of the Kingdom of Jimma — one of the five Gibe kingdoms that flourished in southwestern Ethiopia. Built in the 1880s by King Aba Jifar II, it stands as a testament to a sophisticated African monarchy that traded coffee with the world.",
      "The palace complex includes a grand audience hall, royal mosque, a labyrinth of interconnected rooms, and watchtowers offering 360-degree views of rolling green hills blanketed in wild coffee forest. The architecture blends indigenous Oromo building traditions with Islamic decorative elements and surprising European influences — a reflection of Jimma's cosmopolitan trading networks.",
      "Surrounded by the birthplace of Coffea arabica, visiting the palace is inseparable from the coffee experience. The region's wild coffee forests are a UNESCO Biosphere Reserve, and traditional Oromo coffee ceremonies in nearby villages connect the modern cup to its 1,000-year-old origins.",
    ],
    highlights: [
      { title: "The Royal Compound", description: "Interconnected buildings including the throne room, private quarters, and a royal mosque on the hilltop." },
      { title: "Coffee Forest Walks", description: "Explore the wild Arabica coffee forests — the genetic origin of all the world's coffee — surrounding the palace." },
      { title: "Panoramic Valley Views", description: "The hilltop position offers sweeping views of the Gibe valley and endless green highlands." },
      { title: "Traditional Oromo Villages", description: "Experience authentic Oromo culture and coffee ceremonies in surrounding communities." },
    ],
    facts: [
      { label: "Heritage Status", value: "National Heritage Site" },
      { label: "Altitude", value: "1,720 m" },
      { label: "Best Season", value: "Oct – May" },
      { label: "Built", value: "1880s" },
    ],
    bestTimeToVisit: "October to May avoids heavy rains. The coffee harvest season (November–January) is magical — the forests are alive with activity and the aroma of fresh coffee fills the air.",
    gettingThere: "Fly to Jimma from Addis Ababa (1 hour) or drive (5 hours through scenic countryside). The palace is 7 km from Jimma town center.",
    whatToPack: [
      "Rain gear — the region receives more rainfall than the north",
      "Insect repellent for forest walks",
      "A thermos for carrying fresh-roasted local coffee",
      "Comfortable hiking shoes for forest trails",
    ],
  },
  {
    slug: "nejashi-mosque",
    name: "Nejashi Mosque",
    amharicName: "ነጃሺ መስጊድ",
    tagline: "Where Islam First Found Refuge",
    region: "Tigray Region",
    category: "sacred",
    heroImage: nejashiHero,
    galleryImages: [
      { url: nejashiGallery1, caption: "Sacred tombs of the First Hijrah companions" },
      { url: nejashiGallery2, caption: "Prayer hall interior with ancient columns" },
      { url: nejashiGallery3, caption: "Mountain backdrop behind the mosque complex" },
    ],
    description: [
      "In 615 AD — seven years before the Hijrah to Medina — the Prophet Muhammad sent his persecuted followers across the Red Sea to the court of the Christian king of Aksum, An-Najashi (Negus). This First Hijrah to Abyssinia represents Islam's earliest sanctuary, and the mosque at Negash marks the spot where those first Muslim refugees found shelter and freedom of worship.",
      "The Nejashi Mosque is therefore considered the first mosque in Africa and one of the most historically significant sites in the Islamic world. The complex includes the tomb of An-Najashi and the graves of several companions of the Prophet, making it a pilgrimage site of deep reverence for Muslims worldwide.",
      "Recently renovated with funding from Turkey and other nations, the mosque sits against a dramatic backdrop of Tigray's sandstone mountains. Its significance transcends denomination — it stands as proof that Ethiopia has been a cradle of coexistence between Islam and Christianity for over 1,400 years, a legacy the country still embodies today.",
    ],
    highlights: [
      { title: "The First Mosque in Africa", description: "Dating to 615 AD, seven years before the founding of Islam's holiest mosques in Medina." },
      { title: "Tombs of the Sahabah", description: "Sacred burial sites of companions of the Prophet who made the First Hijrah to Abyssinia." },
      { title: "Tomb of An-Najashi", description: "The resting place of the Aksumite king who protected the first Muslim refugees from persecution." },
      { title: "Interfaith Heritage", description: "A powerful symbol of Ethiopia's 1,400-year tradition of Christian-Muslim coexistence." },
    ],
    facts: [
      { label: "Heritage Status", value: "Sacred Islamic Site" },
      { label: "Altitude", value: "2,460 m" },
      { label: "Best Season", value: "Oct – Mar" },
      { label: "Founded", value: "615 AD" },
    ],
    bestTimeToVisit: "October to March for dry season. The annual Mawlid celebration draws pilgrims from across the Horn of Africa and beyond.",
    gettingThere: "The mosque is near the town of Negash in Tigray, about 60 km from Mekelle. Accessible by road from Mekelle or as part of a Tigray cultural circuit.",
    whatToPack: [
      "Modest clothing and head covering (required for entry)",
      "Shoes that slip on/off easily for mosque visits",
      "Water and sun protection for the highland walk",
      "Respectful demeanor — this is an active pilgrimage site",
    ],
  },
  {
    slug: "cave-of-sheikh-hussein",
    name: "Cave of Sheikh Hussein",
    amharicName: "የሼኽ ሁሴን ዋሻ",
    tagline: "The Sacred Pilgrimage",
    region: "Bale Zone, Oromia",
    category: "sacred",
    heroImage: sheikhHusseinHero,
    galleryImages: [
      { url: sheikhHusseinGallery1, caption: "Pilgrims gathering at the shrine" },
      { url: sheikhHusseinGallery2, caption: "Lush surroundings of the Bale lowlands" },
      { url: sheikhHusseinGallery3, caption: "Inside the cave — shrines draped in colored fabrics" },
    ],
    description: [
      "Sheikh Hussein is one of the most important Islamic pilgrimage sites in the Horn of Africa, drawing hundreds of thousands of devotees twice a year to the sacred cave and shrine of the 13th-century Sufi saint Sheikh Hussein bin Ibrahim. Nestled in the Bale lowlands, the site combines deep spiritual significance with raw natural beauty.",
      "The pilgrimage tradition, known as muuda, sees devotees walking for days — sometimes weeks — from across Ethiopia, Somalia, Djibouti, and Kenya to reach the cave. The ceremonies blend orthodox Islamic practice with indigenous Oromo spiritual traditions, creating a devotional experience unique in the Muslim world.",
      "The cave itself is a geological marvel, with chambers connected by narrow passages opening into cathedral-like spaces. Within, shrines draped in colored fabrics mark spots associated with Sheikh Hussein's miracles. The atmosphere during pilgrimage season is electrifying — chanting, drumming, and the swaying of thousands of pilgrims create a spiritual intensity that transcends language.",
    ],
    highlights: [
      { title: "The Sacred Cave", description: "A vast cave system with chambers used for prayer and meditation since the 13th century." },
      { title: "Biannual Muuda Pilgrimage", description: "Held in February/March and August, drawing hundreds of thousands of pilgrims from across East Africa." },
      { title: "Shrine of Sheikh Hussein", description: "The tomb of the Sufi saint, draped in vibrant fabrics and surrounded by centuries of devotion." },
      { title: "Cultural Fusion", description: "A unique blend of Islamic Sufi practice and Oromo spiritual traditions found nowhere else." },
    ],
    facts: [
      { label: "Heritage Status", value: "Sacred Pilgrimage Site" },
      { label: "Altitude", value: "1,200 m" },
      { label: "Best Season", value: "Feb – Mar (Pilgrimage)" },
      { label: "Annual Pilgrims", value: "500,000+" },
    ],
    bestTimeToVisit: "The biannual muuda pilgrimages in February/March and August are the most powerful times to visit, though the site welcomes visitors year-round.",
    gettingThere: "Located in Bale Zone, accessible via Robe/Goba. Drive from Addis Ababa (8-10 hours) or fly to the Bale region and drive from there.",
    whatToPack: [
      "Very modest clothing and head covering",
      "Sleeping gear if attending the pilgrimage",
      "Torch/flashlight for cave exploration",
      "Food and water — facilities are basic",
    ],
  },
  {
    slug: "bale-mountains",
    name: "Bale Mountains",
    amharicName: "የባሌ ተራሮች",
    tagline: "Roof of the South",
    region: "Oromia Region",
    category: "nature",
    heroImage: baleHero,
    galleryImages: [
      { url: baleGallery1, caption: "Harenna Forest — Ethiopia's largest cloud forest" },
      { url: baleGallery2, caption: "Giant Lobelia fields on the plateau" },
      { url: baleGallery3, caption: "Ethiopian Wolf hunting on the Sanetti Plateau" },
      { url: baleGallery4, caption: "Waterfalls in the Harenna Forest" },
    ],
    description: [
      "The Bale Mountains National Park is Ethiopia's most biodiverse protected area, rising from dense tropical forest to the barren, otherworldly Sanetti Plateau at over 4,000 meters — the highest all-weather road in Africa. It is the last stronghold of the Ethiopian Wolf, the world's rarest canid, and home to an extraordinary concentration of endemic species.",
      "The park's dramatic altitude range creates distinct ecological zones within a single day's drive: lush Harenna Forest (Africa's second-largest cloud forest) gives way to juniper woodlands, then to Afroalpine moorlands carpeted with giant lobelia — alien-looking plants that can grow 6 meters tall and bloom only once in their 30-year lifespan.",
      "For wildlife enthusiasts, Bale is unmatched. The Sanetti Plateau hosts the densest population of Ethiopian Wolves, visible hunting giant mole-rats at dawn. Mountain Nyala, Menelik's Bushbuck, and over 280 bird species — many found nowhere else on Earth — make this a naturalist's paradise hiding in plain sight.",
    ],
    highlights: [
      { title: "Sanetti Plateau", description: "Africa's highest all-weather plateau road at 4,000+ m, home to Ethiopian Wolves and surreal landscapes." },
      { title: "Harenna Forest", description: "A vast cloud forest descending from the plateau, harboring wild coffee, colobus monkeys, and giant forest hogs." },
      { title: "Ethiopian Wolf Sightings", description: "The world's best place to observe the rarest canid on earth, hunting across the open plateau at dawn." },
      { title: "Giant Lobelia Fields", description: "Surreal Afroalpine landscapes filled with 6-meter-tall giant lobelias found only at extreme altitudes." },
    ],
    facts: [
      { label: "Park Status", value: "National Park (1970)" },
      { label: "Highest Peak", value: "4,377 m (Tullu Dimtu)" },
      { label: "Best Season", value: "Nov – Mar" },
      { label: "Endemic Species", value: "26+ mammals" },
    ],
    bestTimeToVisit: "November to March for dry weather and clear skies. Ethiopian wolves are most active at dawn year-round, and the wildflower season peaks in September-October.",
    gettingThere: "Fly to Bale/Robe from Addis Ababa or drive (7-8 hours through the Rift Valley). Park headquarters at Dinsho is the main entry point.",
    whatToPack: [
      "Warm layers — nights on the plateau drop below freezing",
      "Waterproof jacket for unpredictable mountain weather",
      "Binoculars for wolf and bird watching",
      "Camping gear if planning multi-day treks",
    ],
  },
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}

export function getRelatedDestinations(currentSlug: string, count = 3): Destination[] {
  return destinations
    .filter((d) => d.slug !== currentSlug)
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
}

export function getDestinationsByCategory(category: Destination["category"]): Destination[] {
  return destinations.filter((d) => d.category === category);
}
