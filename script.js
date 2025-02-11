document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".hero h2", { opacity: 0, y: -50, duration: 1.5, ease: "power2.out" });
    gsap.from(".hero p", { opacity: 0, y: 50, duration: 1.5, ease: "power2.out", delay: 0.3 });
    gsap.from(".hero .social-icons", { opacity: 0, scale: 0.5, duration: 1.5, ease: "elastic.out(1, 0.3)", delay: 0.6 });

    gsap.utils.toArray(".section").forEach((section) => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 85%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 50,
            duration: 1.5,
            ease: "power2.out"
        });
    });

    const nav = document.querySelector("nav");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });

    document.querySelectorAll(".social-icons a").forEach(icon => {
        icon.addEventListener("mouseenter", () => {
            gsap.to(icon, { scale: 1.2, duration: 0.3 });
        });
        icon.addEventListener("mouseleave", () => {
            gsap.to(icon, { scale: 1, duration: 0.3 });
        });
    });

    gsap.to("body", {
        backgroundPosition: "200% 0%",
        duration: 8,
        repeat: -1,
        ease: "linear"
    });
});
