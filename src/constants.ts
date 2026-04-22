import { Product, Vendor, BlogPost } from './types';

export const VENDORS: Vendor[] = [
  {
    id: "v1",
    name: "The Kumhar Collective",
    location: "Kutch, Gujarat",
    story: "Generations of earth-shapers preserving the ancient art of Kutch pottery.",
    image: "https://images.unsplash.com/photo-1541233349642-6e425fe6190e?auto=format&fit=crop&q=80&w=800",
    biography: "The Kumhar Collective represents a lineage of artisans who believe the soil is sacred. They use locally sourced clay, natural minerals for painting, and traditional wood-fired kilns. Each piece is a dialogue between the artisan and the earth.",
    workspaceImages: [
      "https://images.unsplash.com/photo-1565193998772-263d8ff92314?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1590136284690-34449842bb72?auto=format&fit=crop&q=80&w=800"
    ],
    specialty: "Hand-thrown Terracotta"
  },
  {
    id: "v2",
    name: "Anviti Weaves",
    location: "Maheshwar, Madhya Pradesh",
    story: "Empowering local women weavers to create heritage textiles from sustainable fibers.",
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&q=80&w=800",
    biography: "Anviti Weaves specializes in the delicate Maheshwari weaving style. They prioritize natural materials like bamboo, jute, and organic cotton, ensuring that every thread respects the environment.",
    workspaceImages: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517423568366-8b83523034fd?auto=format&fit=crop&q=80&w=800"
    ],
    specialty: "Sustainable Weaves"
  },
  {
    id: "v3",
    name: "Desert Bloom Atelier",
    location: "Jodhpur, Rajasthan",
    story: "Minimalist adornments inspired by heritage motifs and lightweight materials.",
    image: "https://images.unsplash.com/photo-1611085583191-a3b1abe5825d?auto=format&fit=crop&q=80&w=800",
    biography: "Desert Bloom focuses on lightweight, daily-wear jewelry. They use reclaimed wood, beaten brass, and silver filigree to create pieces that are traditionally rooted yet modern in form.",
    workspaceImages: [
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=800"
    ],
    specialty: "Minimalist Jewelry"
  },
  {
    id: "v4",
    name: "Prakriti Herbs",
    location: "Uttarakhand, Himalayas",
    story: "High-altitude botanical alchemy and raw minerals for natural wellness.",
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=800",
    biography: "Prakriti Herbs sources organic botanical ingredients from the foothills of the Himalayas. Their products are free from chemicals and synthetics, following ancient Ayurvedic recipes for skin and hair health.",
    workspaceImages: [
      "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&q=80&w=800"
    ],
    specialty: "Botanical Beauty"
  }
];

