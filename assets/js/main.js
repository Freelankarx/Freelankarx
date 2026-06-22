/* ============================================
   FREELANKARX — MAIN ORCHESTRATOR
   ============================================ */

(function() {
  'use strict';

  const App = {
    init() {
      this.loadingScreen();
      this.navigation();
      this.revealOnScroll();
      this.smoothScroll();
      this.currentYear();
      this.initModules();
    },

    loadingScreen() {
      const screen = document.querySelector('.loading-screen');
      if (!screen) return;

      // Lock scroll while loading
      document.body.style.overflow = 'hidden';

      const hideScreen = () => {
        screen.classList.add('hidden');
        document.body.style.overflow = '';
        setTimeout(() => {
          screen.remove();
          window.dispatchEvent(new Event('app:ready'));
        }, 800);
      };

      window.addEventListener('load', () => {
        setTimeout(hideScreen, 2000);
      });

      // Fallback in case 'load' takes too long
      setTimeout(() => {
        if (screen && !screen.classList.contains('hidden')) hideScreen();
      }, 6000);
    },

    navigation() {
      const navbar = document.querySelector('.navbar');
      const toggle = document.querySelector('.nav-toggle');
      const menu = document.querySelector('.nav-menu');
      if (!navbar) return;

      window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
      }, { passive: true });

      if (toggle && menu) {
        toggle.addEventListener('click', () => {
          toggle.classList.toggle('active');
          menu.classList.toggle('open');
          document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
        });

        menu.querySelectorAll('a').forEach(link => {
          link.addEventListener('click', () => {
            toggle.classList.remove('active');
            menu.classList.remove('open');
            document.body.style.overflow = '';
          });
        });
      }
    },

    revealOnScroll() {
      const elements = document.querySelectorAll('.reveal');
      if (!elements.length) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

      elements.forEach(el => observer.observe(el));
    },

    smoothScroll() {
      document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
          const href = link.getAttribute('href');
          if (href === '#' || href.length <= 1) return;
          const target = document.querySelector(href);
          if (!target) return;
          e.preventDefault();
          const offset = 80;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        });
      });
    },

    currentYear() {
      document.querySelectorAll('[data-year]').forEach(el => {
        el.textContent = new Date().getFullYear();
      });
    },

    initModules() {
      // Init cursor + aurora immediately (don't wait for load)
      if (window.FreelankarxCursorGlow) window.FreelankarxCursorGlow.init();
      if (window.FreelankarxAurora) window.FreelankarxAurora.init();

      // Heavy modules wait for app:ready event
      window.addEventListener('app:ready', () => {
        if (window.FreelankarxParticles) window.FreelankarxParticles.init();
        if (window.FreelankarxThree) window.FreelankarxThree.init();
        if (window.FreelankarxCounters) window.FreelankarxCounters.init();
        if (window.FreelankarxForms) window.FreelankarxForms.init();
        if (window.FreelankarxFAQ) window.FreelankarxFAQ.init();
      });
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => App.init());
  } else {
    App.init();
  }
})();
