/* ============================================
   FREELANKARX — SHARED COMPONENTS LOADER (FIXED)
   Handles any folder depth automatically
   ============================================ */

(function() {
  'use strict';

  // Auto-detect base path based on current URL depth
  function getBasePath() {
    const path = window.location.pathname;
    // Count slashes to determine depth
    // Root: /index.html → 1 slash → ./
    // Level 1: /about/index.html → 2 slashes → ../
    // Level 2: /services/shopify-development/index.html → 3 slashes → ../../
    
    const segments = path.split('/').filter(s => s && !s.includes('.html'));
    const depth = segments.length; // 0 = root, 1 = one folder deep, etc.
    
    return '../'.repeat(depth);
  }

  // Mark current page as active in nav
  function setActiveNavLink() {
    const currentPath = window.location.pathname.replace(/\/$/, '').replace(/\/index\.html$/, '');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;
      
      // Normalize href
      let normalizedHref = href.replace(/^\.\.\//g, '').replace(/^\.\//, '');
      
      if (normalizedHref === currentPath || 
          (normalizedHref !== '/' && currentPath.startsWith(normalizedHref)) ||
          (normalizedHref === '/' && (currentPath === '' || currentPath === '/'))) {
        link.classList.add('active');
      }
    });
  }

  // Load a single component via fetch
  async function loadComponent(name, placeholderId) {
    const placeholder = document.getElementById(placeholderId);
    if (!placeholder) {
      console.warn(`Placeholder #${placeholderId} not found`);
      return;
    }

    const basePath = getBasePath();
    const url = basePath + 'components/' + name + '.html';

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status} loading ${url}`);
      const html = await response.text();
      placeholder.outerHTML = html;
      console.log(`✓ Loaded: ${name}`);
    } catch (error) {
      console.error(`✗ Failed to load ${name}:`, error);
    }
  }

  // Initialize
  async function init() {
    const components = ['nav', 'footer', 'whatsapp-button'];
    const promises = components.map(name => {
      const placeholder = document.getElementById(name + '-placeholder');
      return placeholder ? loadComponent(name, name + '-placeholder') : null;
    }).filter(Boolean);

    await Promise.all(promises);
    setActiveNavLink();

    // Re-trigger main app initialization
    if (window.FreelankarxMain && typeof window.FreelankarxMain.init === 'function') {
      window.FreelankarxMain.init();
    }
  }

  // Run when ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
