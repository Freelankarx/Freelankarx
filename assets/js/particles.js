/* ============================================
   COLORFUL PARTICLE GALAXY
   Multi-colored, multi-sized, with dynamic connections
   ============================================ */

window.FreelankarxParticles = (function() {
  let canvas, ctx, particles = [], animationId;
  const PARTICLE_COUNT = window.innerWidth < 768 ? 50 : 120;
  const COLORS = [
    { rgb: '139, 92, 246', hex: '#8B5CF6' },   // Purple
    { rgb: '6, 182, 212', hex: '#06B6D4' },    // Cyan
    { rgb: '236, 72, 153', hex: '#EC4899' },   // Pink
    { rgb: '59, 130, 246', hex: '#3B82F6' },   // Blue
    { rgb: '16, 185, 129', hex: '#10B981' },   // Green
    { rgb: '255, 255, 255', hex: '#FFFFFF' }   // White stars
  ];

  function createParticle() {
    const colorIndex = Math.random() < 0.7
      ? Math.floor(Math.random() * 5)  // 70% colorful
      : 5;                                // 30% white stars

    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.8 + 0.4,
      color: COLORS[colorIndex],
      opacity: Math.random() * 0.6 + 0.3,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.03 + 0.01
    };
  }

  function resize() {
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function draw() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw connections first (behind particles)
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130) {
          const opacity = (1 - dist / 130) * 0.25;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          // Use mix of both particle colors
          ctx.strokeStyle = `rgba(${p.color.rgb}, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    // Draw particles
    particles.forEach((p) => {
      // Update position
      p.x += p.vx;
      p.y += p.vy;
      p.pulse += p.pulseSpeed;

      // Wrap around edges
      if (p.x < -10) p.x = canvas.width + 10;
      if (p.x > canvas.width + 10) p.x = -10;
      if (p.y < -10) p.y = canvas.height + 10;
      if (p.y > canvas.height + 10) p.y = -10;

      // Pulsing opacity
      const currentOpacity = p.opacity * (0.7 + Math.sin(p.pulse) * 0.3);

      // Outer glow
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius * 4, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color.rgb}, ${currentOpacity * 0.15})`;
      ctx.fill();

      // Mid glow
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius * 2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color.rgb}, ${currentOpacity * 0.4})`;
      ctx.fill();

      // Core
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color.rgb}, ${currentOpacity})`;
      ctx.fill();

      // Bright center for white stars
      if (p.color.hex === '#FFFFFF') {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`;
        ctx.fill();
      }
    });

    animationId = requestAnimationFrame(draw);
  }

  function init() {
    canvas = document.querySelector('.particles-canvas');
    if (!canvas) return;

    // Respect user motion preferences
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      canvas.style.display = 'none';
      return;
    }

    ctx = canvas.getContext('2d');
    resize();

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(createParticle());
    }

    draw();

    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resize, 200);
    });
  }

  return { init };
})();
