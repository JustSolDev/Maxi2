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
    lore: '<strong>Supreme Sovereign of the Maxi World Order.</strong> Standing atop the Genesis Citadel at 240 lbs lean while all 35 MWO citizens hold the surrounding continents—drag the 3D planet, scroll to zoom, or click any citizen below to inspect them.'
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
    src: `${BG_REMOVED_DIR}photo_2026-11-18_22-42-40 (2) Background Removed.png`,
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
    lore: '<strong>Multiverse Scientist.</strong> Built the portal gun that connected all 36 Maxis to this planet.'
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
  }
];

// Assign Fibonacci Spherical Coordinates to Citizens #007–#036 so they cover the 3D globe evenly
// while keeping a respectful royal plaza clearance around OG Maxi (#001 at lat=0.18, lon=0.0)
(function distributeCitizensOnSphere() {
  const outerCitizens = MAXI_CITIZENS.slice(6);
  const N = outerCitizens.length;
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  outerCitizens.forEach((cit, i) => {
    // Spread latitude between -68 deg and +68 deg
    const y = 1 - ((i + 0.5) / N) * 1.75;
    let lat = Math.asin(Math.max(-0.88, Math.min(0.88, y)));
    let lon = ((i * goldenAngle) % (Math.PI * 2)) - Math.PI;

    // Keep clear of OG Maxi's front throne plaza (|lat - 0.18| < 0.35 && |lon| < 0.55)
    if (Math.abs(lat - 0.18) < 0.35 && Math.abs(lon) < 0.55) {
      lon += lon >= 0 ? 0.65 : -0.65;
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
   3. TRUE 3D WEBGL PLANET MAXI & 36-CITIZEN CONTROLLER
   ========================================================================= */
class PlanetMaxiController {
  constructor() {
    this.spaceCanvas = document.getElementById('intro-canvas');
    this.spaceCtx = this.spaceCanvas.getContext('2d');
    this.fxCanvas = document.getElementById('diveFxCanvas');
    this.fxCtx = this.fxCanvas.getContext('2d');
    this.webglContainer = document.getElementById('planetWebGLContainer');
    this.pinsOverlay = document.getElementById('planetPinsOverlay');
    this.stageContainer = document.getElementById('stageContainer');
    this.logoStage = document.getElementById('logo-stage');

    this.introScreen = document.getElementById('intro-screen');
    this.mainNavbar = document.getElementById('mainNavbar');
    this.diveHudLayer = document.getElementById('diveHudLayer');
    this.bottomCaBar = document.getElementById('bottomCaBar');
    this.reticleHud = document.getElementById('reticleHud');
    this.arrivedCard = document.getElementById('arrivedCard');

    this.state = 'ORBIT'; // 'ORBIT' | 'ZOOMING' | 'LOCKED'
    this.orbitSpinMode = '3d';
    this.paletteIdx = 0;
    this.activeCitizenIndex = 0; // 0 = OG MAXI (#001)

    this.zoomStartTime = 0;
    this.zoomDuration = 5800;
    this.currentZoomLevel = 1.5;

    // 3D Planet Rotation & Scrollable Camera Distance (OG Maxi is at lat=0.18, lon=0)
    this.planetRotY = -1.8;
    this.planetRotX = 0.18;
    this.targetRotY = 0;
    this.targetRotX = 0.18;
    this.camDist = 360;
    this.targetCamDist = 185; // User can scroll wheel between 145 (close surface) and 480 (deep orbit)

    this.isDragging = false;
    this.dragPrevX = 0;
    this.dragPrevY = 0;

    // 3D Warp Starfield particles
    this.particles = [];
    this.baseWarpSpeed = 1.5;
    this.targetWarpSpeed = 1.5;
    this.mouseX = 0;
    this.mouseY = 0;
    this.starColors = ['#ffbe2e', '#70f8ff', '#fff6e0', '#38bdf8', '#ffffff'];

    this.cloudPuffs = Array.from({ length: 26 }, (_, i) => ({
      angle: (i / 26) * Math.PI * 2 + Math.random() * 0.3,
      dist: 0.08 + (i % 5) * 0.14,
      size: 160 + (i % 4) * 95,
      zStart: 6.2 + (i % 6) * 0.7,
      tint: i % 2 === 0 ? '240, 248, 255' : '186, 230, 253'
    }));

    this.buildCitizenDOMPins();
    this.buildRosterStrip();
    this.initWarpParticles();
    this.initThreePlanet();
    this.resizeCanvases();
    this.bindEvents();
    this.renderMiniRadar();

    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  // Dynamically generate DOM pins for OG Maxi (#001) + all 35 transparent Maxi citizens
  buildCitizenDOMPins() {
    this.pinsOverlay.innerHTML = '';

    MAXI_CITIZENS.forEach((cit, idx) => {
      const pinEl = document.createElement('div');
      pinEl.id = cit.id;

      if (cit.isOg) {
        pinEl.className = 'surface-pin og-pin selected-pin';
        pinEl.innerHTML = `
          <div class="pin-holo-beam"></div>
          <div class="pin-sonar-wrap">
            <div class="pin-sonar r1"></div>
            <div class="pin-sonar r2"></div>
          </div>

          <div class="pin-overhead-badge">
            <span class="pin-rank">#001</span>
            <span class="pin-name">OG MAXI</span>
            <span class="pin-status">PRIME</span>
          </div>

          <div class="pin-character-stage">
            <div class="character-back-aura"></div>
            <img
              src="${cit.src}"
              alt="OG Maxi on Planet Maxi"
              class="pin-maxi-cutout"
              draggable="false"
            />
          </div>

          <div class="pin-pedestal-base">
            <div class="pedestal-ring-outer"></div>
          </div>
        `;
      } else {
        pinEl.className = `surface-pin citizen-variant-pin ${cit.isMythic ? 'mythic-pin' : ''}`;
        pinEl.style.setProperty('--pin-color', cit.color);
        pinEl.innerHTML = `
          <div class="variant-sprite-box">
            <div class="variant-aura-ring"></div>
            <img
              src="${cit.src}"
              alt="${cit.name}"
              class="variant-cutout-img"
              loading="lazy"
              draggable="false"
            />
          </div>
          <div class="variant-tag">${cit.rank} ${cit.name.replace(' MAXI', '')}</div>
        `;
      }

      pinEl.addEventListener('click', (e) => {
        e.stopPropagation();
        if (this.state === 'ORBIT') {
          this.startZoomSequence();
          return;
        }
        this.selectCitizen(idx);
      });

      this.pinsOverlay.appendChild(pinEl);
      cit.el = pinEl;
    });
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
        this.selectCitizen(idx);
      });
      strip.appendChild(chip);
    });
  }

  selectCitizen(idx) {
    this.activeCitizenIndex = (idx + MAXI_CITIZENS.length) % MAXI_CITIZENS.length;
    const cit = MAXI_CITIZENS[this.activeCitizenIndex];

    sfx.playBeep(cit.isOg ? 980 : 760, 0.09, 'triangle');

    const targetLon = -cit.lon;
    const currentNorm = ((this.planetRotY % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
    const targetNorm = ((targetLon % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
    let delta = targetNorm - currentNorm;
    if (delta > Math.PI) delta -= Math.PI * 2;
    if (delta < -Math.PI) delta += Math.PI * 2;

    this.targetRotY = this.planetRotY + delta;
    this.targetRotX = cit.lat;

    if (this.targetCamDist > 260) {
      this.targetCamDist = 195;
    }

    const cardSprite = document.getElementById('cardMaxiSprite');
    const cardKicker = document.getElementById('cardKicker');
    const cardTitle = document.getElementById('cardTitle');
    const quoteEl = document.getElementById('maxiLiveQuote');
    const hudActiveTarget = document.getElementById('hudActiveTarget');
    const scanBtn = document.getElementById('scanSectorsBtn');

    if (cardSprite) cardSprite.src = cit.src;
    if (cardKicker) cardKicker.textContent = cit.title.replace(/^[👑★]\s*/, '');
    if (cardTitle) cardTitle.textContent = cit.name;
    if (quoteEl) quoteEl.innerHTML = cit.lore;
    if (hudActiveTarget) hudActiveTarget.textContent = `${cit.rank} ${cit.name}`;
    if (scanBtn) scanBtn.textContent = `03 / CYCLE CITIZENS (${String(this.activeCitizenIndex + 1).padStart(2, '0')}/36)`;

    MAXI_CITIZENS.forEach((c, i) => {
      if (c.el) c.el.classList.toggle('selected-pin', i === this.activeCitizenIndex);
    });

    document.querySelectorAll('.roster-chip').forEach((chip) => {
      const isMatch = Number(chip.dataset.idx) === this.activeCitizenIndex;
      chip.classList.toggle('active', isMatch);
      if (isMatch) {
        chip.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    });

    this.arrivedCard.classList.add('visible');
  }

  initWarpParticles() {
    const w = window.innerWidth || 1440;
    const h = window.innerHeight || 900;
    this.particles.length = 0;
    for (let i = 0; i < 250; i++) {
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
        size: isStar ? Math.random() * 2.8 + 1.6 : Math.random() * 1.8 + 0.5
      });
    }
  }

  initThreePlanet() {
    const w = window.innerWidth;
    const h = window.innerHeight;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(42, w / h, 1, 3000);
    this.camera.position.set(0, 0, this.camDist);

    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      preserveDrawingBuffer: true
    });
    this.renderer.setSize(w, h);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
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

    // 1. Realistic PBR Planet Surface (Deep oceans + 3D relief continents)
    const sphereGeo = new THREE.SphereGeometry(this.planetRadius, 96, 96);
    const sphereMat = new THREE.MeshStandardMaterial({
      map: this.diffuseTex,
      bumpMap: this.bumpTex,
      bumpScale: 2.8,
      roughnessMap: this.roughTex,
      roughness: 0.9,
      metalness: 0.08
    });
    this.planetMesh = new THREE.Mesh(sphereGeo, sphereMat);
    this.planetGroup.add(this.planetMesh);

    // 2. Realistic Floating Atmospheric Cloud Sphere (Slowly drifts over continents)
    const cloudGeo = new THREE.SphereGeometry(this.planetRadius * 1.015, 64, 64);
    const cloudMat = new THREE.MeshStandardMaterial({
      map: this.cloudTex,
      transparent: true,
      opacity: 0.34,
      roughness: 1.0,
      metalness: 0.0,
      depthWrite: false
    });
    this.cloudMesh = new THREE.Mesh(cloudGeo, cloudMat);
    this.planetGroup.add(this.cloudMesh);

    // 3. Rayleigh Atmospheric Scattering Rim Halo
    const atmoGeo = new THREE.SphereGeometry(this.planetRadius * 1.08, 64, 64);
    const atmoMat = new THREE.MeshBasicMaterial({
      color: maps.atmoHex,
      transparent: true,
      opacity: 0.15,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending
    });
    this.atmoMesh = new THREE.Mesh(atmoGeo, atmoMat);
    this.planetGroup.add(this.atmoMesh);

    // 4. Subtle Outer Orbital Ring & Ice/Dust Particle Belt (Fixed in equatorial scene plane so it never slices across the Maxi sprites)
    this.ringGroup = new THREE.Group();
    this.ringGroup.rotation.x = Math.PI * 0.44;
    this.ringGroup.rotation.z = -Math.PI * 0.08;
    this.scene.add(this.ringGroup);

    const ringConfigs = [
      { inner: 148, outer: 158, color: maps.ringColors[0], opacity: 0.14 },
      { inner: 162, outer: 178, color: maps.ringColors[1], opacity: 0.09 },
      { inner: 182, outer: 190, color: maps.ringColors[2], opacity: 0.06 }
    ];

    this.ringMeshes = [];
    ringConfigs.forEach((rc) => {
      const rGeo = new THREE.RingGeometry(rc.inner, rc.outer, 128);
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

    const beltGeo = new THREE.BufferGeometry();
    const beltCount = 360;
    const positions = new Float32Array(beltCount * 3);
    const colors = new Float32Array(beltCount * 3);
    const colorObjs = [
      new THREE.Color('#cbd5e1'),
      new THREE.Color('#38bdf8'),
      new THREE.Color('#fbbf24')
    ];

    for (let i = 0; i < beltCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = 148 + Math.random() * 48;
      positions[i * 3] = Math.cos(angle) * dist;
      positions[i * 3 + 1] = Math.sin(angle) * dist;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 3.5;

      const c = colorObjs[i % colorObjs.length];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    beltGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    beltGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    const beltMat = new THREE.PointsMaterial({
      size: 1.6,
      vertexColors: true,
      transparent: true,
      opacity: 0.55
    });
    this.asteroidBelt = new THREE.Points(beltGeo, beltMat);
    this.ringGroup.add(this.asteroidBelt);

    // 5. Realistic Orbital Sunlight & Atmospheric Fill Lights
    const ambientLight = new THREE.AmbientLight(0xdbeafe, 0.75);
    this.scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xfffbeb, 1.15);
    sunLight.position.set(260, 180, 240);
    this.scene.add(sunLight);

    const rimLight1 = new THREE.PointLight(0x38bdf8, 0.9, 750);
    rimLight1.position.set(-240, -130, 170);
    this.scene.add(rimLight1);
    this.rimLight1 = rimLight1;

    const rimLight2 = new THREE.PointLight(0xf59e0b, 0.7, 750);
    rimLight2.position.set(220, -150, -160);
    this.scene.add(rimLight2);
    this.rimLight2 = rimLight2;

    // 6. Green-Candle Overdrive 3D Orbital Laser Pillars (Anchored to OG Maxi + Mythic Masters)
    this.isOverdrive = false;
    this.overdriveLasersGroup = new THREE.Group();
    this.overdriveLasersGroup.visible = false;
    this.planetGroup.add(this.overdriveLasersGroup);

    MAXI_CITIZENS.forEach((cit) => {
      if (!cit.isOg && !cit.isMythic) return;
      const beamLen = cit.isOg ? 85 : 52;
      const beamRadius = cit.isOg ? 1.8 : 0.95;
      const beamGeo = new THREE.CylinderGeometry(0.15, beamRadius, beamLen, 16, 1, true);
      const beamMat = new THREE.MeshBasicMaterial({
        color: cit.isOg ? 0x34d399 : 0xe5b869,
        transparent: true,
        opacity: cit.isOg ? 0.55 : 0.35,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending
      });
      const beamMesh = new THREE.Mesh(beamGeo, beamMat);

      const r = this.planetRadius + beamLen * 0.45;
      const cosLat = Math.cos(cit.lat);
      const pos = new THREE.Vector3(
        r * cosLat * Math.sin(cit.lon),
        r * Math.sin(cit.lat),
        r * cosLat * Math.cos(cit.lon)
      );
      beamMesh.position.copy(pos);
      beamMesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), pos.clone().normalize());
      this.overdriveLasersGroup.add(beamMesh);
    });
  }

  toggleOverdriveMode() {
    this.isOverdrive = !this.isOverdrive;
    document.body.classList.toggle('mwo-overdrive', this.isOverdrive);
    if (this.overdriveLasersGroup) {
      this.overdriveLasersGroup.visible = this.isOverdrive;
    }

    const navLbl = document.getElementById('overdriveNavLabel');
    const stageLbl = document.getElementById('overdriveStageLabel');
    const phaseEl = document.getElementById('hudPhaseBadge');

    if (this.isOverdrive) {
      this.targetWarpSpeed = 9.5;
      this.atmoMesh.material.color.setHex(0x34d399);
      this.atmoMesh.material.opacity = 0.24;
      if (this.rimLight1) this.rimLight1.color.setHex(0x34d399);
      this.ringMeshes.forEach((rm, idx) => {
        rm.material.color.setHex(idx % 2 === 0 ? 0x34d399 : 0xe5b869);
        rm.material.opacity = 0.22;
      });
      if (navLbl) navLbl.textContent = 'OVERDRIVE: ON';
      if (stageLbl) stageLbl.textContent = 'OVERDRIVE: ON';
      if (phaseEl) phaseEl.textContent = 'MWO OVERDRIVE // GREEN CANDLE PROTOCOL';

      sfx.playBeep(523.25, 0.12, 'sawtooth');
      setTimeout(() => sfx.playBeep(659.25, 0.14, 'sawtooth'), 70);
      setTimeout(() => sfx.playBeep(1046.5, 0.22, 'triangle'), 140);
    } else {
      this.targetWarpSpeed = 1.5;
      const maps = generateRealisticPlanetMaps(this.paletteIdx);
      this.atmoMesh.material.color.setHex(maps.atmoHex);
      this.atmoMesh.material.opacity = 0.15;
      if (this.rimLight1) this.rimLight1.color.setHex(0x38bdf8);
      this.ringMeshes.forEach((rm, idx) => {
        if (maps.ringColors[idx]) rm.material.color.setHex(maps.ringColors[idx]);
        rm.material.opacity = idx === 0 ? 0.14 : idx === 1 ? 0.09 : 0.06;
      });
      if (navLbl) navLbl.textContent = 'OVERDRIVE';
      if (stageLbl) stageLbl.textContent = 'OVERDRIVE';
      if (phaseEl) phaseEl.textContent = 'SCROLL TO ZOOM · DRAG TO ROTATE';
      sfx.playBeep(440, 0.09, 'sine');
    }
  }

  cycleBiomeAura() {
    this.paletteIdx = (this.paletteIdx + 1) % 3;
    const maps = generateRealisticPlanetMaps(this.paletteIdx);
    this.diffuseTex = new THREE.CanvasTexture(maps.diffCanvas);
    this.bumpTex = new THREE.CanvasTexture(maps.bumpCanvas);
    this.roughTex = new THREE.CanvasTexture(maps.roughCanvas);

    this.planetMesh.material.map = this.diffuseTex;
    this.planetMesh.material.bumpMap = this.bumpTex;
    this.planetMesh.material.roughnessMap = this.roughTex;
    this.planetMesh.material.needsUpdate = true;

    this.atmoMesh.material.color.setHex(this.isOverdrive ? 0x34d399 : maps.atmoHex);
    this.ringMeshes.forEach((rm, idx) => {
      if (maps.ringColors[idx]) rm.material.color.setHex(this.isOverdrive ? 0x34d399 : maps.ringColors[idx]);
    });

    const cycleBtn = document.getElementById('cycleBiomeBtn');
    const shortNames = ['SAPPHIRE', 'EMERALD', 'OBSIDIAN'];
    if (cycleBtn) cycleBtn.innerHTML = `<span>${shortNames[this.paletteIdx]}</span>`;
    sfx.playBeep(740, 0.1, 'triangle');
  }

  computeIntroRingOffsetY() {
    if (!this.stageContainer || !this.logoStage) return 0;
    const stageRect = this.stageContainer.getBoundingClientRect();
    const logoRect = this.logoStage.getBoundingClientRect();
    if (logoRect.height === 0 || stageRect.height === 0) return 38;
    const logoCenterY = logoRect.top - stageRect.top + logoRect.height / 2;
    const stageCenterY = stageRect.height / 2;
    const pixelOffset = stageCenterY - logoCenterY;
    return (pixelOffset / stageRect.height) * 265;
  }

  resizeCanvases() {
    const w = this.stageContainer ? this.stageContainer.clientWidth : window.innerWidth;
    const h = this.stageContainer ? this.stageContainer.clientHeight : window.innerHeight;
    this.spaceCanvas.width = w;
    this.spaceCanvas.height = h;
    this.fxCanvas.width = w;
    this.fxCanvas.height = h;
    if (this.renderer && this.camera) {
      this.renderer.setSize(w, h);
      this.camera.aspect = w / h;
      this.camera.fov = w < 720 ? 52 : 42;
      this.camera.updateProjectionMatrix();
    }
  }

  renderMiniRadar() {
    const radarCanvas = document.getElementById('miniRadarCanvas');
    if (!radarCanvas) return;
    const ctx = radarCanvas.getContext('2d');
    const w = radarCanvas.width;
    const h = radarCanvas.height;

    const drawRadar = (t = 0) => {
      ctx.fillStyle = '#05070c';
      ctx.fillRect(0, 0, w, h);

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.lineWidth = 1;
      const cx = w / 2;
      const cy = h / 2;
      [18, 34, 50].forEach((r) => {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.stroke();
      });

      MAXI_CITIZENS.forEach((cit, idx) => {
        const bx = cx + (cit.lon / Math.PI) * 48;
        const by = cy - (cit.lat / (Math.PI / 2)) * 42;
        ctx.fillStyle = cit.isOg
          ? '#e5b869'
          : idx === this.activeCitizenIndex
          ? '#ffffff'
          : 'rgba(255, 255, 255, 0.35)';
        ctx.beginPath();
        ctx.arc(bx, by, cit.isOg ? 4 : 1.6, 0, Math.PI * 2);
        ctx.fill();
      });

      const angle = (t * 0.002) % (Math.PI * 2);
      ctx.strokeStyle = 'rgba(229, 184, 105, 0.65)';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(angle) * 52, cy + Math.sin(angle) * 52);
      ctx.stroke();

      requestAnimationFrame(drawRadar);
    };
    requestAnimationFrame(drawRadar);
  }

  updateSurfacePins() {
    if (!this.planetGroup || !this.camera) return;
    const w = this.stageContainer.clientWidth;
    const h = this.stageContainer.clientHeight;
    const camPos = this.camera.position.clone();
    const planetCenter = this.planetGroup.position.clone();

    MAXI_CITIZENS.forEach((cit, idx) => {
      const el = cit.el;
      if (!el) return;

      if (this.state === 'ORBIT' && this.currentZoomLevel < 3.0) {
        el.style.opacity = '0';
        el.style.pointerEvents = 'none';
        return;
      }

      const r = this.planetRadius * 1.01;
      const cosLat = Math.cos(cit.lat);
      const localVec = new THREE.Vector3(
        r * cosLat * Math.sin(cit.lon),
        r * Math.sin(cit.lat),
        r * cosLat * Math.cos(cit.lon)
      );

      const worldVec = localVec.clone().applyMatrix4(this.planetGroup.matrixWorld);
      const surfaceNormal = worldVec.clone().sub(planetCenter).normalize();
      const toCam = camPos.clone().sub(worldVec).normalize();
      const facingDot = surfaceNormal.dot(toCam);

      const minDot = cit.isOg ? 0.08 : 0.22;
      if (facingDot < minDot) {
        el.style.opacity = '0';
        el.style.pointerEvents = 'none';
        return;
      }

      const ndc = worldVec.clone().project(this.camera);
      const sx = (ndc.x * 0.5 + 0.5) * w;
      const sy = (-(ndc.y * 0.5) + 0.5) * h;

      const distZoomFactor = Math.max(0.32, Math.min(1.45, 215 / this.camDist));
      const isSelected = idx === this.activeCitizenIndex;

      let baseScale;
      if (cit.isOg) {
        baseScale = 1.08 * distZoomFactor;
      } else if (isSelected) {
        baseScale = 1.15 * distZoomFactor;
      } else if (cit.isMythic) {
        baseScale = 0.78 * distZoomFactor;
      } else {
        baseScale = 0.64 * distZoomFactor;
      }

      const limbFactor = Math.min(1, (facingDot - minDot) * 2.6);
      const finalScale = baseScale * (0.74 + 0.26 * limbFactor);

      const visAlpha = limbFactor * Math.min(1, (this.currentZoomLevel - 2.5) / 3);
      el.style.opacity = visAlpha.toFixed(2);
      el.style.pointerEvents = visAlpha > 0.45 ? 'auto' : 'none';
      el.style.transform = `translate3d(${sx.toFixed(1)}px, ${sy.toFixed(1)}px, 0) translate(-50%, -65%) scale(${finalScale.toFixed(3)})`;
    });
  }

  startZoomSequence() {
    if (this.state === 'ZOOMING') return;
    if (this.state === 'LOCKED') {
      this.resetToOrbit(true);
      return;
    }

    if (this.introScreen) this.introScreen.classList.add('warp-exit');
    document.body.classList.remove('intro-locked');
    if (this.mainNavbar) this.mainNavbar.classList.remove('nav-hidden');
    if (this.diveHudLayer) this.diveHudLayer.classList.remove('hud-hidden');
    if (this.bottomCaBar) this.bottomCaBar.classList.remove('hud-hidden');

    this.targetWarpSpeed = 26;
    sfx.playWarpSound();
    sfx.playZoomSequenceSFX();

    this.state = 'ZOOMING';
    this.zoomStartTime = performance.now();

    this.activeCitizenIndex = 0;
    this.startRotY = ((this.planetRotY % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
    if (this.startRotY > Math.PI) this.startRotY -= Math.PI * 2;
    this.startRotY -= Math.PI * 2;
    this.startRotX = this.planetRotX;
    this.startOffsetY = this.planetGroup.position.y;
    this.targetCamDist = 195;

    this.arrivedCard.classList.remove('visible');
    this.reticleHud.classList.add('active');
  }

  resetToOrbit(autoReplay = false) {
    sfx.playBeep(660, 0.08);
    this.state = 'ORBIT';
    this.targetWarpSpeed = 1.5;
    this.reticleHud.classList.remove('active');
    this.arrivedCard.classList.remove('visible');
    this.currentZoomLevel = 1.5;

    if (autoReplay) {
      this.planetRotY = -2.4;
      this.planetRotX = 0.18;
      this.camDist = 360;
      setTimeout(() => this.startZoomSequence(), 100);
    } else {
      this.returnToIntroGate();
    }
  }

  returnToIntroGate() {
    sfx.playHoverSound();
    this.state = 'ORBIT';
    this.targetWarpSpeed = 1.5;
    this.currentZoomLevel = 1.5;
    this.camDist = 360;
    this.reticleHud.classList.remove('active');
    this.arrivedCard.classList.remove('visible');

    if (this.introScreen) this.introScreen.classList.remove('warp-exit');
    document.body.classList.add('intro-locked');
    if (this.mainNavbar) this.mainNavbar.classList.add('nav-hidden');
    if (this.diveHudLayer) this.diveHudLayer.classList.add('hud-hidden');
    if (this.bottomCaBar) this.bottomCaBar.classList.add('hud-hidden');
  }

  updateTelemetryHUD(zoom, altitudeKm, phaseText) {
    const altEl = document.getElementById('hudAltitude');
    const zoomEl = document.getElementById('hudZoom');
    const barEl = document.getElementById('hudZoomBar');
    const phaseEl = document.getElementById('hudPhaseBadge');
    const reticleText = document.getElementById('reticleReadout');

    if (altEl) {
      altEl.textContent =
        altitudeKm >= 10
          ? `${Math.round(altitudeKm).toLocaleString()} KM`
          : `${Math.max(85, Math.round(altitudeKm * 1000))} M`;
    }
    if (zoomEl) zoomEl.textContent = `z=${zoom.toFixed(1)}`;
    if (barEl) barEl.style.width = `${Math.min(100, Math.max(6, ((zoom - 1.5) / 16.9) * 100))}%`;
    if (phaseEl) phaseEl.textContent = phaseText;
    if (reticleText) {
      if (zoom < 5.5) reticleText.textContent = 'ORBITAL SLEW // 36 CITIZENS';
      else if (zoom < 12.5) reticleText.textContent = 'ATMOSPHERIC DESCENT';
      else if (zoom < 16.8) reticleText.textContent = 'APPROACHING GENESIS CITADEL';
      else reticleText.textContent = 'LOCKED // OG MAXI #001';
    }
  }

  drawFivePointStar(ctx, cx, cy, outerRadius, rotation, color, alpha) {
    const innerRadius = outerRadius * 0.42;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(rotation);
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
      const outerAngle = (i * 2 * Math.PI) / 5 - Math.PI / 2;
      const innerAngle = outerAngle + Math.PI / 5;
      if (i === 0) {
        ctx.moveTo(Math.cos(outerAngle) * outerRadius, Math.sin(outerAngle) * outerRadius);
      } else {
        ctx.lineTo(Math.cos(outerAngle) * outerRadius, Math.sin(outerAngle) * outerRadius);
      }
      ctx.lineTo(Math.cos(innerAngle) * innerRadius, Math.sin(innerAngle) * innerRadius);
    }
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.globalAlpha = alpha;
    ctx.fill();
    ctx.restore();
  }

  drawSpaceBackdrop() {
    const ctx = this.spaceCtx;
    const w = this.spaceCanvas.width;
    const h = this.spaceCanvas.height;

    this.baseWarpSpeed += (this.targetWarpSpeed - this.baseWarpSpeed) * 0.08;

    ctx.save();
    ctx.fillStyle = this.state === 'ZOOMING' ? 'rgba(3, 4, 8, 0.25)' : 'rgba(3, 4, 8, 0.52)';
    ctx.fillRect(0, 0, w, h);

    const cx = w / 2 + this.mouseX;
    const cy = h / 2 + this.mouseY;

    const globeRadius = Math.min(w, h) * 0.22;
    const haloGrad = ctx.createRadialGradient(w * 0.5, h * 0.42, globeRadius * 0.3, w * 0.5, h * 0.42, globeRadius * 1.8);
    haloGrad.addColorStop(0, 'rgba(56, 189, 248, 0.14)');
    haloGrad.addColorStop(0.5, 'rgba(229, 184, 105, 0.05)');
    haloGrad.addColorStop(1, 'transparent');
    ctx.fillStyle = haloGrad;
    ctx.beginPath();
    ctx.arc(w * 0.5, h * 0.42, globeRadius * 1.8, 0, Math.PI * 2);
    ctx.fill();

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.pz = p.z;
      p.z -= this.baseWarpSpeed * 3.8;
      p.angle += p.spinSpeed;

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
      const alpha = Math.min(1, depthRatio * 1.2);
      const radius = Math.max(0.4, depthRatio * p.size * 1.6);

      ctx.beginPath();
      ctx.strokeStyle = p.color;
      ctx.globalAlpha = alpha * 0.75;
      ctx.lineWidth = this.state === 'ZOOMING' ? radius * 1.3 : radius * 0.75;
      ctx.moveTo(px, py);
      ctx.lineTo(sx, sy);
      ctx.stroke();

      if (this.state !== 'ZOOMING' && alpha > 0.55) {
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(sx, sy, radius * 0.6, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.restore();
  }

  drawAtmosphericDiveFX(zoom, timeSec) {
    const ctx = this.fxCtx;
    const w = this.fxCanvas.width;
    const h = this.fxCanvas.height;
    ctx.clearRect(0, 0, w, h);

    if (zoom > 5.5 && zoom < 14.8) {
      ctx.save();
      this.cloudPuffs.forEach((puff) => {
        const localProgress = (zoom - puff.zStart) / 3.2;
        if (localProgress <= 0 || localProgress >= 1) return;

        const scale = Math.pow(localProgress, 1.8) * 3.6;
        const alpha = Math.sin(localProgress * Math.PI) * 0.26;
        const distPx = (puff.dist + localProgress * 0.55) * Math.max(w, h);
        const cx = w * 0.5 + Math.cos(puff.angle) * distPx;
        const cy = h * 0.5 + Math.sin(puff.angle) * distPx;
        const r = puff.size * (0.6 + scale);

        const cloudGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        cloudGrad.addColorStop(0, `rgba(${puff.tint}, ${alpha})`);
        cloudGrad.addColorStop(0.5, `rgba(186, 230, 253, ${alpha * 0.4})`);
        cloudGrad.addColorStop(1, 'transparent');

        ctx.fillStyle = cloudGrad;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();
    }

    // Green-Candle Overdrive Vertical Impulse Lasers & Telemetry
    if (this.isOverdrive) {
      ctx.save();
      const candleCount = 14;
      for (let i = 0; i < candleCount; i++) {
        const xNorm = ((i * 0.61803398875) % 1);
        const x = (0.04 + xNorm * 0.92) * w;
        const speed = 180 + (i % 5) * 85;
        const y = h - ((timeSec * speed + i * 190) % (h + 260));
        const candleH = 44 + (i % 4) * 28;

        // Wick
        ctx.strokeStyle = 'rgba(52, 211, 153, 0.32)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x, y - 16);
        ctx.lineTo(x, y + candleH + 16);
        ctx.stroke();

        // Green Candle Body
        const cGrad = ctx.createLinearGradient(x, y, x, y + candleH);
        cGrad.addColorStop(0, 'rgba(52, 211, 153, 0.55)');
        cGrad.addColorStop(1, 'rgba(52, 211, 153, 0.08)');
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

    const replayDiveBtn = document.getElementById('triggerZoomBtn');
    if (replayDiveBtn) replayDiveBtn.addEventListener('click', () => this.resetToOrbit(true));

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

    const ogSnapBtns = [
      document.getElementById('focusOgBtn'),
      document.getElementById('snapOgBtn'),
      document.getElementById('cardReturnOgBtn'),
      document.getElementById('quickJumpToMaxi'),
      document.getElementById('pillReturnOg')
    ];
    ogSnapBtns.forEach((btn) => {
      if (btn) {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          if (this.state === 'ORBIT') {
            this.startZoomSequence();
          } else {
            this.selectCitizen(0);
          }
        });
      }
    });

    this.mythicCounter = 1;
    const tourMythicsBtn = document.getElementById('tourMythicsBtn');
    if (tourMythicsBtn) {
      tourMythicsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const idx = ((this.mythicCounter - 1) % 5) + 1;
        this.mythicCounter++;
        this.selectCitizen(idx);
      });
    }

    const nextCitizenHandler = (e) => {
      if (e) e.preventDefault();
      this.selectCitizen(this.activeCitizenIndex + 1);
    };
    const prevCitizenHandler = (e) => {
      if (e) e.preventDefault();
      this.selectCitizen(this.activeCitizenIndex - 1);
    };

    const nextBtn = document.getElementById('btnTourSectors');
    if (nextBtn) nextBtn.addEventListener('click', nextCitizenHandler);
    const prevBtn = document.getElementById('btnPrevCitizen');
    if (prevBtn) prevBtn.addEventListener('click', prevCitizenHandler);
    const scanBtn = document.getElementById('scanSectorsBtn');
    if (scanBtn) scanBtn.addEventListener('click', nextCitizenHandler);

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

    const cycleBiomeBtn = document.getElementById('cycleBiomeBtn');
    if (cycleBiomeBtn) {
      cycleBiomeBtn.addEventListener('click', () => this.cycleBiomeAura());
    }

    this.isPinching = false;
    this.pinchPrevDist = 0;

    this.webglContainer.addEventListener('pointerdown', (e) => {
      if (this.isPinching) return;
      this.isDragging = true;
      this.dragPrevX = e.clientX;
      this.dragPrevY = e.clientY;
    });

    window.addEventListener('pointermove', (e) => {
      if (!this.isDragging || this.isPinching) return;
      const dx = e.clientX - this.dragPrevX;
      const dy = e.clientY - this.dragPrevY;
      this.dragPrevX = e.clientX;
      this.dragPrevY = e.clientY;

      this.planetRotY += dx * 0.007;
      this.planetRotX = Math.max(-1.05, Math.min(1.05, this.planetRotX + dy * 0.007));
      this.targetRotY = this.planetRotY;
      this.targetRotX = this.planetRotX;
    });

    window.addEventListener('pointerup', () => {
      this.isDragging = false;
    });

    // Mobile Two-Finger Pinch-to-Zoom on the 3D Planet
    this.stageContainer.addEventListener(
      'touchstart',
      (e) => {
        if (e.touches.length === 2) {
          this.isPinching = true;
          this.isDragging = false;
          const dx = e.touches[0].clientX - e.touches[1].clientX;
          const dy = e.touches[0].clientY - e.touches[1].clientY;
          this.pinchPrevDist = Math.hypot(dx, dy);
        }
      },
      { passive: true }
    );

    this.stageContainer.addEventListener(
      'touchmove',
      (e) => {
        if (this.state !== 'LOCKED' || e.touches.length !== 2) return;
        e.preventDefault();
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const dist = Math.hypot(dx, dy);
        const delta = this.pinchPrevDist - dist;
        this.pinchPrevDist = dist;

        this.targetCamDist = Math.max(142, Math.min(480, this.targetCamDist + delta * 0.9));
        const zVal = 18.4 - ((this.targetCamDist - 142) / (480 - 142)) * 16.2;
        const altKm = ((this.targetCamDist - 140) / 340) * 28500;
        this.updateTelemetryHUD(
          Math.max(1.8, zVal),
          altKm,
          this.targetCamDist > 300 ? 'ORBITAL OVERVIEW' : 'SURFACE LOCK · PINCH TO ZOOM'
        );
      },
      { passive: false }
    );

    this.stageContainer.addEventListener(
      'touchend',
      (e) => {
        if (e.touches.length < 2) {
          this.isPinching = false;
        }
      },
      { passive: true }
    );

    // Mouse Wheel / Trackpad Scroll to Zoom In & Out on the 3D Planet
    this.stageContainer.addEventListener(
      'wheel',
      (e) => {
        if (this.state !== 'LOCKED') return;
        if (e.target.closest('.citizen-roster-strip')) return;
        e.preventDefault();

        this.targetCamDist = Math.max(
          142,
          Math.min(480, this.targetCamDist + e.deltaY * 0.22)
        );

        const zVal = 18.4 - ((this.targetCamDist - 142) / (480 - 142)) * 16.2;
        const altKm = ((this.targetCamDist - 140) / 340) * 28500;
        this.updateTelemetryHUD(
          Math.max(1.8, zVal),
          altKm,
          this.targetCamDist > 300
            ? 'ORBITAL OVERVIEW'
            : 'SURFACE LOCK · SCROLL TO ZOOM'
        );
      },
      { passive: false }
    );
  }

  animate(now) {
    requestAnimationFrame(this.animate);
    const timeSec = now / 1000;

    if (this.asteroidBelt) this.asteroidBelt.rotation.z = timeSec * 0.05;
    if (this.cloudMesh) this.cloudMesh.rotation.y = timeSec * 0.015;

    if (this.state === 'ORBIT') {
      const targetOffsetY = this.computeIntroRingOffsetY();
      this.planetGroup.position.y += (targetOffsetY - this.planetGroup.position.y) * 0.15;
      this.camDist += (360 - this.camDist) * 0.12;
      this.camera.position.z = this.camDist;

      if (!this.isDragging) {
        if (this.orbitSpinMode === '3d') {
          this.planetRotY += 0.005;
          this.planetRotX += (0.18 - this.planetRotX) * 0.05;
        } else if (this.orbitSpinMode === 'gyro') {
          this.planetRotY += 0.014;
          this.planetRotX = Math.sin(timeSec * 1.4) * 0.45;
        } else if (this.orbitSpinMode === 'lock') {
          this.planetRotY += (0 - (this.planetRotY % (Math.PI * 2))) * 0.08;
          this.planetRotX += (0.18 - this.planetRotX) * 0.08;
        }
      }
      this.currentZoomLevel = 1.5;
    } else if (this.state === 'ZOOMING') {
      const elapsed = now - this.zoomStartTime;
      const t = Math.min(1, elapsed / this.zoomDuration);
      const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

      this.planetGroup.position.y = this.startOffsetY * (1 - Math.min(1, t / 0.35));

      this.planetRotY = this.startRotY * (1 - ease);
      this.planetRotX = this.startRotX + (0.18 - this.startRotX) * ease;
      this.targetRotY = 0;
      this.targetRotX = 0.18;

      this.camDist = 360 - ease * 165;
      this.targetCamDist = 195;
      this.camera.position.z = this.camDist;

      this.currentZoomLevel = 1.5 + ease * 16.9;
      const altitudeKm = 42000 * Math.pow(0.000005, t);

      let phaseStr = 'ORBITAL SCAN';
      if (t >= 0.25 && t < 0.62) phaseStr = 'ATMOSPHERIC ENTRY';
      else if (t >= 0.62 && t < 0.88) phaseStr = 'SURFACE APPROACH';
      else if (t >= 0.88) phaseStr = 'LOCKED ON OG MAXI';

      this.updateTelemetryHUD(this.currentZoomLevel, altitudeKm, phaseStr);

      if (t >= 1) {
        this.state = 'LOCKED';
        this.targetWarpSpeed = 1.5;
        this.reticleHud.classList.remove('active');
        this.selectCitizen(0);
        this.updateTelemetryHUD(18.4, 0.18, 'SCROLL TO ZOOM · DRAG TO ROTATE');
      }
    } else if (this.state === 'LOCKED') {
      const lockOffsetY = window.innerWidth <= 720 ? 44 : 12;
      this.planetGroup.position.y += (lockOffsetY - this.planetGroup.position.y) * 0.1;
      this.camDist += (this.targetCamDist - this.camDist) * 0.12;
      this.camera.position.z = this.camDist;

      if (!this.isDragging) {
        this.planetRotY += (this.targetRotY - this.planetRotY) * 0.08;
        this.planetRotX += (this.targetRotX - this.planetRotX) * 0.08;
      }
      this.currentZoomLevel = 18.4;
    }

    this.planetGroup.rotation.y = this.planetRotY;
    this.planetGroup.rotation.x = this.planetRotX;

    this.renderer.render(this.scene, this.camera);
    this.updateSurfacePins();
    this.drawSpaceBackdrop();
    this.drawAtmosphericDiveFX(this.currentZoomLevel, timeSec);
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
    hudTelemetry.textContent = `${d.toISOString().slice(11, 19)}.${ms} UTC`;
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
          hudStatusText.textContent = 'GYRO SCAN — 36 CITIZENS ACTIVE';
        } else {
          hudStatusText.textContent = 'ORBITAL LOCK — 36 CITIZENS ON SURFACE';
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

  const copyCA = async (textElId, defaultLabel, codeElId) => {
    const el = document.getElementById(textElId);
    let copied = false;
    try {
      if (!navigator.clipboard || typeof navigator.clipboard.writeText !== 'function') {
        throw new Error('Clipboard API unavailable');
      }
      await navigator.clipboard.writeText(LIVE_CA);
      copied = true;
    } catch (_) {
      // Clipboard can be blocked (permissions, insecure context, embedded preview).
      // Select the full address so the visitor can copy it manually.
      const codeEl = document.getElementById(codeElId);
      if (codeEl) {
        const range = document.createRange();
        range.selectNodeContents(codeEl);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }

    if (el) {
      el.textContent = copied ? 'COPIED' : 'SELECT & COPY';
      setTimeout(() => { el.textContent = defaultLabel; }, copied ? 1600 : 2600);
    }
    if (copied) sfx.playBeep(1120, 0.1);
  };

  const introCopyBtn = document.getElementById('intro-copy-ca-btn');
  if (introCopyBtn) {
    introCopyBtn.addEventListener('click', () => copyCA('intro-copy-ca-text', 'COPY', 'intro-ca-value'));
  }

  const bottomCopyBtn = document.getElementById('copyCaBtn');
  if (bottomCopyBtn) {
    bottomCopyBtn.addEventListener('click', () => copyCA('copyBadge', 'COPY CA', 'caText'));
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

    // Canvas text must be drawn again once the display fonts are available,
    // otherwise exports keep the fallback metrics and can clip long callsigns.
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready
        .then(() => {
          this.renderPfpCanvas();
          this.updateRankCalculations();
        })
        .catch(() => {});
    }
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
    this.lastFocused = document.activeElement;
    document.querySelectorAll('.suite-modal').forEach((m) => {
      m.classList.add('hidden');
      m.setAttribute('aria-hidden', 'true');
    });
    const target = document.getElementById(modalId);
    if (target) {
      target.classList.remove('hidden');
      target.setAttribute('aria-hidden', 'false');
      const closeBtn = target.querySelector('.suite-close-btn');
      if (closeBtn) closeBtn.focus({ preventScroll: true });
    }

    if (modalId === 'pfpModal') {
      this.renderPfpCanvas();
    } else if (modalId === 'rankModal') {
      this.updateRankCalculations();
    } else if (modalId === 'chartModal') {
      this.loadChartIframe();
    }
  }

  loadChartIframe() {
    const frame = document.getElementById('dexScreenerIframe');
    if (!frame) return;
    const src = frame.dataset.src;
    if (src && frame.getAttribute('src') !== src) frame.src = src;
  }

  closeAllModals() {
    const openModal = this.getOpenModal();
    if (!openModal) return;
    sfx.playBeep(520, 0.07, 'sine');
    document.querySelectorAll('.suite-modal').forEach((m) => {
      m.classList.add('hidden');
      m.setAttribute('aria-hidden', 'true');
    });
    if (this.lastFocused && document.contains(this.lastFocused)) {
      this.lastFocused.focus({ preventScroll: true });
    }
  }

  getOpenModal() {
    return [...document.querySelectorAll('.suite-modal')].find(
      (m) => !m.classList.contains('hidden')
    );
  }

  trapModalFocus(e) {
    const openModal = this.getOpenModal();
    if (!openModal || e.key !== 'Tab') return;
    const focusable = [...openModal.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )].filter((el) => el.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
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

    // Open active planet citizen directly in PFP Studio
    const customizeActiveBtn = document.getElementById('btnCustomizeActive');
    if (customizeActiveBtn) {
      customizeActiveBtn.addEventListener('click', () => {
        this.selectPfpCitizen(this.planetCtrl.activeCitizenIndex);
        this.openModal('pfpModal');
      });
    }

    document.querySelectorAll('[data-close-modal]').forEach((el) => {
      el.addEventListener('click', () => this.closeAllModals());
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeAllModals();
        return;
      }
      this.trapModalFocus(e);
    });
  }

  /* -----------------------------------------------------------------------
     1. 36-CITIZEN VAULT GRID & RAID DOWNLOAD PACK
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
          <div class="v-card-stage" title="Click to locate on 3D Planet">
            <img src="${cit.src}" alt="${cit.name}" loading="lazy" />
          </div>
          <div class="v-card-name">${cit.name}</div>
        </div>
        <div class="v-card-actions">
          <button type="button" class="v-act-btn btn-locate">LOCATE</button>
          <button type="button" class="v-act-btn btn-studio">STUDIO</button>
          <a href="${cit.src}" download="${cit.name.toLowerCase().replace(/\s+/g, '-')}.png" class="v-act-btn">PNG ⬇</a>
        </div>
      `;

      // Locate on 3D Planet
      const locateFn = () => {
        this.closeAllModals();
        this.planetCtrl.selectCitizen(idx);
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
          } catch (_) {
            // Clipboard can be blocked (permissions, insecure context).
            // Report it honestly and fall back to downloading the PNG.
            const lbl = document.getElementById('copyPfpLabel');
            if (lbl) {
              lbl.textContent = 'COPY BLOCKED — DOWNLOADING PNG';
              setTimeout(() => { lbl.textContent = 'COPY IMAGE TO CLIPBOARD'; }, 2600);
            }
            const link = document.createElement('a');
            link.download = `mwo-${this.pfpFormat}-${MAXI_CITIZENS[this.pfpCitizenIdx]?.rank.replace('#', '') || 0}.png`;
            link.href = this.pfpCanvas.toDataURL('image/png');
            link.click();
          }
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
      ctx.fillText(wmText, 70, h * 0.46, w * 0.58);
    } else {
      ctx.fillText(wmText, w * 0.5, h * 0.2, w * 0.86);
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
      ctx.fillText((this.pfpCustomText || cit.name).toUpperCase(), 72, h * 0.5, w * 0.6);

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
      ctx.fillText(`${cit.rank} · ${this.pfpCustomText.toUpperCase()}`, w / 2, py + pillH / 2, pillW - 36);
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
          } catch (_) {
            // Clipboard can be blocked (permissions, insecure context).
            // Report it honestly and fall back to downloading the PNG.
            const lbl = document.getElementById('copyRankCardLabel');
            if (lbl) {
              lbl.textContent = 'COPY BLOCKED — DOWNLOADING PNG';
              setTimeout(() => { lbl.textContent = 'COPY DOSSIER TO CLIPBOARD'; }, 2600);
            }
            const link = document.createElement('a');
            link.download = `mwo-sovereign-dossier-${this.rankBagSize}.png`;
            link.href = this.rankCanvas.toDataURL('image/png');
            link.click();
          }
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
    ctx.fillText((this.rankCallsign || 'MWO OPERATIVE').toUpperCase(), 56, 182, 500);

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
      ctx.fillText(m.val, bx + 18, by + 68, 212);
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
