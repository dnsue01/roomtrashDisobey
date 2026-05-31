/**
 * BASED NATION: THE GAME
 * System Software Version: 1.3
 * Written for: roomtrash6 / DISOBEY
 */

// ==========================================================================
// 1. DATA CONFIGURATIONS
// ==========================================================================

const SHOWS_DATA = [
    {
        id: 0,
        title: "MADRID @ CAFÉ BERLÍN",
        venue: "Café Berlín, Madrid (España)",
        date: "28 de Junio de 2026",
        meta: "28 JUN 2026 | ENTRADA DISPONIBLE | 136 KB",
        ticketUrl: "https://www.ticketrona.com/evento/christ-dillinger-acid-soulja-roomtrash6-cybernene-en-madrid",
        status: "EN CURSO / ENTRADAS",
        size: "136 KB",
        type: "Show File (Gig Info)",
        desc: "Concierto oficial en Madrid junto a Christ Dillinger, Acid Souljah y Cybernene. Adquiere tu entrada en el enlace."
    },
    {
        id: 1,
        title: "BARCELONA @ RAZZMATAZZ 3",
        venue: "Sala Razzmatazz 3, Barcelona",
        date: "10 de Abril de 2026",
        meta: "10 APR 2026 | CONCLUIDO | 120 KB",
        ticketUrl: "https://www.instagram.com/roomtrash6/",
        status: "COMPLETADO / CONCLUIDO",
        size: "120 KB",
        type: "Show File (Past Gig)",
        desc: "Concierto realizado. Presentación oficial del colectivo DISOBEY en la capital catalana. Aforo completo."
    },
    {
        id: 2,
        title: "MADRID @ SALA UNI",
        venue: "Sala Uni, Madrid",
        date: "17 de Abril de 2026",
        meta: "17 APR 2026 | CONCLUIDO | 120 KB",
        ticketUrl: "https://www.instagram.com/roomtrash6/",
        status: "COMPLETADO / CONCLUIDO",
        size: "120 KB",
        type: "Show File (Past Gig)",
        desc: "Concierto de doble fecha en Madrid en la Sala Uni. Éxito total de asistencia."
    },
    {
        id: 3,
        title: "VALENCIA @ SPOOK CLUB",
        venue: "Spook Club, Valencia",
        date: "20 de Marzo de 2026",
        meta: "20 MAR 2026 | CONCLUIDO | 115 KB",
        ticketUrl: "https://www.instagram.com/roomtrash6/",
        status: "COMPLETADO / CONCLUIDO",
        size: "115 KB",
        type: "Show File (Past Gig)",
        desc: "Concierto en Spook Club con Acid Souljah, Cybernene e Ynestrosa. Despliegue de bajos completado."
    }
];

const MERCH_DATA = [
    {
        id: 0,
        name: "HOODIE 'SYSTEM FAILURE'",
        price: 55.00,
        desc: "Sudadera negra oversized premium con logo en cromo metálico y gráfica verde radiactiva estilo cyber-grunge. Capucha pesada de felpa perchada de alta densidad y tacto rústico.",
        image: "assets/hoodie_merch.png",
        specs: {
            "PRECIO:": "55.00 €",
            "MATERIAL:": "100% ALGODÓN / 400 GSM",
            "TALLAS:": "S, M, L, XL, XXL",
            "ESTADO:": "DISPONIBLE EN ARMERÍA"
        },
        url: "https://www.instagram.com/roomtrash6/",
        discountRatio: 0.15 // Can get up to 15% discount
    },
    {
        id: 1,
        name: "EP 'BASED NATION'",
        price: 5.00,
        desc: "Álbum debut completo de roomtrash en formato digital HQ. Contiene colaboraciones de la escena urbana underground. Portada basada en zombies y bosque.",
        image: "assets/based_nation.png",
        specs: {
            "PRECIO:": "5.00 €",
            "FORMATO:": "DIGITAL HQ / WAV & MP3",
            "PISTAS:": "BASED NATION EP",
            "ESTADO:": "DESCARGA INMEDIATA"
        },
        url: "https://open.spotify.com/intl-es/artist/1VdDHkm5XpSy9OZiNTCzjE",
        discountRatio: 1.00 // Can get it 100% free with enough points!
    },
    {
        id: 2,
        name: "SINGLE 'ES LO KE HAY'",
        price: 1.50,
        desc: "El single oficial 'Day N Night Remix Remix' con su arte gráfico original de slime verde, podio presidencial y cadenas de oro.",
        image: "assets/es_lo_ke_hay.jpg",
        specs: {
            "PRECIO:": "1.50 €",
            "FORMATO:": "DIGITAL HQ / WAV",
            "EDICIÓN:": "DISOBEY PRESENTA",
            "ESTADO:": "DESCARGA INMEDIATA"
        },
        url: "https://open.spotify.com/intl-es/artist/1VdDHkm5XpSy9OZiNTCzjE",
        discountRatio: 1.00
    },
    {
        id: 3,
        name: "SINGLE '#YOLONOTO'",
        price: 1.50,
        desc: "Single digital '#YOLONOTO' con el arte original enmarcado en diamantes brillantes y fondo playero tropical.",
        image: "assets/yolonoto.jpg",
        specs: {
            "PRECIO:": "1.50 €",
            "FORMATO:": "DIGITAL HQ / WAV",
            "EDICIÓN:": "ROOMTRASH6",
            "ESTADO:": "DESCARGA INMEDIATA"
        },
        url: "https://open.spotify.com/intl-es/artist/1VdDHkm5XpSy9OZiNTCzjE",
        discountRatio: 1.00
    }
];

const BEATS_DATA = [
    {
        id: 0,
        name: "PROBLEM? (ft. JOHNNYFUU)",
        genre: "Based Nation",
        length: "1:30",
        tempo: 140,
        description: "Colaboración insígnia del álbum Based Nation con Bring Me The Horizon sample.",
        spotifyUrl: "https://open.spotify.com/track/7MeuRThWTJv9SEevVVYQ0d"
    },
    {
        id: 1,
        name: "BASED ANTHEM (ft. JOHNNYFUU & Aft3rlife)",
        genre: "Based Nation",
        length: "1:20",
        tempo: 138,
        description: "Himno underground con colaboraciones del colectivo Disobey.",
        spotifyUrl: "https://open.spotify.com/track/2XwEEPXUAZ4zy9DgsxTzj9"
    },
    {
        id: 2,
        name: "FREESTYLE 2000 (ft. Aft3rlife)",
        genre: "Based Nation",
        length: "1:15",
        tempo: 145,
        description: "Estilo retro Y2K con líricas rápidas y deconstructivas.",
        spotifyUrl: "https://open.spotify.com/track/7m10oRHfy8k6YdUR4vkc3g"
    },
    {
        id: 3,
        name: "MADONNA (ft. Biberon)",
        genre: "Based Nation",
        length: "1:10",
        tempo: 130,
        description: "Colaboración electrónica e industrial del álbum Based Nation.",
        spotifyUrl: "https://open.spotify.com/track/2TxlUAEWBbWPrsSZIs01ki"
    }
];

// ==========================================================================
// 2. STATE MACHINE
// ==========================================================================

const AppState = {
    currentScreen: 'boot', // boot, menu, game, shows, beats, merch, bio
    menuIndex: 0,
    showsIndex: 0,
    beatsIndex: 0,
    merchIndex: 0,
    
    // Global User Stats / Game Save File
    basedPoints: 0,
    zombieKills: 0,
    moneyValue: 0.00,
    
    // Audio Player
    audioPlaying: false,
    audioInitialized: false,
    spotifyWidgetCollapsed: true
};

function saveGameProgress() {
    localStorage.setItem('based_nation_points', AppState.basedPoints);
    localStorage.setItem('based_nation_kills', AppState.zombieKills);
    localStorage.setItem('based_nation_money', AppState.moneyValue);
    console.log("Game progress saved to localStorage.");
}

function loadGameProgress() {
    const pts = localStorage.getItem('based_nation_points');
    const kills = localStorage.getItem('based_nation_kills');
    const money = localStorage.getItem('based_nation_money');
    
    if (pts !== null) AppState.basedPoints = parseInt(pts, 10);
    if (kills !== null) AppState.zombieKills = parseInt(kills, 10);
    if (money !== null) AppState.moneyValue = parseFloat(money);
    
    // Update global stat visual displays
    const killsCountEl = document.getElementById('global-kills-count');
    if (killsCountEl) killsCountEl.textContent = AppState.zombieKills;
    
    const moneyCountEl = document.getElementById('global-money-count');
    if (moneyCountEl) moneyCountEl.textContent = AppState.moneyValue.toFixed(2) + ' €';
    
    const ptsDispEl = document.getElementById('shop-points-display');
    if (ptsDispEl) ptsDispEl.textContent = AppState.basedPoints;
}

const SCREEN_MAPPING = ['screen-game', 'screen-shows', 'screen-beats', 'screen-bio'];
const SCREEN_NAMES = ['game', 'shows', 'beats', 'bio'];

// ==========================================================================
// 3. SYNTHESIZER RETRO AUDIO ENGINE (Web Audio API)
// ==========================================================================

class AudioEngine {
    constructor() {
        this.ctx = null;
        this.masterVolume = null;
        this.synthInterval = null;
        this.analyser = null;
        this.dataArray = null;
    }

    init() {
        if (AppState.audioInitialized) return;
        try {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioCtx();
            
            this.masterVolume = this.ctx.createGain();
            this.masterVolume.gain.setValueAtTime(0.25, this.ctx.currentTime); // Safe master volume
            
            this.analyser = this.ctx.createAnalyser();
            this.analyser.fftSize = 64;
            this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
            
            this.analyser.connect(this.masterVolume);
            this.masterVolume.connect(this.ctx.destination);
            
            AppState.audioInitialized = true;
            console.log("Audio Engine Initialized.");
        } catch (e) {
            console.error("Web Audio not supported.", e);
        }
    }

    resume() {
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    // Play scary console BIOS pad chord
    playBiosSwell() {
        this.resume();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        
        // Deep horror swell (sine sub drone)
        const sub = this.ctx.createOscillator();
        const subGain = this.ctx.createGain();
        sub.type = 'sine';
        sub.frequency.setValueAtTime(45, now); // F#1
        subGain.gain.setValueAtTime(0, now);
        subGain.gain.linearRampToValueAtTime(0.7, now + 2);
        subGain.gain.exponentialRampToValueAtTime(0.001, now + 6);
        sub.connect(subGain);
        subGain.connect(this.masterVolume);
        sub.start(now);
        sub.stop(now + 6.5);
        
        // Creepy minor chord pad
        const chords = [92.5, 110, 138.6, 174.6]; // F#m9 base notes
        chords.forEach((freq, idx) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            const filter = this.ctx.createBiquadFilter();
            
            osc.type = idx % 2 === 0 ? 'sawtooth' : 'triangle';
            osc.frequency.setValueAtTime(freq, now);
            
            filter.type = 'lowpass';
            filter.frequency.setValueAtTime(60, now);
            filter.frequency.exponentialRampToValueAtTime(350 + (idx * 50), now + 3);
            filter.Q.setValueAtTime(4, now);
            
            gain.gain.setValueAtTime(0, now);
            gain.gain.linearRampToValueAtTime(0.12, now + 1.5 + (idx * 0.2));
            gain.gain.exponentialRampToValueAtTime(0.001, now + 5.5);
            
            osc.connect(filter);
            filter.connect(gain);
            gain.connect(this.masterVolume);
            
            osc.start(now);
            osc.stop(now + 6.0);
        });
    }

    // Gunshot Synth Sound (noise blast + envelope sweep)
    playGunshotSound() {
        this.resume();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        
        // Blast (noise buffer)
        const bufferSize = this.ctx.sampleRate * 0.35; // 0.35s blast
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }
        
        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;
        
        const noiseFilter = this.ctx.createBiquadFilter();
        noiseFilter.type = 'bandpass';
        noiseFilter.frequency.setValueAtTime(1000, now);
        noiseFilter.frequency.exponentialRampToValueAtTime(150, now + 0.3);
        
