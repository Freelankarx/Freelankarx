/* ============================================
   FAQ ACCORDION — Enhanced
   ============================================ */

window.FreelankarxFAQ = (function() {
  function init() {
    document.querySelectorAll('.faq-item').forEach(item => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');
      const icon = item.querySelector('.faq-icon');
      if (!question || !answer) return;

      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');

        // Close all others
        document.querySelectorAll('.faq-item.open').forEach(i => {
          i.classList.remove('open');
          const a = i.querySelector('.faq-answer');
          const ic = i.querySelector('.faq-icon');
          if (a) a.style.maxHeight = '0';
          if (ic) ic.textContent = '+';
        });

        // Open current (if it was closed)
        if (!isOpen) {
          item.classList.add('open');
          answer.style.maxHeight = answer.scrollHeight + 'px';
          if (icon) icon.textContent = '−';
        }
      });
    });
  }

  return { init };
})();
