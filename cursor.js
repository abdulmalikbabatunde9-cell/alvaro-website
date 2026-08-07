/* =====================================
   ARMADO CONTRACTOR
   CUSTOM CURSOR SYSTEM
===================================== */



document.addEventListener("DOMContentLoaded", () => {



    // Disable on touch devices

    if (
        window.matchMedia("(pointer: coarse)").matches
    ) {

        return;

    }






    /* CREATE CURSOR ELEMENTS */


    const cursor =
        document.createElement("div");


    const cursorFollower =
        document.createElement("div");



    cursor.className = "cursor";

    cursorFollower.className = "cursor-follower";



    document.body.appendChild(cursor);

    document.body.appendChild(cursorFollower);







    /* CURSOR POSITION */


    let mouseX = 0;

    let mouseY = 0;

    let followerX = 0;

    let followerY = 0;





    window.addEventListener(
        "mousemove",
        (e) => {


            mouseX = e.clientX;

            mouseY = e.clientY;



            cursor.style.left =
                mouseX + "px";


            cursor.style.top =
                mouseY + "px";


        });







    /* SMOOTH FOLLOWER */


    function animateCursor() {


        followerX +=
            (mouseX - followerX) * .12;


        followerY +=
            (mouseY - followerY) * .12;



        cursorFollower.style.left =
            followerX + "px";



        cursorFollower.style.top =
            followerY + "px";



        requestAnimationFrame(
            animateCursor
        );


    }


    animateCursor();







    /* HOVER STATES */


    const interactive =
        document.querySelectorAll(
            "a,button,.service-card,.project"
        );



    interactive.forEach(item => {


        item.addEventListener(
            "mouseenter",
            () => {


                cursor.classList.add(
                    "active"
                );


                cursorFollower.classList.add(
                    "active"
                );


            });


        item.addEventListener(
            "mouseleave",
            () => {


                cursor.classList.remove(
                    "active"
                );


                cursorFollower.classList.remove(
                    "active"
                );


            });


    });







    /* CLICK EFFECT */


    document.addEventListener(
        "mousedown",
        () => {


            cursor.classList.add(
                "click"
            );


        });


    document.addEventListener(
        "mouseup",
        () => {


            cursor.classList.remove(
                "click"
            );


        });



});