export const PRODUCTS: Product[] = [
  // POTTERY & UTENSILS
  {
    id: "p1",
    name: "Terracotta Grain Pot",
    category: "Pottery",
    price: 3200,
    images: ["https://images.unsplash.com/photo-1590136284690-34449842bb72?auto=format&fit=crop&q=80&w=800"],
    description: "Traditionally crafted clay pitcher that keeps water naturally cool through evaporative cooling.",
    vendorId: "v1",
    highlights: ["100% Organic Clay", "Natural Cooling", "Lead-Free"],
    stock: 25
  },
  {
    id: "p2",
    name: "Clay Utensil Set (3pcs)",
    category: "Pottery",
    price: 2400,
    images: ["https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=800"],
    description: "Hand-painted earthen cooking pots. Naturally alkaline, enhancing the flavor and nutrition of your food.",
    vendorId: "v1",
    highlights: ["Alkaline", "Heat-Resistant", "Hand-Painted"],
    stock: 12
  },
  {
    id: "p3",
    name: "Tribal Clay Horse Toy",
    category: "Pottery",
    price: 950,
    images: ["https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=800"],
    description: "Replica of ancient terracotta figurines found in Kutch archaeology. Pure unglazed clay.",
    vendorId: "v1",
    highlights: ["Folklore Heritage", "Natural Pigments"],
    stock: 15
  },
  {
    id: "p4",
    name: "Minimalist Clay Vase",
    category: "Pottery",
    price: 1600,
    images: ["https://images.unsplash.com/photo-1630138240409-7756f8f7c9e1?auto=format&fit=crop&q=80&w=800"],
    description: "Contemporary geometric vase with a cold-pressed texture. Earth-toned matte finish.",
    vendorId: "v1",
    highlights: ["Studio Decor", "Geometric Pattern"],
    stock: 10
  },
  {
    id: "p5",
    name: "Clay Chai Cups (Set of 6)",
    category: "Pottery",
    price: 1100,
    images: ["https://images.unsplash.com/photo-1576092762791-dd9e2220abd1?auto=format&fit=crop&q=80&w=800"],
    description: "Classic hand-turned clay cups for the perfect morning brew. Scent of rain in every sip.",
    vendorId: "v1",
    highlights: ["Zero-Waste", "Eco-Fiber"],
    stock: 30
  },
  {
    id: "p6",
    name: "Engraved Clay Wall Disc",
    category: "Decor",
    price: 2800,
    images: ["https://images.unsplash.com/photo-1578749556568-bc23f97c9225?auto=format&fit=crop&q=80&w=800"],
    description: "Hand-etched wall medallion featuring a sunburst motif from Kutch tradition.",
    vendorId: "v1",
    highlights: ["Wall Medallion", "Artisanal Decor"],
    stock: 8
  },

  // TEXTILES
  {
    id: "t1",
    name: "Bamboo Dining Mat Set",
    category: "Textiles",
    price: 1800,
    images: ["https://images.unsplash.com/photo-1623912196095-21d4d380e668?auto=format&fit=crop&q=80&w=800"],
    description: "Finely woven waterproof bamboo mats. Naturally stain-resistant and antibacterial.",
    vendorId: "v2",
    highlights: ["Waterproof", "Vegan Fiber"],
    stock: 20
  },
  {
    id: "t2",
    name: "Bamboo Fiber Coasters",
    category: "Textiles",
    price: 650,
    images: ["https://images.unsplash.com/photo-1524333865981-d1385cc99dc3?auto=format&fit=crop&q=80&w=800"],
    description: "Eco-friendly coasters made from sustainable bamboo bamboo. Lightweight and biodegradable.",
    vendorId: "v2",
    highlights: ["Sustainable", "Earth-Toned"],
    stock: 45
  },
  {
    id: "t3",
    name: "Reclaimed Jute Tote",
    category: "Textiles",
    price: 950,
    images: ["https://images.unsplash.com/photo-1544816153-15fc6a592765?auto=format&fit=crop&q=80&w=800"],
    description: "Heavyduty shopping bag made from repurposed golden jute. Built for international travel.",
    vendorId: "v2",
    highlights: ["Upcycled", "Strong-Weave"],
    stock: 50
  },
  {
    id: "t4",
    name: "Minimalist Khadi Shirt",
    category: "Textiles",
    price: 2400,
    images: ["https://images.unsplash.com/photo-1611312449412-6cefac56398e?auto=format&fit=crop&q=80&w=800"],
    description: "Hand-spun and hand-woven cotton shirt. Breathability that stays cool in summer.",
    vendorId: "v2",
    highlights: ["Pure Khadi", "Breathable"],
    stock: 12
  },
  {
    id: "t5",
    name: "Maheshwari Saree",
    category: "Textiles",
    price: 6500,
    images: ["https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800"],
    description: "Silk-cotton blend saree with signature Maheshwar fort-inspired borders. Daily luxury.",
    vendorId: "v2",
    highlights: ["Silk-Cotton Blend", "Heritage Weave"],
    stock: 6
  },
  {
    id: "t6",
    name: "Jute Bound PocketBag",
    category: "Textiles",
    price: 850,
    images: ["https://images.unsplash.com/photo-1531512073830-bb8aae7ad932?auto=format&fit=crop&q=80&w=800"],
    description: "Small crossbody pouch for essentials. Perfect for minimalist travel.",
    vendorId: "v2",
    highlights: ["Compact", "Jute Fiber"],
    stock: 30
  },

  // JEWELRY
  {
    id: "j1",
    name: "Sheesham Hoop Earrings",
    category: "Jewelry",
    price: 750,
    images: ["https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&q=80&w=800"],
    description: "Lightweight earrings carved from reclaimed Sheesham wood. Organic wood grain pattern.",
    vendorId: "v3",
    highlights: ["Weightless", "Organic Art"],
    stock: 40
  },
  {
    id: "j2",
    name: "Sandalwood Minimal Necklace",
    category: "Jewelry",
    price: 1800,
    images: ["https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800"],
    description: "Calming sandalwood beads on a delicate brass chain. Minimalist spiritual charm.",
    vendorId: "v3",
    highlights: ["Aromatic", "Meditation Wood"],
    stock: 15
  },
  {
    id: "j3",
    name: "Brass Inlay Wood Bangle",
    category: "Jewelry",
    price: 1200,
    images: ["https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&q=80&w=800"],
    description: "Ebony wood bangle featuring intricate hand-pressed brass floral inlays.",
    vendorId: "v3",
    highlights: ["Daily Wear", "Wood & Metal"],
    stock: 20
  },
  {
    id: "j4",
    name: "Temple Motif Bracelet",
    category: "Jewelry",
    price: 3200,
    images: ["https://images.unsplash.com/photo-1520624021204-7a39d4247f02?auto=format&fit=crop&q=80&w=800"],
    description: "Thin silver bracelet with a South Indian motif. Lightweight and regular use friendly.",
    vendorId: "v3",
    highlights: ["92.5 Silver", "Lightweight"],
    stock: 8
  },
  {
    id: "j5",
    name: "Meenakari Minimal Studs",
    category: "Jewelry",
    price: 1400,
    images: ["https://images.unsplash.com/photo-1598561002291-9e274309ba8b?auto=format&fit=crop&q=80&w=800"],
    description: "Traditional Rajasthani enamel work on small silver studs. Subtle pop of color.",
    vendorId: "v3",
    highlights: ["Hand-Enameled", "Rajasthani Art"],
    stock: 14
  },
  {
    id: "j6",
    name: "Terracotta Wrapped Choker",
    category: "Jewelry",
    price: 1100,
    images: ["https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=800"],
    description: "Clay beads wrapped in cotton thread. Hand handcrafted for the earthy soul.",
    vendorId: "v3",
    highlights: ["Clay-Fiber", "Ecological"],
    stock: 10
  },

  // BEAUTY
  {
    id: "b1",
    name: "Beetroot Glow Mask",
    category: "Beauty",
    price: 850,
    images: ["https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800"],
    description: "Sun-dried beetroot and hibiscus powder for a natural radiance. Chemical-free facial powder.",
    vendorId: "v4",
    highlights: ["Botanical", "Hibiscus Scent"],
    stock: 30
  },
  {
    id: "b2",
    name: "Neem & Multani Mitti",
    category: "Beauty",
    price: 450,
    images: ["https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=800"],
    description: "Traditional cooling face mask using Fuller's Earth and purifying Neem. Time-tested recipe.",
    vendorId: "v4",
    highlights: ["Deep Cleansing", "Raw Minerals"],
    stock: 60
  },
  {
    id: "b3",
    name: "Sandalwood Facial Dust",
    category: "Beauty",
    price: 1200,
    images: ["https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?auto=format&fit=crop&q=80&w=800"],
    description: "Pure-grade sandalwood powder. Cooling and soothing for post-sun exposure.",
    vendorId: "v4",
    highlights: ["Aromatic", "Authentic Scent"],
    stock: 12
  },
  {
    id: "b4",
    name: "Ritha Shampoo Powder",
    category: "Beauty",
    price: 550,
    images: ["https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?auto=format&fit=crop&q=80&w=800"],
    description: "Soapnut and Shikakai powder for high-natural foaming. Zero chemical shampoo alternative.",
    vendorId: "v4",
    highlights: ["Zero-Chemical", "Traditional Hair Care"],
    stock: 50
  },
  {
    id: "b5",
    name: "Beetroot Lip & Cheek Tint",
    category: "Beauty",
    price: 650,
    images: ["https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&q=80&w=800"],
    description: "Whipped lip tint with forest honey and sheer beetroot minerals. Edible quality.",
    vendorId: "v4",
    highlights: ["Hydrating", "Plant-Based Tint"],
    stock: 25
  },
  {
    id: "b6",
    name: "Hibiscus Natural Blush",
    category: "Beauty",
    price: 750,
    images: ["https://images.unsplash.com/photo-1601612628452-9e99ced43524?auto=format&fit=crop&q=80&w=800"],
    description: "Fine petal powder blush for a flushed, natural look. No talc or synthetic dyes.",
    vendorId: "v4",
    highlights: ["Luminous", "Talc-Free"],
    stock: 22
  },

  // DECOR
  {
    id: "d1",
    name: "Madhubani Wall Painting",
    category: "Decor",
    price: 4800,
    images: ["https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=800"],
    description: "Original folk painting on handmade paper. Depicts the Tree of Life in natural dyes.",
    vendorId: "v2",
    highlights: ["One-of-a-Kind", "Natural Pigment Art"],
    stock: 4
  },
  {
    id: "d2",
    name: "Macrame Wall Hanging",
    category: "Decor",
    price: 2200,
    images: ["https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800"],
    description: "Triple-twisted cotton macrame art on a locally found driftwood branch.",
    vendorId: "v2",
    highlights: ["Driftwood", "Hand-Knot Cotton"],
    stock: 8
  },
  {
    id: "d3",
    name: "Hand-Knotted Jute Mat",
    category: "Decor",
    price: 3500,
    images: ["https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&q=80&w=800"],
    description: "Circular rug hand-knotted from high-quality jute. Grounding and neutral texture.",
    vendorId: "v2",
    highlights: ["Heavy-Duty", "Grounding"],
    stock: 6
  },
  {
    id: "d4",
    name: "Seagrass Woven Ottoman",
    category: "Decor",
    price: 4200,
    images: ["https://images.unsplash.com/photo-1594913785162-e678ac0570da?auto=format&fit=crop&q=80&w=800"],
    description: "Sustainable river grass furniture piece. Hand-pressed for sturdiness and longevity.",
    vendorId: "v1",
    highlights: ["Woven Grass", "Eco-Furniture"],
    stock: 5
  },
  {
    id: "d5",
    name: "Carved Teak Storage Trunk",
    category: "Decor",
    price: 8500,
    images: ["https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800"],
    description: "Miniature heirloom storage chest with traditional Indian brass latch. Hand-carved teak.",
    vendorId: "v3",
    highlights: ["Antique Style", "Heirloom Grade"],
    stock: 3
  },
  {
    id: "d6",
    name: "Brass Inlay Decor Disc",
    category: "Decor",
    price: 3800,
    images: ["https://images.unsplash.com/photo-1512111442188-662492167d4f?auto=format&fit=crop&q=80&w=800"],
    description: "Solid brass medallion designed for the wall. Reflects the spirit of Indian heritage.",
    vendorId: "v3",
    highlights: ["Wall Art", "Brass Metalwork"],
    stock: 10
  }
];


export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'The Scent of Earth: Why Clay Matters',
    excerpt: 'Exploring the connection between Indian heritage and the soil that sustains it.',
    content: 'Clay is not just material; it is memory. For centuries, Indian households have relied on terracotta for everything from cooking to storage...',
    author: 'Aditi Sharma',
    date: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1565193998772-263d8ff92314?auto=format&fit=crop&q=80&w=800',
    tags: ['Tradition', 'Pottery', 'Heritage']
  }
];
