document.addEventListener('DOMContentLoaded', function() {
  // Reveal Sections on Scroll using Intersection Observer
  const sections = document.querySelectorAll('.section');
  const observerOptions = { threshold: 0.3 };
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
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

  // Optional: Mobile Navigation Toggle (if you add a toggle button later)
  const navToggle = document.querySelector('.nav-toggle');
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      document.querySelector('nav ul').classList.toggle('active');
    });
  }

  // Social Icons Hover Effects using GSAP
  const socialLinks = document.querySelectorAll('.social-icons a');
  socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      gsap.to(link, { scale: 1.2, duration: 0.3 });
    });
    link.addEventListener('mouseleave', () => {
      gsap.to(link, { scale: 1, duration: 0.3 });
    });
  });

  // Handle testimonial form submission (demo purpose)
  const testimonialForm = document.getElementById('testimonial-form');
  if (testimonialForm) {
    testimonialForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for your review!');
      testimonialForm.reset();
    });
  }
});
document.addEventListener('DOMContentLoaded', function() {
  // Get the popup modal and its elements
  const popup = document.getElementById('klaviyoPopup');
  const closeBtn = document.querySelector('.klaviyo-popup .popup-close');
  const form = document.getElementById('klaviyoForm');

  // Show the popup after a delay (e.g., 7 seconds)
  setTimeout(() => {
    popup.style.display = 'block';
  }, 7000);

  // Close the popup when the close button is clicked
  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  // Close the popup if the user clicks outside the modal content
  window.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.style.display = 'none';
    }
  });

  // Handle form submission (for demo purposes; integrate with Klaviyo later)
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.email.value;
    // Replace the alert below with your Klaviyo API integration when ready.
    alert(`Thank you for subscribing with ${email}!`);
    popup.style.display = 'none';
    form.reset();
  });
});

