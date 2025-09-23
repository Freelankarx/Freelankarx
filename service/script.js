document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('primary-nav');
  const navToggle = document.getElementById('navToggle');
  const yearEl = document.getElementById('year');

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  function setNavOpen(open) {
    if (!nav) return;
    if (open) {
      nav.classList.add('open');
      navToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    } else {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  }

  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    setNavOpen(!expanded);
  });

  // Close nav on Escape
  document.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') setNavOpen(false);
  });

  // Close nav when clicking outside
  document.addEventListener('click', (e) => {
    if (!nav) return;
    if (nav.classList.contains('open')) {
      const target = e.target;
      if (!nav.contains(target) && !navToggle.contains(target)) setNavOpen(false);
    }
  });

  // FAQ accordion
  const faqButtons = document.querySelectorAll('.faq-q');
  faqButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      const panel = btn.nextElementSibling;
      if (!panel) return;
      panel.hidden = expanded;
      if (!expanded) panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  });
});