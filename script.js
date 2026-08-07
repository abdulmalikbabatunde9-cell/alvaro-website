document.addEventListener("DOMContentLoaded", () => {

    // 1. Subtle Parallax effect on the hero image to match Lavande's feel
    const heroImage = document.querySelector('.hero-image');

    window.addEventListener('scroll', () => {
        if (heroImage) {
            let scrollPosition = window.pageYOffset;
            // Moves the image down slightly as you scroll down
            heroImage.style.transform = `translateY(${scrollPosition * 0.15}px) scale(1.05)`;
        }
    });

    // 2. Elegant Scroll Reveal Intersection Observer
    // Triggers elements to softly slide up and fade in
    const revealElements = document.querySelectorAll(".scroll-reveal");

    const revealOptions = {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Only animate once
        });
    }, revealOptions);

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // 3. Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});