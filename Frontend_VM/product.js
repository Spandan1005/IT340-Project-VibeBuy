const products = [
    // --- CHILL EXPLORER (20 Items) ---
    {
        id: 101,
        name: "Portable Hammock",
        price: 35.00,
        vibe: "Chill Explorer",
        image: "https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?w=500&q=80",
        description: "Lightweight and durable for instant relaxation anywhere."
    },
    {
        id: 102,
        name: "Vintage Film Camera",
        price: 120.00,
        vibe: "Chill Explorer",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80",
        description: "Capture memories with authentic grain and soul."
    },
    {
        id: 103,
        name: "Canvas Rucksack",
        price: 65.00,
        vibe: "Chill Explorer",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
        description: "Rugged storage for your daily adventures."
    },
    {
        id: 104,
        name: "Insulated Travel Mug",
        price: 25.00,
        vibe: "Chill Explorer",
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&q=80",
        description: "Keeps your brew hot while you chase the sunrise."
    },
    {
        id: 105,
        name: "Field Notebook Set",
        price: 15.00,
        vibe: "Chill Explorer",
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&q=80",
        description: "Pocket-sized journals for your wandering thoughts."
    },
    {
        id: 106,
        name: "Merino Wool Beanie",
        price: 28.00,
        vibe: "Chill Explorer",
        image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=500&q=80",
        description: "Essential warmth for breezy peaks and city streets."
    },
    {
        id: 107,
        name: "Portable Bluetooth Speaker",
        price: 55.00,
        vibe: "Chill Explorer",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80",
        description: "Bring your soundtrack to the great outdoors."
    },
    {
        id: 108,
        name: "Polarized Sunglasses",
        price: 45.00,
        vibe: "Chill Explorer",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80",
        description: "Cut the glare and look cool doing it."
    },
    {
        id: 109,
        name: "Compact Binoculars",
        price: 85.00,
        vibe: "Chill Explorer",
        image: "https://images.unsplash.com/photo-1534234828563-02511c750d44?w=500&q=80",
        description: "See the world a little closer."
    },
    {
        id: 110,
        name: "Travel Yoga Mat",
        price: 40.00,
        vibe: "Chill Explorer",
        image: "https://images.unsplash.com/photo-1599447421405-0c325d26d77e?w=500&q=80",
        description: "Find your center, wherever you are."
    },
    {
        id: 111,
        name: "Enamel Camping Mug",
        price: 12.00,
        vibe: "Chill Explorer",
        image: "https://images.unsplash.com/photo-1517260739737-aa43c75d2e2e?w=500&q=80",
        description: "Classic durability for your campfire coffee."
    },
    {
        id: 112,
        name: "Waterproof Rain Jacket",
        price: 110.00,
        vibe: "Chill Explorer",
        image: "https://images.unsplash.com/photo-1545593169-529712e92b83?w=500&q=80",
        description: "Stay dry without sacrificing style."
    },
    {
        id: 113,
        name: "Hiking Boots",
        price: 140.00,
        vibe: "Chill Explorer",
        image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=500&q=80",
        description: "Tough treads for tough trails."
    },
    {
        id: 114,
        name: "Solar Power Bank",
        price: 30.00,
        vibe: "Chill Explorer",
        image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=500&q=80",
        description: "Charge your gear with the power of the sun."
    },
    {
        id: 115,
        name: "Adventure Compass",
        price: 18.00,
        vibe: "Chill Explorer",
        image: "https://images.unsplash.com/photo-1505159940484-eb2b9f2588e2?w=500&q=80",
        description: "Never lose your way (unless you want to)."
    },
    {
        id: 116,
        name: "Collapsible Water Bottle",
        price: 22.00,
        vibe: "Chill Explorer",
        image: "https://images.unsplash.com/photo-1602143407151-011141950038?w=500&q=80",
        description: "Hydration that packs down small."
    },
    {
        id: 117,
        name: "Picnic Blanket",
        price: 35.00,
        vibe: "Chill Explorer",
        image: "https://images.unsplash.com/photo-1567708303452-9578296631d9?w=500&q=80",
        description: "Water-resistant base for spontaneous lunches."
    },
    {
        id: 118,
        name: "Swiss Army Knife",
        price: 45.00,
        vibe: "Chill Explorer",
        image: "https://images.unsplash.com/photo-1566933294831-b38ad6d16a26?w=500&q=80",
        description: "The ultimate multitool for every situation."
    },
    {
        id: 119,
        name: "Trail Mix Assortment",
        price: 15.00,
        vibe: "Chill Explorer",
        image: "https://images.unsplash.com/photo-1519087310314-165846618575?w=500&q=80",
        description: "Fuel for the journey ahead."
    },
    {
        id: 120,
        name: "National Parks Guide",
        price: 25.00,
        vibe: "Chill Explorer",
        image: "https://images.unsplash.com/photo-1544639538-953a6639c089?w=500&q=80",
        description: "Inspiration for your next great escape."
    },

    // --- CYBER PUNK (20 Items) ---
    {
        id: 201,
        name: "LED Visor Glasses",
        price: 45.00,
        vibe: "Cyber Punk",
        image: "https://images.unsplash.com/photo-1625314876503-6e5829237771?w=500&q=80",
        description: "Futuristic eyewear with customizable light patterns."
    },
    {
        id: 202,
        name: "Neon Strip Lights",
        price: 25.00,
        vibe: "Cyber Punk",
        image: "https://images.unsplash.com/photo-1563089145-599997674d42?w=500&q=80",
        description: "Transform your room into a digital cityscape."
    },
    {
        id: 203,
        name: "Mechanical Keyboard",
        price: 120.00,
        vibe: "Cyber Punk",
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80",
        description: "Clicky switches and RGB backlight for maximum aesthetic."
    },
    {
        id: 204,
        name: "Techwear Hoodie",
        price: 85.00,
        vibe: "Cyber Punk",
        image: "https://images.unsplash.com/photo-1559582798-678dfc71ccd8?w=500&q=80",
        description: "Water-resistant, multi-pocket urban armor."
    },
    {
        id: 205,
        name: "Cyberdeck Kit",
        price: 200.00,
        vibe: "Cyber Punk",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&q=80",
        description: "Build your own portable hacking terminal."
    },
    {
        id: 206,
        name: "Holographic Backpack",
        price: 55.00,
        vibe: "Cyber Punk",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
        description: "Iridescent finish that shifts color with the light."
    },
    {
        id: 207,
        name: "Smart LED Mask",
        price: 60.00,
        vibe: "Cyber Punk",
        image: "https://images.unsplash.com/photo-1586943101559-4cdcf86a6f87?w=500&q=80",
        description: "Display text and animations on your face."
    },
    {
        id: 208,
        name: "Gaming Mouse",
        price: 70.00,
        vibe: "Cyber Punk",
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&q=80",
        description: "High-DPI precision with programmable buttons."
    },
    {
        id: 209,
        name: "Transparent Gameboy",
        price: 150.00,
        vibe: "Cyber Punk",
        image: "https://images.unsplash.com/photo-1592839719941-8e2651039d01?w=500&q=80",
        description: "Retro tech modded with a modern backlit screen."
    },
    {
        id: 210,
        name: "Neon Sign - 'Open'",
        price: 90.00,
        vibe: "Cyber Punk",
        image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=500&q=80",
        description: "Classic neon glow for your late-night coding sessions."
    },
    {
        id: 211,
        name: "Platform Boots",
        price: 110.00,
        vibe: "Cyber Punk",
        image: "https://images.unsplash.com/photo-1605763240004-7e93b172d754?w=500&q=80",
        description: "Stomp through the metaverse in style."
    },
    {
        id: 212,
        name: "Digital Watch",
        price: 40.00,
        vibe: "Cyber Punk",
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&q=80",
        description: "Retro-futuristic timekeeping on your wrist."
    },
    {
        id: 213,
        name: "Cargo Joggers",
        price: 65.00,
        vibe: "Cyber Punk",
        image: "https://images.unsplash.com/photo-1552160793-eb296345d564?w=500&q=80",
        description: "Straps, buckles, and pockets galore."
    },
    {
        id: 214,
        name: "RGB Headset Stand",
        price: 35.00,
        vibe: "Cyber Punk",
        image: "https://images.unsplash.com/photo-1612157777902-5382bc6e864b?w=500&q=80",
        description: "A throne for your audio gear."
    },
    {
        id: 215,
        name: "Nanoleaf Panels",
        price: 180.00,
        vibe: "Cyber Punk",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&q=80",
        description: "Modular light panels to design your own wall art."
    },
    {
        id: 216,
        name: "Cyberpunk 2077 Artbook",
        price: 45.00,
        vibe: "Cyber Punk",
        image: "https://images.unsplash.com/photo-1605901309584-818e25960b8f?w=500&q=80",
        description: "Visual inspiration from Night City."
    },
    {
        id: 217,
        name: "Metallic Nail Polish",
        price: 12.00,
        vibe: "Cyber Punk",
        image: "https://images.unsplash.com/photo-1632516643720-e7f5d7d6ecc9?w=500&q=80",
        description: "Chrome finish for your digital digits."
    },
    {
        id: 218,
        name: "Wireless Earbuds",
        price: 90.00,
        vibe: "Cyber Punk",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80",
        description: "Low-latency audio with a transparent case."
    },
    {
        id: 219,
        name: "Fingerless Gloves",
        price: 15.00,
        vibe: "Cyber Punk",
        image: "https://images.unsplash.com/photo-1618389650958-379658742842?w=500&q=80",
        description: "Tactical grip for keyboard warriors."
    },
    {
        id: 220,
        name: "USB Hub",
        price: 25.00,
        vibe: "Cyber Punk",
        image: "https://images.unsplash.com/photo-1616440347437-b1c73416efc2?w=500&q=80",
        description: "Expand your connectivity with industrial design."
    },

    // --- COZY MINIMALIST (20 Items) ---
    {
        id: 301,
        name: "Chunky Knit Blanket",
        price: 89.00,
        vibe: "Cozy Minimalist",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?w=500&q=80",
        description: "Hand-woven comfort in neutral tones."
    },
    {
        id: 302,
        name: "Ceramic Diffuser",
        price: 45.00,
        vibe: "Cozy Minimalist",
        image: "https://images.unsplash.com/photo-1608508644127-536427d84795?w=500&q=80",
        description: "Fill your space with calming essential oils."
    },
    {
        id: 303,
        name: "Linen Bed Sheets",
        price: 120.00,
        vibe: "Cozy Minimalist",
        image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?w=500&q=80",
        description: "Breathable, natural fabric for the perfect sleep."
    },
    {
        id: 304,
        name: "Soy Wax Candle",
        price: 22.00,
        vibe: "Cozy Minimalist",
        image: "https://images.unsplash.com/photo-1602825389660-3f5749323868?w=500&q=80",
        description: "Clean burning with a subtle vanilla scent."
    },
    {
        id: 305,
        name: "Ceramic Mug Set",
        price: 35.00,
        vibe: "Cozy Minimalist",
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&q=80",
        description: "Handcrafted stoneware for your morning ritual."
    },
    {
        id: 306,
        name: "Bamboo Bath Tray",
        price: 40.00,
        vibe: "Cozy Minimalist",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&q=80",
        description: "Elevate your bath time with a book and tea."
    },
    {
        id: 307,
        name: "Faux Fur Rug",
        price: 55.00,
        vibe: "Cozy Minimalist",
        image: "https://images.unsplash.com/photo-1579656592043-a20e25a4aa85?w=500&q=80",
        description: "Soft texture to warm up your floor."
    },
    {
        id: 308,
        name: "Potted Succulent",
        price: 18.00,
        vibe: "Cozy Minimalist",
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&q=80",
        description: "Low-maintenance greenery for a fresh touch."
    },
    {
        id: 309,
        name: "Cashmere Scarf",
        price: 95.00,
        vibe: "Cozy Minimalist",
        image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=500&q=80",
        description: "Luxuriously soft warmth for chilly days."
    },
    {
        id: 310,
        name: "Wooden Alarm Clock",
        price: 30.00,
        vibe: "Cozy Minimalist",
        image: "https://images.unsplash.com/photo-1507646227500-4d389b0012be?w=500&q=80",
        description: "Digital display hidden in a natural wood block."
    },
    {
        id: 311,
        name: "Oversized Cardigan",
        price: 60.00,
        vibe: "Cozy Minimalist",
        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&q=80",
        description: "Wrap yourself in a hug."
    },
    {
        id: 312,
        name: "Floating Shelves",
        price: 45.00,
        vibe: "Cozy Minimalist",
        image: "https://images.unsplash.com/photo-1597072689227-8882273e8f6e?w=500&q=80",
        description: "Clean lines to display your treasures."
    },
    {
        id: 313,
        name: "Weighted Blanket",
        price: 110.00,
        vibe: "Cozy Minimalist",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?w=500&q=80",
        description: "Deep pressure stimulation for anxiety relief."
    },
    {
        id: 314,
        name: "Essential Oil Set",
        price: 25.00,
        vibe: "Cozy Minimalist",
        image: "https://images.unsplash.com/photo-1608508644127-536427d84795?w=500&q=80",
        description: "Lavender, Eucalyptus, and Peppermint blends."
    },
    {
        id: 315,
        name: "Slipper Socks",
        price: 15.00,
        vibe: "Cozy Minimalist",
        image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=500&q=80",
        description: "Fleece-lined for happy feet."
    },
    {
        id: 316,
        name: "Tea Kettle",
        price: 50.00,
        vibe: "Cozy Minimalist",
        image: "https://images.unsplash.com/photo-1520031607880-285275d958fd?w=500&q=80",
        description: "Matte white finish with a wood handle."
    },
    {
        id: 317,
        name: "Journal with Pen",
        price: 20.00,
        vibe: "Cozy Minimalist",
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&q=80",
        description: "Capture your gratitude and daily thoughts."
    },
    {
        id: 318,
        name: "Floor Lamp",
        price: 80.00,
        vibe: "Cozy Minimalist",
        image: "https://images.unsplash.com/photo-1507473888900-52e1adad5420?w=500&q=80",
        description: "Soft, diffused lighting for reading nooks."
    },
    {
        id: 319,
        name: "Waffle Robe",
        price: 55.00,
        vibe: "Cozy Minimalist",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&q=80",
        description: "Spa-like luxury at home."
    },
    {
        id: 320,
        name: "Meditation Cushion",
        price: 40.00,
        vibe: "Cozy Minimalist",
        image: "https://images.unsplash.com/photo-1599447421405-0c325d26d77e?w=500&q=80",
        description: "Supportive seating for mindfulness practice."
    },

    // --- RETRO SOUL (20 Items) ---
    {
        id: 401,
        name: "Vinyl Record Player",
        price: 150.00,
        vibe: "Retro Soul",
        image: "https://images.unsplash.com/photo-1542208998-f6dbbb27a72f?w=500&q=80",
        description: "Warm analog sound in a vintage suitcase design."
    },
    {
        id: 402,
        name: "Round Sunglasses",
        price: 25.00,
        vibe: "Retro Soul",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80",
        description: "John Lennon style specs for a groovy look."
    },
    {
        id: 403,
        name: "Denim Jacket",
        price: 75.00,
        vibe: "Retro Soul",
        image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=500&q=80",
        description: "Classic wash, timeless cool."
    },
    {
        id: 404,
        name: "Polaroid Camera",
        price: 99.00,
        vibe: "Retro Soul",
        image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80",
        description: "Instant prints with that nostalgic border."
    },
    {
        id: 405,
        name: "High-Waisted Jeans",
        price: 60.00,
        vibe: "Retro Soul",
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&q=80",
        description: "Mom jeans cut for the modern era."
    },
    {
        id: 406,
        name: "Band T-Shirt",
        price: 30.00,
        vibe: "Retro Soul",
        image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&q=80",
        description: "Rep your favorite classic rock legends."
    },
    {
        id: 407,
        name: "Lava Lamp",
        price: 35.00,
        vibe: "Retro Soul",
        image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=500&q=80",
        description: "Psychedelic mood lighting."
    },
    {
        id: 408,
        name: "Cassette Tape Set",
        price: 15.00,
        vibe: "Retro Soul",
        image: "https://images.unsplash.com/photo-1594433555432-680795433e6e?w=500&q=80",
        description: "Blank tapes for making your own mixtapes."
    },
    {
        id: 409,
        name: "Roller Skates",
        price: 120.00,
        vibe: "Retro Soul",
        image: "https://images.unsplash.com/photo-1552318415-cc98d3b5d2d6?w=500&q=80",
        description: "Quad skates for the disco rink."
    },
    {
        id: 410,
        name: "Typewriter",
        price: 200.00,
        vibe: "Retro Soul",
        image: "https://images.unsplash.com/photo-1520529986992-d4ce365fcfc9?w=500&q=80",
        description: "Click-clack your way to a novel."
    },
    {
        id: 411,
        name: "Corduroy Pants",
        price: 55.00,
        vibe: "Retro Soul",
        image: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=500&q=80",
        description: "Texture and warmth from the 70s."
    },
    {
        id: 412,
        name: "Rotary Phone",
        price: 80.00,
        vibe: "Retro Soul",
        image: "https://images.unsplash.com/photo-1520923642038-b4259acecbd7?w=500&q=80",
        description: "Functional vintage decor piece."
    },
    {
        id: 413,
        name: "Silk Scarf",
        price: 25.00,
        vibe: "Retro Soul",
        image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=500&q=80",
        description: "Tie it in your hair or around your neck."
    },
    {
        id: 414,
        name: "Leather Satchel",
        price: 110.00,
        vibe: "Retro Soul",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
        description: "Distressed leather for that lived-in look."
    },
    {
        id: 415,
        name: "Boombox",
        price: 90.00,
        vibe: "Retro Soul",
        image: "https://images.unsplash.com/photo-1585909696568-151c093d5f54?w=500&q=80",
        description: "Blast your tunes street-style."
    },
    {
        id: 416,
        name: "Platform Sandals",
        price: 50.00,
        vibe: "Retro Soul",
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&q=80",
        description: "Summer vibes with extra height."
    },
    {
        id: 417,
        name: "Patchwork Quilt",
        price: 130.00,
        vibe: "Retro Soul",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?w=500&q=80",
        description: "Bohemian bedding with character."
    },
    {
        id: 418,
        name: "Macrame Plant Hanger",
        price: 22.00,
        vibe: "Retro Soul",
        image: "https://images.unsplash.com/photo-1597072689227-8882273e8f6e?w=500&q=80",
        description: "70s craft revival for your greenery."
    },
    {
        id: 419,
        name: "Fanny Pack",
        price: 20.00,
        vibe: "Retro Soul",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
        description: "Hands-free convenience, retro style."
    },
    {
        id: 420,
        name: "Neon Windbreaker",
        price: 65.00,
        vibe: "Retro Soul",
        image: "https://images.unsplash.com/photo-1545593169-529712e92b83?w=500&q=80",
        description: "90s color blocking at its finest."
    }
];
