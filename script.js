/**
 * PLANET MAXI ($MAXI) — Welcome to the Maxiverse
 *
 * Unified Pump Island Architecture + Three.js 3D WebGL Exotic Planet + All 36 Transparent Citizens:
 * 1. Intro Gate with the live 3D WebGL Planet Maxi centered inside the holographic rings
 *    (#logo-stage) + 3D Technicolor Warp Starfield (#intro-canvas).
 * 2. Clicking "ENTER THE MAXIVERSE" warps the gate away and continuously dives the
 *    3D camera from deep space orbit (z=1.5) straight onto the Golden Genesis Citadel
 *    (z=18.4), where Sovereign King OG MAXI (#001) stands at 2.3x scale.
 * 3. All 35 background-removed Maxi variants from "Photos/Removed backgrounds /" are
 *    placed across craters & continents on the 3D globe around OG Maxi!
 */

const BG_REMOVED_DIR = 'Photos/Removed backgrounds /';

// Complete 36-Citizen Roster (OG Maxi #001 + 35 Unique Background-Removed Citizens)
const MAXI_CITIZENS = [
  {
    id: 'citizen-001',
    rank: '#001',
    name: 'OG MAXI',
    title: 'MWO SUPREME SOVEREIGN · GENESIS #001',
    src: 'maxi Background Removed.png',
    isOg: true,
    isMythic: true,
    lat: 0.18,
    lon: 0.0,
    color: '#ffbe2e',
    lore: '<strong>Supreme Sovereign of the Maxi World Order.</strong> Standing atop the Genesis Citadel at 240 lbs lean while all 99 MWO citizens hold the surrounding continents—drag the 3D planet, scroll to zoom, or click any citizen below to inspect them.'
  },
  // 5 Inner-Ring 1-of-1 Mythic Citizens (Surrounding OG Maxi's Citadel)
  {
    id: 'citizen-002',
    rank: '#002',
    name: 'HEISENBERG MAXI',
    title: '1-OF-1 MWO MASTER · CRYSTAL MESA',
    src: `${BG_REMOVED_DIR}photo_2026-11-18_22-43-12 Background Removed.png`,
    isMythic: true,
    lat: 0.36,
    lon: -0.42,
    color: '#00f0ff',
    lore: '<strong>99.1% Pure Blue Sky Hypertrophy.</strong> Guarding the northwestern crystal ridges of Planet Maxi in a pressurized glass helmet and pork pie hat.'
  },
  {
    id: 'citizen-003',
    rank: '#003',
    name: 'SPRITE LEAN MAXI',
    title: '1-OF-1 MWO MASTER · VIOLET LAGOON',
    src: `${BG_REMOVED_DIR}photo_2026-11-18_22-43-16 Background Removed.png`,
    isMythic: true,
    lat: 0.34,
    lon: 0.44,
    color: '#c084fc',
    lore: '<strong>Carbonated Promethazine Titan.</strong> Distills purple syrup into pure anabolic mass on the eastern shore of OG Maxi’s citadel.'
  },
  {
    id: 'citizen-004',
    rank: '#004',
    name: 'TUNG SAHUR MAXI',
    title: '1-OF-1 MWO MASTER · TIMBER CRATER',
    src: `${BG_REMOVED_DIR}photo_2026-11-18_22-43-33 Background Removed.png`,
    isMythic: true,
    lat: -0.14,
    lon: -0.48,
    color: '#f59e0b',
    lore: '<strong>Carved Hardwood Enforcer.</strong> Zipped into a sentient oak log suit with a solid ash bat, patrolling the western timber basin.'
  },
  {
    id: 'citizen-005',
    rank: '#005',
    name: 'HOKAGE MAXI',
    title: '1-OF-1 MWO MASTER · AKATSUKI RIDGE',
    src: `${BG_REMOVED_DIR}photo_2026-11-18_22-43-38 Background Removed.png`,
    isMythic: true,
    lat: -0.16,
    lon: 0.46,
    color: '#ff2a85',
    lore: '<strong>Rogue Shinobi of the Tear Village.</strong> Wears the red cloud storm cloak and deadlifts giant steel shurikens in high gravity.'
  },
  {
    id: 'citizen-006',
    rank: '#006',
    name: 'STARBREAKER MAXI',
    title: '1-OF-1 MWO MASTER · ROYAL SUMMIT',
    src: `${BG_REMOVED_DIR}photo_2026-11-18_22-43-39 (2) Background Removed.png`,
    isMythic: true,
    lat: 0.56,
    lon: 0.0,
    color: '#818cf8',
    lore: '<strong>Northern Crown Champion.</strong> Armed with a 300-lb stone skull maul, jade hoop earring, and royal purple cape directly north of OG Maxi.'
  },

  // 30 Planetary Citizens Distributed Across All Continents & Craters
  {
    id: 'citizen-007',
    rank: '#007',
    name: 'KRATOS MAXI',
    title: 'CITIZEN #007 · OLYMPUS CALDERA',
    src: `${BG_REMOVED_DIR}photo_2026-11-18_22-43-19 Background Removed.png`,
    color: '#ef4444',
    lore: '<strong>Ghost of Sparta.</strong> Covered in ash and crimson war paint, crying softly between sets of chain-blade curls.'
  },
  {
    id: 'citizen-008',
    rank: '#008',
    name: 'SPARTAN 117 MAXI',
    title: 'CITIZEN #008 · MJOLNIR GARRISON',
    src: `${BG_REMOVED_DIR}photo_2026-11-18_22-42-33 (2) Background Removed.png`,
    color: '#3ef095',
    lore: '<strong>Master Chief of the Maxi World Order.</strong> Olive-drab Mjolnir armor barely containing his 240-lb frame.'
  },
  {
    id: 'citizen-009',
    rank: '#009',
    name: 'PEPE MAXI',
    title: 'CITIZEN #009 · EMERALD BOG',
    src: `${BG_REMOVED_DIR}photo_2026-11-18_22-42-37 Background Removed.png`,
    color: '#3ef095',
    lore: '<strong>Feels Good Man (240 LB Edition).</strong> Rare emerald amphibian suit soaking in the tear marshes.'
  },
  {
    id: 'citizen-010',
    rank: '#010',
    name: 'DOGE CHAIN MAXI',
    title: 'CITIZEN #010 · BULLION VAULT',
    src: `${BG_REMOVED_DIR}photo_2026-11-18_22-42-36 Background Removed.png`,
    color: '#ffbe2e',
    lore: '<strong>Shiba Bullion Whale.</strong> Rocking a solid 24K gold medallion chain across his striated pecs.'
  },
  {
    id: 'citizen-011',
    rank: '#011',
    name: 'SONIC MAXI',
    title: 'CITIZEN #011 · COBALT LOOP',
    src: `${BG_REMOVED_DIR}photo_2026-11-18_22-42-26 Background Removed.png`,
    color: '#38bdf8',
    lore: '<strong>Fastest Bulk Alive.</strong> Runs Mach 3 fasted cardio around Planet Maxi’s equator.'
  },
  {
    id: 'citizen-012',
    rank: '#012',
    name: 'TUBBY PO MAXI',
    title: 'CITIZEN #012 · ANTENNA DOME',
    src: `${BG_REMOVED_DIR}photo_2026-11-18_22-42-30 Background Removed.png`,
    color: '#ff2a85',
    lore: '<strong>Crimson Signal Relay.</strong> Broadcasts high-frequency purrs and sniffles to deep space.'
  },
  {
    id: 'citizen-013',
    rank: '#013',
    name: 'BANANA MAXI',
    title: 'CITIZEN #013 · POTASSIUM GROVE',
    src: `${BG_REMOVED_DIR}photo_2026-11-18_22-42-31 Background Removed.png`,
    color: '#ffe066',
    lore: '<strong>Zero Muscle Cramps.</strong> 100% pure Cavendish potassium armor for post-workout recovery.'
  },
  {
    id: 'citizen-014',
    rank: '#014',
    name: 'INMATE 171 MAXI',
    title: 'CITIZEN #014 · IRON YARD',
    src: `${BG_REMOVED_DIR}photo_2026-11-18_22-42-33 Background Removed.png`,
    color: '#e2e8f0',
    lore: '<strong>Locked Up for Excessive Hypertrophy.</strong> Doing 1,000 prison-yard pushups a day.'
  },
  {
    id: 'citizen-015',
    rank: '#015',
    name: 'SQUAREBOB MAXI',
    title: 'CITIZEN #015 · BIKINI ATOLL',
    src: `${BG_REMOVED_DIR}photo_2026-11-18_22-42-34 Background Removed.png`,
    color: '#ffe066',
    lore: '<strong> porous & Vascular.</strong> Absorbs every drop of the Tear Ocean and benches the anchor.'
  },
  {
    id: 'citizen-016',
    rank: '#016',
    name: 'YETI BOO MAXI',
    title: 'CITIZEN #016 · FROST PEAK',
    src: `${BG_REMOVED_DIR}photo_2026-11-18_22-42-35 (2) Background Removed.png`,
    color: '#f8fafc',
    lore: '<strong>Abominable Snow Baby.</strong> Wrapped in an ultra-plush white yeti hoodie at the polar cap.'
  },
  {
    id: 'citizen-017',
    rank: '#017',
    name: 'WAZOWSKI MAXI',
    title: 'CITIZEN #017 · MONSTER SECTOR',
    src: `${BG_REMOVED_DIR}photo_2026-11-18_22-42-35 Background Removed.png`,
    color: '#3ef095',
    lore: '<strong>Three Eyes, Eight Abs.</strong> Watching the charts 24/7 without blinking.'
  },
  {
    id: 'citizen-018',
    rank: '#018',
    name: 'CREEPER MAXI',
    title: 'CITIZEN #018 · TNT QUARRY',
    src: `${BG_REMOVED_DIR}photo_2026-11-18_22-42-36 (2) Background Removed.png`,
    color: '#3ef095',
    lore: '<strong>Explosive Gains.</strong> 16-bit voxel muscle blocks ready to detonate a green candle.'
  },
  {
    id: 'citizen-019',
    rank: '#019',
    name: 'FRIEZA MAXI',
    title: 'CITIZEN #019 · EMPEROR ORBIT',
    src: `${BG_REMOVED_DIR}photo_2026-11-18_22-42-37 (2) Background Removed.png`,
    color: '#c084fc',
    lore: '<strong>Final Form Overlord.</strong> Power level over 9,000,000; emotional stability at 0.'
  },
  {
    id: 'citizen-020',
    rank: '#020',
    name: 'HEAVY MAXI',
    title: 'CITIZEN #020 · AMMO DEPOT',
    src: `${BG_REMOVED_DIR}photo_2026-11-18_22-42-37 (3) Background Removed.png`,
    color: '#ef4444',
    lore: '<strong>Heavy Weapons Guy.</strong> Wears a full brass bandolier and cries if someone touches his sandwich.'
  },
  {
    id: 'citizen-021',
    rank: '#021',
    name: 'AVATAR MAXI',
    title: 'CITIZEN #021 · AIR TEMPLE',
    src: `${BG_REMOVED_DIR}photo_2026-11-18_22-42-38 (2) Background Removed.png`,
    color: '#00f0ff',
    lore: '<strong>The Last Tearbender.</strong> Masters all four elements: Whey, Creatine, Tears, and Iron.'
  },
  {
    id: 'citizen-022',
    rank: '#022',
    name: 'AGENT 47 MAXI',
    title: 'CITIZEN #022 · CONTRACT SUITE',
    src: `${BG_REMOVED_DIR}photo_2026-11-18_22-42-38 (3) Background Removed.png`,
    color: '#ff2a85',
    lore: '<strong>Bespoke Hitman.</strong> Tailored charcoal suit custom-fitted for 28-inch biceps.'
  },
  {
    id: 'citizen-023',
    rank: '#023',
    name: 'STEVE MAXI',
    title: 'CITIZEN #023 · DIAMOND MINE',
    src: `${BG_REMOVED_DIR}photo_2026-11-18_22-42-38 (4) Background Removed.png`,
    color: '#00f0ff',
    lore: '<strong>Enchanted Diamond Pickaxe.</strong> Mines pure bedrock on Planet Maxi with one paw.'
  },
  {
    id: 'citizen-024',
    rank: '#024',
    name: 'REAPER MAXI',
    title: 'CITIZEN #024 · SHADOW CRYPT',
    src: `${BG_REMOVED_DIR}photo_2026-11-18_22-42-38 Background Removed.png`,
    color: '#cbd5e1',
    lore: '<strong>Harvester of Gains.</strong> Carries a gleaming steel scythe and needs a nightlight to sleep.'
  },
  {
    id: 'citizen-025',
    rank: '#025',
    name: 'SHREK MAXI',
    title: 'CITIZEN #025 · SWAMP BASIN',
    src: `${BG_REMOVED_DIR}photo_2026-11-18_22-42-39 Background Removed.png`,
    color: '#a3e635',
    lore: '<strong>Get Out of My Swamp.</strong> Layered like an onion with 240 lbs of ogre power.'
  },
  {
    id: 'citizen-026',
    rank: '#026',
    name: 'PATRICK MAXI',
    title: 'CITIZEN #026 · CORAL ROCK',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-45-53 (2) Background Removed.png`,
    color: '#ff2a85',
    lore: '<strong>Starfish Super-Bulk.</strong> Green floral board shorts stretched to their absolute limit.'
  },
  {
    id: 'citizen-027',
    rank: '#027',
    name: 'RICK C-137 MAXI',
    title: 'CITIZEN #027 · PORTAL LAB',
    src: `${BG_REMOVED_DIR}photo_2026-11-18_22-42-40 (3) Background Removed.png`,
    color: '#00f0ff',
    lore: '<strong>Multiverse Scientist.</strong> Built the portal gun that connected all 100 Maxis to this planet.'
  },
  {
    id: 'citizen-028',
    rank: '#028',
    name: 'NYAN MAXI',
    title: 'CITIZEN #028 · RAINBOW STRATOSPHERE',
    src: `${BG_REMOVED_DIR}photo_2026-11-18_22-42-40 Background Removed.png`,
    color: '#ff2a85',
    lore: '<strong>Frosted Pop-Tart Propulsion.</strong> Leaves a 6-color neon rainbow trail across the sky.'
  },
  {
    id: 'citizen-029',
    rank: '#029',
    name: 'TROLLGE MAXI',
    title: 'CITIZEN #029 · MONOLITH SECTOR',
    src: `${BG_REMOVED_DIR}photo_2026-11-18_22-42-41 (2) Background Removed.png`,
    color: '#f8fafc',
    lore: '<strong>Problem, Bears?</strong> Pure chalk-white marble physique grinning from the southern ridge.'
  },
  {
    id: 'citizen-030',
    rank: '#030',
    name: 'MINION MAXI',
    title: 'CITIZEN #030 · GOGGLE FOUNDRY',
    src: `${BG_REMOVED_DIR}photo_2026-11-18_22-42-41 (3) Background Removed.png`,
    color: '#ffbe2e',
    lore: '<strong>Denim Overalls Titan.</strong> Chrome twin-goggles strapped over watery kitten eyes.'
  },
  {
    id: 'citizen-031',
    rank: '#031',
    name: 'DEADPOOL MAXI',
    title: 'CITIZEN #031 · MERCENARY OUTPOST',
    src: `${BG_REMOVED_DIR}photo_2026-11-18_22-42-41 (4) Background Removed.png`,
    color: '#ef4444',
    lore: '<strong>Regenerative Hypertrophy.</strong> Twin katanas strapped behind a crimson tactical six-pack.'
  },
  {
    id: 'citizen-032',
    rank: '#032',
    name: 'HAZMAT COOK MAXI',
    title: 'CITIZEN #032 · LAB SECTOR 09',
    src: `${BG_REMOVED_DIR}photo_2026-11-18_22-42-41 Background Removed.png`,
    color: '#ffbe2e',
    lore: '<strong>Let Him Cook.</strong> Yellow hazmat suit holding a glowing blue crystal shard.'
  },
  {
    id: 'citizen-033',
    rank: '#033',
    name: 'VICE CITY MAXI',
    title: 'CITIZEN #033 · PALM BOULEVARD',
    src: `${BG_REMOVED_DIR}photo_2026-11-18_22-42-45 (2) Background Removed.png`,
    color: '#ff2a85',
    lore: '<strong>16-Bit Retro Kingpin.</strong> Pink palm-tree Hawaiian shirt and pixelated denim.'
  },
  {
    id: 'citizen-034',
    rank: '#034',
    name: 'LSU TIGERS MAXI',
    title: 'CITIZEN #034 · DEATH VALLEY STADIUM',
    src: `${BG_REMOVED_DIR}photo_2026-11-18_22-42-45 Background Removed.png`,
    color: '#c084fc',
    lore: '<strong>1st-Round All-American Tailback.</strong> Purple & gold varsity jersey built for 99-yard rushes.'
  },
  {
    id: 'citizen-035',
    rank: '#035',
    name: 'STORMTROOPER MAXI',
    title: 'CITIZEN #035 · IMPERIAL GARRISON',
    src: `${BG_REMOVED_DIR}photo_2026-11-18_22-43-10 Background Removed.png`,
    color: '#f8fafc',
    lore: '<strong>Never Misses Leg Day.</strong> Custom wide-body Imperial plastoid armor.'
  },
  {
    id: 'citizen-036',
    rank: '#036',
    name: 'UWU STREAMER MAXI',
    title: 'CITIZEN #036 · RGB STUDIO',
    src: `${BG_REMOVED_DIR}photo_2026-11-18_22-43-18 (2) Background Removed.png`,
    color: '#ff2a85',
    lore: '<strong>Cat-Ear Headset Boss.</strong> Pink camo fleece and 240 lbs of live-streamed tears.'
  },

  // 64 New Unique MWO Citizens (#037 – #100)
  {
    id: 'citizen-037',
    rank: '#037',
    name: 'PUMP.FUN PILL MAXI',
    title: '1-OF-1 MWO MASTER · BONDING CURVE CITADEL',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-46-25 Background Removed.png`,
    isMythic: true,
    color: '#34d399',
    lore: '<strong>The Sovereign Bonding Curve Capsule.</strong> Pure emerald & white pump.fun pill armor built to send $MAXI straight past graduation.'
  },
  {
    id: 'citizen-038',
    rank: '#038',
    name: 'SHADOW HEDGEHOG MAXI',
    title: '1-OF-1 MWO MASTER · ARK ORBITAL STATION',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-47-22 Background Removed.png`,
    isMythic: true,
    color: '#ef4444',
    lore: '<strong>The Ultimate Lifeform.</strong> 16-bit crimson-striped quills, golden inhibitor rings, and Chaos Control hover skates.'
  },
  {
    id: 'citizen-039',
    rank: '#039',
    name: 'GOTH DEMON MAXI',
    title: 'CITIZEN #039 · ABYSSAL CATHEDRAL',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-44-33 Background Removed.png`,
    color: '#ef4444',
    lore: '<strong>Dark Wave Succubus Titan.</strong> Crimson horns, bat wings, silver pentagram choker, and platform combat boots.'
  },
  {
    id: 'citizen-040',
    rank: '#040',
    name: 'KUROMI E-GIRL MAXI',
    title: 'CITIZEN #040 · TOKYO NEON DISTRICT',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-44-38 Background Removed.png`,
    color: '#c084fc',
    lore: '<strong>Goth-Kawaii Enforcer.</strong> Black and violet striped sweater clutching a battle-ready Kuromi plushie.'
  },
  {
    id: 'citizen-041',
    rank: '#041',
    name: 'HELLO KITTY DRIP MAXI',
    title: 'CITIZEN #041 · SANRIO PLAZA',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-44-41 Background Removed.png`,
    color: '#f472b6',
    lore: '<strong>Pink Denim Overalls & High-Tops.</strong> Soft white bow hoodie paired with 240 lbs of raw anabolic mass.'
  },
  {
    id: 'citizen-042',
    rank: '#042',
    name: 'MALIBU BADDIE MAXI',
    title: 'CITIZEN #042 · SUNSET LAGOON',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-44-43 Background Removed.png`,
    color: '#f472b6',
    lore: '<strong>Beach Club Sovereign.</strong> Heart-shaped shades, hibiscus blossom, and a designer handbag stuffed with cold hard SOL.'
  },
  {
    id: 'citizen-043',
    rank: '#043',
    name: 'TEDDY ONESIE MAXI',
    title: 'CITIZEN #043 · PLUSHFORGE DOME',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-44-44 (2) Background Removed.png`,
    color: '#fbcfe8',
    lore: '<strong> Cozy Bulk Season.</strong> Sherpa fleece bow hood, matching kitty slippers, and an emotional-support teddy bear.'
  },
  {
    id: 'citizen-044',
    rank: '#044',
    name: 'FAIRY PRINCESS MAXI',
    title: 'CITIZEN #044 · RUBY TIARA SPIRE',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-44-44 Background Removed.png`,
    color: '#f472b6',
    lore: '<strong>Royal Wish Granter.</strong> Wears a silver ruby tiara and waves a crystal heart scepter that turns red candles green.'
  },
  {
    id: 'citizen-045',
    rank: '#045',
    name: 'PINK COWGIRL MAXI',
    title: 'CITIZEN #045 · RODEO RIDGE',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-44-45 Background Removed.png`,
    color: '#f472b6',
    lore: '<strong>Rhinestone Outlaw.</strong> Pink Stetson hat, cowhide vest, braided pigtails, and star-spurred boots.'
  },
  {
    id: 'citizen-046',
    rank: '#046',
    name: 'FROSTY SNOWMAN MAXI',
    title: 'CITIZEN #046 · GLACIER CAP',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-44-46 Background Removed.png`,
    color: '#f8fafc',
    lore: '<strong>Sub-Zero Hypertrophy.</strong> Silk top hat with a carrot-nosevisor, holly scarf, and a solid peppermint staff.'
  },
  {
    id: 'citizen-047',
    rank: '#047',
    name: 'SANTA ELF MAXI',
    title: 'CITIZEN #047 · TOYSHOP FOUNDRY',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-44-47 Background Removed.png`,
    color: '#34d399',
    lore: '<strong>North Pole Head of Security.</strong> Emerald tunic, candy-cane stockings, and brass jingle-bell curl shoes.'
  },
  {
    id: 'citizen-048',
    rank: '#048',
    name: 'SANTA CLAUS MAXI',
    title: 'CITIZEN #048 · POLAR CITADEL',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-44-48 Background Removed.png`,
    color: '#ef4444',
    lore: '<strong> Saint Nick of Solana.</strong> Hauling a 500-lb green velvet sack filled with 100x liquidity gifts.'
  },
  {
    id: 'citizen-049',
    rank: '#049',
    name: 'GINGERBREAD MAXI',
    title: 'CITIZEN #049 · SUGARSPICE CRATER',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-44-49 Background Removed.png`,
    color: '#f59e0b',
    lore: '<strong>Fresh Out the Oven at 240 Lbs.</strong> Royal icing trim, gumdrop buttons, and a crimson bow tie.'
  },
  {
    id: 'citizen-050',
    rank: '#050',
    name: 'CHRISTMAS TREE MAXI',
    title: 'CITIZEN #050 · EVERGREEN SUMMIT',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-44-50 Background Removed.png`,
    color: '#34d399',
    lore: '<strong>Lit Like a God Candle.</strong> Draped in pine boughs, glowing ornaments, and a solid gold star crown.'
  },
  {
    id: 'citizen-051',
    rank: '#051',
    name: 'RUDOLPH REINDEER MAXI',
    title: 'CITIZEN #051 · AURORA TUNDRA',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-44-51 Background Removed.png`,
    color: '#f59e0b',
    lore: '<strong>Red-Nosed Sleigh Puller.</strong> Guides the MWO fleet through high-volatility blizzards.'
  },
  {
    id: 'citizen-052',
    rank: '#052',
    name: 'ZAZA HOODIE MAXI',
    title: 'CITIZEN #052 · HIGH ALTITUDE GREENHOUSE',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-44-53 Background Removed.png`,
    color: '#34d399',
    lore: '<strong>Chief Botanical Officer.</strong> Black leaf-print street hoodie, matching kicks, and a king-size pre-roll.'
  },
  {
    id: 'citizen-053',
    rank: '#053',
    name: 'RASTA MARLEY MAXI',
    title: 'CITIZEN #053 · KINGSTON BAY',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-44-55 Background Removed.png`,
    color: '#34d399',
    lore: '<strong>One Love, One Billion Market Cap.</strong> Heavy dreads, knit rasta tam, gold leaf chain, and zero stress.'
  },
  {
    id: 'citizen-054',
    rank: '#054',
    name: 'CAPTAIN AMERICA MAXI',
    title: 'CITIZEN #054 · FIRST AVENGER GARRISON',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-44-56 (2) Background Removed.png`,
    color: '#38bdf8',
    lore: '<strong>Super-Soldier Serum Maximalist.</strong> Wields an indestructible vibranium shield and can hold the floor all day.'
  },
  {
    id: 'citizen-055',
    rank: '#055',
    name: 'IRON MAN MAXI',
    title: 'CITIZEN #055 · STARK ORBITAL FOUNDRY',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-44-56 Background Removed.png`,
    color: '#ef4444',
    lore: '<strong>Mark LXXXV Nanotech Suit.</strong> Powered by a glowing chest arc reactor and twin plasma repulsors.'
  },
  {
    id: 'citizen-056',
    rank: '#056',
    name: 'THOR ODINSON MAXI',
    title: 'CITIZEN #056 · ASGARD THUNDER RIDGE',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-44-57 Background Removed.png`,
    color: '#38bdf8',
    lore: '<strong>God of Thunder & Heavy Sets.</strong> Crimson Asgardian cloak and worthy enough to curl Mjolnir for reps.'
  },
  {
    id: 'citizen-057',
    rank: '#057',
    name: 'SPIDER-MAXI',
    title: 'CITIZEN #057 · QUEENS SKYLINE SECTOR',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-44-58 Background Removed.png`,
    color: '#ef4444',
    lore: '<strong>Friendly Neighborhood 240-Lb Web-Slinger.</strong> Spins tensile carbon webs strong enough to catch any dip.'
  },
  {
    id: 'citizen-058',
    rank: '#058',
    name: 'BLACK PANTHER MAXI',
    title: 'CITIZEN #058 · WAKANDA VIBRANIUM MOUND',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-44-59 Background Removed.png`,
    color: '#c084fc',
    lore: '<strong>Wakanda Forever.</strong> Kinetic-absorbing vibranium weave suit with royal silver claw collar.'
  },
  {
    id: 'citizen-059',
    rank: '#059',
    name: 'INCREDIBLE HULK MAXI',
    title: 'CITIZEN #059 · GAMMA CRATER',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-45-00 Background Removed.png`,
    color: '#34d399',
    lore: '<strong>Hulk Smash Resistance Levels.</strong> Pure gamma-irradiated green traps and shredded purple shorts.'
  },
  {
    id: 'citizen-060',
    rank: '#060',
    name: 'DOCTOR STRANGE MAXI',
    title: 'CITIZEN #060 · SANCTUM SANCTORUM',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-45-01 Background Removed.png`,
    color: '#f59e0b',
    lore: '<strong>Sorcerer Supreme of Solana.</strong> Viewed 14,000,605 timelines and in every single one $MAXI sends.'
  },
  {
    id: 'citizen-061',
    rank: '#061',
    name: 'WOLVERINE MAXI',
    title: 'CITIZEN #061 · WEAPON X FACILITY',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-45-02 Background Removed.png`,
    color: '#fbbf24',
    lore: '<strong>Adamantium Skeleton & Claws.</strong> Classic yellow-and-blue X-Men suit with instant recovery between sets.'
  },
  {
    id: 'citizen-062',
    rank: '#062',
    name: 'PROFESSOR SNAPE MAXI',
    title: 'CITIZEN #062 · POTIONS DUNGEON',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-45-03 (2) Background Removed.png`,
    color: '#c084fc',
    lore: '<strong>Half-Blood Prince of Pre-Workout.</strong> Flowing black robes and a wand blazing with dark violet fire.'
  },
  {
    id: 'citizen-063',
    rank: '#063',
    name: 'HUFFLEPUFF WIZARD MAXI',
    title: 'CITIZEN #063 · BADGER GREAT HALL',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-45-03 Background Removed.png`,
    color: '#fbbf24',
    lore: '<strong>Loyal to the Bag.</strong> Gold-and-black house scarf with an unbreakable diamond-paw grip on his wand.'
  },
  {
    id: 'citizen-064',
    rank: '#064',
    name: 'SORTING HAT MAXI',
    title: 'CITIZEN #064 · HOGWARTS HIGH TABLE',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-45-05 Background Removed.png`,
    color: '#f59e0b',
    lore: '<strong>Sorts Paperhands from Sovereigns.</strong> Ancient Enchanted Sorting Hat atop a tailored wizard coat.'
  },
  {
    id: 'citizen-065',
    rank: '#065',
    name: 'RAVENCLAW WIZARD MAXI',
    title: 'CITIZEN #065 · ASTRONOMY TOWER',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-45-07 Background Removed.png`,
    color: '#38bdf8',
    lore: '<strong> quantitative Spellcaster.</strong> Sapphire-and-silver scarf calculating orbital liquidity vectors.'
  },
  {
    id: 'citizen-066',
    rank: '#066',
    name: 'ARCHMAGE MERLIN MAXI',
    title: 'CITIZEN #066 · CELESTIAL OBSERVATORY',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-45-08 Background Removed.png`,
    color: '#c084fc',
    lore: '<strong>Grand Elder of the Arcane Order.</strong> Star-embroidered violet robes, flowing white beard, and a mana-orb staff.'
  },
  {
    id: 'citizen-067',
    rank: '#067',
    name: 'POTTER MAXI',
    title: 'CITIZEN #067 · GRYFFINDOR COMMON ROOM',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-45-09 Background Removed.png`,
    color: '#ef4444',
    lore: '<strong>The Boy Who Lifted.</strong> Lightning forehead scar, round spectacles, and crimson-and-gold house scarf.'
  },
  {
    id: 'citizen-068',
    rank: '#068',
    name: 'SLYTHERIN LORD MAXI',
    title: 'CITIZEN #068 · SERPENT CHAMBER',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-45-10 Background Removed.png`,
    color: '#34d399',
    lore: '<strong>Pureblood Green-Candle Summoner.</strong> Emerald house crest and a wand channeling pure green flame.'
  },
  {
    id: 'citizen-069',
    rank: '#069',
    name: 'OUTLAW SHERIFF MAXI',
    title: 'CITIZEN #069 · DEADWOOD CANYON',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-45-26 Background Removed.png`,
    color: '#f59e0b',
    lore: '<strong>Law of the Frontier.</strong> Leather duster, brass sheriff star hat, eyepatch, and a heavy .44 peacemaker.'
  },
  {
    id: 'citizen-070',
    rank: '#070',
    name: 'VAQUERO BANDITO MAXI',
    title: 'CITIZEN #070 · SONORAN MESA',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-45-27 Background Removed.png`,
    color: '#ef4444',
    lore: '<strong>El Bigote del Oro.</strong> Magnificent handlebar mustache, crimson poncho, and a braided bullwhip lasso.'
  },
  {
    id: 'citizen-071',
    rank: '#071',
    name: 'FRED FLINTSTONE MAXI',
    title: 'CITIZEN #071 · BEDROCK QUARRY',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-45-30 Background Removed.png`,
    color: '#f59e0b',
    lore: '<strong>Yabba-Dabba-Deadlift.</strong> Prehistoric sabertooth pelt tunic and cyan boulder necktie.'
  },
  {
    id: 'citizen-072',
    rank: '#072',
    name: 'PINK PANTHER MAXI',
    title: 'CITIZEN #072 · VELVET LOUNGE',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-45-32 Background Removed.png`,
    color: '#f472b6',
    lore: '<strong>Smooth Jazz & Heavy Iron.</strong> Stealthy rose-pink feline suit with golden panther eyes on the hood.'
  },
  {
    id: 'citizen-073',
    rank: '#073',
    name: 'COURAGE DOG MAXI',
    title: 'CITIZEN #073 · NOWHERE FARMSTEAD',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-45-34 Background Removed.png`,
    color: '#f472b6',
    lore: '<strong>The Things I Do For Gains.</strong> Wide-eyed pink hound hood with long floppy ears and zero fear of volatility.'
  },
  {
    id: 'citizen-074',
    rank: '#074',
    name: 'BUGS BUNNY MAXI',
    title: 'CITIZEN #074 · LOONEY WARREN',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-45-35 Background Removed.png`,
    color: '#cbd5e1',
    lore: '<strong>What’s Up, Doc?</strong> Grey rabbit suit with tall ears, snacking on a post-workout carrot.'
  },
  {
    id: 'citizen-075',
    rank: '#075',
    name: 'DAFFY DUCK MAXI',
    title: 'CITIZEN #075 · DUCK SEASON MARSH',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-45-36 Background Removed.png`,
    color: '#f59e0b',
    lore: '<strong>Despicable vascularity.</strong> Jet-black waterfowl suit with a bright orange bill and webbed feet.'
  },
  {
    id: 'citizen-076',
    rank: '#076',
    name: 'TAZ DEVIL MAXI',
    title: 'CITIZEN #076 · VORTEX OUTBACK',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-45-37 Background Removed.png`,
    color: '#f59e0b',
    lore: '<strong>Whirlwind of Mass.</strong> Ferocious fanged Tasmanian Devil hood ready to tear through sell walls.'
  },
  {
    id: 'citizen-077',
    rank: '#077',
    name: 'POPEYE SAILOR MAXI',
    title: 'CITIZEN #077 · SPINACH HARBOR',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-45-38 Background Removed.png`,
    color: '#38bdf8',
    lore: '<strong>22-Inch Forearms.</strong> Classic naval cap, corncob pipe, and freshly inked anchor tattoo.'
  },
  {
    id: 'citizen-078',
    rank: '#078',
    name: 'SUPERMAN MAXI',
    title: 'CITIZEN #078 · FORTRESS OF SOLITUDE',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-45-40 (2) Background Removed.png`,
    color: '#ef4444',
    lore: '<strong>Man of Steel, Eyes of Tears.</strong> House of El crest across a 240-lb Kryptonian chest.'
  },
  {
    id: 'citizen-079',
    rank: '#079',
    name: 'FINN THE HUMAN MAXI',
    title: 'CITIZEN #079 · TREEHOUSE FORT',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-45-40 Background Removed.png`,
    color: '#38bdf8',
    lore: '<strong>Adventure Time Champion.</strong> White polar bear hood, green pack, and the golden Scarlet broadsword.'
  },
  {
    id: 'citizen-080',
    rank: '#080',
    name: 'JAKE THE DOG MAXI',
    title: 'CITIZEN #080 · CANDY KINGDOM BORDER',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-45-41 Background Removed.png`,
    color: '#fbbf24',
    lore: '<strong> Magical Shape-Shifting Bulk.</strong> Golden bulldog suit morphed into peak muscular proportions.'
  },
  {
    id: 'citizen-081',
    rank: '#081',
    name: 'DARK KNIGHT BATMAN MAXI',
    title: 'CITIZEN #081 · GOTHAM BATCAVE',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-45-42 Background Removed.png`,
    color: '#fbbf24',
    lore: '<strong>Vengeance & Volume.</strong> Armored cowl, gold utility belt, and a cape that shadows the entire crater.'
  },
  {
    id: 'citizen-082',
    rank: '#082',
    name: 'BUTTERCUP MAXI',
    title: 'CITIZEN #082 · TOWNSVILLE LAB',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-45-43 Background Removed.png`,
    color: '#34d399',
    lore: '<strong>Spice, Everything Nice & Chemical X.</strong> Lime-green battle dress and the toughest attitude on Planet Maxi.'
  },
  {
    id: 'citizen-083',
    rank: '#083',
    name: 'JERRY MOUSE MAXI',
    title: 'CITIZEN #083 · CHEDDAR VAULT',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-45-44 (2) Background Removed.png`,
    color: '#f59e0b',
    lore: '<strong>Never Gets Caught.</strong> Built like a brick house inside a classic brown mouse hood.'
  },
  {
    id: 'citizen-084',
    rank: '#084',
    name: 'GRIM SKULL MAXI',
    title: 'CITIZEN #084 · UNDERWORLD GATE',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-45-44 Background Removed.png`,
    color: '#ef4444',
    lore: '<strong> Keeper of the Scythe.</strong> Bone-white skull mask beneath a crimson-lined reaper hood.'
  },
  {
    id: 'citizen-085',
    rank: '#085',
    name: 'THE FLASH MAXI',
    title: 'CITIZEN #085 · SPEED FORCE TRACK',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-45-45 Background Removed.png`,
    color: '#ef4444',
    lore: '<strong>Fastest Execution on Solana.</strong> Scarlet speedster suit with golden lightning earpieces.'
  },
  {
    id: 'citizen-086',
    rank: '#086',
    name: 'JOHNNY BRAVO MAXI',
    title: 'CITIZEN #086 · ARON CITY GYM',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-45-47 Background Removed.png`,
    color: '#fbbf24',
    lore: '<strong>Whoa, Mama!</strong> Sky-high golden pompadour, pitch-black shades, and a 26-inch flexed bicep.'
  },
  {
    id: 'citizen-087',
    rank: '#087',
    name: 'TOM CAT MAXI',
    title: 'CITIZEN #087 · LIVING ROOM ARENA',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-45-49 Background Removed.png`,
    color: '#94a3b8',
    lore: '<strong>Double-Cat Meta.</strong> A cat inside a jacked grey-and-white cat suit chasing 100x mice.'
  },
  {
    id: 'citizen-088',
    rank: '#088',
    name: 'DEXTER GENIUS MAXI',
    title: 'CITIZEN #088 · SECRET LABORATORY',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-45-50 Background Removed.png`,
    color: '#34d399',
    lore: '<strong>Omelette du Fromage & Pure Alpha.</strong> Lab coat, purple nitrile gloves, and an Erlenmeyer flask of liquid green candles.'
  },
  {
    id: 'citizen-089',
    rank: '#089',
    name: 'BEN 10 MAXI',
    title: 'CITIZEN #089 · OMNITRIX CORE',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-45-51 Background Removed.png`,
    color: '#34d399',
    lore: '<strong>It’s Hero Time.</strong> Number 10 tactical compression tee with a fully charged Omnitrix on his left wrist.'
  },
  {
    id: 'citizen-090',
    rank: '#090',
    name: 'SCOOBY-DOO MAXI',
    title: 'CITIZEN #090 · MYSTERY MACHINE BAY',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-45-52 Background Removed.png`,
    color: '#f59e0b',
    lore: '<strong>Will Deadlift for Scooby Snacks.</strong> Great Dane suit with the iconic blue-and-gold SD diamond tag.'
  },
  {
    id: 'citizen-091',
    rank: '#091',
    name: 'GUMBALL WATTERSON MAXI',
    title: 'CITIZEN #091 · ELMORE HIGH',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-45-53 Background Removed.png`,
    color: '#38bdf8',
    lore: '<strong>Amazing World of Hypertrophy.</strong> Sky-blue feline hoodie with rolled denim and tan cuffs.'
  },
  {
    id: 'citizen-092',
    rank: '#092',
    name: 'TOAD MUSHROOM MAXI',
    title: 'CITIZEN #092 · MUSHROOM KEEP',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-46-38 Background Removed.png`,
    color: '#ef4444',
    lore: '<strong>Your Liquidity Is in This Castle.</strong> Giant red-spotted mushroom cap and royal blue gold-trimmed vest.'
  },
  {
    id: 'citizen-093',
    rank: '#093',
    name: 'YOSHI DINO MAXI',
    title: 'CITIZEN #093 · DINOSAUR ISLAND',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-46-40 Background Removed.png`,
    color: '#34d399',
    lore: '<strong>Emerald Dino Steed.</strong> Devours red candles whole and turns them into golden eggs.'
  },
  {
    id: 'citizen-094',
    rank: '#094',
    name: 'KING BOWSER MAXI',
    title: 'CITIZEN #094 · LAVAFORGE KEEP',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-46-41 Background Removed.png`,
    color: '#f59e0b',
    lore: '<strong>King of the Koopas.</strong> Spiked green shell, iron-studded cuffs, horns, and a fiery red mane.'
  },
  {
    id: 'citizen-095',
    rank: '#095',
    name: 'SUPER STAR MAXI',
    title: 'CITIZEN #095 · INVINCIBILITY ORBIT',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-46-42 Background Removed.png`,
    color: '#fbbf24',
    lore: '<strong>100% Immune to FUD.</strong> Radiant five-point golden Starman suit humming at 60fps.'
  },
  {
    id: 'citizen-096',
    rank: '#096',
    name: 'GOOMBA MAXI',
    title: 'CITIZEN #096 · WORLD 1-1 GATE',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-46-44 Background Removed.png`,
    color: '#f59e0b',
    lore: '<strong>Never Gets Stomped.</strong> Scowling brown mushroom hood with twin lower fangs and 240 lbs of mass.'
  },
  {
    id: 'citizen-097',
    rank: '#097',
    name: 'BULLET BILL MAXI',
    title: 'CITIZEN #097 · CANNON BATTERY',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-46-45 Background Removed.png`,
    color: '#cbd5e1',
    lore: '<strong> supersonic Trajectory.</strong> Matte-black artillery shell armor with white gauntlets locked on $1B.'
  },
  {
    id: 'citizen-098',
    rank: '#098',
    name: 'CHAIN CHOMP MAXI',
    title: 'CITIZEN #098 · IRON JAW PADDOCK',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-46-47 Background Removed.png`,
    color: '#94a3b8',
    lore: '<strong>Unchained Beast.</strong> Razor-toothed steel sphere helmet with a heavy iron tether chain.'
  },
  {
    id: 'citizen-099',
    rank: '#099',
    name: 'LUIGI MAXI',
    title: 'CITIZEN #099 · MANSION SECTOR',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-46-50 Background Removed.png`,
    color: '#34d399',
    lore: '<strong>Green Thunder Brother.</strong> Signature emerald L cap, brass-button denim overalls, and high-jump quads.'
  },
  {
    id: 'citizen-100',
    rank: '#100',
    name: 'SUPER MARIO MAXI',
    title: 'CITIZEN #100 · CENTENNIAL CITADEL',
    src: `${BG_REMOVED_DIR}photo_2026-11-23_18-46-52 Background Removed.png`,
    color: '#ef4444',
    lore: '<strong>Centennial #100 Champion.</strong> Iconic red M cap and overalls anchoring the 100th sovereign seat of the Maxi World Order.'
  }
];