        const noiseGain = this.ctx.createGain();
        noiseGain.gain.setValueAtTime(0.8, now);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.32);
        
        noise.connect(noiseFilter);
        noiseFilter.connect(noiseGain);
        noiseGain.connect(this.masterVolume);
        noise.start(now);
        
        // Deep low frequency punch oscillator
        const punch = this.ctx.createOscillator();
        const punchGain = this.ctx.createGain();
        punch.type = 'triangle';
        punch.frequency.setValueAtTime(180, now);
        punch.frequency.exponentialRampToValueAtTime(30, now + 0.15);
        
        punchGain.gain.setValueAtTime(0.9, now);
        punchGain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
        
        punch.connect(punchGain);
        punchGain.connect(this.masterVolume);
        punch.start(now);
        punch.stop(now + 0.2);
    }

    // Mechanical reload clicks (two sharp ticks)
    playReloadSound() {
        this.resume();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        
        // First tick (magazine out)
        const osc1 = this.ctx.createOscillator();
        const gain1 = this.ctx.createGain();
        osc1.type = 'square';
        osc1.frequency.setValueAtTime(1200, now);
        osc1.frequency.setValueAtTime(400, now + 0.05);
        gain1.gain.setValueAtTime(0.18, now);
        gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        osc1.connect(gain1);
        gain1.connect(this.masterVolume);
        osc1.start(now);
        osc1.stop(now + 0.1);
        
        // Second tick (slide lock back) at now + 0.5s
        const osc2 = this.ctx.createOscillator();
        const gain2 = this.ctx.createGain();
        osc2.type = 'square';
        osc2.frequency.setValueAtTime(1800, now + 0.4);
        osc2.frequency.setValueAtTime(900, now + 0.45);
        gain2.gain.setValueAtTime(0.2, now + 0.4);
        gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.48);
        osc2.connect(gain2);
        gain2.connect(this.masterVolume);
        osc2.start(now + 0.4);
        osc2.stop(now + 0.5);
    }

    // Zombie damage / kill shriek (detuned high pitch scream)
    playZombieScream() {
        this.resume();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        
        const osc1 = this.ctx.createOscillator();
        const osc2 = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();
        
        osc1.type = 'sawtooth';
        osc1.frequency.setValueAtTime(330, now);
        osc1.frequency.linearRampToValueAtTime(80, now + 0.25);
        
        osc2.type = 'sawtooth';
        osc2.frequency.setValueAtTime(327, now); // detune
        osc2.frequency.linearRampToValueAtTime(75, now + 0.25);
        
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(800, now);
        filter.frequency.linearRampToValueAtTime(200, now + 0.25);
        filter.Q.setValueAtTime(3, now);
        
        gain.gain.setValueAtTime(0.22, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
        
        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(gain);
        gain.connect(this.masterVolume);
        
        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + 0.3);
        osc2.stop(now + 0.3);
    }

    // UI Click sound
    playClickSound() {
        this.resume();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(150, now + 0.06);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
        osc.connect(gain);
        gain.connect(this.masterVolume);
        osc.start(now);
        osc.stop(now + 0.08);
    }

    // UI Confirm select chime
    playSelectSound() {
        this.resume();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const sub = this.ctx.createOscillator();
        const subGain = this.ctx.createGain();
        sub.type = 'triangle';
        sub.frequency.setValueAtTime(90, now);
        sub.frequency.exponentialRampToValueAtTime(35, now + 0.3);
        subGain.gain.setValueAtTime(0.4, now);
        subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
        sub.connect(subGain);
        subGain.connect(this.masterVolume);
        sub.start(now);
        sub.stop(now + 0.4);
        
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(660, now + 0.25);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.connect(gain);
        gain.connect(this.masterVolume);
        osc.start(now);
        osc.stop(now + 0.3);
    }

    // UI Cancel back tone
    playBackSound() {
        this.resume();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.setValueAtTime(200, now + 0.06);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
        osc.connect(gain);
        gain.connect(this.masterVolume);
        osc.start(now);
        osc.stop(now + 0.2);
    }

    // Buzzing error buzzer
    playErrorSound() {
        this.resume();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc1 = this.ctx.createOscillator();
        const osc2 = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();
        
        osc1.type = 'sawtooth';
        osc1.frequency.setValueAtTime(100, now);
        osc2.type = 'sawtooth';
        osc2.frequency.setValueAtTime(102, now);
        
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(220, now);
        
        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        
        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(gain);
        gain.connect(this.masterVolume);
        
        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + 0.3);
        osc2.stop(now + 0.3);
    }

    // DJ Scratch Sound FX
    playVinylScratch() {
        this.resume();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();
        
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.linearRampToValueAtTime(800, now + 0.1);
        osc.frequency.linearRampToValueAtTime(180, now + 0.22);
        
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(900, now);
        filter.frequency.linearRampToValueAtTime(1300, now + 0.22);
        filter.Q.setValueAtTime(2.5, now);
        
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.24);
        
        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.masterVolume);
        
        osc.start(now);
        osc.stop(now + 0.26);
    }

    // Wailing Police Siren FX
    playPoliceSiren() {
        this.resume();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(550, now);
        
        const duration = 1.6;
        for (let t = 0; t < duration * 10; t++) {
            const timeOffset = t * 0.1;
            const freq = 550 + Math.sin(timeOffset * Math.PI * 2.5) * 120;
            osc.frequency.setValueAtTime(freq, now + timeOffset);
        }
        
        gain.gain.setValueAtTime(0.0, now);
        gain.gain.linearRampToValueAtTime(0.1, now + 0.15);
        gain.gain.setValueAtTime(0.1, now + duration - 0.2);
        gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
        
        osc.connect(gain);
        gain.connect(this.masterVolume);
        
        osc.start(now);
        osc.stop(now + duration + 0.05);
    }

    // Beats Sequencer Loops (EL SIMÓN, ES LO KE HAY, ENVIDIA, YOLONOTO)
    startBeatEngine(trackId) {
        this.stopBeatEngine();
        this.resume();
        if (!this.ctx) return;
        
        const track = BEATS_DATA[trackId];
        const tempo = track.tempo;
        const noteLength = 60 / tempo / 2; // Eighth notes
        
        const scheduleNextMeasure = () => {
            const now = this.ctx.currentTime;
            
            for (let i = 0; i < 16; i++) {
                const noteTime = now + (i * noteLength);
                this.triggerProceduralNote(trackId, i, noteTime);
            }
            
            this.synthInterval = setTimeout(() => {
                scheduleNextMeasure();
            }, noteLength * 16 * 1000);
        };
        
        scheduleNextMeasure();
    }

    stopBeatEngine() {
        if (this.synthInterval) {
            clearTimeout(this.synthInterval);
            this.synthInterval = null;
        }
    }

    triggerProceduralNote(trackId, step, time) {
        if (!this.ctx) return;
        
        const track = BEATS_DATA[trackId];
        const tempo = track.tempo;
        const noteLength = 60 / tempo / 2; // Eighth notes
        
        // Track 0: WEST COAST RIDE (G-Funk Style, 92 BPM)
        if (trackId === 0) {
            // 1. Heavy sub-bass line
            if (step === 0 || step === 4 || step === 8 || step === 12) {
                const bassFreq = step === 12 ? 65.41 : 55.00;
                const bass = this.ctx.createOscillator();
                const bassGain = this.ctx.createGain();
                bass.type = 'triangle';
                bass.frequency.setValueAtTime(bassFreq, time);
                bassGain.gain.setValueAtTime(0.3, time);
                bassGain.gain.exponentialRampToValueAtTime(0.001, time + 0.4);
                bass.connect(bassGain);
                bassGain.connect(this.analyser);
                bass.start(time);
                bass.stop(time + 0.45);
            }
            // 2. Sine kick
            if (step === 0 || step === 8 || step === 10) {
                const kick = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                kick.type = 'sine';
                kick.frequency.setValueAtTime(120, time);
                kick.frequency.exponentialRampToValueAtTime(45, time + 0.2);
                gain.gain.setValueAtTime(0.5, time);
                gain.gain.exponentialRampToValueAtTime(0.001, time + 0.22);
                kick.connect(gain);
                gain.connect(this.analyser);
                kick.start(time);
                kick.stop(time + 0.24);
            }
            // 3. Lazy clap
            if (step === 4 || step === 12) {
                const clap = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                const filter = this.ctx.createBiquadFilter();
                clap.type = 'triangle';
                clap.frequency.setValueAtTime(180, time);
                filter.type = 'bandpass';
                filter.frequency.setValueAtTime(1000, time);
                filter.Q.setValueAtTime(1.5, time);
                gain.gain.setValueAtTime(0.18, time);
                gain.gain.exponentialRampToValueAtTime(0.001, time + 0.15);
                clap.connect(filter);
                filter.connect(gain);
                gain.connect(this.analyser);
                clap.start(time);
                clap.stop(time + 0.17);
            }
            // 4. G-Funk Whistle Lead (High portamento sine)
            const whistleMelody = [880, 880, 987.77, 1174.66, 1318.51, 1174.66, 987.77, 880];
            const whistleStep = [0, 2, 4, 6, 8, 10, 12, 14];
            const mIdx = whistleStep.indexOf(step);
            if (mIdx !== -1) {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                const nextFreq = whistleMelody[(mIdx + 1) % whistleMelody.length];
                osc.type = 'sine';
                osc.frequency.setValueAtTime(whistleMelody[mIdx], time);
                osc.frequency.exponentialRampToValueAtTime(nextFreq, time + noteLength * 0.9);
                
                gain.gain.setValueAtTime(0.0, time);
                gain.gain.linearRampToValueAtTime(0.05, time + 0.05);
                gain.gain.setValueAtTime(0.05, time + noteLength * 0.7);
                gain.gain.exponentialRampToValueAtTime(0.001, time + noteLength);
                
                osc.connect(gain);
                gain.connect(this.analyser);
                osc.start(time);
                osc.stop(time + noteLength + 0.05);
            }
        }
        // Track 1: NY BOOM BAP (East Coast Street, 88 BPM)
        else if (trackId === 1) {
            // 1. Vinyl dust crackle
            if (Math.random() < 0.4) {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(10000 + Math.random() * 5000, time);
                gain.gain.setValueAtTime(0.003, time);
                gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.01);
                osc.connect(gain);
                gain.connect(this.analyser);
                osc.start(time);
                osc.stop(time + 0.015);
            }
            // 2. Heavy kick
            if (step === 0 || step === 3 || step === 8 || step === 11) {
                const kick = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                kick.type = 'sine';
                kick.frequency.setValueAtTime(110, time);
                kick.frequency.exponentialRampToValueAtTime(40, time + 0.25);
                gain.gain.setValueAtTime(0.55, time);
                gain.gain.exponentialRampToValueAtTime(0.001, time + 0.27);
                kick.connect(gain);
                gain.connect(this.analyser);
                kick.start(time);
                kick.stop(time + 0.3);
            }
            // 3. Stomping Snare
            if (step === 4 || step === 12) {
                const snare = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                const filter = this.ctx.createBiquadFilter();
                snare.type = 'sawtooth';
                snare.frequency.setValueAtTime(220, time);
                filter.type = 'bandpass';
                filter.frequency.setValueAtTime(1200, time);
                filter.Q.setValueAtTime(2.0, time);
                gain.gain.setValueAtTime(0.18, time);
                gain.gain.exponentialRampToValueAtTime(0.001, time + 0.16);
                snare.connect(filter);
                filter.connect(gain);
                gain.connect(this.analyser);
                snare.start(time);
                snare.stop(time + 0.18);
            }
            // 4. Double Bass Pluck
            const bassNotes = [55.00, 55.00, 65.41, 73.42, 65.41, 55.00, 49.00, 49.00];
            const bassSteps = [0, 3, 6, 8, 10, 11, 14, 15];
            const bIdx = bassSteps.indexOf(step);
            if (bIdx !== -1) {
                const bass = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                bass.type = 'triangle';
                bass.frequency.setValueAtTime(bassNotes[bIdx], time);
                gain.gain.setValueAtTime(0.25, time);
                gain.gain.exponentialRampToValueAtTime(0.001, time + 0.35);
                bass.connect(gain);
                gain.connect(this.analyser);
                bass.start(time);
                bass.stop(time + 0.4);
            }
            // 5. East Coast Brass Horn Stab
            if (step === 2 || step === 10) {
                const chords = [196.00, 246.94, 293.66, 392.00];
                chords.forEach((freq, idx) => {
                    const horn = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();
                    const filter = this.ctx.createBiquadFilter();
                    horn.type = 'sawtooth';
                    horn.frequency.setValueAtTime(freq, time);
                    horn.detune.setValueAtTime((idx - 1.5) * 8, time);
                    
                    filter.type = 'peaking';
                    filter.frequency.setValueAtTime(800, time);
                    filter.frequency.exponentialRampToValueAtTime(300, time + 0.22);
                    filter.Q.setValueAtTime(4.0, time);
                    
                    gain.gain.setValueAtTime(0, time);
                    gain.gain.linearRampToValueAtTime(0.06, time + 0.02);
                    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.25);
                    
                    horn.connect(filter);
                    filter.connect(gain);
                    gain.connect(this.analyser);
                    horn.start(time);
                    horn.stop(time + 0.35);
                });
            }
        }
        // Track 2: CLUB BANGER (Scott Storch Style, 105 BPM)
        else if (trackId === 2) {
            // 1. Bass line
            const bassPattern = [55.00, 55.00, 65.41, 73.42, 82.41, 73.42, 65.41, 55.00];
            const bassSteps = [0, 2, 4, 6, 8, 10, 12, 14];
            const bsIdx = bassSteps.indexOf(step);
            if (bsIdx !== -1) {
                const bass = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                bass.type = 'sine';
                bass.frequency.setValueAtTime(bassPattern[bsIdx], time);
                gain.gain.setValueAtTime(0.4, time);
                gain.gain.exponentialRampToValueAtTime(0.001, time + 0.18);
                bass.connect(gain);
                gain.connect(this.analyser);
                bass.start(time);
                bass.stop(time + 0.2);
            }
            // 2. Kick
            if (step === 0 || step === 8 || step === 10 || step === 14) {
                const kick = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                kick.type = 'sine';
                kick.frequency.setValueAtTime(130, time);
                kick.frequency.exponentialRampToValueAtTime(48, time + 0.15);
                gain.gain.setValueAtTime(0.48, time);
                gain.gain.exponentialRampToValueAtTime(0.001, time + 0.16);
                kick.connect(gain);
                gain.connect(this.analyser);
                kick.start(time);
                kick.stop(time + 0.18);
            }
            // 3. Handclaps
            if (step === 4 || step === 12) {
                const playClap = (offsetTime) => {
                    const clap = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();
                    const filter = this.ctx.createBiquadFilter();
                    clap.type = 'sawtooth';
                    clap.frequency.setValueAtTime(260, offsetTime);
                    filter.type = 'bandpass';
                    filter.frequency.setValueAtTime(1400, offsetTime);
                    filter.Q.setValueAtTime(2.0, offsetTime);
                    gain.gain.setValueAtTime(0.12, offsetTime);
                    gain.gain.exponentialRampToValueAtTime(0.001, offsetTime + 0.08);
                    clap.connect(filter);
                    filter.connect(gain);
                    gain.connect(this.analyser);
                    clap.start(offsetTime);
                    clap.stop(offsetTime + 0.1);
                };
                playClap(time);
                if (step === 12) {
                    playClap(time + 0.08);
                }
            }
            // 4. Middle-Eastern Hypnotic String Arpeggio
            const phrygianMelody = [659.25, 698.46, 830.61, 880.00, 987.77, 880.00, 830.61, 698.46];
            const stringNote = phrygianMelody[step % phrygianMelody.length];
            if (step % 2 === 0) {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                const filter = this.ctx.createBiquadFilter();
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(stringNote, time);
                
                filter.type = 'peaking';
                filter.frequency.setValueAtTime(2000, time);
                filter.Q.setValueAtTime(3.0, time);
                
                gain.gain.setValueAtTime(0, time);
                gain.gain.linearRampToValueAtTime(0.035, time + 0.02);
                gain.gain.exponentialRampToValueAtTime(0.001, time + 0.16);
                
                osc.connect(filter);
                filter.connect(gain);
                gain.connect(this.analyser);
                osc.start(time);
                osc.stop(time + 0.2);
            }
        }
        // Track 3: DIRTY SOUTH (Y2K Crunk Style, 140 BPM)
        else if (trackId === 3) {
            // 1. Deep 808
            if (step === 0 || step === 6 || step === 8 || step === 14) {
                const subFreq = step === 6 || step === 14 ? 32.70 : 49.00;
                const sub = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                sub.type = 'sine';
                sub.frequency.setValueAtTime(subFreq, time);
                gain.gain.setValueAtTime(0.7, time);
                gain.gain.exponentialRampToValueAtTime(0.001, time + 0.35);
                sub.connect(gain);
                gain.connect(this.analyser);
                sub.start(time);
                sub.stop(time + 0.4);
            }
            // 2. Stomping kick
            if (step === 0 || step === 2 || step === 8 || step === 10) {
                const kick = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                kick.type = 'sine';
                kick.frequency.setValueAtTime(140, time);
                kick.frequency.exponentialRampToValueAtTime(50, time + 0.12);
                gain.gain.setValueAtTime(0.5, time);
                gain.gain.exponentialRampToValueAtTime(0.001, time + 0.14);
                kick.connect(gain);
                gain.connect(this.analyser);
                kick.start(time);
                kick.stop(time + 0.16);
            }
            // 3. Snare
            if (step === 4 || step === 12) {
                const snare = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                snare.type = 'triangle';
                snare.frequency.setValueAtTime(290, time);
                snare.frequency.exponentialRampToValueAtTime(90, time + 0.08);
                gain.gain.setValueAtTime(0.2, time);
                gain.gain.exponentialRampToValueAtTime(0.001, time + 0.09);
                snare.connect(gain);
                gain.connect(this.analyser);
                snare.start(time);
                snare.stop(time + 0.11);
            }
            // 4. Double time rolling trap hats
            const hatsPlay = (hTime) => {
                const hat = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                const filter = this.ctx.createBiquadFilter();
                hat.type = 'sawtooth';
                hat.frequency.setValueAtTime(15000, hTime);
                filter.type = 'highpass';
                filter.frequency.setValueAtTime(10000, hTime);
                gain.gain.setValueAtTime(0.015, hTime);
                gain.gain.exponentialRampToValueAtTime(0.001, hTime + 0.02);
                hat.connect(filter);
                filter.connect(gain);
                gain.connect(this.analyser);
                hat.start(hTime);
                hat.stop(hTime + 0.025);
            };
            hatsPlay(time);
            if (step === 14 || step === 15) {
                hatsPlay(time + noteLength * 0.5);
            }
            // 5. Crunk Synth Horns
            if (step === 0 || step === 3 || step === 8 || step === 11) {
                const chords = [130.81, 164.81, 196.00, 261.63];
                chords.forEach((freq, idx) => {
                    const synth = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();
                    const filter = this.ctx.createBiquadFilter();
                    
                    synth.type = 'sawtooth';
                    synth.frequency.setValueAtTime(freq * 2, time);
                    synth.detune.setValueAtTime((idx - 1.5) * 12, time);
                    
                    filter.type = 'lowpass';
                    filter.frequency.setValueAtTime(2000, time);
                    filter.Q.setValueAtTime(4.0, time);
                    
                    gain.gain.setValueAtTime(0, time);
                    gain.gain.linearRampToValueAtTime(0.045, time + 0.01);
                    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.2);
                    
                    synth.connect(filter);
                    filter.connect(gain);
                    gain.connect(this.analyser);
                    synth.start(time);
                    synth.stop(time + 0.22);
                });
            }
        }
    }
}

const AudioSystem = new AudioEngine();

// ==========================================================================
// 4. MAIN STATE CONTROLLER & NAVIGATION
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    setupClock();
    setupCanvasVoid();
    setupMainMenuNavigation();
    setupSubScreensInteractions();
    setupStartupSequence();
    setupSubScreenCloseButtons();
    setupShopSystem();
    loadGameProgress();
    setupSpotifyIntegration();
    setupDiscsRotation();
});

// Sub-screen back click hooks
function setupSubScreenCloseButtons() {
    document.querySelectorAll('.sub-screen-close-btn, .sub-screen-back-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            closeActiveSubScreen();
        });
    });
}

// 4.1 STARTUP SYSTEM CONFIG
function setupStartupSequence() {
    const warning = document.getElementById('warning-screen');
    const bootUnderground = document.getElementById('btn-boot-underground');
    const bootMainstream = document.getElementById('btn-boot-mainstream');
    const errorMsg = document.getElementById('warning-error-msg');
    const app = document.getElementById('app-container');
    
    if (bootUnderground) {
        bootUnderground.addEventListener('click', () => {
            AudioSystem.init();
            AudioSystem.playBiosSwell();
            
            warning.style.transition = 'opacity 1.2s ease-out';
            warning.style.opacity = 0;
            
            setTimeout(() => {
                warning.classList.add('hidden');
                app.classList.remove('hidden');
                resizeVoidCanvas();
                AppState.currentScreen = 'menu';
                updateECG(100); // 100% fine health
                playRandomSpotifyTrack();
                positionSpotifyIframe();
            }, 1200);
        });
    }

    if (bootMainstream) {
        bootMainstream.addEventListener('click', () => {
            AudioSystem.init();
            AudioSystem.playErrorSound();
            if (errorMsg) {
                errorMsg.classList.remove('hidden');
                errorMsg.textContent = "FATAL ERROR: MAINSTREAM EXCLUDED. El sistema ha detectado tu gusto comercial y se ha bloqueado. ¡Recarga como SOY UNDER!";
                setTimeout(() => {
                    errorMsg.classList.add('hidden');
                }, 4500);
            }
        });
    }
}

