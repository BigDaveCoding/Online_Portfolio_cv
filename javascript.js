document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger, TextPlugin)

    console.log(gsap);

    name_title_anim_complete = false;

    navLinks = document.querySelectorAll('.nav_link_link');
    // animation for navigation links
    // link slighlty raises y position when hovered over
    // returns to original position when mouse leaves
    navLinks.forEach((link) => {
        link.addEventListener('mouseover', () => {
            console.log('hovering over link');
            gsap.to(link, {
                y: -2.5,
                duration: 0.2,
                stagger: 0.05,
                opacity: 1,
                ease: 'power2.inOut'
            });
        });

        link.addEventListener('mouseleave', () => {
            console.log('leaving link');
            gsap.to(link, {
                y: 0,
                duration: 0.2,
                stagger: 0.05,
                opacity: 0.8,
                ease: 'power2.inOut'
            }); 
        })
    });

    // selecting elements to animate
    myName = document.querySelector('#name');
    myTitle = document.querySelector('#title');
    ukTime = document.querySelector('#uk_time');
    ukDate = document.querySelector('#uk_date');
    console.log(myName);

    // function to fade in hero photos
    // Will be called in UpdateHeroSection function
    function fadeInHeroPhotos() {
        hero_pic_1 = document.querySelector('#david_pablo_sand_dunes_img');
        hero_pic_2 = document.querySelector('#hero_photo_1');
        hero_pic_3 = document.querySelector('#hero_photo_3');

        gsap.fromTo(hero_pic_1, {
            opacity: 0,
            y: 500
        }, {
            opacity: 1,
            y: 0,
            duration: 2.5,
            ease: 'power2.inOut'
        });

        gsap.fromTo(hero_pic_2, {
            opacity: 0,
            x: -600
        }, {
            opacity: 1,
            x: 0,
            duration: 3.3,
            ease: 'power2.inOut'
        });

        gsap.fromTo(hero_pic_3, {
            opacity: 0,
            y: -1000
        }, {
            opacity: 1,
            y: 0,
            duration: 3,
            ease: 'power2.inOut'
        });

    }

    //animations for name and title
    gsap.to(myName, {
        text: 'DAVID SMITH',
        duration: 1.3,
        ease: 'power2.inOut'
    });
    //returns name_title_anim_complete = true when animation is complete
    gsap.to(myTitle, {
        text: 'SOFTWARE DEVELOPER',
        duration: 1.6,
        ease: 'power2.inOut',
        onComplete: () => {
            name_title_anim_complete = true;
            console.log('name and title animation complete');
            console.log(name_title_anim_complete);
            updateHeroSection();
        }
    });

    // selecting elements to set 0 opacity on page load
    // animation will commence when name_title_anim_complete = true
    fade_in_navLinks = document.querySelector('#nav_links');
    hero_photos = document.querySelector('#hero_photos')
    hero_about_me = document.querySelector('#hero_about_text');
    hero_latest_projects = document.querySelector('#hero_latest_projects');

    // bool returns false on page load so styles of these elements are set to opacity 0
    if (!name_title_anim_complete) {
        fade_in_navLinks.style.opacity = 0;
        hero_photos.style.opacity = 0;
        hero_about_me.style.opacity = 0;
        hero_latest_projects.style.opacity = 0;
    }

    function updateHeroSection() {
        gsap.to(hero_photos, {
            opacity: 1,
            duration: 2,
            ease: 'power2.inOut',
            onComplete: () => {
                gsap.to(hero_about_me, {
                    opacity: 1,
                    duration: 1.5,
                    ease: 'power2.inOut'
                });
                gsap.to(hero_latest_projects, {
                    opacity: 1,
                    duration: 1.5,
                    ease: 'power2.inOut',
                });
                gsap.to(fade_in_navLinks, {
                    opacity: 0.8,
                    duration: 1,
                    ease: 'power2.inOut'
                });
            }
        });
        fadeInHeroPhotos();
    }


    // updates the uk time and date every minute
    function updateUKTimeandDate() {
        const ukTimeElement = document.querySelector('#uk_time');
        const ukDateElement = document.querySelector('#uk_date');

        const now = new Date();
        const options = { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit', hour12: true };
        const timeString = now.toLocaleTimeString('en-GB', options);
        const dateString = now.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

        gsap.to(ukTimeElement, {
            text: timeString.toUpperCase(),
            duration: 2,
            ease: 'power2.inOut'
        });
        gsap.to(ukDateElement, {
            text: dateString.toUpperCase(),
            duration: 2,
            ease: 'power2.inOut'
        });

        // ukTimeElement.textContent = timeString.toUpperCase();
        // ukDateElement.textContent = dateString.toUpperCase();
    }
    updateUKTimeandDate();
    setInterval(updateUKTimeandDate, 10000);
});