// Assign Fibonacci Spherical Coordinates to Citizens #007–#100 so all 100 citizens cover the 3D globe evenly
// while keeping a respectful royal plaza clearance around OG Maxi (#001 at lat=0.18, lon=0.0)
(function distributeCitizensOnSphere() {
  const outerCitizens = MAXI_CITIZENS.slice(6);
  const N = outerCitizens.length;
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  outerCitizens.forEach((cit, i) => {
    // Spread latitude between -74 deg and +74 deg across the 3D sphere
    const y = 1 - ((i + 0.5) / N) * 1.84;
    let lat = Math.asin(Math.max(-0.92, Math.min(0.92, y)));
    let lon = ((i * goldenAngle) % (Math.PI * 2)) - Math.PI;

    // Keep clear of OG Maxi's front throne plaza (|lat - 0.18| < 0.34 && |lon| < 0.52)
    if (Math.abs(lat - 0.18) < 0.34 && Math.abs(lon) < 0.52) {
      lon += lon >= 0 ? 0.62 : -0.62;
    }

    cit.lat = lat;
    cit.lon = lon;
  });
})();

/* =========================================================================
   1. WEB AUDIO SYNTHESIZER (Intro Warp + Orbital Telemetry + Arrival Chord)
   ========================================================================= */
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.masterGain = null;
  }

  init() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return;
    }
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    this.ctx = new AudioCtx();
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.value = this.enabled ? 0.42 : 0;
    this.masterGain.connect(this.ctx.destination);

    if (this.ctx.createMediaStreamDestination) {
      this.streamDest = this.ctx.createMediaStreamDestination();
      this.masterGain.connect(this.streamDest);
    }
  }

  toggle() {
    this.init();
    this.enabled = !this.enabled;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.enabled ? 0.42 : 0, this.ctx.currentTime, 0.05);
    }
    const dot = document.getElementById('audioDot');
    const label = document.getElementById('audioLabel');
    const introSfxBtn = document.getElementById('intro-sfx-btn');
    if (dot && label) {
      dot.classList.toggle('muted', !this.enabled);
      label.textContent = this.enabled ? 'AUDIO' : 'MUTED';
    }
    if (introSfxBtn) {
      introSfxBtn.textContent = this.enabled ? 'AUDIO : ON' : 'AUDIO : OFF';
    }
    if (this.enabled) this.playBeep(880, 0.08);
  }

  playHoverSound() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(540, now);
    osc.frequency.exponentialRampToValueAtTime(920, now + 0.08);
    gain.gain.setValueAtTime(0.06, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);
    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.09);
  }

  playWarpSound() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    const osc1 = this.ctx.createOscillator();
    const gain1 = this.ctx.createGain();
    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(95, now);
    osc1.frequency.exponentialRampToValueAtTime(680, now + 0.85);
    gain1.gain.setValueAtTime(0.12, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.9);

    const osc2 = this.ctx.createOscillator();
    const gain2 = this.ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(160, now);
    osc2.frequency.exponentialRampToValueAtTime(42, now + 0.8);
    gain2.gain.setValueAtTime(0.24, now);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.85);

    osc1.connect(gain1);
    gain1.connect(this.masterGain);
    osc2.connect(gain2);
    gain2.connect(this.masterGain);

    osc1.start(now);
    osc1.stop(now + 0.9);
    osc2.start(now);
    osc2.stop(now + 0.85);
  }

  playBeep(freq = 1040, duration = 0.09, type = 'sine') {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);
    gain.gain.setValueAtTime(0.14, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + duration);
  }

  playZoomSequenceSFX() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    [0, 0.25, 0.5, 1.0, 1.6, 2.2].forEach((offset, idx) => {
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(580 + idx * 120, now + offset);
      g.gain.setValueAtTime(0.13, now + offset);
      g.gain.exponentialRampToValueAtTime(0.001, now + offset + 0.11);
      osc.connect(g);
      g.connect(this.masterGain);
      osc.start(now + offset);
      osc.stop(now + offset + 0.12);
    });

    const bufferSize = this.ctx.sampleRate * 5.0;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }
    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(140, now + 0.8);
    filter.frequency.exponentialRampToValueAtTime(1950, now + 3.0);
    filter.frequency.exponentialRampToValueAtTime(240, now + 5.2);
    filter.Q.value = 2.0;

    const whooshGain = this.ctx.createGain();
    whooshGain.gain.setValueAtTime(0.001, now + 0.8);
    whooshGain.gain.linearRampToValueAtTime(0.26, now + 2.8);
    whooshGain.gain.exponentialRampToValueAtTime(0.004, now + 5.4);

    whiteNoise.connect(filter);
    filter.connect(whooshGain);
    whooshGain.connect(this.masterGain);
    whiteNoise.start(now + 0.8);
    whiteNoise.stop(now + 5.5);

    const chordTimes = [5.2, 5.35, 5.5, 5.65];
    const chordFreqs = [523.25, 659.25, 783.99, 1046.5];
    chordFreqs.forEach((f, i) => {
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = 'sine';
      const t = now + chordTimes[i];
      osc.frequency.setValueAtTime(f, t);
      g.gain.setValueAtTime(0.15, t);
      g.gain.exponentialRampToValueAtTime(0.0008, t + 1.8);
      osc.connect(g);
      g.connect(this.masterGain);
      osc.start(t);
      osc.stop(t + 1.85);
    });
  }
}