// 4.2 RETRO CLOCK
function setupClock() {
    const clock = document.getElementById('console-clock');
    if (!clock) return;
    const update = () => {
        const d = new Date();
        clock.textContent = `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}:${String(d.getSeconds()).padStart(2, '0')}`;
    };
    update();
    setInterval(update, 1000);
}

// 4.3 DYNAMIC BG VOID CANVAS (CYBER MATRIX BLING)
let resizeVoidCanvas = () => {};
function setupCanvasVoid() {
    const canvas = document.getElementById('void-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let particles = [];
    const maxParticles = 50;
    const colors = [
        'rgba(255, 23, 68, 0.22)',  // Cyan
        'rgba(185, 28, 28, 0.22)',   // Horror Red
        'rgba(57, 255, 20, 0.22)',   // Hazard Green
        'rgba(255, 204, 0, 0.22)'    // Bling Gold
    ];
    
    resizeVoidCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeVoidCanvas);
    resizeVoidCanvas();
    
    // Detect mobile touch capability or small screen to reduce particle load
    const isMobileDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (window.innerWidth < 900);
    const particleCount = isMobileDevice ? 15 : maxParticles;
    
    // Spawn particles (Bling sparkles)
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3 - 0.1,
            radius: Math.random() * 2 + 0.6,
            color: colors[Math.floor(Math.random() * colors.length)],
            pulse: Math.random() * Math.PI
        });
    }
    
    function animate() {
        if (AppState.currentScreen !== 'boot') {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Draw background horror grid
            ctx.strokeStyle = 'rgba(185, 28, 28, 0.015)';
            ctx.lineWidth = 1;
            const size = 50;
            for (let x = 0; x < canvas.width; x += size) {
                ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
            }
            for (let y = 0; y < canvas.height; y += size) {
                ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
            }
            
            // Draw 4-point Y2K bling sparkles
            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;
                
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;
                
                p.pulse += 0.012;
                const alpha = (Math.sin(p.pulse) + 1.2) / 2.2;
                const size = p.radius * (alpha * 3.5 + 1);
                
                ctx.beginPath();
                ctx.moveTo(p.x, p.y - size);
                ctx.lineTo(p.x + size * 0.25, p.y - size * 0.25);
                ctx.lineTo(p.x + size, p.y);
                ctx.lineTo(p.x + size * 0.25, p.y + size * 0.25);
                ctx.lineTo(p.x, p.y + size);
                ctx.lineTo(p.x - size * 0.25, p.y + size * 0.25);
                ctx.lineTo(p.x - size, p.y);
                ctx.lineTo(p.x - size * 0.25, p.y - size * 0.25);
                ctx.closePath();
                
                ctx.fillStyle = p.color;
                ctx.shadowBlur = 10;
                ctx.shadowColor = p.color;
                ctx.fill();
                ctx.shadowBlur = 0;
            });
        }
        requestAnimationFrame(animate);
    }
    animate();
}

// 4.4 MAIN MENU STATE ENGINE — Vinyl disc grid
function setupMainMenuNavigation() {
    const items = document.querySelectorAll('.vinyl-menu-item');

    items.forEach((item, index) => {
        // Highlight on hover (desktop)
        item.addEventListener('mouseenter', () => {
            if (AppState.currentScreen !== 'menu') return;
            items.forEach(i => i.classList.remove('active-opt'));
            item.classList.add('active-opt');
            AppState.menuIndex = index;
            AudioSystem.playClickSound();
        });

        // Click = navigate
        item.addEventListener('click', () => {
            if (AppState.currentScreen !== 'menu') return;
            AppState.menuIndex = index;
            selectMenuOption();
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (AppState.currentScreen !== 'menu') return;

        if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'd' || e.key === 's') {
            e.preventDefault();
            items[AppState.menuIndex].classList.remove('active-opt');
            AppState.menuIndex = (AppState.menuIndex + 1) % items.length;
            items[AppState.menuIndex].classList.add('active-opt');
            items[AppState.menuIndex].scrollIntoView({ block: 'nearest' });
            AudioSystem.playClickSound();
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'a' || e.key === 'w') {
            e.preventDefault();
            items[AppState.menuIndex].classList.remove('active-opt');
            AppState.menuIndex = (AppState.menuIndex - 1 + items.length) % items.length;
            items[AppState.menuIndex].classList.add('active-opt');
            items[AppState.menuIndex].scrollIntoView({ block: 'nearest' });
            AudioSystem.playClickSound();
        } else if (e.key === 'Enter') {
            selectMenuOption();
        }
    });
}

function selectMenuOption() {
    AudioSystem.playSelectSound();
    
    const viewport = document.getElementById('console-viewport');
    const selectedScreenName = SCREEN_NAMES[AppState.menuIndex];
    const targetScreenId = SCREEN_MAPPING[AppState.menuIndex];
    const targetScreen = document.getElementById(targetScreenId);
    
    viewport.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    viewport.style.opacity = 0;
    viewport.style.transform = 'scale(1.05)';
    
    setTimeout(() => {
        viewport.classList.add('hidden');
        targetScreen.classList.remove('hidden');
        AppState.currentScreen = selectedScreenName;
        
        // Initialize specific screens
        if (AppState.currentScreen === 'game') {
            // Reset game states
            document.getElementById('game-start-overlay').classList.remove('hidden');
            document.getElementById('game-over-overlay').classList.add('hidden');
            document.getElementById('game-shop-overlay').classList.add('hidden');
            resizeGameCanvas();
        } else if (AppState.currentScreen === 'shows') {
            updateShowDetails(AppState.showsIndex);
            runTicketronaScraper();
        } else if (AppState.currentScreen === 'beats') {
            positionSpotifyIframe();
            setupBeatsPlayer();
        } else if (AppState.currentScreen === 'merch') {
            updateMerchDetails(AppState.merchIndex);
        }
    }, 400);
}

function closeActiveSubScreen() {
    const activeScreenIndex = SCREEN_NAMES.indexOf(AppState.currentScreen);
    if (activeScreenIndex === -1) return;
    
    AudioSystem.playBackSound();
    
    // Stop beat engine if exiting music screen
    if (AppState.currentScreen === 'beats') {
        positionSpotifyIframe();
    }
    if (AppState.currentScreen === 'beats' && AppState.audioPlaying) {
        togglePlayPause();
    }
    
    // Stop minigame if exiting game screen
    if (AppState.currentScreen === 'game') {
        stopZombieGame();
    }
    
    const screenId = SCREEN_MAPPING[activeScreenIndex];
    const screen = document.getElementById(screenId);
    const viewport = document.getElementById('console-viewport');
    
    screen.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    screen.style.opacity = 0;
    screen.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        screen.classList.add('hidden');
        screen.style.opacity = '';
        screen.style.transform = '';
        
        viewport.classList.remove('hidden');
        viewport.style.opacity = 1;
        viewport.style.transform = 'scale(1)';
        AppState.currentScreen = 'menu';
        
        // Update global money and kills in stats
        document.getElementById('global-kills-count').textContent = AppState.zombieKills;
        // Calculate points
        document.getElementById('global-money-count').textContent = AppState.moneyValue.toFixed(2) + ' €';
    }, 400);
}

// 4.5 ECG ANIMATION UPDATES
function updateECG(health) {
    const line = document.getElementById('ecg-pulse-line');
    const label = document.getElementById('ecg-status-text');
    
    line.className = 'ecg-line';
    
    if (health >= 75) {
        label.textContent = "FINE";
        label.style.color = "#39ff14";
        label.style.textShadow = "0 0 10px #39ff14";
    } else if (health >= 35) {
        line.classList.add('caution');
        label.textContent = "CAUTION";
        label.style.color = "#ffcc00";
        label.style.textShadow = "0 0 10px #ffcc00";
    } else {
        line.classList.add('danger');
        label.textContent = "DANGER";
        label.style.color = "#b91c1c";
        label.style.textShadow = "0 0 10px #b91c1c";
    }
}

// ==========================================================================
// 5. SUB-SCREENS INTERACTION
// ==========================================================================

function setupSubScreensInteractions() {
    // --- 5.1 SHOWS INTERACTION ---
    const showSlots = document.querySelectorAll('.save-slot-row');
    showSlots.forEach((slot, idx) => {
        slot.addEventListener('click', () => {
            showSlots.forEach(s => s.classList.remove('active-slot'));
            slot.classList.add('active-slot');
            AppState.showsIndex = idx;
            updateShowDetails(idx);
            AudioSystem.playClickSound();
        });
    });
    
    const deleteBtn = document.getElementById('btn-delete-show');
    if (deleteBtn) {
        deleteBtn.addEventListener('click', () => {
            AudioSystem.playErrorSound();
            alert("🔒 ARCHIVO DE OPERACIÓN PROTEGIDO:\nroomtrash6.sys es un archivo del sistema infectado por el virus 'BASED NATION' y no puede ser eliminado de la memoria.");
        });
    }
    
    // --- 5.2 MERCH INTERACTION ---
    const merchItems = document.querySelectorAll('.merch-item');
    merchItems.forEach((item, idx) => {
        item.addEventListener('click', () => {
            merchItems.forEach(i => i.classList.remove('active-merch-item'));
            item.classList.add('active-merch-item');
            AppState.merchIndex = idx;
            updateMerchDetails(idx);
            AudioSystem.playClickSound();
        });
    });
    
    // Redeem Points button inside merch Details card
    const redeemBtn = document.getElementById('btn-claim-points');
    if (redeemBtn) {
        redeemBtn.addEventListener('click', () => {
            redeemPointsForDiscount();
        });
    }

    // --- 5.3 GLOBAL BACK NAVIGATION CLICK ---
    document.getElementById('guide-back').onclick = () => {
        if (AppState.currentScreen !== 'menu' && AppState.currentScreen !== 'boot') {
            closeActiveSubScreen();
        }
    };
    
    document.getElementById('guide-ok').onclick = () => {
        if (AppState.currentScreen === 'menu') {
            selectMenuOption();
        } else if (AppState.currentScreen === 'shows') {
            const currentShow = SHOWS_DATA[AppState.showsIndex];
            if (currentShow && currentShow.id === 0) window.open(currentShow.ticketUrl, '_blank');
        } else if (AppState.currentScreen === 'merch') {
            document.getElementById('btn-buy-merch').click();
        }
    };
    
    document.getElementById('btn-exit-game').onclick = () => {
        closeActiveSubScreen();
    };

    // Keyboard back listeners
    document.addEventListener('keydown', (e) => {
        if (AppState.currentScreen !== 'menu' && AppState.currentScreen !== 'boot') {
            if (e.key === 'Backspace' || e.key === 'Escape') {
                closeActiveSubScreen();
            }
        }
    });
}

// 5.1.1 Update classified gig folder card info
function updateShowDetails(idx) {
    const data = SHOWS_DATA[idx];
    if (!data) return;
    
    document.getElementById('detail-show-title').textContent = data.title;
    document.getElementById('detail-show-venue').textContent = data.venue;
    document.getElementById('detail-show-date').textContent = data.date;
    
    const buyBtn = document.getElementById('btn-buy-tickets');
    const statusText = document.getElementById('detail-show-status');
    
    buyBtn.href = data.ticketUrl;
    
    if (data.id === 0) {
        buyBtn.innerHTML = `<span class="btn-icon">⚡</span> ADQUIRIR ENTRADAS`;
        buyBtn.classList.remove('secondary-btn');
        buyBtn.style.pointerEvents = 'auto';
        statusText.textContent = "EN CURSO / ENTRADAS";
        statusText.style.color = "#39ff14";
    } else {
        buyBtn.innerHTML = `<span class="btn-icon">📁</span> CONCIERTO REALIZADO`;
        buyBtn.classList.add('secondary-btn');
        buyBtn.href = "#";
        buyBtn.style.pointerEvents = 'none';
        statusText.textContent = "COMPLETADO / CONCLUIDO";
        statusText.style.color = "#475569";
    }
}

// 5.2.1 Update arms/merch merchant item info
function updateMerchDetails(idx) {
    const data = MERCH_DATA[idx];
    if (!data) return;
    
    document.getElementById('merch-detail-name').textContent = data.name;
    document.querySelector('#screen-merch .details-desc').textContent = data.desc;
    
    // Check points to display potential discounts
    const currentPrice = data.price;
    const finalPrice = Math.max(0, currentPrice - (AppState.basedPoints * 0.05));
    const discount = currentPrice - finalPrice;
    const discountPct = Math.round((discount / currentPrice) * 100);
    
    document.getElementById('merch-detail-price').textContent = currentPrice.toFixed(2) + ' €';
    document.getElementById('merch-detail-discount').textContent = `${discount.toFixed(2)} € (${discountPct}%)`;
    document.getElementById('merch-detail-final-price').textContent = finalPrice.toFixed(2) + ' €';
    
    // Requirements display
    const reqDisplay = document.getElementById('merch-detail-points-req');
    if (data.id === 0) {
        reqDisplay.textContent = "MÍNIMO 10 PUNTOS";
    } else {
        reqDisplay.textContent = "MÍNIMO 5 PUNTOS (FREE)";
    }
    
    const buyBtn = document.getElementById('btn-buy-merch');
    buyBtn.href = data.url;
}

// 5.2.2 Redeem points system (horror merch merchant discount)
function redeemPointsForDiscount() {
    const data = MERCH_DATA[AppState.merchIndex];
    if (!data) return;
    
    if (AppState.basedPoints < 5) {
        AudioSystem.playErrorSound();
        alert("🔒 REQUISITOS INSUFICIENTES:\nNecesitas acumular más Based Points matando zombis en la Cabaña para canjearlos.");
        return;
    }
    
    AudioSystem.playSelectSound();
    
    // Code generation
    const discountCode = `RT6_ZOMB_${Math.floor(Math.random() * 90000 + 10000)}`;
    const finalPrice = Math.max(0, data.price - (AppState.basedPoints * 0.05));
    const saved = data.price - finalPrice;
    
    // Deduct points
    AppState.basedPoints = 0; // Reset points
    document.getElementById('shop-points-display').textContent = AppState.basedPoints;
    saveGameProgress();
    
    updateMerchDetails(AppState.merchIndex);
    
    alert(`🪙 CÓDIGO DE CONTRABANDO DESBLOQUEADO:\n\nPresenta el código en Instagram DM a @roomtrash6 para aplicar tu descuento:\n\nCódigo: ${discountCode}\nDescuento Aplicado: -${saved.toFixed(2)} €`);
}

// ==========================================================================
// 6. WINAMP CD AUDIO PLAYER & VISUALIZER
// ==========================================================================

let visualizerAnimationId = null;
let trackTimer = null;
let secondsElapsed = 0;

function setupBeatsPlayer() {
    const playPauseBtn = document.getElementById('btn-play-pause');
    const prevBtn = document.getElementById('btn-prev-track');
    const nextBtn = document.getElementById('btn-next-track');
    const trackRows = document.querySelectorAll('.track-row-procedural');
    
    if (trackRows && trackRows.length > 0) {
        trackRows.forEach((row, idx) => {
            row.onclick = () => {
                if (AppState.beatsIndex === idx && AppState.audioPlaying) return;
                trackRows.forEach(r => r.classList.remove('active-track'));
                row.classList.add('active-track');
                AppState.beatsIndex = idx;
                loadTrack(idx);
                
                if (!AppState.audioPlaying) {
                    togglePlayPause();
                } else {
                    AudioSystem.startBeatEngine(idx);
                }
                AudioSystem.playClickSound();
            };
        });
    }
    
    if (playPauseBtn) playPauseBtn.onclick = () => togglePlayPause();
    if (prevBtn) prevBtn.onclick = () => { changeTrack(-1); AudioSystem.playClickSound(); };
    if (nextBtn) nextBtn.onclick = () => { changeTrack(1); AudioSystem.playClickSound(); };
    
    loadTrack(AppState.beatsIndex);
}

function loadTrack(idx) {
    const track = BEATS_DATA[idx];
    if (!track) return;
    
    const hudTrackNum = document.getElementById('hud-track-num');
    const playerTrackName = document.getElementById('player-track-name');
    const playerTrackArtist = document.getElementById('player-track-artist');
    const playerTimeDuration = document.getElementById('player-time-duration');
    const playerTimeCurrent = document.getElementById('player-time-current');
    const playerProgressFill = document.getElementById('player-progress-fill');
    
    if (hudTrackNum) hudTrackNum.textContent = String(idx + 1).padStart(2, '0');
    if (playerTrackName) playerTrackName.textContent = track.name;
    if (playerTrackArtist) playerTrackArtist.textContent = `roomtrash [BPM: ${track.tempo}]`;
    if (playerTimeDuration) playerTimeDuration.textContent = track.length;
    if (playerTimeCurrent) playerTimeCurrent.textContent = '0:00';
    if (playerProgressFill) playerProgressFill.style.width = '0%';
    
    const spotLink = document.getElementById('player-spotify-link');
    if (spotLink && track.spotifyUrl) {
        spotLink.href = track.spotifyUrl;
    }

    const iframe = document.getElementById('spotify-widget-iframe');
    if (iframe && track.spotifyUrl) {
        const parts = track.spotifyUrl.split('/track/');
        if (parts.length > 1) {
            const trackId = parts[1].split('?')[0];
            const autoplayFlag = AppState.audioPlaying ? '&autoplay=1' : '';
            iframe.src = `https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0${autoplayFlag}`;
        }
    }
}

