/* =====================================
   ARMADO CONTRACTOR
   ADVANCED GSAP ANIMATIONS
===================================== */



document.addEventListener("DOMContentLoaded", () => {



    gsap.registerPlugin(
        ScrollTrigger
    );





    /* =====================================
       INITIAL STATES
    ===================================== */


    gsap.set(
        ".hero-content .reveal",
        {
            opacity: 0,
            y: 60
        }
    );



    gsap.set(
        ".service-card",
        {
            opacity: 0,
            y: 80
        }
    );



    gsap.set(
        ".project",
        {
            opacity: 0,
            y: 80
        }
    );









    /* =====================================
       HERO ENTRANCE
    ===================================== */


    const heroTimeline =
        gsap.timeline();



    heroTimeline

        .to(
            ".hero-content .eyebrow",
            {

                opacity: 1,

                y: 0,

                duration: 1,

                ease: "power4.out"

            }

        )


        .to(
            ".hero-title",
            {

                opacity: 1,

                y: 0,

                duration: 1.3,

                ease: "power4.out"

            },
            "-=.6"

        )



        .to(
            ".hero-description",
            {

                opacity: 1,

                y: 0,

                duration: 1

            },
            "-=.8"

        )



        .to(
            ".hero-buttons",
            {

                opacity: 1,

                y: 0,

                duration: .8

            },
            "-=.7"

        )



        .to(
            ".hero-stats",
            {

                opacity: 1,

                y: 0,

                duration: 1

            },
            "-=.5"

        );









    /* =====================================
       HERO VIDEO PARALLAX
    ===================================== */


    gsap.to(
        ".hero-video video",
        {


            scale: 1.15,


            scrollTrigger: {


                trigger: ".hero",


                start: "top top",


                end: "bottom top",


                scrub: true


            }


        }

    );









    /* =====================================
       SECTION HEADINGS
    ===================================== */


    gsap.utils.toArray(
        ".section-heading"
    )
        .forEach(title => {


            gsap.from(
                title,
                {


                    opacity: 0,

                    y: 80,


                    duration: 1,


                    scrollTrigger: {


                        trigger: title,


                        start: "top 80%",


                        toggleActions: "play none none reverse"


                    }


                }

            );



        });









    /* =====================================
       SERVICE CARDS
    ===================================== */


    gsap.to(
        ".service-card",
        {


            opacity: 1,

            y: 0,


            duration: 1,


            stagger: .15,


            ease: "power4.out",



            scrollTrigger: {


                trigger: ".service-grid",


                start: "top 75%",


            }


        }

    );









    /* =====================================
       IMAGE PARALLAX
    ===================================== */


    gsap.utils.toArray(
        ".service-image img, .project img"
    )
        .forEach(image => {


            gsap.to(
                image,
                {


                    y: -40,


                    scrollTrigger: {


                        trigger: image,


                        start: "top bottom",


                        end: "bottom top",


                        scrub: true


                    }


                }

            );



        });









    /* =====================================
       PROJECT GRID REVEAL
    ===================================== */


    gsap.to(
        ".project",
        {


            opacity: 1,

            y: 0,


            duration: 1.2,


            stagger: .2,


            ease: "power3.out",



            scrollTrigger: {


                trigger: ".project-grid",


                start: "top 75%"


            }


        }

    );









    /* =====================================
       PROCESS ANIMATION
    ===================================== */


    gsap.from(
        ".process-item",
        {


            opacity: 0,

            y: 70,


            duration: 1,


            stagger: .2,



            scrollTrigger: {


                trigger: ".process-grid",


                start: "top 80%"


            }


        }

    );









    /* =====================================
       CTA SCALE EFFECT
    ===================================== */


    gsap.from(
        ".cta-box",
        {


            scale: .85,

            opacity: 0,


            duration: 1.2,


            ease: "power4.out",



            scrollTrigger: {


                trigger: ".cta-box",


                start: "top 80%"


            }


        }

    );









    /* =====================================
       EYEBROW LINE ANIMATION
    ===================================== */


    gsap.utils.toArray(
        ".eyebrow"
    )
        .forEach(item => {


            gsap.from(
                item,
                {


                    letterSpacing: "10px",


                    opacity: 0,


                    duration: 1,


                    scrollTrigger: {


                        trigger: item,


                        start: "top 85%"


                    }


                }

            );



        });









    /* =====================================
       SMOOTH IMAGE REVEALS
    ===================================== */


    gsap.utils.toArray(
        ".service-image, .project"
    )
        .forEach(image => {


            ScrollTrigger.create({


                trigger: image,


                start: "top 80%",


                onEnter: () => {


                    image.classList.add(
                        "active"
                    );


                }


            });


        });









    /* =====================================
       FLOATING STATS
    ===================================== */


    gsap.to(
        ".stat",
        {


            y: -10,


            duration: 2,


            repeat: -1,


            yoyo: true,


            ease: "sine.inOut",



            stagger: .3


        }

    );









    /* =====================================
       MOBILE PERFORMANCE
    ===================================== */


    if (window.innerWidth < 700) {


        ScrollTrigger.config({

            ignoreMobileResize: true

        });


    }



});