const sfx = new SoundEngine();

/* =========================================================================
   2. REALISTIC PROCEDURAL PLANET GENERATOR (FRACTAL CONTINENTS, BUMP, CLOUDS)
   ========================================================================= */
function hash2D(ix, iy, seed = 1337) {
  let n = ix * 374761393 + iy * 668265263 + seed * 1442695041;
  n = (n ^ (n >> 13)) * 1274126177;
  return ((n ^ (n >> 16)) >>> 0) / 4294967295;
}

function valueNoise2D(x, y, seed = 1337) {
  const ix = Math.floor(x);
  const iy = Math.floor(y);
  const fx = x - ix;
  const fy = y - iy;
  const ux = fx * fx * (3 - 2 * fx);
  const uy = fy * fy * (3 - 2 * fy);

  const a = hash2D(ix, iy, seed);
  const b = hash2D(ix + 1, iy, seed);
  const c = hash2D(ix, iy + 1, seed);
  const d = hash2D(ix + 1, iy + 1, seed);

  return a + (b - a) * ux + (c - a) * uy + (a - b - c + d) * ux * uy;
}

function fbm3D(nx, ny, nz, octaves = 5, seed = 101) {
  let val = 0;
  let amp = 0.5;
  let freq = 2.2;
  for (let i = 0; i < octaves; i++) {
    // Project 3D unit sphere vector onto 2D seamless noise planes
    const n1 = valueNoise2D(nx * freq + 10, ny * freq + 10, seed + i * 31);
    const n2 = valueNoise2D(ny * freq + 25, nz * freq + 25, seed + i * 57);
    const n3 = valueNoise2D(nz * freq + 40, nx * freq + 40, seed + i * 89);
    val += ((n1 + n2 + n3) / 3) * amp;
    freq *= 2.08;
    amp *= 0.5;
  }
  return val;
}

function hexToRgb(hex) {
  const v = parseInt(hex.replace('#', ''), 16);
  return [(v >> 16) & 255, (v >> 8) & 255, v & 255];
}

function lerpRgb(c1, c2, t) {
  const k = Math.max(0, Math.min(1, t));
  return [
    Math.round(c1[0] + (c2[0] - c1[0]) * k),
    Math.round(c1[1] + (c2[1] - c1[1]) * k),
    Math.round(c1[2] + (c2[2] - c1[2]) * k)
  ];
}

function generateRealisticPlanetMaps(paletteIndex = 0) {
  const biomes = [
    {
      name: 'TERRA MAXI // DEEP SAPPHIRE OCEANS & OBSIDIAN CONTINENTS',
      deepOcean: hexToRgb('#020b18'),
      midOcean: hexToRgb('#061d38'),
      shallowShelf: hexToRgb('#0c3b5e'),
      coastSand: hexToRgb('#594a33'),
      lowland: hexToRgb('#163022'),
      highland: hexToRgb('#2b2620'),
      mountain: hexToRgb('#3d3834'),
      snowPeak: hexToRgb('#7a8694'),
      atmoHex: 0x38bdf8,
      ringColors: [0x38bdf8, 0x64748b, 0x0ea5e9]
    },
    {
      name: 'EMERALD ABYSS // DARK TROPICAL ARCHIPELAGO',
      deepOcean: hexToRgb('#010e12'),
      midOcean: hexToRgb('#04262e'),
      shallowShelf: hexToRgb('#0c4f49'),
      coastSand: hexToRgb('#524838'),
      lowland: hexToRgb('#113322'),
      highland: hexToRgb('#243020'),
      mountain: hexToRgb('#3a3834'),
      snowPeak: hexToRgb('#73827d'),
      atmoHex: 0x2dd4bf,
      ringColors: [0x2dd4bf, 0x38bdf8, 0x475569]
    },
    {
      name: 'NIGHTFALL OBSIDIAN // VOLCANIC BASALT & DEEP SEAS',
      deepOcean: hexToRgb('#05040a'),
      midOcean: hexToRgb('#100c1c'),
      shallowShelf: hexToRgb('#251a3a'),
      coastSand: hexToRgb('#4f3828'),
      lowland: hexToRgb('#211814'),
      highland: hexToRgb('#33231a'),
      mountain: hexToRgb('#473325'),
      snowPeak: hexToRgb('#806d5e'),
      atmoHex: 0x818cf8,
      ringColors: [0x818cf8, 0xf59e0b, 0x475569]
    }
  ];

  const pal = biomes[paletteIndex % biomes.length];
  const W = 1024;
  const H = 512;

  // 1. Color Diffuse Canvas
  const diffCanvas = document.createElement('canvas');
  diffCanvas.width = W;
  diffCanvas.height = H;
  const diffCtx = diffCanvas.getContext('2d');
  const diffImg = diffCtx.createImageData(W, H);

  // 2. Elevation Bump Canvas
  const bumpCanvas = document.createElement('canvas');
  bumpCanvas.width = W;
  bumpCanvas.height = H;
  const bumpCtx = bumpCanvas.getContext('2d');
  const bumpImg = bumpCtx.createImageData(W, H);

  // 3. Roughness Canvas (Oceans smooth=90, Land matte=235)
  const roughCanvas = document.createElement('canvas');
  roughCanvas.width = W;
  roughCanvas.height = H;
  const roughCtx = roughCanvas.getContext('2d');
  const roughImg = roughCtx.createImageData(W, H);

  // 4. Subtle Atmospheric Cloud Layer Canvas
  const cloudCanvas = document.createElement('canvas');
  cloudCanvas.width = W;
  cloudCanvas.height = H;
  const cloudCtx = cloudCanvas.getContext('2d');
  const cloudImg = cloudCtx.createImageData(W, H);

  const dData = diffImg.data;
  const bData = bumpImg.data;
  const rData = roughImg.data;
  const cData = cloudImg.data;

  const seaLevel = 0.485;

  for (let y = 0; y < H; y++) {
    const v = y / H;
    const lat = (0.5 - v) * Math.PI;
    const cosLat = Math.cos(lat);
    const sinLat = Math.sin(lat);
    const polarIce = Math.pow(Math.abs(sinLat), 7.5);

    for (let x = 0; x < W; x++) {
      const u = x / W;
      const lon = (u - 0.5) * Math.PI * 2;
      const nx = cosLat * Math.sin(lon);
      const ny = sinLat;
      const nz = cosLat * Math.cos(lon);

      // Seamless 3D spherical fractal elevation
      let elev = fbm3D(nx, ny, nz, 5, 101 + paletteIndex * 17);

      // Ensure a dark, sculpted island continent under OG Maxi (#001 at lat=0.18, lon=0)
      const distOg = Math.hypot(lat - 0.18, lon - 0.0);
      if (distOg < 0.45) {
        elev += (0.45 - distOg) * 0.35;
      }

      const idx = (y * W + x) * 4;
      let rgb;
      let bumpVal = 128;
      let roughVal = 95;

      if (polarIce > 0.58) {
        rgb = pal.snowPeak;
        bumpVal = 185;
        roughVal = 215;
      } else if (elev < seaLevel - 0.09) {
        const t = elev / (seaLevel - 0.09);
        rgb = lerpRgb(pal.deepOcean, pal.midOcean, t);
        bumpVal = 110;
        roughVal = 95;
      } else if (elev < seaLevel) {
        const t = (elev - (seaLevel - 0.09)) / 0.09;
        rgb = lerpRgb(pal.midOcean, pal.shallowShelf, t);
        bumpVal = 122;
        roughVal = 90;
      } else if (elev < seaLevel + 0.022) {
        const t = (elev - seaLevel) / 0.022;
        rgb = lerpRgb(pal.coastSand, pal.lowland, t);
        bumpVal = 135;
        roughVal = 220;
      } else if (elev < seaLevel + 0.11) {
        const t = (elev - (seaLevel + 0.022)) / 0.088;
        rgb = lerpRgb(pal.lowland, pal.highland, t);
        bumpVal = Math.round(145 + t * 45);
        roughVal = 235;
      } else if (elev < seaLevel + 0.19) {
        const t = (elev - (seaLevel + 0.11)) / 0.08;
        rgb = lerpRgb(pal.highland, pal.mountain, t);
        bumpVal = Math.round(190 + t * 45);
        roughVal = 240;
      } else {
        const t = Math.min(1, (elev - (seaLevel + 0.19)) / 0.09);
        rgb = lerpRgb(pal.mountain, pal.snowPeak, t);
        bumpVal = Math.round(235 + t * 20);
        roughVal = 225;
      }

      dData[idx] = rgb[0];
      dData[idx + 1] = rgb[1];
      dData[idx + 2] = rgb[2];
      dData[idx + 3] = 255;

      bData[idx] = bumpVal;
      bData[idx + 1] = bumpVal;
      bData[idx + 2] = bumpVal;
      bData[idx + 3] = 255;

      rData[idx] = roughVal;
      rData[idx + 1] = roughVal;
      rData[idx + 2] = roughVal;
      rData[idx + 3] = 255;

      // Soft wispy clouds (kept subtle so they never wash out the Maxi sprites)
      const cNoise = fbm3D(nx * 1.5 + 4.2, ny * 1.9, nz * 1.5 - 2.1, 4, 707);
      const cloudAlpha = Math.max(0, Math.min(130, Math.round((cNoise - 0.54) * 520)));
      cData[idx] = 215;
      cData[idx + 1] = 232;
      cData[idx + 2] = 250;
      cData[idx + 3] = cloudAlpha;
    }
  }

  diffCtx.putImageData(diffImg, 0, 0);
  bumpCtx.putImageData(bumpImg, 0, 0);
  roughCtx.putImageData(roughImg, 0, 0);
  cloudCtx.putImageData(cloudImg, 0, 0);

  return {
    diffCanvas,
    bumpCanvas,
    roughCanvas,
    cloudCanvas,
    biomeName: pal.name,
    atmoHex: pal.atmoHex,
    ringColors: pal.ringColors
  };
}

/* =========================================================================
   3. TRUE 3D WEBGL CLAW MACHINE & INSTANT 1000x1000 PFP FORGER ENGINE
   ========================================================================= */