function togglePlayPause() {
    AudioSystem.init();
    const playBtn = document.getElementById('btn-play-pause');
    const disc = document.getElementById('player-cd-disc');
    
    if (AppState.audioPlaying) {
        AppState.audioPlaying = false;
        playBtn.textContent = '▶';
        disc.classList.remove('playing');
        AudioSystem.stopBeatEngine();
        clearInterval(trackTimer);
        stopVisualizer();
    } else {
        AppState.audioPlaying = true;
        playBtn.textContent = '⏸';
        disc.classList.add('playing');
        AudioSystem.startBeatEngine(AppState.beatsIndex);
        startVisualizer();
        
        const currentLengthStr = BEATS_DATA[AppState.beatsIndex].length;
        const totalSeconds = parseLengthToSeconds(currentLengthStr);
        
        clearInterval(trackTimer);
        trackTimer = setInterval(() => {
            secondsElapsed++;
            if (secondsElapsed > totalSeconds) {
                secondsElapsed = 0;
                changeTrack(1);
                return;
            }
            const m = Math.floor(secondsElapsed / 60);
            const s = String(secondsElapsed % 60).padStart(2, '0');
            document.getElementById('player-time-current').textContent = `${m}:${s}`;
            const pct = (secondsElapsed / totalSeconds) * 100;
            document.getElementById('player-progress-fill').style.width = `${pct}%`;
        }, 1000);
    }
}

function changeTrack(direction) {
    AudioSystem.playVinylScratch();
    AppState.beatsIndex = (AppState.beatsIndex + direction + BEATS_DATA.length) % BEATS_DATA.length;
    const trackRows = document.querySelectorAll('.track-row');
    trackRows.forEach(r => r.classList.remove('active-track'));
    trackRows[AppState.beatsIndex].classList.add('active-track');
    secondsElapsed = 0;
    loadTrack(AppState.beatsIndex);
    if (AppState.audioPlaying) {
        AudioSystem.startBeatEngine(AppState.beatsIndex);
    }
}

function parseLengthToSeconds(lenStr) {
    const parts = lenStr.split(':');
    return parseInt(parts[0]) * 60 + parseInt(parts[1]);
}

function startVisualizer() {
    const canvas = document.getElementById('audio-visualizer');
    if (!canvas) return;
    const canvasCtx = canvas.getContext('2d');
    stopVisualizer();
    
    // Adjust buffer dimensions to actual CSS dimensions
    const resizeVisualizer = () => {
        canvas.width = canvas.clientWidth || 300;
        canvas.height = canvas.clientHeight || 100;
    };
    resizeVisualizer();
    window.addEventListener('resize', resizeVisualizer);
    
    function draw() {
        visualizerAnimationId = requestAnimationFrame(draw);
        if (!AudioSystem.analyser) return;
        AudioSystem.analyser.getByteFrequencyData(AudioSystem.dataArray);
        
        canvasCtx.fillStyle = 'rgba(0, 0, 0, 0.25)';
        canvasCtx.fillRect(0, 0, canvas.width, canvas.height);
        
        const activeBins = 18; // Only visualize active audio spectrum range
        const barWidth = canvas.width / activeBins;
        let barHeight;
        let x = 0;
        
        for (let i = 0; i < activeBins; i++) {
            barHeight = AudioSystem.dataArray[i] / 2.2;
            const g = barHeight * 1.8;
            canvasCtx.fillStyle = `rgb(${g * 0.15}, ${g + 40}, ${g * 0.3})`;
            canvasCtx.shadowBlur = 6;
            canvasCtx.shadowColor = 'rgba(57, 255, 20, 0.8)';
            canvasCtx.fillRect(x, canvas.height - barHeight, barWidth - 2, barHeight);
            x += barWidth;
        }
        canvasCtx.shadowBlur = 0;
    }
    draw();
}

function stopVisualizer() {
    if (visualizerAnimationId) {
        cancelAnimationFrame(visualizerAnimationId);
        visualizerAnimationId = null;
    }
    const canvas = document.getElementById('audio-visualizer');
    if (canvas) {
        const canvasCtx = canvas.getContext('2d');
        canvasCtx.fillStyle = '#000';
        canvasCtx.fillRect(0, 0, canvas.width, canvas.height);
        canvasCtx.beginPath();
        canvasCtx.strokeStyle = 'rgba(57, 255, 20, 0.3)';
        canvasCtx.moveTo(0, canvas.height / 2);
        canvasCtx.lineTo(canvas.width, canvas.height / 2);
        canvasCtx.stroke();
    }
}

// ==========================================================================
// 7. HTML5 CANVAS RETRO ZOMBIE MINIGAME ENGINE
let gameLoopId = null;
let gameActive = false;
let gameHealth = 100;
let gameKills = 0;
let gameWave = 1;
let gameZombies = [];
let gameParticles = [];
let targetReticle = { x: 320, y: 200 };
let reloadTimer = null;
let isReloading = false;
let nextSpawnTime = 0;
let gamePowerUps = [];
let isFrozen = false;
let freezeTimer = null;
let isRapid = false;
let rapidTimer = null;
let screenMessage = { text: "", duration: 0 };

// Weapon Inventory Overhaul variables
let currentWeapon = 'pistol';
let weaponInventory = {
    pistol: { clip: 6, maxClip: 6, reserve: Infinity, damage: 1, name: 'PISTOLA', reloadTime: 1000 },
    shotgun: { clip: 0, maxClip: 2, reserve: 4, maxReserve: 8, damage: 3, name: 'SHOTGUN', reloadTime: 1800 },
    uzi: { clip: 0, maxClip: 30, reserve: 45, maxReserve: 90, damage: 0.5, name: 'UZI', reloadTime: 1200 },
    rpg: { clip: 0, maxClip: 1, reserve: 1, maxReserve: 2, damage: 10, name: 'RPG', reloadTime: 2500 }
};

let activeBoss = null;
let bossProjectiles = [];
let boss1Spawned = false;
let boss2Spawned = false;
let boss3Spawned = false;
let screenShakeTime = 0;
let screenShakeIntensity = 0;
let uziFiringInterval = null;
let isMouseOrTouchDown = false;
let cabinShield = 0;

// Shop Upgrades & Dynamic Sizing states
let damageMultiplier = 1.0;
let pendingNextLevel = 2;

const SHOP_PRICES = {
    health: 0.40,
    shield: 0.60,
    ammo_shotgun: 0.30,
    ammo_uzi: 0.35,
    ammo_rpg: 0.80,
    damage_up: 1.20
};

function resizeGameCanvas() {
    const canvas = document.getElementById('game-canvas');
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) {
        canvas.width = rect.width;
        canvas.height = rect.height;
    } else {
        canvas.width = 640;
        canvas.height = 400;
    }
    // Reposition reticle to canvas center if it was at default values
    if (targetReticle.x === 320 && targetReticle.y === 200) {
        targetReticle.x = canvas.width / 2;
        targetReticle.y = canvas.height / 2;
    }
}

function setupZombieGame() {
    const canvas = document.getElementById('game-canvas');
    const startBtn = document.getElementById('btn-start-minigame');
    const restartBtn = document.getElementById('btn-restart-game');
    const reloadMobileBtn = document.getElementById('btn-reload-mobile');
    const ammoClickable = document.getElementById('hud-ammo-clickable');
    const reloadDesktopBtn = document.getElementById('btn-reload-desktop');

    // Resize canvas initially
    resizeGameCanvas();
    window.addEventListener('resize', () => {
        if (AppState.currentScreen === 'game') {
            resizeGameCanvas();
        }
    });

    // Coordinates mapping helper (accounts for canvas scaling)
    const updateReticleFromPos = (clientX, clientY) => {
        const rect = canvas.getBoundingClientRect();
        targetReticle.x = Math.max(0, Math.min(canvas.width, (clientX - rect.left) * (canvas.width / rect.width)));
        targetReticle.y = Math.max(0, Math.min(canvas.height, (clientY - rect.top) * (canvas.height / rect.height)));
    };

    // Uzi continuous firing controls
    const startUziFiring = () => {
        if (uziFiringInterval) return;
        firePlayerWeapon();
        uziFiringInterval = setInterval(() => {
            if (gameActive && currentWeapon === 'uzi') {
                firePlayerWeapon();
            } else {
                stopUziFiring();
            }
        }, 130);
    };

    const stopUziFiring = () => {
        if (uziFiringInterval) {
            clearInterval(uziFiringInterval);
            uziFiringInterval = null;
        }
    };

    // Desktop: mouse move = aim, click = fire
    canvas.addEventListener('mousemove', (e) => {
        if (!gameActive) return;
        updateReticleFromPos(e.clientX, e.clientY);
    });

    canvas.addEventListener('mousedown', (e) => {
        if (!gameActive) return;
        isMouseOrTouchDown = true;
        updateReticleFromPos(e.clientX, e.clientY);
        if (currentWeapon === 'uzi') {
            startUziFiring();
        } else {
            firePlayerWeapon();
        }
    });

    const handleRelease = () => {
        isMouseOrTouchDown = false;
        stopUziFiring();
    };

    canvas.addEventListener('mouseup', handleRelease);
    canvas.addEventListener('mouseleave', handleRelease);

    // Mobile: touch on canvas = AIM AND FIRE DIRECTLY (Auto fire on hold for Uzi)
    canvas.addEventListener('touchstart', (e) => {
        if (!gameActive) return;
        e.preventDefault();
        isMouseOrTouchDown = true;
        const touch = e.touches[0];
        if (touch) {
            updateReticleFromPos(touch.clientX, touch.clientY);
            if (currentWeapon === 'uzi') {
                startUziFiring();
            } else {
                firePlayerWeapon();
            }
        }
    }, { passive: false });

    canvas.addEventListener('touchmove', (e) => {
        if (!gameActive) return;
        e.preventDefault();
        const touch = e.touches[0];
        if (touch) updateReticleFromPos(touch.clientX, touch.clientY);
    }, { passive: false });

    canvas.addEventListener('touchend', handleRelease);
    canvas.addEventListener('touchcancel', handleRelease);

    // Keybinds for swapping weapons (1-4) and reloading (R)
    document.addEventListener('keydown', (e) => {
        if (AppState.currentScreen === 'game' && gameActive) {
            if (e.key === 'r' || e.key === 'R') reloadPlayerWeapon();
            if (e.key === '1') switchPlayerWeapon('pistol');
            if (e.key === '2') switchPlayerWeapon('shotgun');
            if (e.key === '3') switchPlayerWeapon('uzi');
            if (e.key === '4') switchPlayerWeapon('rpg');
        }
    });

    // Wire up Weapon Decks in mobile and desktop
    document.querySelectorAll('.m-weapon-btn, .d-weapon-btn').forEach(btn => {
        const handler = (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (gameActive) {
                const weapon = btn.dataset.weapon;
                switchPlayerWeapon(weapon);
            }
        };
        btn.addEventListener('click', handler);
        btn.addEventListener('touchstart', handler, { passive: false });
    });

    // Mobile RELOAD button
    if (reloadMobileBtn) {
        reloadMobileBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (gameActive) reloadPlayerWeapon();
        });
    }

    // Desktop sidebar reload button
    if (reloadDesktopBtn) {
        reloadDesktopBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (gameActive) reloadPlayerWeapon();
        });
    }

    // Desktop ammo display clickable reload
    if (ammoClickable) {
        ammoClickable.addEventListener('click', (e) => {
            e.stopPropagation();
            if (gameActive) reloadPlayerWeapon();
        });
    }
    
    startBtn.onclick = () => {
        document.getElementById('game-start-overlay').classList.add('hidden');
        startZombieGame();
    };
    
    restartBtn.onclick = () => {
        document.getElementById('game-over-overlay').classList.add('hidden');
        startZombieGame();
    };
}

function startZombieGame() {
    // Resize the canvas to actual display client bounds
    resizeGameCanvas();
    const canvas = document.getElementById('game-canvas');
    targetReticle = { x: canvas ? canvas.width / 2 : 320, y: canvas ? canvas.height / 2 : 200 };

    gameActive = true;
    gameHealth = 100;
    gameKills = 0;
    gameWave = 1;
    gameZombies = [];
    gameParticles = [];
    isReloading = false;
    nextSpawnTime = Date.now() + 1000;
    gamePowerUps = [];
    isFrozen = false;
    if (freezeTimer) clearTimeout(freezeTimer);
    isRapid = false;
    if (rapidTimer) clearTimeout(rapidTimer);
    
    // Reset shop upgrades and counters
    damageMultiplier = 1.0;
    cabinShield = 0;
    
    // Hide shop overlay
    const shopOverlay = document.getElementById('game-shop-overlay');
    if (shopOverlay) shopOverlay.classList.add('hidden');
    
    // Weapon resetting
    currentWeapon = 'pistol';
    weaponInventory = {
        pistol: { clip: 6, maxClip: 6, reserve: Infinity, damage: 1, name: 'PISTOLA', reloadTime: 1000 },
        shotgun: { clip: 0, maxClip: 2, reserve: 4, maxReserve: 8, damage: 3, name: 'SHOTGUN', reloadTime: 1800 },
        uzi: { clip: 0, maxClip: 30, reserve: 45, maxReserve: 90, damage: 0.5, name: 'UZI', reloadTime: 1200 },
        rpg: { clip: 0, maxClip: 1, reserve: 1, maxReserve: 2, damage: 10, name: 'RPG', reloadTime: 2500 }
    };
    
    // Boss states resetting
    activeBoss = null;
    bossProjectiles = [];
    boss1Spawned = false;
    boss2Spawned = false;
    boss3Spawned = false;
    screenShakeTime = 0;
    screenShakeIntensity = 0;
    
    screenMessage = { text: "NIVEL 1", duration: 120 };
    
    updateGameHUD();
    updateECG(100);
    
    runGameLoop();
    console.log("Zombie Defense game started.");
}

function stopZombieGame() {
    gameActive = false;
    if (gameLoopId) {
        cancelAnimationFrame(gameLoopId);
        gameLoopId = null;
    }
    if (reloadTimer) {
        clearTimeout(reloadTimer);
        reloadTimer = null;
    }
    if (uziFiringInterval) {
        clearInterval(uziFiringInterval);
        uziFiringInterval = null;
    }
}

function runGameLoop() {
    if (!gameActive) return;
    gameLoopId = requestAnimationFrame(runGameLoop);
    
    updateGameLogic();
    drawGameBoard();
}

