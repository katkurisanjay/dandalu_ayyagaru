import { poojaItems } from './poojasData';

export interface PoojaDetail {
  id: string;
  name: string;
  subtitle: string;
  deity: string;
  duration: string;
  language: string;
  occasion: string;
  categories: string[];
  imageUrl: string;
  startingPrice: number;
  shortDesc: string;
  significance: string;
  benefits: string[];
  process: { step: string; title: string; desc: string }[];
  materials: string[];
  packages: { name: string; price: number; includes: string[] }[];
  faqs: { q: string; a: string }[];
}

export function nameToId(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const IMAGE_MAP: Record<string, string> = {
  "Relationship and Marriages": "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?auto=format&fit=crop&q=80&w=1200&h=700",
  "New Beginnings": "https://images.unsplash.com/photo-1582560469792-5642cb6be220?auto=format&fit=crop&q=80&w=1200&h=700",
  "Astrology Dosha Related": "https://images.unsplash.com/photo-1582560469792-5642cb6be220?auto=format&fit=crop&q=80&w=1200&h=700",
  "Money and Debt Related": "https://images.unsplash.com/photo-1605806616949-1e87b487bc2a?auto=format&fit=crop&q=80&w=1200&h=700",
  "Festival Poojas": "https://images.unsplash.com/photo-1605806616949-1e87b487bc2a?auto=format&fit=crop&q=80&w=1200&h=700",
  "Death Rituals": "https://images.unsplash.com/photo-1604604994733-411db1898739?auto=format&fit=crop&q=80&w=1200&h=700",
  "Ancestors/Pitru": "https://images.unsplash.com/photo-1604604994733-411db1898739?auto=format&fit=crop&q=80&w=1200&h=700",
  "Baby Related": "https://images.unsplash.com/photo-1604604994733-411db1898739?auto=format&fit=crop&q=80&w=1200&h=700",
  "Health Issues": "https://images.unsplash.com/photo-1604604994733-411db1898739?auto=format&fit=crop&q=80&w=1200&h=700",
  "Education and Career": "https://images.unsplash.com/photo-1582560469792-5642cb6be220?auto=format&fit=crop&q=80&w=1200&h=700",
  "Protection and Victory": "https://images.unsplash.com/photo-1604604994733-411db1898739?auto=format&fit=crop&q=80&w=1200&h=700",
  "Ceremonies": "https://images.unsplash.com/photo-1604604994733-411db1898739?auto=format&fit=crop&q=80&w=1200&h=700",
};

const STANDARD_PACKAGES = [
  { name: "Basic Puja", price: 2999, includes: ["1 Certified Pandit", "Puja samagri included", "Sankalpa & Aarti", "Duration: 1–2 hrs"] },
  { name: "Standard Puja", price: 4999, includes: ["2 Certified Pandits", "All puja materials", "Complete Stotra recitation", "Havan included", "Duration: 2–3 hrs"] },
  { name: "Premium Puja", price: 8999, includes: ["3+ Pandits", "Premium quality materials", "Full Vidhi with Havan & Homam", "Live video streaming", "Duration: 3–5 hrs", "Blessings certificate"] },
];

const STANDARD_FAQS = [
  { q: "How many pandits are needed?", a: "Depends on the package. Basic: 1 pandit, Standard: 2, Premium: 3 or more." },
  { q: "What should devotees wear?", a: "Traditional attire is recommended — dhoti for men, saree or salwar for women." },
  { q: "Can it be conducted at home?", a: "Yes. Our pandits travel to your home across Bangalore and nearby areas. Online puja is also available." },
  { q: "How far in advance should I book?", a: "At least 3–5 days in advance. For weekends, book 1 week ahead for smooth arrangements." },
];

// Full detail map for all 80+ poojas
const POOJA_SPECIFICS: Record<string, Partial<PoojaDetail>> = {

  "office-opening-puja": {
    subtitle: "Consecrate Your Workplace with Divine Blessings",
    deity: "Lord Ganesha & Goddess Lakshmi",
    shortDesc: "Office Opening Puja is performed before inaugurating a new office, shop, or commercial establishment to invoke divine blessings for prosperity, success, and obstacle-free business operations.",
    significance: "Starting a business in the presence of the divine ensures its foundation is sacred. This puja purifies the commercial space, removes Vastu doshas, and invites the blessings of Lord Ganesha (remover of obstacles) and Goddess Lakshmi (bestower of wealth).",
    benefits: ["Removes obstacles from new business ventures", "Invites prosperity and financial growth", "Purifies the workplace energy", "Creates a positive, productive environment", "Protects from competition and evil eye", "Ensures smooth business operations"],
    process: [
      { step: "01", title: "Vastu Puja", desc: "The office space is purified room by room, and the five elements are balanced according to Vastu principles." },
      { step: "02", title: "Ganapathi Avahan", desc: "Lord Ganesha is invoked to remove all obstacles from the business path." },
      { step: "03", title: "Lakshmi Puja", desc: "Goddess Lakshmi is worshipped at the main entrance and locker/cash area for financial prosperity." },
      { step: "04", title: "Saraswati Puja", desc: "Goddess Saraswati is propitiated for knowledge and intelligence in business decisions." },
      { step: "05", title: "Havan", desc: "A sacred fire ritual with specific offerings to purify and energize the workspace." },
      { step: "06", title: "Nariyal Todna", desc: "A coconut is broken at the main entrance — the business is now officially opened under divine auspice." },
    ],
    materials: ["Coconut", "Mango leaves", "Marigold garlands", "Incense sticks", "Camphor", "Haldi-kumkum", "Gold coin or currency note", "Red cloth"],
  },

  "new-vehicle-puja-vahana-puja": {
    subtitle: "Bless Your New Vehicle for Safe and Prosperous Journeys",
    deity: "Lord Ganesha & Goddess Durga",
    shortDesc: "Vahana Puja is performed before using a newly purchased vehicle to seek divine protection from accidents, ensure safe travel, and invoke blessings for the vehicle and its occupants.",
    significance: "In Hindu tradition, every vehicle is considered a living entity that carries us through life's journey. Vahana Puja consecrates the vehicle, removes negative energies, and places it under the protective shield of Lord Ganesha and Goddess Durga.",
    benefits: ["Protects from road accidents", "Removes negative energies from the vehicle", "Ensures safe journeys for all occupants", "Brings good luck and prosperity", "Traditional protection before first drive", "Removes the evil eye from the new possession"],
    process: [
      { step: "01", title: "Ganapathi Puja", desc: "Lord Ganesha is invoked to remove all obstacles from the vehicle's path." },
      { step: "02", title: "Punyahavachanam", desc: "The vehicle is purified with sacred water and mantras." },
      { step: "03", title: "Abhishek", desc: "The vehicle bonnet, steering wheel, and wheels are anointed with turmeric and kumkum." },
      { step: "04", title: "Flower & Coconut Offering", desc: "Garlands are placed on the vehicle; a coconut is broken at the front as a sacred offering." },
      { step: "05", title: "Aarti", desc: "Aarti is performed with camphor flame around the vehicle." },
      { step: "06", title: "First Drive Blessing", desc: "The owner drives the vehicle a short distance in the auspicious direction, typically East." },
    ],
    materials: ["Marigold garlands", "Coconut", "Haldi-kumkum", "Lemon", "Camphor", "Incense sticks", "Neem leaves", "Nimbu-mirchi string"],
  },

  "satyanarayan-puja": {
    subtitle: "The Sacred Story of Lord Vishnu's Grace",
    deity: "Lord Satyanarayan (Vishnu)",
    shortDesc: "Satyanarayan Puja is one of the most popular Hindu pujas, dedicated to Lord Vishnu in His form as Satyanarayan — the God of Truth — for prosperity, removal of obstacles, and fulfillment of wishes.",
    significance: "The ritual involves the recitation of the Satyanarayan Katha from the Skanda Purana — five stories of devotees whose wishes were fulfilled through this puja. It is performed at housewarming, marriage, business openings, and any auspicious milestone.",
    benefits: ["Brings prosperity, wealth, and financial stability", "Removes obstacles from personal and professional life", "Fulfills desires and long-pending wishes", "Strengthens family bonds", "Provides peace of mind", "Ideal for housewarming, marriage, and milestone occasions"],
    process: [
      { step: "01", title: "Sankalpam", desc: "The devotee takes a sacred resolve, stating their name, gotra, and intention." },
      { step: "02", title: "Ganapathi Puja", desc: "Lord Ganesha is invoked to ensure the puja proceeds without interruption." },
      { step: "03", title: "Kalasha Sthapana", desc: "A sacred Kalasha filled with water, mango leaves, and coconut is installed." },
      { step: "04", title: "Satyanarayan Katha", desc: "All five chapters of the Katha are narrated by the Pandit while devotees listen." },
      { step: "05", title: "Panchamrit Abhishek", desc: "The deity is bathed with milk, curd, honey, ghee, and sugar." },
      { step: "06", title: "Aarti & Prasad", desc: "The puja concludes with aarti and distribution of Panchamrit prasad." },
    ],
    materials: ["Idol or image of Lord Satyanarayan", "Panchamrit", "Tulsi leaves", "Fruits", "Flowers", "Incense and camphor", "Yellow cloth", "Kalasha"],
  },

  "sunderkand-path": {
    subtitle: "Chanting the Glory of Lord Hanuman's Devotion",
    deity: "Lord Hanuman",
    shortDesc: "Sunderkand Path involves the recitation of the fifth book of the Valmiki Ramayan — the Sunderkand — which narrates Hanuman's heroic journey to Lanka and his unwavering devotion to Lord Ram.",
    significance: "Sunderkand is considered the most powerful chapter in the Ramayan. Its recitation fills the atmosphere with divine energy, removes obstacles, dispels fear and negativity, and invokes Hanuman's boundless strength and devotion.",
    benefits: ["Removes fear, anxiety, and depression", "Destroys negative energies and evil eye", "Brings protection for the whole family", "Fulfills long-pending desires", "Grants strength and courage", "Resolves disputes and legal matters"],
    process: [
      { step: "01", title: "Hanuman Avahan", desc: "Lord Hanuman is invoked with red sindoor and flowers, a lamp is lit." },
      { step: "02", title: "Sankalp", desc: "The devotee states their name and purpose." },
      { step: "03", title: "Path Recitation", desc: "The Sunderkand is recited in full — 68 chapters — by the pandit or group of pandits." },
      { step: "04", title: "Hanuman Chalisa", desc: "The Hanuman Chalisa is sung 11 times as part of the concluding prayers." },
      { step: "05", title: "Prasad", desc: "Ladoo, besan ke ladoo, and sindoor are offered and distributed as prasad." },
    ],
    materials: ["Red sindoor", "Besan ladoo", "Red flowers", "Lamp and ghee", "Hanuman idol or image", "Chameli oil", "Tulsi garland"],
  },

  "ganesh-puja": {
    subtitle: "Invoking the Remover of All Obstacles",
    deity: "Lord Ganesha",
    shortDesc: "Ganesh Puja is the foundational puja performed before any auspicious occasion. It seeks the blessings of Lord Ganesha — the destroyer of obstacles, bestower of wisdom, and first deity to be worshipped in Hindu tradition.",
    significance: "Lord Ganesha is the son of Shiva and Parvati and is worshipped first in every Hindu ritual. A dedicated Ganesh Puja bestows intelligence, removes hurdles, and ensures success in all endeavors.",
    benefits: ["Removes all obstacles from life's path", "Blesses with wisdom and success", "Ideal before starting new ventures", "Brings good luck and positive energy", "Improves memory and focus for students", "Grants prosperity to the household"],
    process: [
      { step: "01", title: "Shodashopachara", desc: "16-step worship of Lord Ganesha with offerings of modak, flowers, and durva grass." },
      { step: "02", title: "Ganapathi Atharvashirsha", desc: "Chanting of this powerful Upanishad dedicated entirely to Ganesha." },
      { step: "03", title: "Abhishek", desc: "The idol is bathed with milk, curd, honey, and rose water with Ganesha mantras." },
      { step: "04", title: "Modak Offering", desc: "21 modaks are offered as naivedyam — Ganesha's favourite sweet." },
      { step: "05", title: "Aarti", desc: "Camphor flame is waved while singing Ganesh Aarti." },
    ],
    materials: ["Ganesha idol (clay or brass)", "Modak (21 pieces)", "Durva grass", "Red flowers", "Sindoor", "Janeu", "Panchamrit", "Coconut"],
  },

  "janamdin-puja-birthday-puja": {
    subtitle: "Celebrate Life with Sacred Vedic Blessings",
    deity: "Lord Ganesha & Presiding Birth Deity",
    shortDesc: "Janamdin Puja (Birthday Puja) is a sacred ritual performed on one's birthday to offer gratitude to God, seek divine blessings for the coming year, and renew the protective shield of divine grace around the devotee.",
    significance: "In the Vedic tradition, a birthday is not just a celebration but a sacred moment — the solar return. The Janamdin Puja aligns the individual's energy with cosmic rhythms, removes karmic burdens from the past year, and invites divine blessings for health, success, and longevity.",
    benefits: ["Removes negativity accumulated over the past year", "Grants health, longevity, and prosperity", "Strengthens the protective aura", "Fulfills birthday wishes with divine blessings", "Ideal for milestone birthdays (1st, 16th, 25th, 50th, 60th)", "Brings peace and joy to the family"],
    process: [
      { step: "01", title: "Mangal Snan", desc: "The birthday person takes an auspicious bath with herbal water (turmeric, neem, rose petals)." },
      { step: "02", title: "Sankalp", desc: "Name, birth star, and gotra are declared before the deity." },
      { step: "03", title: "Ganapathi Puja", desc: "Lord Ganesha is worshipped first to remove all obstacles from the new year of life." },
      { step: "04", title: "Nakshatra Puja", desc: "The birth star (Janma Nakshatra) deity is propitiated for specific blessings." },
      { step: "05", title: "Ayush Homa", desc: "A small fire ritual is performed with offerings for health and long life." },
      { step: "06", title: "Blessings & Prasad", desc: "Elders bless the person; sacred prasad is shared with the family." },
    ],
    materials: ["Herbal bath ingredients", "Yellow clothes", "Fruits and sweets", "Flowers", "Camphor and incense", "Haldi-kumkum", "Coconut"],
  },

  "ayudha-pooja": {
    subtitle: "Worship the Tools That Sustain Your Livelihood",
    deity: "Goddess Durga & Goddess Saraswati",
    shortDesc: "Ayudha Pooja is a festival ritual where tools, instruments, vehicles, and workplace equipment are worshipped as extensions of the divine. It acknowledges that all work is worship and our tools are sacred.",
    significance: "Celebrated on Mahanavami (9th day of Navaratri), Ayudha Pooja recognises that all instruments of labour are blessed by the divine. Books, computers, musical instruments, vehicles, machines — all are consecrated for continued blessings.",
    benefits: ["Blesses all tools and instruments", "Ensures safety and efficiency at work", "Removes obstacles in professional life", "Brings success and productivity", "Ideal for artisans, professionals, and business owners", "Strengthens the connection between work and dharma"],
    process: [
      { step: "01", title: "Cleaning & Arrangement", desc: "All tools and vehicles are cleaned and arranged respectfully for worship." },
      { step: "02", title: "Devi Avahan", desc: "Goddess Durga and Saraswati are invoked as patrons of tools and knowledge." },
      { step: "03", title: "Puja Vidhi", desc: "Each tool is anointed with turmeric, kumkum, and flowers; mantras are recited." },
      { step: "04", title: "Sandal & Flower Offering", desc: "Sandalwood paste and marigold garlands are placed on important instruments." },
      { step: "05", title: "Aarti & Naivedyam", desc: "Aarti is performed and sweet prasad is offered to the tools before being shared." },
    ],
    materials: ["Turmeric and kumkum", "Marigold flowers", "Sandalwood paste", "Camphor", "Incense sticks", "Coconut", "Fruits"],
  },

  "bhoomi-puja": {
    subtitle: "Seek the Earth Mother's Blessing Before Construction",
    deity: "Bhoomi Devi (Earth Goddess)",
    shortDesc: "Bhoomi Puja is the foundational ritual performed before breaking ground for a new construction — home, office, factory, or any building — to seek the blessings of Bhoomi Devi and ensure a safe, auspicious construction.",
    significance: "The Earth is considered a living goddess in Hindu tradition. Before disturbing her soil, a Bhoomi Puja is performed to seek permission, offer gratitude, and invite positive energies into the land. It removes underground doshas and ensures the structure is built on sacred ground.",
    benefits: ["Removes underground Vastu doshas", "Ensures safe and smooth construction", "Invites prosperity into the new property", "Protects workers during construction", "Appeases the land deity", "Removes any past karmic issues with the land"],
    process: [
      { step: "01", title: "Sankalpa", desc: "The owner takes a sankalpa declaring their name, gotra, and construction purpose." },
      { step: "02", title: "Ganapathi Puja", desc: "Lord Ganesha is invoked to ensure obstacle-free construction." },
      { step: "03", title: "Bhoomi Devi Avahan", desc: "Earth goddess is invoked at the NE corner of the plot with flowers and milk offerings." },
      { step: "04", title: "Vastu Purusha Puja", desc: "The cosmic Vastu Purusha is propitiated in the site's 45 energy fields." },
      { step: "05", title: "First Dig", desc: "The owner digs the first symbolic shovel of earth after the puja at the auspicious Muhurtha." },
      { step: "06", title: "Havan", desc: "Fire ritual to purify the site and invoke blessings for construction." },
    ],
    materials: ["Silver or gold coin", "Panchamrit", "Flower garlands", "Navadhanya (nine grains)", "Haldi-kumkum", "Coconut", "Camphor"],
  },

  "diwali-lakshmi-puja": {
    subtitle: "Invite Goddess Lakshmi on Her Favourite Night",
    deity: "Goddess Lakshmi & Lord Kubera",
    shortDesc: "Diwali Lakshmi Puja is the most auspicious puja of the year, performed on Amavasya night during Diwali to welcome Goddess Lakshmi — the goddess of wealth — into the home and business for the coming year.",
    significance: "On Diwali Amavasya, Goddess Lakshmi is believed to visit homes that are clean, illuminated, and filled with devotion. This puja, combined with lighting of lamps, invites her divine presence and grants abundant blessings of wealth, prosperity, and happiness throughout the year.",
    benefits: ["Invites Goddess Lakshmi's permanent presence", "Brings abundant wealth and prosperity", "Removes poverty and financial obstacles", "Purifies the home with divine light", "Blesses all family members", "Ideal for business owners for a prosperous new financial year"],
    process: [
      { step: "01", title: "Cleaning & Decoration", desc: "Home is thoroughly cleaned, rangoli is drawn, and lamps are placed at the entrance." },
      { step: "02", title: "Kalash Sthapana", desc: "A sacred Kalash representing Goddess Lakshmi is installed in the puja room." },
      { step: "03", title: "Ganapathi Puja", desc: "Lord Ganesha is worshipped first." },
      { step: "04", title: "Lakshmi Puja", desc: "Goddess Lakshmi is worshipped with lotus flowers, gold ornaments, and 16-step Shodashopachara." },
      { step: "05", title: "Kubera Puja", desc: "Lord Kubera, treasurer of the gods, is propitiated alongside Lakshmi." },
      { step: "06", title: "Aarti & Diya", desc: "Aarti is performed; all lamps and diyas are lit to welcome Goddess Lakshmi." },
    ],
    materials: ["Lotus flowers", "Gold or silver coins", "Lakshmi idol", "Diyas and oil", "Rangoli colors", "Panchamrit", "Betel leaves and nuts"],
  },

  "ganapathi-havan": {
    subtitle: "Purify and Energize with the Sacred Fire of Ganesha",
    deity: "Lord Ganesha",
    shortDesc: "Ganapathi Havan is a powerful fire ritual dedicated to Lord Ganesha, performed to remove obstacles, purify the environment, and invoke divine blessings before major life events or whenever obstacles seem insurmountable.",
    significance: "Havan (fire ritual) amplifies the energy of a puja manifold. When combined with Ganapathi mantras, the fire carries prayers directly to the divine. This Havan is performed before weddings, business launches, construction, and during difficult life phases.",
    benefits: ["Removes all obstacles from path", "Purifies the home and surrounding environment", "Amplifies positive energy significantly", "Ideal before any major life event", "Brings quick resolution to stuck situations", "Generates powerful positive karma"],
    process: [
      { step: "01", title: "Havan Kund Setup", desc: "A sacred fire pit is built with specified bricks and consecrated with mantras." },
      { step: "02", title: "Ganapathi Avahan", desc: "Lord Ganesha is invoked through Ganesha Suktam recitation." },
      { step: "03", title: "Agni Pratishtha", desc: "Sacred fire is lit with devotion and specific Agni mantras." },
      { step: "04", title: "Mantra Ahuti", desc: "108 or 1008 specific Ganesha mantras are chanted, each accompanied by an offering of ghee." },
      { step: "05", title: "Purna Ahuti", desc: "The grand final offering is made — symbolizing total surrender to the divine." },
      { step: "06", title: "Bhasma Dharana", desc: "Sacred ash from the havan fire is applied to the forehead as a divine blessing." },
    ],
    materials: ["Havan kund (fire pit)", "Ghee (minimum 1 kg)", "Havan samagri", "Mango wood sticks", "Durva grass", "Coconut", "Dry fruits"],
  },

  "udaka-shanti-puja": {
    subtitle: "Sacred Water Purification for Peace and Harmony",
    deity: "Lord Varuna & Navagrahas",
    shortDesc: "Udaka Shanti is a sacred Vedic ritual of purification using consecrated water, performed before major ceremonies like marriages, Upanayanam, or when overcoming a period of ill luck, grief, or impurity.",
    significance: "Water is considered the most purifying element in Vedic tradition. In Udaka Shanti, 64 sacred vessels of water are consecrated with Vedic mantras, prayers to all deities, and the power of the Navagrahas. This sanctified water is then used to purify the family and home.",
    benefits: ["Purifies the home after grief or impurity", "Removes negativity before auspicious ceremonies", "Clears past karmic blemishes", "Invokes peace and harmony in the family", "Protects from planetary doshas", "Prepares the family for sacred ceremonies"],
    process: [
      { step: "01", title: "Kalasha Arrangement", desc: "64 copper or clay pots are arranged in a sacred pattern and filled with water." },
      { step: "02", title: "Navagraha Avahan", desc: "The nine planets are invoked into respective kalashas." },
      { step: "03", title: "Vedic Chanting", desc: "Rigveda, Yajurveda, Samaveda, and Atharvaveda mantras are chanted over the water." },
      { step: "04", title: "Water Consecration", desc: "Sacred herbs, flowers, and mantras further purify the water." },
      { step: "05", title: "Abhishek", desc: "Family members are sprinkled with the consecrated water for purification." },
      { step: "06", title: "Home Purification", desc: "Every room of the home is sprinkled with sanctified water." },
    ],
    materials: ["64 copper or clay pots", "Sacred herbs", "Navadhanya", "Flower petals", "Mango leaves", "Turmeric", "Sandalwood"],
  },

  "vastu-shanti-puja": {
    subtitle: "Harmonizing Your Living Space with Cosmic Energy",
    deity: "Vastu Purush",
    shortDesc: "Vastu Shanti Puja purifies and energizes a home or office by propitiating Vastu Purush — the cosmic being who governs the energy of built structures — and removing all Vastu doshas.",
    significance: "According to Vastu Shastra, every structure has a Vastu Purush. When the structure has doshas (architectural or directional imbalances), the deity gets disturbed and troubles the residents. Vastu Shanti brings him peace and energizes all 45 energy zones of the building.",
    benefits: ["Removes all Vastu doshas", "Brings positive energy and peace", "Protects from negative influences", "Ensures prosperity for residents", "Essential before moving into a new home", "Harmonizes all five elements within the space"],
    process: [
      { step: "01", title: "Bhoomi Puja", desc: "Earth worship at the site to seek blessings of Bhoomi Devi." },
      { step: "02", title: "Vastu Purush Puja", desc: "The Vastu Purush is propitiated in all 45 energy squares of the property." },
      { step: "03", title: "Panchabhoota Puja", desc: "The five elements — earth, water, fire, air, space — are propitiated." },
      { step: "04", title: "Griha Devata Sthapana", desc: "Household deities are installed in appropriate directions." },
      { step: "05", title: "Havan", desc: "Fire ritual offerings purify the space completely." },
      { step: "06", title: "Griha Pravesh", desc: "The family enters the purified home with a lit lamp." },
    ],
    materials: ["Copper Vastu yantra", "Navadhanyas", "Haldi-kumkum", "Mango leaves", "Clay pot", "Coconut", "Camphor and ghee"],
  },

  "vishwakarma-puja": {
    subtitle: "Honour the Divine Architect of the Universe",
    deity: "Lord Vishwakarma",
    shortDesc: "Vishwakarma Puja is performed annually on September 17th to worship Lord Vishwakarma — the divine architect, engineer, and craftsman of the gods — for blessings on machines, tools, factories, and all instruments of creation.",
    significance: "Lord Vishwakarma designed Lanka, the Pushpaka Vimana, and the heavenly city of Dwaraka. Worshipping him on Vishwakarma Jayanti brings his divine craftsmanship into our tools and workplaces, ensuring safety, precision, and productivity.",
    benefits: ["Blesses all machinery and tools", "Prevents workplace accidents", "Improves productivity and efficiency", "Brings success to manufacturing businesses", "Ideal for engineers, architects, and craftsmen", "Ensures safe and smooth operations"],
    process: [
      { step: "01", title: "Machine Decoration", desc: "All machines, tools, and vehicles are cleaned and decorated with flowers and cloth." },
      { step: "02", title: "Vishwakarma Avahan", desc: "Lord Vishwakarma's image is installed and he is invoked with specific mantras." },
      { step: "03", title: "Shodashopachara Puja", desc: "16-step worship is performed with tools placed before the deity." },
      { step: "04", title: "Havan", desc: "Fire ritual with offerings of specific woods and herbs for divine blessings." },
      { step: "05", title: "Aarti & Prasad", desc: "Aarti is performed; prasad is distributed to all workers." },
    ],
    materials: ["Vishwakarma image", "Tool/machinery offerings", "Yellow flowers", "Camphor", "Incense", "Coconut", "Sweets for prasad"],
  },

  "vivah-marriage": {
    subtitle: "The Sacred Union of Two Souls",
    deity: "Lord Vishnu & Goddess Lakshmi",
    shortDesc: "Vivah (Hindu Wedding) is the most sacred of all Hindu samskaras — a cosmic union of two souls sanctified by Vedic mantras, fire rituals, and divine witnesses for a life of dharma, love, and togetherness.",
    significance: "Hindu marriage is not merely a social contract but a spiritual covenant. The seven steps (Saptapadi) taken around the sacred fire bind the couple across seven lifetimes. Every mantra invokes specific divine blessings for health, wealth, children, and eternal love.",
    benefits: ["Sanctifies the marital union divinely", "Invokes blessings for a happy married life", "Ensures compatibility and long-lasting love", "Brings prosperity to the new family", "Generates auspicious karma for both families", "Fulfills family traditions and ancestral obligations"],
    process: [
      { step: "01", title: "Mandap Decoration", desc: "The wedding mandap is decorated and consecrated as a sacred space." },
      { step: "02", title: "Ganapathi Puja", desc: "Lord Ganesha is worshipped to remove obstacles." },
      { step: "03", title: "Navagraha Puja", desc: "The nine planets are propitiated for cosmic harmony." },
      { step: "04", title: "Vivah Homa", desc: "Sacred fire is lit — the divine witness of the marriage." },
      { step: "05", title: "Saptapadi", desc: "The couple takes seven steps around the sacred fire, each step representing a sacred vow." },
      { step: "06", title: "Mangalsutra & Sindoor", desc: "The groom ties the mangalsutra and applies sindoor, completing the sacred union." },
    ],
    materials: ["Wedding mandap", "Sacred fire wood", "Ghee", "Navadhanyas", "Mangalsutra", "Kumkum", "Flower garlands", "Sacred thread"],
  },

  "gand-mool-nakshatra-shanti-puja": {
    subtitle: "Neutralizing the Challenges of Birth Under Gandmool Nakshatras",
    deity: "Lord Ganesha & Snake Deities (Naga)",
    shortDesc: "Gand Mool Nakshatra Shanti Puja is performed for individuals born under one of the 6 Gandmool Nakshatras — Ashwini, Magha, Moola, Jyeshtha, Revati, or Ashlesha — to neutralize potential difficulties attributed to the birth star.",
    significance: "In Vedic astrology, Gandmool Nakshatras fall at the junctions of planets. Birth under these nakshatras is believed to bring challenges for the family. This shanti puja, typically performed on the 27th day after birth or at a later date, pacifies the malefic effects.",
    benefits: ["Neutralizes malefic effects of Gandmool birth", "Protects the child and family from difficulties", "Removes fear around the birth star", "Brings peace and harmony to the family", "Performed as prescribed by the birth horoscope", "Ensures healthy and prosperous life for the child"],
    process: [
      { step: "01", title: "Horoscope Analysis", desc: "The pandit analyzes the birth chart to confirm Gandmool nakshatra and prescribe specific remedies." },
      { step: "02", title: "Nag Puja", desc: "Snake deities associated with the nakshatra are propitiated." },
      { step: "03", title: "Nakshatra Puja", desc: "The specific nakshatra deity is worshipped with prescribed offerings." },
      { step: "04", title: "Havan", desc: "Fire ritual with specific herbs and grains for that nakshatra." },
      { step: "05", title: "Shanti Paath", desc: "Peace mantras are chanted for the child and family." },
    ],
    materials: ["Silver snake idol", "Specific nakshatra grains", "Neem leaves", "Milk", "Flowers", "Camphor"],
  },

  "guru-graha-shanti-jaap": {
    subtitle: "Invoke the Blessings of the Divine Teacher Planet",
    deity: "Lord Brihaspati (Jupiter)",
    shortDesc: "Guru Graha Shanti Jaap is performed to strengthen or pacify Jupiter (Guru) in the birth chart. Jupiter governs wisdom, knowledge, higher education, prosperity, and spiritual growth.",
    significance: "Jupiter is the most benefic planet in Vedic astrology. When weakly placed or afflicted, it causes lack of wisdom, obstacles in education, financial difficulties, and relationship problems. This jaap strengthens Jupiter's positive influence.",
    benefits: ["Strengthens Jupiter's positive influence", "Enhances wisdom and knowledge", "Removes obstacles in higher education", "Improves financial situation", "Blesses with good spouse and children", "Increases spiritual growth and prosperity"],
    process: [
      { step: "01", title: "Brihaspati Avahan", desc: "Lord Brihaspati (Jupiter) is invoked on a Thursday — Jupiter's day." },
      { step: "02", title: "Yellow Offerings", desc: "Yellow flowers, yellow cloth, chana dal, and turmeric are offered." },
      { step: "03", title: "Guru Mantra Jaap", desc: "The Guru Beej mantra 'Om Gram Greem Graum Sah Gurave Namah' is chanted 19,000 times." },
      { step: "04", title: "Homa", desc: "1/10th of the jaap count is offered as ahutis into the sacred fire." },
      { step: "05", title: "Guru Prasad", desc: "Yellow sweets (besan ladoo) and chana dal are distributed as prasad." },
    ],
    materials: ["Yellow flowers", "Yellow cloth", "Chana dal", "Turmeric", "Ghee", "Gold coin", "Banana"],
  },

  "navagraha-havan": {
    subtitle: "Propitiating the Nine Celestial Planets",
    deity: "Nava Grahas (Nine Planets)",
    shortDesc: "Navagraha Havan is a sacred fire ritual performed to appease all nine celestial planets — Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, and Ketu — for their positive influence on one's life.",
    significance: "In Vedic astrology, the nine planets govern every aspect of human life. When planets are malefic or weakly placed, they cause obstacles. This havan harmonizes all planetary energies simultaneously.",
    benefits: ["Balances all nine planetary energies", "Removes malefic planetary effects", "Improves health, wealth, and relationships", "Brings career growth and success", "Removes delays and obstacles", "Grants peace and mental well-being"],
    process: [
      { step: "01", title: "Havan Kund Preparation", desc: "A sacred fire pit is prepared and purified with mantras." },
      { step: "02", title: "Agni Prathishtha", desc: "The sacred fire is invoked and established." },
      { step: "03", title: "Navagraha Avahan", desc: "Each of the nine planets is invoked in sequence starting from Sun." },
      { step: "04", title: "Specific Ahutis", desc: "Unique offerings are made for each planet: wheat for Sun, rice for Moon, red lentils for Mars, etc." },
      { step: "05", title: "Purna Ahuti", desc: "The final grand offering is made into the havan fire." },
      { step: "06", title: "Shanti Paath", desc: "Peace mantras are chanted for overall harmony and blessings." },
    ],
    materials: ["Nine types of grains", "Ghee", "Sandalwood", "Specific planet flowers", "Navagraha yantra", "Havan samagri", "Colored cloths for each planet"],
  },

  "saraswati-havan": {
    subtitle: "Ignite the Sacred Flame of Knowledge and Creativity",
    deity: "Goddess Saraswati",
    shortDesc: "Saraswati Havan is a fire ritual dedicated to Goddess Saraswati — the goddess of knowledge, wisdom, arts, and education — performed to bless students, artists, and seekers of wisdom.",
    significance: "Goddess Saraswati is the divine source of all knowledge, arts, and eloquence. Performing her Havan, especially before exams, artistic performances, or launching educational endeavors, fills the practitioner with clarity, memory power, and creative brilliance.",
    benefits: ["Enhances memory, focus, and intelligence", "Blesses with success in exams and education", "Inspires creativity and artistic excellence", "Removes mental blocks and fear of failure", "Ideal before competitive examinations", "Grants eloquence in speech and writing"],
    process: [
      { step: "01", title: "Saraswati Avahan", desc: "Goddess Saraswati is invoked at the havan kund on Panchami or any auspicious day." },
      { step: "02", title: "Agni Sthapana", desc: "Sacred fire is established with specific mantras." },
      { step: "03", title: "Saraswati Mantra Ahuti", desc: "1008 recitations of Saraswati mantras are made with ghee offerings." },
      { step: "04", title: "Books & Instruments Puja", desc: "Books and learning instruments are placed before Saraswati for her blessings." },
      { step: "05", title: "Vidya Prasad", desc: "Sacred prasad (usually sweet pongal or sugar) is distributed." },
    ],
    materials: ["White flowers", "White cloth", "Books and pens", "Ghee", "Sesame seeds", "White sweets", "Veena image or instrument"],
  },

  "saraswati-puja": {
    subtitle: "Seek the Blessing of the Goddess of All Knowledge",
    deity: "Goddess Saraswati",
    shortDesc: "Saraswati Puja is performed to worship the goddess of all knowledge, arts, and wisdom. Widely performed during Vasant Panchami and before examinations, it blesses devotees with intellect, creativity, and success.",
    significance: "Goddess Saraswati holds the Veda, the veena, and a lotus. She represents the perfect union of knowledge and art. Her puja consecrates books, musical instruments, and learning tools, infusing them with divine intelligence.",
    benefits: ["Enhances learning and academic performance", "Blesses musicians and artists", "Removes mental blocks", "Grants wisdom and discernment", "Improves communication skills", "Ideal for students before exams"],
    process: [
      { step: "01", title: "Altar Preparation", desc: "Books, pens, musical instruments, and tools of learning are arranged before the Saraswati image." },
      { step: "02", title: "Shodashopachara Puja", desc: "16-step worship with white flowers, white sweets, and specific Saraswati mantras." },
      { step: "03", title: "Saraswati Stotram", desc: "Saraswati Ashtakam and Saraswati Vandana are recited." },
      { step: "04", title: "Vidyarambha", desc: "Children write their first letters in rice or on a slate under the deity's presence." },
      { step: "05", title: "Prasad Distribution", desc: "Sweet pongal, fruits, and panchamrit prasad is distributed." },
    ],
    materials: ["White flowers (jasmine, lotus)", "White cloth", "Books and pens", "Panchamrit", "White sweets", "Camphor"],
  },

  "graha-shanti-puja": {
    subtitle: "Pacify the Planets for Peace and Harmony",
    deity: "Navagrahas",
    shortDesc: "Graha Shanti Puja is a comprehensive puja to pacify malefic planets in one's horoscope. Unlike Navagraha Havan, this puja focuses on specific troubled planets identified by an astrologer.",
    significance: "When specific planets cause dasha or antardasha difficulties — resulting in health issues, relationship problems, or career obstacles — Graha Shanti provides targeted relief by appeasing that specific planetary deity.",
    benefits: ["Targeted relief from specific planetary doshas", "Removes ongoing dasha difficulties", "Improves specific life areas affected by weak planets", "Grants peace of mind during difficult periods", "Recommended during Sade Sati and planetary transitions", "Restores balance in affected life areas"],
    process: [
      { step: "01", title: "Kundali Analysis", desc: "The birth chart is analyzed to identify the malefic or afflicted planet(s)." },
      { step: "02", title: "Specific Graha Puja", desc: "The identified planet's deity is worshipped with prescribed items for that planet." },
      { step: "03", title: "Mantra Jaap", desc: "The specific planet mantra is chanted in multiples of 108." },
      { step: "04", title: "Homa", desc: "Fire offerings made with planet-specific grains and herbs." },
      { step: "05", title: "Daan", desc: "Specific donation (daan) is made to a deserving person, as prescribed for that planet." },
    ],
    materials: ["Varies by planet", "Specific gems or metals", "Planet-specific grains", "Colored cloth", "Ghee", "Specific flowers"],
  },

  "ark-vivah-for-male": {
    subtitle: "A Sacred Ritual to Overcome Mangal Dosha for Men",
    deity: "Lord Mangal (Mars) & Goddess Parvati",
    shortDesc: "Ark Vivah is a symbolic marriage ritual performed for men with severe Mangal Dosha (Kuja Dosha) in their horoscope. The man is first symbolically married to an Ark plant (Calotropis), nullifying the dosha before his actual marriage.",
    significance: "Mangal Dosha is believed to bring challenges in marriage. Ark Vivah is the prescribed Vedic remedy for men, as Arka (the sun plant / Calotropis) represents the fierce solar Mars energy. This marriage absorbs the dosha and releases the man from its effects.",
    benefits: ["Nullifies severe Mangal Dosha", "Removes obstacles to marriage", "Protects future spouse from Mangal effects", "Enables a healthy, harmonious marriage", "Prescribed remedy in Vedic astrology", "Removes ancestral curses related to marriage"],
    process: [
      { step: "01", title: "Horoscope Verification", desc: "The pandit verifies the Mangal Dosha in the birth chart." },
      { step: "02", title: "Ark Plant Setup", desc: "An Ark (Calotropis) plant is arranged as the symbolic bride." },
      { step: "03", title: "Marriage Rituals", desc: "All key wedding rituals are performed — Saptapadi, Mangalsutra, and Sindhoor." },
      { step: "04", title: "Immersion", desc: "After the ritual, the plant is immersed in a river, symbolically absorbing the dosha." },
      { step: "05", title: "Mangal Puja", desc: "Lord Mars is worshipped separately for long-term dosha mitigation." },
    ],
    materials: ["Ark plant", "Mangalsutra", "Red sindoor", "Wedding clothes", "Ghee for havan", "Red flowers"],
  },

  "brahmins-for-bhojan": {
    subtitle: "The Sacred Act of Feeding Learned Brahmins",
    deity: "Lord Vishnu (in the form of Brahmins)",
    shortDesc: "Brahmins for Bhojan involves hosting and feeding qualified Brahmins as a sacred act of charity (daan). In Hindu tradition, feeding a Brahmin is equivalent to feeding Lord Vishnu himself and generates immense spiritual merit.",
    significance: "The Vedas declare that the Brahmin's satisfaction is equal to the satisfaction of all deities. This act is performed to propitiate ancestors (Pitru Tarpan), reduce planetary doshas, and generate powerful positive karma during eclipses, death anniversaries, or significant festivals.",
    benefits: ["Generates immense positive karma (punya)", "Propitiates ancestors and deceased family members", "Reduces malefic planetary effects", "Fulfills ancestral obligations", "Ideal during Pitru Paksha, eclipses, and death anniversaries", "Brings peace and blessings to the entire family"],
    process: [
      { step: "01", title: "Invitation", desc: "Qualified Brahmins (pandits) are invited in prescribed numbers (1, 5, 7, 11, or more)." },
      { step: "02", title: "Paad Prakshalana", desc: "Feet of the Brahmins are washed as an act of reverence." },
      { step: "03", title: "Bhojan Preparation", desc: "A complete, pure vegetarian meal is prepared with love and devotion." },
      { step: "04", title: "Feeding", desc: "Brahmins are served the meal with respect; they eat in silence with prayers." },
      { step: "05", title: "Daan & Dakshina", desc: "After the meal, appropriate gifts and dakshina (fee) are offered to the Brahmins." },
      { step: "06", title: "Blessings", desc: "The Brahmins bless the family with Vedic mantras before departing." },
    ],
    materials: ["Complete meal ingredients", "New clothes for Brahmins (optional)", "Dakshina", "Flowers for welcome", "Betel leaves and nuts"],
  },

  "budha-graha-shanti-jaap": {
    subtitle: "Strengthen Mercury for Clarity of Mind and Communication",
    deity: "Lord Budha (Mercury)",
    shortDesc: "Budha Graha Shanti Jaap is performed to pacify or strengthen Mercury (Budha) in the birth chart. Mercury governs intelligence, communication, commerce, skin health, and logical thinking.",
    significance: "An afflicted Mercury causes speech disorders, business losses, skin diseases, and mental confusion. This jaap, performed on Wednesdays with green offerings, strengthens Mercury and restores its positive qualities.",
    benefits: ["Improves communication and speech", "Boosts business acumen and trade", "Enhances intelligence and memory", "Removes skin-related ailments", "Ideal for writers, traders, and students", "Reduces nervousness and anxiety"],
    process: [
      { step: "01", title: "Budha Avahan", desc: "Mercury deity is invoked on Wednesday, its ruling day." },
      { step: "02", title: "Green Offerings", desc: "Green flowers, green cloth, moong dal, and emerald stone are offered." },
      { step: "03", title: "Budha Mantra Jaap", desc: "'Om Bram Breem Braum Sah Budhaya Namah' is chanted 17,000 times." },
      { step: "04", title: "Homa", desc: "Fire offerings with durva grass and ghee." },
      { step: "05", title: "Donation", desc: "Green cloth and moong are donated to a Brahmin." },
    ],
    materials: ["Green flowers", "Green cloth", "Moong dal", "Durva grass", "Ghee", "Emerald (optional)"],
  },

  "chandi-havan": {
    subtitle: "Invoke the Fierce Grace of the Divine Mother",
    deity: "Goddess Chandika (Durga)",
    shortDesc: "Chandi Havan is a powerful fire ritual dedicated to Goddess Chandika, performed with recitation of the Durga Saptashati (Chandi Path) and sacred offerings into the fire for protection, victory, and destruction of enemies.",
    significance: "The Chandi Havan is one of the most potent rituals in the Shakta tradition. It invokes the fierce, protective aspect of the Divine Mother. It is performed during Navaratri, for protection from black magic, or when facing severe life challenges requiring divine intervention.",
    benefits: ["Provides powerful protection from all evils", "Destroys enemy influence and black magic", "Grants victory in legal battles and disputes", "Removes extreme negative energies", "Blesses with courage and fearlessness", "Ideal during major life crises"],
    process: [
      { step: "01", title: "Devi Avahan", desc: "Goddess Chandika is invoked with Kavacha mantras for protection." },
      { step: "02", title: "Chandi Path", desc: "The complete Durga Saptashati (700 verses) is recited by qualified pandits." },
      { step: "03", title: "Havan Preparation", desc: "A special triangular fire pit is prepared for the Chandi Havan." },
      { step: "04", title: "Ahutis", desc: "Specific offerings including sesame, ghee, and red flowers are offered with each mantra." },
      { step: "05", title: "Purna Ahuti", desc: "Grand final offering into the fire with a complete coconut and ghee." },
      { step: "06", title: "Kumari Puja", desc: "Young girls are worshipped as manifestations of the goddess." },
    ],
    materials: ["Red flowers", "Sindoor", "Red cloth", "Ghee", "Sesame seeds", "Bilva leaves", "Coconut"],
  },

  "chandra-graha-shanti-jaap": {
    subtitle: "Pacify the Moon for Emotional Peace and Stability",
    deity: "Lord Chandra (Moon)",
    shortDesc: "Chandra Graha Shanti Jaap is performed to strengthen or pacify the Moon in the birth chart. The Moon governs emotions, mental health, mother, and subconscious mind.",
    significance: "An afflicted Moon causes emotional instability, mental health issues, sleep disorders, and troubled relationships with the mother. This jaap, performed on Mondays with white offerings, restores emotional balance and mental peace.",
    benefits: ["Restores emotional balance and mental peace", "Improves sleep quality", "Strengthens relationship with mother", "Reduces anxiety and mood swings", "Enhances intuition and creativity", "Beneficial during Sade Sati on Moon sign"],
    process: [
      { step: "01", title: "Chandra Avahan", desc: "Moon deity is invoked on Monday, with white flowers and milk." },
      { step: "02", title: "White Offerings", desc: "White rice, white flowers, milk, silver, and camphor are offered." },
      { step: "03", title: "Chandra Mantra Jaap", desc: "'Om Shram Shreem Shraum Sah Chandraya Namah' is chanted 11,000 times." },
      { step: "04", title: "Shivalinga Abhishek", desc: "Since Chandra adorns Shiva's head, Shivalinga is bathed with milk." },
      { step: "05", title: "Donation", desc: "White rice, milk, and silver are donated to a Brahmin." },
    ],
    materials: ["White flowers", "Milk", "White rice", "Silver item", "Camphor", "White cloth"],
  },

  "gayatri-havan": {
    subtitle: "The Supreme Fire Ritual of the Mother Mantra",
    deity: "Goddess Gayatri",
    shortDesc: "Gayatri Havan is a sacred fire ritual performed with recitation of the Gayatri Mantra — the most powerful mantra in the Vedas — as ahutis are offered into the fire for purification, wisdom, and divine blessings.",
    significance: "The Gayatri Mantra is a prayer to the Supreme Light to illuminate our intellect. When combined with the power of Agni (fire) in a havan, this mantra becomes exponentially powerful, purifying the atmosphere, strengthening the practitioner's aura, and connecting them to the divine.",
    benefits: ["Purifies the body, mind, and spirit", "Enhances intelligence and decision-making", "Fills the home with divine light and positivity", "Removes all sins and karmic burdens", "Strengthens health and vital energy", "Ideal for spiritual seekers and meditators"],
    process: [
      { step: "01", title: "Gayatri Avahan", desc: "Goddess Gayatri is invoked in the sacred fire with devotion." },
      { step: "02", title: "Havan Kund Setup", desc: "Sacred fire pit is established facing East." },
      { step: "03", title: "Gayatri Ahutis", desc: "Gayatri Mantra is chanted 1008 times with ghee offerings after each recitation." },
      { step: "04", title: "Surya Namaskar", desc: "Sun is worshipped as the presiding deity of the Gayatri mantra." },
      { step: "05", title: "Purna Ahuti", desc: "The concluding offering and aarti to the sacred fire." },
    ],
    materials: ["Ghee (minimum 2 kg)", "Havan samagri", "Sesame seeds", "Lotus petals", "Mango wood", "Camphor"],
  },

  "gayatri-mantra-jaap": {
    subtitle: "Chanting the Light of the Universe",
    deity: "Goddess Gayatri (Solar Deity)",
    shortDesc: "Gayatri Mantra Jaap is the systematic, devotional chanting of the Gayatri Mantra — 'Om Bhur Bhuva Swaha...' — in prescribed multiples of 108, performed for spiritual purification, mental clarity, and divine protection.",
    significance: "The Gayatri Mantra from the Rigveda is the most sacred mantra in Hindu tradition. Its jaap purifies past sins, illuminates the intellect, and creates a powerful spiritual shield. It is recommended for all ages for daily practice and in special rituals for specific purposes.",
    benefits: ["Illuminates the intellect and mind", "Removes sins and negative karma", "Creates a powerful spiritual protection", "Enhances memory and concentration", "Brings radiance and positivity to the personality", "Daily practice brings lifelong spiritual growth"],
    process: [
      { step: "01", title: "Sankalpa", desc: "The devotee states their intention for the jaap." },
      { step: "02", title: "Pranayama", desc: "Breathing exercises to prepare the mind and body." },
      { step: "03", title: "Ganapathi & Guru Puja", desc: "Short invocation of Ganesha and one's Guru." },
      { step: "04", title: "Gayatri Jaap", desc: "Gayatri Mantra is chanted with full devotion — minimum 108 to maximum 1,08,000 times." },
      { step: "05", title: "Samarpan", desc: "The merit of the jaap is dedicated to the Supreme and to all beings." },
    ],
    materials: ["Rudraksha mala (108 beads)", "Copper water pot", "Incense and lamp", "Sandalwood paste", "Red or saffron cloth"],
  },

  "graha-yog-shanti-puja": {
    subtitle: "Dissolving Challenging Planetary Combinations",
    deity: "Navagrahas",
    shortDesc: "Graha Yog Shanti Puja is performed to neutralize the effects of challenging planetary combinations (yogas) in the birth chart, such as Grahan Yog, Vish Yog, or Shakat Yog that cause sustained difficulties.",
    significance: "When specific planetary combinations create sustained patterns of misfortune, health problems, or obstacles, Graha Yog Shanti provides targeted astrological remediation to break these patterns and restore harmony.",
    benefits: ["Neutralizes specific malefic planetary yogas", "Breaks patterns of repeated misfortune", "Restores balance in affected life areas", "Reduces ongoing health and relationship challenges", "Provides long-term astrological relief", "Prescribed after detailed horoscope analysis"],
    process: [
      { step: "01", title: "Detailed Kundali Reading", desc: "Comprehensive birth chart analysis to identify all problematic yogas." },
      { step: "02", title: "Specific Graha Puja", desc: "Planets involved in the challenging yoga are propitiated." },
      { step: "03", title: "Combined Mantra Jaap", desc: "Mantras for all involved planets are chanted in sequence." },
      { step: "04", title: "Special Homa", desc: "Havan with specific offerings for each involved planet." },
      { step: "05", title: "Yantra Installation", desc: "A specific yantra is installed in the home for ongoing protection." },
    ],
    materials: ["Navagraha yantra", "Multiple colored cloths", "Nine types of grains", "Ghee", "Specific gems (as prescribed)"],
  },

  "guru-chandal-yoga-shanti": {
    subtitle: "Remediation of the Jupiter-Rahu Conjunction",
    deity: "Lord Brihaspati & Rahu",
    shortDesc: "Guru Chandal Yoga Shanti is performed when Jupiter and Rahu are conjunct in the birth chart, forming the Guru Chandal Yoga — a configuration believed to corrupt Jupiter's wisdom with Rahu's illusion.",
    significance: "Guru Chandal Yoga occurs when Jupiter (wisdom) is conjunct with Rahu (illusion). This can cause moral confusion, bad judgment, false spiritual guidance, and controversies. This shanti puja purifies Jupiter's influence and neutralizes Rahu's corrupting effect.",
    benefits: ["Restores clear judgment and wisdom", "Removes confusion in spiritual matters", "Prevents scandals and controversies", "Strengthens true knowledge and dharma", "Ideal for those in teaching, law, or advisory roles", "Removes Rahu's illusive influence on Jupiter"],
    process: [
      { step: "01", title: "Horoscope Confirmation", desc: "Jupiter-Rahu conjunction is confirmed in the birth chart." },
      { step: "02", title: "Brihaspati Puja", desc: "Jupiter is worshipped with yellow offerings on Thursday." },
      { step: "03", title: "Rahu Shanti Puja", desc: "Rahu is separately pacified with prescribed offerings." },
      { step: "04", title: "Guru Mantra Jaap", desc: "Jupiter mantras are chanted 19,000 times to strengthen his positive influence." },
      { step: "05", title: "Vishnu Puja", desc: "Lord Vishnu is worshipped as the higher principle to restore dharma." },
    ],
    materials: ["Yellow flowers", "Blue/black items for Rahu", "Ghee", "Sandalwood", "Emerald (optional)", "Gold"],
  },

  "kaal-sarp-dosh-puja": {
    subtitle: "Liberation from the Shadow of Serpents",
    deity: "Lord Shiva & Naga Devatas",
    shortDesc: "Kaal Sarp Dosh Puja is a powerful remedial ritual performed when all 7 planets in a horoscope are placed between Rahu and Ketu, creating the challenging Kaal Sarp Yog configuration.",
    significance: "When all planets fall between Rahu and Ketu, it creates Kaal Sarp Yog — causing delays, struggles, health issues, and setbacks. This puja, typically performed at sacred Jyotirlinga temples, neutralizes these malefic effects.",
    benefits: ["Removes the effects of Kaal Sarp Yog", "Eliminates obstacles in marriage and career", "Improves health and longevity", "Brings peace and removes recurring nightmares", "Resolves disputes and legal matters", "Enhances prosperity and stability"],
    process: [
      { step: "01", title: "Kundali Analysis", desc: "The pandit reviews the horoscope to confirm Kaal Sarp Dosh type." },
      { step: "02", title: "Sankalp", desc: "The devotee takes a formal sankalp with name and gotra." },
      { step: "03", title: "Nag Puja", desc: "Silver or clay serpent idols representing Rahu-Ketu are worshipped." },
      { step: "04", title: "Maha Mrityunjaya Jaap", desc: "108 Maha Mrityunjaya mantras are chanted for protection." },
      { step: "05", title: "Rudrabhishek", desc: "Shivalinga is bathed with Panchamrit while chanting Rudra mantras." },
      { step: "06", title: "Nag Visarjan", desc: "The serpent idols are immersed in a flowing river." },
    ],
    materials: ["Silver snake idols", "Milk and honey", "Bilva leaves", "Black sesame seeds", "Nag Kesar flowers", "Rudraksha mala"],
  },

  "ketu-graha-shanti-jaap": {
    subtitle: "Surrender the Ego to Ketu's Spiritual Liberation",
    deity: "Lord Ketu (Dragon's Tail)",
    shortDesc: "Ketu Graha Shanti Jaap pacifies Ketu in the birth chart. Ketu is a moksha karaka planet that governs spiritual liberation, past lives, detachment, and mystical experiences — but can also cause confusion and losses when malefic.",
    significance: "Ketu represents where we have already achieved mastery in past lives. A malefic Ketu causes losses, confusion, accidents, and spiritual crises. Propitiating Ketu brings clarity, spiritual growth, and protection from sudden misfortunes.",
    benefits: ["Reduces sudden losses and accidents", "Brings spiritual clarity and insight", "Removes confusion and directionlessness", "Ideal during Ketu mahadasha or antardasha", "Strengthens intuition and psychic abilities", "Grants moksha orientation and peace"],
    process: [
      { step: "01", title: "Ketu Avahan", desc: "Ketu is invoked on Saturday or Tuesday, the planet's days." },
      { step: "02", title: "Grey/Black Offerings", desc: "Grey and multi-colored items, sesame, and iron are offered." },
      { step: "03", title: "Ketu Mantra Jaap", desc: "'Om Stram Streem Straum Sah Ketave Namah' is chanted 17,000 times." },
      { step: "04", title: "Ganesha Puja", desc: "Since Ketu's head was severed by Vishnu's Sudarshana, Ganesha (elephant head) helps." },
      { step: "05", title: "Donation", desc: "Blanket, sesame, and iron are donated as prescribed." },
    ],
    materials: ["Sesame seeds", "Grey cloth", "Iron vessel", "Camphor", "Ghee", "Multi-colored flowers"],
  },

  "kumbh-vivah-for-female": {
    subtitle: "Sacred Remedy — Marrying the Kumbha Pot",
    deity: "Lord Vishnu & Bhoomi Devi",
    shortDesc: "Kumbh Vivah is a symbolic marriage ritual performed for women with severe Mangal Dosha — where the woman is first symbolically married to a clay pot (kumbha) or banana tree to absorb the dosha before her actual marriage.",
    significance: "Severe Mangal Dosha in a woman's horoscope is believed to adversely affect the first husband. The Kumbh Vivah is performed as a sacred Vedic remedy. The pot or banana tree 'absorbs' the dosha, freeing the woman for a harmonious actual marriage.",
    benefits: ["Nullifies severe Mangal Dosha for women", "Removes obstacles to marriage", "Protects the future husband", "Enables a healthy, harmonious marriage", "Prescribed Vedic astrology remedy", "Removes marriage-related ancestral curses"],
    process: [
      { step: "01", title: "Horoscope Verification", desc: "Mangal Dosha confirmed by the astrologer-pandit." },
      { step: "02", title: "Kumbha Setup", desc: "A clay pot or banana tree is arranged as the symbolic groom." },
      { step: "03", title: "Marriage Rituals", desc: "All wedding rituals are performed around the symbolic groom." },
      { step: "04", title: "Mangalsutra", desc: "A Mangalsutra is tied to the pot/tree by the pandit." },
      { step: "05", title: "Immersion", desc: "The pot is immersed in a river, symbolically absorbing the dosha." },
      { step: "06", title: "Mangal Puja", desc: "Mars is separately worshipped for ongoing protection." },
    ],
    materials: ["Clay pot (kumbha)", "Mangalsutra", "Red sindoor", "Wedding items", "Flowers", "Ghee for havan"],
  },

  "maha-mrityunjaya-jaap": {
    subtitle: "The Great Mantra of Conquering Death",
    deity: "Lord Shiva (Mrityunjaya form)",
    shortDesc: "Maha Mrityunjaya Jaap involves the systematic recitation of the most potent Rigvedic mantra for health, longevity, and protection from untimely death.",
    significance: "The Maha Mrityunjaya Mantra (OM TRYAMBAKAM...) is a prayer to Lord Shiva in His three-eyed Tryambaka form. This mantra has been used since Vedic times to overcome serious illness, accidents, and the fear of death.",
    benefits: ["Promotes recovery from serious illness", "Protects from accidents and untimely death", "Removes fear, anxiety, and negativity", "Strengthens immunity and overall health", "Grants moksha and spiritual liberation", "Recommended during health crises and Sade Sati"],
    process: [
      { step: "01", title: "Shiva Avahan", desc: "Lord Shiva is invoked in His Mrityunjaya form with bilva leaves." },
      { step: "02", title: "Puja Vidhi", desc: "Shivalinga is worshipped with milk and Panchamrit." },
      { step: "03", title: "Mantra Jaap", desc: "The Maha Mrityunjaya mantra is chanted 1,08,000 or 1008 times." },
      { step: "04", title: "Mrityunjaya Homa", desc: "1/10th of the jaap count is offered as ahuti into the fire." },
      { step: "05", title: "Abhishek", desc: "Shivalinga is bathed in milk while the mantra continues." },
      { step: "06", title: "Prasad & Blessings", desc: "Sacred prasad is distributed and the pandit blesses the devotee." },
    ],
    materials: ["Rudraksha mala", "Bilva leaves", "Milk and Panchamrit", "Shivalinga", "White flowers", "Camphor", "Bhasma"],
  },

  "mangal-graha-shanti-jaap": {
    subtitle: "Channel the Power of Mars for Courage and Success",
    deity: "Lord Mangala (Mars)",
    shortDesc: "Mangal Graha Shanti Jaap pacifies or strengthens Mars (Mangala) in the birth chart. Mars governs courage, energy, action, siblings, and real estate.",
    significance: "An afflicted Mars causes anger, accidents, blood disorders, conflict with siblings, and property disputes. Mangal Shanti propitiation removes these effects and channels Mars's raw energy into constructive courage and success.",
    benefits: ["Removes Mangal Dosha effects", "Reduces anger and impulsiveness", "Prevents accidents and blood disorders", "Improves relationship with siblings", "Brings success in property matters", "Grants courage and physical strength"],
    process: [
      { step: "01", title: "Mangal Avahan", desc: "Mars deity is invoked on Tuesday, his ruling day." },
      { step: "02", title: "Red Offerings", desc: "Red flowers, red cloth, red lentils, and coral are offered." },
      { step: "03", title: "Mangal Mantra Jaap", desc: "'Om Kram Kreem Kraum Sah Bhaumaya Namah' is chanted 10,000 times." },
      { step: "04", title: "Homa with Red Items", desc: "Red flowers and specific herbs are offered into the fire." },
      { step: "05", title: "Donation", desc: "Red cloth, red lentils, and copper are donated." },
    ],
    materials: ["Red flowers", "Red cloth", "Coral (optional)", "Red lentils (masoor dal)", "Copper vessel", "Ghee"],
  },

  "pitru-dosh-nivaran-puja": {
    subtitle: "Liberate Your Ancestors and Remove Their Curse",
    deity: "Lord Vishnu & Yama (God of Death)",
    shortDesc: "Pitru Dosh Nivaran Puja is performed when the horoscope shows Pitru Dosha — a configuration indicating unsatisfied ancestors who need prayers, rites, and liberation before they can bless the living family members.",
    significance: "Pitru Dosha occurs when the Sun and Saturn are together, or the 9th house is afflicted by malefic planets. It indicates that ancestors need liberation. Performing this puja with proper Pitru Tarpan satisfies them and removes generational curses.",
    benefits: ["Removes ancestral curses from the family", "Liberates troubled ancestors", "Removes obstacles to marriage and children", "Improves financial situation", "Brings peace to the family", "Resolves generational patterns of misfortune"],
    process: [
      { step: "01", title: "Sankalp with Ancestor Names", desc: "The names and gotras of known ancestors are stated." },
      { step: "02", title: "Pitru Avahan", desc: "Ancestors are invoked through specific Pitru mantras." },
      { step: "03", title: "Pitru Tarpan", desc: "Sacred water is offered in the name of each ancestor with sesame seeds." },
      { step: "04", title: "Pitru Homa", desc: "Fire offerings made with sesame and rice in the name of ancestors." },
      { step: "05", title: "Brahmin Bhojan", desc: "Brahmins are fed in the name of the ancestors — their satisfaction releases ancestors." },
      { step: "06", title: "Daan", desc: "Prescribed donations are made to free the ancestors from their karmic bindings." },
    ],
    materials: ["Sesame (black and white)", "Rice", "Kusha grass", "Black sesame for tarpan", "Ghee", "Fruits"],
  },

  "rahu-brihaspati-sandhi-shanti": {
    subtitle: "Pacifying the Rahu-Jupiter Junction",
    deity: "Lord Rahu & Lord Brihaspati",
    shortDesc: "Rahu Brihaspati Sandhi Shanti is performed when the Rahu-Jupiter conjunction (Sandhi) creates a period of maximum confusion, spiritual crises, and disruption in one's horoscope.",
    significance: "The Rahu-Jupiter Sandhi (junction period) can be particularly challenging — Rahu's illusion eclipses Jupiter's wisdom, leading to bad decisions, false gurus, and spiritual crises. This shanti puja restores the protective influence of Jupiter.",
    benefits: ["Restores Jupiter's protective wisdom", "Clears confusion and bad decision-making", "Removes influence of false advisors", "Protects from spiritual deception", "Restores dharmic clarity", "Ideal during Rahu-Jupiter dasha transitions"],
    process: [
      { step: "01", title: "Astrological Assessment", desc: "The specific sandhi period and its effects are analyzed." },
      { step: "02", title: "Rahu Shanti Puja", desc: "Rahu is pacified with prescribed offerings on Saturday." },
      { step: "03", title: "Brihaspati Puja", desc: "Jupiter is strengthened with yellow offerings on Thursday." },
      { step: "04", title: "Vishnu Puja", desc: "Lord Vishnu is invoked as the supreme dharma protector." },
      { step: "05", title: "Combined Homa", desc: "Fire ritual offerings for both Rahu and Jupiter in sequence." },
    ],
    materials: ["Blue/black items for Rahu", "Yellow items for Jupiter", "Ghee", "Coconut", "Sandalwood"],
  },

  "rahu-graha-shanti-jaap": {
    subtitle: "Tame the Shadow Planet of Illusion",
    deity: "Lord Rahu",
    shortDesc: "Rahu Graha Shanti Jaap pacifies Rahu in the birth chart. Rahu is the north lunar node governing ambition, foreign connections, sudden changes, and illusion.",
    significance: "A malefic Rahu causes obsessive behavior, addictions, sudden losses, health issues in the head and skin, and confusion. Rahu Shanti channels this planet's energy constructively towards ambition and worldly success while removing its harmful effects.",
    benefits: ["Removes confusion and obsessive thoughts", "Reduces addiction tendencies", "Prevents sudden losses and scandals", "Beneficial during Rahu mahadasha", "Improves foreign travel and connections", "Brings clarity and removes illusions"],
    process: [
      { step: "01", title: "Rahu Avahan", desc: "Rahu is invoked on Saturday, associated with the dark planetary energies." },
      { step: "02", title: "Dark Offerings", desc: "Black sesame, blue flowers, dark urad dal, and iron are offered." },
      { step: "03", title: "Rahu Mantra Jaap", desc: "'Om Bhram Bhreem Bhraum Sah Rahave Namah' is chanted 18,000 times." },
      { step: "04", title: "Durga Puja", desc: "Goddess Durga is worshipped as the force that can control Rahu's chaos." },
      { step: "05", title: "Donation", desc: "Black sesame, black cloth, and iron are donated." },
    ],
    materials: ["Black sesame", "Blue/black cloth", "Urad dal", "Iron vessel", "Ghee", "Blue flowers"],
  },

  "rudrabhishek-puja": {
    subtitle: "Bathe Lord Shiva for Supreme Blessings",
    deity: "Lord Shiva (Rudra form)",
    shortDesc: "Rudrabhishek is the sacred ritual of bathing the Shivalinga with a sequence of sacred substances while chanting the Rudram — one of the most ancient and powerful Vedic hymns — for comprehensive blessings.",
    significance: "The Rudram (from the Krishna Yajurveda) is a direct address to Lord Shiva in His Rudra form. Performing Rudrabhishek systematically with 11 substances while chanting 11 Anuvakas of Rudram generates immense blessings for health, wealth, and liberation.",
    benefits: ["Grants comprehensive blessings for all life areas", "Removes all doshas and sins", "Excellent for health recovery", "Brings prosperity and removes poverty", "Destroys enemies and obstacles", "Leads to spiritual liberation (moksha)"],
    process: [
      { step: "01", title: "Kalasha Sthapana", desc: "Sacred water kalasha is installed beside the Shivalinga." },
      { step: "02", title: "Ganapathi Puja", desc: "Lord Ganesha is worshipped first." },
      { step: "03", title: "Laghu Rudram / Maha Rudram", desc: "The Rudram is chanted — either once (Laghu) or 11 times (Maha Rudram)." },
      { step: "04", title: "Panchamrit Abhishek", desc: "The Shivalinga is bathed sequentially with milk, curd, honey, ghee, and sugar." },
      { step: "05", title: "Sacred Substances Abhishek", desc: "Coconut water, rose water, bilva juice, and sandalwood water are used." },
      { step: "06", title: "Bilva Archana & Aarti", desc: "108 bilva leaves are offered; aarti concludes the puja." },
    ],
    materials: ["Panchamrit (all 5 ingredients)", "Bilva leaves (108)", "Coconut water", "Rose water", "Sandalwood paste", "Camphor"],
  },

  "shani-chandra-vish-yog-nivaran": {
    subtitle: "Dissolving the Toxic Union of Saturn and Moon",
    deity: "Lord Shani & Lord Chandra",
    shortDesc: "Shani Chandra Vish Yog Nivaran puja is performed when Saturn and Moon are conjunct in the birth chart, forming 'Vish Yog' — a toxic combination causing depression, mental illness, and chronic health issues.",
    significance: "When Saturn (obstacles, delays) and Moon (emotions, mind) are conjunct, it creates Vish (poison) Yoga. This puja independently pacifies both planets and neutralizes their combined toxic effect on the mind and emotional wellbeing.",
    benefits: ["Relieves depression and mental health issues", "Removes chronic health patterns", "Brings emotional stability", "Reduces pessimism and fear", "Improves relationship with mother", "Recommended during Saturn-Moon dasha periods"],
    process: [
      { step: "01", title: "Shani Puja", desc: "Saturn is propitiated with black sesame, iron, and blue flowers on Saturday." },
      { step: "02", title: "Chandra Puja", desc: "Moon is propitiated with milk, white rice, and white flowers on Monday." },
      { step: "03", title: "Shiva Abhishek", desc: "Lord Shiva (who governs both planets) is bathed with milk and bilva leaves." },
      { step: "04", title: "Combined Homa", desc: "Fire ritual with offerings for both Saturn and Moon." },
      { step: "05", title: "Daan", desc: "Black sesame, urad dal, and white rice are donated." },
    ],
    materials: ["Black sesame", "White rice", "Milk", "Iron vessel", "Blue and white flowers", "Ghee"],
  },

  "shani-graha-shanti-jaap": {
    subtitle: "Propitiate the Lord of Karma",
    deity: "Lord Shani (Saturn)",
    shortDesc: "Shani Graha Shanti Jaap pacifies Saturn in the birth chart or during Sade Sati (7.5 year Saturn transit). Saturn governs karma, discipline, delays, and life lessons.",
    significance: "Saturn is the great teacher and karmic judge. An afflicted Saturn brings prolonged delays, chronic health issues, disputes, and hardship. Shani Shanti through dedicated jaap and offerings helps the devotee learn Saturn's lessons faster and receive his blessings sooner.",
    benefits: ["Reduces delays and chronic obstacles", "Brings relief during Sade Sati", "Improves professional discipline and career", "Removes fear and pessimism", "Reduces chronic health issues", "Grants the blessings of hardwork and perseverance"],
    process: [
      { step: "01", title: "Shani Avahan", desc: "Saturn is invoked on Saturday with black sesame oil lamps." },
      { step: "02", title: "Shani Puja", desc: "Black sesame, urad dal, mustard oil, and blue sapphire are offered." },
      { step: "03", title: "Shani Mantra Jaap", desc: "'Om Shram Shreem Shraum Sah Shanaischaraya Namah' chanted 23,000 times." },
      { step: "04", title: "Hanumat Puja", desc: "Lord Hanuman is worshipped — only Hanuman is beyond Saturn's influence." },
      { step: "05", title: "Oil Lamp Lighting", desc: "Sesame oil lamps are lit under a Peepal tree on Saturday evenings." },
    ],
    materials: ["Black sesame", "Mustard oil", "Urad dal", "Black cloth", "Iron", "Blue flowers"],
  },

  "shani-ketu-shrapit-dosh-nivaran": {
    subtitle: "Remove the Cursed Combination of Saturn and Ketu",
    deity: "Lord Shani & Lord Ketu",
    shortDesc: "Shani Ketu Shrapit Dosh Nivaran puja is performed when Saturn and Ketu form the feared Shrapit Dosha — a combination believed to indicate a karmic curse from a past life that must be worked through.",
    significance: "Shrapit Yoga (Saturn + Rahu or Ketu) signifies carrying forward a spiritual debt from past lives. This puja performs karmic purification through specific Vedic rites, offering the karma back to the divine and breaking the cycle of suffering.",
    benefits: ["Removes past-life karmic debts", "Breaks the cycle of repeated misfortune", "Removes shrapit (cursed) patterns", "Brings sudden improvement in life situations", "Liberates from ancestral karmic burdens", "Grants a fresh karmic slate"],
    process: [
      { step: "01", title: "Past Life Karma Reading", desc: "The pandit reads the specific nature of the karmic debt from the chart." },
      { step: "02", title: "Shani Puja", desc: "Saturn is propitiated with black sesame and iron on Saturday." },
      { step: "03", title: "Ketu Puja", desc: "Ketu is separately propitiated with grey/multi-colored offerings." },
      { step: "04", title: "Narayan Puja", desc: "Lord Vishnu is invoked as the liberator from all karmic chains." },
      { step: "05", title: "Tarpan", desc: "Water offerings to ancestors to release any ancestral aspect of the karma." },
    ],
    materials: ["Black sesame", "Grey cloth", "Iron items", "Sesame oil", "Ghee", "Kusha grass"],
  },

  "shani-dosha-shanthi-pooja": {
    subtitle: "Comprehensive Remedy for Saturn's Afflictions",
    deity: "Lord Shani (Saturn)",
    shortDesc: "Shani Dosha Shanthi Pooja is a comprehensive remedial puja for all types of Saturn-related doshas and difficulties — including Sade Sati, Dhaiya, Shani Mahadasha, and Saturn's malefic placement in the birth chart.",
    significance: "Saturn is both the most feared and most respected planet in Vedic astrology. His Dosha Shanthi puja acknowledges his lordship over karma, performs specific Vedic rites to satisfy him, and invites his blessings rather than his tests.",
    benefits: ["Comprehensive relief from all Saturn-related doshas", "Reduces Sade Sati difficulties", "Improves karma and dharmic living", "Brings relief from chronic obstacles", "Grants success through discipline", "Removes fear of Saturn's effects"],
    process: [
      { step: "01", title: "Shani Sthapana", desc: "Shani yantra is installed and Saturn idol is consecrated." },
      { step: "02", title: "Shani Puja", desc: "Complete 16-step worship with black sesame, iron, and mustard oil." },
      { step: "03", title: "Shani Chalisa Path", desc: "Shani Chalisa is recited 11 times." },
      { step: "04", title: "Hanumat Puja", desc: "Lord Hanuman is worshipped — he transcends Saturn's authority." },
      { step: "05", title: "Homa", desc: "Fire ritual with sesame and specific herbs for Saturn." },
      { step: "06", title: "Peepal Puja", desc: "Saturn is pacified by watering the Peepal tree and lighting sesame oil lamps." },
    ],
    materials: ["Black sesame", "Mustard oil", "Iron", "Blue/black cloth", "Peepal leaves", "Urad dal"],
  },

  "shukra-graha-shanti-jaap": {
    subtitle: "Awaken Venus for Love, Luxury, and Creativity",
    deity: "Lord Shukra (Venus)",
    shortDesc: "Shukra Graha Shanti Jaap strengthens or pacifies Venus in the birth chart. Venus governs love, marriage, beauty, arts, luxury, and material comforts.",
    significance: "An afflicted Venus causes relationship difficulties, skin problems, lack of artistic appreciation, and financial troubles related to luxuries. Strengthening Venus through this jaap brings harmony in love, creativity, and material well-being.",
    benefits: ["Improves love and marital harmony", "Enhances beauty and charm", "Boosts creativity and artistic abilities", "Brings material comforts and luxuries", "Removes obstacles to marriage", "Ideal for artists, designers, and performers"],
    process: [
      { step: "01", title: "Shukra Avahan", desc: "Venus deity is invoked on Friday, his ruling day." },
      { step: "02", title: "White and Cream Offerings", desc: "White rice, white flowers, diamonds or white sapphire, and sugar are offered." },
      { step: "03", title: "Shukra Mantra Jaap", desc: "'Om Dram Dreem Draum Sah Shukraya Namah' is chanted 16,000 times." },
      { step: "04", title: "Homa with White Items", desc: "White sesame and ghee are offered into the fire." },
      { step: "05", title: "Donation", desc: "White rice, white sugar, and white cloth are donated to a woman." },
    ],
    materials: ["White flowers", "White cloth", "White rice", "Sugar", "Diamond (optional)", "Ghee"],
  },

  "sudarshan-havan": {
    subtitle: "Invoke the Divine Discus for Total Protection",
    deity: "Lord Vishnu (Sudarshana Chakra)",
    shortDesc: "Sudarshan Havan is a powerful fire ritual dedicated to Lord Sudarshana — the divine discus of Lord Vishnu — for protection from all evil forces, black magic, enemies, and negative energies.",
    significance: "Lord Sudarshana (the divine discus) is the supreme weapon of Lord Vishnu used to destroy evil and protect the righteous. His Havan creates an impenetrable shield of divine protection around the devotee, home, and family.",
    benefits: ["Creates powerful protection from all evil", "Destroys black magic and tantric attacks", "Removes enemies' negative influence", "Purifies the home completely", "Grants victory over all adversaries", "Recommended during severe negative periods"],
    process: [
      { step: "01", title: "Sudarshana Avahan", desc: "Lord Sudarshana is invoked with his specific 108-name mantra." },
      { step: "02", title: "Chakra Puja", desc: "The Sudarshana Chakra image is worshipped with red lotus and tulsi." },
      { step: "03", title: "Sudarshana Mantra Jaap", desc: "Sudarshana Ashtakam and specific mantras are chanted." },
      { step: "04", title: "Havan", desc: "108 ahutis with ghee and red lotus into the sacred fire." },
      { step: "05", title: "Vishnu Puja", desc: "Lord Vishnu is worshipped as the wielder of Sudarshana." },
      { step: "06", title: "Protection Mantra", desc: "Sudarshana Maha Mantra is chanted for home protection." },
    ],
    materials: ["Red lotus flowers", "Tulsi", "Ghee", "Havan samagri", "Sudarshana yantra", "Sandalwood"],
  },

  "surya-graha-shanti-jaap": {
    subtitle: "Honor the Source of All Life and Energy",
    deity: "Lord Surya (Sun)",
    shortDesc: "Surya Graha Shanti Jaap strengthens or pacifies the Sun in the birth chart. The Sun governs health, confidence, leadership, father, and one's soul (Atma).",
    significance: "An afflicted Sun causes health issues (especially heart and eyes), lack of confidence, poor relationship with the father, and difficulties in government dealings. Surya Shanti invokes the Sun's life-giving energy for vitality, confidence, and success.",
    benefits: ["Improves vitality and overall health", "Boosts confidence and leadership skills", "Enhances relationship with father", "Helps in government jobs and public life", "Strengthens eyesight and heart health", "Removes obstacles to fame and recognition"],
    process: [
      { step: "01", title: "Arghya", desc: "Sacred water offering to the Sun at sunrise while chanting Surya mantras." },
      { step: "02", title: "Surya Puja", desc: "Sun deity is worshipped with red flowers, red cloth, and wheat." },
      { step: "03", title: "Aditya Hridayam", desc: "The Aditya Hridayam from Valmiki Ramayan is recited." },
      { step: "04", title: "Surya Mantra Jaap", desc: "'Om Hram Hreem Hraum Sah Suryaya Namah' is chanted 7,000 times." },
      { step: "05", title: "Homa", desc: "Red sandalwood and ghee are offered into the fire at sunrise." },
    ],
    materials: ["Red flowers", "Red cloth", "Wheat", "Red sandalwood", "Copper vessel", "Ghee", "Ruby (optional)"],
  },

  "surya-puja": {
    subtitle: "Worship the Sun for Vitality and Radiance",
    deity: "Lord Surya (Sun God)",
    shortDesc: "Surya Puja is a daily or occasional worship of the Sun God — the source of all life on Earth. It is performed for health, vitality, fame, and to honor the cosmic being who sustains all life.",
    significance: "Surya is the only visible planet deity. He is the Atma (soul) of the entire universe. Regular Surya Puja, especially on Sundays and Saptami dates, brings immense blessings for health and success while expressing gratitude for the gift of life.",
    benefits: ["Enhances physical health and vitality", "Brings fame and social recognition", "Improves eyesight and skin radiance", "Strengthens the immune system", "Ideal for those in public life or politics", "Grants confidence and charisma"],
    process: [
      { step: "01", title: "Sunrise Arghya", desc: "Copper pot of water is offered to the Sun at sunrise with mantras." },
      { step: "02", title: "Shodashopachara Puja", desc: "16-step Surya puja with red flowers, red cloth, and wheat." },
      { step: "03", title: "Aditya Hridayam", desc: "Aditya Hridayam and Surya Ashtakam are recited." },
      { step: "04", title: "Naivedyam", desc: "Wheat-based sweets (gur and wheat) are offered." },
      { step: "05", title: "Aarti", desc: "Sun aarti and pradakshina (circumambulation) of the Sun yantra." },
    ],
    materials: ["Copper vessel", "Red flowers", "Wheat", "Red sandalwood", "Jaggery", "Red cloth"],
  },

  "swayampaka-seedha-daan-for-brahmins": {
    subtitle: "The Sacred Gift of Self-Cooked Food",
    deity: "Lord Vishnu (in the form of Brahmins)",
    shortDesc: "Swayampaka / Seedha Daan is a sacred ritual where the devotee personally cooks food and donates uncooked provisions to Brahmins — considered a highly meritorious act for removing sins and planetary doshas.",
    significance: "Swayampaka means 'self-cooked' — the act of personally cooking and serving food to Brahmins is extraordinarily meritorious. Seedha Daan is the gift of raw provisions (rice, dal, vegetables, ghee). Both generate powerful punya for dosha removal.",
    benefits: ["Generates immense positive karma", "Removes specific planetary doshas", "Ideal for Rahu, Ketu, and Saturn dosha remedies", "Fulfills ancestral obligations", "Brings blessings of the divine through Brahmins", "Ideal on eclipse days and Pitru Paksha"],
    process: [
      { step: "01", title: "Brahmin Invitation", desc: "Qualified Brahmins are invited according to the dosha requirements." },
      { step: "02", title: "Personal Cooking", desc: "The devotee personally cooks a pure vegetarian meal." },
      { step: "03", title: "Sankalpa", desc: "The purpose of the donation is declared before serving." },
      { step: "04", title: "Reverent Service", desc: "Food is served with extreme respect and humility." },
      { step: "05", title: "Seedha Provision", desc: "Raw ingredients, ghee, and grains are separately donated." },
      { step: "06", title: "Dakshina", desc: "Appropriate dakshina (donation) is offered to the Brahmins." },
    ],
    materials: ["Complete meal ingredients", "Raw grains and dal", "Ghee", "Vegetables", "Spices", "Dakshina"],
  },

  "vishnu-vivah-for-female": {
    subtitle: "Sacred Remedy — Union with Lord Vishnu's Idol",
    deity: "Lord Vishnu",
    shortDesc: "Vishnu Vivah is a symbolic marriage ritual where a woman with severe Mangal Dosha or Kuja Dosha is first symbolically married to an idol or image of Lord Vishnu before her actual marriage.",
    significance: "Lord Vishnu is the eternal husband — He is worshipped as the divine consort who takes on all doshas from a devotee. Vishnu Vivah transfers the Mangal Dosha from the woman to this symbolic marriage, freeing her actual marriage from its effects.",
    benefits: ["Removes Mangal Dosha for women", "Protects the actual husband", "Considered more auspicious than Kumbh Vivah", "Brings blessings of Goddess Lakshmi", "Enables a harmonious and prosperous marriage", "Fulfills the Vedic prescription for Mangal Dosha"],
    process: [
      { step: "01", title: "Dosha Verification", desc: "Mangal Dosha confirmed by the pandit." },
      { step: "02", title: "Vishnu Idol Setup", desc: "A small Vishnu idol is dressed as the symbolic groom." },
      { step: "03", title: "Marriage Rituals", desc: "All wedding rituals — Saptapadi, Mangalsutra, and Sindoor — are performed with the Vishnu idol." },
      { step: "04", title: "Vishnu Puja", desc: "Lord Vishnu is worshipped with Tulsi and yellow flowers." },
      { step: "05", title: "Completion", desc: "The idol is immersed in a river or kept in the temple as an offering." },
    ],
    materials: ["Vishnu idol", "Wedding items", "Tulsi", "Yellow flowers", "Mangalsutra", "Ghee"],
  },

  "vishti-karan-bhadra-shanti-pooja": {
    subtitle: "Calming the Bhadra Karana for Auspiciousness",
    deity: "Lord Vishnu & Bhadra Devi",
    shortDesc: "Vishti Karan (also called Bhadra) Shanti Pooja is performed when important events fall during the Vishti Karana period — a malefic portion of the lunar day believed to bring obstacles and inauspiciousness.",
    significance: "In the Panchanga (Hindu almanac), Vishti Karana is one of the 11 karanas that falls during specific periods of each lunar day. Activities begun during Vishti (especially Bhadra) are traditionally avoided. This puja pacifies the Bhadra effect.",
    benefits: ["Neutralizes the malefic Vishti period", "Enables important events to proceed auspiciously", "Removes obstacles from time-sensitive activities", "Performs the necessary pacification", "Recommended when birth or event falls in Bhadra", "Protects from inauspicious timing effects"],
    process: [
      { step: "01", title: "Panchanga Analysis", desc: "The specific Vishti Karana period and its nature are analyzed." },
      { step: "02", title: "Bhadra Devi Puja", desc: "The Bhadra deity is propitiated with specific offerings." },
      { step: "03", title: "Vishnu Puja", desc: "Lord Vishnu is worshipped to transcend the malefic time period." },
      { step: "04", title: "Shanti Homa", desc: "A fire ritual is performed for overall peace and auspiciousness." },
      { step: "05", title: "Shanti Paath", desc: "Peace mantras are chanted to remove the timing's negative influence." },
    ],
    materials: ["Specific timing-based offerings", "Flowers", "Ghee", "Incense", "Coconut"],
  },

  "kuber-upasana-puja": {
    subtitle: "Invoke the Divine Treasurer for Wealth and Abundance",
    deity: "Lord Kubera",
    shortDesc: "Kuber Upasana Puja is performed to worship Lord Kubera — the divine treasurer and lord of wealth — for attracting material abundance, financial growth, and prosperity into one's life and business.",
    significance: "Lord Kubera is the North's regent and the treasurer of the gods. He controls all wealth in the universe. Propitiating Kubera through his upasana (focused worship) aligns the devotee's energy with divine wealth consciousness and attracts abundance from all directions.",
    benefits: ["Attracts wealth and financial abundance", "Removes financial obstacles and debts", "Ideal for businesspersons and investors", "Opens new streams of income", "Removes poverty consciousness", "Brings divine blessings on savings and investments"],
    process: [
      { step: "01", title: "North-Facing Setup", desc: "The puja is performed facing North — Kubera's direction." },
      { step: "02", title: "Kubera Avahan", desc: "Lord Kubera is invoked with gold coins and wealth symbols." },
      { step: "03", title: "Kubera Yantra Puja", desc: "The Kubera Yantra is worshipped as the seat of his divine presence." },
      { step: "04", title: "Kubera Ashtakam", desc: "Kubera Ashtakam and Kubera Mantra are recited 108 times." },
      { step: "05", title: "Naivedyam", desc: "Gold-colored sweets (saffron rice and laddoos) are offered." },
      { step: "06", title: "Lakshmi-Kubera Puja", desc: "Goddess Lakshmi is also worshipped alongside Kubera for maximum abundance." },
    ],
    materials: ["Gold coins (or gold-colored items)", "Kubera yantra", "Yellow flowers", "Saffron", "Yellow cloth", "Ghee"],
  },

  "laxmi-kubera-havan": {
    subtitle: "Fire Ritual for the Ultimate Wealth Combination",
    deity: "Goddess Lakshmi & Lord Kubera",
    shortDesc: "Laxmi Kubera Havan is a powerful combined fire ritual dedicated to both Goddess Lakshmi (divine wealth) and Lord Kubera (divine treasurer) — performed together for maximum financial blessings and prosperity.",
    significance: "Combining Lakshmi (the force of wealth) with Kubera (the guardian of wealth) in a single havan creates the most potent wealth-attracting ritual in Hindu tradition. This havan is especially powerful when performed on Fridays or during Diwali.",
    benefits: ["Maximum wealth attraction power", "Removes all financial blocks", "Opens multiple streams of income", "Ideal for business growth and investments", "Clears debt and financial burdens", "Creates lasting prosperity"],
    process: [
      { step: "01", title: "Dual Idol Setup", desc: "Lakshmi and Kubera idols are placed at the havan kund facing North." },
      { step: "02", title: "Lakshmi Avahan", desc: "Goddess Lakshmi is invoked with lotus flowers and gold." },
      { step: "03", title: "Kubera Avahan", desc: "Lord Kubera is invoked alongside with gold coins." },
      { step: "04", title: "Combined Ahutis", desc: "Alternating mantras for Lakshmi and Kubera with ghee offerings." },
      { step: "05", title: "Suvarna Ahuti", desc: "A gold item is offered into the fire as the supreme offering." },
      { step: "06", title: "Prasad", desc: "Golden-colored laddoos and saffron rice are distributed." },
    ],
    materials: ["Gold coin", "Lotus flowers", "Yellow flowers", "Saffron", "Ghee", "Yellow cloth", "Kubera yantra"],
  },

  "laxmi-narasimha-havan": {
    subtitle: "Protection and Prosperity through the Lord of Fearlessness",
    deity: "Lord Narasimha & Goddess Lakshmi",
    shortDesc: "Laxmi Narasimha Havan invokes both Lord Narasimha (half-lion, half-man form of Vishnu) and Goddess Lakshmi together — combining fearless protection with divine prosperity in a single powerful fire ritual.",
    significance: "Lord Narasimha is the most fierce protector among Vishnu's avatars. Paired with Lakshmi, he becomes Laxmi Narasimha — the embodiment of both abundance and invincible protection. This havan is performed when one needs both financial blessings and protection from enemies.",
    benefits: ["Provides powerful protection from enemies", "Removes fear and anxiety", "Attracts wealth and prosperity simultaneously", "Ideal when facing business adversaries", "Destroys malefic forces completely", "Grants fearlessness and courage"],
    process: [
      { step: "01", title: "Narasimha Avahan", desc: "Lord Narasimha is invoked with his fierce mangala mantra." },
      { step: "02", title: "Lakshmi Avahan", desc: "Goddess Lakshmi is invoked beside her divine consort." },
      { step: "03", title: "Combined Havan", desc: "Havan with specific offerings for Narasimha (red items) and Lakshmi (gold items)." },
      { step: "04", title: "Sudarshana Mantra", desc: "Protection mantras are chanted alongside the main ritual." },
      { step: "05", title: "Purna Ahuti", desc: "Final offering into the fire with a full coconut and ghee." },
    ],
    materials: ["Red and yellow flowers", "Gold items", "Lotus flowers", "Ghee", "Red cloth", "Havan samagri"],
  },

  "mahalakshmi-pooja": {
    subtitle: "The Grand Worship of the Goddess of All Wealth",
    deity: "Goddess Mahalakshmi",
    shortDesc: "Mahalakshmi Pooja is a comprehensive worship of Goddess Mahalakshmi in all her forms — the 16 types of wealth including material prosperity, health, fame, knowledge, and spiritual liberation.",
    significance: "Goddess Mahalakshmi is not just the goddess of money — she represents all 16 types of abundance (Shodasha Lakshmi). Her grand puja invites all these forms of wealth into the devotee's life. Especially powerful when performed on Fridays and during Navaratri.",
    benefits: ["Attracts all 16 forms of divine wealth", "Removes poverty in all its forms", "Brings health, beauty, and happiness", "Grants fame and recognition", "Fulfills family's material and spiritual needs", "Ideal for women seeking prosperity and harmony"],
    process: [
      { step: "01", title: "Kalasha Sthapana", desc: "A golden Kalasha representing Mahalakshmi is installed." },
      { step: "02", title: "Shodasha Lakshmi Puja", desc: "All 16 forms of Lakshmi are worshipped in sequence." },
      { step: "03", title: "Lotus Archana", desc: "108 lotus petals are offered, each with a Lakshmi name." },
      { step: "04", title: "Sri Sukta Recitation", desc: "Sri Sukta from the Rigveda is recited — the most ancient Lakshmi hymn." },
      { step: "05", title: "Lakshmi Ashtottara Archana", desc: "108 names of Goddess Lakshmi are offered with flowers." },
      { step: "06", title: "Aarti & Prasad", desc: "Aarti with camphor and distribution of sweet prasad." },
    ],
    materials: ["Lotus flowers (108)", "Gold ornaments", "Yellow cloth", "Coins", "Sri Sukta text", "Saffron", "Ghee"],
  },

  "sri-sukta-havan": {
    subtitle: "Fire Ritual of the Oldest Lakshmi Hymn",
    deity: "Goddess Sri Lakshmi",
    shortDesc: "Sri Sukta Havan is a fire ritual performed with the recitation of the Sri Sukta — the most ancient and powerful hymn to Goddess Lakshmi from the Rigveda — as ahutis are offered into the sacred fire.",
    significance: "The Sri Sukta consists of 16 Riks (verses) from the Rigveda, each invoking a specific blessing from Goddess Lakshmi. When combined with the power of Agni in a havan, each verse becomes a direct invitation for divine abundance to manifest.",
    benefits: ["Directly invites Goddess Lakshmi's presence", "Removes persistent financial obstacles", "Generates the most powerful wealth karma", "Ideal when no amount of effort is bearing fruit", "Fills the home with divine golden light", "Removes Alakshmi (misfortune) from the home"],
    process: [
      { step: "01", title: "Havan Kund", desc: "A square havan kund is prepared and consecrated." },
      { step: "02", title: "Lakshmi Avahan", desc: "Goddess Sri Lakshmi is invoked at the fire." },
      { step: "03", title: "Sri Sukta Ahutis", desc: "Each of the 16 Riks is chanted; ghee offerings are made after each verse." },
      { step: "04", title: "Gold Offering", desc: "A small gold item (coin or ring) is offered to the fire." },
      { step: "05", title: "Sri Havan Purna Ahuti", desc: "The final grand offering concludes the havan." },
    ],
    materials: ["Ghee (2 kg)", "Lotus petals", "Gold coin", "Camphor", "Havan samagri", "Yellow cloth"],
  },

  "brihaspati-vrat-udyapan-puja": {
    subtitle: "Completing the Sacred Thursday Vow",
    deity: "Lord Brihaspati (Jupiter)",
    shortDesc: "Brihaspati Vrat Udyapan is the auspicious completion ceremony for those who have fasted and observed prayers every Thursday for 16 or 21 consecutive weeks in devotion to Lord Brihaspati for marriage and family blessings.",
    significance: "The Brihaspati Vrat is particularly popular among women seeking a good husband or marriage blessings. After completing the prescribed number of Thursdays, the Udyapan ceremony formally concludes the vow with a proper puja, completing the divine contract.",
    benefits: ["Formally completes and seals the Thursday vow", "Attracts blessings for marriage", "Improves marital harmony", "Grants prosperity and family happiness", "Fulfills the divine contract of the vow", "Generates powerful Jupiter blessings"],
    process: [
      { step: "01", title: "Final Thursday Preparation", desc: "The Udyapan puja is performed on the final Thursday of the vow." },
      { step: "02", title: "Banana Tree Puja", desc: "A banana tree (associated with Jupiter) is worshipped as a divine symbol." },
      { step: "03", title: "Brihaspati Puja", desc: "Jupiter deity is worshipped with yellow flowers, chana dal, and bananas." },
      { step: "04", title: "Brihaspati Katha", desc: "The Brihaspati Vrat Katha is recited in full." },
      { step: "05", title: "Havan", desc: "Fire ritual to formally complete the vow." },
      { step: "06", title: "Brahmin Bhojan & Daan", desc: "Yellow food is prepared and donated to Brahmins to complete the vow." },
    ],
    materials: ["Yellow flowers", "Bananas", "Chana dal", "Yellow cloth", "Turmeric", "Ghee", "Yellow sweets"],
  },

  "ekadashi-vrat-udyapan-puja": {
    subtitle: "Sealing the Sacred Ekadashi Vow",
    deity: "Lord Vishnu",
    shortDesc: "Ekadashi Vrat Udyapan is the completion ceremony for those who have observed the Ekadashi fast (on the 11th day of each lunar fortnight) for a prescribed number of months or years in devotion to Lord Vishnu.",
    significance: "Ekadashi is the most sacred fasting day for Lord Vishnu's devotees. After completing 24 or more Ekadashis (one full year), the Udyapan ceremony formally concludes the vow. It is believed to grant liberation (moksha) and all desired blessings.",
    benefits: ["Formally completes the Ekadashi vow", "Generates immense Vishnu blessings", "Removes sins and grants liberation", "Fulfills all desires", "Brings spiritual merit to the entire family", "Opens doors to moksha"],
    process: [
      { step: "01", title: "Final Ekadashi Puja", desc: "Special Vishnu puja on the final Ekadashi of the vow." },
      { step: "02", title: "Vishnu Sahasranamam", desc: "1000 names of Lord Vishnu are recited." },
      { step: "03", title: "Dwadashi Parana", desc: "Breaking of the fast on Dwadashi (12th day) at the prescribed time." },
      { step: "04", title: "Brahmin Bhojan", desc: "Brahmins are fed a special sattvic meal to complete the vow." },
      { step: "05", title: "Daan", desc: "Donation of food, clothes, and dakshina to worthy recipients." },
    ],
    materials: ["Tulsi garland", "Lotus flowers", "Ghee", "Sattvic food items", "Prasad sweets", "Dakshina"],
  },

  "engagement-puja-sagai": {
    subtitle: "Sanctify the Promise of Two Hearts",
    deity: "Lord Ganesha & Family Deities",
    shortDesc: "Engagement Puja (Sagai) is performed to solemnize the engagement ceremony between two families with Vedic blessings, seeking divine approval for the union before the actual wedding ceremony.",
    significance: "In the Vedic tradition, an engagement is not merely a social announcement but a sacred declaration before God. The Sagai puja creates a divine witness to the promise made between the couple and both families, invoking blessings for a harmonious marriage.",
    benefits: ["Creates divine witness to the engagement", "Seeks family deity's approval", "Invokes blessings for the couple's future", "Removes obstacles before the wedding", "Seals the promise between families", "Brings positivity and joy to both families"],
    process: [
      { step: "01", title: "Ganapathi Puja", desc: "Lord Ganesha is invoked by both families together." },
      { step: "02", title: "Kul Devata Puja", desc: "Family deities from both sides are propitiated." },
      { step: "03", title: "Exchange of Rings", desc: "The ring exchange is done in front of the lit sacred lamp." },
      { step: "04", title: "Haldi-Kumkum Ceremony", desc: "Women from both families apply haldi and kumkum in celebration." },
      { step: "05", title: "Aarti", desc: "The couple is welcomed into each other's families with aarti." },
    ],
    materials: ["Rings", "Flowers", "Haldi-kumkum", "Incense and lamp", "Sweets for distribution", "Coconut"],
  },

  "roka-ceremony": {
    subtitle: "The Sacred Stopping — Formalizing the Match",
    deity: "Lord Ganesha & Goddess Durga",
    shortDesc: "Roka Ceremony is the first formal ceremony in the wedding process — a sacred ritual where both families officially 'stop looking' for other matches, declaring their intention to unite the couple in marriage.",
    significance: "The word 'Roka' means 'to stop.' This ceremony formally stops the search for other matches on both sides. It is a sacred moment of commitment, witnessed by the family deity, where gifts are exchanged and blessings are sought for the impending wedding.",
    benefits: ["Formally commits both families to the union", "Seeks divine blessings on the relationship", "Removes obstacles to the marriage", "Creates positive energy around the couple", "First step in the sacred wedding journey", "Strengthens the bond between both families"],
    process: [
      { step: "01", title: "Ganapathi Puja", desc: "Lord Ganesha is worshipped by the groom's family at the bride's home." },
      { step: "02", title: "Tilak Ceremony", desc: "The groom is anointed with tilak by the bride's family." },
      { step: "03", title: "Gift Exchange", desc: "Traditional gifts are exchanged between the families." },
      { step: "04", title: "Mithai Distribution", desc: "Sweets are distributed — the announcement is made to all." },
      { step: "05", title: "Aarti & Blessings", desc: "The couple receives blessings and aarti from elders." },
    ],
    materials: ["Tilak items", "Sweets", "Gift items", "Flowers", "Coconut", "Incense"],
  },

  "santan-gopal-mantra-jaap": {
    subtitle: "Invoke Lord Krishna for the Blessing of a Child",
    deity: "Lord Santan Gopal (Baby Krishna)",
    shortDesc: "Santan Gopal Mantra Jaap is a powerful ritual for couples seeking to conceive a child. It involves chanting the Santan Gopal mantra — dedicated to Baby Krishna — for divine blessings of progeny.",
    significance: "Santan Gopal is a form of Lord Krishna who bestows the gift of children. His mantra has been chanted by couples for centuries when facing infertility, delayed conception, or pregnancy loss. This powerful jaap invokes the divine to bless the couple with a healthy child.",
    benefits: ["Blesses couples with healthy progeny", "Aids in overcoming infertility", "Prevents miscarriage and pregnancy complications", "Fulfills the long-standing wish for a child", "Brings joy of parenthood", "Ideal for couples trying to conceive after multiple attempts"],
    process: [
      { step: "01", title: "Sankalpa", desc: "The couple declares their intention for the child blessing." },
      { step: "02", title: "Santan Gopal Avahan", desc: "Baby Krishna is invoked with butter, milk, and yellow flowers." },
      { step: "03", title: "Mantra Jaap", desc: "'Om Shreem Hreem Kleem Glaum Devakisuta Govinda Vasudev...' chanted 10,000 times." },
      { step: "04", title: "Lakshmi-Narayana Puja", desc: "The divine couple is worshipped for the blessing of a child who mirrors their divinity." },
      { step: "05", title: "Homa", desc: "Fire ritual with ghee, sesame, and specific child-blessing herbs." },
      { step: "06", title: "Prasad", desc: "Butter and sweets (associated with Baby Krishna) are distributed." },
    ],
    materials: ["Butter", "Milk", "Yellow flowers", "Ghee", "Sesame", "Baby Krishna idol", "Yellow cloth"],
  },

  "solah-somvar-udyapan-puja": {
    subtitle: "Completing 16 Mondays of Devotion to Lord Shiva",
    deity: "Lord Shiva & Goddess Parvati",
    shortDesc: "Solah Somvar Udyapan is the completion ceremony for women who have observed the Solah Somvar Vrat — fasting and praying to Lord Shiva for 16 consecutive Mondays — for blessings of a good husband and marital harmony.",
    significance: "The Solah Somvar Vrat is one of the most popular vrats for unmarried women seeking a good husband and for married women seeking marital harmony. After completing 16 Mondays, the Udyapan ceremony formally concludes the vow with a grand Shiva puja.",
    benefits: ["Formally seals the 16-Monday vow", "Attracts a compatible life partner", "Improves marital harmony", "Grants Shiva-Parvati's marital blessings", "Removes obstacles to marriage", "Fulfills the divine intention of the vow"],
    process: [
      { step: "01", title: "Shivalinga Abhishek", desc: "Grand Rudrabhishek is performed with Panchamrit on the final Monday." },
      { step: "02", title: "Shiva-Parvati Puja", desc: "Both Lord Shiva and Goddess Parvati are worshipped together." },
      { step: "03", title: "Solah Somvar Katha", desc: "The Solah Somvar Vrat Katha is recited in full." },
      { step: "04", title: "Udyapan Puja", desc: "The formal completion ritual with all prescribed offerings." },
      { step: "05", title: "Brahmin Bhojan", desc: "16 Brahmins are fed as per the vow's completion requirement." },
    ],
    materials: ["Bilva leaves", "Panchamrit", "White flowers", "Camphor", "Shiva-Parvati idol", "White sweets"],
  },

  "narasimha-homam": {
    subtitle: "The Fierce Fire Ritual for Total Victory",
    deity: "Lord Narasimha (4th Avatar of Vishnu)",
    shortDesc: "Narasimha Homam is a powerful fire ritual dedicated to Lord Narasimha — Vishnu's half-man, half-lion avatar — for protection from evil, victory over enemies, removal of black magic, and fearlessness.",
    significance: "Lord Narasimha burst from a pillar to protect his devotee Prahlad. His Homam is performed when one faces seemingly impossible challenges, fierce enemies, or malevolent supernatural forces. It is the most powerful protective ritual in the Vaishnava tradition.",
    benefits: ["Provides absolute protection from all evil", "Grants victory over any enemy or adversary", "Destroys black magic and tantric attacks", "Removes extreme fear and threat", "Creates an invincible protective shield", "Ideal when facing legal battles or fierce competition"],
    process: [
      { step: "01", title: "Narasimha Avahan", desc: "Lord Narasimha is invoked with his ugra (fierce) mantras." },
      { step: "02", title: "Ugra Puja", desc: "The fierce form of Narasimha is worshipped with red flowers and neem leaves." },
      { step: "03", title: "Narasimha Mantra Jaap", desc: "Narasimha Mula Mantra is chanted 10,000 times." },
      { step: "04", title: "Homa with Red Offerings", desc: "Red flowers, red cloth, and specific herbs offered into fire." },
      { step: "05", title: "Protection Mantra", desc: "Narasimha Kavacham is chanted for full-body protection." },
      { step: "06", title: "Purna Ahuti", desc: "Grand final offering; sacred ash (bhasma) is given to the devotee." },
    ],
    materials: ["Red flowers", "Neem leaves", "Ghee", "Red cloth", "Camphor", "Havan samagri"],
  },

  "pratyangira-homam": {
    subtitle: "The Supreme Protective Goddess Against Dark Forces",
    deity: "Goddess Pratyangira Devi",
    shortDesc: "Pratyangira Homam is one of the most powerful and rare Shakti rituals, performed to invoke Goddess Pratyangira — an extremely fierce goddess — for protection against the most severe black magic, sorcery, and malefic forces.",
    significance: "Goddess Pratyangira is described in the Atharva Veda and is considered the most powerful goddess for countering dark occult attacks. She has a lion's face and a human body, and her Homam is performed only by highly learned pandits for extreme situations.",
    benefits: ["Neutralizes the most severe black magic", "Protects from tantric attacks", "Reverses curses sent by enemies", "Creates an impenetrable protective shield", "Destroys malefic forces completely", "Recommended for extreme and persistent spiritual attacks"],
    process: [
      { step: "01", title: "Devi Avahan", desc: "Goddess Pratyangira is invoked with her specific secret mantras." },
      { step: "02", title: "Specific Puja Vidhi", desc: "Rare puja performed only by qualified pandits trained in Atharva Veda." },
      { step: "03", title: "Pratyangira Mantra Jaap", desc: "Her specific mantra is chanted 10,000 times in a specific manner." },
      { step: "04", title: "Homa with Specific Offerings", desc: "Specific rare herbs, sesame, and items prescribed for this ritual." },
      { step: "05", title: "Bhadrakali Puja", desc: "Goddess Bhadrakali is worshipped alongside for complete protection." },
    ],
    materials: ["Specific rare herbs (prescribed)", "Sesame seeds", "Red cloth", "Ghee", "Specific flowers"],
  },

  "durga-suktham": {
    subtitle: "Chanting the Ancient Vedic Hymn of the Invincible Goddess",
    deity: "Goddess Durga",
    shortDesc: "Durga Suktham is the recitation of the ancient Vedic hymn from the Yajurveda dedicated to Goddess Durga — performed for protection, removal of difficulties, and invoking the divine feminine power.",
    significance: "The Durga Suktham is a Sanskrit text from the Krishna Yajurveda. Its recitation invokes Goddess Durga as the divine protector — she who removes all 'durga' (difficulties and impassable situations) from the devotee's life.",
    benefits: ["Invokes Goddess Durga's protective power", "Removes all difficulties and obstacles", "Provides divine protection to the family", "Ideal during Navaratri and challenging times", "Grants courage and victory", "Fills the home with the goddess's divine presence"],
    process: [
      { step: "01", title: "Devi Sthapana", desc: "Goddess Durga's image is installed and the altar is decorated with red flowers." },
      { step: "02", title: "Ganapathi Puja", desc: "Lord Ganesha is invoked first." },
      { step: "03", title: "Durga Suktham Recitation", desc: "The Durga Suktham is recited 3, 7, or 11 times by qualified pandits." },
      { step: "04", title: "Homa", desc: "Fire ritual with bilva leaves and red flowers." },
      { step: "05", title: "Kumari Puja", desc: "A young girl is worshipped as the goddess incarnate." },
      { step: "06", title: "Aarti", desc: "Durga Aarti is performed to conclude the ritual." },
    ],
    materials: ["Red flowers", "Bilva leaves", "Sindoor", "Red cloth", "Camphor", "Ghee"],
  },

  "shradh": {
    subtitle: "Sacred Rites for the Peace of the Departed Soul",
    deity: "Lord Yama & Ancestors (Pitru)",
    shortDesc: "Shradh is a series of Hindu rituals performed for the peace and liberation of the souls of departed ancestors. It is one of the most important duties (debts) of a Hindu son towards his parents and ancestors.",
    significance: "Shradh (from the Sanskrit 'Shraddha' — faith) expresses the living's faith in and love for the departed. When performed with sincerity, the ritual provides food, water, and liberation to the ancestors in their afterlife journey, removing any obstacles they face.",
    benefits: ["Provides peace to the departed soul", "Removes ancestors' karmic obstacles", "Fulfills the son's sacred duty to parents", "Protects the family from Pitru Dosha", "Brings blessings from satisfied ancestors", "Ideal on death anniversary and Pitru Paksha"],
    process: [
      { step: "01", title: "Sankalpa with Ancestor Names", desc: "Deceased family member's name, gotra, and death date are declared." },
      { step: "02", title: "Pitru Tarpan", desc: "Sacred water mixed with black sesame and kusha grass is offered in the ancestor's name." },
      { step: "03", title: "Pinda Daan", desc: "Rice and sesame balls (Pindas) are offered as symbolic food for the departed." },
      { step: "04", title: "Brahmin Bhojan", desc: "Brahmins are fed in the name of the departed — as they eat, so does the ancestor." },
      { step: "05", title: "Crow Feeding", desc: "Food is offered to crows — who are considered messengers of the ancestors." },
      { step: "06", title: "Daan & Dakshina", desc: "Clothes and food are donated to the poor in the name of the ancestor." },
    ],
    materials: ["Black sesame seeds", "Kusha grass", "Rice", "Til (sesame)", "Ghee", "Dakshina", "Water vessel"],
  },

  "pind-daan": {
    subtitle: "Offer Rice Balls to Liberate the Departed Soul",
    deity: "Lord Vishnu & Yama Dharmaraja",
    shortDesc: "Pind Daan is one of the most important Hindu death rituals where rice or flour balls (pindas) are offered at sacred places like Gaya, Varanasi, or Prayagraj for the liberation (moksha) of departed ancestors.",
    significance: "According to Hindu scriptures, a soul cannot achieve moksha without Pind Daan from its descendants. Performing Pind Daan at sacred pilgrimage sites — especially Gaya (considered the most sacred) — provides direct liberation to the ancestor's soul.",
    benefits: ["Directly liberates the departed soul", "Fulfills the highest duty to ancestors", "Frees the soul from the cycle of rebirth", "Removes Pitru Dosha from the family", "Brings blessings from liberated ancestors", "Can be performed even years after death"],
    process: [
      { step: "01", title: "Sankalpa", desc: "Full declaration of the departed person's name, gotra, and relationship." },
      { step: "02", title: "Pinda Preparation", desc: "Rice balls mixed with sesame and honey are prepared." },
      { step: "03", title: "Tarpan", desc: "Water offerings to the departed soul at a sacred water body." },
      { step: "04", title: "Pinda Offering", desc: "Pindas are offered at specific sacred spots with mantras." },
      { step: "05", title: "Crow and Fish Feeding", desc: "Pindas are offered to crows and fish — sacred intermediaries." },
      { step: "06", title: "Completion Puja", desc: "Concluding Vishnu puja for the soul's acceptance into the divine." },
    ],
    materials: ["Rice flour or cooked rice", "Black sesame", "Honey", "Ghee", "Kusha grass", "Til flowers"],
  },

  "asthi-visarjan": {
    subtitle: "Sacred Immersion of Ashes for Final Liberation",
    deity: "Lord Varuna & Ganga Mata",
    shortDesc: "Asthi Visarjan is the sacred ritual of immersing the ashes and bones of a deceased person in a holy river — especially the Ganga — for the liberation and final journey of their soul.",
    significance: "After cremation, the bones and ashes retain the subtle energy of the departed. Immersing them in the sacred Ganga, while chanting specific mantras, completes the dissolution of the earthly body and releases the soul for its next journey.",
    benefits: ["Completes the soul's transition from earth", "Provides peace to the departed soul", "Fulfills the mandatory post-cremation rite", "Removes any earthly attachment of the soul", "Sacred duty of family members", "Recommended within 13 days of death"],
    process: [
      { step: "01", title: "Ganga/River Puja", desc: "The sacred river is worshipped before the immersion." },
      { step: "02", title: "Sankalpa", desc: "The departed's name and gotra are declared." },
      { step: "03", title: "Tarpan", desc: "Water offerings for the soul at the river bank." },
      { step: "04", title: "Asthi Immersion", desc: "The ashes and bones are immersed in the flowing sacred water." },
      { step: "05", title: "Mantras", desc: "Specific liberation mantras are chanted as the immersion occurs." },
      { step: "06", title: "River Puja", desc: "The river is thanked for receiving and liberating the soul." },
    ],
    materials: ["Ashes in sealed vessel", "Flowers", "Black sesame", "Kusha grass", "Sacred water"],
  },

  "antyeshti": {
    subtitle: "The Final Sacrament — Complete Funeral Rites",
    deity: "Lord Yama, Agni, and Ancestors",
    shortDesc: "Antyeshti (meaning 'the last rite') is the Hindu funeral ceremony — a comprehensive series of rites from the moment of death through cremation and the 13 days of mourning rituals that follow.",
    significance: "Antyeshti is the 16th and final samskara (life sacrament) in Hinduism. It is the most sacred duty of a family member to perform these rites correctly. Proper Antyeshti ensures the soul's smooth transition, provides peace, and fulfills the family's sacred obligation.",
    benefits: ["Ensures the soul's peaceful transition", "Fulfills the highest sacred duty to the departed", "Prevents the soul from becoming a troubled spirit", "Removes the family's grief with sacred structure", "Completes all 13 days of mourning rituals", "Generates immense punya for the performers"],
    process: [
      { step: "01", title: "Pre-Death Rites", desc: "Ganga Jal on lips, Vishnu nama chanting, lamp lit near the head." },
      { step: "02", title: "Cremation Preparation", desc: "Body bathed and dressed; Panchagavya purification performed." },
      { step: "03", title: "Cremation Mukhagni", desc: "The eldest son lights the cremation fire at the head with specific mantras." },
      { step: "04", title: "Asthi Sanchayan", desc: "Collection of ashes and bones for immersion on the 3rd day." },
      { step: "05", title: "Daily Pindas (1-13)", desc: "A pinda (rice ball) is offered daily for 13 days to sustain the transitioning soul." },
      { step: "06", title: "Sapindi Karanam", desc: "On the 13th day, the soul is formally united with the ancestors." },
    ],
    materials: ["Sesame seeds", "Rice", "Ghee", "Kusha grass", "Ganga Jal", "Camphor", "New white clothes"],
  },

  "narayan-nagbali": {
    subtitle: "Liberation from the Most Complex Ancestral Curses",
    deity: "Lord Vishnu (Narayan) & Naga Devatas",
    shortDesc: "Narayan Nagbali is a combined three-day ritual performed at Trimbakeshwar to liberate souls of ancestors who died an untimely, unnatural, or cursed death, and to remove Naga Dosha (serpent curse) simultaneously.",
    significance: "Narayan Bali is performed for ancestors who died by suicide, accident, animal bite, or in unusual circumstances and whose souls are still wandering, unable to move on. Nagbali specifically removes the serpent curse if ancestors killed a snake or were cursed by serpent deities.",
    benefits: ["Liberates souls trapped by untimely death", "Removes Nag Dosha (serpent curse)", "Removes childlessness caused by these doshas", "Frees the family from generational patterns of tragedy", "Enables the troubled souls to achieve peace", "Recommended specifically at Trimbakeshwar (Nashik)"],
    process: [
      { step: "01", title: "Day 1 - Narayan Bali", desc: "Symbolic funeral rites are performed for the troubled ancestor using a grass effigy." },
      { step: "02", title: "Day 2 - Nagbali", desc: "A gold or clay snake idol is worshipped and then given proper funeral rites." },
      { step: "03", title: "Tarpan & Pinda Daan", desc: "Comprehensive Tarpan and Pinda Daan for both the ancestor and the snake deity." },
      { step: "04", title: "Rudrabhishek", desc: "Rudrabhishek at Trimbakeshwar for maximum power." },
      { step: "05", title: "Day 3 - Final Rites", desc: "Final liberation mantras and offerings to complete the three-day ritual." },
    ],
    materials: ["Grass effigy", "Gold or clay snake idol", "Pinda ingredients", "Sesame", "Ghee", "Kusha grass"],
  },

  "mahalaya-amavasya": {
    subtitle: "The Sacred Day When the Veil Between Worlds is Thinnest",
    deity: "Ancestors (Pitru Devatas)",
    shortDesc: "Mahalaya Amavasya is the most sacred day of the Pitru Paksha (16-day period) for performing Shradh, Tarpan, and Pinda Daan for all ancestors. It is believed that on this day all ancestors visit their descendants.",
    significance: "Mahalaya Amavasya (new moon in Bhadrapada) is the culmination of the 16-day Pitru Paksha period. It is the one day when all ancestors — regardless of when they died — are believed to descend to Earth to receive offerings from their descendants. Missing this day is considered a significant omission.",
    benefits: ["Most powerful day for ancestral rites", "All ancestors receive offerings simultaneously", "Removes Pitru Dosha effectively", "Grants maximum ancestral blessings", "Fulfills annual ancestral obligation", "Brings peace to the entire ancestral lineage"],
    process: [
      { step: "01", title: "Sacred Bath at Sunrise", desc: "The performer takes a bath before sunrise and wears clean white clothes." },
      { step: "02", title: "Pitru Sankalpa", desc: "Names of all known ancestors are recited as part of the sankalpa." },
      { step: "03", title: "Tarpan", desc: "Water and sesame are offered for all ancestors — 3 rounds for each." },
      { step: "04", title: "Pinda Daan", desc: "Rice balls are offered for each generation of ancestors." },
      { step: "05", title: "Crow Feeding", desc: "Food is served to crows — the ancestors' messengers." },
      { step: "06", title: "Brahmin Bhojan & Daan", desc: "Brahmins are fed and donations made in all ancestors' names." },
    ],
    materials: ["Black sesame", "Rice", "Kusha grass", "White cloth", "Ghee", "Fruits", "Flowers"],
  },

  "tila-homa": {
    subtitle: "The Sesame Fire Offering for Ancestral Peace",
    deity: "Yama & Pitru Devatas",
    shortDesc: "Tila Homa is a sacred fire ritual performed with sesame seeds (tila) as the primary offering — specifically for the peace, liberation, and satisfaction of departed ancestors.",
    significance: "Sesame seeds (til/tila) are considered the most sacred offering for ancestors and are specifically associated with Pitru rituals. Offering sesame in fire while chanting Pitru mantras is believed to reach the ancestral realm directly, providing them with nourishment and peace.",
    benefits: ["Directly nourishes and pleases ancestors", "Removes Pitru Dosha", "Ideal on Pitru Paksha and death anniversaries", "Generates powerful Pitru punya", "Liberates ancestors from food-related karma", "Brings peace to the ancestral realm"],
    process: [
      { step: "01", title: "Pitru Avahan", desc: "Ancestors are invoked at the havan kund facing South (ancestors' direction)." },
      { step: "02", title: "Sesame Preparation", desc: "Black and white sesame are both used as primary offerings." },
      { step: "03", title: "Tila Ahuti", desc: "Sesame is offered into the fire with each Pitru mantra — 108 times minimum." },
      { step: "04", title: "Pinda Offering", desc: "Rice balls are offered alongside the Homa." },
      { step: "05", title: "Tarpan", desc: "Water and sesame are offered as liquid nourishment after the Homa." },
    ],
    materials: ["Black sesame (til)", "White sesame", "Ghee", "Rice", "Kusha grass", "Water vessel"],
  },

  "namakaranam": {
    subtitle: "The Sacred Naming Ceremony of the Newborn",
    deity: "Lord Vishnu & Kul Devata",
    shortDesc: "Namakaranam is the 3rd Hindu samskara — the sacred naming ceremony performed between the 11th and 41st day after birth — where the newborn is given their name through a Vedic ritual.",
    significance: "In Vedic tradition, a name is not merely an identity label but a mantra. The name chosen for a child carries a specific vibration that shapes their destiny. Namakaranam is the sacred ceremony of bestowing this lifelong mantra upon the child.",
    benefits: ["Bestows an auspicious name with divine vibration", "Invokes divine blessings for the child's life", "Connects the child to family and cosmic heritage", "Creates a spiritual identity beyond the physical", "Fulfills the mandatory 3rd samskara", "Removes negative birth-time planetary influences"],
    process: [
      { step: "01", title: "Punyahavachanam", desc: "Purification of the home and family through sacred water and mantras." },
      { step: "02", title: "Baby's First Outing", desc: "The newborn is brought out of the inner room for the first time." },
      { step: "03", title: "Ganapathi & Navagraha Puja", desc: "Both are propitiated for auspicious beginnings." },
      { step: "04", title: "Name Announcement", desc: "The father whispers the chosen name into the baby's right ear." },
      { step: "05", title: "Jataka Karma", desc: "The baby's horoscope is formally created and handed to the family." },
      { step: "06", title: "Blessings & Sweets", desc: "Family members bless the child; sweets are distributed." },
    ],
    materials: ["New baby clothes", "Gold chain", "Honey for first tasting", "Flowers", "Incense", "Sweets"],
  },

  "annaprashana": {
    subtitle: "The Joyful First Feeding of Solid Food",
    deity: "Lord Ganesha & Annapurna Devi",
    shortDesc: "Annaprashana is the 6th Hindu samskara — the sacred first feeding ceremony — performed when a baby is 6 months old (or at 5th month for girls) for the first time consuming solid food beyond mother's milk.",
    significance: "Annaprashana (meaning 'grain initiation') is the moment a child formally transitions from milk to food — becoming a full participant in the family's social and spiritual life. The first food is blessed by the pandit and offered by the father for divine nourishment.",
    benefits: ["Blesses the child's digestive health", "Ensures proper growth and development", "Invokes divine blessings for food and nourishment", "Fulfills the mandatory 6th samskara", "Creates a joyful family occasion", "Connects the child to Annapurna Devi's abundance"],
    process: [
      { step: "01", title: "Auspicious Bath", desc: "The baby is given a bath with herbal water on the auspicious day." },
      { step: "02", title: "Ganapathi Puja", desc: "Lord Ganesha is worshipped to remove obstacles." },
      { step: "03", title: "Annapurna Puja", desc: "Goddess Annapurna is worshipped as the deity of food and nourishment." },
      { step: "04", title: "First Food Blessing", desc: "The first food (usually rice pudding/kheer) is blessed with specific mantras." },
      { step: "05", title: "Father's Feeding", desc: "The father feeds the first spoonful with love and Vedic mantras." },
      { step: "06", title: "Celebration", desc: "Family celebrates the milestone with gifts and sweets." },
    ],
    materials: ["Rice pudding (kheer)", "Silver feeding bowl and spoon", "New baby clothes", "Flowers", "Incense"],
  },

  "ayush-homam": {
    subtitle: "Sacred Fire Ritual for Long Life and Vitality",
    deity: "Lord Dhanvantari & Mrutyunjaya (Shiva)",
    shortDesc: "Ayush Homam is a fire ritual performed for the health, long life, and protection of a person — especially for babies, during illness, on birthdays, or as a periodic practice for continued vitality.",
    significance: "Ayush (meaning 'life' or 'longevity') Homam invokes the divine forces of life — Lord Dhanvantari (deity of medicine), Lord Mrutyunjaya (conqueror of death), and Lord Vishnu — to bless the individual with a long, healthy, and purposeful life.",
    benefits: ["Promotes long life and good health", "Protects from premature death", "Strengthens the body's vital energy", "Ideal for babies, sick persons, and elderly", "Performed at milestone birthdays", "Brings divine blessings for vitality"],
    process: [
      { step: "01", title: "Ayush Sankalpa", desc: "Name, birth star, and the intention for longevity are stated." },
      { step: "02", title: "Dhanvantari Avahan", desc: "Lord Dhanvantari, the physician of gods, is invoked." },
      { step: "03", title: "Mrutyunjaya Avahan", desc: "Lord Shiva in his Mrutyunjaya (death-conquering) form is invoked." },
      { step: "04", title: "Ayush Ahutis", desc: "1008 ahutis with ghee, bilva, and specific longevity herbs." },
      { step: "05", title: "Mrityunjaya Mantra", desc: "Maha Mrityunjaya mantra is chanted 108 times within the homa." },
      { step: "06", title: "Bhasma Dharana", desc: "Sacred ash from the fire is applied to the person's forehead for protection." },
    ],
    materials: ["Bilva leaves", "Ghee (2 kg)", "Specific longevity herbs", "Sesame", "Havan samagri", "Camphor"],
  },

  "vidyarambham": {
    subtitle: "The Sacred Beginning of a Child's Education",
    deity: "Goddess Saraswati & Lord Ganesha",
    shortDesc: "Vidyarambham is the auspicious initiation ceremony where a child formally begins their education — guided by a Vedic pandit to write their first letters on a tray of rice or a slate, invoking Goddess Saraswati's blessings.",
    significance: "In the Vedic tradition, education is a sacred journey. Vidyarambham (meaning 'beginning of knowledge') formally initiates the child into the world of learning with divine blessings from Saraswati and Ganesha, ensuring their entire educational journey is blessed from the first day.",
    benefits: ["Blesses the child's entire educational journey", "Invokes Saraswati for intelligence and memory", "Removes obstacles to learning", "Creates an auspicious start to formal education", "Fulfills the mandatory samskara", "Ideal on Vijayadashami or Saraswati Puja day"],
    process: [
      { step: "01", title: "Auspicious Bath", desc: "The child is bathed and dressed in new, clean clothes." },
      { step: "02", title: "Saraswati Puja", desc: "Goddess Saraswati is worshipped with white flowers and books." },
      { step: "03", title: "Ganapathi Puja", desc: "Lord Ganesha is invoked for an obstacle-free educational journey." },
      { step: "04", title: "Rice Tray Writing", desc: "The Guru/Pandit guides the child's hand to write 'Hari Shree Ganapathaye Namah' in a tray of rice." },
      { step: "05", title: "Aksharabhyasam", desc: "The first letters of the alphabet are written — the formal beginning." },
      { step: "06", title: "Blessings", desc: "The Guru blesses the child; prasad is distributed." },
    ],
    materials: ["Rice tray", "Gold ring for writing", "Books and pens", "White flowers", "Incense", "Sweets"],
  },

  "dhanvantari-homa": {
    subtitle: "Invoke the Divine Physician for Health and Healing",
    deity: "Lord Dhanvantari",
    shortDesc: "Dhanvantari Homa is a sacred fire ritual dedicated to Lord Dhanvantari — the physician of the gods and the deity of Ayurveda — for recovery from illness, overall health, and freedom from disease.",
    significance: "Lord Dhanvantari emerged from the cosmic ocean of milk carrying the pot of Amruta (divine nectar). He is worshipped on Dhanteras (two days before Diwali) and whenever healing is needed. His Homa is particularly powerful for chronic or incurable conditions.",
    benefits: ["Promotes healing from illness", "Removes chronic health conditions", "Invokes divine medical intervention", "Protects from future diseases", "Ideal for those undergoing treatment", "Brings Ayurvedic wisdom's divine blessings"],
    process: [
      { step: "01", title: "Dhanvantari Avahan", desc: "Lord Dhanvantari is invoked with his specific mantra and golden lotus." },
      { step: "02", title: "Medicinal Herb Puja", desc: "Specific healing herbs (tulsi, neem, bilva, etc.) are placed before the deity." },
      { step: "03", title: "Homa with Herbs", desc: "Medicinal herbs, ghee, and specific offerings are made into the fire." },
      { step: "04", title: "Dhanvantari Mantra Jaap", desc: "Dhanvantari Mantra chanted 1008 times." },
      { step: "05", title: "Healing Water Abhishek", desc: "Sacred water energized by the homa is given to the patient." },
      { step: "06", title: "Prasad", desc: "Ayurvedic herbs and tulsi prasad are distributed." },
    ],
    materials: ["Tulsi", "Neem leaves", "Bilva", "Specific healing herbs", "Ghee", "Gold lotus", "Camphor"],
  },

  "ganesh-chaturthi": {
    subtitle: "Celebrate the Grand Festival of Lord Ganesha",
    deity: "Lord Ganesha",
    shortDesc: "Ganesh Chaturthi is the grand festival celebrating Lord Ganesha's birth anniversary — a 1.5 to 11-day celebration with a daily puja, aarti, and culminating in the immersion of Ganesha idols in water.",
    significance: "Ganesh Chaturthi falls on the 4th day of the waxing moon in Bhadrapada (Aug-Sep). It is one of the most celebrated festivals in India, especially in Maharashtra. The detailed daily worship with full rituals brings immense blessings of Ganesha on the family.",
    benefits: ["Brings year-long blessings of Lord Ganesha", "Removes all obstacles for the family", "Creates community spirit and divine joy", "Generates immense collective punya", "Fulfills all wishes made during the festival", "Ideal for family and community celebrations"],
    process: [
      { step: "01", title: "Idol Installation", desc: "A clay Ganesha idol is installed with great ceremony on Chaturthi day." },
      { step: "02", title: "Prana Pratishtha", desc: "The deity's life force is consecrated into the idol." },
      { step: "03", title: "Daily Puja (1.5 to 11 days)", desc: "Morning and evening puja with 21 modaks, flowers, and prayers." },
      { step: "04", title: "Daily Aarti", desc: "Sukhkarta Dukhaharta Aarti is performed twice daily." },
      { step: "05", title: "Cultural Programs", desc: "Bhajans and community activities during the festival period." },
      { step: "06", title: "Visarjan", desc: "On the final day, the idol is taken in procession for immersion in water." },
    ],
    materials: ["Clay Ganesha idol", "21 Modaks", "Durva grass", "Red flowers", "Camphor", "Fruits", "Laddoos"],
  },

  "navratri-chandi-homa": {
    subtitle: "Nine Nights of the Divine Mother's Power",
    deity: "Goddess Durga (Navadurga forms)",
    shortDesc: "Navratri Chandi Homa is a grand fire ritual performed during the nine sacred nights of Navratri — with recitation of the Durga Saptashati (Chandi Path) and specific havan offerings for each of the nine nights.",
    significance: "Navratri (nine nights) is the most powerful period for Shakti worship. The Chandi Homa performed during this period is exponentially more powerful than at other times. Each night is dedicated to a different form of Goddess Durga (Shailputri, Brahmacharini, etc.).",
    benefits: ["Maximum Shakti blessings during the sacred period", "Removes all 9 major types of obstacles", "Provides protection for the entire year ahead", "Generates extraordinary spiritual merit", "Ideal for serious Shakti devotees", "Creates a powerful protective shield"],
    process: [
      { step: "01", title: "Kalash Sthapana", desc: "On the first day, a sacred Kalash is installed for all nine nights." },
      { step: "02", title: "Navadurga Puja (Night by Night)", desc: "Each night, one form of Goddess Durga is specifically worshipped." },
      { step: "03", title: "Chandi Path Recitation", desc: "Full Durga Saptashati is recited each day during the nine days." },
      { step: "04", title: "Daily Havan", desc: "Fire ritual is performed each evening with specific offerings for that Durga form." },
      { step: "05", title: "Kumari Puja", desc: "Young girls are worshipped on specific days as goddess incarnates." },
      { step: "06", title: "Vijayadashami Conclusion", desc: "On the 10th day, the festival concludes with a grand final offering and idol immersion." },
    ],
    materials: ["Clay Durga idol", "Red and yellow flowers", "Sindoor", "Ghee", "Specific herbs per night", "Camphor"],
  },

  "varalakshmi-vratam": {
    subtitle: "Friday Festival of Goddess Varalakshmi",
    deity: "Goddess Varalakshmi",
    shortDesc: "Varalakshmi Vratam is a sacred festival observed by married Hindu women on the Friday before the full moon in Shravana (July-August) — worshipping Goddess Varalakshmi for the prosperity and well-being of their families.",
    significance: "Varalakshmi means 'the goddess who grants boons.' According to tradition, worshipping Varalakshmi on this day is equal to worshipping Ashtalakshmi (eight forms of Lakshmi). The festival is particularly important in South Indian households.",
    benefits: ["Grants boons for all family members' prosperity", "Blesses with wealth and good health", "Strengthens marital harmony", "Fulfills women's prayers for their families", "Ideal for women seeking all-round family prosperity", "Equal to worshipping all eight forms of Lakshmi"],
    process: [
      { step: "01", title: "Kolam (Rangoli)", desc: "Intricate kolam is drawn at the entrance and puja area." },
      { step: "02", title: "Kalasha Decoration", desc: "A Kalasha is decorated to represent Goddess Varalakshmi." },
      { step: "03", title: "Shodashopachara Puja", desc: "16-step worship of Goddess Varalakshmi." },
      { step: "04", title: "Varalakshmi Katha", desc: "The Varalakshmi Vrat Katha is recited." },
      { step: "05", title: "Naivedyam", desc: "Specific food offerings — sundal, payasam, and fruits — are offered." },
      { step: "06", title: "Mangalsutra Tying", desc: "Women tie the sacred thread around the Kalasha and then around their necks." },
    ],
    materials: ["Decorated Kalasha", "Yellow thread", "Gold jewelry", "Red and yellow flowers", "Specific festival foods", "Camphor"],
  },

  "upanayanam-thread-ceremony": {
    subtitle: "The Sacred Thread — Initiation into the Second Birth",
    deity: "Lord Gayatri, Savitri & Family Deity",
    shortDesc: "Upanayanam (Thread Ceremony / Janivara / Munja) is the sacred initiation ritual where a young Brahmin, Kshatriya, or Vaishya boy is invested with the sacred thread (Yajnopavita) — marking his second birth and initiation into Vedic studies.",
    significance: "Upanayanam means 'bringing near' — bringing the boy near to his Guru and to Brahman (the divine). This samskara transforms a child into a student of the Vedas. The sacred thread represents his duty to the Guru, God, and ancestors for life.",
    benefits: ["Initiates the boy into Vedic learning", "Creates the second, spiritual birth", "Installs lifelong Gayatri mantra practice", "Connects the boy to the Vedic tradition", "Fulfills mandatory dvija samskara", "Grants Brahmacharya energy and discipline"],
    process: [
      { step: "01", title: "Nandimukha Shradh", desc: "Blessings from ancestors are sought before the ceremony." },
      { step: "02", title: "Punyahavachanam", desc: "Purification of the boy and space." },
      { step: "03", title: "Keshi-Karmam", desc: "The boy's head is shaved, leaving only the Shikha (tuft) — symbolic of the new beginning." },
      { step: "04", title: "Upanayana Homa", desc: "Sacred fire is lit; the boy formally becomes a Brahmachari." },
      { step: "05", title: "Yajnopavita Dharana", desc: "The sacred thread is invested upon the boy by the Acharya with the Gayatri mantra." },
      { step: "06", title: "Gayatri Upadesa", desc: "The Guru whispers the Gayatri Mantra into the boy's ear — his lifelong mantra." },
    ],
    materials: ["Sacred thread (Yajnopavita)", "New dhoti", "Kashi Yatra items", "Ghee", "Havan samagri", "Dakshina"],
  },

  "shashtiabdapoorthi-60th-birthday": {
    subtitle: "Celebrating the Completion of 60 Sacred Years",
    deity: "Lord Vishnu, Lord Shiva & Kul Devata",
    shortDesc: "Shashtiabdapoorthi is the grand celebration of the 60th birthday — when a person completes 60 years and begins their second cycle of life. It is one of the most important lifecycle celebrations in South Indian tradition.",
    significance: "At 60, a person completes one full cycle of the Hindu calendar's 60-year system (Prabhava to Akshaya). Shashtiabdapoorthi re-consecrates the person's life, celebrates their achievements, and invokes divine blessings for their second journey.",
    benefits: ["Celebrates and consecrates 60 years of dharmic living", "Invokes divine blessings for the second phase of life", "Reconnects the person to their birth star blessings", "Generates joy and punya for the entire family", "Fulfills a rare and significant lifecycle milestone", "Removes accumulated doshas of 60 years"],
    process: [
      { step: "01", title: "Kashi Yatra", desc: "Symbolic enactment of a Kashi (Varanasi) pilgrimage within the ceremony." },
      { step: "02", title: "Punyahavachanam", desc: "Purification of the celebrant and venue." },
      { step: "03", title: "Ayushya Homa", desc: "Sacred fire ritual for long life and continued vitality." },
      { step: "04", title: "Shodasha Upachara Puja", desc: "Grand 16-step worship to celebrate the milestone." },
      { step: "05", title: "Mangalasnanam", desc: "Auspicious bath with herbal water for the celebrant and spouse." },
      { step: "06", title: "Blessings & Gifting", desc: "Children and grandchildren seek blessings from the parents." },
    ],
    materials: ["Herbal bath ingredients", "Gold or silver vessel", "New clothes", "Flowers", "Ghee for homa", "Sweets"],
  },

  "sadabhishekam-80th-birthday": {
    subtitle: "The Rare and Sacred 80th Birthday Celebration",
    deity: "Lord Shiva, Lord Vishnu & Kul Devata",
    shortDesc: "Sadabhishekam is the extremely auspicious 80th birthday celebration — when a person's birth star falls 1000 times, marking the rarest and most sacred lifecycle milestone in the Hindu tradition.",
    significance: "Sadabhishekam (meaning 'the thousandth Abhishek') occurs when a person lives long enough for their birth star (Janma Nakshatra) to occur 1000 times — a numerologically sacred number. This grand celebration invokes maximum divine blessings for the remaining years.",
    benefits: ["Celebrates an extraordinary milestone of longevity", "Invokes divine blessings for continued health", "Celebrates 1000 occurrences of the birth star", "Rare and extraordinarily auspicious ceremony", "Generates maximum positive karma for the family", "A once-in-a-lifetime sacred milestone"],
    process: [
      { step: "01", title: "Grand Punyahavachanam", desc: "Elaborate purification ceremony for the venue and family." },
      { step: "02", title: "Vedic Chanting", desc: "Full-day Vedic chanting by multiple pandits." },
      { step: "03", title: "Maha Abhishek", desc: "Grand ceremonial bathing of the celebrant with Panchamrit and herbal water." },
      { step: "04", title: "Sahasra (1000) Abhishek", desc: "Symbolic 1000-times Abhishek performed in accelerated ritual form." },
      { step: "05", title: "Satabhisheka Homa", desc: "Grand fire ritual marking this extraordinary milestone." },
      { step: "06", title: "Brahmin Bhojan", desc: "Large feast for Brahmins and family in honor of the milestone." },
    ],
    materials: ["Herbal bath ingredients", "1000 Bilva leaves", "Panchamrit", "Gold vessels", "New clothes", "Grand feast items"],
  },
};

export function getAllPoojaDetails(): PoojaDetail[] {
  return poojaItems.map(item => {
    const id = nameToId(item.name);
    const specific = POOJA_SPECIFICS[id] || {};
    const cat = item.categories[0] || "New Beginnings";

    return {
      id,
      name: item.name,
      categories: item.categories,
      startingPrice: ((item.name.split('').reduce((acc: number, c: string) => acc + c.charCodeAt(0), 0) % 8) + 2) * 1000,
      duration: "2 – 3 Hours",
      language: "Sanskrit (Telugu/Hindi narration available)",
      occasion: "Any auspicious day, or as prescribed by astrologer",
      imageUrl: IMAGE_MAP[cat] || IMAGE_MAP["New Beginnings"],
      packages: STANDARD_PACKAGES,
      faqs: STANDARD_FAQS,
      // defaults (overridden by specific below)
      subtitle: `A Sacred Vedic Ritual for ${cat}`,
      deity: "Lord Ganesha & Presiding Deity",
      shortDesc: `${item.name} is an authentic Vedic ritual from India's ancient scriptures, performed by our certified Pandits to bring divine blessings for the devotee's specific prayers.`,
      significance: `${item.name} is deeply rooted in Vedic tradition. This ritual connects the devotee with the divine, removes specific obstacles related to ${cat.toLowerCase()}, and invokes powerful blessings from the presiding deity.`,
      benefits: [
        "Removes obstacles and negative energies",
        `Brings blessings specific to ${cat}`,
        "Performed by certified, experienced Pandits",
        "Conducted in authentic Sanskrit with proper vidhi",
        "Generates positive karma and divine grace",
        "Brings peace, clarity, and alignment with dharma",
      ],
      process: [
        { step: "01", title: "Sankalpam", desc: "The devotee states their name, gotra, and intention before the presiding deity." },
        { step: "02", title: "Ganapathi Puja", desc: "Lord Ganesha is invoked to remove all obstacles before the main ritual." },
        { step: "03", title: "Kalasha Sthapana", desc: "A sacred water pot is installed, symbolizing divine presence." },
        { step: "04", title: "Main Puja Vidhi", desc: `The main ritual of ${item.name} is performed with proper Vedic mantras and invocations.` },
        { step: "05", title: "Homa / Havan", desc: "Where applicable, a sacred fire ritual is performed with specific offerings." },
        { step: "06", title: "Aarti & Prasad", desc: "The ritual concludes with aarti and distribution of sacred prasad." },
      ],
      materials: ["Flowers and garlands", "Fruits and coconut", "Incense sticks and camphor", "Ghee and oil", "Haldi, kumkum, and sindoor", "Tulsi leaves", "Sacred cloth"],
      ...specific,
    } as PoojaDetail;
  });
}

export function getPoojaById(id: string): PoojaDetail | null {
  const all = getAllPoojaDetails();
  return all.find(p => p.id === id) || null;
}
