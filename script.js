document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scroll for Navbar Links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Reveal Sections on Scroll
    function revealOnScroll() {
        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight * 0.85) {
                section.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // GSAP Animation for Hero Section
    gsap.from(".hero-content h2", { opacity: 0, y: 50, duration: 1.2, ease: "power2.out" });
    gsap.from(".hero-content p", { opacity: 0, y: 30, duration: 1.2, delay: 0.5, ease: "power2.out" });
    gsap.from(".button", { opacity: 0, scale: 0.8, duration: 1, delay: 1, ease: "power2.out" });
});