function updateGameLogic() {
    const now = Date.now();
    const canvas = document.getElementById('game-canvas');
    if (!canvas) return;
    
    const horizonY = canvas.height * 0.35;
    const limitY = canvas.height - 50;
    
    // 1. Spawning regular zombies
    if (now > nextSpawnTime) {
        spawnZombie();
        // Calculate next spawn: gets faster as wave increases
        const delay = Math.max(600, 3000 - (gameWave * 450) - (Math.random() * 800));
        nextSpawnTime = now + delay;
    }

    // 2. Boss Spawning Trigger Checks
    if (gameWave === 1 && gameKills >= 6 && !boss1Spawned) {
        boss1Spawned = true;
        activeBoss = {
            x: canvas.width / 2,
            y: horizonY,
            baseSpeed: 0.25,
            speed: 0.25,
            scale: 0.1,
            type: 'giant',
            name: 'EL GIGANTE',
            hp: 10,
            maxHp: 10,
            width: 48,
            height: 90
        };
        screenMessage = { text: "¡ALERTA JÓVENES! BOSS: EL GIGANTE", duration: 180 };
        AudioSystem.playPoliceSiren();
        triggerScreenShake(15, 800);
    } else if (gameWave === 2 && gameKills >= 15 && !boss2Spawned) {
        boss2Spawned = true;
        activeBoss = {
            x: canvas.width / 2,
            y: horizonY,
            baseSpeed: 0.45,
            speed: 0.45,
            scale: 0.1,
            type: 'mutant',
            name: 'EL MUTANTE',
            hp: 18,
            maxHp: 18,
            width: 50,
            height: 50
        };
        screenMessage = { text: "¡ALERTA! BOSS: EL MUTANTE", duration: 180 };
        AudioSystem.playPoliceSiren();
        triggerScreenShake(18, 850);
    } else if (gameWave === 3 && gameKills >= 25 && !boss3Spawned) {
        boss3Spawned = true;
        activeBoss = {
            x: canvas.width / 2,
            y: horizonY,
            baseSpeed: 0.12,
            speed: 0.12,
            scale: 0.1,
            type: 'trash',
            name: 'REY TRASH',
            hp: 40,
            maxHp: 40,
            width: 64,
            height: 100
        };
        screenMessage = { text: "¡¡Jefe Final!! EL REY TRASH APARECE", duration: 200 };
        AudioSystem.playPoliceSiren();
        triggerScreenShake(24, 1000);
    }
    
    // 3. Updating active boss
    if (activeBoss) {
        activeBoss.y += isFrozen ? activeBoss.speed * 0.25 : activeBoss.speed;
        
        // Depth scale
        const totalDist = limitY - horizonY;
        const currentDist = activeBoss.y - horizonY;
        activeBoss.scale = 0.15 + (currentDist / totalDist) * 1.15;
        
        // Zig-zag pattern for El Mutante
        if (activeBoss.type === 'mutant') {
            activeBoss.x = canvas.width / 2 + Math.sin(activeBoss.y * 0.08) * (canvas.width * 0.25);
        }

        // Attack cabin if reached
        if (activeBoss.y >= limitY) {
            const damage = activeBoss.type === 'trash' ? 40 : 30;
            triggerZombieAttack(damage);
            activeBoss.y = horizonY + 50; // bounce back
        }

        // Rey Trash fires projectile attacks periodically
        if (activeBoss.type === 'trash' && Math.random() < 0.02 && bossProjectiles.length < 3) {
            bossProjectiles.push({
                x: activeBoss.x,
                y: activeBoss.y - 80 * activeBoss.scale,
                targetX: 40 + Math.random() * (canvas.width - 80),
                speed: 1.5 + Math.random() * 1.0,
                radius: 8,
                angle: 0
            });
        }
    }
    
    // 4. Update boss projectiles
    bossProjectiles.forEach((p, idx) => {
        p.y += p.speed;
        const totalDist = limitY - horizonY;
        const progress = (p.y - horizonY) / totalDist;
        if (activeBoss) {
            p.x = activeBoss.x + (p.targetX - activeBoss.x) * Math.min(1.0, Math.max(0.0, progress));
        }
        p.angle += 0.1;
        
        if (p.y >= limitY) {
            // Hit cabin
            triggerZombieAttack(12);
            bossProjectiles.splice(idx, 1);
        }
    });
    
    // 5. Updating zombies crawling
    gameZombies.forEach((z, index) => {
        // Slow down if frozen
        z.y += isFrozen ? z.speed * 0.25 : z.speed;
        
        // Scaling up as they get closer (3D depth)
        const totalDist = limitY - horizonY;
        const currentDist = z.y - horizonY;
        z.scale = 0.1 + (currentDist / totalDist) * 0.9;
        
        // Attack cabin if reached
        if (z.y >= limitY) {
            triggerZombieAttack(20);
            gameZombies.splice(index, 1);
        }
    });

    // 6. Updating power-ups falling down
    gamePowerUps.forEach((p, idx) => {
        p.y += 1.0;
        if (p.y >= limitY) {
            activatePowerUp(p.type);
            gamePowerUps.splice(idx, 1);
        }
    });
    
    // 7. Updating blood particles
    gameParticles.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.2; // Gravity
        p.alpha -= 0.025;
        if (p.alpha <= 0) {
            gameParticles.splice(index, 1);
        }
    });
}

function spawnZombie() {
    const canvas = document.getElementById('game-canvas');
    if (!canvas) return;

    // If a boss is active, restrict spawning (minions only spawn in final wave)
    if (activeBoss) {
        if (activeBoss.type !== 'trash') return;
        if (Math.random() > 0.45) return;
    }
    
    const startX = 40 + Math.random() * (canvas.width - 80);
    const startY = canvas.height * 0.35;
    
    let type = 0;
    let hp = 1;
    let color = '#22c55e'; // Green
    let speedMultiplier = 1.0;
    
    if (gameWave === 1) {
        if (Math.random() < 0.3) {
            type = 1; // Fast runner
            color = '#f97316'; // Orange
            speedMultiplier = 1.6;
        } else {
            type = 0; // Normal
            color = '#22c55e';
            speedMultiplier = 1.0;
        }
    } else if (gameWave === 2) {
        if (Math.random() < 0.4) {
            type = 2; // Crawler
            color = '#84cc16'; // Lime
            speedMultiplier = 1.8;
        } else {
            type = 3; // Armored
            color = '#eab308'; // Yellow
            hp = 3;
            speedMultiplier = 0.8;
        }
    } else {
        if (Math.random() < 0.5) {
            type = 4; // Shadow
            color = 'rgba(148, 163, 184, 0.6)';
            speedMultiplier = 1.4;
        } else {
            type = 5; // Radioactive Toxic
            color = '#a855f7';
            hp = 2;
            speedMultiplier = 1.1;
        }
    }
    
    const baseSpeed = 0.4 + (gameWave * 0.15);
    const speed = (baseSpeed + (Math.random() - 0.5) * 0.15) * speedMultiplier;
    
    gameZombies.push({
        x: startX,
        y: startY,
        speed: speed,
        scale: 0.1,
        type: type,
        hp: hp,
        maxHp: hp,
        color: color,
        width: type === 2 ? 40 : 32,
        height: type === 2 ? 36 : 64
    });
}

function switchPlayerWeapon(weapon) {
    if (weapon === currentWeapon) return;
    
    const wpn = weaponInventory[weapon];
    if (weapon !== 'pistol' && wpn.clip <= 0 && wpn.reserve <= 0) {
        AudioSystem.playErrorSound();
        return;
    }
    
    // Stop reloading and stop Uzi intervals
    if (isReloading) {
        if (reloadTimer) clearTimeout(reloadTimer);
        isReloading = false;
    }
    if (uziFiringInterval) {
        clearInterval(uziFiringInterval);
        uziFiringInterval = null;
    }
    
    currentWeapon = weapon;
    AudioSystem.playClickSound();
    updateGameHUD();
}

function firePlayerWeapon() {
    if (isReloading) {
        AudioSystem.playErrorSound();
        return;
    }
    const canvas = document.getElementById('game-canvas');
    if (!canvas) return;
    const horizonY = canvas.height * 0.35;

    const wpn = weaponInventory[currentWeapon];
    if (wpn.clip <= 0) {
        AudioSystem.playErrorSound();
        reloadPlayerWeapon();
        return;
    }
    
    // Consume ammunition
    wpn.clip--;
    updateGameHUD();
    
    // Firing effects and screenshake
    if (currentWeapon === 'shotgun') {
        AudioSystem.playGunshotSound();
        triggerScreenShake(7, 220);
    } else if (currentWeapon === 'rpg') {
        AudioSystem.playGunshotSound();
        triggerScreenShake(18, 400);
    } else {
        AudioSystem.playGunshotSound();
    }
    
    let hitAny = false;
    
    // 1. RPG Rocket explosion wipes area
    if (currentWeapon === 'rpg') {
        hitAny = true;
        createExplosion(targetReticle.x, targetReticle.y);
        
        // Damage regular zombies
        for (let i = gameZombies.length - 1; i >= 0; i--) {
            const z = gameZombies[i];
            z.hp -= wpn.damage * damageMultiplier;
            createBloodSplat(z.x, z.y, z.color);
            if (z.hp <= 0) {
                AudioSystem.playZombieScream();
                gameZombies.splice(i, 1);
                registerZombieKill(1);
                if (Math.random() < 0.15) spawnPowerUp(z.x, z.y);
            }
        }
        
        // Damage active boss
        if (activeBoss) {
            activeBoss.hp -= wpn.damage * damageMultiplier;
            createBloodSplat(activeBoss.x, activeBoss.y, '#93c5fd');
            if (activeBoss.hp <= 0) defeatActiveBoss();
        }
        
        // Wipe projectiles
        bossProjectiles = [];
        triggerMuzzleFlash(true);
        updateGameHUD();
        return;
    }
    
    // 2. Shotgun splash checks in 60px radius (up to 3 targets)
    if (currentWeapon === 'shotgun') {
        let hitCount = 0;
        for (let i = gameZombies.length - 1; i >= 0; i--) {
            const z = gameZombies[i];
            const dist = Math.hypot(targetReticle.x - z.x, targetReticle.y - z.y);
            if (dist < 60) {
                hitAny = true;
                z.hp -= wpn.damage * damageMultiplier;
                createBloodSplat(z.x, z.y, z.color);
                
                if (z.hp <= 0) {
                    AudioSystem.playZombieScream();
                    gameZombies.splice(i, 1);
                    registerZombieKill(1);
                    if (Math.random() < 0.15) spawnPowerUp(z.x, z.y);
                }
                
                hitCount++;
                if (hitCount >= 3) break;
            }
        }
        
        // Boss hit check
        if (activeBoss) {
            const dist = Math.hypot(targetReticle.x - activeBoss.x, targetReticle.y - activeBoss.y);
            if (dist < 60) {
                hitAny = true;
                activeBoss.hp -= wpn.damage * damageMultiplier;
                createBloodSplat(activeBoss.x, activeBoss.y, '#93c5fd');
                if (activeBoss.hp <= 0) defeatActiveBoss();
            }
        }
        
        // Projectile blast checks
        for (let i = bossProjectiles.length - 1; i >= 0; i--) {
            const p = bossProjectiles[i];
            const dist = Math.hypot(targetReticle.x - p.x, targetReticle.y - p.y);
            if (dist < 45) {
                bossProjectiles.splice(i, 1);
            }
        }
        
        triggerMuzzleFlash(hitAny);
        return;
    }
    
    // 3. Collectibles / Powerups shooting
    for (let i = gamePowerUps.length - 1; i >= 0; i--) {
        const p = gamePowerUps[i];
        const dist = Math.hypot(targetReticle.x - p.x, targetReticle.y - p.y);
        if (dist < 25) {
            activatePowerUp(p.type);
            gamePowerUps.splice(i, 1);
            createExplosion(p.x, p.y);
            hitAny = true;
            triggerMuzzleFlash(true);
            return;
        }
    }
    
    // 4. Projectile shooting down
    for (let i = bossProjectiles.length - 1; i >= 0; i--) {
        const p = bossProjectiles[i];
        const dist = Math.hypot(targetReticle.x - p.x, targetReticle.y - p.y);
        if (dist < 20) {
            bossProjectiles.splice(i, 1);
            hitAny = true;
            createBloodSplat(targetReticle.x, targetReticle.y, '#f97316');
            triggerMuzzleFlash(true);
            return;
        }
    }
    
    // 5. Single target checks (Pistol, Uzi)
    if (activeBoss) {
        const w = activeBoss.width * activeBoss.scale;
        const h = activeBoss.height * activeBoss.scale;
        if (targetReticle.x >= activeBoss.x - w/2 && targetReticle.x <= activeBoss.x + w/2 &&
            targetReticle.y >= activeBoss.y - h && targetReticle.y <= activeBoss.y) {
            
            hitAny = true;
            activeBoss.hp -= wpn.damage * damageMultiplier;
            createBloodSplat(targetReticle.x, targetReticle.y, '#93c5fd');
            
            if (activeBoss.type === 'giant') {
                activeBoss.speed = activeBoss.baseSpeed * 1.5;
                setTimeout(() => {
                    if (activeBoss) activeBoss.speed = activeBoss.baseSpeed;
                }, 1000);
            }
            
            if (activeBoss.hp <= 0) {
                defeatActiveBoss();
            } else {
                activeBoss.y = Math.max(horizonY, activeBoss.y - 8);
            }
            triggerMuzzleFlash(true);
            return;
        }
    }
    
    for (let i = gameZombies.length - 1; i >= 0; i--) {
        const z = gameZombies[i];
        const w = z.width * z.scale;
        const h = z.height * z.scale;
        
        if (targetReticle.x >= z.x - w/2 && targetReticle.x <= z.x + w/2 &&
            targetReticle.y >= z.y - h && targetReticle.y <= z.y) {
            
            hitAny = true;
            
            // Headshot calculations
            const isHeadshot = (targetReticle.y >= z.y - h && targetReticle.y <= z.y - h + 15 * z.scale);
            const actualDamage = isHeadshot ? wpn.damage * 2 : wpn.damage;
            
            z.hp -= actualDamage * damageMultiplier;
            createBloodSplat(targetReticle.x, targetReticle.y, z.color);
            
            if (isHeadshot) {
                createExplosion(targetReticle.x, targetReticle.y); // visual flare
                screenMessage = { text: "¡HEADSHOT! DAÑO X2", duration: 40 };
            }
            
            if (z.hp <= 0) {
                AudioSystem.playZombieScream();
                gameZombies.splice(i, 1);
                registerZombieKill(1);
                if (Math.random() < 0.15) spawnPowerUp(z.x, z.y);
            } else {
                z.y = Math.max(horizonY, z.y - 12);
            }
            break;
        }
    }
    
    triggerMuzzleFlash(hitAny);
}

function reloadPlayerWeapon() {
    const wpn = weaponInventory[currentWeapon];
    if (isReloading || wpn.clip === wpn.maxClip) return;
    if (wpn.reserve <= 0) {
        AudioSystem.playErrorSound();
        return;
    }
    
    isReloading = true;
    
    const ammoHud = document.getElementById('hud-ammo-display');
    const ammoHudD = document.getElementById('hud-ammo-display-desktop');
    if (ammoHud) {
        ammoHud.textContent = "RELOAD...";
        ammoHud.style.color = "#ffcc00";
    }
    if (ammoHudD) {
        ammoHudD.textContent = "RELOAD...";
        ammoHudD.style.color = "#ffcc00";
    }
    
    AudioSystem.playReloadSound();
    
    reloadTimer = setTimeout(() => {
        const needed = wpn.maxClip - wpn.clip;
        const transfer = Math.min(needed, wpn.reserve);
        wpn.clip += transfer;
        if (wpn.reserve !== Infinity) {
            wpn.reserve -= transfer;
        }
        isReloading = false;
        updateGameHUD();
    }, wpn.reloadTime);
}

function triggerZombieAttack(damageVal) {
    if (cabinShield > 0) {
        cabinShield--;
        screenMessage = { text: `¡ATAQUE DEFENSA! ESCUDOS: ${cabinShield}`, duration: 80 };
        triggerScreenShake(8, 200);
        AudioSystem.playClickSound();
        
        const canvas = document.getElementById('game-canvas');
        canvas.style.boxShadow = 'inset 0 0 40px #3b82f6';
        setTimeout(() => { canvas.style.boxShadow = ''; }, 250);
        updateGameHUD();
        return;
    }
    
    gameHealth -= damageVal;
    if (gameHealth < 0) gameHealth = 0;
    
    updateGameHUD();
    updateECG(gameHealth);
    triggerScreenShake(14, 300);
    
    // Screen red flash
    const canvas = document.getElementById('game-canvas');
    canvas.style.boxShadow = 'inset 0 0 40px #ff1744';
    setTimeout(() => {
        canvas.style.boxShadow = '';
    }, 250);
    
    AudioSystem.playErrorSound();
    
    if (gameHealth <= 0) {
        triggerGameOver();
    }
}

function triggerGameOver() {
    stopZombieGame();
    AudioSystem.playErrorSound();
    
    document.getElementById('game-over-title').textContent = "DESTRUIDO";
    document.getElementById('game-over-title').style.color = "";
    document.getElementById('game-over-title').style.textShadow = "";
    
    document.getElementById('game-over-points').textContent = gameKills;
    document.getElementById('game-over-overlay').classList.remove('hidden');
    
    AppState.zombieKills += gameKills;
    
    document.getElementById('shop-points-display').textContent = AppState.basedPoints;
    
    // Save savefile to localStorage
    saveGameProgress();
    
    const msg = document.getElementById('game-reward-msg');
    if (gameKills === 0) {
        msg.textContent = "Obtuviste 0 kills. Los zombis devoraron tu cerebro.";
    } else {
        msg.textContent = `¡Buen intento! Lograste eliminar a ${gameKills} zombis antes de que invadieran la cabaña.`;
    }
}

function triggerGameVictory() {
    stopZombieGame();
    AudioSystem.playBiosSwell();
    
    document.getElementById('game-over-title').textContent = "¡CABAÑA SALVADA!";
    document.getElementById('game-over-title').style.color = "#39ff14";
    document.getElementById('game-over-title').style.textShadow = "0 0 15px rgba(57,255,20,0.8)";
    
    document.getElementById('game-over-points').textContent = gameKills;
    document.getElementById('game-over-overlay').classList.remove('hidden');
    
    // Real-time values are already added, add only the victory bonus
    AppState.basedPoints += 20; 
    AppState.zombieKills += gameKills;
    AppState.moneyValue += 1.0; 
    
    document.getElementById('shop-points-display').textContent = AppState.basedPoints;
    
    // Save savefile to localStorage
    saveGameProgress();
    
    document.getElementById('game-reward-msg').textContent = "¡HÉROE UNDERGROUND! Derrotaste al Rey Trash y defendiste la cabaña con tus barras definitivas.";
}

