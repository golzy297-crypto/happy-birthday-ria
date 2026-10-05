/**
 * =====================================================================
 * OUR LITTLE CORNER OF TIME — PARTICLES & FILM GRAIN ENGINE
 * =====================================================================
 */

(function () {
  // 1. HERO FLOATING PARTICLES / SOFT EMBERS
  const heroCanvas = document.getElementById('hero-stars-canvas');
  if (heroCanvas) {
    const ctx = heroCanvas.getContext('2d');
    let width, height;
    let particles = [];
    const PARTICLE_COUNT = 65;

    function resizeHeroCanvas() {
      width = heroCanvas.width = heroCanvas.parentElement.offsetWidth || window.innerWidth;
      height = heroCanvas.height = heroCanvas.parentElement.offsetHeight || window.innerHeight;
      initParticles();
    }

    function initParticles() {
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.5 + 0.5,
          color: Math.random() > 0.4 ? 'rgba(223, 196, 141, ' : 'rgba(245, 242, 235, ',
          alpha: Math.random() * 0.6 + 0.2,
          speedX: (Math.random() - 0.5) * 0.25,
          speedY: -Math.random() * 0.35 - 0.1, // gently drifting upwards
          pulseSpeed: Math.random() * 0.02 + 0.008,
          pulseVal: Math.random() * Math.PI
        });
      }
    }

    let animationFrameId;
    function renderParticles() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;
        p.pulseVal += p.pulseSpeed;

        // Wrap around boundaries
        if (p.y < -10) p.y = height + 10;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        const dynamicAlpha = Math.max(0.1, p.alpha + Math.sin(p.pulseVal) * 0.25);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color + dynamicAlpha + ')';
        ctx.shadowBlur = p.radius * 3;
        ctx.shadowColor = 'rgba(197, 160, 89, 0.4)';
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(renderParticles);
    }

    window.addEventListener('resize', resizeHeroCanvas);
    resizeHeroCanvas();
    renderParticles();
  }

  // 2. FILM GRAIN OVERLAY (Procedural subtle analog texture)
  const grainCanvas = document.getElementById('film-grain-canvas');
  if (grainCanvas) {
    const gCtx = grainCanvas.getContext('2d');
    let gWidth = (grainCanvas.width = 320);
    let gHeight = (grainCanvas.height = 320);

    function generateFilmGrain() {
      const imgData = gCtx.createImageData(gWidth, gHeight);
      const buffer = new Uint32Array(imgData.data.buffer);
      const len = buffer.length;

      for (let i = 0; i < len; i++) {
        // High quality fast monochromatic grain noise
        if (Math.random() < 0.5) {
          const noise = (Math.random() * 45) | 0;
          buffer[i] = (noise << 24) | (0x101010);
        }
      }

      gCtx.putImageData(imgData, 0, 0);
    }

    // Refresh grain every ~80ms for organic analog flicker
    setInterval(generateFilmGrain, 80);
    generateFilmGrain();
  }
})();