class PlanetMaxiController {
  constructor() {
    this.spaceCanvas = document.getElementById('intro-canvas');
    this.spaceCtx = this.spaceCanvas ? this.spaceCanvas.getContext('2d') : null;
    this.fxCanvas = document.getElementById('diveFxCanvas');
    this.fxCtx = this.fxCanvas ? this.fxCanvas.getContext('2d') : null;
    this.webglContainer = document.getElementById('planetWebGLContainer');

    this.clawCanvas = document.getElementById('clawMachineCanvas');
    this.clawGlassBay = document.getElementById('clawGlassBay');
    this.clawCabinetStage = document.getElementById('clawCabinetStage');

    this.stageContainer = document.getElementById('stageContainer');
    this.logoStage = document.getElementById('logo-stage');

    this.introScreen = document.getElementById('intro-screen');
    this.mainNavbar = document.getElementById('mainNavbar');
    this.diveHudLayer = document.getElementById('diveHudLayer');
    this.bottomCaBar = document.getElementById('bottomCaBar');
    this.reticleHud = document.getElementById('reticleHud');
    this.arrivedCard = document.getElementById('arrivedCard');

    this.state = 'ORBIT'; // 'ORBIT' (Opening Gate) | 'LOCKED' (3D WebGL Claw Machine Active)
    this.orbitSpinMode = '3d';
    this.paletteIdx = 0;
    this.activeCitizenIndex = 0; // 0 = OG MAXI (#001)
    this.introPreviewIdx = 0;
    this.isOverdrive = false;

    // Live Pull PFP Forger state
    this.pullPfpTheme = 'OBSIDIAN';
    this.pullPfpBadgeText = 'MAXI WORLD ORDER';

    // 3D Planet Rotation
    this.planetRotY = -1.8;
    this.planetRotX = 0.18;
    this.camDist = 335;

    // 3D Starfield backdrop particles
    this.particles = [];
    this.baseWarpSpeed = 1.5;
    this.targetWarpSpeed = 1.5;
    this.mouseX = 0;
    this.mouseY = 0;
    this.starColors = ['#ffbe2e', '#70f8ff', '#fff6e0', '#38bdf8', '#ffffff'];

    // Texture & Sprite Caches
    this.imageCache = new Map();
    this.textureCache = new Map();
    this.extractedSet = new Set();
    this.pileItems = [];
    this.pileBatchOffset = 0;

    // 3D Claw Tank Bounds (in Three.js World Units)
    // Tank Width: X in [-105 .. +105]
    // Left Extraction Chute: X in [-105 .. -55], Z in [-58 .. +58]
    // Main Prize Containment Pit: X in [-48 .. +100], Z in [-55 .. +55]
    // Floor Y = -56, Top Gantry Bridge Y = +64
    this.tankBounds = {
      minX: -102,
      maxX: 102,
      chuteMaxX: -54,
      pitMinX: -45,
      pitMaxX: 98,
      minZ: -54,
      maxZ: 54,
      floorY: -56,
      railY: 64,
      dividerHeight: 34
    };

    this.claw = {
      x: 24,            // World X in [-90..92]
      targetX: 24,
      z: 6,             // World Z in [-46..46]
      targetZ: 6,
      y: 44,            // Current 3D Claw Hub Y
      homeY: 44,
      state: 'IDLE',    // 'IDLE' | 'DROPPING' | 'CLAMPING' | 'HOISTING' | 'CARRYING' | 'RELEASING'
      stateTimer: 0,
      jawAngle: 0.56,   // Radians (0.62 = open wide, 0.15 = clamped tight)
      targetJaw: 0.56,
      swingX: 0,
      swingZ: 0,
      velX: 0,
      velZ: 0,
      grabbedItem: null,
      moveDirX: 0,      // -1 left, +1 right
      moveDirZ: 0       // -1 back, +1 front
    };

    // 3D Camera Parallax & Orbit
    this.camYaw = 0;
    this.targetCamYaw = 0;
    this.camPitch = 0.16;
    this.targetCamPitch = 0.16;

    this.preloadCitizenSprites();
    this.buildRosterStrip();
    this.initWarpParticles();
    this.initThreePlanet();
    this.initThreeClawMachine();
    this.resizeCanvases();
    this.spawnClawPile(false);
    this.bindEvents();

    this.lastFrameTime = performance.now();
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  preloadCitizenSprites() {
    MAXI_CITIZENS.forEach((cit, idx) => {
      const loadFn = () => {
        if (this.imageCache.has(cit.src)) return;
        const img = new Image();
        img.onload = () => {
          // If texture already requested, update it
          if (this.textureCache.has(cit.src)) {
            const tex = this.textureCache.get(cit.src);
            tex.image = img;
            tex.needsUpdate = true;
          }
          if (idx === this.activeCitizenIndex) {
            this.renderPullPfpCanvas();
          }
        };
        img.src = cit.src;
        this.imageCache.set(cit.src, img);
      };
      if (idx < 45) {
        loadFn();
      } else {
        setTimeout(loadFn, 90 + (idx - 45) * 14);
      }
    });
  }

  getSprite(src) {
    if (this.imageCache.has(src)) {
      return this.imageCache.get(src);
    }
    const img = new Image();
    img.onload = () => {
      if (this.textureCache.has(src)) {
        const tex = this.textureCache.get(src);
        tex.image = img;
        tex.needsUpdate = true;
      }
    };
    img.src = src;
    this.imageCache.set(src, img);
    return img;
  }

  getCitizenThreeTexture(src) {
    if (this.textureCache.has(src)) {
      return this.textureCache.get(src);
    }
    const img = this.getSprite(src);
    const tex = new THREE.Texture(img);
    tex.encoding = THREE.sRGBEncoding;
    tex.anisotropy = this.clawRenderer
      ? Math.min(8, this.clawRenderer.capabilities.getMaxAnisotropy())
      : 4;
    if (img.complete && img.naturalWidth > 0) {
      tex.needsUpdate = true;
    }
    this.textureCache.set(src, tex);
    return tex;
  }

  buildRosterStrip() {
    const strip = document.getElementById('citizenRosterStrip');
    if (!strip) return;
    strip.innerHTML = '';

    MAXI_CITIZENS.forEach((cit, idx) => {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = `roster-chip ${cit.isOg ? 'og-chip active' : ''}`;
      chip.dataset.idx = idx;
      chip.innerHTML = `
        <img src="${cit.src}" alt="${cit.name}" loading="lazy" />
        <span>${cit.isOg ? '#001 OG MAXI' : `${cit.rank} ${cit.name.replace(' MAXI', '')}`}</span>
      `;
      chip.addEventListener('click', () => {
        this.selectCitizen(idx, false);
      });
      strip.appendChild(chip);
    });
  }

  /* -----------------------------------------------------------------------
     A. BACKGROUND 3D PLANET MAXI (OPENING GATE & VAULT AMBIENCE)
     ----------------------------------------------------------------------- */
  initThreePlanet() {
    if (!this.webglContainer || typeof THREE === 'undefined') return;
    const w = window.innerWidth || 1440;
    const h = window.innerHeight || 900;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(42, w / h, 1, 3000);
    this.camera.position.set(0, 0, this.camDist);

    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    this.renderer.setSize(w, h);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.webglContainer.innerHTML = '';
    this.webglContainer.appendChild(this.renderer.domElement);

    this.planetGroup = new THREE.Group();
    this.scene.add(this.planetGroup);

    this.planetRadius = 100;
    const maps = generateRealisticPlanetMaps(this.paletteIdx);
    this.diffuseTex = new THREE.CanvasTexture(maps.diffCanvas);
    this.bumpTex = new THREE.CanvasTexture(maps.bumpCanvas);
    this.roughTex = new THREE.CanvasTexture(maps.roughCanvas);
    this.cloudTex = new THREE.CanvasTexture(maps.cloudCanvas);

    const sphereGeo = new THREE.SphereGeometry(this.planetRadius, 72, 72);
    const sphereMat = new THREE.MeshStandardMaterial({
      map: this.diffuseTex,
      bumpMap: this.bumpTex,
      bumpScale: 2.8,
      roughnessMap: this.roughTex,
      roughness: 0.88,
      metalness: 0.1
    });
    this.planetMesh = new THREE.Mesh(sphereGeo, sphereMat);
    this.planetGroup.add(this.planetMesh);

    const cloudGeo = new THREE.SphereGeometry(this.planetRadius * 1.015, 48, 48);
    const cloudMat = new THREE.MeshStandardMaterial({
      map: this.cloudTex,
      transparent: true,
      opacity: 0.34,
      roughness: 1.0,
      depthWrite: false
    });
    this.cloudMesh = new THREE.Mesh(cloudGeo, cloudMat);
    this.planetGroup.add(this.cloudMesh);

    const atmoGeo = new THREE.SphereGeometry(this.planetRadius * 1.08, 48, 48);
    const atmoMat = new THREE.MeshBasicMaterial({
      color: maps.atmoHex,
      transparent: true,
      opacity: 0.16,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending
    });
    this.atmoMesh = new THREE.Mesh(atmoGeo, atmoMat);
    this.planetGroup.add(this.atmoMesh);

    this.ringGroup = new THREE.Group();
    this.ringGroup.rotation.x = Math.PI * 0.44;
    this.ringGroup.rotation.z = -Math.PI * 0.08;
    this.scene.add(this.ringGroup);

    const ringConfigs = [
      { inner: 148, outer: 158, color: maps.ringColors[0], opacity: 0.16 },
      { inner: 162, outer: 178, color: maps.ringColors[1], opacity: 0.10 },
      { inner: 182, outer: 190, color: maps.ringColors[2], opacity: 0.07 }
    ];
    this.ringMeshes = [];
    ringConfigs.forEach((rc) => {
      const rGeo = new THREE.RingGeometry(rc.inner, rc.outer, 96);
      const rMat = new THREE.MeshBasicMaterial({
        color: rc.color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: rc.opacity
      });
      const rMesh = new THREE.Mesh(rGeo, rMat);
      this.ringGroup.add(rMesh);
      this.ringMeshes.push(rMesh);
    });

    const ambientLight = new THREE.AmbientLight(0xdbeafe, 0.8);
    this.scene.add(ambientLight);
    const sunLight = new THREE.DirectionalLight(0xfffbeb, 1.2);
    sunLight.position.set(260, 180, 240);
    this.scene.add(sunLight);
  }

  /* -----------------------------------------------------------------------
     B. TRUE 3D WEBGL CLAW MACHINE SCENE, GANTRY, 3-PRONG CLAW & LIGHTING
     ----------------------------------------------------------------------- */
  initThreeClawMachine() {
    if (!this.clawCanvas || typeof THREE === 'undefined') return;

    this.clawScene = new THREE.Scene();

    this.clawCamera = new THREE.PerspectiveCamera(38, 16 / 9, 1, 1500);
    this.clawCamera.position.set(0, 18, 232);
    this.clawCamera.lookAt(0, -8, 0);

    this.clawRenderer = new THREE.WebGLRenderer({
      canvas: this.clawCanvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.clawRenderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.clawRenderer.outputEncoding = THREE.sRGBEncoding;

    // 1. Studio PBR Lighting Inside the 3D Glass Vault
    const ambient = new THREE.AmbientLight(0xe2e8f0, 0.92);
    this.clawScene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xfff7ed, 1.35);
    keyLight.position.set(90, 160, 140);
    this.clawScene.add(keyLight);

    this.vaultGoldLight = new THREE.PointLight(0xe5b869, 1.6, 420);
    this.vaultGoldLight.position.set(55, 70, 60);
    this.clawScene.add(this.vaultGoldLight);

    this.chuteEmeraldLight = new THREE.PointLight(0x34d399, 1.8, 320);
    this.chuteEmeraldLight.position.set(-80, -15, 30);
    this.clawScene.add(this.chuteEmeraldLight);

    const rimBackLight = new THREE.DirectionalLight(0x38bdf8, 0.75);
    rimBackLight.position.set(-60, 80, -140);
    this.clawScene.add(rimBackLight);

    // 2. Build 3D Vault Architecture (Floor Deck, Extraction Chute, Neon Rails, Glass Pillars)
    this.vaultStructGroup = new THREE.Group();
    this.clawScene.add(this.vaultStructGroup);

    const b = this.tankBounds;

    // Brushed Dark-Obsidian Containment Floor (Right side pit floor)
    const pitW = b.maxX - b.chuteMaxX;
    const pitD = b.maxZ - b.minZ;
    const floorGeo = new THREE.BoxGeometry(pitW, 6, pitD);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x0b101b,
      roughness: 0.35,
      metalness: 0.75
    });
    const floorMesh = new THREE.Mesh(floorGeo, floorMat);
    floorMesh.position.set(b.chuteMaxX + pitW * 0.5, b.floorY - 3, 0);
    this.vaultStructGroup.add(floorMesh);

    // Subtle Gold Grid Lines on the 3D Containment Floor
    const gridHelper = new THREE.GridHelper(160, 14, 0xe5b869, 0x1e293b);
    gridHelper.position.set(22, b.floorY + 0.2, 0);
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.35;
    this.vaultStructGroup.add(gridHelper);

    // Left 3D Prize Extraction Chute Well & Glowing Emerald Laser Ring
    const chuteW = b.chuteMaxX - b.minX;
    const chuteWallMat = new THREE.MeshStandardMaterial({
      color: 0x111927,
      roughness: 0.25,
      metalness: 0.85
    });

    // Armored 3D Divider Wall between Main Pit and Extraction Chute
    const dividerGeo = new THREE.BoxGeometry(4.5, b.dividerHeight, pitD);
    const dividerMesh = new THREE.Mesh(dividerGeo, chuteWallMat);
    dividerMesh.position.set(b.chuteMaxX, b.floorY + b.dividerHeight * 0.5, 0);
    this.vaultStructGroup.add(dividerMesh);

    // Golden Top Rail on the Chute Divider Wall
    const divCapGeo = new THREE.BoxGeometry(5.5, 2.2, pitD + 1);
    this.goldTrimMat = new THREE.MeshStandardMaterial({
      color: 0xe5b869,
      roughness: 0.22,
      metalness: 0.92,
      emissive: 0xe5b869,
      emissiveIntensity: 0.18
    });
    const divCapMesh = new THREE.Mesh(divCapGeo, this.goldTrimMat);
    divCapMesh.position.set(b.chuteMaxX, b.floorY + b.dividerHeight + 1.1, 0);
    this.vaultStructGroup.add(divCapMesh);

    // Glowing Emerald Chute Drop Portal Frame
    const portalGeo = new THREE.EdgesGeometry(new THREE.BoxGeometry(chuteW - 4, 2, pitD - 8));
    const portalMat = new THREE.LineBasicMaterial({ color: 0x34d399 });
    const portalLines = new THREE.LineSegments(portalGeo, portalMat);
    portalLines.position.set(b.minX + chuteW * 0.5, b.floorY + 6, 0);
    this.vaultStructGroup.add(portalLines);

    // 4 Corner Brushed-Chrome Structural Pillars of the 3D Glass Tank
    const pillarGeo = new THREE.CylinderGeometry(2.2, 2.2, b.railY - b.floorY + 14, 16);
    const chromeMat = new THREE.MeshStandardMaterial({
      color: 0xdbeafe,
      roughness: 0.18,
      metalness: 0.94
    });
    [
      [b.minX, b.minZ],
      [b.maxX, b.minZ],
      [b.minX, b.maxZ],
      [b.maxX, b.maxZ]
    ].forEach(([px, pz]) => {
      const pil = new THREE.Mesh(pillarGeo, chromeMat);
      pil.position.set(px, (b.railY + b.floorY) * 0.5, pz);
      this.vaultStructGroup.add(pil);
    });

    // Fixed Front & Back Top X-Axis Gantry Structural Beams
    const xBeamGeo = new THREE.CylinderGeometry(1.8, 1.8, b.maxX - b.minX + 6, 16);
    xBeamGeo.rotateZ(Math.PI * 0.5);
    [-b.maxZ, b.maxZ].forEach((pz) => {
      const beam = new THREE.Mesh(xBeamGeo, chromeMat);
      beam.position.set(0, b.railY + 4, pz);
      this.vaultStructGroup.add(beam);
    });

    // 3. Moving Z-Axis Gantry Bridge (Slides Left/Right along X)
    this.gantryBridgeGroup = new THREE.Group();
    this.gantryBridgeGroup.position.set(this.claw.x, b.railY, 0);
    this.clawScene.add(this.gantryBridgeGroup);

    const zRailGeo = new THREE.CylinderGeometry(1.5, 1.5, pitD + 6, 16);
    zRailGeo.rotateX(Math.PI * 0.5);
    const zRailLeft = new THREE.Mesh(zRailGeo, chromeMat);
    zRailLeft.position.set(-4.5, 2, 0);
    const zRailRight = new THREE.Mesh(zRailGeo, chromeMat);
    zRailRight.position.set(4.5, 2, 0);
    this.gantryBridgeGroup.add(zRailLeft, zRailRight);

    // 4. Moving 3D Trolley Carriage (Slides Front/Back along Z on the Bridge)
    this.trolleyGroup = new THREE.Group();
    this.trolleyGroup.position.set(this.claw.x, b.railY, this.claw.z);
    this.clawScene.add(this.trolleyGroup);

    const carriageGeo = new THREE.BoxGeometry(16, 7, 16);
    const darkSteelMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.28,
      metalness: 0.88
    });
    const carriageMesh = new THREE.Mesh(carriageGeo, darkSteelMat);
    this.trolleyGroup.add(carriageMesh);

    const carriageTrim = new THREE.Mesh(new THREE.BoxGeometry(17, 1.6, 17), this.goldTrimMat);
    carriageTrim.position.y = -2.5;
    this.trolleyGroup.add(carriageTrim);

    // 5. Braided Steel Hoist Cable & Vertical Volumetric Laser Beam
    const cableGeo = new THREE.CylinderGeometry(0.65, 0.65, 1, 12);
    this.cableMesh = new THREE.Mesh(cableGeo, chromeMat);
    this.clawScene.add(this.cableMesh);

    // Vertical Laser Aiming Line + Floor Target Reticle Ring
    const laserGeo = new THREE.CylinderGeometry(0.32, 0.32, 120, 8);
    this.laserMat = new THREE.MeshBasicMaterial({
      color: 0x34d399,
      transparent: true,
      opacity: 0.55
    });
    this.laserBeamMesh = new THREE.Mesh(laserGeo, this.laserMat);
    this.clawScene.add(this.laserBeamMesh);

    const reticleRingGeo = new THREE.RingGeometry(8.5, 11.2, 32);
    reticleRingGeo.rotateX(-Math.PI * 0.5);
    this.reticleMat = new THREE.MeshBasicMaterial({
      color: 0x34d399,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.8
    });
    this.floorReticleMesh = new THREE.Mesh(reticleRingGeo, this.reticleMat);
    this.floorReticleMesh.position.y = b.floorY + 0.4;
    this.clawScene.add(this.floorReticleMesh);

    // 6. Articulated 3-Prong Hydraulic 3D Claw Head (120-degree radial symmetry)
    this.clawHeadGroup = new THREE.Group();
    this.clawHeadGroup.position.set(this.claw.x, this.claw.y, this.claw.z);
    this.clawScene.add(this.clawHeadGroup);

    // Motor Hub Cylinder
    const hubCyl = new THREE.Mesh(
      new THREE.CylinderGeometry(6.5, 7.5, 7, 24),
      darkSteelMat
    );
    this.clawHeadGroup.add(hubCyl);

    const hubGoldRing = new THREE.Mesh(
      new THREE.CylinderGeometry(7.8, 7.8, 1.6, 24),
      this.goldTrimMat
    );
    hubGoldRing.position.y = -1.5;
    this.clawHeadGroup.add(hubGoldRing);

    // Glowing Core Under Hub
    this.clawCoreMat = new THREE.MeshBasicMaterial({ color: 0xe5b869 });
    const coreSphere = new THREE.Mesh(new THREE.SphereGeometry(3.2, 16, 16), this.clawCoreMat);
    coreSphere.position.y = -4;
    this.clawHeadGroup.add(coreSphere);

    // 3 Articulated Prongs at 0°, 120°, 240°
    this.clawFingers = [];
    for (let i = 0; i < 3; i++) {
      const mountYaw = (i * Math.PI * 2) / 3 + Math.PI / 6;
      const mountGroup = new THREE.Group();
      mountGroup.rotation.y = mountYaw;
      this.clawHeadGroup.add(mountGroup);

      const fingerPivot = new THREE.Group();
      fingerPivot.position.set(6.2, -3.2, 0);
      mountGroup.add(fingerPivot);

      // Upper Chrome Strut
      const upperArmGeo = new THREE.CylinderGeometry(1.05, 0.95, 13, 12);
      const upperArm = new THREE.Mesh(upperArmGeo, chromeMat);
      upperArm.position.set(3.2, -5.5, 0);
      upperArm.rotation.z = 0.48;
      fingerPivot.add(upperArm);

      // Gold Knee Joint
      const kneeSphere = new THREE.Mesh(new THREE.SphereGeometry(1.75, 14, 14), this.goldTrimMat);
      kneeSphere.position.set(6.4, -11.0, 0);
      fingerPivot.add(kneeSphere);

      // Lower Curved Talon Tip (hooks inward)
      const lowerTipGeo = new THREE.CylinderGeometry(0.95, 0.35, 13.5, 12);
      const lowerTip = new THREE.Mesh(lowerTipGeo, this.goldTrimMat);
      lowerTip.position.set(3.4, -16.8, 0);
      lowerTip.rotation.z = -0.45;
      fingerPivot.add(lowerTip);

      this.clawFingers.push(fingerPivot);
    }

    // Group to hold all 3D Maxi Collectible Standees inside the pit
    this.pileGroup = new THREE.Group();
    this.clawScene.add(this.pileGroup);

    // Shared Geometry for 3D Collector Standee Bases
    this.pedestalCylGeo = new THREE.CylinderGeometry(9.5, 10.6, 3.2, 28);
    this.pedestalRingGeo = new THREE.CylinderGeometry(10.85, 10.85, 1.1, 28);
  }

  create3DMaxiStandeeMesh(cit, scaleMultiplier = 1.0) {
    const group = new THREE.Group();

    const isOg = Boolean(cit.isOg);
    const isMythic = Boolean(cit.isMythic || cit.rank === '#037');

    // 1. 3D Collector Pedestal Puck Base
    const baseMat = new THREE.MeshStandardMaterial({
      color: isOg ? 0x2a1f0d : isMythic ? 0x092218 : 0x111827,
      roughness: 0.3,
      metalness: 0.85
    });
    const baseMesh = new THREE.Mesh(this.pedestalCylGeo, baseMat);
    baseMesh.position.y = -11.5;
    group.add(baseMesh);

    const rimMat = new THREE.MeshStandardMaterial({
      color: isOg ? 0xf3d285 : isMythic ? 0x34d399 : 0x94a3b8,
      roughness: 0.22,
      metalness: 0.92,
      emissive: isOg ? 0xe5b869 : isMythic ? 0x34d399 : 0x000000,
      emissiveIntensity: isOg ? 0.3 : isMythic ? 0.22 : 0
    });
    const rimMesh = new THREE.Mesh(this.pedestalRingGeo, rimMat);
    rimMesh.position.y = -11.2;
    group.add(rimMesh);

    // 2. High-Resolution Un-Tinted Double-Sided Acrylic Cutout Standee Plane
    const tex = this.getCitizenThreeTexture(cit.src);
    const standeeH = 25.5;
    const standeeW = 24.0;
    const planeGeo = new THREE.PlaneGeometry(standeeW, standeeH);
    const planeMat = new THREE.MeshBasicMaterial({
      map: tex,
      transparent: true,
      alphaTest: 0.06,
      side: THREE.DoubleSide
    });
    const cutoutMesh = new THREE.Mesh(planeGeo, planeMat);
    cutoutMesh.position.y = 1.2;
    group.add(cutoutMesh);

    // Subtle 3D Metallic Backlight Aura Disc behind OG & Mythic Standees
    if (isOg || isMythic) {
      const haloGeo = new THREE.RingGeometry(9.2, 11.4, 32);
      const haloMat = new THREE.MeshBasicMaterial({
        color: isOg ? 0xf3d285 : 0x34d399,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.45
      });
      const haloMesh = new THREE.Mesh(haloGeo, haloMat);
      haloMesh.position.set(0, 1.0, -0.6);
      group.add(haloMesh);
    }

    group.scale.setScalar(scaleMultiplier);
    return group;
  }

  /* -----------------------------------------------------------------------
     C. SPAWN 3D PILE OF MAXI STANDEES ACROSS ALL 100 UNIQUE CITIZENS
     ----------------------------------------------------------------------- */
  spawnClawPile(playSfx = true) {
    if (!this.pileGroup) return;

    // Clear previous 3D meshes from pileGroup
    while (this.pileGroup.children.length > 0) {
      this.pileGroup.remove(this.pileGroup.children[0]);
    }

    const b = this.tankBounds;
    const count = 24;

    // Always include #001 OG MAXI and #037 PUMP.FUN PILL MAXI + rotating batch from all 100 citizens
    const chosenIndices = new Set([0]);
    if (MAXI_CITIZENS.length > 36) chosenIndices.add(36);

    const mythicPool = [1, 2, 3, 4, 5, 37, 50, 77].filter((i) => i < MAXI_CITIZENS.length);
    for (let m = 0; m < 4; m++) {
      chosenIndices.add(mythicPool[(this.pileBatchOffset + m) % mythicPool.length]);
    }

    let cursor = (this.pileBatchOffset * 13) % MAXI_CITIZENS.length;
    while (chosenIndices.size < Math.min(count, MAXI_CITIZENS.length)) {
      chosenIndices.add(cursor);
      cursor = (cursor + 3) % MAXI_CITIZENS.length;
    }
    this.pileBatchOffset = (this.pileBatchOffset + 1) % MAXI_CITIZENS.length;

    const indicesArr = Array.from(chosenIndices);
    for (let i = indicesArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indicesArr[i], indicesArr[j]] = [indicesArr[j], indicesArr[i]];
    }
    // Ensure OG Maxi (#001) drops near the top-center of the 3D pile
    const ogPos = indicesArr.indexOf(0);
    if (ogPos !== -1 && ogPos < indicesArr.length - 4) {
      indicesArr.splice(ogPos, 1);
      indicesArr.splice(indicesArr.length - 3, 0, 0);
    }

    this.pileItems = indicesArr.map((citIdx, i) => {
      const cit = MAXI_CITIZENS[citIdx];
      const scale = cit.isOg ? 1.24 : cit.isMythic ? 1.12 : 1.02;
      const radius = 12.2 * scale;

      const cols = 6;
      const rowsZ = 3;
      const col = i % cols;
      const rowZ = Math.floor(i / cols) % rowsZ;
      const layerY = Math.floor(i / (cols * rowsZ));

      const spanX = b.pitMaxX - b.pitMinX - 28;
      const spanZ = b.maxZ - b.minZ - 26;

      const x =
        b.pitMinX +
        14 +
        (col / (cols - 1)) * spanX +
        (Math.random() - 0.5) * 9;
      const z =
        b.minZ +
        13 +
        (rowZ / (rowsZ - 1)) * spanZ +
        (Math.random() - 0.5) * 9;
      const y = b.floorY + radius + 12 + layerY * 22 + Math.random() * 10;

      const mesh = this.create3DMaxiStandeeMesh(cit, scale);
      mesh.position.set(x, y, z);
      this.pileGroup.add(mesh);

      return {
        uid: `${cit.rank}-${Date.now()}-${i}`,
        citizenIndex: citIdx,
        cit,
        mesh,
        x,
        y,
        z,
        vx: (Math.random() - 0.5) * 14,
        vy: 0,
        vz: (Math.random() - 0.5) * 14,
        r: radius,
        rotX: (Math.random() - 0.5) * 0.22,
        rotZ: (Math.random() - 0.5) * 0.22,
        rotY: (Math.random() - 0.5) * 0.35,
        inChute: false,
        extracted: false
      };
    });

    if (this.claw.grabbedItem) {
      this.claw.grabbedItem = null;
      this.claw.state = 'IDLE';
    }

    if (playSfx) {
      sfx.playBeep(540, 0.07, 'triangle');
      setTimeout(() => sfx.playBeep(760, 0.09, 'triangle'), 65);
    }
    this.updateMarqueeStatus('3D VAULT RESTOCKED // 100 CITIZENS IN ROTATION');
  }

  /* -----------------------------------------------------------------------
     D. LIVE 1000x1000 HD PFP FORGER INSIDE THE CLAW EXTRACTION MODAL
     ----------------------------------------------------------------------- */
  renderPullPfpCanvas() {
    const canvas = document.getElementById('pullPfpCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;  // 1000
    const h = canvas.height; // 1000

    const cit = MAXI_CITIZENS[this.activeCitizenIndex] || MAXI_CITIZENS[0];
    const img = this.getSprite(cit.src);

    ctx.clearRect(0, 0, w, h);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    // 1. High-Craft Architectural Background Theme
    const themes = {
      OBSIDIAN: { c0: '#1c2436', c1: '#070a12', c2: '#030408', accent: '#e5b869', sub: '#f3d285' },
      CANDLE:   { c0: '#0b2e23', c1: '#05140f', c2: '#020806', accent: '#34d399', sub: '#6ee7b7' },
      SOLANA:   { c0: '#1e1b4b', c1: '#090d1a', c2: '#03050a', accent: '#38bdf8', sub: '#a855f7' },
      ROYAL:    { c0: '#3b0d1e', c1: '#14050b', c2: '#060204', accent: '#f43f5e', sub: '#fbbf24' }
    };
    const th = themes[this.pullPfpTheme] || themes.OBSIDIAN;

    const bgGrad = ctx.createRadialGradient(w * 0.5, h * 0.44, 40, w * 0.5, h * 0.5, w * 0.72);
    bgGrad.addColorStop(0, th.c0);
    bgGrad.addColorStop(0.62, th.c1);
    bgGrad.addColorStop(1, th.c2);
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, w, h);

    // Subtle Blueprint Grid & Radial Telemetry Rings
    ctx.save();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.045)';
    ctx.lineWidth = 2;
    const step = 100;
    for (let x = step; x < w; x += step) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = step; y < h; y += step) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    // Center Sovereign Aura Ring behind Character
    const auraGrad = ctx.createRadialGradient(w * 0.5, h * 0.46, 30, w * 0.5, h * 0.46, 360);
    auraGrad.addColorStop(0, `${th.accent}44`);
    auraGrad.addColorStop(0.6, `${th.accent}14`);
    auraGrad.addColorStop(1, 'transparent');
    ctx.fillStyle = auraGrad;
    ctx.beginPath();
    ctx.arc(w * 0.5, h * 0.46, 360, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = `${th.accent}66`;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(w * 0.5, h * 0.46, 315, 0, Math.PI * 2);
    ctx.stroke();

    ctx.setLineDash([14, 10]);
    ctx.strokeStyle = `${th.sub}44`;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(w * 0.5, h * 0.46, 345, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();

    // 2. Top Corner Telemetry Watermarks
    ctx.save();
    ctx.fillStyle = 'rgba(255, 255, 255, 0.55)';
    ctx.font = '700 22px "JetBrains Mono", monospace';
    ctx.fillText(`MWO // ${cit.rank}`, 48, 62);
    ctx.textAlign = 'right';
    ctx.fillStyle = th.accent;
    ctx.fillText('$MAXI VERIFIED', w - 48, 62);
    ctx.restore();

    // 3. Full-Res Background-Removed Maxi Cutout Portrait
    if (img && img.complete && img.naturalWidth > 0) {
      ctx.save();
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;
      const targetBox = 740;
      const scale = Math.min(targetBox / iw, targetBox / ih);
      const dw = iw * scale;
      const dh = ih * scale;

      ctx.shadowColor = 'rgba(0, 0, 0, 0.92)';
      ctx.shadowBlur = 38;
      ctx.shadowOffsetY = 18;
      ctx.drawImage(img, (w - dw) * 0.5, h * 0.47 - dh * 0.5, dw, dh);
      ctx.restore();
    }

    // 4. Bottom Architectural Nameplate & Custom Badge Pill
    const badgeText = (this.pullPfpBadgeText || 'MAXI WORLD ORDER').toUpperCase();
    ctx.save();
    const plateW = 860;
    const plateH = 126;
    const plateX = (w - plateW) * 0.5;
    const plateY = h - 166;

    ctx.fillStyle = 'rgba(6, 9, 16, 0.92)';
    ctx.strokeStyle = th.accent;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.roundRect(plateX, plateY, plateW, plateH, 18);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = th.accent;
    ctx.font = '800 22px "JetBrains Mono", monospace';
    ctx.textAlign = 'center';
    ctx.fillText(`${badgeText} · ${cit.rank}`, w * 0.5, plateY + 42);

    ctx.fillStyle = '#ffffff';
    ctx.font = '900 44px "Syne", "Inter", sans-serif';
    ctx.fillText(cit.name, w * 0.5, plateY + 96);
    ctx.restore();

    // Outer 1000x1000 Precision Border Frame
    ctx.strokeStyle = th.accent;
    ctx.lineWidth = 10;
    ctx.strokeRect(5, 5, w - 10, h - 10);
  }

  downloadPullPfp() {
    this.renderPullPfpCanvas();
    const canvas = document.getElementById('pullPfpCanvas');
    if (!canvas) return;
    const cit = MAXI_CITIZENS[this.activeCitizenIndex] || MAXI_CITIZENS[0];
    const link = document.createElement('a');
    link.download = `MAXI-PFP-${cit.rank.replace('#', '')}-${cit.name.replace(/\s+/g, '-')}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    sfx.playBeep(920, 0.1, 'triangle');
  }

  copyPullPfpToClipboard() {
    this.renderPullPfpCanvas();
    const canvas = document.getElementById('pullPfpCanvas');
    const lbl = document.getElementById('pullCopyPfpLabel');
    if (!canvas) return;

    canvas.toBlob(async (blob) => {
      if (!blob) return;
      try {
        if (navigator.clipboard && window.ClipboardItem) {
          await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
          if (lbl) lbl.textContent = '✓ PFP COPIED TO CLIPBOARD!';
          sfx.playBeep(1040, 0.1, 'triangle');
        } else {
          this.downloadPullPfp();
          if (lbl) lbl.textContent = '✓ DOWNLOADED PNG!';
        }
      } catch (err) {
        this.downloadPullPfp();
        if (lbl) lbl.textContent = '✓ SAVED PNG!';
      }
      setTimeout(() => {
        if (lbl) lbl.textContent = '📋 COPY PFP IMAGE';
      }, 2400);
    }, 'image/png');
  }

  cycleIntroShowcase(step = 1) {
    this.introPreviewIdx = (this.introPreviewIdx + step + MAXI_CITIZENS.length) % MAXI_CITIZENS.length;
    const centerCit = MAXI_CITIZENS[this.introPreviewIdx];
    const leftCit = MAXI_CITIZENS[(this.introPreviewIdx + 36) % MAXI_CITIZENS.length];
    const rightCit = MAXI_CITIZENS[(this.introPreviewIdx + 1) % MAXI_CITIZENS.length];

    const primeRank = document.getElementById('introPrimeRank');
    const primeName = document.getElementById('introPrimeName');
    const primeImg = document.getElementById('intro-logo-front');

    const leftTag = document.getElementById('introSideLeftTag');
    const leftImg = document.getElementById('introSideLeftImg');
    const rightTag = document.getElementById('introSideRightTag');
    const rightImg = document.getElementById('introSideRightImg');

    if (primeRank) primeRank.textContent = centerCit.isOg ? '👑 #001' : centerCit.rank;
    if (primeName) primeName.textContent = centerCit.name;
    if (primeImg) primeImg.src = centerCit.src;

    if (leftTag) leftTag.textContent = `${leftCit.rank} ${leftCit.name.replace(' MAXI', '')}`;
    if (leftImg) leftImg.src = leftCit.src;

    if (rightTag) rightTag.textContent = `${rightCit.rank} ${rightCit.name.replace(' MAXI', '')}`;
    if (rightImg) rightImg.src = rightCit.src;

    sfx.playBeep(780, 0.07, 'triangle');
  }

  updateMarqueeStatus(text) {
    const statusEl = document.getElementById('clawStatusReadout');
    if (statusEl) statusEl.textContent = text;
  }

  updateSideHudReadouts(citizen) {
    const cit = citizen || MAXI_CITIZENS[this.activeCitizenIndex] || MAXI_CITIZENS[0];
    const cardSprite = document.getElementById('cardMaxiSprite');
    const cardKicker = document.getElementById('cardKicker');
    const cardTitle = document.getElementById('cardTitle');
    const quoteEl = document.getElementById('maxiLiveQuote');
    const hudActiveTarget = document.getElementById('hudActiveTarget');

    if (cardSprite) cardSprite.src = cit.src;
    if (cardKicker) cardKicker.textContent = `${cit.rank} · ${cit.title.replace(/^[👑★]\s*/, '')}`;
    if (cardTitle) cardTitle.textContent = cit.name;
    if (quoteEl) quoteEl.innerHTML = cit.lore;
    if (hudActiveTarget) hudActiveTarget.textContent = `${cit.rank} ${cit.name}`;

    document.querySelectorAll('.roster-chip').forEach((chip) => {
      const isMatch = Number(chip.dataset.idx) === this.activeCitizenIndex;
      chip.classList.toggle('active', isMatch);
    });
  }

  selectCitizen(idx, triggerDrop = false) {
    this.activeCitizenIndex = (idx + MAXI_CITIZENS.length) % MAXI_CITIZENS.length;
    const cit = MAXI_CITIZENS[this.activeCitizenIndex];
    sfx.playBeep(cit.isOg ? 980 : 760, 0.08, 'triangle');

    // Find this citizen in the 3D pile, or spawn a 3D Standee for them right on top of the pile!
    let targetItem = this.pileItems.find(
      (it) => it.citizenIndex === this.activeCitizenIndex && !it.extracted
    );
    if (!targetItem && this.pileGroup) {
      const b = this.tankBounds;
      const scale = cit.isOg ? 1.24 : cit.isMythic ? 1.12 : 1.04;
      const radius = 12.2 * scale;
      const x = (b.pitMinX + b.pitMaxX) * 0.5 + (Math.random() - 0.5) * 35;
      const z = (Math.random() - 0.5) * 30;
      const y = b.floorY + radius + 16;

      const mesh = this.create3DMaxiStandeeMesh(cit, scale);
      mesh.position.set(x, y, z);
      this.pileGroup.add(mesh);

      targetItem = {
        uid: `${cit.rank}-${Date.now()}`,
        citizenIndex: this.activeCitizenIndex,
        cit,
        mesh,
        x,
        y,
        z,
        vx: 0,
        vy: 0,
        vz: 0,
        r: radius,
        rotX: 0,
        rotZ: 0,
        rotY: 0,
        inChute: false,
        extracted: false
      };
      this.pileItems.push(targetItem);
    }

    if (this.claw.state === 'IDLE' && targetItem) {
      this.claw.targetX = Math.max(
        this.tankBounds.pitMinX + 6,
        Math.min(this.tankBounds.pitMaxX - 6, targetItem.x)
      );
      this.claw.targetZ = Math.max(
        this.tankBounds.minZ + 6,
        Math.min(this.tankBounds.maxZ - 6, targetItem.z)
      );
      if (triggerDrop) {
        setTimeout(() => this.triggerClawDrop(), 280);
      }
    }

    this.updateSideHudReadouts(cit);
    const laserEl = document.getElementById('clawLaserReadout');
    if (laserEl) {
      laserEl.textContent = `3D LASER LOCK // ${cit.rank} ${cit.name}`;
    }
  }

  triggerClawDrop() {
    if (this.state === 'ORBIT') {
      this.startZoomSequence();
      return;
    }
    const overlay = document.getElementById('pullRevealOverlay');
    if (overlay && !overlay.classList.contains('hidden')) {
      overlay.classList.add('hidden');
    }

    if (this.claw.state !== 'IDLE') return;

    const b = this.tankBounds;
    if (this.claw.x < b.pitMinX) {
      this.claw.targetX = 20;
      this.claw.x = 20;
    }

    this.claw.state = 'DROPPING';
    this.claw.stateTimer = 0;
    this.claw.targetJaw = 0.66;
    this.claw.grabbedItem = null;

    sfx.playBeep(620, 0.09, 'sawtooth');
    setTimeout(() => sfx.playBeep(440, 0.12, 'sawtooth'), 70);
    this.updateMarqueeStatus('DESCENDING // 3D HYDRAULIC TALONS DEPLOYED');
  }

  triggerExtractionReveal(item) {
    if (!item || !item.cit) return;
    const cit = item.cit;
    this.activeCitizenIndex = item.citizenIndex;
    this.extractedSet.add(cit.rank);

    sfx.playArrivalChord();
    this.updateSideHudReadouts(cit);

    const countEl = document.getElementById('clawExtractedCount');
    if (countEl) {
      countEl.textContent = `EXTRACTED: ${this.extractedSet.size} / ${MAXI_CITIZENS.length}`;
    }

    const overlay = document.getElementById('pullRevealOverlay');
    const tierEl = document.getElementById('pullRevealTier');
    const rankEl = document.getElementById('pullRevealRank');
    const nameEl = document.getElementById('pullRevealName');
    const titleEl = document.getElementById('pullRevealTitle');
    const loreEl = document.getElementById('pullRevealLore');
    const shareXEl = document.getElementById('pullShareXLink');
    const dlEl = document.getElementById('pullDownloadLink');

    if (tierEl) {
      tierEl.textContent = cit.isOg
        ? 'SOVEREIGN JACKPOT // #001'
        : cit.isMythic
        ? '1-OF-1 MWO MYTHIC PULL'
        : 'VERIFIED MWO CITIZEN';
    }
    if (rankEl) rankEl.textContent = `CITIZEN ${cit.rank} / 100`;
    if (nameEl) nameEl.textContent = cit.name;
    if (titleEl) titleEl.textContent = cit.title.replace(/^[👑★]\s*/, '');
    if (loreEl) loreEl.textContent = cit.lore.replace(/&quot;/g, '"');
    if (dlEl) {
      dlEl.href = cit.src;
      dlEl.download = `MAXI-CUTOUT-${cit.rank.replace('#', '')}-${cit.name.replace(/\s+/g, '-')}.png`;
    }
    if (shareXEl) {
      const tweetText = `Just clawed ${cit.rank} ${cit.name} (${cit.title.replace(/^[👑★]\s*/, '')}) out of the 3D MAXI WORLD ORDER Vault Claw Machine & minted my PFP 🦾🌍\n\n$MAXI CA: EBCpGdXuS34WZuX13thrku2KmuLSe3Tf2gMtMKndpump\n@maxiworldorder`;
      shareXEl.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    }

    // Immediately forge the 1000x1000 High-Res PFP on the Reveal Modal Canvas!
    this.renderPullPfpCanvas();

    if (overlay) {
      overlay.classList.remove('hidden');
    }

    this.updateMarqueeStatus(`EXTRACTED ${cit.rank} ${cit.name} // 1000×1000 PFP READY TO SAVE`);
  }

  toggleOverdriveMode() {
    this.isOverdrive = !this.isOverdrive;
    document.body.classList.toggle('mwo-overdrive', this.isOverdrive);

    const navLbl = document.getElementById('overdriveNavLabel');
    const stageLbl = document.getElementById('overdriveStageLabel');

    if (this.isOverdrive) {
      this.targetWarpSpeed = 9.5;
      if (this.atmoMesh) {
        this.atmoMesh.material.color.setHex(0x34d399);
        this.atmoMesh.material.opacity = 0.25;
      }
      if (this.goldTrimMat) {
        this.goldTrimMat.color.setHex(0x34d399);
        this.goldTrimMat.emissive.setHex(0x34d399);
      }
      if (navLbl) navLbl.textContent = 'OVERDRIVE: ON';
      if (stageLbl) stageLbl.textContent = 'OVERDRIVE: ON';
      this.updateMarqueeStatus('MWO OVERDRIVE // HIGH-TORQUE GREEN CANDLE 3D CLAW');

      sfx.playBeep(523.25, 0.12, 'sawtooth');
      setTimeout(() => sfx.playBeep(659.25, 0.14, 'sawtooth'), 70);
      setTimeout(() => sfx.playBeep(1046.5, 0.22, 'triangle'), 140);
    } else {
      this.targetWarpSpeed = 1.5;
      if (this.atmoMesh) {
        this.atmoMesh.material.color.setHex(0x38bdf8);
        this.atmoMesh.material.opacity = 0.16;
      }
      if (this.goldTrimMat) {
        this.goldTrimMat.color.setHex(0xe5b869);
        this.goldTrimMat.emissive.setHex(0xe5b869);
      }
      if (navLbl) navLbl.textContent = 'OVERDRIVE';
      if (stageLbl) stageLbl.textContent = 'OVERDRIVE';
      this.updateMarqueeStatus('3D GANTRY ARMED // 100 UNIQUE CITIZENS LOADED');
      sfx.playBeep(440, 0.09, 'sine');
    }
  }

  startZoomSequence() {
    if (this.state === 'LOCKED') {
      this.spawnClawPile(true);
      return;
    }

    if (this.introScreen) this.introScreen.classList.add('warp-exit');
    document.body.classList.remove('intro-locked');
    if (this.mainNavbar) this.mainNavbar.classList.remove('nav-hidden');
    if (this.diveHudLayer) this.diveHudLayer.classList.remove('hud-hidden');
    if (this.bottomCaBar) this.bottomCaBar.classList.remove('hud-hidden');
    if (this.clawCabinetStage) this.clawCabinetStage.classList.remove('cabinet-hidden');

    this.state = 'LOCKED';
    this.targetWarpSpeed = 2.0;

    sfx.playWarpSound();
    setTimeout(() => {
      this.resizeCanvases();
      this.spawnClawPile(false);
    }, 60);
  }

  resetToOrbit(autoReplay = false) {
    if (autoReplay) {
      this.spawnClawPile(true);
    } else {
      this.returnToIntroGate();
    }
  }

  returnToIntroGate() {
    sfx.playHoverSound();
    this.state = 'ORBIT';
    this.targetWarpSpeed = 1.5;

    const overlay = document.getElementById('pullRevealOverlay');
    if (overlay) overlay.classList.add('hidden');

    if (this.clawCabinetStage) this.clawCabinetStage.classList.add('cabinet-hidden');
    if (this.introScreen) this.introScreen.classList.remove('warp-exit');
    document.body.classList.add('intro-locked');
    if (this.mainNavbar) this.mainNavbar.classList.add('nav-hidden');
    if (this.diveHudLayer) this.diveHudLayer.classList.add('hud-hidden');
    if (this.bottomCaBar) this.bottomCaBar.classList.add('hud-hidden');
  }

  initWarpParticles() {
    const w = window.innerWidth || 1440;
    const h = window.innerHeight || 900;
    this.particles.length = 0;
    for (let i = 0; i < 200; i++) {
      const isStar = i % 4 === 0;
      const z = Math.random() * w;
      this.particles.push({
        x: (Math.random() - 0.5) * w * 2.1,
        y: (Math.random() - 0.5) * h * 2.1,
        z,
        pz: z,
        isStar,
        angle: Math.random() * Math.PI * 2,
        spinSpeed: (Math.random() - 0.5) * 0.03,
        color: this.starColors[Math.floor(Math.random() * this.starColors.length)],
        size: isStar ? Math.random() * 2.6 + 1.4 : Math.random() * 1.6 + 0.5
      });
    }
  }

  resizeCanvases() {
    const w = this.stageContainer ? this.stageContainer.clientWidth : window.innerWidth;
    const h = this.stageContainer ? this.stageContainer.clientHeight : window.innerHeight;
    if (this.spaceCanvas) {
      this.spaceCanvas.width = w;
      this.spaceCanvas.height = h;
    }
    if (this.fxCanvas) {
      this.fxCanvas.width = w;
      this.fxCanvas.height = h;
    }
    if (this.renderer && this.camera) {
      this.renderer.setSize(w, h);
      this.camera.aspect = w / h;
      this.camera.updateProjectionMatrix();
    }

    if (this.clawRenderer && this.clawCamera && this.clawGlassBay) {
      const rect = this.clawGlassBay.getBoundingClientRect();
      const bayW = Math.max(320, Math.floor(rect.width || 980));
      const bayH = Math.max(260, Math.floor(rect.height || 520));

      this.bayW = bayW;
      this.bayH = bayH;
      this.clawRenderer.setSize(bayW, bayH, false);
      this.clawCamera.aspect = bayW / bayH;
      // Widen FOV slightly on portrait mobile screens so the entire 3D tank fits comfortably
      this.clawCamera.fov = bayW < 640 ? 48 : 37;
      this.clawCamera.updateProjectionMatrix();
    }
  }

  /* -----------------------------------------------------------------------
     E. 3D RIGID-BODY PHYSICS & 3-PRONG HYDRAULIC CLAW STATE MACHINE
     ----------------------------------------------------------------------- */
  update3DClawAndPilePhysics(dt, timeSec) {
    const b = this.tankBounds;
    const claw = this.claw;
    const prevX = claw.x;
    const prevZ = claw.z;
    const speedXZ = this.isOverdrive ? 105 : 76;

    // 1. Update 3D Claw Gantry X / Y / Z & 3-Prong Jaw Articulation
    if (claw.state === 'IDLE') {
      if (claw.moveDirX !== 0) {
        claw.targetX = Math.max(
          b.pitMinX + 4,
          Math.min(b.pitMaxX - 4, claw.targetX + claw.moveDirX * speedXZ * dt)
        );
      }
      if (claw.moveDirZ !== 0) {
        claw.targetZ = Math.max(
          b.minZ + 8,
          Math.min(b.maxZ - 8, claw.targetZ + claw.moveDirZ * speedXZ * dt)
        );
      }

      claw.x += (claw.targetX - claw.x) * Math.min(1, dt * 12);
      claw.z += (claw.targetZ - claw.z) * Math.min(1, dt * 12);
      claw.y += (claw.homeY - claw.y) * Math.min(1, dt * 10);
      claw.targetJaw = 0.58;

      // Find nearest 3D Standee under the 3D Laser Sight
      let nearest = null;
      let bestDist = 9999;
      for (let i = 0; i < this.pileItems.length; i++) {
        const it = this.pileItems[i];
        if (it.extracted || it.inChute) continue;
        const dXZ = Math.hypot(it.x - claw.x, it.z - claw.z);
        if (dXZ < it.r * 1.3 && dXZ < bestDist) {
          bestDist = dXZ;
          nearest = it;
        }
      }

      const laserEl = document.getElementById('clawLaserReadout');
      if (laserEl) {
        if (nearest) {
          laserEl.textContent = `3D LASER LOCK // ${nearest.cit.rank} ${nearest.cit.name}`;
        } else {
          const pctX = Math.round(((claw.x - b.minX) / (b.maxX - b.minX)) * 100);
          const pctZ = Math.round(((claw.z - b.minZ) / (b.maxZ - b.minZ)) * 100);
          laserEl.textContent = `3D GANTRY X=${pctX}% Z=${pctZ}% // READY`;
        }
      }

      const altEl = document.getElementById('hudAltitude');
      const barEl = document.getElementById('hudZoomBar');
      const pct = Math.round(((claw.x - b.minX) / (b.maxX - b.minX)) * 100);
      if (altEl) altEl.textContent = `${pct}%`;
      if (barEl) barEl.style.width = `${pct}%`;
    } else if (claw.state === 'DROPPING') {
      const dropSpeed = this.isOverdrive ? 120 : 92;
      claw.y -= dropSpeed * dt;
      claw.targetJaw = 0.65;

      const grabTipY = claw.y - 16;

      let hitCandidate = null;
      let minDist = 9999;
      for (let i = 0; i < this.pileItems.length; i++) {
        const it = this.pileItems[i];
        if (it.extracted || it.inChute) continue;
        const dist3D = Math.hypot(it.x - claw.x, it.y - grabTipY, it.z - claw.z);
        if (dist3D <= it.r * 1.15 && dist3D < minDist) {
          minDist = dist3D;
          hitCandidate = it;
        }
      }

      if (hitCandidate || claw.y <= b.floorY + 25) {
        claw.state = 'CLAMPING';
        claw.stateTimer = 0;
        claw.targetJaw = 0.16;

        // Magnetic 3D Talon Reach Assist so the claw feels rewarding & accurate
        if (!hitCandidate) {
          for (let i = 0; i < this.pileItems.length; i++) {
            const it = this.pileItems[i];
            if (it.extracted || it.inChute) continue;
            const dXZ = Math.hypot(it.x - claw.x, it.z - claw.z);
            if (dXZ <= it.r * 1.65 && dXZ < minDist) {
              minDist = dXZ;
              hitCandidate = it;
            }
          }
        }

        if (hitCandidate) {
          claw.grabbedItem = hitCandidate;
          sfx.playBeep(880, 0.09, 'triangle');
          this.updateMarqueeStatus(`3D TALONS LOCKED // ${hitCandidate.cit.rank} ${hitCandidate.cit.name}`);
        } else {
          sfx.playBeep(300, 0.09, 'sine');
          this.updateMarqueeStatus('CLAMP MISSED // RETRACTING 3D GANTRY');
        }
      }
    } else if (claw.state === 'CLAMPING') {
      claw.stateTimer += dt;
      claw.targetJaw = claw.grabbedItem ? 0.18 : 0.12;
      if (claw.grabbedItem) {
        claw.grabbedItem.x += (claw.x - claw.grabbedItem.x) * 0.35;
        claw.grabbedItem.y += (claw.y - 16 - claw.grabbedItem.y) * 0.35;
        claw.grabbedItem.z += (claw.z - claw.grabbedItem.z) * 0.35;
      }
      if (claw.stateTimer >= 0.34) {
        claw.state = 'HOISTING';
        claw.stateTimer = 0;
        sfx.playBeep(660, 0.08, 'sine');
      }
    } else if (claw.state === 'HOISTING') {
      const hoistSpeed = this.isOverdrive ? 105 : 82;
      claw.y += hoistSpeed * dt;
      if (claw.y >= claw.homeY) {
        claw.y = claw.homeY;
        if (claw.grabbedItem) {
          claw.state = 'CARRYING';
          claw.stateTimer = 0;
          this.updateMarqueeStatus(`CARRYING ${claw.grabbedItem.cit.rank} TO 3D EXTRACTION CHUTE`);
        } else {
          claw.state = 'IDLE';
          claw.targetJaw = 0.58;
          this.updateMarqueeStatus('3D GANTRY READY // AIM & DROP CLAW');
        }
      }
    } else if (claw.state === 'CARRYING') {
      const chuteTargetX = (b.minX + b.chuteMaxX) * 0.5;
      const chuteTargetZ = 0;
      const carrySpeed = this.isOverdrive ? 96 : 72;

      const dx = chuteTargetX - claw.x;
      const dz = chuteTargetZ - claw.z;
      const dist = Math.hypot(dx, dz);

      if (dist > 2.5) {
        const step = Math.min(dist, carrySpeed * dt);
        claw.x += (dx / dist) * step;
        claw.z += (dz / dist) * step;
        claw.targetX = claw.x;
        claw.targetZ = claw.z;
      } else {
        claw.state = 'RELEASING';
        claw.stateTimer = 0;
        claw.targetJaw = 0.68;
        if (claw.grabbedItem) {
          claw.grabbedItem.inChute = true;
          claw.grabbedItem.vx = 0;
          claw.grabbedItem.vz = 0;
          claw.grabbedItem.vy = -45;
          claw.grabbedItem = null;
        }
        sfx.playBeep(990, 0.1, 'triangle');
      }
    } else if (claw.state === 'RELEASING') {
      claw.stateTimer += dt;
      claw.targetJaw = 0.68;
      if (claw.stateTimer >= 0.45) {
        claw.state = 'IDLE';
        claw.targetX = 18;
        claw.targetZ = 0;
      }
    }

    // Smooth 3D Pendulum Cable Swing & Finger Articulation
    claw.jawAngle += (claw.targetJaw - claw.jawAngle) * Math.min(1, dt * 14);
    const vx = (claw.x - prevX) / Math.max(0.001, dt);
    const vz = (claw.z - prevZ) / Math.max(0.001, dt);
    claw.velX = claw.velX * 0.88 + (-vx * 0.003 - claw.swingX * 14) * dt;
    claw.velZ = claw.velZ * 0.88 + (-vz * 0.003 - claw.swingZ * 14) * dt;
    claw.swingX = Math.max(-0.32, Math.min(0.32, claw.swingX + claw.velX));
    claw.swingZ = Math.max(-0.32, Math.min(0.32, claw.swingZ + claw.velZ));

    // Apply Transforms to 3D Gantry Bridge, Trolley, Hoist Cable, & 3-Prong Claw
    if (this.gantryBridgeGroup && this.trolleyGroup && this.clawHeadGroup && this.cableMesh) {
      this.gantryBridgeGroup.position.x = claw.x;
      this.trolleyGroup.position.set(claw.x, b.railY, claw.z);

      const hubX = claw.x + Math.sin(claw.swingX) * 6;
      const hubZ = claw.z + Math.sin(claw.swingZ) * 6;
      this.clawHeadGroup.position.set(hubX, claw.y, hubZ);
      this.clawHeadGroup.rotation.z = claw.swingX;
      this.clawHeadGroup.rotation.x = -claw.swingZ;

      const cableLen = Math.max(2, b.railY - claw.y);
      this.cableMesh.scale.set(1, cableLen, 1);
      this.cableMesh.position.set(
        (claw.x + hubX) * 0.5,
        claw.y + cableLen * 0.5,
        (claw.z + hubZ) * 0.5
      );

      // Rotate all 3 articulated hydraulic fingers
      for (let f = 0; f < this.clawFingers.length; f++) {
        this.clawFingers[f].rotation.z = claw.jawAngle - 0.35;
      }

      // Update 3D Vertical Laser Sight & Floor Reticle
      const showLaser = claw.state === 'IDLE' || claw.state === 'DROPPING';
      if (this.laserBeamMesh && this.floorReticleMesh) {
        this.laserBeamMesh.visible = showLaser;
        this.floorReticleMesh.visible = showLaser;
        if (showLaser) {
          const laserLen = Math.max(4, claw.y - b.floorY - 4);
          this.laserBeamMesh.scale.set(1, laserLen / 120, 1);
          this.laserBeamMesh.position.set(hubX, b.floorY + laserLen * 0.5, hubZ);
          this.floorReticleMesh.position.set(hubX, b.floorY + 0.5, hubZ);
          this.floorReticleMesh.rotation.z = timeSec * 1.8;
        }
      }
    }

    if (claw.grabbedItem) {
      const it = claw.grabbedItem;
      it.x = this.clawHeadGroup.position.x;
      it.y = this.clawHeadGroup.position.y - 16.5;
      it.z = this.clawHeadGroup.position.z;
      it.vx = 0;
      it.vy = 0;
      it.vz = 0;
      it.rotZ = claw.swingX * 0.8;
      it.rotX = -claw.swingZ * 0.8;
    }

    // 2. 3D Rigid-Body Sphere-Standee Physics in the Containment Pit
    const gravity = -240 * dt;
    for (let i = 0; i < this.pileItems.length; i++) {
      const it = this.pileItems[i];
      if (it.extracted || it === claw.grabbedItem) continue;

      it.vy += gravity;
      it.x += it.vx * dt;
      it.y += it.vy * dt;
      it.z += it.vz * dt;

      it.vx *= 0.92;
      it.vy *= 0.95;
      it.vz *= 0.92;

      // Self-righting torque so 3D Standees stand naturally on their collector bases
      it.rotX *= 0.92;
      it.rotZ *= 0.92;
      it.rotY *= 0.96;

      if (it.inChute || it.x < b.chuteMaxX) {
        // Inside Left 3D Extraction Chute Well
        if (it.x - it.r < b.minX + 4) {
          it.x = b.minX + 4 + it.r;
          it.vx = Math.abs(it.vx) * 0.3;
        }
        if (it.x + it.r > b.chuteMaxX - 3) {
          it.x = b.chuteMaxX - 3 - it.r;
          it.vx = -Math.abs(it.vx) * 0.3;
        }
        if (it.y < b.floorY - 12 && !it.extracted) {
          it.extracted = true;
          if (it.mesh && this.pileGroup) {
            this.pileGroup.remove(it.mesh);
          }
          this.triggerExtractionReveal(it);
        }
      } else {
        // Inside Main 3D Containment Pit
        const restY = b.floorY + it.r * 0.95;
        if (it.y < restY) {
          it.y = restY;
          it.vy = -Math.abs(it.vy) * 0.18;
          it.vx *= 0.82;
          it.vz *= 0.82;
        }
        if (it.x + it.r > b.pitMaxX) {
          it.x = b.pitMaxX - it.r;
          it.vx = -Math.abs(it.vx) * 0.4;
        }
        if (it.z - it.r < b.minZ) {
          it.z = b.minZ + it.r;
          it.vz = Math.abs(it.vz) * 0.4;
        }
        if (it.z + it.r > b.maxZ) {
          it.z = b.maxZ - it.r;
          it.vz = -Math.abs(it.vz) * 0.4;
        }
        // Chute Divider Wall Collision
        if (it.y - it.r < b.floorY + b.dividerHeight && it.x - it.r < b.chuteMaxX + 4) {
          it.x = b.chuteMaxX + 4 + it.r;
          it.vx = Math.abs(it.vx) * 0.4 + 4;
        }
      }
    }

    // 3. 3D Pairwise Standee Collision Resolution
    for (let pass = 0; pass < 3; pass++) {
      for (let i = 0; i < this.pileItems.length; i++) {
        const a = this.pileItems[i];
        if (a.extracted || a.inChute || a === claw.grabbedItem) continue;

        for (let j = i + 1; j < this.pileItems.length; j++) {
          const bItem = this.pileItems[j];
          if (bItem.extracted || bItem.inChute || bItem === claw.grabbedItem) continue;

          const dx = bItem.x - a.x;
          const dy = bItem.y - a.y;
          const dz = bItem.z - a.z;
          const distSq = dx * dx + dy * dy + dz * dz;
          const minDist = (a.r + bItem.r) * 0.82;

          if (distSq > 0.0001 && distSq < minDist * minDist) {
            const dist = Math.sqrt(distSq);
            const overlap = (minDist - dist) * 0.5;
            const nx = dx / dist;
            const ny = dy / dist;
            const nz = dz / dist;

            a.x -= nx * overlap;
            a.y -= ny * overlap;
            a.z -= nz * overlap;
            bItem.x += nx * overlap;
            bItem.y += ny * overlap;
            bItem.z += nz * overlap;

            const aRestY = b.floorY + a.r * 0.95;
            const bRestY = b.floorY + bItem.r * 0.95;
            if (a.y < aRestY) a.y = aRestY;
            if (bItem.y < bRestY) bItem.y = bRestY;

            // Slight natural tilt on contact
            a.rotZ = Math.max(-0.28, Math.min(0.28, a.rotZ - nx * 0.02));
            bItem.rotZ = Math.max(-0.28, Math.min(0.28, bItem.rotZ + nx * 0.02));
          }
        }
      }
    }

    // Sync 3D Mesh Positions & Orientations
    for (let i = 0; i < this.pileItems.length; i++) {
      const it = this.pileItems[i];
      if (!it.mesh || it.extracted) continue;
      it.mesh.position.set(it.x, it.y, it.z);
      it.mesh.rotation.set(it.rotX, it.rotY, it.rotZ);
    }

    if (this.pileItems.some((it) => it.extracted)) {
      this.pileItems = this.pileItems.filter((it) => !it.extracted);
      if (this.pileItems.length < 8) {
        this.spawnClawPile(false);
      }
    }
  }

  render3DClawScene() {
    if (!this.clawRenderer || !this.clawScene || !this.clawCamera) return;

    // Smooth 3D Camera Parallax & Gantry Tracking
    const followX = this.claw.x * 0.14;
    this.camYaw += (this.targetCamYaw - this.camYaw) * 0.08;
    this.camPitch += (this.targetCamPitch - this.camPitch) * 0.08;

    const radius = 232;
    const camX = followX + Math.sin(this.camYaw) * radius;
    const camY = 14 + Math.sin(this.camPitch) * 95;
    const camZ = Math.cos(this.camYaw) * Math.cos(this.camPitch) * radius;

    this.clawCamera.position.set(camX, camY, camZ);
    this.clawCamera.lookAt(followX * 0.5, -10, 0);

    this.clawRenderer.render(this.clawScene, this.clawCamera);
  }

  drawSpaceBackdrop() {
    if (!this.spaceCtx || !this.spaceCanvas) return;
    const ctx = this.spaceCtx;
    const w = this.spaceCanvas.width;
    const h = this.spaceCanvas.height;

    this.baseWarpSpeed += (this.targetWarpSpeed - this.baseWarpSpeed) * 0.08;

    ctx.save();
    ctx.fillStyle = 'rgba(3, 4, 8, 0.55)';
    ctx.fillRect(0, 0, w, h);

    const cx = w / 2 + this.mouseX;
    const cy = h / 2 + this.mouseY;

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.pz = p.z;
      p.z -= this.baseWarpSpeed * 3.5;

      if (p.z <= 1) {
        p.x = (Math.random() - 0.5) * w * 2.1;
        p.y = (Math.random() - 0.5) * h * 2.1;
        p.z = w;
        p.pz = p.z;
      }

      const sx = (p.x / p.z) * (w * 0.6) + cx;
      const sy = (p.y / p.z) * (h * 0.6) + cy;
      const px = (p.x / p.pz) * (w * 0.6) + cx;
      const py = (p.y / p.pz) * (h * 0.6) + cy;

      const depthRatio = 1 - p.z / w;
      const alpha = Math.min(1, depthRatio * 1.15);
      const radius = Math.max(0.4, depthRatio * p.size * 1.5);

      ctx.beginPath();
      ctx.strokeStyle = p.color;
      ctx.globalAlpha = alpha * 0.7;
      ctx.lineWidth = radius * 0.75;
      ctx.moveTo(px, py);
      ctx.lineTo(sx, sy);
      ctx.stroke();
    }
    ctx.restore();
  }

  drawAtmosphericDiveFX(timeSec) {
    if (!this.fxCtx || !this.fxCanvas) return;
    const ctx = this.fxCtx;
    const w = this.fxCanvas.width;
    const h = this.fxCanvas.height;
    ctx.clearRect(0, 0, w, h);

    if (this.isOverdrive) {
      ctx.save();
      const candleCount = 12;
      for (let i = 0; i < candleCount; i++) {
        const xNorm = (i * 0.61803398875) % 1;
        const x = (0.04 + xNorm * 0.92) * w;
        const speed = 180 + (i % 5) * 85;
        const y = h - ((timeSec * speed + i * 190) % (h + 260));
        const candleH = 44 + (i % 4) * 28;

        ctx.strokeStyle = 'rgba(52, 211, 153, 0.30)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x, y - 16);
        ctx.lineTo(x, y + candleH + 16);
        ctx.stroke();

        const cGrad = ctx.createLinearGradient(x, y, x, y + candleH);
        cGrad.addColorStop(0, 'rgba(52, 211, 153, 0.50)');
        cGrad.addColorStop(1, 'rgba(52, 211, 153, 0.06)');
        ctx.fillStyle = cGrad;
        ctx.fillRect(x - 2.5, y, 5, candleH);
      }
      ctx.restore();
    }
  }

  bindEvents() {
    window.addEventListener('resize', () => this.resizeCanvases());

    const enterBtn = document.getElementById('enter-btn');
    if (enterBtn) enterBtn.addEventListener('click', () => this.startZoomSequence());

    // Opening Gate Interactive 100-Cutout Showcase Cyclers
    const introCycleBtns = [
      document.getElementById('introCycleCitizenBtn'),
      document.getElementById('introPrimeCard'),
      document.getElementById('introSideRightCard')
    ];
    introCycleBtns.forEach((btn) => {
      if (btn) {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          this.cycleIntroShowcase(1);
        });
      }
    });
    const introLeftCard = document.getElementById('introSideLeftCard');
    if (introLeftCard) {
      introLeftCard.addEventListener('click', (e) => {
        e.preventDefault();
        this.cycleIntroShowcase(-1);
      });
    }

    const replayDiveObjs = [
      document.getElementById('triggerZoomBtn'),
      document.getElementById('cycleBiomeBtn')
    ];
    replayDiveObjs.forEach((btn) => {
      if (btn) btn.addEventListener('click', () => this.spawnClawPile(true));
    });

    // 3D Claw Machine Control Deck Buttons (X & Z Gantry + Drop Trigger)
    const leftBtn = document.getElementById('clawMoveLeftBtn');
    const rightBtn = document.getElementById('clawMoveRightBtn');
    const backBtn = document.getElementById('clawMoveBackBtn');
    const fwdBtn = document.getElementById('clawMoveFwdBtn');
    const dropBtn = document.getElementById('clawDropBtn');
    const aimOgBtn = document.getElementById('clawAimOgBtn');
    const snapOgBtn = document.getElementById('snapOgBtn');
    const focusOgBtn = document.getElementById('focusOgBtn');
    const shuffleBtn = document.getElementById('clawShuffleBtn');

    const bindHoldAxis = (btn, axis, dir) => {
      if (!btn) return;
      const startMove = (e) => {
        e.preventDefault();
        if (this.claw.state === 'IDLE') {
          if (axis === 'x') this.claw.moveDirX = dir;
          else this.claw.moveDirZ = dir;
          sfx.playBeep(dir < 0 ? 480 : 540, 0.04, 'sine');
        }
      };
      const stopMove = () => {
        if (axis === 'x' && this.claw.moveDirX === dir) this.claw.moveDirX = 0;
        if (axis === 'z' && this.claw.moveDirZ === dir) this.claw.moveDirZ = 0;
      };
      btn.addEventListener('pointerdown', startMove);
      window.addEventListener('pointerup', stopMove);
      btn.addEventListener('pointerleave', stopMove);
    };

    bindHoldAxis(leftBtn, 'x', -1);
    bindHoldAxis(rightBtn, 'x', 1);
    bindHoldAxis(backBtn, 'z', -1);
    bindHoldAxis(fwdBtn, 'z', 1);

    if (dropBtn) {
      dropBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.triggerClawDrop();
      });
    }

    [aimOgBtn, snapOgBtn, focusOgBtn].forEach((btn) => {
      if (btn) {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          this.selectCitizen(0, true);
        });
      }
    });

    if (shuffleBtn) {
      shuffleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.spawnClawPile(true);
      });
    }

    // Direct 3D Aiming & Camera Parallax on the Glass Bay
    if (this.clawGlassBay) {
      let isAimingGlass = false;
      const b = this.tankBounds;
      const update3DAimFromPointer = (clientX, clientY) => {
        const rect = this.clawGlassBay.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        const relX = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
        const relY = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));

        // Subtle 3D camera parallax tilt as you move across the glass
        this.targetCamYaw = (relX - 0.5) * 0.28;
        this.targetCamPitch = 0.12 + (0.5 - relY) * 0.16;

        if (this.claw.state === 'IDLE') {
          this.claw.targetX = Math.max(
            b.pitMinX + 4,
            Math.min(b.pitMaxX - 4, b.minX + relX * (b.maxX - b.minX))
          );
          this.claw.targetZ = Math.max(
            b.minZ + 6,
            Math.min(b.maxZ - 6, b.minZ + relY * (b.maxZ - b.minZ))
          );
        }
      };

      this.clawGlassBay.addEventListener('pointerdown', (e) => {
        if (e.target.closest('.pull-reveal-overlay')) return;
        isAimingGlass = true;
        update3DAimFromPointer(e.clientX, e.clientY);
      });

      window.addEventListener('pointermove', (e) => {
        if (!isAimingGlass) return;
        update3DAimFromPointer(e.clientX, e.clientY);
      });

      window.addEventListener('pointerup', () => {
        isAimingGlass = false;
      });
    }

    // Live 1000x1000 PFP Forger Controls inside the Pull Reveal Card
    const themeStrip = document.getElementById('pullPfpThemeStrip');
    if (themeStrip) {
      themeStrip.querySelectorAll('.pull-theme-chip').forEach((chip) => {
        chip.addEventListener('click', () => {
          themeStrip.querySelectorAll('.pull-theme-chip').forEach((c) => c.classList.remove('active'));
          chip.classList.add('active');
          this.pullPfpTheme = chip.dataset.pullBg || 'OBSIDIAN';
          sfx.playBeep(760, 0.06, 'triangle');
          this.renderPullPfpCanvas();
        });
      });
    }

    const badgeInput = document.getElementById('pullCustomBadgeInput');
    if (badgeInput) {
      badgeInput.addEventListener('input', () => {
        this.pullPfpBadgeText = badgeInput.value;
        this.renderPullPfpCanvas();
      });
    }

    const savePfpBtn = document.getElementById('pullSavePfpBtn');
    if (savePfpBtn) {
      savePfpBtn.addEventListener('click', () => this.downloadPullPfp());
    }

    const copyPfpBtn = document.getElementById('pullCopyPfpBtn');
    if (copyPfpBtn) {
      copyPfpBtn.addEventListener('click', () => this.copyPullPfpToClipboard());
    }

    const closePullBtn = document.getElementById('closePullRevealBtn');
    const pullAgainBtn = document.getElementById('pullAgainBtn');
    [closePullBtn, pullAgainBtn].forEach((btn) => {
      if (btn) {
        btn.addEventListener('click', () => {
          const overlay = document.getElementById('pullRevealOverlay');
          if (overlay) overlay.classList.add('hidden');
          sfx.playBeep(640, 0.06, 'sine');
        });
      }
    });

    // Keyboard 3D Arcade Controls (WASD / Arrow Keys + Spacebar)
    window.addEventListener('keydown', (e) => {
      if (this.state !== 'LOCKED') return;
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
      const anyModalOpen = document.querySelector('.suite-modal:not(.hidden)');
      if (anyModalOpen) return;

      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        this.claw.moveDirX = -1;
      } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        this.claw.moveDirX = 1;
      } else if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') {
        e.preventDefault();
        this.claw.moveDirZ = -1;
      } else if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') {
        e.preventDefault();
        this.claw.moveDirZ = 1;
      } else if (e.key === ' ') {
        e.preventDefault();
        this.triggerClawDrop();
      }
    });

    window.addEventListener('keyup', (e) => {
      if (
        (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') &&
        this.claw.moveDirX === -1
      ) {
        this.claw.moveDirX = 0;
      } else if (
        (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') &&
        this.claw.moveDirX === 1
      ) {
        this.claw.moveDirX = 0;
      } else if (
        (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') &&
        this.claw.moveDirZ === -1
      ) {
        this.claw.moveDirZ = 0;
      } else if (
        (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') &&
        this.claw.moveDirZ === 1
      ) {
        this.claw.moveDirZ = 0;
      }
    });

    const overdriveBtns = [
      document.getElementById('overdriveNavBtn'),
      document.getElementById('overdriveStageBtn')
    ];
    overdriveBtns.forEach((btn) => {
      if (btn) {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          this.toggleOverdriveMode();
        });
      }
    });

    const returnToGateBtns = [
      document.getElementById('resetOrbitBtn'),
      document.getElementById('replay-intro-btn'),
      document.getElementById('navBrandReset')
    ];
    returnToGateBtns.forEach((btn) => {
      if (btn) {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          this.returnToIntroGate();
        });
      }
    });
  }

  animate(now) {
    requestAnimationFrame(this.animate);
    const dt = Math.min(0.05, Math.max(0.001, (now - this.lastFrameTime) / 1000));
    this.lastFrameTime = now;
    const timeSec = now / 1000;

    // 1. Render Background 3D Planet Maxi
    if (this.planetGroup && this.renderer && this.scene && this.camera) {
      if (this.cloudMesh) this.cloudMesh.rotation.y = timeSec * 0.015;
      if (this.orbitSpinMode === 'gyro') {
        this.planetRotY += 0.012;
        this.planetRotX = Math.sin(timeSec * 1.3) * 0.35;
      } else {
        this.planetRotY += 0.0045;
      }
      this.planetGroup.rotation.y = this.planetRotY;
      this.planetGroup.rotation.x = this.planetRotX;
      this.renderer.render(this.scene, this.camera);
    }

    // 2. Update & Render True 3D WebGL Claw Machine Scene
    if (this.state === 'LOCKED') {
      this.update3DClawAndPilePhysics(dt, timeSec);
      this.render3DClawScene();
    }

    this.drawSpaceBackdrop();
    this.drawAtmosphericDiveFX(timeSec);
  }
}