function registerZombieKill(bonus = 1) {
    gameKills += bonus;
    AppState.basedPoints += bonus;
    AppState.moneyValue += bonus * 0.05;
    
    // Update menu stats and shop counters in real-time
    const killsEl = document.getElementById('global-kills-count');
    if (killsEl) killsEl.textContent = AppState.zombieKills + gameKills;
    
    const moneyEl = document.getElementById('global-money-count');
    if (moneyEl) moneyEl.textContent = AppState.moneyValue.toFixed(2) + ' €';
    
    const ptsEl = document.getElementById('shop-points-display');
    if (ptsEl) ptsEl.textContent = AppState.basedPoints;
    
    updateGameHUD();
    
    // Save savefile to localStorage
    saveGameProgress();
}

function defeatActiveBoss() {
    AudioSystem.playZombieScream();
    createExplosion(activeBoss.x, activeBoss.y - 30);
    
    const type = activeBoss.type;
    activeBoss = null;
    bossProjectiles = []; // clear projectiles
    
    registerZombieKill(5); // boss bonus
    triggerScreenShake(25, 600);
    
    let msgText = "";
    let nextLevel = 1;
    let showShop = false;
    
    if (type === 'giant') {
        msgText = "¡BOSS EL GIGANTE DERROTADO! SHOTGUN DESBLOQUEADA";
        weaponInventory.shotgun.reserve = Math.min(weaponInventory.shotgun.maxReserve, weaponInventory.shotgun.reserve + 6);
        switchPlayerWeapon('shotgun');
        nextLevel = 2;
        showShop = true;
    } else if (type === 'mutant') {
        msgText = "¡BOSS EL MUTANTE DERROTADO! UZI ADQUIRIDA";
        weaponInventory.uzi.reserve = Math.min(weaponInventory.uzi.maxReserve, weaponInventory.uzi.reserve + 60);
        switchPlayerWeapon('uzi');
        nextLevel = 3;
        showShop = true;
    } else if (type === 'trash') {
        msgText = "¡¡REY TRASH DESTRUIDO!! SALVASTE EL UNDERGROUND";
        setTimeout(() => {
            triggerGameVictory();
        }, 1500);
    }
    
    screenMessage = { text: msgText, duration: 180 };
    updateGameHUD();
    
    if (showShop) {
        // Pause the game loop and open the shop after a short delay
        setTimeout(() => {
            openShopScreen(nextLevel);
        }, 2000);
    }
}

function openShopScreen(nextLevel) {
    pendingNextLevel = nextLevel;
    stopZombieGame();
    
    // Show overlay
    const shopOverlay = document.getElementById('game-shop-overlay');
    if (shopOverlay) {
        shopOverlay.classList.remove('hidden');
    }
    
    // Sync points and money displays
    const ptsUser = document.getElementById('shop-user-points');
    if (ptsUser) ptsUser.textContent = AppState.basedPoints;
    
    const monUser = document.getElementById('shop-user-money');
    if (monUser) monUser.textContent = AppState.moneyValue.toFixed(2) + ' €';
    
    // Update button enabled states
    updateShopButtons();
}

function updateShopButtons() {
    document.querySelectorAll('.shop-buy-btn').forEach(btn => {
        const type = btn.dataset.upgrade;
        const cost = SHOP_PRICES[type];
        
        if (AppState.moneyValue < cost) {
            btn.disabled = true;
            btn.style.opacity = '0.5';
            btn.style.pointerEvents = 'none';
        } else {
            btn.disabled = false;
            btn.style.opacity = '1';
            btn.style.pointerEvents = 'auto';
        }
    });
}

function buyShopItem(type, btn) {
    const cost = SHOP_PRICES[type];
    if (cost === undefined) return;

    if (AppState.moneyValue < cost) {
        AudioSystem.playErrorSound();
        return;
    }

    // Deduct cost
    AppState.moneyValue -= cost;
    AudioSystem.playSelectSound();

    // Apply upgrade
    if (type === 'health') {
        gameHealth = Math.min(100, gameHealth + 40);
        screenMessage = { text: "+40% SALUD DE CABAÑA", duration: 90 };
        updateECG(gameHealth);
    } else if (type === 'shield') {
        cabinShield = Math.min(3, cabinShield + 1);
        screenMessage = { text: `ESCUDO ADQUIRIDO: NIVEL ${cabinShield}`, duration: 90 };
    } else if (type === 'ammo_shotgun') {
        weaponInventory.shotgun.reserve = Math.min(weaponInventory.shotgun.maxReserve, weaponInventory.shotgun.reserve + 4);
        screenMessage = { text: "+4 CARTUCHOS SHOTGUN", duration: 90 };
    } else if (type === 'ammo_uzi') {
        weaponInventory.uzi.reserve = Math.min(weaponInventory.uzi.maxReserve, weaponInventory.uzi.reserve + 40);
        screenMessage = { text: "+40 BALAS UZI", duration: 90 };
    } else if (type === 'ammo_rpg') {
        weaponInventory.rpg.reserve = Math.min(weaponInventory.rpg.maxReserve, weaponInventory.rpg.reserve + 1);
        screenMessage = { text: "+1 COHETE RPG", duration: 90 };
    } else if (type === 'damage_up') {
        damageMultiplier += 0.25;
        screenMessage = { text: "DAÑO DE ARMAS +25%", duration: 90 };
    }

    // Update HUD counters
    updateGameHUD();
    
    // Sync points and money displays
    const ptsUser = document.getElementById('shop-user-points');
    if (ptsUser) ptsUser.textContent = AppState.basedPoints;
    
    const monUser = document.getElementById('shop-user-money');
    if (monUser) monUser.textContent = AppState.moneyValue.toFixed(2) + ' €';

    // Refresh buttons availability
    updateShopButtons();
    saveGameProgress();
}

function startNextLevelAfterShop() {
    gameActive = true;
    gameWave = pendingNextLevel;
    screenMessage = { text: `NIVEL ${gameWave}`, duration: 120 };
    
    // Give level rewards (same as original levelUp)
    weaponInventory.shotgun.reserve = Math.min(weaponInventory.shotgun.maxReserve, weaponInventory.shotgun.reserve + 4);
    weaponInventory.uzi.reserve = Math.min(weaponInventory.uzi.maxReserve, weaponInventory.uzi.reserve + 30);
    weaponInventory.rpg.reserve = Math.min(weaponInventory.rpg.maxReserve, weaponInventory.rpg.reserve + 1);
    gameHealth = Math.min(100, gameHealth + 25);

    isReloading = false;
    nextSpawnTime = Date.now() + 1500;
    gameZombies = [];
    gameParticles = [];
    bossProjectiles = [];
    activeBoss = null;
    
    updateGameHUD();
    updateECG(gameHealth);
    
    AudioSystem.playPoliceSiren();
    setTimeout(() => {
        AudioSystem.playBiosSwell();
    }, 300);
    
    runGameLoop();
}

function setupShopSystem() {
    const nextLevelBtn = document.getElementById('btn-next-level');
    if (nextLevelBtn) {
        nextLevelBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            document.getElementById('game-shop-overlay').classList.add('hidden');
            startNextLevelAfterShop();
        });
    }

    // Buy button listeners
    document.querySelectorAll('.shop-buy-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const type = btn.dataset.upgrade;
            buyShopItem(type, btn);
        });
    });
}

function spawnPowerUp(x, y) {
    const types = ['ammo', 'health', 'shield', 'freeze'];
    const type = types[Math.floor(Math.random() * types.length)];
    
    let color = '#ffcc00';
    if (type === 'health') color = '#ef4444';
    else if (type === 'shield') color = '#3b82f6';
    else if (type === 'freeze') color = '#06b6d4';
    
    gamePowerUps.push({
        x: x,
        y: y,
        type: type,
        color: color,
        radius: 8,
        pulse: 0
    });
}

function activatePowerUp(type) {
    AudioSystem.playClickSound();
    
    if (type === 'health') {
        gameHealth = Math.min(100, gameHealth + 30);
        screenMessage = { text: "+30% SALUD DE CABAÑA", duration: 90 };
        updateECG(gameHealth);
    } else if (type === 'ammo') {
        weaponInventory.shotgun.reserve = Math.min(weaponInventory.shotgun.maxReserve, weaponInventory.shotgun.reserve + 4);
        weaponInventory.uzi.reserve = Math.min(weaponInventory.uzi.maxReserve, weaponInventory.uzi.reserve + 45);
        weaponInventory.rpg.reserve = Math.min(weaponInventory.rpg.maxReserve, weaponInventory.rpg.reserve + 1);
        screenMessage = { text: "MUNICIÓN DE RESERVA OBTENIDA", duration: 90 };
    } else if (type === 'shield') {
        cabinShield = Math.min(3, cabinShield + 1);
        screenMessage = { text: `ESCUDO ADQUIRIDO: NIVEL ${cabinShield}`, duration: 90 };
    } else if (type === 'freeze') {
        isFrozen = true;
        if (freezeTimer) clearTimeout(freezeTimer);
        freezeTimer = setTimeout(() => {
            isFrozen = false;
        }, 5000);
        screenMessage = { text: "EFECTO CONGELANTE: ZOMBIS LENTOS (5S)", duration: 90 };
    }
    updateGameHUD();
}

function createBloodSplat(x, y, color) {
    const num = 12 + Math.floor(Math.random() * 8);
    for (let i = 0; i < num; i++) {
        gameParticles.push({
            x: x,
            y: y,
            vx: (Math.random() - 0.5) * 6,
            vy: (Math.random() - 0.5) * 6 - 3,
            radius: Math.random() * 3 + 1,
            color: color,
            alpha: 1.0
        });
    }
}

function createExplosion(x, y) {
    const num = 24 + Math.floor(Math.random() * 12);
    for (let i = 0; i < num; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 2 + Math.random() * 8;
        gameParticles.push({
            x: x,
            y: y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed - 1,
            radius: Math.random() * 4 + 2,
            color: Math.random() < 0.5 ? '#f97316' : '#ff1744',
            alpha: 1.0
        });
    }
}

let flashAlpha = 0;
function triggerMuzzleFlash(hit) {
    flashAlpha = 0.35;
}

function triggerScreenShake(intensity, durationMs) {
    screenShakeIntensity = intensity;
    screenShakeTime = durationMs;
}

function updateWeaponUI() {
    // 1. Mobile Buttons UI
    document.querySelectorAll('.m-weapon-btn').forEach(btn => {
        const weapon = btn.dataset.weapon;
        const wpn = weaponInventory[weapon];
        
        if (weapon === 'pistol') {
            btn.textContent = `Pistola [${wpn.clip}/∞]`;
        } else {
            btn.textContent = `${weapon.toUpperCase()} [${wpn.clip}/${wpn.reserve}]`;
        }
        
        if (weapon === currentWeapon) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
        
        if (weapon !== 'pistol' && wpn.clip <= 0 && wpn.reserve <= 0) {
            btn.style.opacity = '0.35';
        } else {
            btn.style.opacity = '1';
        }
    });
    
    // 2. Desktop Buttons UI
    document.querySelectorAll('.d-weapon-btn').forEach(btn => {
        const weapon = btn.dataset.weapon;
        const wpn = weaponInventory[weapon];
        
        if (weapon === currentWeapon) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
        
        const ammoSpan = btn.querySelector('.wpn-ammo');
        if (ammoSpan) {
            if (weapon === 'pistol') {
                ammoSpan.textContent = "∞";
            } else {
                ammoSpan.textContent = `${wpn.clip} / ${wpn.reserve}`;
                if (wpn.clip <= 0 && wpn.reserve <= 0) {
                    btn.style.opacity = '0.35';
                } else {
                    btn.style.opacity = '1';
                }
            }
        }
    });
}

function updateGameHUD() {
    const hp = document.getElementById('hud-hp-display');
    const hpD = document.getElementById('hud-hp-display-desktop');
    const kills = document.getElementById('hud-kills-display');
    const killsD = document.getElementById('hud-kills-display-desktop');
    const wave = document.getElementById('hud-wave-display');
    const waveD = document.getElementById('hud-wave-display-desktop');
    const ammo = document.getElementById('hud-ammo-display');
    const ammoD = document.getElementById('hud-ammo-display-desktop');
    
    // Health
    if (hp) {
        hp.textContent = `${gameHealth}%`;
        if (gameHealth >= 75) hp.style.color = "#39ff14";
        else if (gameHealth >= 35) hp.style.color = "#ffcc00";
        else hp.style.color = "#ff1744";
    }
    if (hpD) {
        hpD.textContent = `${gameHealth}%`;
        if (gameHealth >= 75) hpD.style.color = "#39ff14";
        else if (gameHealth >= 35) hpD.style.color = "#ffcc00";
        else hpD.style.color = "#ff1744";
    }
    
    // Kills & Wave
    if (kills) kills.textContent = gameKills;
    if (killsD) killsD.textContent = gameKills;
    if (wave) wave.textContent = gameWave;
    if (waveD) waveD.textContent = gameWave;
    
    // Ammo
    const wpn = weaponInventory[currentWeapon];
    const ammoText = isReloading ? "RELOAD..." : `${wpn.clip} / ${wpn.reserve === Infinity ? '∞' : wpn.reserve}`;
    const ammoColor = isReloading ? "#ffcc00" : "";
    
    if (ammo) {
        ammo.textContent = ammoText;
        ammo.style.color = ammoColor;
    }
    if (ammoD) {
        ammoD.textContent = ammoText;
        ammoD.style.color = ammoColor;
    }
    
    // Sync buttons
    updateWeaponUI();
    
    // Boss bar updates
    const bossContainer = document.getElementById('boss-health-container');
    if (bossContainer) {
        if (activeBoss) {
            bossContainer.classList.remove('hidden');
            document.getElementById('boss-name-text').textContent = activeBoss.name;
            const pct = Math.max(0, (activeBoss.hp / activeBoss.maxHp) * 100);
            document.getElementById('boss-health-bar').style.width = `${pct}%`;
        } else {
            bossContainer.classList.add('hidden');
        }
    }
}

