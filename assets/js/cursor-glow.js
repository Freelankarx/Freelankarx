/* ============================================
   CURSOR GLOW EFFECT
   Soft colored aura follows mouse
   ============================================ */

window.FreelankarxCursorGlow = (function() {
  let glow, mouseX = 0, mouseY = 0, currentX = 0, currentY = 0, rafId;

  function init() {
    // Skip on touch devices and reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if ('ontouchstart' in window) return;

    glow = document.querySelector('.cursor-glow');
    if (!glow) return;

    let isActive = false;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isActive) {
        glow.classList.add('active');
        isActive = true;
      }
    });

    document.addEventListener('mouseleave', () => {
      glow.classList.remove('active');
      isActive = false;
    });

    function loop() {
      // Smooth easing toward mouse
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;
      glow.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(loop);
    }
    loop();
  }

  return { init };
})();
