document.addEventListener("DOMContentLoaded", () => {

    // 1. Scroll Reveal Animation (Intersection Observer)
    const reveals = document.querySelectorAll(".reveal");
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("active");
            observer.unobserve(entry.target); // Unobserve after revealing once
        });
    }, revealOptions);

    reveals.forEach(reveal => revealObserver.observe(reveal));

    // 2. Magnetic Button Effect
    const magneticButtons = document.querySelectorAll('.magnetic-btn');

    magneticButtons.forEach(btn => {
        btn.addEventListener('mousemove', function (e) {
            const position = btn.getBoundingClientRect();
            const x = e.clientX - position.left - position.width / 2;
            const y = e.clientY - position.top - position.height / 2;

            // Smoothly pull the button towards the cursor
            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });

        btn.addEventListener('mouseleave', function () {
            // Reset position on leave
            btn.style.transform = 'translate(0px, 0px)';
        });
    });

    // 3. Custom Cursor Logic (Desktop only)
    const cursor = document.querySelector('.cursor');
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    // Follow mouse
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Smooth lag effect for cursor
    function animateCursor() {
        let distX = mouseX - cursorX;
        let distY = mouseY - cursorY;

        cursorX = cursorX + (distX * 0.15);
        cursorY = cursorY + (distY * 0.15);

        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;

        requestAnimationFrame(animateCursor);
    }

    // Only run cursor animation if pointer is fine (not touch)
    if (window.matchMedia("(pointer: fine)").matches) {
        animateCursor();
    }

    // Expand cursor on interactive elements
    const interactables = document.querySelectorAll('a, .magnetic-btn, .service-card');
    interactables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.width = '50px';
            cursor.style.height = '50px';
            cursor.style.backgroundColor = 'rgba(212, 175, 55, 0.2)'; // Subtle accent tint
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.width = '20px';
            cursor.style.height = '20px';
            cursor.style.backgroundColor = 'transparent';
        });
    });
});