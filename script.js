document.addEventListener("DOMContentLoaded", function () {
    // GSAP Hero Animation
    gsap.from(".hero h2", { duration: 1.5, opacity: 0, y: -50, ease: "power2.out" });
    gsap.from(".hero p", { duration: 1.5, opacity: 0, y: 50, delay: 0.5, ease: "power2.out" });
    
    // Scroll Animations for Sections
    const sections = document.querySelectorAll(".section");
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });
    
    sections.forEach(section => {
        observer.observe(section);
    });

    // Navbar Background Change on Scroll
    window.addEventListener("scroll", function () {
        let navbar = document.querySelector("nav");
        if (window.scrollY > 50) {
            navbar.style.background = "rgba(0, 0, 0, 0.9)";
        } else {
            navbar.style.background = "rgba(0, 0, 0, 0.8)";
        }
    });

    // Button Hover Effect
    document.querySelectorAll(".button").forEach(button => {
        button.addEventListener("mouseover", () => {
            gsap.to(button, { scale: 1.1, duration: 0.3, ease: "power1.out" });
        });
        button.addEventListener("mouseleave", () => {
            gsap.to(button, { scale: 1, duration: 0.3, ease: "power1.out" });
        });
    });
});
