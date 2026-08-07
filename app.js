/* =====================================
   ARMADO CONTRACTOR
   MAIN INTERACTIONS
===================================== */



document.addEventListener("DOMContentLoaded", () => {



    /* =====================================
       NAVBAR SCROLL EFFECT
    ===================================== */


    const navbar = document.querySelector(".navbar");


    window.addEventListener("scroll", () => {


        if (window.scrollY > 50) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }


    });







    /* =====================================
       MOBILE MENU
    ===================================== */


    const menuButton = document.querySelector(".menu-toggle");

    const navLinks = document.querySelector(".nav-links");



    if (menuButton) {


        menuButton.addEventListener("click", () => {


            menuButton.classList.toggle("active");


            navLinks.classList.toggle("active");



        });



    }





    /* Close mobile menu after clicking link */


    document.querySelectorAll(".nav-links a")
        .forEach(link => {


            link.addEventListener("click", () => {


                navLinks.classList.remove("active");


                menuButton.classList.remove("active");


            });


        });









    /* =====================================
       SMOOTH SCROLLING
    ===================================== */


    document.querySelectorAll('a[href^="#"]')
        .forEach(anchor => {


            anchor.addEventListener("click", function (e) {


                const target =
                    document.querySelector(
                        this.getAttribute("href")
                    );



                if (target) {


                    e.preventDefault();


                    target.scrollIntoView({

                        behavior: "smooth",

                        block: "start"

                    });


                }



            });


        });









    /* =====================================
       MAGNETIC BUTTON EFFECT
    ===================================== */


    const magneticButtons =
        document.querySelectorAll(".magnetic");



    magneticButtons.forEach(button => {


        button.addEventListener("mousemove", (e) => {


            const rect =
                button.getBoundingClientRect();


            const x =
                e.clientX - rect.left - rect.width / 2;


            const y =
                e.clientY - rect.top - rect.height / 2;



            button.style.transform =
                `
translate(
${x * 0.15}px,
${y * 0.15}px
)
`;



        });





        button.addEventListener("mouseleave", () => {


            button.style.transform =
                "translate(0,0)";



        });


    });









    /* =====================================
       SCROLL ACTIVE NAV LINKS
    ===================================== */


    const sections =
        document.querySelectorAll("section[id]");



    window.addEventListener("scroll", () => {


        let current = "";



        sections.forEach(section => {


            const sectionTop =
                section.offsetTop - 200;



            if (scrollY >= sectionTop) {

                current =
                    section.getAttribute("id");


            }



        });



        document
            .querySelectorAll(".nav-links a")
            .forEach(link => {


                link.classList.remove("active");



                if (
                    link.getAttribute("href")
                    ===
                    "#" + current
                ) {


                    link.classList.add("active");


                }



            });



    });









    /* =====================================
       NUMBER COUNTER ANIMATION
    ===================================== */


    const counters =
        document.querySelectorAll(".stat strong");



    let started = false;



    function startCounter() {


        if (started) return;


        const statsSection =
            document.querySelector(".hero-stats");



        const position =
            statsSection.getBoundingClientRect()
                .top;



        if (
            position <
            window.innerHeight - 100
        ) {


            started = true;



            counters.forEach(counter => {


                const target =
                    parseInt(
                        counter.innerText
                    );



                let count = 0;


                const speed =
                    target / 80;



                const update = () => {


                    count += speed;



                    if (count < target) {


                        counter.innerText =
                            Math.ceil(count) + "+";


                        requestAnimationFrame(update);


                    } else {


                        counter.innerText =
                            target + "+";


                    }


                };


                update();



            });



        }



    }



    window.addEventListener(
        "scroll",
        startCounter
    );









    /* =====================================
       HERO VIDEO OPTIMIZATION
    ===================================== */


    const heroVideo =
        document.querySelector(".hero-video video");



    if (heroVideo) {


        heroVideo.addEventListener(
            "loadeddata",
            () => {


                heroVideo.style.opacity = "1";


            });


    }









    /* =====================================
       IMAGE LAZY LOADING
    ===================================== */


    const images =
        document.querySelectorAll("img");



    images.forEach(img => {


        img.setAttribute(
            "loading",
            "lazy"
        );


    });









    /* =====================================
       PAGE LOAD EFFECT
    ===================================== */


    window.addEventListener(
        "load",
        () => {


            document.body.classList.remove(
                "loading"
            );



        });



});