/* =========================================================================
   4. INTRO GATE HUD INTERACTIONS (TILT, TELEMETRY CLOCK, SPIN CHIPS, CA COPY)
   ========================================================================= */
const LIVE_CA = 'EBCpGdXuS34WZuX13thrku2KmuLSe3Tf2gMtMKndpump';

document.addEventListener('DOMContentLoaded', () => {
  const controller = new PlanetMaxiController();
  window.__planetMaxiController = controller;

  const logoStage = document.getElementById('logo-stage');
  const hudTelemetry = document.getElementById('hud-telemetry');
  const hudStatusText = document.getElementById('hud-status-text');
  const spinChips = document.querySelectorAll('.hud-chip');

  window.addEventListener('mousemove', (e) => {
    const w = window.innerWidth || 1440;
    const h = window.innerHeight || 900;
    const normX = (e.clientX / w - 0.5) * 2;
    const normY = (e.clientY / h - 0.5) * 2;
    controller.mouseX = normX * 24;
    controller.mouseY = normY * 24;

    if (controller.state === 'ORBIT' && logoStage) {
      const tiltX = -normY * 9;
      const tiltY = normX * 9;
      logoStage.style.transform = `rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg)`;
    }
  });

  setInterval(() => {
    if (!hudTelemetry) return;
    const d = new Date();
    const ms = String(Math.floor(d.getMilliseconds() / 10)).padStart(2, '0');
    hudTelemetry.textContent = `${d.toTimeString().split(' ')[0]}.${ms} UTC`;
  }, 60);

  spinChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      spinChips.forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');
      controller.orbitSpinMode = chip.dataset.spin;
      sfx.playBeep(780, 0.07);
      if (hudStatusText) {
        if (chip.dataset.spin === 'lock') {
          hudStatusText.textContent = 'LOCKED — OG MAXI (#001)';
        } else if (chip.dataset.spin === 'gyro') {
          hudStatusText.textContent = 'GYRO SCAN — 100 CITIZENS ACTIVE';
        } else {
          hudStatusText.textContent = 'MWO ORBITAL LOCK — 100 CITIZENS ON SURFACE';
        }
      }
    });
  });

  const audioBtns = [
    document.getElementById('audioToggleBtn'),
    document.getElementById('intro-sfx-btn')
  ];
  audioBtns.forEach((btn) => {
    if (btn) btn.addEventListener('click', () => sfx.toggle());
  });

  const copyCA = (textElId, defaultLabel) => {
    navigator.clipboard.writeText(LIVE_CA);
    sfx.playBeep(1120, 0.1);
    const el = document.getElementById(textElId);
    if (el) {
      el.textContent = 'COPIED';
      setTimeout(() => { el.textContent = defaultLabel; }, 1600);
    }
  };

  const introCopyBtn = document.getElementById('intro-copy-ca-btn');
  if (introCopyBtn) {
    introCopyBtn.addEventListener('click', () => copyCA('intro-copy-ca-text', 'COPY'));
  }

  const bottomCopyBtn = document.getElementById('copyCaBtn');
  if (bottomCopyBtn) {
    bottomCopyBtn.addEventListener('click', () => copyCA('copyBadge', 'COPY CA'));
  }
});