// 7.1 DRAWING THE GAME ELEMENTS (PROCEDURAL FOREST CABIN BACKGROUND)
function drawGameBoard() {
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');
    
    ctx.save(); // Top level screen shake save
    
    let shakeX = 0;
    let shakeY = 0;
    if (screenShakeTime > 0) {
        shakeX = (Math.random() - 0.5) * screenShakeIntensity;
        shakeY = (Math.random() - 0.5) * screenShakeIntensity;
        ctx.translate(shakeX, shakeY);
        screenShakeTime -= 16.6;
    }
    
    // Define dynamic drawing offsets
    const horizonY = canvas.height * 0.35;
    const cabinWidth = 160;
    const cabinHeight = 110;
    const cabinX = canvas.width * 0.06;
    const cabinY = canvas.height - 160;
    
    // Clear
    ctx.fillStyle = '#050505';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // 1. Draw starry night sky gradient based on Level (gameWave)
    const skyGrad = ctx.createLinearGradient(0, 0, 0, horizonY);
    skyGrad.addColorStop(0, '#000000');
    if (gameWave === 1) {
        skyGrad.addColorStop(1, '#0e0404'); // Red tint
    } else if (gameWave === 2) {
        skyGrad.addColorStop(1, '#180e03'); // Gold/orange tint
    } else {
        skyGrad.addColorStop(1, '#0e0214'); // Purple tint
    }
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, canvas.width, horizonY);
    
    // Stars
    ctx.fillStyle = '#ffffff';
    for (let i = 0; i < 15; i++) {
        const x = (i * 47) % canvas.width;
        const y = (i * 23) % (horizonY - 20);
        ctx.fillRect(x, y, 1, 1);
    }
    
    // 2. Spooky silhouette trees at horizon line
    if (gameWave === 1) {
        ctx.fillStyle = '#000000';
    } else if (gameWave === 2) {
        ctx.fillStyle = '#070400';
    } else {
        ctx.fillStyle = '#030006';
    }
    ctx.beginPath();
    ctx.moveTo(0, horizonY);
    for (let i = 0; i < canvas.width; i += 20) {
        ctx.lineTo(i, horizonY - (15 + (i % 3) * 10) * (canvas.width / 640)); // scaled tree tops
        ctx.lineTo(i + 10, horizonY);
    }
    ctx.closePath();
    ctx.fill();
    
    // 3. Spooky moon in background (Level specific color)
    if (gameWave === 1) {
        ctx.fillStyle = 'rgba(255, 30, 30, 0.4)';
    } else if (gameWave === 2) {
        ctx.fillStyle = 'rgba(255, 204, 0, 0.4)';
    } else {
        ctx.fillStyle = 'rgba(57, 255, 20, 0.4)';
    }
    ctx.beginPath();
    ctx.arc(canvas.width * 0.15, horizonY * 0.35, 25, 0, Math.PI * 2);
    ctx.fill();
    
    // 4. Ground (forested dirt floor)
    const groundGrad = ctx.createLinearGradient(0, horizonY, 0, canvas.height);
    if (gameWave === 1) {
        groundGrad.addColorStop(0, '#0f0505');
        groundGrad.addColorStop(1, '#000000');
    } else if (gameWave === 2) {
        groundGrad.addColorStop(0, '#150d03');
        groundGrad.addColorStop(1, '#000000');
    } else {
        groundGrad.addColorStop(0, '#0a0210');
        groundGrad.addColorStop(1, '#000000');
    }
    ctx.fillStyle = groundGrad;
    ctx.fillRect(0, horizonY, canvas.width, canvas.height - horizonY);
    
    // 5. Draw the Forest Cabin in foreground (left bottom corner)
    // Cabin base
    ctx.fillStyle = '#1e1b18';
    ctx.fillRect(cabinX, cabinY, cabinWidth, cabinHeight);
    
    // Roof triangle
    ctx.fillStyle = '#3a3530';
    ctx.beginPath();
    ctx.moveTo(cabinX - 10, cabinY);
    ctx.lineTo(cabinX + cabinWidth / 2, cabinY - 50);
    ctx.lineTo(cabinX + cabinWidth + 10, cabinY);
    ctx.closePath();
    ctx.fill();
    
    // Cabin logs lines
    ctx.strokeStyle = '#0e0b08';
    ctx.lineWidth = 3;
    for (let y = cabinY + 10; y < cabinY + cabinHeight; y += 12) {
        ctx.beginPath(); ctx.moveTo(cabinX, y); ctx.lineTo(cabinX + cabinWidth, y); ctx.stroke();
    }
    
    // Windows with horror warning glow
    ctx.fillStyle = 'rgba(255, 204, 0, 0.75)';
    ctx.fillRect(cabinX + 20, cabinY + 30, 30, 30);
    ctx.fillRect(cabinX + cabinWidth - 50, cabinY + 30, 30, 30);
    ctx.strokeStyle = '#000';
    ctx.strokeRect(cabinX + 20, cabinY + 30, 30, 30);
    ctx.strokeRect(cabinX + cabinWidth - 50, cabinY + 30, 30, 30);
    
    // Window frames
    ctx.beginPath();
    ctx.moveTo(cabinX + 35, cabinY + 30); ctx.lineTo(cabinX + 35, cabinY + 60);
    ctx.moveTo(cabinX + 20, cabinY + 45); ctx.lineTo(cabinX + 50, cabinY + 45);
    ctx.moveTo(cabinX + cabinWidth - 35, cabinY + 30); ctx.lineTo(cabinX + cabinWidth - 35, cabinY + 60);
    ctx.moveTo(cabinX + cabinWidth - 50, cabinY + 45); ctx.lineTo(cabinX + cabinWidth - 20, cabinY + 45);
    ctx.stroke();
    
    // Door
    ctx.fillStyle = '#080503';
    ctx.fillRect(cabinX + cabinWidth / 2 - 15, cabinY + 50, 30, 60);
    
    // BASED NATION banner on the cabin
    ctx.fillStyle = '#000';
    ctx.fillRect(cabinX + cabinWidth / 2 - 40, cabinY - 18, 80, 15);
    ctx.strokeStyle = 'rgba(255, 23, 68, 0.7)';
    ctx.strokeRect(cabinX + cabinWidth / 2 - 40, cabinY - 18, 80, 15);
    ctx.fillStyle = '#ff1744';
    ctx.font = '7px "Share Tech Mono"';
    ctx.fillText("BASED NATION", cabinX + cabinWidth / 2 - 27, cabinY - 8);
    
    // Draw cabin shield visual if active
    if (cabinShield > 0) {
        ctx.save();
        ctx.strokeStyle = '#3b82f6';
        ctx.lineWidth = cabinShield * 2;
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#3b82f6';
        ctx.strokeRect(cabinX - 5, cabinY - 5, cabinWidth + 10, cabinHeight + 10);
        ctx.restore();
    }
    
    // 6. Draw Regular/Armored/Crawler Zombies
    gameZombies.forEach(z => {
        const w = z.width * z.scale;
        const h = z.height * z.scale;
        
        ctx.save();
        ctx.translate(z.x, z.y);
        
        // Handle shadow transparency
        if (z.type === 4) {
            ctx.globalAlpha = 0.45;
        }
        
        // Draw zombie body
        ctx.fillStyle = z.color;
        
        if (z.type === 2) {
            // Crawler head (lower to ground)
            ctx.beginPath();
            ctx.arc(0, -h + 6*z.scale, 7*z.scale, 0, Math.PI * 2);
            ctx.fill();
            
            // Red eyes
            ctx.fillStyle = '#ff1744';
            ctx.fillRect(-2*z.scale, -h + 5*z.scale, 1*z.scale, 1*z.scale);
            ctx.fillRect(1*z.scale, -h + 5*z.scale, 1*z.scale, 1*z.scale);
            
            // Torso (horizontal crawler shape)
            ctx.fillStyle = '#1e3a1e';
            ctx.fillRect(-w/2, -h + 10*z.scale, w, 15*z.scale);
            
            // Crawling limbs
            ctx.fillStyle = z.color;
            ctx.fillRect(-w/2 - 4*z.scale, -h + 12*z.scale, 5*z.scale, 12*z.scale);
            ctx.fillRect(w/2 - 1*z.scale, -h + 12*z.scale, 5*z.scale, 12*z.scale);
        } else {
            // Head
            ctx.beginPath();
            ctx.arc(0, -h + 8*z.scale, 8*z.scale, 0, Math.PI * 2);
            ctx.fill();
            
            // Eyes
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(-3*z.scale, -h + 6.5*z.scale, 1.5*z.scale, 1.5*z.scale);
            ctx.fillRect(1.5*z.scale, -h + 6.5*z.scale, 1.5*z.scale, 1.5*z.scale);
            
            ctx.fillStyle = z.type === 3 ? '#eab308' : '#ff0000'; // Yellow eyes for armored
            ctx.fillRect(-2.5*z.scale, -h + 6.5*z.scale, 0.8*z.scale, 0.8*z.scale);
            ctx.fillRect(2*z.scale, -h + 6.5*z.scale, 0.8*z.scale, 0.8*z.scale);
            
            // Torso / clothes
            if (z.type === 3) {
                // Armored: dark gray scrap metal plates
                ctx.fillStyle = '#475569';
                ctx.fillRect(-w/2, -h + 16*z.scale, w, 28*z.scale);
                ctx.fillStyle = '#94a3b8';
                ctx.fillRect(-w/3, -h + 20*z.scale, (w*2)/3, 16*z.scale);
            } else if (z.type === 5) {
                // Toxic: purple radioactive sludge style
                ctx.fillStyle = '#3b0764';
                ctx.fillRect(-w/2, -h + 16*z.scale, w, 28*z.scale);
                ctx.fillStyle = '#22c55e';
                ctx.fillRect(-w/4, -h + 22*z.scale, w/2, 4*z.scale);
                ctx.fillRect(-w/3, -h + 30*z.scale, 3*z.scale, 3*z.scale);
            } else {
                ctx.fillStyle = z.type === 1 ? '#7c2d12' : '#1e3a1e';
                ctx.fillRect(-w/2, -h + 16*z.scale, w, 28*z.scale);
            }
            
            // Pants
            ctx.fillStyle = z.type === 3 ? '#1e293b' : '#0f172a';
            ctx.fillRect(-w/3, -h + 44*z.scale, (w*2)/3, 20*z.scale);
            
            // Arms
            ctx.fillStyle = z.color;
            ctx.fillRect(-w/2 - 4*z.scale, -h + 18*z.scale, 5*z.scale, 14*z.scale);
            ctx.fillRect(w/2 - 1*z.scale, -h + 18*z.scale, 5*z.scale, 14*z.scale);
            
            // Helmet for Armored
            if (z.type === 3) {
                ctx.fillStyle = '#64748b';
                ctx.beginPath();
                ctx.arc(0, -h + 6*z.scale, 9*z.scale, Math.PI, 0);
                ctx.fill();
                ctx.strokeStyle = '#334155';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(-9*z.scale, -h + 6*z.scale);
                ctx.lineTo(9*z.scale, -h + 6*z.scale);
                ctx.stroke();
            }
        }
        
        ctx.restore();
    });

    // 6.5 Draw Active Boss
    if (activeBoss) {
        const w = activeBoss.width * activeBoss.scale;
        const h = activeBoss.height * activeBoss.scale;
        
        ctx.save();
        ctx.translate(activeBoss.x, activeBoss.y);
        
        if (isFrozen) {
            ctx.shadowBlur = 15;
            ctx.shadowColor = '#06b6d4';
        }
        
        if (activeBoss.type === 'giant') {
            ctx.fillStyle = '#166534';
            // head
            ctx.beginPath();
            ctx.arc(0, -h + 12*activeBoss.scale, 12*activeBoss.scale, 0, Math.PI*2);
            ctx.fill();
            // red eyes
            ctx.fillStyle = '#ff0000';
            ctx.fillRect(-4*activeBoss.scale, -h + 8*activeBoss.scale, 2*activeBoss.scale, 2*activeBoss.scale);
            ctx.fillRect(2*activeBoss.scale, -h + 8*activeBoss.scale, 2*activeBoss.scale, 2*activeBoss.scale);
            // massive shoulder pads
            ctx.fillStyle = '#14532d';
            ctx.fillRect(-w/2, -h + 24*activeBoss.scale, w, 40*activeBoss.scale);
            // spikes on arms
            ctx.fillStyle = '#991b1b';
            ctx.fillRect(-w/2 - 6*activeBoss.scale, -h + 26*activeBoss.scale, 6*activeBoss.scale, 6*activeBoss.scale);
            ctx.fillRect(w/2, -h + 26*activeBoss.scale, 6*activeBoss.scale, 6*activeBoss.scale);
        } else if (activeBoss.type === 'mutant') {
            ctx.fillStyle = '#ea580c';
            ctx.beginPath();
            ctx.arc(0, -h + 10*activeBoss.scale, 10*activeBoss.scale, 0, Math.PI*2);
            ctx.fill();
            // glowing yellow eyes
            ctx.fillStyle = '#facc15';
            ctx.fillRect(-3*activeBoss.scale, -h + 8*activeBoss.scale, 2*activeBoss.scale, 2*activeBoss.scale);
            ctx.fillRect(1*activeBoss.scale, -h + 8*activeBoss.scale, 2*activeBoss.scale, 2*activeBoss.scale);
            // armored segments
            ctx.fillStyle = '#431407';
            ctx.fillRect(-w/2, -h + 20*activeBoss.scale, w, 28*activeBoss.scale);
            ctx.fillStyle = '#9a3412';
            ctx.fillRect(-w/2 + 4*activeBoss.scale, -h + 22*activeBoss.scale, w - 8*activeBoss.scale, 8*activeBoss.scale);
            ctx.fillRect(-w/2 + 2*activeBoss.scale, -h + 32*activeBoss.scale, w - 4*activeBoss.scale, 8*activeBoss.scale);
        } else if (activeBoss.type === 'trash') {
            ctx.fillStyle = '#7e22ce';
            ctx.beginPath();
            ctx.arc(0, -h + 16*activeBoss.scale, 16*activeBoss.scale, 0, Math.PI*2);
            ctx.fill();
            // glowing green eyes
            ctx.fillStyle = '#4ade80';
            ctx.fillRect(-5*activeBoss.scale, -h + 12*activeBoss.scale, 3*activeBoss.scale, 3*activeBoss.scale);
            ctx.fillRect(2*activeBoss.scale, -h + 12*activeBoss.scale, 3*activeBoss.scale, 3*activeBoss.scale);
            // Crown of Rey Trash
            ctx.fillStyle = '#eab308';
            ctx.beginPath();
            ctx.moveTo(-12*activeBoss.scale, -h + 4*activeBoss.scale);
            ctx.lineTo(-12*activeBoss.scale, -h - 8*activeBoss.scale);
            ctx.lineTo(-6*activeBoss.scale, -h);
            ctx.lineTo(0, -h - 10*activeBoss.scale);
            ctx.lineTo(6*activeBoss.scale, -h);
            ctx.lineTo(12*activeBoss.scale, -h - 8*activeBoss.scale);
            ctx.lineTo(12*activeBoss.scale, -h + 4*activeBoss.scale);
            ctx.closePath();
            ctx.fill();
            // body robe
            ctx.fillStyle = '#2e1065';
            ctx.fillRect(-w/2, -h + 32*activeBoss.scale, w, 60*activeBoss.scale);
        }
        
        ctx.restore();
    }
    
    // 6.7 Draw falling power-ups
    gamePowerUps.forEach(p => {
        ctx.save();
        p.pulse += 0.15;
        const size = p.radius + Math.sin(p.pulse) * 2;
        
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fillStyle = p.color;
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 1.5;
        
        // Draw diamond shape
        ctx.beginPath();
        ctx.moveTo(p.x, p.y - size);
        ctx.lineTo(p.x + size, p.y);
        ctx.lineTo(p.x, p.y + size);
        ctx.lineTo(p.x - size, p.y);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        
        // Symbol overlay
        ctx.fillStyle = '#000';
        ctx.font = 'bold 8px "Share Tech Mono"';
        let sym = 'A';
        if (p.type === 'health') sym = 'H';
        else if (p.type === 'shield') sym = 'S';
        else if (p.type === 'freeze') sym = 'F';
        ctx.fillText(sym, p.x - 3, p.y + 3);
        
        ctx.restore();
    });
    
    // 6.9 Draw Boss Projectiles
    bossProjectiles.forEach(p => {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#f97316';
        
        ctx.fillStyle = '#ff1744'; // Red inner core
        ctx.beginPath();
        ctx.arc(0, 0, p.radius, 0, Math.PI*2);
        ctx.fill();
        
        ctx.fillStyle = '#f97316'; // Orange flames
        for (let i = 0; i < 4; i++) {
            ctx.rotate(Math.PI / 2);
            ctx.fillRect(p.radius - 2, -2, 6, 4);
        }
        ctx.restore();
    });
    
    // 7. Draw Blood particles
    gameParticles.forEach(p => {
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI*2);
        ctx.fill();
        ctx.restore();
    });
    
    // 8. Gunshot muzzle flash layer overlay
    if (flashAlpha > 0) {
        ctx.fillStyle = `rgba(255, 235, 180, ${flashAlpha})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        flashAlpha -= 0.05;
    }
    
    // 9. Draw player Gun (aimed towards reticle)
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height - 10); // Player position bottom center (dynamic)
    const angle = Math.atan2(targetReticle.y - (canvas.height - 10), targetReticle.x - canvas.width / 2);
    ctx.rotate(angle);
    
    // Draw barrel based on weapon
    if (currentWeapon === 'pistol') {
        ctx.fillStyle = '#475569';
        ctx.fillRect(0, -5, 35, 10);
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(30, -4, 5, 8);
    } else if (currentWeapon === 'shotgun') {
        ctx.fillStyle = '#334155';
        ctx.fillRect(0, -7, 45, 14); // Double barrel
        ctx.fillStyle = '#020617';
        ctx.fillRect(0, -1, 45, 2);
        ctx.fillRect(40, -6, 5, 12);
    } else if (currentWeapon === 'uzi') {
        ctx.fillStyle = '#334155';
        ctx.fillRect(0, -6, 28, 12); // Short SMG
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(20, -5, 12, 10); // magazine clip entry
    } else if (currentWeapon === 'rpg') {
        ctx.fillStyle = '#15803d'; // Green bazooka tube
        ctx.fillRect(-10, -9, 55, 18);
        ctx.fillStyle = '#000';
        ctx.fillRect(40, -10, 5, 20); // Front flare rocket loader
    }
    
    ctx.restore();
    
    // 10. Draw Game target reticle (glowing and changing shapes based on active weapon)
    ctx.save();
    ctx.translate(targetReticle.x, targetReticle.y);
    
    let reticleColor = '#39ff14';
    if (currentWeapon === 'shotgun') reticleColor = '#ff5252';
    else if (currentWeapon === 'uzi') reticleColor = '#ffcc00';
    else if (currentWeapon === 'rpg') reticleColor = '#c084fc';
    
    ctx.strokeStyle = reticleColor;
    ctx.lineWidth = 1.5;
    ctx.shadowBlur = 8;
    ctx.shadowColor = reticleColor;
    
    if (currentWeapon === 'shotgun') {
        // Wide circle reticle
        ctx.beginPath();
        ctx.arc(0, 0, 20, 0, Math.PI*2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, 0, 2, 0, Math.PI*2);
        ctx.fillStyle = '#fff';
        ctx.fill();
    } else if (currentWeapon === 'uzi') {
        // Fast triple-ring cross
        ctx.beginPath();
        ctx.arc(0, 0, 10, 0, Math.PI*2);
        ctx.arc(0, 0, 16, 0, Math.PI*2);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(-6, 0); ctx.lineTo(6, 0);
        ctx.moveTo(0, -6); ctx.lineTo(0, 6);
        ctx.stroke();
    } else if (currentWeapon === 'rpg') {
        // Skull diamond shape reticle
        ctx.beginPath();
        ctx.moveTo(0, -18); ctx.lineTo(18, 0); ctx.lineTo(0, 18); ctx.lineTo(-18, 0);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(0, 0, 3, 0, Math.PI*2);
        ctx.fill();
    } else {
        // Standard pistol target reticle
        ctx.beginPath();
        ctx.arc(0, 0, 12, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(-16, 0); ctx.lineTo(-6, 0);
        ctx.moveTo(6, 0); ctx.lineTo(16, 0);
        ctx.moveTo(0, -16); ctx.lineTo(0, -6);
        ctx.moveTo(0, 6); ctx.lineTo(0, 16);
        ctx.stroke();
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(0, 0, 1.8, 0, Math.PI*2);
        ctx.fill();
    }
    
    ctx.restore();
    
    // 11. Render Screen Text Message overlay
    if (screenMessage && screenMessage.duration > 0) {
        ctx.save();
        ctx.font = '22px "Share Tech Mono"';
        ctx.fillStyle = '#ff1744';
        ctx.textAlign = 'center';
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(255, 23, 68, 0.8)';
        ctx.fillText(screenMessage.text, canvas.width / 2, 90);
        ctx.restore();
        screenMessage.duration--;
    }
    
    ctx.restore(); // Top level screen shake restore
}

// ==========================================================================
// 8. GAMEPAD API CONTROLS LOOP
// ==========================================================================

let gamepadActive = false;
let buttonStates = {};
const AXIS_THRESHOLD = 0.5;

function setupGamepadPolling() {
    window.addEventListener("gamepadconnected", (e) => {
        console.log(`Gamepad: ${e.gamepad.id}`);
        gamepadActive = true;
        const label = document.querySelector('.console-label');
        if (label) label.textContent = "CONTROLLER DETECTED // BASED_NET";
    });
    
    window.addEventListener("gamepaddisconnected", (e) => {
        console.log("Gamepad disconnected.");
        gamepadActive = false;
        const label = document.querySelector('.console-label');
        if (label) label.textContent = "BASED_NATION_SYSTEM_v1.3";
    });
    
    setInterval(pollGamepad, 100);
}

function pollGamepad() {
    if (!gamepadActive) return;
    const gamepads = navigator.getGamepads ? navigator.getGamepads() : [];
    const gp = gamepads[0];
    if (!gp) return;
    
    let left = gp.buttons[14]?.pressed || gp.axes[0] < -AXIS_THRESHOLD;
    let right = gp.buttons[15]?.pressed || gp.axes[0] > AXIS_THRESHOLD;
    let up = gp.buttons[12]?.pressed || gp.axes[1] < -AXIS_THRESHOLD;
    let down = gp.buttons[13]?.pressed || gp.axes[1] > AXIS_THRESHOLD;
    
    let cross = gp.buttons[0]?.pressed;   // A
    let circle = gp.buttons[1]?.pressed;  // B
    let square = gp.buttons[2]?.pressed;  // X
    let triangle = gp.buttons[3]?.pressed;// Y
    
    if (right && !buttonStates['right']) triggerDpadAction('right');
    if (left && !buttonStates['left']) triggerDpadAction('left');
    if (down && !buttonStates['down']) triggerDpadAction('down');
    if (up && !buttonStates['up']) triggerDpadAction('up');
    
    if (cross && !buttonStates['cross']) triggerButtonAction('cross');
    if (circle && !buttonStates['circle']) triggerButtonAction('circle');
    if (square && !buttonStates['square']) triggerButtonAction('square');
    if (triangle && !buttonStates['triangle']) triggerButtonAction('triangle');
    
    buttonStates = { left, right, up, down, cross, circle, square, triangle };
}

function triggerDpadAction(dir) {
    if (AppState.currentScreen === 'boot') return;
    
    if (AppState.currentScreen === 'menu') {
        const opts = document.querySelectorAll('.menu-opt');
        opts[AppState.menuIndex].classList.remove('active-opt');
        if (dir === 'down') AppState.menuIndex = (AppState.menuIndex + 1) % opts.length;
        else if (dir === 'up') AppState.menuIndex = (AppState.menuIndex - 1 + opts.length) % opts.length;
        opts[AppState.menuIndex].classList.add('active-opt');
        AudioSystem.playClickSound();
    } else if (AppState.currentScreen === 'shows') {
        if (dir === 'down') navigateList('shows', 1);
        else if (dir === 'up') navigateList('shows', -1);
    } else if (AppState.currentScreen === 'merch') {
        if (dir === 'down' || dir === 'right') navigateList('merch', 1);
        else if (dir === 'up' || dir === 'left') navigateList('merch', -1);
    } else if (AppState.currentScreen === 'beats') {
        if (dir === 'down') navigateList('beats', 1);
        else if (dir === 'up') navigateList('beats', -1);
    }
}

function triggerButtonAction(btn) {
    if (AppState.currentScreen === 'boot') {
        if (btn === 'cross') {
            const btnBoot = document.getElementById('btn-boot-underground');
            if (btnBoot) btnBoot.click();
        }
        return;
    }
    
    switch (btn) {
        case 'cross': // A (Select)
            if (AppState.currentScreen === 'menu') {
                selectMenuOption();
            } else if (AppState.currentScreen === 'game') {
                if (!gameActive) {
                    if (!document.getElementById('game-start-overlay').classList.contains('hidden')) {
                        document.getElementById('btn-start-minigame').click();
                    } else if (!document.getElementById('game-over-overlay').classList.contains('hidden')) {
                        document.getElementById('btn-restart-game').click();
                    }
                } else {
                    firePlayerWeapon();
                }
            } else if (AppState.currentScreen === 'shows') {
                const currentShow = SHOWS_DATA[AppState.showsIndex];
                if (currentShow && currentShow.id === 0) window.open(currentShow.ticketUrl, '_blank');
            } else if (AppState.currentScreen === 'merch') {
                document.getElementById('btn-buy-merch').click();
            }
            break;
            
        case 'circle': // B (Back)
            if (AppState.currentScreen !== 'menu') {
                closeActiveSubScreen();
            }
            break;
            
        case 'square': // X (Reload / Option action)
            if (AppState.currentScreen === 'game' && gameActive) {
                reloadPlayerWeapon();
            } else if (AppState.currentScreen === 'shows') {
                document.getElementById('btn-delete-show').click();
            } else if (AppState.currentScreen === 'merch') {
                document.getElementById('btn-claim-points').click();
            }
            break;
            
        case 'triangle': // Y (Play/Pause Audio)
            if (AppState.currentScreen === 'beats') {
                togglePlayPause();
            }
            break;
    }
}

function navigateList(type, direction) {
    if (type === 'shows') {
        const slots = document.querySelectorAll('.save-slot-row');
        AppState.showsIndex = (AppState.showsIndex + direction + SHOWS_DATA.length) % SHOWS_DATA.length;
        slots.forEach(s => s.classList.remove('active-slot'));
        slots[AppState.showsIndex].classList.add('active-slot');
        updateShowDetails(AppState.showsIndex);
        slots[AppState.showsIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else if (type === 'merch') {
        const items = document.querySelectorAll('.merch-item');
        AppState.merchIndex = (AppState.merchIndex + direction + MERCH_DATA.length) % MERCH_DATA.length;
        items.forEach(i => i.classList.remove('active-merch-item'));
        items[AppState.merchIndex].classList.add('active-merch-item');
        updateMerchDetails(AppState.merchIndex);
        items[AppState.merchIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else if (type === 'beats') {
        changeTrack(direction);
    }
    AudioSystem.playClickSound();
}

// Initialize minigame canvas hooks
setupZombieGame();
setupGamepadPolling();

// ==========================================================================
// 7. SPOTIFY INTEGRATION SYSTEM
// ==========================================================================

function positionSpotifyIframe() {
    const host = document.getElementById('spotify-audio-host');
    const placeholder = document.getElementById('spotify-iframe-container');
    
    if (host && placeholder && AppState.currentScreen === 'beats') {
        const rect = placeholder.getBoundingClientRect();
        host.style.transition = 'opacity 0.3s ease';
        host.style.left = `${rect.left}px`;
        host.style.top = `${rect.top}px`;
        host.style.width = `${rect.width}px`;
        host.style.height = `${rect.height}px`;
        host.style.opacity = '1';
        host.style.pointerEvents = 'auto';
    } else if (host) {
        host.style.transition = 'opacity 0.3s ease, left 0s 0.3s, top 0s 0.3s';
        host.style.left = '-9999px';
        host.style.top = '-9999px';
        host.style.width = '300px';
        host.style.height = '380px';
        host.style.opacity = '0.001';
        host.style.pointerEvents = 'none';
    }
}

function setupSpotifyIntegration() {
    // Bind click events on all track rows inside beats screen to load the track inside this iframe
    const trackRows = document.querySelectorAll('.track-row');
    trackRows.forEach((row, idx) => {
        row.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            AppState.beatsIndex = idx;
            trackRows.forEach(r => r.classList.remove('active-track'));
            row.classList.add('active-track');
            
            // This updates both text metadata and the Spotify iframe src
            loadTrack(idx);
            
            AudioSystem.playClickSound();
            
            if (!AppState.audioPlaying) {
                togglePlayPause();
            } else {
                AudioSystem.startBeatEngine(idx);
            }
        });
    });

    // Minimize button in floating widget
    const minimizeBtn = document.getElementById('btn-minimize-spotify');
    if (minimizeBtn) {
        minimizeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            AppState.spotifyWidgetCollapsed = true;
            positionSpotifyIframe();
            AudioSystem.playClickSound();
        });
    }

    // Host widget toggle listener when collapsed
    const host = document.getElementById('spotify-audio-host');
    if (host) {
        host.addEventListener('click', (e) => {
            // Expand only when clicked in collapsed state and not inside Beats screen
            if (host.classList.contains('collapsed') && AppState.currentScreen !== 'beats') {
                AppState.spotifyWidgetCollapsed = false;
                positionSpotifyIframe();
                AudioSystem.playClickSound();
            }
        });
    }

    window.addEventListener('resize', positionSpotifyIframe);
}

function loadSpotifyTrack(trackId) {
    const iframe = document.getElementById('spotify-widget-iframe');
    if (iframe) {
        iframe.src = `https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0&autoplay=1`;
        AudioSystem.playSelectSound();
    }
}

// ==========================================================================
// 8. TICKETRONA DYNAMIC LIVE SCRAPER ENGINE
// ==========================================================================

function runTicketronaScraper() {
    const logContainer = document.getElementById('scraper-log');
    if (!logContainer) return;
    
    logContainer.innerHTML = '';
    
    const writeLog = (text, delay) => {
        return new Promise(resolve => {
            setTimeout(() => {
                const line = document.createElement('div');
                line.innerHTML = text;
                logContainer.appendChild(line);
                logContainer.scrollTop = logContainer.scrollHeight;
                resolve();
            }, delay);
        });
    };

    // Sequential simulation logs & fetch call
    (async () => {
        await writeLog("&gt; INICIANDO SCRAPER DE ENTRADAS [TICKETRONA DEFIANT ENGINE v1.2]...", 100);
        await writeLog("&gt; CONECTANDO A SERVIDORES DE TICKETRONA.COM EN ESPAÑA...", 400);
        await writeLog("&gt; SOLICITANDO BÚSQUEDA DEL ARTISTA: <span style='color:#ff1744; font-weight:bold;'>roomtrash6</span>...", 500);
        
        try {
            // Actual fetch request to Ticketrona via AllOrigins CORS-bypass proxy
            const targetUrl = 'https://www.ticketrona.com/evento/christ-dillinger-acid-soulja-roomtrash6-cybernene-en-madrid';
            const fetchUrl = 'https://api.allorigins.win/raw?url=' + encodeURIComponent(targetUrl);
            
            await writeLog("&gt; ENVIANDO REQUEST GET A: " + targetUrl + "...", 400);
            
            const response = await fetch(fetchUrl);
            
            if (response.status === 200) {
                await writeLog("&gt; <span style='color:#39ff14;'>[CONEXIÓN EXITOSA]</span> Respuesta recibida del servidor.", 300);
                await writeLog("&gt; ANALIZANDO ESTRUCTURA DOM DE LA COMPRA DE ENTRADAS...", 300);
                await writeLog("&gt; <span style='color:#39ff14;'>[LOGRADO]</span> Se detectó evento activo de roomtrash6 en Madrid.", 200);
            } else {
                // Cloudflare 403 or other proxy blocks
                await writeLog("&gt; <span style='color:#ff1744;'>[AVISO]</span> Servidor respondió con código " + response.status + " (Cloudflare DDoS Shield active).", 400);
                await writeLog("&gt; EJECUTANDO PROTOCOLO 'BYPASS CACHE HACK'...", 300);
                await writeLog("&gt; <span style='color:#39ff14;'>[CONTRABANDO EXITOSO]</span> Conexión cifrada establecida con base de datos de backup local.", 400);
            }
        } catch (err) {
            await writeLog("&gt; <span style='color:#ff1744;'>[ERROR DE RED]</span> No se pudo establecer conexión HTTP: " + err.message, 400);
            await writeLog("&gt; CARGANDO BASE DE DATOS DE COPIA DE SEGURIDAD LOCAL...", 300);
            await writeLog("&gt; <span style='color:#39ff14;'>[RESPALDO CARGADO]</span> Base de datos cargada.", 300);
        }
        
        // Final results log
        await writeLog("&gt; -------------------------------------------------------------", 200);
        await writeLog("&gt; <span style='color:#39ff14; font-weight:bold;'>[RESULTADOS BÚSQUEDA]</span> 1 show activo disponible para roomtrash6 en Madrid (España).", 200);
    })();
}

function playRandomSpotifyTrack() {
    const iframe = document.getElementById('spotify-widget-iframe');
    if (iframe && typeof BEATS_DATA !== 'undefined' && BEATS_DATA.length > 0) {
        const randomIdx = Math.floor(Math.random() * BEATS_DATA.length);
        const track = BEATS_DATA[randomIdx];
        const parts = track.spotifyUrl.split('/track/');
        if (parts.length > 1) {
            const trackId = parts[1].split('?')[0];
            iframe.src = "https://open.spotify.com/embed/track/" + trackId + "?utm_source=generator&theme=0&autoplay=1";
            AppState.beatsIndex = randomIdx;
            console.log("Autoplaying random Spotify track: " + track.name);
        }
    }
}

// ==========================================================================
// 9. DYNAMIC SPINS COVERS ROTATOR
// ==========================================================================

function setupDiscsRotation() {
    const covers = [
        'https://i.scdn.co/image/ab67616d00004851e52578729a9a11599d15aa93', // BASED NATION
        'https://i.scdn.co/image/ab67616d00001e024a0632ff95a0291dce19c4fe', // CASH OUT
        'https://i.scdn.co/image/ab67616d00001e02c40f08ed588ecf50cd4e95c3', // Crazy London Pipol
        'https://i.scdn.co/image/ab67616d00001e025eaf15c353e37cf4ccae2e97', // DE RODILLAS
        'https://i.scdn.co/image/ab67616d000048512036e1bec1da38af2529e321', // DISOBEY VOL. II
        'https://i.scdn.co/image/ab67616d000048513c867bce73e7dc5f3d749a51', // el simón
        'https://i.scdn.co/image/ab67616d00004851b24aedd49b40541fbd5cfc87', // Mac and cheese
        'https://i.scdn.co/image/ab67616d00004851b5284bb8956d2a5638eaa3d1', // Mejor no
        'https://i.scdn.co/image/ab67616d00004851c68a323c0e84be4168e0adec', // Sueño Permanente
        'https://i.scdn.co/image/ab67616d00001e0246c586034e1fa3f442e37520', // TRIP
        'https://i.scdn.co/image/ab67616d00004851271cc3900a316bba6799adff', // Work It Up
        'https://i.scdn.co/image/ab67616d000048510401806bcd3e71dd84aafa6f', // ENVIDIA / RIRI
        'https://i.scdn.co/image/ab67616d00001e02a760e556b1a9e42457865391'  // First Rapper
    ];
    
    const vinylLabels = document.querySelectorAll('.vinyl-menu-item .vinyl-label');
    if (vinylLabels.length === 0) return;
    
    // Assign a unique random starting index to each label
    const usedIndices = new Set();
    vinylLabels.forEach((label) => {
        let randIdx;
        do {
            randIdx = Math.floor(Math.random() * covers.length);
        } while (usedIndices.has(randIdx) && usedIndices.size < covers.length);
        
        usedIndices.add(randIdx);
        label.style.backgroundImage = "url('" + covers[randIdx] + "')";
        label.style.transition = 'opacity 0.4s ease';
    });
    
    // Periodically change them with a smooth fade
    setInterval(() => {
        if (AppState.currentScreen !== 'menu') return; // Only rotate when in menu screen to conserve performance
        
        vinylLabels.forEach((label) => {
            label.style.opacity = '0.1';
            setTimeout(() => {
                const randIdx = Math.floor(Math.random() * covers.length);
                label.style.backgroundImage = "url('" + covers[randIdx] + "')";
                label.style.opacity = '1';
            }, 400);
        });
    }, 7000); // Every 7 seconds
}
