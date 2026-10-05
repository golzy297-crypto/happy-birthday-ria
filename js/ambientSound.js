/**
 * =====================================================================
 * OUR LITTLE CORNER OF TIME — AMBIENT SOUND GENERATOR (Web Audio API)
 * =====================================================================
 * Muted by default. Strictly no autoplay.
 * Synthesizes a warm, meditative, melancholic piano/acoustic ambient loop
 * using native Web Audio oscillators, biquad filters, and reverb envelopes.
 */

class AmbientSoundEngine {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.masterGain = null;
    this.loopTimer = null;
    this.currentStep = 0;

    // Nostalgic, bittersweet pentatonic chord progression
    // Fmaj7 -> Cmaj7 -> Dm7 -> Bbmaj7
    this.chords = [
      [174.61, 220.00, 261.63, 329.63, 440.00], // F3, A3, C4, E4, A4
      [130.81, 196.00, 246.94, 261.63, 392.00], // C3, G3, B3, C4, G4
      [146.83, 174.61, 220.00, 261.63, 349.23], // D3, F3, A3, C4, F4
      [116.54, 174.61, 233.08, 293.66, 349.23]  // Bb2, F3, Bb3, D4, F4
    ];
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();

      // Master output
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0, this.ctx.currentTime);

      // Warm low-pass filter (simulates tape warmth)
      this.filter = this.ctx.createBiquadFilter();
      this.filter.type = 'lowpass';
      this.filter.frequency.setValueAtTime(620, this.ctx.currentTime);
      this.filter.Q.setValueAtTime(1.2, this.ctx.currentTime);

      this.masterGain.connect(this.filter);
      this.filter.connect(this.ctx.destination);
    }
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  start() {
    this.init();
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    this.isPlaying = true;
    // Gentle 1.5s fade in
    this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime);
    this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, this.ctx.currentTime);
    this.masterGain.gain.linearRampToValueAtTime(0.18, this.ctx.currentTime + 1.5);

    this.scheduleChord();
  }

  stop() {
    if (!this.isPlaying || !this.ctx) return;
    this.isPlaying = false;
    if (this.loopTimer) clearTimeout(this.loopTimer);

    // Gentle 1.2s fade out
    this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime);
    this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, this.ctx.currentTime);
    this.masterGain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 1.2);
  }

  scheduleChord() {
    if (!this.isPlaying) return;

    const chord = this.chords[this.currentStep];
    const now = this.ctx.currentTime;
    const chordDuration = 5.5; // seconds per chord

    // Strum notes gently
    chord.forEach((freq, idx) => {
      const noteDelay = idx * 0.12; // gentle acoustic arpeggio delay
      const osc = this.ctx.createOscillator();
      const noteGain = this.ctx.createGain();

      // Blend sine and soft triangle for warm electric piano / acoustic texture
      osc.type = idx === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, now + noteDelay);

      // Envelope: soft attack, sustained decay
      noteGain.gain.setValueAtTime(0.0001, now + noteDelay);
      noteGain.gain.exponentialRampToValueAtTime(0.08 / (idx + 1), now + noteDelay + 0.35);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, now + noteDelay + chordDuration + 1.5);

      osc.connect(noteGain);
      noteGain.connect(this.masterGain);

      osc.start(now + noteDelay);
      osc.stop(now + noteDelay + chordDuration + 2.0);
    });

    this.currentStep = (this.currentStep + 1) % this.chords.length;

    // Schedule next chord slightly before current fades
    this.loopTimer = setTimeout(() => {
      this.scheduleChord();
    }, (chordDuration - 0.5) * 1000);
  }

  // Play a brief warm preview chime for specific soundtrack entries
  playPreviewTone(type) {
    this.init();
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    const now = this.ctx.currentTime;
    const toneGain = this.ctx.createGain();
    toneGain.gain.setValueAtTime(0.001, now);
    toneGain.gain.linearRampToValueAtTime(0.12, now + 0.1);
    toneGain.gain.exponentialRampToValueAtTime(0.0001, now + 3.5);

    toneGain.connect(this.ctx.destination);

    const freqs = [261.63, 329.63, 392.00, 523.25]; // C major gentle chime
    freqs.forEach((f, i) => {
      const osc = this.ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, now + i * 0.08);
      osc.connect(toneGain);
      osc.start(now + i * 0.08);
      osc.stop(now + 4.0);
    });
  }
}

// Global instance
window.ambientSound = new AmbientSoundEngine();
