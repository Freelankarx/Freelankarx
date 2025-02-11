document.addEventListener('DOMContentLoaded', function() {
  // Reveal Sections on Scroll using Intersection Observer
  const sections = document.querySelectorAll('.section');
  const observerOptions = { threshold: 0.3 };
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  sections.forEach(section => {
    revealObserver.observe(section);
  });

  // GSAP Animations for Hero Section
  gsap.from('.hero-content h1', { opacity: 0, y: -50, duration: 1.5, ease: 'power2.out' });
  gsap.from('.hero-content p', { opacity: 0, y: 50, duration: 1.5, delay: 0.3, ease: 'power2.out' });
  gsap.from('.btn', { opacity: 0, scale: 0.8, duration: 1.5, delay: 0.6, ease: 'back.out(1.7)' });

  // Optional: Mobile Navigation Toggle
  const navToggle = document.querySelector('.nav-toggle');
  if(navToggle) {
    navToggle.addEventListener('click', () => {
      document.querySelector('nav ul').classList.toggle('active');
    });
  }

  // Social Icons Hover Effects with GSAP
  const socialLinks = document.querySelectorAll('.social-icons a');
  socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      gsap.to(link, { scale: 1.2, duration: 0.3 });
    });
    link.addEventListener('mouseleave', () => {
      gsap.to(link, { scale: 1, duration: 0.3 });
    });
  });
});