/* =========================================================================
   5. COMMUNITY SUITE CONTROLLER (36 VAULT, PFP STUDIO, VIDEO RECORDER, TERMINAL)
   ========================================================================= */
class CommunitySuiteController {
  constructor(planetCtrl) {
    this.planetCtrl = planetCtrl;
    this.vaultFilter = 'ALL';

    // PFP Studio State
    this.pfpCanvas = document.getElementById('pfpStudioCanvas');
    this.pfpCtx = this.pfpCanvas ? this.pfpCanvas.getContext('2d') : null;
    this.pfpFormat = 'pfp'; // 'pfp' (1000x1000) | 'banner' (1500x500)
    this.pfpCitizenIdx = 0;
    this.pfpBg = 'obsidian';
    this.pfpOverlay = 'mwo';
    this.pfpCustomText = 'MAXI WORLD ORDER';
    this.loadedImages = new Map();

    // MWO Cult Rank & Conviction Calculator State
    this.rankCanvas = document.getElementById('rankCardCanvas');
    this.rankCtx = this.rankCanvas ? this.rankCanvas.getContext('2d') : null;
    this.rankBagSize = 2500000; // Default 2.5M $MAXI (0.25% of 1B supply)
    this.rankTargetMcap = 100000000; // Default $100M Target MCAP
    this.rankCallsign = 'MWO OPERATIVE #001';
    this.rankCitizenIdx = 0;
    this.liveMarketCapUsd = 0;

    this.initModals();
    this.initVaultGrid();
    this.initPfpStudio();
    this.initRankCalculator();
    this.initLiveMarketPoller();
  }

