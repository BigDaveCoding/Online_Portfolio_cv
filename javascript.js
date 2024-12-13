document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger,TextPlugin)

    console.log(gsap);

    const navLinks = document.querySelectorAll(".nav_link_link");

    navLinks.forEach((link) => {
        link.addEventListener("mouseover", () => {
            console.log("hovered");
            gsap.to(link, {
                scale: 1.1,
                duration: 0.2,
                ease: "power1.out"
            });
        });
        link.addEventListener("mouseleave", () => {
            gsap.to(link, { scale: 1, duration: 0.3, ease: "power1.out" });
        });
    });

});

