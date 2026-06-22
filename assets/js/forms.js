/* ============================================
   ENHANCED FORM HANDLING
   Better UX with inline validation
   ============================================ */

window.FreelankarxForms = (function() {
  function init() {
    document.querySelectorAll('form[data-form]').forEach(form => {
      form.addEventListener('submit', handleSubmit);

      // Add real-time validation
      const inputs = form.querySelectorAll('input, textarea, select');
      inputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => clearError(input));
      });
    });
  }

  function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let message = '';

    if (field.required && !value) {
      isValid = false;
      message = 'This field is required';
    } else if (field.type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      isValid = false;
      message = 'Please enter a valid email';
    }

    setFieldState(field, isValid, message);
    return isValid;
  }

  function setFieldState(field, isValid, message) {
    field.style.borderColor = isValid ? 'var(--color-border)' : '#EF4444';
    if (!isValid && message) {
      let errorEl = field.parentElement.querySelector('.field-error');
      if (!errorEl) {
        errorEl = document.createElement('div');
        errorEl.className = 'field-error';
        errorEl.style.cssText = 'font-size:0.75rem;color:#EF4444;margin-top:0.25rem;';
        field.parentElement.appendChild(errorEl);
      }
      errorEl.textContent = message;
    } else {
      const errorEl = field.parentElement.querySelector('.field-error');
      if (errorEl) errorEl.remove();
    }
  }

  function clearError(field) {
    field.style.borderColor = 'var(--color-border)';
    const errorEl = field.parentElement.querySelector('.field-error');
    if (errorEl) errorEl.remove();
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const status = form.querySelector('.form-status');
    const data = Object.fromEntries(new FormData(form));

    // Validate all required fields
    const fields = form.querySelectorAll('[required]');
    let allValid = true;
    fields.forEach(field => {
      if (!validateField(field)) allValid = false;
    });

    if (!allValid) {
      if (status) {
        status.textContent = '⚠ Please fill in all required fields correctly.';
        status.style.cssText = 'display:block;color:#EF4444;background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.3);';
      }
      return;
    }

    // Show loading
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span style="display:inline-block;animation:rotate-slow 1s linear infinite;">⟳</span> Sending...';
    submitBtn.disabled = true;

    // Build mailto
    const subject = encodeURIComponent(`New Project Inquiry from ${data.name}${data.service ? ' — ' + data.service : ''}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\n` +
      `Email: ${data.email}\n` +
      (data.company ? `Company: ${data.company}\n` : '') +
      (data.service ? `Service: ${data.service}\n` : '') +
      (data.budget ? `Budget: ${data.budget}\n` : '') +
      `\n--- Project Details ---\n${data.message || ''}`
    );

    // Simulate delay then open mailto
    setTimeout(() => {
      if (status) {
        status.innerHTML = '✓ Perfect! Your email client should be opening now. If it didn\'t open, you can email us directly at <a href="mailto:hello@freelankarx.com" style="color:var(--color-accent);text-decoration:underline;">hello@freelankarx.com</a>';
        status.style.cssText = 'display:block;color:#10B981;background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);padding:1rem;';
      }

      window.location.href = `mailto:freelankarx@gmail.com?subject=${subject}&body=${body}`;

      // Reset after delay
      setTimeout(() => {
        form.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 3000);
    }, 800);
  }

  return { init };
})();