  // Preload Citizen Image for Canvas Rendering
  getCitizenImage(idx, onLoadCallback) {
    const cit = MAXI_CITIZENS[idx] || MAXI_CITIZENS[0];
    if (this.loadedImages.has(cit.src)) {
      const img = this.loadedImages.get(cit.src);
      if (img.complete && onLoadCallback) onLoadCallback(img);
      return img;
    }
    const img = new Image();
    img.onload = () => {
      if (onLoadCallback) onLoadCallback(img);
    };
    img.src = cit.src;
    this.loadedImages.set(cit.src, img);
    return img;
  }

  openModal(modalId) {
    sfx.playBeep(820, 0.08, 'triangle');
    document.querySelectorAll('.suite-modal').forEach((m) => m.classList.add('hidden'));
    const target = document.getElementById(modalId);
    if (target) target.classList.remove('hidden');

    if (modalId === 'pfpModal') {
      this.renderPfpCanvas();
    } else if (modalId === 'rankModal') {
      this.updateRankCalculations();
    }
  }

  closeAllModals() {
    sfx.playBeep(520, 0.07, 'sine');
    document.querySelectorAll('.suite-modal').forEach((m) => m.classList.add('hidden'));
  }

  initModals() {
    const bindOpen = (btnId, modalId) => {
      const btn = document.getElementById(btnId);
      if (btn) btn.addEventListener('click', () => this.openModal(modalId));
    };

    bindOpen('openVaultModalBtn', 'vaultModal');
    bindOpen('bottomOpenVaultBtn', 'vaultModal');
    bindOpen('openPfpModalBtn', 'pfpModal');
    bindOpen('quickOpenPfpBtn', 'pfpModal');
    bindOpen('openChartModalBtn', 'chartModal');
    bindOpen('navMarketBtn', 'chartModal');
    bindOpen('bottomOpenChartBtn', 'chartModal');
    bindOpen('openRankModalBtn', 'rankModal');
    bindOpen('quickOpenRankBtn', 'rankModal');
    bindOpen('bottomOpenRankBtn', 'rankModal');

    // Open active citizen directly in PFP Studio (from Claw Pull Reveal Card or HUD)
    const customizeActiveBtn = document.getElementById('btnCustomizeActive');
    if (customizeActiveBtn) {
      customizeActiveBtn.addEventListener('click', () => {
        this.selectPfpCitizen(this.planetCtrl.activeCitizenIndex);
        this.openModal('pfpModal');
      });
    }

    const pullToStudioBtn = document.getElementById('pullToStudioBtn');
    if (pullToStudioBtn) {
      pullToStudioBtn.addEventListener('click', () => {
        const pullOverlay = document.getElementById('pullRevealOverlay');
        if (pullOverlay) pullOverlay.classList.add('hidden');
        this.selectPfpCitizen(this.planetCtrl.activeCitizenIndex);
        this.openModal('pfpModal');
      });
    }

    document.querySelectorAll('[data-close-modal]').forEach((el) => {
      el.addEventListener('click', () => this.closeAllModals());
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeAllModals();
    });
  }

  /* -----------------------------------------------------------------------
     1. 100-CITIZEN VAULT GRID & RAID DOWNLOAD PACK
     ----------------------------------------------------------------------- */
  initVaultGrid() {
    this.renderVaultCards();

    const filterGroup = document.getElementById('vaultFilterGroup');
    if (filterGroup) {
      filterGroup.querySelectorAll('.suite-tab').forEach((tab) => {
        tab.addEventListener('click', () => {
          filterGroup.querySelectorAll('.suite-tab').forEach((t) => t.classList.remove('active'));
          tab.classList.add('active');
          this.vaultFilter = tab.dataset.filter;
          sfx.playBeep(740, 0.06);
          this.renderVaultCards();
        });
      });
    }
  }

  renderVaultCards() {
    const grid = document.getElementById('vaultCardsGrid');
    if (!grid) return;
    grid.innerHTML = '';

    MAXI_CITIZENS.forEach((cit, idx) => {
      if (this.vaultFilter === 'MYTHIC' && !cit.isMythic) return;
      if (this.vaultFilter === 'CITIZEN' && cit.isMythic) return;

      const card = document.createElement('div');
      card.className = `vault-item-card ${cit.isOg ? 'og-card' : ''}`;
      const tierLabel = cit.isOg ? 'SUPREME #001' : cit.isMythic ? '1-OF-1 MASTER' : 'MWO CITIZEN';

      card.innerHTML = `
        <div>
          <div class="v-card-top">
            <span>${cit.rank}</span>
            <span class="v-badge-tier">${tierLabel}</span>
          </div>
          <div class="v-card-stage" title="Click to load & claw in the Vault Claw Machine">
            <img src="${cit.src}" alt="${cit.name}" loading="lazy" />
          </div>
          <div class="v-card-name">${cit.name}</div>
        </div>
        <div class="v-card-actions">
          <button type="button" class="v-act-btn btn-locate">CLAW IT</button>
          <button type="button" class="v-act-btn btn-studio">STUDIO</button>
          <a href="${cit.src}" download="${cit.name.toLowerCase().replace(/\s+/g, '-')}.png" class="v-act-btn">PNG ⬇</a>
        </div>
      `;

      // Load into Claw Machine & Aim Claw at this Citizen
      const locateFn = () => {
        this.closeAllModals();
        this.planetCtrl.selectCitizen(idx, true);
      };
      card.querySelector('.v-card-stage').addEventListener('click', locateFn);
      card.querySelector('.btn-locate').addEventListener('click', locateFn);

      // Open in PFP Studio
      card.querySelector('.btn-studio').addEventListener('click', () => {
        this.selectPfpCitizen(idx);
        this.openModal('pfpModal');
      });

      grid.appendChild(card);
    });
  }

  /* -----------------------------------------------------------------------
     2. CUSTOM MAXI WORLD ORDER PFP & X BANNER STUDIO
     ----------------------------------------------------------------------- */
  initPfpStudio() {
    const picker = document.getElementById('pfpCitizenPicker');
    if (picker) {
      picker.innerHTML = '';
      MAXI_CITIZENS.forEach((cit, idx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `pfp-pick-thumb ${idx === 0 ? 'active' : ''}`;
        btn.dataset.idx = idx;
        btn.title = `${cit.rank} ${cit.name}`;
        btn.innerHTML = `<img src="${cit.src}" alt="${cit.name}" loading="lazy" />`;
        btn.addEventListener('click', () => this.selectPfpCitizen(idx));
        picker.appendChild(btn);
      });
    }

    // Format toggle (1:1 PFP vs 3:1 X Banner)
    const formatGroup = document.getElementById('pfpFormatGroup');
    if (formatGroup) {
      formatGroup.querySelectorAll('.seg-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          formatGroup.querySelectorAll('.seg-btn').forEach((b) => b.classList.remove('active'));
          btn.classList.add('active');
          this.pfpFormat = btn.dataset.format;
          if (this.pfpFormat === 'banner') {
            this.pfpCanvas.width = 1500;
            this.pfpCanvas.height = 500;
          } else {
            this.pfpCanvas.width = 1000;
            this.pfpCanvas.height = 1000;
          }
          sfx.playBeep(760, 0.06);
          this.renderPfpCanvas();
        });
      });
    }

    // Backdrop toggle
    const bgGroup = document.getElementById('pfpBgGroup');
    if (bgGroup) {
      bgGroup.querySelectorAll('.seg-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          bgGroup.querySelectorAll('.seg-btn').forEach((b) => b.classList.remove('active'));
          btn.classList.add('active');
          this.pfpBg = btn.dataset.bg;
          sfx.playBeep(720, 0.06);
          this.renderPfpCanvas();
        });
      });
    }

    // Overlay toggle
    const overlayGroup = document.getElementById('pfpOverlayGroup');
    if (overlayGroup) {
      overlayGroup.querySelectorAll('.seg-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          overlayGroup.querySelectorAll('.seg-btn').forEach((b) => b.classList.remove('active'));
          btn.classList.add('active');
          this.pfpOverlay = btn.dataset.overlay;
          sfx.playBeep(820, 0.06);
          this.renderPfpCanvas();
        });
      });
    }

    // Custom text input & 1-click propaganda preset chips
    const textInput = document.getElementById('pfpCustomText');
    if (textInput) {
      textInput.addEventListener('input', (e) => {
        this.pfpCustomText = e.target.value;
        this.renderPfpCanvas();
      });
    }

    const presetChips = document.getElementById('pfpPresetChips');
    if (presetChips) {
      presetChips.querySelectorAll('.preset-chip').forEach((chip) => {
        chip.addEventListener('click', () => {
          this.pfpCustomText = chip.dataset.text;
          if (textInput) textInput.value = chip.dataset.text;
          sfx.playBeep(880, 0.06);
          this.renderPfpCanvas();
        });
      });
    }

    // Export High-Res PNG
    const downloadBtn = document.getElementById('downloadPfpBtn');
    if (downloadBtn) {
      downloadBtn.addEventListener('click', () => {
        const cit = MAXI_CITIZENS[this.pfpCitizenIdx];
        const link = document.createElement('a');
        link.download = `mwo-${this.pfpFormat}-${cit.rank.replace('#', '')}.png`;
        link.href = this.pfpCanvas.toDataURL('image/png');
        link.click();
        sfx.playBeep(1080, 0.1);
      });
    }

    // Copy PNG to Clipboard
    const copyBtn = document.getElementById('copyPfpBtn');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        this.pfpCanvas.toBlob(async (blob) => {
          if (!blob) return;
          try {
            await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
            const lbl = document.getElementById('copyPfpLabel');
            if (lbl) {
              lbl.textContent = 'COPIED TO CLIPBOARD';
              setTimeout(() => { lbl.textContent = 'COPY IMAGE TO CLIPBOARD'; }, 1800);
            }
            sfx.playBeep(1120, 0.1);
          } catch (_) {}
        });
      });
    }

    this.getCitizenImage(0, () => this.renderPfpCanvas());
  }

  selectPfpCitizen(idx) {
    this.pfpCitizenIdx = idx;
    document.querySelectorAll('.pfp-pick-thumb').forEach((b) => {
      b.classList.toggle('active', Number(b.dataset.idx) === idx);
    });
    sfx.playBeep(840, 0.06);
    this.getCitizenImage(idx, () => this.renderPfpCanvas());
    this.renderPfpCanvas();
  }

  renderPfpCanvas() {
    if (!this.pfpCtx || !this.pfpCanvas) return;
    const ctx = this.pfpCtx;
    const w = this.pfpCanvas.width;
    const h = this.pfpCanvas.height;
    const cit = MAXI_CITIZENS[this.pfpCitizenIdx] || MAXI_CITIZENS[0];

    const bgPalettes = {
      obsidian: { inner: '#151926', outer: '#040508', accent: '#e5b869' },
      gold: { inner: '#3d2c12', outer: '#080604', accent: '#f5d08a' },
      sapphire: { inner: '#0c2d4d', outer: '#03070e', accent: '#7dd3fc' },
      emerald: { inner: '#093426', outer: '#020806', accent: '#34d399' },
      crimson: { inner: '#3b0d1e', outer: '#080205', accent: '#fb7185' }
    };
    const pal = bgPalettes[this.pfpBg] || bgPalettes.obsidian;

    // 1. Studio Radial Backdrop
    const grad = ctx.createRadialGradient(w * 0.5, h * 0.5, h * 0.05, w * 0.5, h * 0.5, Math.max(w, h) * 0.72);
    grad.addColorStop(0, pal.inner);
    grad.addColorStop(1, pal.outer);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // 2. Architectural Grid or Orbital Halo / MWO Seal Overlay
    if (this.pfpOverlay === 'grid' || this.pfpOverlay === 'mwo') {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.lineWidth = 1;
      const step = 50;
      for (let x = 0; x < w; x += step) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
      }
      for (let y = 0; y < h; y += step) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
      }
    }

    if (this.pfpOverlay === 'halo' || this.pfpOverlay === 'grid' || this.pfpOverlay === 'mwo') {
      const ringCx = this.pfpFormat === 'banner' ? w * 0.74 : w * 0.5;
      const ringCy = h * 0.52;
      ctx.save();
      ctx.strokeStyle = pal.accent;
      ctx.globalAlpha = 0.42;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(ringCx, ringCy, h * 0.36, 0, Math.PI * 2);
      ctx.stroke();

      ctx.setLineDash([10, 8]);
      ctx.globalAlpha = 0.25;
      ctx.beginPath();
      ctx.arc(ringCx, ringCy, h * 0.42, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }

    // 3. Giant Watermark Typography
    ctx.save();
    ctx.fillStyle = 'rgba(255, 255, 255, 0.038)';
    ctx.font = `800 ${this.pfpFormat === 'banner' ? '150px' : '130px'} "Syne", "Inter", sans-serif`;
    ctx.textAlign = this.pfpFormat === 'banner' ? 'left' : 'center';
    ctx.textBaseline = 'middle';
    const wmText = (this.pfpCustomText || 'MWO').toUpperCase();
    if (this.pfpFormat === 'banner') {
      ctx.fillText(wmText, 70, h * 0.46);
    } else {
      ctx.fillText(wmText, w * 0.5, h * 0.2);
    }
    ctx.restore();

    // 4. Top MWO Cult Header Strip (for MWO Seal mode on 1:1 PFP)
    if (this.pfpFormat === 'pfp' && this.pfpOverlay === 'mwo') {
      ctx.save();
      ctx.fillStyle = pal.accent;
      ctx.font = '700 16px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.fillText(`MAXI WORLD ORDER // SOVEREIGN CITIZEN ${cit.rank}`, w * 0.5, 54);
      ctx.restore();
    }

    // 5. Banner Left Editorial Typography
    if (this.pfpFormat === 'banner') {
      ctx.save();
      ctx.fillStyle = pal.accent;
      ctx.font = '700 18px "JetBrains Mono", monospace';
      ctx.fillText(`MAXI WORLD ORDER // CITIZEN ${cit.rank}`, 74, h * 0.32);

      ctx.fillStyle = '#ffffff';
      ctx.font = '800 58px "Syne", "Inter", sans-serif';
      ctx.fillText((this.pfpCustomText || cit.name).toUpperCase(), 72, h * 0.5);

      ctx.fillStyle = 'rgba(255, 255, 255, 0.65)';
      ctx.font = '600 16px "JetBrains Mono", monospace';
      ctx.fillText(`CA: ${LIVE_CA}`, 74, h * 0.66);

      ctx.fillStyle = pal.accent;
      ctx.font = '700 15px "JetBrains Mono", monospace';
      ctx.fillText(`𝕏 @MAXIWORLDORDER · T.ME/MAXICOLLECTIVE`, 74, h * 0.78);
      ctx.restore();
    }

    // 6. Draw Transparent Cutout Citizen
    const img = this.getCitizenImage(this.pfpCitizenIdx);
    if (img && img.complete && img.naturalWidth > 0) {
      ctx.save();
      const targetH = this.pfpFormat === 'banner' ? h * 0.86 : h * 0.73;
      const ratio = img.naturalWidth / img.naturalHeight;
      const targetW = targetH * ratio;
      const cx = this.pfpFormat === 'banner' ? w * 0.74 - targetW / 2 : (w - targetW) / 2;
      const cy = this.pfpFormat === 'banner' ? h - targetH - 15 : h * 0.16;

      ctx.shadowColor = 'rgba(0, 0, 0, 0.85)';
      ctx.shadowBlur = 36;
      ctx.shadowOffsetY = 16;
      ctx.drawImage(img, cx, cy, targetW, targetH);
      ctx.restore();
    }

    // 7. Bottom MWO Sovereign Stamp on 1:1 PFP
    if (this.pfpFormat === 'pfp' && this.pfpCustomText) {
      ctx.save();
      ctx.fillStyle = 'rgba(6, 8, 13, 0.92)';
      ctx.strokeStyle = pal.accent;
      ctx.lineWidth = 1.5;
      const pillW = 460;
      const pillH = 54;
      const px = (w - pillW) / 2;
      const py = h - 82;
      ctx.beginPath();
      ctx.roundRect(px, py, pillW, pillH, 8);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = pal.accent;
      ctx.font = '700 18px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${cit.rank} · ${this.pfpCustomText.toUpperCase()}`, w / 2, py + pillH / 2);
      ctx.restore();
    }
  }

  /* -----------------------------------------------------------------------
     3. MWO CULT RANK & CONVICTION CALCULATOR (DOSSIER CARD GENERATOR)
     ----------------------------------------------------------------------- */
  initRankCalculator() {
    const bagInput = document.getElementById('rankBagInput');
    const bagPresets = document.getElementById('rankBagPresets');
    const targetMcapGroup = document.getElementById('rankTargetMcapGroup');
    const callsignInput = document.getElementById('rankCallsignInput');
    const cycleCitBtn = document.getElementById('rankCycleCitizenBtn');
    const downloadRankBtn = document.getElementById('downloadRankCardBtn');
    const copyRankBtn = document.getElementById('copyRankCardBtn');

    if (bagInput) {
      bagInput.addEventListener('input', (e) => {
        const val = Math.max(1, Math.min(1000000000, Number(e.target.value) || 0));
        this.rankBagSize = val;
        if (bagPresets) {
          bagPresets.querySelectorAll('.preset-chip').forEach((c) => {
            c.classList.toggle('active', Number(c.dataset.bag) === val);
          });
        }
        this.updateRankCalculations();
      });
    }

    if (bagPresets) {
      bagPresets.querySelectorAll('.preset-chip').forEach((chip) => {
        chip.addEventListener('click', () => {
          bagPresets.querySelectorAll('.preset-chip').forEach((c) => c.classList.remove('active'));
          chip.classList.add('active');
          this.rankBagSize = Number(chip.dataset.bag);
          if (bagInput) bagInput.value = this.rankBagSize;
          sfx.playBeep(820, 0.06);
          this.updateRankCalculations();
        });
      });
    }

    if (targetMcapGroup) {
      targetMcapGroup.querySelectorAll('.seg-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          targetMcapGroup.querySelectorAll('.seg-btn').forEach((b) => b.classList.remove('active'));
          btn.classList.add('active');
          this.rankTargetMcap = Number(btn.dataset.mcap);
          sfx.playBeep(880, 0.06);
          this.updateRankCalculations();
        });
      });
    }

    if (callsignInput) {
      callsignInput.addEventListener('input', (e) => {
        this.rankCallsign = e.target.value || 'MWO OPERATIVE';
        this.renderRankDossierCanvas();
      });
    }

    if (cycleCitBtn) {
      cycleCitBtn.addEventListener('click', () => {
        this.rankCitizenIdx = (this.rankCitizenIdx + 1) % MAXI_CITIZENS.length;
        sfx.playBeep(790, 0.06);
        this.getCitizenImage(this.rankCitizenIdx, () => this.renderRankDossierCanvas());
        this.renderRankDossierCanvas();
      });
    }

    if (downloadRankBtn) {
      downloadRankBtn.addEventListener('click', () => {
        const link = document.createElement('a');
        link.download = `mwo-sovereign-dossier-${this.rankBagSize}.png`;
        link.href = this.rankCanvas.toDataURL('image/png');
        link.click();
        sfx.playBeep(1080, 0.1);
      });
    }

    if (copyRankBtn) {
      copyRankBtn.addEventListener('click', () => {
        this.rankCanvas.toBlob(async (blob) => {
          if (!blob) return;
          try {
            await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
            const lbl = document.getElementById('copyRankCardLabel');
            if (lbl) {
              lbl.textContent = 'DOSSIER COPIED TO CLIPBOARD';
              setTimeout(() => { lbl.textContent = 'COPY DOSSIER TO CLIPBOARD'; }, 1800);
            }
            sfx.playBeep(1120, 0.1);
          } catch (_) {}
        });
      });
    }

    this.getCitizenImage(0, () => this.updateRankCalculations());
  }

  getCultRankMeta(bagSize) {
    if (bagSize >= 20000000) {
      return { tier: 'TIER V // SUPREME SOVEREIGN', title: 'SUPREME SOVEREIGN', color: '#f5d08a' };
    }
    if (bagSize >= 7500000) {
      return { tier: 'TIER IV // MWO HIGH COUNCIL', title: 'MWO HIGH COUNCIL', color: '#e5b869' };
    }
    if (bagSize >= 2000000) {
      return { tier: 'TIER III // SECTOR WARLORD', title: 'SECTOR WARLORD', color: '#34d399' };
    }
    if (bagSize >= 500000) {
      return { tier: 'TIER II // FIELD OPERATIVE', title: 'FIELD OPERATIVE', color: '#7dd3fc' };
    }
    return { tier: 'TIER I // MWO INITIATE', title: 'MWO INITIATE', color: '#cbd5e1' };
  }

  updateRankCalculations() {
    const TOTAL_SUPPLY = 1000000000; // 1B Pump.fun standard supply
    const supplyShare = this.rankBagSize / TOTAL_SUPPLY;
    const supplyPctStr = `${(supplyShare * 100).toFixed(3)}% OF 1B`;
    const projectedUsd = supplyShare * this.rankTargetMcap;
    const rankMeta = this.getCultRankMeta(this.rankBagSize);

    const fmtMoney = (n) => {
      if (n >= 1e6) return `$${(n / 1e6).toFixed(2)}M`;
      if (n >= 1e3) return `$${Math.round(n).toLocaleString()}`;
      return `$${n.toFixed(2)}`;
    };

    const baseMcap = this.liveMarketCapUsd > 0 ? this.liveMarketCapUsd : 50000;
    const mult = Math.max(1, this.rankTargetMcap / baseMcap);
    const multStr = `${mult >= 100 ? Math.round(mult).toLocaleString() : mult.toFixed(1)}×`;

    const elTitle = document.getElementById('rpmRankTitle');
    const elPct = document.getElementById('rpmSupplyPct');
    const elUsd = document.getElementById('rpmProjectedUsd');
    const elMult = document.getElementById('rpmMultiplier');

    if (elTitle) elTitle.textContent = rankMeta.title;
    if (elPct) elPct.textContent = supplyPctStr;
    if (elUsd) elUsd.textContent = fmtMoney(projectedUsd);
    if (elMult) elMult.textContent = `${multStr} TO TARGET`;

    this.renderRankDossierCanvas(rankMeta, supplyPctStr, fmtMoney(projectedUsd), multStr);
  }

  renderRankDossierCanvas(rankMeta, supplyPctStr, projectedUsdStr, multStr) {
    if (!this.rankCtx || !this.rankCanvas) return;
    if (!rankMeta) {
      const TOTAL_SUPPLY = 1000000000;
      const supplyShare = this.rankBagSize / TOTAL_SUPPLY;
      supplyPctStr = `${(supplyShare * 100).toFixed(3)}% OF 1B`;
      const projectedUsd = supplyShare * this.rankTargetMcap;
      projectedUsdStr = projectedUsd >= 1e6
        ? `$${(projectedUsd / 1e6).toFixed(2)}M`
        : `$${Math.round(projectedUsd).toLocaleString()}`;
      const baseMcap = this.liveMarketCapUsd > 0 ? this.liveMarketCapUsd : 50000;
      const mult = Math.max(1, this.rankTargetMcap / baseMcap);
      multStr = `${mult >= 100 ? Math.round(mult).toLocaleString() : mult.toFixed(1)}×`;
      rankMeta = this.getCultRankMeta(this.rankBagSize);
    }

    const ctx = this.rankCtx;
    const w = this.rankCanvas.width; // 1000
    const h = this.rankCanvas.height; // 640
    const cit = MAXI_CITIZENS[this.rankCitizenIdx] || MAXI_CITIZENS[0];

    // 1. Dark Obsidian Architectural Card Background
    const bgGrad = ctx.createRadialGradient(w * 0.75, h * 0.5, 40, w * 0.5, h * 0.5, w * 0.85);
    bgGrad.addColorStop(0, '#141926');
    bgGrad.addColorStop(1, '#050609');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, w, h);

    // Subtle Grid
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.035)';
    ctx.lineWidth = 1;
    for (let x = 0; x < w; x += 40) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
    }
    for (let y = 0; y < h; y += 40) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
    }

    // Outer 1px Hairline Border Frame
    ctx.strokeStyle = 'rgba(229, 184, 105, 0.45)';
    ctx.lineWidth = 2;
    ctx.strokeRect(24, 24, w - 48, h - 48);

    // Top Header Bar
    ctx.fillStyle = 'rgba(229, 184, 105, 0.08)';
    ctx.fillRect(25, 25, w - 50, 64);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(25, 89);
    ctx.lineTo(w - 25, 89);
    ctx.stroke();

    ctx.fillStyle = '#e5b869';
    ctx.font = '700 16px "JetBrains Mono", monospace';
    ctx.textAlign = 'left';
    ctx.fillText('MAXI WORLD ORDER // SOVEREIGN CONVICTION DOSSIER', 52, 63);

    ctx.fillStyle = '#34d399';
    ctx.textAlign = 'right';
    ctx.fillText('VERIFIED // $MAXI', w - 52, 63);

    // Left Dossier Content
    ctx.textAlign = 'left';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.font = '600 14px "JetBrains Mono", monospace';
    ctx.fillText('OPERATIVE CALLSIGN', 56, 140);

    ctx.fillStyle = '#ffffff';
    ctx.font = '800 38px "Syne", "Inter", sans-serif';
    ctx.fillText((this.rankCallsign || 'MWO OPERATIVE').toUpperCase(), 56, 182);

    // Cult Rank Pill
    ctx.fillStyle = 'rgba(229, 184, 105, 0.14)';
    ctx.strokeStyle = rankMeta.color;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(56, 206, 360, 42, 6);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = rankMeta.color;
    ctx.font = '700 15px "JetBrains Mono", monospace';
    ctx.fillText(rankMeta.tier, 74, 232);

    // Metrics Grid Boxes on Dossier
    const targetMcapStr = this.rankTargetMcap >= 1e9
      ? '$1.00B MWO'
      : `$${(this.rankTargetMcap / 1e6).toFixed(0)}M MCAP`;

    const metrics = [
      { label: '$MAXI HOLDINGS', val: `${this.rankBagSize.toLocaleString()} $MAXI`, color: '#ffffff' },
      { label: 'SUPPLY SHARE', val: supplyPctStr, color: '#e5b869' },
      { label: `BAG AT ${targetMcapStr}`, val: projectedUsdStr, color: '#34d399' },
      { label: 'CONVICTION MULTIPLE', val: `${multStr} UPSIDE`, color: '#7dd3fc' }
    ];

    metrics.forEach((m, i) => {
      const col = i % 2;
      const row = Math.floor(i / 2);
      const bx = 56 + col * 265;
      const by = 278 + row * 112;

      ctx.fillStyle = 'rgba(8, 10, 16, 0.85)';
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(bx, by, 248, 94, 8);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.font = '600 12px "JetBrains Mono", monospace';
      ctx.fillText(m.label, bx + 18, by + 32);

      ctx.fillStyle = m.color;
      ctx.font = '700 22px "JetBrains Mono", monospace';
      ctx.fillText(m.val, bx + 18, by + 68);
    });

    // Right Column: Citizen Avatar Halo & Cutout
    const avatarCx = 785;
    const avatarCy = 325;
    ctx.save();
    ctx.strokeStyle = rankMeta.color;
    ctx.globalAlpha = 0.35;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(avatarCx, avatarCy, 155, 0, Math.PI * 2);
    ctx.stroke();

    ctx.setLineDash([8, 6]);
    ctx.globalAlpha = 0.2;
    ctx.beginPath();
    ctx.arc(avatarCx, avatarCy, 178, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();

    const img = this.getCitizenImage(this.rankCitizenIdx);
    if (img && img.complete && img.naturalWidth > 0) {
      ctx.save();
      const targetH = 350;
      const ratio = img.naturalWidth / img.naturalHeight;
      const targetW = targetH * ratio;
      ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
      ctx.shadowBlur = 32;
      ctx.drawImage(img, avatarCx - targetW / 2, avatarCy - targetH / 2 + 10, targetW, targetH);
      ctx.restore();
    }

    // Bottom Footer Strip
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.font = '500 13px "JetBrains Mono", monospace';
    ctx.textAlign = 'left';
    ctx.fillText(`CA: ${LIVE_CA}`, 56, h - 48);

    ctx.fillStyle = '#e5b869';
    ctx.textAlign = 'right';
    ctx.fillText('𝕏 @MAXIWORLDORDER · T.ME/MAXICOLLECTIVE', w - 52, h - 48);
  }

  /* -----------------------------------------------------------------------
     5. LIVE DEXSCREENER MARKET TELEMETRY POLLER
     ----------------------------------------------------------------------- */
  initLiveMarketPoller() {
    const fetchMarketData = async () => {
      try {
        const res = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${LIVE_CA}`);
        if (!res.ok) return;
        const data = await res.json();
        const pair = data && data.pairs && data.pairs[0];
        if (!pair) return;

        const rawMcap = Number(pair.fdv || pair.marketCap || 0);
        if (rawMcap > 0) {
          this.liveMarketCapUsd = rawMcap;
        }

        const fmtUsd = (val) => {
          const n = Number(val);
          if (!n) return '—';
          if (n >= 1e6) return `$${(n / 1e6).toFixed(2)}M`;
          if (n >= 1e3) return `$${(n / 1e3).toFixed(1)}K`;
          return `$${n.toFixed(2)}`;
        };

        const mcapStr = fmtUsd(rawMcap);
        const navMcap = document.getElementById('navLiveMcap');
        const termPrice = document.getElementById('termPrice');
        const termMcap = document.getElementById('termMcap');
        const termVol = document.getElementById('termVol');
        const termLiq = document.getElementById('termLiq');

        if (navMcap && mcapStr !== '—') navMcap.textContent = mcapStr;
        if (termPrice && pair.priceUsd) termPrice.textContent = `$${Number(pair.priceUsd).toFixed(6)}`;
        if (termMcap) termMcap.textContent = mcapStr;
        if (termVol && pair.volume) termVol.textContent = fmtUsd(pair.volume.h24);
        if (termLiq && pair.liquidity) termLiq.textContent = fmtUsd(pair.liquidity.usd);

        this.updateRankCalculations();
      } catch (_) {}
    };

    fetchMarketData();
    setInterval(fetchMarketData, 20000);
  }
}

// Initialize the Community Suite once DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    if (window.__planetMaxiController) {
      new CommunitySuiteController(window.__planetMaxiController);
    }
  }, 50);
});
